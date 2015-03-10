<?php 

class Application_Model_Funcionarios extends Application_Model_Abstract {

    public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Funcionarios();
    }
	
	public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
	
	public function _update(array $data) {
        unset($data['id']);
        return $this->_dbTable->update($data, array('id_user=?'=>$data['id_user']));
    }

    public function save(array $data){
        if(!isset($data['id']))
            $this->_insert ($data);
        else
            $this->_update ($data);
    }

	
	public function find($id){
        return $this->_dbTable->find($id)->current()->toArray();
    }
	
    public function delete($id){
        return $this->_dbTable->delete('id_user='.(int)$id);
    }

}