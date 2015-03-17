<?php 
require 'Projetoshoras.php';

class Zend_View_Helper_Gruposhoras  extends Zend_View_Helper_Abstract {


	public function gruposhoras($idgrupo) {
		$this->_dbProjetos = new Application_Model_Projetos();
		$h = new Zend_View_Helper_Projetoshoras();
		$projetos = $this->_dbProjetos->findByGroup($idgrupo);
		$horas = 0;
		foreach ($projetos as $key => $value) {
			$horas = $horas + $h->projetoshoras($value['id']);
		}
		return $horas;
	}



}