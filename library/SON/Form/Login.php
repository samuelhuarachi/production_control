<?php

class SON_Form_Login extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('login');
        $this->setAttrib('class', 'form-inline');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        $email = new Zend_Form_Element_Text('email');
        $email
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o email')
                ->setAttrib('placeholder', 'E-mail')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('class', 'form-control');
                
        
        $this->addElement($email);
        
        $password = new Zend_Form_Element_Password('password');
        $password //->setLabel('Senha: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('class', 'form-control')
                ->setAttrib('placeholder', 'Senha')
                ->setDecorators(array(
                        'ViewHelper',
                        'Errors',
                        'Description',
                        array(array('out' => 'HtmlTag'), array('tag' => 'div', 'class' => 'form-group'))
                    ))
                ->setAttrib('title', 'Informe a senha');
        
        $this->addElement($password);
        
        

        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Entrar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setDecorators(array(
                        'ViewHelper'))
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}

?>



