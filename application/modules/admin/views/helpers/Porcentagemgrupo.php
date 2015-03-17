<?php 

class Zend_View_Helper_Porcentagemgrupo  extends Zend_View_Helper_Abstract {
	//Retorna a porcentagem de conclusão do grupo
	//Que contem projetos
	//que contem etapas
	public function porcentagemgrupo($idGrupo) {
		$modelProjetos = new Application_Model_Projetos();
		$projetos = $modelProjetos->findByGroup($idGrupo);
		$totalProjeto = 0;
		$totalConcluidos = 0;
		foreach ($projetos as $key => $value) {
			
			$etapas = $modelProjetos->findEtapas($value['id']);
			$t =  $this->calculoPorcentagemConclusao($etapas);
			if($t == 100) {
				$totalConcluidos = $totalConcluidos + 1;
			}
			$totalProjeto = $totalProjeto + 1;
		}

		if(count($projetos) > 0) {
			return ($totalConcluidos * 100) / $totalProjeto;
		}else {
			return 0;
		}
		
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