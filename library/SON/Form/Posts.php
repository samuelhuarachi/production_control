<?php

class SON_Form_Posts extends Zend_Form {
    //put your code here
    
    public function init() {
        
        $this->setName('categorias');
        $this->setAttrib('class', 'zend_form form-horizontal');
        
		
		
        $titulo = new Zend_Form_Element_Text('titulo');
        $titulo->setLabel('Título: ')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe o título');
        $this->addElement($titulo);
		
		
		$textarea = new Zend_Form_Element_Textarea('conteudo');
		$textarea->setLabel('Conteúdo: ')
					->setAttrib('title', 'Informe o conteúdo')
					->setRequired(true);
			
		$textarea->getDecorator('Label')->setOption('escape',false);
			
		$this->addElement($textarea);
		
		$categoria = new Application_Model_Categoria();
        $categorias = new Zend_Form_Element_Select('id_categoria');
        $categorias->setLabel('Categorias')
                ->setRequired(true)
                ->setMultiOptions(array('' => '- selecione -') +  $categoria->fetchPairs());
        $this->addElement($categorias);
		
		
		$subcategoria = new Application_Model_Subcategorias();
        $subcategorias = new Zend_Form_Element_Select('id_subcategoria');
        $subcategorias->setLabel('Sub-categorias')
                ->setRequired(true)
                ->setMultiOptions(array('' => '- selecione -') +  $subcategoria->fetchPairs());
        $this->addElement($subcategorias);
		
		
		$this->addElement('checkbox', 'destaque', array(
			'label' => 'Mostrar em destaque',
			'name' => 'destaque',
			'disableHidden' => true,
			'checked' => true
		));
		
		
		$urlname = new Zend_Form_Element_Text('urlname');
        $urlname->setLabel('guaranifc.com.br/portal/noticias/')
                ->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                ->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe a url');
        $this->addElement($urlname);
		
		
		
		
		$carregarImagem = new Zend_Form_Element_Text('foto2');
        $carregarImagem->setLabel('Carregar imagem')
                //->setRequired(true)
                ->addFilter('StripTags')
                ->addFilter('StringTrim')
                //->addValidator('NotEmpty')
                ->setAttrib('title', 'Informe a imagem');
        $this->addElement($carregarImagem);
		
		
		
		
		
		$upload = new Zend_Form_Element_File('foto');
		$upload->setLabel('Imagem do post')
			->addValidator('Extension', false, array('jpg', 'png', 'gif'))
			->addValidator('Size', false, 1000240000)
			//->setRequired(true)
			->setDestination(realpath(dirname(__FILE__)) . '/../../../portal/uploads');
		$this->addElement($upload);
		
		
		//var_dump($_SERVER['HTTP_HOST']);
		//var_dump(realpath(dirname(__FILE__)));
		
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Salvar')
                ->setAttrib('class', 'btn btn-large btn-primary')
                ->setIgnore(true);
        
        $this->addElement($submit);
        
		
		
		
    }
    
}
