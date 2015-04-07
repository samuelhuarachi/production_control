<?php

class User_IndexController extends SON_Controller_Action
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
    }

    public function indexAction()
    {
        $this->_dbProjetos = new Application_Model_Projetos();
        $filtros = new Zend_Session_Namespace('filtros');
        $funcoes = new Funcoes_Geral();
        $filtroParam = $this->_request->getParam('filtro', '0');
        $idGrupo = $this->_request->getParam('idgrupo', '0');
        $this->view->filtroParam = $filtroParam;


        //Gerencia os filtros da pesquisa - inicio
        if($this->_request->isPost()) {

            if($_POST['date_de'] <> "")
            {
                $filtros->de = $funcoes->formata_data_para_padrao_mysql( $_POST['date_de']);
            } else {
                throw new Exception('Data inválida');
            }

            if($_POST['date_ate'] <> ""){
                $filtros->ate =  $funcoes->formata_data_para_padrao_mysql( $_POST['date_ate']);
            } else {
                throw new Exception('Data inválida');
            }
            
        }

        //Se nao existir a sesseão de
        if(!isset($filtros->de)) {
            $filtros->de = date('Y-m-d H:i:s', strtotime("-15 days"));
        }
        //Se não existir a sessão até
        if(!isset($filtros->ate)) {
            $filtros->ate = date('Y-m-d H:i:s', strtotime("+15 days"));
        }
        $this->view->data_de = date('d/m/Y',strtotime($filtros->de));
        $this->view->data_ate = date('d/m/Y',strtotime($filtros->ate));


        $filtroSQL = array();
        $data_atual =  $funcoes->formata_data_para_padrao_mysql(date("d/m/Y")); 
        if($filtroParam == 'atrasado') {
            //$filtroSQL['fim <= ?'] = $data_atual;
        }
        if($filtros->de <> "") {
            //$filtroSQL['inicio >= ?'] = $filtros->de;
        }
        if($filtros->ate <> "") {
            //$filtroSQL['inicio <= ?'] = $filtros->ate;
        }

        //Gerencia os filtros da pesquisa - fim
        
        $filtroSQL['id_grupo = ?'] = (int)$idGrupo;

        $registros = $this->_dbProjetos->search(array('page' => $this->_request->getParam('pagina', 1),
                'conditions' => $filtroSQL
            )); 

        $this->view->registros = $registros;
        $this->view->id_usuario = $this->userId;
        $this->view->idGrupo = $idGrupo;

        
    }

    public function projetoAction() {
    	
    	
    }

}


