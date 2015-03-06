<?php

class User_AuthController extends SON_Controller_Action
{
    public function init()
    {
        /* Initialize action controller here */

        //This will catch any messege set in any action in this controller and send
        //it to the view on the next request.
        if ($this->_helper->FlashMessenger->hasMessages()) {
            $this->view->messages = $this->_helper->FlashMessenger->getMessages();
        }

    }
    
    public function logoutAction(){
        $auth = Zend_Auth::getInstance();
        $auth->setStorage(new Zend_Auth_Storage_Session('user'));
        
        $auth->clearIdentity();
        $this->_redirect('/user');
    }

    public function cadastrarfuncionarioAction() {

        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);

        echo 'cadastrando usuário... ';

    }
    

    public function indexAction()
    {
        // action body
        $form = new SON_Form_Login();
        $formularioCadastro = new SON_Form_Funcionarios();


        if($this->_request->isPost()) {
            

            if(count($_POST) < 4) {
                if($form->isValid($this->_request->getPost())) {
                    $data = $form->getValues();
                    $authAdapter = $this->getAuthAdapter();
                    $authAdapter->setIdentity($data['email'])
                            ->setCredential($data['password']);
                    $result = $authAdapter->authenticate();
                    
                    if($result->isValid()){
                        $auth = Zend_Auth::getInstance();
                        $auth->setStorage(new Zend_Auth_Storage_Session('user'));
                        
                        $dataAuth= $authAdapter->getResultRowObject(null, 'password');
                        
                        $auth->getStorage()->write($dataAuth);
                        $this->_redirect('/user');
                    } else {
                        $this->view->error = 'Usuário ou senha inválidos';
                        $form->populate($data);
                    }
                }
            } else {
                if($formularioCadastro->isValid($this->_request->getPost())) {
                    $data = $formularioCadastro->getValues();
                    $this->_dbUser = new Application_Model_User();
                    //Procura o email digitado na tabela dos usuários.
                    //Não pode existir dois email iguais na tabela
                    $pesquisa = $this->_dbUser->findbyEmail($data['email']);
                    if($pesquisa) {
                        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-danger\" role=\"alert\">Esse e-mail já está cadastrado no sistema</div>");
                        $this->_redirect('/user');
                    }else {

                        $dataFuncionarios = array(); // Informações que serão inseridas na tabela dos funcionários

                        $dataFuncionarios['rg'] = $data['rg'];
                        $dataFuncionarios['data_nascimento'] = $data['data_nascimento'];

                        unset($data['rg']);
                        unset($data['data_nascimento']);

                        $this->_dbUserDbtable = new Application_Model_DbTable_User();
                        $data['tipo'] = '2'; //define o tipo do usário como 2 = funcionário
                        $this->_dbUser->save($data); //salva informações no banco de dados

                        $last_id = $this->_dbUserDbtable->getAdapter()->lastInsertId(); //Pega a id
                        //do usuário que acabou de ser inserido


                        $dataFuncionarios['id_user'] = (int)$last_id;
                        $data_atual = new Zend_Date();
                        $dataFuncionarios['data_cadastro'] = $data_atual->toString('YYYY-MM-dd HH:mm:ss');


                        $this->_dbFuncionarios = new Application_Model_Funcionarios();
                        $this->_dbFuncionarios->save($dataFuncionarios); //salva informações no banco de dados
                        
                        //Flash mensager avisando que o usuário foi cadastrado com sucesso
                        $this->_helper->flashMessenger->addMessage("<div class=\"alert alert-success\" role=\"alert\">O funcionário(a) ".$data['nome']." foi cadastrado no sistema</div>");
                        //Redireciona
                        $this->_redirect('/user');



                    }
                }
            }



        }

        
        $this->view->formularioCadastro = $formularioCadastro;
        $formularioCadastro->getElement('submit')->setLabel('Cadastrar');


        $this->view->form = $form;
    }
    
    private function getAuthAdapter(){
        $bootstrap = $this->getInvokeArg('bootstrap');
        $resource = $bootstrap->getPluginResource('db');
        $db = $resource->getDbAdapter();
        
        $authAdapter = new Zend_Auth_Adapter_DbTable($db);
        $authAdapter->setTableName('users')
                ->setIdentityColumn('email')
                ->setCredentialColumn('password')
                ->setCredentialTreatment('SHA1(?) and tipo=2');

        return $authAdapter;
    }
    
    
}

