<?php


class SON_Form_Funcionarios extends Zend_Form {


    public function init(){

        $this->setName('user');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));


        $email = new Zend_Form_Element_Text('email');
        $email->setLabel('E-mail:')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->addValidator('EmailAddress',  TRUE  ) // added true here
                ->setAttrib('class', 'form-control')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        'Label',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe o e-mail');
        $this->addElement($email);

        $password = new Zend_Form_Element_Password('password');
        $password->setLabel('Senha:')
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
                ->setAttrib('title', 'Informe o password');
        $this->addElement($password);

        $nome = new Zend_Form_Element_Text('nome');
        $nome->setLabel('Nome:')
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
                ->setAttrib('title', 'Informe o nome');
        $this->addElement($nome);


        //Tabela funcionários
        $rg = new Zend_Form_Element_Text('rg');
        $rg->setLabel('Rg:')
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
                ->setAttrib('title', 'Informe o rg');
        $this->addElement($rg);

        $dataNasc = new Zend_Form_Element_Text('data_nascimento');
        $dataNasc->setLabel('Data de nascimento:')
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
                ->setAttrib('title', 'Informe a data de nascimento');
        $this->addElement($dataNasc);


        $admissao = new Zend_Form_Element_Text('admissao');
        $admissao->setLabel('Data de admissão:')
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
                ->setAttrib('title', 'Informe a data de admissao');
        $this->addElement($admissao);

        $salario = new Zend_Form_Element_Text('salario');
        $salario->setLabel('Salário:')
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
                ->setAttrib('title', 'Informe o salario');
        $this->addElement($salario);

        $cargo = new Zend_Form_Element_Text('cargo');
        $cargo->setLabel('Cargo:')
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
                ->setAttrib('title', 'Informe o cargo');
        $this->addElement($cargo);
        

        //Submit
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        $this->addElement($submit);
    }


}



