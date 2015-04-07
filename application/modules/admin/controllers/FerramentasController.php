<?php

class Admin_FerramentasController extends SON_Controller_Action
{
	public function init()
    {
        parent::init();
        /* Initialize action controller here */

        //This will catch any messege set in any action in this controller and send
        //it to the view on the next request.
        if ($this->_helper->FlashMessenger->hasMessages()) {
            $this->view->messages = $this->_helper->FlashMessenger->getMessages();
        }
    }

    public function mesclarAction() {
    	$frm = new SON_Form_Mesclarexcel();

		if($this->_request->isPost()) {
            if($frm->isValid($this->_request->getPost())) {
                $data = $frm->getValues();

                require_once dirname(__FILE__) . '/../../../../library/PHPExcel/Classes/PHPExcel.php';

                /* Upload dos arquivos Tap, Dados, e Base  **/
                $arquivo_name = $data['arquivo_save'].'.xls';

                $inputFileType = 'CSV';
				$objReader = PHPExcel_IOFactory::createReader($inputFileType);
				$objReader->setDelimiter(";"); 
				$objReader->setEnclosure('');
				$objPHPCSV_TAPS = $objReader->load("uploads/" . $data['upload_tap']);


                $objPHPExcel_VALORES = PHPExcel_IOFactory::load("uploads/" . $data['upload_xls']);

				$objPHPExcel = PHPExcel_IOFactory::load("uploads/" . $data['upload_base']);
				
				//Gera o array com as informaçoes dos taps
				$array_taps = array();
				$contador = 1;
				while($contador < 100) {
					$coluna = 'A'. $contador;
					$coluna2 = 'B'. $contador;
					$valor = trim($objPHPCSV_TAPS->getActiveSheet()->getCell($coluna)->getFormattedValue());

					$valor2 = trim($objPHPCSV_TAPS->getActiveSheet()->getCell($coluna2)->getFormattedValue());
					
					$array_taps[$valor] = $valor2;
					$contador += 1;
				}
				
				//Gera o array com as informaçoes dos dados
				$array_dados = array();
				$contador = 1;
				while($contador < 6000) {
					$coluna = 'C'. $contador;
					$coluna2 = 'D'. $contador;
					$valor = trim($objPHPExcel_VALORES->getActiveSheet()->getCell($coluna)->getFormattedValue());

					$valor2 = trim($objPHPExcel_VALORES->getActiveSheet()->getCell($coluna2)->getFormattedValue());
					
					$array_dados[$valor] = $valor2;
					$contador += 1;
				}


				//Atualiza a base do xls, e gera o arquivo para download
				$array_base = array();
				$contador = 2;
				while($contador < 300) {
					$coluna = 'E'. $contador;
					$valor = trim($objPHPExcel->getActiveSheet()->getCell($coluna)->getFormattedValue());
					if($valor != '' && $valor != 'Part Number') {
						if(  array_key_exists($valor , $array_dados) ) {
							$objPHPExcel->setActiveSheetIndex(0)
				  			->setCellValue('F'.(string)$contador, $array_dados[$valor]);
						}
					}

					$coluna = 'A'. $contador;
					$valor = trim(str_replace('-', '', $objPHPExcel->getActiveSheet()->getCell($coluna)->getFormattedValue()));
					if($valor != '' && $valor != 'Part Number') {
						if(  array_key_exists($valor , $array_taps) ) {
							$objPHPExcel->setActiveSheetIndex(0)
				  			->setCellValue('B'.(string)$contador, $array_taps[$valor]);
						}
					}

					$contador += 1;
				}

				// Set active sheet index to the first sheet, so Excel opens this as the first sheet

				// Redirect output to a client’s web browser (Excel5)
				header('Content-Type: application/vnd.ms-excel');
				header('Content-Disposition: attachment;filename="'.$arquivo_name.'"');
				header('Cache-Control: max-age=0');
				// // If you're serving to IE 9, then the following may be needed
				header('Cache-Control: max-age=1');

				// // If you're serving to IE over SSL, then the following may be needed
				header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
				header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
				header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
				header ('Pragma: public'); // HTTP/1.0

				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
				$objWriter->save('php://output');
				exit();
            }
        }
    	$this->view->frm = $frm;
    }

}