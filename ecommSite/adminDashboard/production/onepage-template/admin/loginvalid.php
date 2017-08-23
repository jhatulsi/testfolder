<?php 
		include 'dbconn.php';
		$error = "";
		if(count($_POST)>0){
			
			$email = $_POST['email']; 
			$password = $_POST['password'];
			
			if($email !='' && $password != '' ){
				$email = stripslashes($email);
				$password = stripslashes(md5($password));
				
				$sql = "SELECT * FROM sliderlogin_tb where password='$password' and email='$email'";
				$result = mysql_query($sql,$conn);
				$row = mysql_fetch_array($result,MYSQL_ASSOC);
				
				if(!empty($row['email']) && !empty($row['password'])){
						$_SESSION['loginUser'] = $row['email'];
						header('location:../imageform.php');
				}else{
					$_SESSION['loginUser'] != $row['email'];
					$error = "Invalid Email Or Password";
				}
				
				
			}
			
		
			
		}
		
?>