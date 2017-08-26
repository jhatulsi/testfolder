
<?php
   include '../dbconn.php';
   if(count($_POST)>0){
	   
	   $username = $_POST['username'];
	   $password = $_POST['password'];
   
		$newpassword = stripslashes(md5($password));
		
   $sql ="INSERT INTO sliderlogin_tb(`username`, `password`,is_active)
   VALUES ('$username', '$newpassword', 1)";
      
   mysql_select_db('example');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not enter data: ' . mysql_error());
   }
   
   echo "Entered data successfully\n";
   
   mysql_close($conn);
   
   }
   
?> 	