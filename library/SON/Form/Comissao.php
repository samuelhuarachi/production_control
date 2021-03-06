<?php

class SON_Form_Comissao extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('jogadores');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
        $nome = new Zend_Form_Element_Text('nome');
        $nome->setLabel('Nome: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o nome do jogador');
        $this->addElement($nome);
		
		
		$textarea = new Zend_Form_Element_Textarea('conteudo');
		$textarea->setLabel('Informações adicionais: ')
					->setAttrib('title', 'Informações adicionar sobre o jogador')
					->setRequired(true);
		$textarea->getDecorator('Label')->setOption('escape',false);
			
		$this->addElement($textarea);
		
		
        $posicao = new Zend_Form_Element_Text('posicao');
        $posicao->setLabel('Cargo: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o cargo');
        $this->addElement($posicao);
		
		
	    $upload = new Zend_Form_Element_File('foto');
		$upload->setLabel('Foto')
			->addValidator('Extension', false, array('jpg', 'png', 'gif'))
			//->addValidator('Size', false, 1000240000)
			//->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/comissao');
		$this->addElement($upload);
		
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}
