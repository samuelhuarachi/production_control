<?php


class SON_Form_Adminc extends Zend_Form {


    public function init(){

        $this->setName('admic');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));


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

        //Submit
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        $this->addElement($submit);
    }
}