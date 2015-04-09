<?php


class Admin_FuncionariosController extends SON_Controller_Action
{

    public function init()
    {
        parent::init();
        /* Initialize action controller here */


        //This will catch any messege set in any action in this controller and send
        //it to the view on the next request.
        if ($this->_helper->FlashMessenger->hasMessages()) {
            $this->view->messages = $this->_helper->FlashMessenger->getMessages();
        }
    }

    public function indexAction()
    {  }

    public function deleteAction() {
        $this->_dbUser = new Application_Model_User();
        //$this->_dbFuncionarios = new Application_Model_Funcionarios();

        $this->_dbUser->delete($this->_request->getParam('id',0));
        //$this->_dbFuncionarios->delete($this->_request->getParam('id',0));

        $this->_helper->flashMessenger->addMessage("O funcionário foi deletado do sistema");

        $this->_redirect('/admin/funcionarios/visualizar');
    }

    public function excluirferiasAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);
        $this->_dbFerias = new Application_Model_Ferias();
        $feriasID = $this->_request->getParam('id', 0);
        $userID = $this->_request->getParam('userid', 0);

        $this->_dbFerias->delete($feriasID);
        $this->_redirect('admin/funcionarios/editar/id/'.$userID);
    }

    public function ajaxexcluirAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        $this->_dbUser = new Application_Model_User();
        //$this->_dbUser->delete($_POST['id']);
        echo 'Usuário ' . $_POST['id'] . ' foi excluído <img src="/images/trash-icon.png" />. ';
    }

    public function editarferiasAction() {
        $funcoes = new Funcoes_Geral();
        $feriasID = $this->_request->getParam('id', 0);
        $userID = $this->_request->getParam('userid', 0);
        $this->_dbFerias = new Application_Model_Ferias();
        $feriasDados = $this->_dbFerias->find($feriasID);

        $this->view->dias =  $funcoes->diff2(date('d/m/Y',strtotime($feriasDados['inicio'])) , date('d/m/Y',strtotime($feriasDados['fim']))  );
        
        $feriasDados['inicio'] = $funcoes->volta_data_ao_normal($feriasDados['inicio']);
        $feriasDados['fim'] = $funcoes->volta_data_ao_normal($feriasDados['fim']);

        $formFerias = new SON_Form_Ferias();
        $formFerias->populate($feriasDados);

        if($this->_request->isPost() ) {
            if($formFerias->isValid($this->_request->getPost())) {
                $data = $formFerias->getValues();
                unset($data['ferias']);
                $data['id'] = $feriasID;
                $data['inicio'] = $funcoes->formata_data_para_padrao_mysql($data['inicio']);
                $data['fim'] = $funcoes->formata_data_para_padrao_mysql($data['fim']);

                $this->_dbFerias->save($data);

                $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">Os dados das férias foram atualizados</div>");
                $this->_redirect('admin/funcionarios/editarferias/id/'.$feriasID.'/userid/' . $userID);
            }
        }

        $this->view->formFerias = $formFerias;
        $this->view->userID = $userID;

    }

    public function editarAction() 
    {
        $funcoes = new Funcoes_Geral();
        $this->_dbUser = new Application_Model_User();
        $this->_dbFerias = new Application_Model_Ferias();
        $funcionario = $this->_dbUser->find($this->_request->getParam('id', 0));

        $formFerias = new SON_Form_Ferias();
        $formularioFuncionarios = new SON_Form_Funcionarios();
        $formularioFuncionarios->getElement('password')->removeValidator('NotEmpty');
        $formularioFuncionarios->getElement('password')->setRequired(false);

        if($funcionario) {
            $funcionario['0']['admissao'] = $funcoes->volta_data_ao_normal($funcionario['0']['admissao']);
            $formularioFuncionarios->populate($funcionario['0']);
        }
        
        //Trata da atualização das informações do funcionário
        if($this->_request->isPost() && isset($_POST['funcionarios'])) {
            if($formularioFuncionarios->isValid($this->_request->getPost())){
                $dataUser = $formularioFuncionarios->getValues(); // Informações que serão inseridas na tabela dos usuários
                $dataUser['id'] = $this->_request->getParam('id', 0);
                $dataFuncionarios = array(); // Informações que serão inseridas na tabela dos funcionários
                $dataFuncionarios['id'] = (int)'11111111111111';
                $dataFuncionarios['id_user'] = (int)$dataUser['id'];
                $dataFuncionarios['rg'] = $dataUser['rg'];
                $dataFuncionarios['data_nascimento'] = $dataUser['data_nascimento'];
                $dataFuncionarios['admissao'] = $funcoes->formata_data_para_padrao_mysql($dataUser['admissao']);
                $dataFuncionarios['salario'] = $dataUser['salario'];
                $dataFuncionarios['cargo'] = $dataUser['cargo'];
                unset($dataUser['cargo']);
                unset($dataUser['salario']);
                unset($dataUser['rg']);
                unset($dataUser['data_nascimento']);
                unset($dataUser['admissao']);
                unset($dataUser['funcionarios']);
                $this->_dbUser = new Application_Model_User();
                $this->_dbUserDbtable = new Application_Model_DbTable_User();
                $this->_dbUser->save($dataUser); //salva informações no banco de dados
                $this->_dbFuncionarios = new Application_Model_Funcionarios();
                $this->_dbFuncionarios->save($dataFuncionarios); //salva informações no banco de dados
                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("O funcionário(a) ".$dataUser['nome']." foi atualizado com sucesso");
                //Redireciona
                $this->_redirect('admin/funcionarios/visualizar');
            }
        }

        //Trata da atualização das infomrações das férias
        if($this->_request->isPost() && isset($_POST['ferias'])) {
            if($formFerias->isValid($this->_request->getPost())){
                $dataFerias = $formFerias->getValues();
                unset($dataFerias['ferias']);
                $dataFerias['inicio'] = $funcoes->formata_data_para_padrao_mysql($dataFerias['inicio']);
                $dataFerias['fim'] = $funcoes->formata_data_para_padrao_mysql($dataFerias['fim']);
                $dataFerias['id_user'] = (int)$this->_request->getParam('id', 0);
                $this->_dbFerias->save($dataFerias);
                $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">Férias adicionadas no sistema</div>");
                $this->_redirect('admin/funcionarios/editar/id/' . $this->_request->getParam('id', 0));

            }
        }



        $formularioFuncionarios->getElement('submit')->setLabel('Atualizar as informações do funcionário');
        $formFerias->getElement('submit')->setLabel('Adicionar férias');
        $formFerias->getElement('observacoes')->setOptions(array('cols' => '30', 'rows' => '4'));
        $this->view->formularioFuncionarios = $formularioFuncionarios;
        $this->view->formFerias = $formFerias;
        $this->view->userFerias =  $this->_dbFerias->getFerias($this->_request->getParam('id', 0));
        $this->view->funcoes = $funcoes;
        $this->view->userID = $this->_request->getParam('id', 0);


    }

    public function visualizarAction()
    {
        $this->view->funcoes = new Funcoes_Geral();
        $this->_dbUser = new Application_Model_User();
        $this->view->registros = $this->_dbUser->search(array('page' => $this->_request->getParam('pagina', 1))); 
    
    }
    public function cadastrarAction()
    {
        $funcoes = new Funcoes_Geral();
    	$formularioCadastro = new SON_Form_Funcionarios();
        $formularioCadastro->getElement('submit')->setLabel('Cadastrar novo funcionário');

        //Se $_POST
    	if($this->_request->isPost()) {
            
            //Se formulário é válido
            if($formularioCadastro->isValid($this->_request->getPost())){
                $dataUser = $formularioCadastro->getValues(); // Informações que serão inseridas na tabela dos usuários
                $dataFuncionarios = array(); // Informações que serão inseridas na tabela dos funcionários

                $dataFuncionarios['rg'] = $dataUser['rg'];
                $dataFuncionarios['data_nascimento'] = $dataUser['data_nascimento'];
                $dataFuncionarios['admissao'] = $funcoes->formata_data_para_padrao_mysql($dataUser['admissao']);
                $dataFuncionarios['salario'] = $dataUser['salario'];
                $dataFuncionarios['cargo'] = $dataUser['cargo'];


                unset($dataUser['cargo']);
                unset($dataUser['salario']);
                unset($dataUser['rg']);
                unset($dataUser['data_nascimento']);
                unset($dataUser['admissao']);
                unset($dataUser['funcionarios']);

                $this->_dbUser = new Application_Model_User();
                $this->_dbUserDbtable = new Application_Model_DbTable_User();
                $dataUser['tipo'] = '2'; //define o tipo do usário como 2 = funcionário
                
                $this->_dbUser->save($dataUser); //salva informações no banco de dados

                $last_id = $this->_dbUserDbtable->getAdapter()->lastInsertId(); //Pega a id
                //do usuário que acabou de ser inserido


                $dataFuncionarios['id_user'] = (int)$last_id;
                $data_atual = new Zend_Date();
                $dataFuncionarios['data_cadastro'] = $data_atual->toString('YYYY-MM-dd HH:mm:ss');


                $this->_dbFuncionarios = new Application_Model_Funcionarios();
                $this->_dbFuncionarios->save($dataFuncionarios); //salva informações no banco de dados
                
                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("O funcionário(a) ".$dataUser['nome']." foi cadastrado no sistema");
                //Redireciona
                $this->_redirect('/admin/funcionarios/cadastrar');
            }
        }



    	$this->view->formularioCadastro = $formularioCadastro;
    }
}