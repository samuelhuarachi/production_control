<?php 


class Application_Model_Grupo extends Application_Model_Abstract {

	public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Grupo();
    }

    public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
	
	public function _update(array $data) {
        return $this->_dbTable->update($data, array('id=?'=>$data['id']));
    }

    function findByProjectCode($codigo_projeto) {
        return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('grupo')
                        ->where('grupo.codigo_projeto = ?', $codigo_projeto)->query()->fetchAll();
    }

    function findcliente($id) {
        return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('grupo')
                        //->join('etapasprojeto','etapasprojeto.id_projetos=projetos.id', array('projetosID' => 'projetos.id', 'etapasID' => 'etapasprojeto.id' ,  'projetosNome' => 'projetos.nome', 'etapasprojetoNome' => 'etapasprojeto.nome'))

                        ->joinLeft('clientes', 'clientes.id = grupo.id_cliente')
                        ->where('grupo.id = ?', $id)->query()->fetchAll();
    }

    public function search (array $params = null) {
        $str = isset($params['str']) ? $params['str'] : "";
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $conditions = isset($params['conditions']) ? $params['conditions'] : null;
        $perPage = isset($params['perpage']) 
                    ? (int) $params['perpage'] : Zend_Registry::get('config')->paginator->totalItemPerPage;
        $limit = ( $page - 1 ) * $perPage;
        $where = null;
        
        $select = $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('grupo')
                        ->join('clientes', 'clientes.id = grupo.id_cliente', 
                            array(  
                                'nome_cliente' => 'clientes.nome', 
                                'id_grupo' => 'grupo.id',
                                'cod_grupo' => 'grupo.codigo_projeto'
                                ))
                        ->order(array('grupo.id DESC'));


        if (!empty($str)) {
            $select->where($filtro . " like '%" . $str . "%'" );
        }

        if (is_array($conditions)) {
            foreach ($conditions as $key => $condition) {
                $select->where($key, $condition);
            }
        }


        if( !is_null($limit) || $limit != 0 )
            //$select->limit( $perPage, $limit );

        $paginator = Zend_Paginator::factory( $select );
        $paginator->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage($perPage);
        
        return $paginator;
    }


}


