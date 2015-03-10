<?php
class SON_Form_Ferias extends Zend_Form {


    public function init(){

        $this->setName('ferias');
        $this->setDecorators(array(
                             'FormElements',
                             'Form'));

        $inicio = new Zend_Form_Element_Text('inicio');
        $inicio->setLabel('Inicio das férias:')
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
                ->setAttrib('title', 'Data início das férias');
        $this->addElement($inicio);

        $fim = new Zend_Form_Element_Text('fim');
        $fim->setLabel('Fim das férias:')
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
                ->setAttrib('title', 'Data final das férias');
        $this->addElement($fim);

        $observacoes = new Zend_Form_Element_Textarea('observacoes');
        $observacoes->setLabel('Observações: ')
                    ->setAttrib('title', 'Informe as observações');
        $observacoes->setOptions(array('cols' => '100', 'rows' => '4'));
        $observacoes->getDecorator('Label')->setOption('escape',false);
        $this->addElement($observacoes);



        $this->addElement('hidden', 'ferias', array(
					'value'      => 'helloVideos'
				));

        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-default')
                ->setIgnore(true);
        $this->addElement($submit);

    }
}