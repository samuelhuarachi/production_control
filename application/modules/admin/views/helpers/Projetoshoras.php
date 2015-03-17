<?php 
include 'Horastrabalhadas.php';
include 'Conclusaoetapa.php';

class Zend_View_Helper_Projetoshoras  extends Zend_View_Helper_Abstract {
	//calcula o total de horas gastas no projeto
	public function projetoshoras($id_projeto) {
        $Horastrabalhadas = new Zend_View_Helper_Horastrabalhadas();
        $Conclusaoetapa = new Zend_View_Helper_Conclusaoetapa();

		$this->_dbProjetos = new Application_Model_Projetos();
		$this->etapas = $this->_dbProjetos->findEtapas($id_projeto);
        $result = 0;
        foreach ($this->etapas as $key => $value) {
            $info_log = $Conclusaoetapa->conclusaoetapa($value['id']);

            if ($value['status'] == 'em andamento') {
                $total_h_t = $Horastrabalhadas->horastrabalhadas($info_log[0]['inicio'], 
                    date('Y-m-d h:i:s'));
                $result = $result + $total_h_t;
            }
            if ($value['status'] == 'concluido') {
                $total_h_t = $Horastrabalhadas->horastrabalhadas(  $info_log[0]['inicio']   , $info_log[0]['dia']);
                $result = $result + $total_h_t;
            }
        }
		return $result;
	}
}
