<?php

class Funcoes_Geral {


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


}