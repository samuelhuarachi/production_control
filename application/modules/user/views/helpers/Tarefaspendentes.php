<?php 

//Mostra se o usuário possui tarefas pendentes nesse projeto
class Zend_View_Helper_Tarefaspendentes  extends Zend_View_Helper_Abstract {

	public function tarefaspendentes($id_projeto, $usuarioID) {
		$this->_dbProjeto = new Application_Model_Projetos();
		$usuarioID = (int)$usuarioID;
		$id_projeto = (int)$id_projeto;

		$conditions = array('conditions' => array( 'status=?' => 'aberto' ));
		
		return $this->_dbProjeto->findEtapasFuncionario($id_projeto, $usuarioID, $conditions);
	}
}

