<?php

class SON_Form_Mesclarexcel extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('excel');
        $this->setAttrib('class', 'form-inline');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        //var_dump(realpath('uploads'));
        
        $upload = new Zend_Form_Element_File('upload_xls');
		$upload->setLabel('Carregar arquivo Excel')
			->addValidator('Extension', false, array('xls'))
			->addValidator('Size', false, 1000240000)
			->setRequired(true)
			->setDestination(realpath('uploads'));
		$this->addElement($upload);

		$resultado = new Zend_Form_Element_Text('arquivo_save');
        $resultado
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o nome do arquivo')
                ->setAttrib('placeholder', 'Nome do arquivo')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('class', 'form-control');
                
        
        $this->addElement($resultado);


		$submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Gerar Excel')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group btnsub'))
                    ))
                ->setIgnore(true);


        
        
        $this->addElement($submit);

    }
}