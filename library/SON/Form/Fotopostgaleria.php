<?php

//Ajusta a galeria dos posts
class SON_Form_Fotopostgaleria extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('galeriapagina');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
       
	    $upload = new Zend_Form_Element_File('foto');
		$upload->setLabel('Imagem da galeria')
			->addValidator('Extension', false, array('jpg', 'png', 'gif'))
			->addValidator('Size', false, 10240000)
			->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/images');
		$this->addElement($upload);
		
		
		$this->addElement('hidden', 'escondido', array(
					'value'      => 'ola'
				));
		
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Enviar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}