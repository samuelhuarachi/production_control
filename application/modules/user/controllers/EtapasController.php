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
    }

    public function mudarstatusAction() {
        $idEtapa = $this->_request->getParam('id', 0);
        $status = $this->_request->getParam('status', 0);
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

        }

        //Redireciona para a página anterior
        $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos']);
        //url back: user/projetos/visualizar/id/21


        
    }

    public function removerusuarioetapaAction() {
        $idEtapa = $this->_request->getParam('id', 0);
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
        $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos']);
        //url back: user/projetos/visualizar/id/21
    }


    function adicionarAction() {
        $idEtapa = $this->_request->getParam('id', 0);
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);


        $this->_dbEtapas = new Application_Model_Etapasprojeto();

        $etapaInfo = $this->_dbEtapas->find($idEtapa);

        //Verifica se a etapa está disponível
        if($etapaInfo['id_funcionarios'] != 0) {

            //Flash mensager avisando que o usuário foi cadastrado com sucesso
            $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">Já existe um funcionário nessa tarefa</div>");

            $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos']);
            exit();

        }

        //Atualiza informações etapa
        $data['id'] = (int)$idEtapa;
        $data['id_funcionarios'] = $this->userId;
        $data['status'] = 'aberto';
        $this->_dbEtapas->save($data);

        //Flash mensager avisando que o usuário foi cadastrado com sucesso
        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">Tarefa adicionada!</div>");


        //Redireciona para a página anterior
        $this->_redirect('user/projetos/visualizar/id/' . $etapaInfo['id_projetos']);

    }



}