<?php


class SON_Form_Mensagem extends SON_Form_Decorator_Form {
    
    public function init() {
        
        $this->setName('disciplina');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
        
        $titulo = new Zend_Form_Element_Text('titulo');
        $titulo->setLabel('Título: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o titulo');
        $this->addElement($titulo);
        
        
        $mensagem = new Zend_Form_Element_Textarea('mensagem');
        $mensagem->setLabel('Conteúdo do post: ')
                ->setRequired(true)
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe a mensagem')
                ->setAttrib('rows', 10)
                ->setAttrib('cols', 20);
        $this->addElement($mensagem);
        
        
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Inserir novo post')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
    }
    
}
