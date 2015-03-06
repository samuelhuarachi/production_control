<?php


class SON_Form_Comentario extends SON_Form_Decorator_Form {
    
    public function init() {
        
        $this->setName('disciplina');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
        
        $nome = new Zend_Form_Element_Text('nome');
        $nome->setLabel('Nome: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o nome');
        $this->addElement($nome);
        
        
        $email = new Zend_Form_Element_Text('email');
        $email->setLabel('Email: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->addValidator('EmailAddress',  TRUE  )
                ->setAttrib('title', 'Informe o email');
        $this->addElement($email);
        
        $comentario = new Zend_Form_Element_Textarea('comentario');
        $comentario->setLabel('Comentário: ')
                ->setRequired(true)
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o comentário')
                ->setAttrib('rows', 10)
                ->setAttrib('cols', 20);
        $this->addElement($comentario);
        
        
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Comentar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}
