<?php


class Admin_RelatoriosController extends SON_Controller_Action
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

        $this->_dbProjetos = new Application_Model_Projetos();
        $this->_modelEtapas = new Application_Model_Etapasprojeto();
        $this->_modelClientes = new Application_Model_Clientes();



    }

    public function indexAction() {

    }

    public function tgnpAction() {
        $filtroSQL = array();
        $filtroSQL['lancar = ?'] = 1;
        $this->view->registros = $this->_dbProjetos->search(array('page' => $this->_request->getParam('pagina', 1),
                'conditions' => $filtroSQL
            )); 

    }
    public function tgnpprojetoAction() {
        $idProjeto = $this->_request->getParam('id', 0);
        $projeto = $this->_dbProjetos->find($idProjeto);
        $etapas = $this->_dbProjetos->findEtapas($idProjeto);
        $cliente = $this->_modelClientes->find($projeto['id_cliente']);

        $this->view->projeto = $projeto;
        $this->view->cliente = $cliente;
        $this->view->etapas = $etapas;


    }

}