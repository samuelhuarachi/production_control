<?php

abstract class Application_Model_Abstract{
    protected $_dbTable;
    
    abstract public function _insert(array $data);
    abstract public function _update(array $data);
    
    
    
    public function save(array $data){
        if(!isset($data['id']))
            $this->_insert ($data);
        else
            $this->_update ($data);
    }
    
    public function delete($id){
        return $this->_dbTable->delete('id='.(int)$id);
    }
    
    public function find($id){
        return $this->_dbTable->find($id)->current()->toArray();
    }

    
    
    public function fetchAll(){
        return $this->_dbTable->fetchAll();
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
        $select = $this->_dbTable->select()->order('id DESC');

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



