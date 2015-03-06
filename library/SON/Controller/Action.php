<?php

class SON_Controller_Action extends Zend_Controller_Action {
    
    protected $userId;
    protected $userNome;
    protected $userEmail;
    protected $authStatus = false;
    
    public function init() {
        $auth = Zend_Auth::getInstance();
        $auth->setStorage(new Zend_Auth_Storage_Session($this->_request->getModuleName()));
        
        if ($auth->hasIdentity()) {

            $this->authStatus = true;
            $this->userId = $auth->getIdentity()->id;
            $this->userEmail = $auth->getIdentity()->email;
            $this->userNome = $auth->getIdentity()->nome;
            
            $this->view->authStatus = $this->authStatus;
            $this->view->userNome2 = $this->userNome;
        }
        
		
    }
}