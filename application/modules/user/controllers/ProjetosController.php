<?php

class User_ProjetosController extends SON_Controller_Action
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


    public function visualizarAction()
    {
    	$this->_dbProjetos = new Application_Model_Projetos();
        $idgrupo = $this->_request->getParam('idgrupo', 0);
        $dataProjeto = $this->_dbProjetos->find($this->_request->getParam('id', 0));
        $etapas = $this->_dbProjetos->findEtapas($this->_request->getParam('id', 0));
        $minhasEtapas = $this->_dbProjetos->findEtapasFuncionario($this->_request->getParam('id', 0), $this->userId);

        $dataProjeto['inicio'] = date('d/m/Y',strtotime($dataProjeto['inicio']));
        $dataProjeto['fim'] = date('d/m/Y',strtotime($dataProjeto['fim']));
        $this->view->idProjeto = $this->_request->getParam('id', 0); //pega a id do projeto
        $this->view->etapas = $etapas;
        $this->view->projetoInfo = $dataProjeto;

        $this->view->porcentagem = $this->calculoPorcentagemConclusao($etapas);
        $this->view->minhasEtapas = $minhasEtapas;
        $this->view->idgrupo = $idgrupo;
    }

    public function calculoPorcentagemConclusao($etapas) {
            //cálculo do progresso
            $total = 0;
            $concluido = 0;
            foreach ($etapas as $key => $value) {
                if($value['status'] == 'concluido')
                    $concluido += 1;
                $total= $total + 1;
            }

            return number_format(($concluido * 100) / $total, 2);
    }





}