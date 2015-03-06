<?php

class Admin_AuthController extends SON_Controller_Action
{
    public function init()
    {
        /* Initialize action controller here */
    }
    
    public function logoutAction(){
        $auth = Zend_Auth::getInstance();
        $auth->setStorage(new Zend_Auth_Storage_Session('admin'));
        
        $auth->clearIdentity();
        $this->_redirect('/admin');
    }
    
    public function indexAction()
    {
        // action body
        $form = new SON_Form_Login();
        
        if($this->_request->isPost()){
            if($form->isValid($this->_request->getPost())){
                $data = $form->getValues();
                $authAdapter = $this->getAuthAdapter();
                $authAdapter->setIdentity($data['email'])
                        ->setCredential($data['password']);
                $result = $authAdapter->authenticate();
                
                if($result->isValid()){
                    $auth = Zend_Auth::getInstance();
                    $auth->setStorage(new Zend_Auth_Storage_Session('admin'));
                    
                    $dataAuth= $authAdapter->getResultRowObject(null, 'password');
                    
                    $auth->getStorage()->write($dataAuth);
                    $this->_redirect('/admin');
                } else {
                    $this->view->error = 'Usuário ou senha inválidos';
                    $form->populate($data);
                }
            }
        }
        
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
                ->setCredentialTreatment('SHA1(?) and tipo=1');

        return $authAdapter;
    }
    
    
}

