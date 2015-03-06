<?php

class SON_Form_Times extends Zend_Form {
    //put your code here
    
    public function init() {
        $this->setName('categorias');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
        $nome = new Zend_Form_Element_Text('time');
        $nome->setLabel('Nome do time: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o nome do time');
        $this->addElement($nome);
		
	    $upload = new Zend_Form_Element_File('foto');
		$upload->setLabel('Imagem do post')
			->addValidator('Extension', false, array('jpg', 'png', 'gif'))
			->addValidator('Size', false, 10240000)
			//->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/upload_images_time');
		$this->addElement($upload);
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
		
        $this->addElement($submit);
    }
    
}
