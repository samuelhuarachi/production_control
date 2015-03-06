<?php


//Ajusta a galeria das páginas 
class SON_Form_Apdf extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('apdf');
        //$this->setAttrib('class', 'zend_form form-horizontal');
        
       
	    $upload = new Zend_Form_Element_File('pdf');
		$upload->setLabel('Pdf')
			->addValidator('Extension', false, array('pdf'))
			->addValidator('Size', false, 10240000)
			->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/pdf');
		$this->addElement($upload);
		
		
		$this->addElement('hidden', 'escondido_pdf', array(
					'value'      => 'ola'
				));
		
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Enviar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}







