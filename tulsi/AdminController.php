<?php

class AdminController extends Zend_Controller_Action {


	public function indexAction(){
	
	
	// echo 'fffff';exit;
		// $this->_helper->layout->disableLayout();
		
		$layout = Zend_Layout::getMvcInstance();
		$layout->setLayout('adminlayout');
                
                $userid = $this->getRequest()->getParam('id');
//                echo $userid;exit;
                $userModel = new Model_DbTable_Usertable();
                
//                $userData = $userModel->getUserData($userid);
                
                $userData = $userModel->getUserDataPDO($userid);
                
//                echo $userData[0]['name'];exit;
                
//                echo $userData[0]->name;exit;
                
                
//                $this->getRequest()->get
                
                echo '<pre>'; print_r($userData);exit;
                
//                
                
         /*       
                
                if($this->getRequest()->isPost())
		{
//                    echo 'form submitted';
//                    exit;
                 $formData = $this->getRequest()->getPost();   
                    
//                 echo '<pre>'; print_r($formData);exit;
		
                
                $dataArr['name']        = $formData['username'];
//                $dataArr['password']    = md5($formData['password']);
//                $dataArr['is_active']   = 1;
//                $dataArr['add_date']    = date('Y-m-d H-i-s');
                
//                $userModel->insert($dataArr);
                
                
                $where = "id=$userid";
                
                $userModel->update($dataArr,$where);
		 
                    
                }
          * 
          */
		// $propertyForm = new Application_Form_PropertyForm();
        // $this->view->propertyForm   = $propertyForm;  
	}

	public function homepageAction(){
            
            //echo UPLOAD_DIR; exit;
	
            $layout = Zend_Layout::getMvcInstance();
            $layout->setLayout('adminlayout');
            $error = '';
            $success = '';  
            
	    if($this->getRequest()->isPost()){
                $formData = $this->getRequest()->getPost();  
                $filesArr = $_FILES;
         
                

                $area_1 = $formData['area_1'];
                $area_2 = $formData['area_2'];
                $area_3 = $formData['area_3'];
                $area_4 = $formData['area_4'];
 

                if (count($filesArr['img_1'])==0) {
                    $error .= "image 1 cannot be blank.";
                } else {
                   $error .= $this->uploadFile($filesArr['img_1'], $error);
                }  
                
                
                
                 if (count($filesArr['img_2'])==0) {
                    $error .= "image 2 cannot be blank.";
                } else {
                   $error .= $this->uploadFile($filesArr['img_2'], $error);
                } 
                
                  


                 $target_file = $target_dir . basename($_FILES["img_3"]["name"]);

                $uploadOk = 1;
                $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        
         
    //                 echo '<pre>'; print_r($formData);print_r($filesArr);exit;
              if ($uploadOk == 0) {
                $error .= "Sorry, your file was not uploaded.";
            } else {
                if (move_uploaded_file($_FILES["img_3"]["tmp_name"], $target_file)) {
                    $success .= "The file ". basename( $_FILES["img_3"]["name"]). " has been uploaded.<br>";
                } else {
                    $error .= "Sorry, there was an error uploading your file.<br>";
                }
            } 

             $target_file = $target_dir . basename($_FILES["img_4"]["name"]);

            $uploadOk = 1;
            $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


    //                 echo '<pre>'; print_r($formData);print_r($filesArr);exit;
              if ($uploadOk == 0) {
                $error .= "Sorry, your file was not uploaded.";
            } else {
                if (move_uploaded_file($_FILES["img_4"]["tmp_name"], $target_file)) {
                    $success .= "The file ". basename( $_FILES["img_4"]["name"]). " has been uploaded.<br>";
                } else {
                    $error .= "Sorry, there was an error uploading your file.<br>";
                }
            } 

             $target_file = $target_dir . basename($_FILES["img_5"]["name"]);

            $uploadOk = 1;
            $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


    //                 echo '<pre>'; print_r($formData);print_r($filesArr);exit;
              if ($uploadOk == 0) {
                $error .= "Sorry, your file was not uploaded.";
            } else {
                if (move_uploaded_file($_FILES["img_5"]["tmp_name"], $target_file)) {
                    $success .= "The file ". basename( $_FILES["img_5"]["name"]). " has been uploaded.<br>";
                } else {
                    $error .= "Sorry, there was an error uploading your file.<br>";
                }
            } 

            if($area_1 == ''){
                $error .= "area 1 is empty.<br>";
            }else{
                $success .= "area 1 is done.";
            }

            if($area_2 == ''){
                $error .= "area 2 is empty.<br>";
            }else{
                $success .= "area 2 is done.";
            }

            if($area_3 == ''){
                $error .= "area 3 is empty.<br>";
            }else{
                $success .= "area 3 is done.";
            }

            if($area_4 == ''){
                $error .= "area 4 is empty.<br>";
            }else{
                $success .= "area 4 is done.";
            }


             $this->view->error = $error;
             $this->view->success = $success;
    }
    
    
		
		
    }
    
    
    public function uploadFile($imageArr,$error){
        
        $target_dir = UPLOAD_DIR.'/';
        $target_file = $target_dir . basename($imageArr["name"]);
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        if (!move_uploaded_file($imageArr["tmp_name"], $target_file)) {
             $error .= "Sorry, there was an error uploading your file.<br>";
        }
        return $error;
    }

}	
