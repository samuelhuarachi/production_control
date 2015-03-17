<?php

class Admin_ProjetosController extends SON_Controller_Action
{

    public function init()
    {
        parent::init();
        /* Initial ize action controller here*/

        //This will catch any messege set in any action in this controller and send
        //it to the view on the next request.
        if ($this->_helper->FlashMessenger->hasMessages()) {
            $this->view->messages = $this->_helper->FlashMessenger->getMessages();
        }

        $this->filtros = new Zend_Session_Namespace('filtros');
        $this->funcoes = new Funcoes_Geral();
        $this->_modelGrupo = new Application_Model_Grupo();
    }

    public function editaretapaAction() {
        $id = $this->_request->getParam('id', 0);
        $idGrupo = $this->_request->getParam('idgrupo', 0);

        //Adicionar estapas a um projeto pré existente
        $frm = new SON_Form_Addetapas();
        $frm->removeElement('todos');
        $this->_modelEtapas = new Application_Model_Etapasprojeto();
        $this->_modelProjeto = new Application_Model_Projetos();
        $funcoes = new Funcoes_Geral();

        $info = $this->_modelEtapas->find($id);

        $info['inicio'] = $funcoes->volta_data_ao_normal($info['inicio']);
        $info['fim'] = $funcoes->volta_data_ao_normal($info['fim']);

        $frm->populate($info);

        //Se $_POST
        if($this->_request->isPost()) {
            if($frm->isValid($this->_request->getPost())) {
                $data = $frm->getValues();
                $data['id'] = $id;

                if ($data['inicio'] == "") {
                    $data['inicio'] = '00/00/0000 00:00:00';
                }
                if ($data['fim'] == "") {
                    $data['fim'] = '00/00/0000 00:00:00';
                }
                $inicio = strtotime(  str_replace('/', '-',$data['inicio']) );
                $data['inicio'] = date( 'Y-m-d H:i:s', $inicio );

                $fim = strtotime(  str_replace('/', '-',$data['fim']) );
                $data['fim'] = date( 'Y-m-d H:i:s', $fim );

                $data['id_funcionarios'] = (int)$data['id_funcionarios'];

                if(strtoupper($data['status']) == 'CONCLUIDO') {
                    $modelConclusao = new Application_Model_Logconclusao();
                    $findLog = $modelConclusao->find((int)$this->_request->getParam('idprojeto', 0));
                    if(!$findLog) {
                        $data2['id_etapa'] = (int)$data['id'];
                        $data2['dia'] = $funcoes->formata_data_para_padrao_mysql($funcoes->hoje());
                        $modelConclusao->save($data2);
                    }
                }

                unset($data['todos']);

                $this->_modelEtapas->save($data);

                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">A etapa '".$data['nome']."' foi atualizada no sistema</div>");
                //Redireciona
                $this->_redirect('/admin/projetos/etapas/id/' . $this->_request->getParam('idprojeto', 0) .'/idgrupo/' . $idGrupo );
            }
        }

