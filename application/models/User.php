<?php

class Application_Model_User extends Application_Model_Abstract implements Zend_Acl_Role_Interface
{

    private $_userName;
    private $_roleId;
    private $_fullName;
    public $papel;

    
    
    
    public function getRoleId()
    {
        return $this->_roleId;
    }

    public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_User();

        
    }
    
    public function fetchPairs($conditions = null) {
        $select = $this->_dbTable->select();
        
        if(is_array($conditions)){
            foreach ($conditions as $key=>$value)
                $select->where($key, $value);
        }
        return $this->_dbTable->getDefaultAdapter()->fetchPairs($select);
    }
    
    public function _insert(array $data) {
        $data['password'] = sha1($data['password']);
        $this->_dbTable->insert($data);
    }
    
    public function _update(array $data) {
        if(!empty($data['password']))
            $data['password'] = sha1($data['password']);
        else
            unset($data['password']);
        $this->_dbTable->update($data, array('id=?' => (int)$data['id']));
    }
    

    public function find($id, $join = true){
        $select =  $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('users')
                        ->where('users.id = ?', $id);

        if($join) {
            $select->join('funcionarios', 'funcionarios.id_user = users.id');
        }


        return $select->query()->fetchAll();

    }

    public function findbyEmail($email, $addjoin = true){
        $select =  $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('users')
                        ->where('users.email = ?', $email);
                        
        if($addjoin == true) {
            $select->join('funcionarios', 'funcionarios.id_user = users.id');
        }


        return $select->query()->fetchAll();
    }


    public function search(array $params = null, $joinCliente = true) {
        $str = isset($params['str']) ? $params['str'] : "";
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $conditions = isset($params['conditions']) ? $params['conditions'] : null;
        $perPage = isset($params['perpage']) 
                    ? (int) $params['perpage'] : Zend_Registry::get('config')->paginator->totalItemPerPage;
        $limit = ( $page - 1 ) * $perPage;
        $where = null;
        //$select = $this->_dbTable->select();


        $select = $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('users')
                        ->order(array('users.nome DESC'));
        if($joinCliente) {
            $select->join('funcionarios', 'funcionarios.id_user = users.id');
        }
                        
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


