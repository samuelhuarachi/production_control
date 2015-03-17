<?php

class SON_Form_Addetapas extends Zend_Form {
    //put your code here

    public function init() {

        $this->setName('addetapas');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));
        
        $todos = new Zend_Form_Element_Checkbox('todos');
        $todos->setLabel('Aplicar em todos')
                ->setAttrib('class', 'checkbox')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setName('todos');
        $this->addElement($todos);



        $nome = new Zend_Form_Element_Text('nome');
        $nome->setLabel('Nome: ')
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
                ->setAttrib('title', 'Informe o nome da etapa');
        $this->addElement($nome);

        $modelUser = new Application_Model_User();
        $funcionario = new Zend_Form_Element_Select('id_funcionarios');
        $funcionario->setLabel('Funcionário')
       	 			->setAttrib('class', 'form-control')
                	->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                	->setMultiOptions(array('0' => '- selecione -') +  $modelUser->fetchPairs(array('tipo = ?' => '2')));
        $this->addElement($funcionario);


        $inicio = new Zend_Form_Element_Text('inicio');
        $inicio->setLabel('Data inicial: ')
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control inicio')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe a data inicial');
        $this->addElement($inicio);

        $fim = new Zend_Form_Element_Text('fim');
        $fim->setLabel('Data final: ')
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control fim')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe a data final');
        $this->addElement($fim);


        $status = new Zend_Form_Element_Select('status');
        $status->setLabel('Status')
                    ->setAttrib('class', 'form-control')
                    ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                    ->setMultiOptions(array('aberto' => 'Aberto','em andamento' => 'Em andamento', 'concluido' => 'Concluído'));
        $this->addElement($status);


        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);

    }
}