<?php 


class Application_Model_Projetos extends Application_Model_Abstract {

	public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Projetos();
    }

    public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
	
	public function _update(array $data) {
        return $this->_dbTable->update($data, array('id=?'=>$data['id']));
    }


    public function find($id){
        return $this->_dbTable->find($id)->current()->toArray();
    }


    public function findEtapas($id){
        return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('projetos')
                        //->join('etapasprojeto','etapasprojeto.id_projetos=projetos.id', array('projetosID' => 'projetos.id', 'etapasID' => 'etapasprojeto.id' ,  'projetosNome' => 'projetos.nome', 'etapasprojetoNome' => 'etapasprojeto.nome'))

                        ->joinLeft('etapasprojeto', 'etapasprojeto.id_projetos = projetos.id')
                        ->where('projetos.id = ?', $id)->query()->fetchAll();
    }

    public function findEtapasFuncionario($id, $id_funcionario, array $params = null){
        $select =  $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('projetos')
                        //->join('etapasprojeto','etapasprojeto.id_projetos=projetos.id', array('projetosID' => 'projetos.id', 'etapasID' => 'etapasprojeto.id' ,  'projetosNome' => 'projetos.nome', 'etapasprojetoNome' => 'etapasprojeto.nome'))

                        ->joinLeft('etapasprojeto', 'etapasprojeto.id_projetos = projetos.id')
                        ->where('etapasprojeto.id_funcionarios = ?', $id_funcionario)
                        ->where('projetos.id = ?', $id);

        $conditions = isset($params['conditions']) ? $params['conditions'] : null;
        if (is_array($conditions)) {
            foreach ($conditions as $key => $condition) {
                $select->where($key, $condition);
            }
        }

        return $select->query()->fetchAll();
    }

    public function search(array $params = null) {
        $str = isset($params['str']) ? $params['str'] : "";
        $page = isset($params['page']) ? (int) $params['page'] : 1;
        $conditions = isset($params['conditions']) ? $params['conditions'] : null;
        $perPage = isset($params['perpage']) 
                    ? (int) $params['perpage'] : Zend_Registry::get('config')->paginator->totalItemPerPage;
        $limit = ( $page - 1 ) * $perPage;
        $where = null;
        //$select = $this->_dbTable->select()->order('id DESC');

        $select = $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('projetos')
                        ->join('clientes', 'clientes.id = projetos.id_cliente', array('nome' => 'projetos.nome', 'nome_cliente' => 'clientes.nome',
                            'inicio' => 'projetos.inicio', 'fim' => 'projetos.fim'))
                        ->order(array('projetos.nome'));


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