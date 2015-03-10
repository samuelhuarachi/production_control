<?php

class Application_Model_Ferias extends Application_Model_Abstract {

    public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Ferias();
    }
    
    public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
    
    public function _update(array $data) {
        return $this->_dbTable->update($data, array('id=?'=>$data['id']));
    }

    public function getFerias($id) {
    	return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('ferias')
                        ->order('id DESC')
                        ->where('ferias.id_user = ?', $id)->query()->fetchAll();
    }

}