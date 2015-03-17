<?php 
class SON_Form_Grupo extends Zend_Form {

	public function init(){
		ZendX_JQuery::enableForm($this);
		$this->setName('grupo');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        $_modelClientes = new Application_Model_Clientes();
        $cliente = new Zend_Form_Element_Select('id_cliente');
        $cliente->setLabel('Clientes')
                    ->setRequired(true)
                    ->setAttrib('class', 'form-control')
                    ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                    ->setMultiOptions(array(null => '- selecione -') +  $_modelClientes->fetchPairs());
        $this->addElement($cliente);


        $projeto = new Zend_Form_Element_Text('codigo_projeto');
        $projeto->setLabel('Código:')
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
                ->setAttrib('title', 'Informe o código do projeto');
        $this->addElement($projeto);


        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        $this->addElement($submit);

    }

}