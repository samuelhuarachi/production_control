<?php 

//Retorna as informações do usuário que realizou determinada etapa
class Zend_View_Helper_Usuarioetapa  extends Zend_View_Helper_Abstract {

	//retorna a porcentagem de conclusão dos projetos
	public function usuarioetapa($id_user) {
		$this->_dbUser = new Application_Model_User();
		return $this->_dbUser->find($id_user);
	}

}