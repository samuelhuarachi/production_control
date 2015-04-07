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

                $arquivo_name = $data['arquivo_save'].'.xls';

                $objPHPExcel_VALORES = PHPExcel_IOFactory::load("uploads/" . $data['upload_xls']);

				$objPHPExcel = PHPExcel_IOFactory::load("uploads/MODELO.xls");
				
				$contador = 2;
				while($contador < 300) {
					$coluna = 'E'. $contador;
					$valor = trim($objPHPExcel->getActiveSheet()->getCell($coluna)->getFormattedValue());
					if($valor != '' && $valor != 'Part Number') {
						$total = $this->procurar_total($valor, $objPHPExcel_VALORES);
						$objPHPExcel->setActiveSheetIndex(0)
				 			->setCellValue('F'.(string)$contador, $total);
					}
					$contador += 1;
				}


				// Set active sheet index to the first sheet, so Excel opens this as the first sheet
				$objPHPExcel->setActiveSheetIndex(0);

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


                //$this->_redirect('admin/ferramentas/mesclar');
            }
        }


    	$this->view->frm = $frm;
    }

    protected function procurar_total($label, $excel_valores) {
    	$contador = 1;
    	$total = '';
    	$sair = 0;
    	while($contador < 6001 && $sair == 0) {
    		$coluna = 'C'. $contador;
			$valor = trim($excel_valores->getActiveSheet()->getCell($coluna)->getFormattedValue());
			if($valor == $label) {
				$coluna2 = 'D'. $contador;
				$total = trim($excel_valores->getActiveSheet()->getCell($coluna2)->getFormattedValue());
				$sair = 1;
			}
    		$contador += 1;
    	}

    	return (string)$total;
    }


}