<?php 

class Zend_View_Helper_Projetos  extends Zend_View_Helper_Abstract {

	//retorna a porcentagem de conclusão dos projetos
	public function projetos($id) {
		$this->_dbProjetos = new Application_Model_Projetos();
		$etapas = $this->_dbProjetos->findEtapas($id);

		return $this->calculoPorcentagemConclusao($etapas);
	}

	public function calculoPorcentagemConclusao($etapas) {
            //cálculo do progresso
            $total = 0;
            $concluido = 0;
            foreach ($etapas as $key => $value) {
                if($value['status'] == 'concluido')
                    $concluido += 1;
                $total= $total + 1;
            }
            return number_format(($concluido * 100) / $total, 2);
    }
	
}

