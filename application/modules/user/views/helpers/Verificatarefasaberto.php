<?php 

//Mostra se o esse projeto possui tarefas em aberto.
//Tarefa nas quais o usuário poderá se candidatar a fazer
class Zend_View_Helper_Verificatarefasaberto  extends Zend_View_Helper_Abstract {

	public function verificatarefasaberto($id_projeto) {
		$this->_dbProjeto = new Application_Model_Projetos();
		$id_projeto = (int)$id_projeto;

		$etapas = $this->_dbProjeto->findEtapas($id_projeto);
		$reposta = false;
		foreach ($etapas as $key => $value) {
			if($value['id_funcionarios'] == 0) {
				$reposta = true;
			}
		}

		return $reposta;
	}
}

