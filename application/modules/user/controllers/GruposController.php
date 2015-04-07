<?php

class User_GruposController extends SON_Controller_Action
{
	public function init()
    {
        parent::init();
        /* Initialize action controller here */
        //This will catch any messege set in any action in this controller and send
        //it to the view on the next request.
        if ($this->_helper->FlashMessenger->hasMessages()) {
            $this->view->messages = $this->_helper->FlashMessenger->getMessages();
        }
        $this->_modelGrupo = new Application_Model_Grupo();
        $this->funcoes = new Funcoes_Geral();
    }


    function visualizarAction() {

        $filtros = new Zend_Session_Namespace('filtros');
        $conditions = array();

        if($this->_request->isPost()) {

            if(!isset($_POST['date_de'])) {
                if ($frm->isValid($this->_request->getPost())) {
                    $data = $frm->getValues();

                    //Verifica se o código do projeto existe no sistema
                    $search1 = $this->_modelGrupo->findByProjectCode($data['codigo_projeto']);
                    if(!$search1) {
                        $data['cadastro'] = date('Y-m-d h:i:s');
                        $this->_modelGrupo->save($data);
                    }
                }
            } else {
                if ( $_POST['date_de'] != "" &&  $_POST['date_ate'] != "" && $_POST['codigo'] == "" ) {

                    $filtros->de = $this->funcoes->formata_data_para_padrao_mysql($_POST['date_de']);
                    $filtros->ate = $this->funcoes->formata_data_para_padrao_mysql($_POST['date_ate']);
                }
                if($_POST['codigo'] != "") {
                    $conditions['grupo.codigo_projeto LIKE ?'] = '%'.$_POST['codigo'].'%';
                    $filtros->codigo = $_POST['codigo'];
                }
            }
        }

        //Se nao existir a sesseão de
        if(!isset($filtros->de)) {
            $filtros->de = date('Y-m-d H:i:s', strtotime("-30 days"));
        }
        //Se não existir a sessão até
        if(!isset($filtros->ate)) {
            $filtros->ate = date('Y-m-d H:i:s', strtotime("+30 days"));
        }


        $this->view->de = date('d/m/Y', strtotime($filtros->de));
        $this->view->ate = date('d/m/Y', strtotime($filtros->ate)) ;
        $this->view->codigo = $filtros->codigo;

        //Listar os projetos

        
        $conditions['grupo.cadastro >= ?'] = $filtros->de;
        $conditions['grupo.cadastro <= ?'] = $filtros->ate;


        $registros = $this->_modelGrupo->search(
            array('page' => $this->_request->getParam('pagina', 1),
                    'conditions' => $conditions,
                )
            ); 
        $this->view->registros = $registros;
    }



}