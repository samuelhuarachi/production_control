<?php

class SON_Form_Proximos extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('subcategorias');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
        
		$time1_model = new Application_Model_Times();
        $time1 = new Zend_Form_Element_Select('jogo1');
        $time1->setLabel('Escolha o primeiro time')
                ->setRequired(true)
                ->setMultiOptions(array ('' => '- selecione -') +  $time1_model->fetchPairs()  );
        $this->addElement($time1);
		
		
		$time1_model = new Application_Model_Times();
        $time1 = new Zend_Form_Element_Select('jogo2');
        $time1->setLabel('Escolha o segundo time')
                ->setRequired(true)
                ->setMultiOptions(array ('' => '- selecione -') +  $time1_model->fetchPairs()  );
        $this->addElement($time1);
		
		
		$nome = new Zend_Form_Element_Text('dia');
        $nome->setLabel('Data do jogo: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe a data do jogo');
        
        $this->addElement($nome);
		
        
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}
