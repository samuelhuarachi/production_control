<?php 



class SON_Form_Projetos extends Zend_Form {



	public function init(){
		ZendX_JQuery::enableForm($this);
		$this->setName('user');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        // $_modelClientes = new Application_Model_Clientes();
        // $cliente = new Zend_Form_Element_Select('id_cliente');
        // $cliente->setLabel('Clientes')
        //             ->setRequired(true)
        //             ->setAttrib('class', 'form-control')
        //             ->setDecorators(array(
        //                 'ViewHelper',
        //                 'Errors',
        //                 'Description',
        //                 'Label',
        //                 array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
        //             ))
        //             ->setMultiOptions(array(null => '- selecione -') +  $_modelClientes->fetchPairs());
        // $this->addElement($cliente);

        // $projeto = new Zend_Form_Element_Text('codigo_projeto');
        // $projeto->setLabel('Código:')
        //         ->setRequired(true)
        //         ->addFilter('StripTags')
        //         ->addFilter('StringTrim')    
        //         ->addValidator('NotEmpty')
        //         ->setAttrib('class', 'form-control')
        //         ->setDecorators(array(
        //                 'ViewHelper',
        //                 'Errors',
        //                 'Description',
        //                 'Label',
        //                 array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
        //             ))
        //         ->setAttrib('title', 'Informe o código do projeto');
        // $this->addElement($projeto);


        $nome = new Zend_Form_Element_Text('nome');
        $nome->setLabel('Nome do projeto:')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe o nome do projeto');
        $this->addElement($nome);

        $dataInicial = new Zend_Form_Element_Text('inicio');
        $dataInicial->setLabel('Data inicial:')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'data_inicial form-control')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe a data inicial');
        $this->addElement($dataInicial);

        $dataFinal = new Zend_Form_Element_Text('fim');
        $dataFinal->setLabel('Data final:')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'data_final form-control')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe a data final');
        $this->addElement($dataFinal);

        $kilometragem = new Zend_Form_Element_Text('km');
        $kilometragem->setLabel('kilometragem:')
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe a kilometragem');
        $this->addElement($kilometragem);


        //Submit
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        $this->addElement($submit);
        

	}

}