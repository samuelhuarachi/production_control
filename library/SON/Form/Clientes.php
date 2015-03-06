<?php


class SON_Form_Clientes extends Zend_Form {


    public function init(){

        $this->setName('clientes');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        $clientes = new Zend_Form_Element_Text('nome');
        $clientes->setLabel('Cliente:')
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
                ->setAttrib('title', 'Informe o cliente');
        $this->addElement($clientes);

        //Submit
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Adicionar cliente')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        $this->addElement($submit);


	}
}