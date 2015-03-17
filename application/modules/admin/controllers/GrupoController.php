<?php

class Admin_GrupoController extends SON_Controller_Action
{

    public function init()
    {
        parent::init();
        /* Initial ize action controller here*/

        //This will catch any messege set in any action in this controller and send
        //it to the view on the next request.
        if ($this->_helper->FlashMessenger->hasMessages()) {
            $this->view->messages = $this->_helper->FlashMessenger->getMessages();
        }

        $this->_dbProjetos = new Application_Model_Projetos();
        $this->_modelEtapas = new Application_Model_Etapasprojeto();
        $this->_modelClientes = new Application_Model_Clientes();
        $this->_modelGrupo = new Application_Model_Grupo();
        $this->funcoes = new Funcoes_Geral();
    }

    function deleteAction() {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(TRUE);
        $id = $this->_request->getParam('id', '0');
        $this->_modelGrupo->delete($id);
        $this->_redirect('admin/grupo/adicionar');
    }

    function adicionarAction() {
        $frm = new SON_Form_Grupo();
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


        $frm->getElement('submit')->setLabel('Adicionar');
        $this->view->frm = $frm;


    }



}