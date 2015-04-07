<?php 


class Application_Model_Etapasprojeto extends Application_Model_Abstract {

	public function __construct() {
        $this->_dbTable = new Application_Model_DbTable_Etapasprojeto();
    }


    public function _insert(array $data) {
        return $this->_dbTable->insert($data);
    }
	
	public function _update(array $data) {
        return $this->_dbTable->update($data, array('id=?'=>$data['id']));
    }

    function savetodos( $data,  $id_grupo ) {
         $this->_mProjetos = new Application_Model_Projetos();
         $projetos = $this->_mProjetos->findByGroup($id_grupo);
         if($projetos) {
            foreach ($projetos as $key => $value) {
                $data['id_projetos'] = (int)$value['id'];
                $data['inicio'] = date('Y-m-d 08:00:00',strtotime($data['inicio']) ) ;
                $this->save($data);
            }
         }
    }

    public function findByUserid($idUser) {
        return $this->_dbTable
                        ->select()
                        ->setIntegrityCheck(false)
                        ->from('etapasprojeto')
                        //->join('etapasprojeto','etapasprojeto.id_projetos=projetos.id', array('projetosID' => 'projetos.id', 'etapasID' => 'etapasprojeto.id' ,  'projetosNome' => 'projetos.nome', 'etapasprojetoNome' => 'etapasprojeto.nome'))

                        //->joinLeft('etapasprojeto', 'etapasprojeto.id_projetos = projetos.id')
                        ->where('etapasprojeto.id_funcionarios = ?', (int)$idUser)
                        ->query()->fetchAll();
    }


}