<?php 

//Mostra se o usuário possui tarefas pendentes nesse projeto
class Zend_View_Helper_Tarefaspendentes2  extends Zend_View_Helper_Abstract {

	public function tarefaspendentes2($id_projeto, $usuarioID) {
		$this->_dbProjeto = new Application_Model_Projetos();
		$usuarioID = (int)$usuarioID;
		$id_projeto = (int)$id_projeto;

		$conditions = array('conditions' => array( 'status=?' => 'em andamento' ));
		
		return $this->_dbProjeto->findEtapasFuncionario($id_projeto, $usuarioID, $conditions);
	}
}

