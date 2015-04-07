<?php 

class Application_Model_Logconclusao extends Application_Model_Abstract {

    public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Logconclusao();
    }
	
	public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
	
	public function _update(array $data) {
        return $this->_dbTable->update($data, array('id=?'=>$data['id']));
    }

    public function deleteByEtapa($id_etapa) {
        return $this->_dbTable->delete('id_etapa='.(int)$id_etapa);
    }

    public function find($id) {
        return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('log_conclusao_etapas')
                        ->where('log_conclusao_etapas.id_etapa = ?', (int)$id)->query()->fetchAll();
    }

    public function save(array $data){
        if(!isset($data['id']))
            $this->_insert ($data);
        else
            $this->_update ($data);
    }




}