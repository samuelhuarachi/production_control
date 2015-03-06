<?php


class Admin_FuncionariosController extends SON_Controller_Action
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
    {  }

    public function deleteAction() {
        $this->_dbUser = new Application_Model_User();
        //$this->_dbFuncionarios = new Application_Model_Funcionarios();

        $this->_dbUser->delete($this->_request->getParam('id',0));
        //$this->_dbFuncionarios->delete($this->_request->getParam('id',0));

        $this->_helper->flashMessenger->addMessage("O funcionário foi deletado do sistema");

        $this->_redirect('/admin/funcionarios/visualizar');
    }

    public function editarAction() 
    {
        $funcoes = new Funcoes_Geral();
        $this->_dbUser = new Application_Model_User();
        $funcionario = $this->_dbUser->find($this->_request->getParam('id', 0));

        $formularioFuncionarios = new SON_Form_Funcionarios();
        $formularioFuncionarios->getElement('password')->removeValidator('NotEmpty');
        $formularioFuncionarios->getElement('password')->setRequired(false);


        if($funcionario){
            $funcionario['0']['admissao'] = $funcoes->volta_data_ao_normal($funcionario['0']['admissao']);
            $formularioFuncionarios->populate($funcionario['0']);
        }
        


        //Trata da atualização das infomrações do usuário
        if($this->_request->isPost()) {
        
            if($formularioFuncionarios->isValid($this->_request->getPost())){
                //$data = $formularioFuncionarios->getValues();
                //$this->_db->save($data);

                $dataUser = $formularioFuncionarios->getValues(); // Informações que serão inseridas na tabela dos usuários
                //
                $dataUser['id'] = $this->_request->getParam('id', 0);



                $dataFuncionarios = array(); // Informações que serão inseridas na tabela dos funcionários

                $dataFuncionarios['id'] = (int)'11111111111111';
                $dataFuncionarios['id_user'] = (int)$dataUser['id'];
                $dataFuncionarios['rg'] = $dataUser['rg'];
                $dataFuncionarios['data_nascimento'] = $dataUser['data_nascimento'];
                $dataFuncionarios['admissao'] = $funcoes->formata_data_para_padrao_mysql($dataUser['admissao']);
                $dataFuncionarios['salario'] = $dataUser['salario'];
                $dataFuncionarios['cargo'] = $dataUser['cargo'];

                unset($dataUser['cargo']);
                unset($dataUser['salario']);
                unset($dataUser['rg']);
                unset($dataUser['data_nascimento']);
                unset($dataUser['admissao']);
                

                $this->_dbUser = new Application_Model_User();
                $this->_dbUserDbtable = new Application_Model_DbTable_User();
                $this->_dbUser->save($dataUser); //salva informações no banco de dados

                $this->_dbFuncionarios = new Application_Model_Funcionarios();
                $this->_dbFuncionarios->save($dataFuncionarios); //salva informações no banco de dados
                


                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("O funcionário(a) ".$dataUser['nome']." foi atualizado com sucesso");
                //Redireciona
                $this->_redirect('admin/funcionarios/visualizar');
            }
        }




        $formularioFuncionarios->getElement('submit')->setLabel('Atualizar as informações do funcionário');
        $this->view->formularioFuncionarios = $formularioFuncionarios;
    }

    public function visualizarAction()
    {
        $this->_dbUser = new Application_Model_User();
        $this->view->registros = $this->_dbUser->search(array('page' => $this->_request->getParam('pagina', 1))); 
    
    }
    public function cadastrarAction()
    {
        $funcoes = new Funcoes_Geral();
    	$formularioCadastro = new SON_Form_Funcionarios();
        $formularioCadastro->getElement('submit')->setLabel('Cadastrar novo funcionário');

        //Se $_POST
    	if($this->_request->isPost()) {
            
            //Se formulário é válido
            if($formularioCadastro->isValid($this->_request->getPost())){
                $dataUser = $formularioCadastro->getValues(); // Informações que serão inseridas na tabela dos usuários
                $dataFuncionarios = array(); // Informações que serão inseridas na tabela dos funcionários

                $dataFuncionarios['rg'] = $dataUser['rg'];
                $dataFuncionarios['data_nascimento'] = $dataUser['data_nascimento'];
                $dataFuncionarios['admissao'] = $funcoes->formata_data_para_padrao_mysql($dataUser['admissao']);
                $dataFuncionarios['salario'] = $dataUser['salario'];
                $dataFuncionarios['cargo'] = $dataUser['cargo'];


                unset($dataUser['cargo']);
                unset($dataUser['salario']);
                unset($dataUser['rg']);
                unset($dataUser['data_nascimento']);
                unset($dataUser['admissao']);

                $this->_dbUser = new Application_Model_User();
                $this->_dbUserDbtable = new Application_Model_DbTable_User();
                $dataUser['tipo'] = '2'; //define o tipo do usário como 2 = funcionário
                $this->_dbUser->save($dataUser); //salva informações no banco de dados

                $last_id = $this->_dbUserDbtable->getAdapter()->lastInsertId(); //Pega a id
                //do usuário que acabou de ser inserido


                $dataFuncionarios['id_user'] = (int)$last_id;
                $data_atual = new Zend_Date();
                $dataFuncionarios['data_cadastro'] = $data_atual->toString('YYYY-MM-dd HH:mm:ss');


                $this->_dbFuncionarios = new Application_Model_Funcionarios();
                $this->_dbFuncionarios->save($dataFuncionarios); //salva informações no banco de dados
                
                //Flash mensager avisando que o usuário foi cadastrado com sucesso
                $this->_helper->flashMessenger->addMessage("O funcionário(a) ".$dataUser['nome']." foi cadastrado no sistema");
                //Redireciona
                $this->_redirect('/admin/funcionarios/cadastrar');
            }
        }



    	$this->view->formularioCadastro = $formularioCadastro;
    }
}