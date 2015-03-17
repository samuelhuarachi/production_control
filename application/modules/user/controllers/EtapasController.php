<?php

class User_EtapasController extends SON_Controller_Action
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

        $this->funcoes = new Funcoes_Geral();
    }

    public function mudarstatusAction() {
        $idEtapa = $this->_request->getParam('id', 0);
        $status = $this->_request->getParam('status', 0);
        $idgrupo = $this->_request->getParam('idgrupo', 0);
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        $this->_dbEtapas = new Application_Model_Etapasprojeto();

        $etapaInfo = $this->_dbEtapas->find($idEtapa);
        if( $this->userId != $etapaInfo['id_funcionarios']){
            echo '<font color="green">VÕCê NAÂO ES`TA AUTORZADO A fazz isssosos!</font>';
            echo '<img src="http://upload.wikimedia.org/wikipedia/pt/9/98/Bad_%C3%A1lbum.jpg" />';
            die();
        }

        if($status == 'andamento') {
            $status = 'em andamento';
        }


        //Atualiza informações etapa
        $data['id'] = (int)$idEtapa;
        $data['status'] = $status;
        $this->_dbEtapas->save($data);

        //Flash mensager avisando que o usuário foi cadastrado com sucesso
        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">Status alterado!</div>");


        if($status == 'concluido') {
            $modelConclusao = new Application_Model_Logconclusao();
            $findLog = $modelConclusao->find($data['id']);
            if($findLog) {
                $data2['id'] = $findLog[0]['id'];
                $data2['id_etapa'] = (int)$idEtapa;
                $data2['dia'] = date('Y-m-d H:i:s');
                $modelConclusao->save($data2);
            } else {
                throw new Exception('Log da etapa não foi encontrado');
            }
        }

        //Redireciona para a página anterior
        $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos'].'/idgrupo/'.$idgrupo);
        //url back: user/projetos/visualizar/id/21


        
    }

    public function removerusuarioetapaAction() {
        $idEtapa = $this->_request->getParam('id', 0);
        $idgrupo = $this->_request->getParam('idgrupo', 0);
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);


        $this->_dbEtapas = new Application_Model_Etapasprojeto();

        $etapaInfo = $this->_dbEtapas->find($idEtapa);

        if( $this->userId != $etapaInfo['id_funcionarios']){
            echo '<font color="green">VÕCê NAÂO ES`TA AUTORZADO A deletar essa tarefa!</font>';
            echo '<img src="http://upload.wikimedia.org/wikipedia/pt/9/98/Bad_%C3%A1lbum.jpg" />';
            die();
        }

        //Atualiza informações etapa
        $data['id'] = (int)$idEtapa;
        $data['id_funcionarios'] = 0;
        $data['status'] = 'aberto';
        $this->_dbEtapas->save($data);

        //Flash mensager avisando que o usuário foi cadastrado com sucesso
        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">Tarefa removida!</div>");


        //Redireciona para a página anterior
        $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos'].'/idgrupo/'.$idgrupo);
        //url back: user/projetos/visualizar/id/21
    }


    function adicionarAction() {
        $idgrupo = $this->_request->getParam('idgrupo', 0);
        $idEtapa = $this->_request->getParam('id', 0);
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);


        $this->_dbEtapas = new Application_Model_Etapasprojeto();
        //Controla a tabela que irá administrar
        //quando uma etapa foi iniciada.
        //E quando um etapa foi concluída
        $this->_dbLog = new Application_Model_Logconclusao();

        $etapaInfo = $this->_dbEtapas->find($idEtapa);

        //Verifica se a etapa está disponível
        if($etapaInfo['id_funcionarios'] != 0) {

            //Flash mensager avisando que o usuário foi cadastrado com sucesso
            $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">Já existe um funcionário nessa tarefa</div>");

            $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos'].'/idgrupo/'.$idgrupo);
            exit();

        }

        //Atualiza informações etapa
        $data['id'] = (int)$idEtapa;
        $data['id_funcionarios'] = $this->userId;
        $data['status'] = 'em andamento';
        $this->_dbEtapas->save($data);

        //Marca a hora que o usuário iniciou esta etapa
        $dataLog = array();
        $dataLog['id_etapa'] = (int)$idEtapa;
        $dataLog['inicio'] = date('Y-m-d H:i:s');
        $this->_dbLog->save($dataLog);

        //Flash messager avisando que o usuário foi cadastrado com sucesso
        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">Tarefa adicionada!</div>");


        //Redireciona para a página anterior
        $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos'].'/idgrupo/'.$idgrupo);

    }



}