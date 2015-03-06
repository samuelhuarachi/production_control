<?php

class SON_Form_Publicidade extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('jogadores');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
		
		$upload = new Zend_Form_Element_File('foto');
		$upload->setLabel('Imagem do jogador')
			->addValidator('Extension', false, array('jpg', 'png', 'gif'))
			->addValidator('Size', false, 1000240000)
			//->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/upload_images_publicidade');
		$this->addElement($upload);
		
		
        $nome = new Zend_Form_Element_Text('empresa');
        $nome->setLabel('Nome da empresa: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o nome da empresa');
        $this->addElement($nome);
		
		$links = new Zend_Form_Element_Text('links');
        $links->setLabel('Link: ')
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->setAttrib('title', 'Informe o link');
        $this->addElement($links);
		
		
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}




