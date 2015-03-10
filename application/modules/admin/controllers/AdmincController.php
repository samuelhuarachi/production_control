<?php 

class Admin_AdmincController extends SON_Controller_Action
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

    public function deleteAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        $this->_dbUser = new Application_Model_User();
        //$this->_dbFuncionarios = new Application_Model_Funcionarios();

        $this->_dbUser->delete($this->_request->getParam('id',0));
        //$this->_dbFuncionarios->delete($this->_request->getParam('id',0));

        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">O admin foi deletado do sistema</div>");

        $this->_redirect('/admin/adminc/visualizar');
    }

    public function visualizarAction() {
        $this->_dbUser = new Application_Model_User();
        $this->view->registros = $this->_dbUser->search(array('page' => $this->_request->getParam('pagina', 1) , 'conditions' => array('tipo = ?' => '1')  ), false);
    }


    public function editarAction() {
        $id = $this->_request->getParam('id', 0);

        $frm = new SON_Form_Adminc();
        $_mUser = new Application_Model_User();

        $frm->getElement('password')->removeValidator('NotEmpty');
        $frm->getElement('password')->setRequired(false);
        $frm->getElement('submit')->setLabel('Atualizar admin');
        $infoAdmin = $_mUser->find($id, false);


        $frm->populate($infoAdmin['0']);

        //Se $_POST
        if($this->_request->isPost()) {
            
            //Se formulário é válido
            if($frm->isValid($this->_request->getPost())){
                $data = $frm->getValues();
                $data['tipo'] = '1';
                $data['id'] = $id;

                $_mUser->save($data);
                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">O admin ".$data['nome']." foi atualizado no sistema</div>");


                //Redireciona
                $this->_redirect('/admin/adminc/visualizar');

            }
        }

        $this->view->frm = $frm;


    }


    public function cadastrarAction() {
        $frm = new SON_Form_Adminc();
        $_mUser = new Application_Model_User();
        //Se $_POST
        if($this->_request->isPost()) {
            
            //Se formulário é válido
            if($frm->isValid($this->_request->getPost())){
                $data = $frm->getValues();
                $data['tipo'] = '1';

                $findUser = $_mUser->findbyEmail($data['email'], false);

                if($findUser) {
                    $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">O e-mail \"".$data['email']."\" já está cadastrado no banco de dados</div>");
                } else {
                    $_mUser->save($data);
                    //Flash mensager avisando que o usuário foi cadastrado com sucesso
                    $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">O admin ".$data['nome']." foi cadastrado no sistema</div>");
                }


                //Redireciona
                $this->_redirect('/admin/adminc/cadastrar');

            }
        }

        $frm->getElement('submit')->setLabel('Cadastrar novo administrador');
        $this->view->frm = $frm;
    }

}