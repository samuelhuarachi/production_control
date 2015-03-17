<?php

class Funcoes_Geral {
	protected $date1;

	function setDate1($date1) {
		$this->date1 = $date1;
	}

	//Imprime " 10 de Março de 2015 "
	function nome_mes($date1) {
		$mons = array("Jan" => "Janeiro", "Feb" => "Fevereiro", "Mar" => "Março", "Apr" => "Abril", 
			"May" => "Maio", "Jun" => "Junho", "Jul" => "Julho", "Aug" => "Agosto", "Sep" => "Setembro", 
			"Oct" => "Outubro", "Nov" => "Novembro", "Dec" => "Dezembro");
		
		$mes = date('M',strtotime($date1));
		echo date('d',strtotime($date1));
		echo ' de ';
		echo $mons[$mes];
		echo ' de ';
		echo date('Y',strtotime($date1));
	}

	//retorna o dia da semana. Segunda, terça, quarta, quinta ....
	function dia_semana($data1){
		// Array com os dias da semana
		$diasemana = array("Domingo", "Segunda", 
			"Terça", "Quarta", "Quinta", "Sexta", "Sábado");
		$data = date('Y-m-d', strtotime($data1));

		$diasemana_numero = date('w', strtotime($data));
		return $diasemana[$diasemana_numero];
	}

	public function formata_data_para_padrao_mysql($value) {
		$inicio = strtotime(  str_replace('/', '-', $value) );
	    return date( 'Y-m-d H:i:s', $inicio );
	}

	public function volta_data_ao_normal($datasql) {
		$inicio = strtotime(  $datasql);
	    return date( 'd/m/Y', $inicio );
	}

	public function data_atual_formato_mysql() {
		$d = new Zend_Date();
		return $d->toString('YYYY-MM-dd HH:mm:ss');
	}

	public function hoje() {
		return date("Y-m-d h:i:s");
	}

	public function diff2($data_inicial, $data_final) {
		// Usa a função criada e pega o timestamp das duas datas:
		$time_inicial = $this->geraTimestamp($data_inicial);
		$time_final = $this->geraTimestamp($data_final);

		// Calcula a diferença de segundos entre as duas datas:
		$diferenca = $time_final - $time_inicial; // 19522800 segundos

		// Calcula a diferença de dias
		$dias = (int)floor( $diferenca / (60 * 60 * 24)); // 225 dias

		// Exibe uma mensagem de resultado:
		return $dias;
	}

	// Cria uma função que retorna o timestamp de uma data no formato DD/MM/AAAA
	function geraTimestamp($data) {
		$partes = explode('/', $data);
		return mktime(0, 0, 0, $partes[1], $partes[0], $partes[2]);
	}

}