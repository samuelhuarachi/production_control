<?php 

//Procura o dia e a hora que determinada etapa foi concluida
class Zend_View_Helper_Conclusaoetapa  extends Zend_View_Helper_Abstract {

	public function conclusaoetapa($id_etapa) {
		$this->_dbLog  = new Application_Model_Logconclusao();
		return $this->_dbLog->find($id_etapa);
	}

}