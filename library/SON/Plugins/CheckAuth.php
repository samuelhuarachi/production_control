<?php

class SON_Plugins_CheckAuth extends Zend_Controller_Plugin_Abstract{
    //put your code here
    
    protected $_acl = null;

    public function  __construct(){
        $this->_acl = Zend_Registry::get('acl');
    }
    
    public function dispatchLoopStartup(Zend_Controller_Request_Abstract $request) {
        $module = $request->getModuleName();
		
		//if($module <> 'web' && $module <> 'admin') {
		//	header('Location:web');
		//}
		
        $auth = Zend_Auth::getInstance();
        $auth->setStorage(new Zend_Auth_Storage_Session($module));
        $user = $auth->getIdentity();
		
        if(!$auth->hasIdentity() and $module <> 'api' and $module <> 'web') {
            $request->setModuleName($module)
                    ->setControllerName('auth')
                    ->setActionName('index');
					
        }
        
		
		
    }
    
}
