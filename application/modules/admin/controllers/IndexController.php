<?php

class Admin_IndexController extends SON_Controller_Action
{

    public function init()
    {
        parent::init();
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $modelUser = new Application_Model_User();
        $modelEtapasProjeto = new Application_Model_Etapasprojeto();
        $modelLog = new Application_Model_Logconclusao();
        
        $arrayUser = $modelUser->fetchAll()->toArray();

        if($this->_request->isPost()) {
            var_dump($_POST);
            var_dump(checkdate(2, 29, 2001));

            if ($_POST['de'] != "" && $_POST['ate'] != "") {
                $i1 = strtotime(str_replace('/', '-',$_POST['de']) .' 08:00:00');
                $i2 = strtotime(str_replace('/', '-',$_POST['ate']) .' 20:00:00');

            }
            
        }

        $resultado = array();
        foreach ($arrayUser as $key => $value) {
            if($value['tipo'] == '2') {
                $qtdAtividades = 0;
                $mep = $modelEtapasProjeto->findByUserid($value['id']);
                foreach ($mep as $key2 => $value2) {
                   $fl = $modelLog->find($value2['id']);
                   
                   if($fl) {
                    if(strlen($fl[0]['dia']) > 5 && strlen($fl[0]['inicio']) > 5 ){
                        if(isset($i1) && isset($i2)) {
                            $i3 = strtotime($fl[0]['inicio'] );
                            if($i3 >= $i1 && $i3 <= $i2) {
                                $qtdAtividades += 1;
                            }

                        } else {
                            $qtdAtividades += 1;
                        }
                      }
                   }
                }
                //var_dump($value['nome'] . ' --- ' . $qtdAtividades);
                $resultado[] = array(
                        'nome' => $value['nome'],
                        'qtd' => $qtdAtividades
                    );
            }
        }
        $this->view->resultado = $resultado;

        if(isset($i1) && isset($i2)) {
            $this->view->i1 = $i1;
            $this->view->i2 = $i2;
        } else {
            $this->view->i1 = $i1;
            $this->view->i2 = $i2;
        }

        /*
        $frontendOptions = array(
            'lifetime' => 200, 
            'automatic_serialization' => true
        );
        
         $backendOptions = array(
             'cache_dir' => 'C:\\WorkSpace\\zfday3\\tmp\\' // Directory where to put the cache files
         );

         // getting a Zend_Cache_Core object
         $cache2 = Zend_Cache::factory('Output',
                                      'File',
                                      $frontendOptions,
                                      $backendOptions);

        if (!($cache2->start('mypage'))) {
            // output everything as usual
            echo '<h1>ldldldl</h1>';
            echo 'ronaldo';
            echo 'fenomeno';
            echo 'rei rei';
            $cache2->end(); // output buffering ends
        }
        var_dump($cache2->load('mypage'));
        
        
        
        $frontendOptions = array(
            'lifetime' => 200, 
            'automatic_serialization' => true,
            'cache_id_prefix' => 'samuel_',
            'logging' => true,
         );

         $backendOptions = array(
             'cache_dir' => 'C:\\WorkSpace\\zfday3\\tmp\\' // Directory where to put the cache files
         );

         // getting a Zend_Cache_Core object
         $cache = Zend_Cache::factory('Core',
                                      'File',
                                      $frontendOptions,
                                      $backendOptions);
        if(!$result = $cache->load('myresult')) {
            // cache miss; connect to the database
            $db = new Zend_Db_Adapter_Pdo_Mysql(array(
                                'host'     => '127.0.0.1',
                                'username' => 'root',
                                'password' => '123',
                                'dbname'   => 'zfday3'
                            ));
            $result = $db->fetchAll('SELECT * FROM users');
            $cache->save($result, 'myresult');
            
        } else {
            // cache hit! shout so that we know
            echo "This one is from cache!\n\n";
        }
        
        print_r($result);
        $id = 'myBigLoop'; // cache id of "what we want to cache"
        if (!($data = $cache->load($id))) {
            // cache miss
            $data = '';
            for ($i = 0; $i < 10000; $i++) {
                $data = $data . $i;
            }
            $cache->save($data);
        }
        $data = $cache->load('lambrusqueta');
        var_dump($data);
        
        var_dump($cache->test('myBigLoop'));
        
        
        
        
        $ald = new Zend_Session_Namespace();
        $ald->a = "lslsslls";
        echo $ald->a;
        var_dump($ald);
        Zend_Loader::loadFile('C:\samuel.php');
        var_dump(Zend_Loader::isReadable('C:\samuel.php'));
        var_dump(PHP_OS);
        
        $autoloader = Zend_Loader_Autoloader::getInstance();
        $autoloader->registerNamespace('My_');
        $samuel = new My_Samuel();
        $samuel->personalidade();
        
        My_Pai::peidar();
        
        $irma = new My_Irma();
        $irma->ola();
        // action body
        //$this->_redirect('/admin/cursos');
		
		*/
        
    }


}


