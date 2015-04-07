<?php 

class Application_Model_Clientes extends Application_Model_Abstract {

    public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Clientes();
    }
	
	public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
	
	public function _update(array $data) {
        return $this->_dbTable->update($data, array('id=?'=>$data['id']));
    }

    public function findbyNome($nome) {
        return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('clientes')
                        ->where('clientes.nome = ?', $nome)->query()->fetchAll();
    }

    public function fetchPairs($conditions = null) {
        $select = $this->_dbTable->select();
        $select->order('nome');
        if(is_array($conditions)) {
            foreach ($conditions as $key=>$value)
                $select->where($key, $value);
        }
        return $this->_dbTable->getDefaultAdapter()->fetchPairs($select);
    }


    public function search(array $params = null) {
        $str = isset($params['str']) ? $params['str'] : "";
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $conditions = isset($params['conditions']) ? $params['conditions'] : null;
        $perPage = isset($params['perpage']) 
                    ? (int) $params['perpage'] : Zend_Registry::get('config')->paginator->totalItemPerPage;
        $limit = ( $page - 1 ) * $perPage;
        $where = null;
        $select = $this->_dbTable->select();
        $select = $this->_dbTable->select()->order('nome');

        if (!empty($str)) {
            $select->where($filtro . " like '%" . $str . "%'" );
        }

        if (is_array($conditions)) {
            foreach ($conditions as $key => $condition) {
                $select->where($key, $condition);
            }
        }

        if( !is_null($limit) || $limit != 0 )
            $select->limit( $perPage, $limit );

        $paginator = Zend_Paginator::factory( $select );
        $paginator->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage($perPage);
        
        return $paginator;
    }


}