<?php

class SON_Form_Mesclarexcel extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('excel');
        $this->setAttrib('class', 'form-inline');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        $upload = new Zend_Form_Element_File('upload_tap');
        $upload->setLabel('Carregar arquivo CSV - Tap')
            ->addValidator('Extension', false, array('csv'))
            ->addValidator('Size', false, 1000240000)
            ->setRequired(true)
            ->removeDecorator('htmlTag')
            ->setAttrib('class', 'carr')
            ->setDestination(realpath('uploads'));
        $this->addElement($upload);

        $upload = new Zend_Form_Element_File('upload_base');
        $upload->setLabel('Carregar arquivo Excel - Base. Ex: PART_NUMBERS_BOM_LODE_FRANCA.xls')
            ->addValidator('Extension', false, array('xls'))
            ->addValidator('Size', false, 1000240000)
            ->setRequired(true)
            ->removeDecorator('htmlTag')
            ->setAttrib('class', 'carr')
            ->setDestination(realpath('uploads'));
        $this->addElement($upload);

        $upload = new Zend_Form_Element_File('upload_xls');
		$upload->setLabel('Carregar arquivo Excel - Dados. Ex: BOM_FAC37.xls')
			->addValidator('Extension', false, array('xls'))
			->addValidator('Size', false, 1000240000)
			->setRequired(true)
            ->removeDecorator('htmlTag')
			->setDestination(realpath('uploads'));
		$this->addElement($upload);


        $cabo0 = new Zend_Form_Element_Text('tipocabo0');
        $cabo0->setLabel('Tipo de cabo 0: ')
                //->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setAttrib('placeholder', 'Ex: P3-500JCA AER')
                ->setAttrib('title', 'Tipo de cabo 0');
        $this->addElement($cabo0);

        $cabo0_qtd = new Zend_Form_Element_Text('cabo0_qtd');
        $cabo0_qtd//->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',   
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('placeholder', 'Quantidade')
                ->setAttrib('title', 'Quantidade');
        $this->addElement($cabo0_qtd);

        $cabo2 = new Zend_Form_Element_Text('tipocabo2');
        $cabo2->setLabel('Tipo de cabo 2: ')
                //->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setAttrib('placeholder', 'Ex: P3-750JCA AER')
                ->setAttrib('title', 'Tipo de cabo 2');
        $this->addElement($cabo2);

        $cabo2_qtd = new Zend_Form_Element_Text('cabo2_qtd');
        $cabo2_qtd//->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',   
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('placeholder', 'Quantidade')
                ->setAttrib('title', 'Quantidade');
        $this->addElement($cabo2_qtd);


        $fonte = new Zend_Form_Element_Text('fonte');
        $fonte->setLabel('Tipo de fonte: ')
                //->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setAttrib('placeholder', 'Ex: Alpha')
                ->setAttrib('title', 'Tipo de fonte');
        $this->addElement($fonte);

        $fonte_qtd = new Zend_Form_Element_Text('fonte_qtd');
        $fonte_qtd//->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',   
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('placeholder', 'Quantidade')
                ->setAttrib('title', 'Quantidade');
        $this->addElement($fonte_qtd);

        $lpi = new Zend_Form_Element_Text('lpi');
        $lpi->setLabel('LPI: ')
                //->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setAttrib('placeholder', 'Ex: 9-LPI\22A')
                ->setAttrib('title', 'LPI');
        $this->addElement($lpi);

        $lpi_qtd = new Zend_Form_Element_Text('lpi_qtd');
        $lpi_qtd//->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',   
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('placeholder', 'Quantidade')
                ->setAttrib('title', 'Quantidade');
        $this->addElement($lpi_qtd);


		$resultado = new Zend_Form_Element_Text('arquivo_save');
        $resultado->setLabel('Arquivo Download  : ')
                //->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o nome do arquivo')
                ->setAttrib('placeholder', 'Nome do arquivo - Salvar')
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