<?php

class SON_Acl_Setup {

    /**
     * @var Zend_Acl
     */
    protected $_acl;

    public function __construct() {
        $this->_acl = new Zend_Acl();
        $this->_initialize();
    }

    protected function _initialize() {
        $this->_setupRoles();
        $this->_setupResources();
        $this->_setupPrivileges();
        $this->_saveAcl();
    }

    protected function _setupRoles() {
        $this->_acl->addRole(new Zend_Acl_Role('visitante'));
        $this->_acl->addRole(new Zend_Acl_Role('usuario'), 'visitante');
        $this->_acl->addRole(new Zend_Acl_Role('admin'), 'usuario');
    }

    protected function _setupResources() {
        $this->_acl->addResource(new Zend_Acl_Resource('index'));
        $this->_acl->addResource(new Zend_Acl_Resource('auth'));
        $this->_acl->addResource(new Zend_Acl_Resource('error'));
        $this->_acl->addResource(new Zend_Acl_Resource('noticias'));
        $this->_acl->addResource(new Zend_Acl_Resource('usuarios'));
        $this->_acl->addResource(new Zend_Acl_Resource('administracao'));
        $this->_acl->addResource(new Zend_Acl_Resource('gerenciar'));
    }

    protected function _setupPrivileges() {
        $this->_acl->allow('visitante', 'index', array('index', 'samuel'));
        $this->_acl->allow('visitante', 'auth', array('index', 'login', 'logout'))
                   ->allow('visitante', 'error', array('error', 'forbidden'))
                   ->allow('visitante', 'usuarios', 'adicionar');


        $this->_acl->allow('usuario', 'noticias', array('index', 'adicionar'));
        $this->_acl->allow('admin', 'administracao');
        $this->_acl->allow('admin', 'usuarios', array('vizualizar', 'editar', 'excluir','teste'));
        $this->_acl->allow('admin', 'gerenciar');
    }

    protected function _saveAcl() {
        $registry = Zend_Registry::getInstance();
        $registry->set('acl', $this->_acl);
    }

}