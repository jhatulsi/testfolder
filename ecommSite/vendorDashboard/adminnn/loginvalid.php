<?php 
session_start();
		include 'dbconn.php';
		$error = "";
		if(count($_POST)>0){
			
			//echo '<pre>';print_r($_POST);exit;
			
			$email = $_POST['vendor_email']; 
			$password = $_POST['vendor_password'];
			if(isset($_POST['re'])){
				$re = "on";
			}else{
				$re="";
			}
			
			//$re = $_POST['re'];
			//echo '<pre>';print_r($_POST);exit;		
			if($email !='' && $password != '' ){
				$email = stripslashes($email);
				//$password = stripslashes(md5($password));
				$password = stripslashes($password);
				
				//exit($email);
				$sql = "SELECT * FROM vendors where vendor_password='$password' and vendor_email='$email'";
				
				
				//echo '<pre>';print_r($sql);exit;
				$result = mysql_query($sql,$conn);
				
				//echo '<pre>';print_r($result);exit;
				
				$rows = mysql_num_rows($result);
				
					echo '<pre>';print_r(mysql_num_rows($result));exit;
				
				if($rows == 1){
					if($re == "on"){
						setcookie("username_cookie",$email,time() + (86400 * 10));
						setcookie("password_cookie",$password,time() + (86400 * 10));
					}else{
						
						setcookie("username_cookie",$email,time()-(86400 * 10));
						setcookie("password_cookie",$password,time()-(86400 * 10));
					}
					
					session_start();
					$_SESSION['loginUser'] = $rows['vendor_name'];
					
					echo "<script>alert('logged in')</script>";
				//	echo "<script>window_open('../production/dashboardIndex','_self')</script>";
				header('location:../production/dashboardIndex.php');
					//echo "user loggedin";
					//exit;
					
				}else{
				echo "Invalid Username and Password";
				exit();
				}
			/*	
				session_start();
				
				$row = mysql_fetch_array($result,MYSQL_ASSOC);
			//	echo '<pre>';print_r($row['email']);exit;
				if(!empty($row['email']) && !empty($row['password'])){
					
						$_SESSION['loginUser'] = $row['email'];
						echo 'done succesfully';
					//	header('location:../production/indexpage.php');
						
				}else{
					
					$_SESSION['loginUser'] != $row['email'];
					$error = "Invalid Email Or Password";
				}
				
				*/
			} 
			
		
			
		}
		
?>