        $frm->getElement('submit')->setLabel('Atualizar etapa');
        $this->view->frm = $frm;
        $this->view->idProjeto = $this->_request->getParam('idprojeto', 0);
        $this->view->grupo_id = $this->_request->getParam('idgrupo', 0);
        $this->view->dataProject = $this->_modelProjeto->find((int)$this->_request->getParam('idprojeto', 0));
    }

    public function adicionarAction() {
        
        $frm = new SON_Form_Projetos();
        $this->_dbProjetos = new Application_Model_Projetos();
        $grupo_id = $this->_request->getParam('idgrupo', '0');
        $this->filtros->grupo = $grupo_id;
        $this->view->dataGrupo = $this->_modelGrupo->find($grupo_id);
        $this->view->grupo_id = $grupo_id;
        $this->view->dadoscliente = $this->_modelGrupo->findcliente($grupo_id);

        if($this->_request->isPost()) {
            if(!isset($_POST['pesquisa'])) {
                if ($frm->isValid($this->_request->getPost())) {
                    $data = $frm->getValues(); // Informações que serão inseridas
                    
                    $inicio = strtotime(  str_replace('/', '-',$data['inicio']) );
                    $data['inicio'] = date( 'Y-m-d H:i:s', $inicio );

                    $fim = strtotime(  str_replace('/', '-',$data['fim']) );
                    $data['fim'] = date( 'Y-m-d H:i:s', $fim );
                    $data['lancar'] = 0;
                    $data['id_grupo'] = (int)$grupo_id;

                    $this->_dbProjetos->save($data); //salva informações no banco de dados

                    //Flash mensager avisando que o usuário foi cadastrado com sucesso
                    $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">O projeto ".$data['nome']." foi inserido no sistema</div>");
                    //Redireciona
                    $this->_redirect('/admin/projetos/adicionar/idgrupo/'.$grupo_id);

                }
            }

            if(isset($_POST['pesquisa'])) {
                if($_POST['date_de'] <> "")
                {
                    $this->filtros->de = $this->funcoes->formata_data_para_padrao_mysql( $_POST['date_de']);
                } else {
                    throw new Exception('Data inválida');
                }

                if($_POST['date_ate'] <> ""){
                    $this->filtros->ate =  $this->funcoes->formata_data_para_padrao_mysql( $_POST['date_ate']);
                } else {
                    throw new Exception('Data inválida');
                }

                if($_POST['empresas'] <> "0"){
                    $this->filtros->empresa = (int)$_POST['empresas'];
                } else {
                    $this->filtros->empresa = 0;
                }

            }
        }

        $this->carregainfocomum();


        $frm->getElement('submit')->setLabel('Adicionar projeto');
        $this->view->frm = $frm;

    }

    public function lancarAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);
        $id = $this->_request->getParam('id', '0');
        $this->_dbProjetos = new Application_Model_Projetos();

        $data['id'] = (int)$id;
        $data['lancar'] = 1;

        $this->_dbProjetos->save($data);
        $this->_redirect('admin/projetos/add');

    }

    public function carregainfocomum() {
        // Gera na view as variáveis
        // filtroParam, 
        // registros
        //data_de
        //data_ate
        $this->_dbClientes = new Application_Model_Clientes();
        

        //Se nao existir a sesseão de
        if(!isset($this->filtros->de)) {
            $this->filtros->de = date('Y-m-d H:i:s', strtotime("-15 days"));
        }
        //Se não existir a sessão até
        if(!isset($this->filtros->ate)) {
            $this->filtros->ate = date('Y-m-d H:i:s', strtotime("+15 days"));
        }
        $this->view->data_de = date('d/m/Y',strtotime($this->filtros->de));
        $this->view->data_ate = date('d/m/Y',strtotime($this->filtros->ate));



        $this->_dbProjetos = new Application_Model_Projetos();
        $filtroParam = $this->_request->getParam('filtro', '0');
        $this->view->filtroParam = $filtroParam;

        $filtroSQL = array();
        //$filtroSQL['lancar = ?'] = 0;
        $data_atual =  $this->funcoes->formata_data_para_padrao_mysql(date("d/m/Y")); 
        if($filtroParam == 'atrasado') {
            $filtroSQL['fim <= ?'] = $data_atual;
        }
        if($this->filtros->de <> "") {
            $filtroSQL['inicio >= ?'] = $this->filtros->de;
        }
        if($this->filtros->ate <> "") {
            $filtroSQL['inicio <= ?'] = $this->filtros->ate;
        }
        // if ($this->filtros->empresa <> 0) {
        //     $filtroSQL['id_cliente = ?'] = $this->filtros->empresa;
        // }
        $filtroSQL['id_grupo = ?'] = (int)$this->filtros->grupo;


        //Listar os projetos
        $registros = $this->_dbProjetos->search(array('page' => $this->_request->getParam('pagina', 1),
                'conditions' => $filtroSQL
            )); 
        $this->view->registros = $registros;
        $this->view->clientes = $this->_dbClientes->fetchPairs();
    }

    public function addAction() {
        $this->carregainfocomum();

    }

    public function indexAction()
    {
        $this->_dbProjetos = new Application_Model_Projetos();
        $this->_dbClientes = new Application_Model_Clientes();

        $filtros = new Zend_Session_Namespace('filtros');
        $funcoes = new Funcoes_Geral();
        $filtroParam = $this->_request->getParam('filtro', '0');
        $this->view->filtroParam = $filtroParam;

        //Gerencia os filtros da pesquisa - inicio
        if($this->_request->isPost()) {

            if($_POST['date_de'] <> "")
            {
                $filtros->de = $funcoes->formata_data_para_padrao_mysql( $_POST['date_de']);
            } else {
                throw new Exception('Data inválida');
            }

            if($_POST['date_ate'] <> "") {
                $filtros->ate =  $funcoes->formata_data_para_padrao_mysql( $_POST['date_ate']);
            } else {
                throw new Exception('Data inválida');
            }

            if($_POST['empresas'] <> "0") {
                $filtros->empresa = (int)$_POST['empresas'];
            } else {
                $filtros->empresa = 0;
            }
        }

        //Se nao existir a sesseão de
        if(!isset($filtros->de)) {
            $filtros->de = date('Y-m-d H:i:s', strtotime("-15 days"));
        }
        //Se não existir a sessão até
        if(!isset($filtros->ate)) {
            $filtros->ate = date('Y-m-d H:i:s', strtotime("+15 days"));
        }
        $this->view->data_de = date('d/m/Y',strtotime($filtros->de));
        $this->view->data_ate = date('d/m/Y',strtotime($filtros->ate));


        $filtroSQL = array();
        $filtroSQL['lancar = ?'] = 1;
        $data_atual =  $funcoes->formata_data_para_padrao_mysql(date("d/m/Y")); 
        if($filtroParam == 'atrasado') {
            $filtroSQL['fim <= ?'] = $data_atual;
        }
        if($filtros->de <> "") {
            $filtroSQL['inicio >= ?'] = $filtros->de;
        }
        if($filtros->ate <> "") {
            $filtroSQL['inicio <= ?'] = $filtros->ate;
        }
        if ($filtros->empresa <> 0) {
            $filtroSQL['id_cliente = ?'] = $filtros->empresa;
        }
        //Gerencia os filtros da pesquisa - fim


        $registros = $this->_dbProjetos->search(array('page' => $this->_request->getParam('pagina', 1),
                'conditions' => $filtroSQL
            )); 

        if(isset($filtros->empresa)) {
            $this->view->valor = $filtros->empresa;
        }else {
            $this->view->valor = 0;
        }
        
        $this->view->registros = $registros;
        $this->view->clientes = $this->_dbClientes->fetchPairs();
        
    }

    public function deletarprojetoAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        $id = $this->_request->getParam('id', 0);
        $idGrupo = $this->_request->getParam('idgrupo', 0);
        $this->_dbProjetos = new Application_Model_Projetos();

        $this->_dbProjetos->delete($id);
        //Flash mensager avisando que o usuário foi cadastrado com sucesso
        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">O projeto ".$data['nome']." foi excluído</div>");
        //Redireciona
        $this->_redirect('admin/projetos/adicionar/idgrupo/'.$idGrupo);
    }

    public function etapasAction() {
        $frm = new SON_Form_Projetos();
        $this->_dbProjetos = new Application_Model_Projetos();
        $this->_dbGrupo = new Application_Model_Grupo();
        $dataProjeto = $this->_dbProjetos->find($this->_request->getParam('id', 0));
        $etapas = $this->_dbProjetos->findEtapas($this->_request->getParam('id', 0));
        $idGrupo = $this->_request->getParam('idgrupo', 0);
        $this->view->grupo_id = $idGrupo;
        $this->view->clienteData = $this->_dbGrupo->findcliente($idGrupo);
        
        //Trata da atualização das infomrações do usuário
        if($this->_request->isPost()) {
            if($frm->isValid($this->_request->getPost())) {
                $data = $frm->getValues(); // Informações que serão inseridas na tabela dos usuários
                $data['id'] = (int)$this->_request->getParam('id', 0);

                $inicio = strtotime(  str_replace('/', '-',$data['inicio']) );
                $data['inicio'] = date( 'Y-m-d H:i:s', $inicio );
                $fim = strtotime(  str_replace('/', '-',$data['fim']) );
                $data['fim'] = date( 'Y-m-d H:i:s', $fim );

                $this->_dbProjetos->save($data);
                
                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage(
                    "<div class=\"alert alert-success\" role=\"alert\">O projeto ".
                    $data['nome']." foi atualizado com sucesso</div>");
                //Redireciona
                $this->_redirect('admin/projetos/etapas/id/' . 
                    $data[id].'/idgrupo/'.$this->_request->getParam('idgrupo', 0));
            }
        }

        $dataProjeto['inicio'] = date('d/m/Y',strtotime($dataProjeto['inicio']));
        $dataProjeto['fim'] = date('d/m/Y',strtotime($dataProjeto['fim']));

        $this->view->kilometragem = $dataProjeto['km'];
        $frm->populate($dataProjeto);
        $frm->getElement('submit')->setLabel('Atualizar informações do projeto');
        $this->view->frm = $frm;
        $this->view->idProjeto = $this->_request->getParam('id', 0); //pega a id do projeto
        $this->view->etapas = $etapas;
        $this->view->porcentagem = $this->calculoPorcentagemConclusao($etapas);
    }

    public function calculoPorcentagemConclusao($etapas) {
            //cálculo do progresso
            $total = 0;
            $concluido = 0;
            foreach ($etapas as $key => $value) {
                if($value['status'] == 'concluido')
                    $concluido += 1;
                $total= $total + 1;
            }

            return number_format(($concluido * 100) / $total, 2);
    }


    public function estapasexcluirAction() {
        
        $idEtapa = $this->_request->getParam('id', 0);
        $idProjeto = $this->_request->getParam('idprojeto', 0);
        $idgrupo = $this->_request->getParam('idgrupo', 0);


        $this->_modelEtapas = new Application_Model_Etapasprojeto();
        $this->_modelEtapas->delete($idEtapa);


        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);


        //Flash mensager avisando que o usuário foi cadastrado com sucesso
        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">A etapa foi excluída do sistema</div>");
        

        $this->_redirect('/admin/projetos/etapas/id/' . $idProjeto . '/idgrupo/'.$idgrupo);
    }

    public function addetapasAction() {
        //Adicionar etapas a um projeto pré existente
        $frm = new SON_Form_Addetapas();


        //Se $_POST
        if($this->_request->isPost()) {

            if($frm->isValid($this->_request->getPost())) {
                $data = $frm->getValues();
                $this->_modelEtapas = new Application_Model_Etapasprojeto();

                if ($data['inicio'] == "") {
                    $data['inicio'] = '00/00/0000 00:00:00';
                }
                if ($data['fim'] == "") {
                    $data['fim'] = '00/00/0000 00:00:00';
                }
                $inicio = strtotime(  str_replace('/', '-',$data['inicio']) );
                $data['inicio'] = date( 'Y-m-d H:i:s', $inicio );

                $fim = strtotime(  str_replace('/', '-',$data['fim']) );
                $data['fim'] = date( 'Y-m-d H:i:s', $fim );

                $data['id_funcionarios'] = (int)$data['id_funcionarios'];
                $data['id_projetos'] = (int)$this->_request->getParam('id', 0);

                if($data['todos'] == '1') {
                    unset($data['todos']);
                    // Aplica os dados da etapa a todos os projetos
                    // que estão nesse grupo
                    $this->_modelEtapas->savetodos($data, $this->_request->getParam('idgrupo', 0));
                } else {
                    unset($data['todos']);
                    $this->_modelEtapas->save($data);
                }
                

                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">A etapa '".$data['nome']."' foi cadastrada no sistema</div>");
                //Redireciona
                $this->_redirect('/admin/projetos/etapas/id/'
                 . $this->_request->getParam('id', 0).'/idgrupo/'.$this->_request->getParam('idgrupo', 0));
            }
        }

        $frm->getElement('submit')->setLabel('Adicionar nova etapa');
        $this->view->frm = $frm;
        $this->view->idProjeto = $this->_request->getParam('id', 0);
        $this->view->grupo_id = $this->_request->getParam('idgrupo', 0);
    }

    


}


