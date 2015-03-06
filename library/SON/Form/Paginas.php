<?php

class SON_Form_Paginas extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('categorias');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
        $titulo = new Zend_Form_Element_Text('titulo');
        $titulo->setLabel('Título: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o título');
        $this->addElement($titulo);
		
		
		$textarea = new Zend_Form_Element_Textarea('conteudo');
		$textarea->setLabel('Conteúdo: ')
					->setAttrib('title', 'Informe o conteúdo')
					->setRequired(true);
		$textarea->getDecorator('Label')->setOption('escape',false);
		//$textarea->setAttrib("escape", true);
		//$textarea->addFilter(new Zend_Filter_HtmlEntities());
		$this->addElement($textarea);
		
		
		$tag = new Zend_Form_Element_Text('tag');
        $tag->setLabel('Tag: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe a tag');
        $this->addElement($tag);
		
		
		$upload = new Zend_Form_Element_File('foto');
		$upload->setLabel('Imagem do post')
			->addValidator('Extension', false, array('jpg', 'png', 'gif'))
			->addValidator('Size', false, 10240000)
			//->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/images');
		$this->addElement($upload);
		
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
		
    }
    
}
