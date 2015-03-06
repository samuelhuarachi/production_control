<?php 

//Ajuda a busca o nome dos usuários, enviado apenas o valor da sua id
class Zend_View_Helper_Usuario  extends Zend_View_Helper_Abstract {

	//retorna a porcentagem de conclusão dos projetos
	public function usuario($id) {
		$this->_dbUser = new Application_Model_User();
		return $this->_dbUser->find($id);
	}

}