
<?php
   include 'dbconn.php';
   if(count($_POST)>0){
	  // echo '<pre>';print_r($_POST);exit;
	   
	   $email = $_POST['email'];
	   $password = $_POST['password'];
   
  
		//$newpassword = stripslashes(md5($password));
		
   $sql ="INSERT INTO vendorlogin_tb(`email`, `password`,is_active)
   VALUES ('$email', '$password', 1)";
      
   mysql_select_db('ecommsite');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not enter data: ' . mysql_error());
   }
   
   echo "<script>Entered data successfully</script>";
   echo "<script>window.open('../production/dashboardIndex.php',_self)</script>";
   
   mysql_close($conn);
   
   }
   
?> 	