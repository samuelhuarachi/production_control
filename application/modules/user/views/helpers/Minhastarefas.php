<?php 


class Zend_View_Helper_Minhastarefas  extends Zend_View_Helper_Abstract {

	public function minhastarefas($id_projeto, $usuarioID) {
		$this->_dbProjeto = new Application_Model_Projetos();
		$usuarioID = (int)$usuarioID;
		$id_projeto = (int)$id_projeto;

		return $this->_dbProjeto->findEtapasFuncionario($id_projeto, $usuarioID);
	}

}