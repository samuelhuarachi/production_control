<?php

class Admin_ClientesController extends SON_Controller_Action
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

    public function editarAction() {
        $id = $this->_request->getParam('id', 0);
        $this->_dbClientes = new Application_Model_Clientes();


        $funcoes = new Funcoes_Geral();
        $frmCliente = new SON_Form_Clientes();
        $frmCliente->getElement('submit')->setLabel('Atualizar cliente');
        $infoClientes = $this->_dbClientes->find($id);


        $frmCliente->populate($infoClientes);
        if($this->_request->isPost()) {
            if($frmCliente->isValid($this->_request->getPost())){
                $data = $frmCliente->getValues();
                $data['id'] = $id;

                $this->_dbClientes->save($data);
                $msg = "<div class=\"alert alert-success\" role=\"alert\">O cliente \"".$data['nome']."\" foi atualizado no sistema</div>";


                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage($msg);
                //Redireciona
                $this->_redirect('/admin/clientes/editar/id/' . $id);

            }
        }

        $this->view->frm = $frmCliente;

    }

    public function ajaxexcluirAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        $this->_dbClientes = new Application_Model_Clientes();
        $this->_dbClientes->delete($_POST['id']);

        $baseUrl =  Zend_Controller_Front::getInstance()->getBaseUrl() . '/';
        echo 'O cliente ' . $_POST['id'] . ' foi excluído <img src="'.$baseUrl.'images/trash-icon.png" />. ';
    }

    public function deleteAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        $this->_dbClientes = new Application_Model_Clientes();
        //$this->_dbFuncionarios = new Application_Model_Funcionarios();

        $this->_dbClientes->delete($this->_request->getParam('id',0));
        //$this->_dbFuncionarios->delete($this->_request->getParam('id',0));

        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">O cliente foi deletado do sistema</div>");

        $this->_redirect('/admin/clientes/visualizar');
    }

    public function cadastrarAction() {
        $funcoes = new Funcoes_Geral();
        $frmCliente = new SON_Form_Clientes();
        $frmCliente->getElement('submit')->setLabel('Adicionar cliente');

        if($this->_request->isPost()) {
            if($frmCliente->isValid($this->_request->getPost())){
                $data = $frmCliente->getValues();
                $data['data'] = $funcoes->data_atual_formato_mysql();


                $this->_dbClientes = new Application_Model_Clientes();

                $findNome = $this->_dbClientes->findbyNome($data['nome']);
                if(!$findNome) {
                    $this->_dbClientes->save($data);
                    $msg = "<div class=\"alert alert-success\" role=\"alert\">O cliente ".$data['nome']." foi cadastrado no sistema</div>";
                } else {
                    $msg = "<div class=\"alert alert-danger\" role=\"alert\">O cliente ".$data['nome']." já está cadastrado</div>";
                }

                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage($msg);
                //Redireciona
                $this->_redirect('/admin/clientes/cadastrar');

            }
        }

        $this->view->frm = $frmCliente;
    }


    public function visualizarAction() {
        $filtroSQL = array();

        $this->procurar = $this->_request->getParam('procurar', null);
        if($this->procurar) {
            $filtroSQL['nome LIKE ?'] = "%{$this->procurar}%";
        }


        $this->_dbClientes = new Application_Model_Clientes();
        $this->view->registros = $this->_dbClientes->search(
            array(  'page' => $this->_request->getParam('pagina', 1),
                    'conditions' => $filtroSQL
                )
            );
    }
}

