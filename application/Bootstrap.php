<?php
//require '../library/PHPMailer/PHPMailerAutoload.php';


class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
    protected function _initC(){
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/application.ini', 'production');
        
        Zend_Registry::set('config', $config);
    }
	
    protected function _initAcl()
    {
        $aclSetup = new SON_Acl_Setup();
    }
    
    protected function _initRestRoute() {
        //$this->bootstrap('frontController');
        //$frontController = Zend_Controller_Front::getInstance();
        //$restRoute = new Zend_Rest_Route($frontController, array(), array('api'));
        //$frontController->getRouter()->addRoute('rest', $restRoute);
    }
	
    
    protected function _initTranslate()
    {
        $translator = new Zend_Translate ( array ('adapter' => 'array', 'content' => APPLICATION_PATH . '/langs/Zend_Validate.php', 'locale' => 'pt_BR', 'scan' => Zend_Translate::LOCALE_DIRECTORY ) );
        Zend_Validate_Abstract::setDefaultTranslator ( $translator );
        
        //$registry = Zend_Registry::getInstance();
        //$registry->set('Zend_Translate', $translate);
    }
    

    protected function _initViewHelpers()
    {
        $view = new Zend_View();
        $viewRenderer = new Zend_Controller_Action_Helper_ViewRenderer();
        
        $view->addHelperPath('ZendX/JQuery/View/Helper/', 'ZendX_JQuery_View_Helper');
        $viewRenderer->setView($view);
        Zend_Controller_Action_HelperBroker::addHelper($viewRenderer);
    }
	
}

