<?php 

//Procura o dia e a hora que determinada etapa foi concluida
class Zend_View_Helper_Horastrabalhadas  extends Zend_View_Helper_Abstract {

	public function horastrabalhadas($data1, $data2) {
		$this->funcoes = new Funcoes_Geral();
		$dia = $this->funcoes->dia_semana($data1);
		$diaf = $this->funcoes->dia_semana($data2);
		
		$totalHoras = 0.0;
		while (  (strtotime(date('Y-m-d', strtotime($data1))) 
			<= strtotime(date('Y-m-d', strtotime($data2)))  && $totalHoras < 10000)      ) {

			$dia = $this->funcoes->dia_semana($data1);
			if($dia != "Sábado" && $dia != "Domingo") {

				$data1F = strtotime(date('Y-m-d', strtotime($data1)));
				$data2F = strtotime(date('Y-m-d', strtotime($data2)));
				if($data1F == $data2F) {

					$data11 = new DateTime( date("Y-m-d H:i:s",strtotime($data1) ));
					$data22 = new DateTime( date("Y-m-d H:i:s",strtotime($data2) ) );
					$intervalo = $data11->diff( $data22 );

					//echo '<font color="red">Sem contar sábados e domingos</font> - Horas trabalhadas: <b>' . ($totalHoras + (double)$intervalo->h) .'h</b>';
					$totalHoras = $totalHoras + (double)$intervalo->h;

					if((double)$intervalo->i > 1) {
						$totalHoras = $totalHoras +  number_format((double)$intervalo->i / 60,2);
					}
					
				} else {
					$data11 = new DateTime( date("Y-m-d H:i:s",strtotime($data1) ));
					$data22 = new DateTime( date("Y-m-d 17:48:00" ) );
					$intervalo = $data11->diff( $data22 );
					$totalHoras = $totalHoras + (double)$intervalo->h;

					if((double)$intervalo->i > 1) {
						$totalHoras = $totalHoras +  number_format((double)$intervalo->i / 60,2);
					}
				}
			}

			$data1 = date('Y-m-d 08:00:00', strtotime($data1. ' + 1 days'));
		}
		return $totalHoras;
	}

	
}