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


