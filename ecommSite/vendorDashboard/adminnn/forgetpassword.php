<?php
//echo '<pre>';print_r($_POST);exit;

session_start();
include('dbconn.php');

//echo 'hello';exit;
if(isset($_POST['submit'])){
	
	//echo '<pre>';print_r($_POST);exit;
	
//if(isset($_POST) & !empty($_POST)){
 	$email = mysql_real_escape_string($_POST['email']);
	
//echo '<pre>';print_r($_POST);exit;
	$sql = "SELECT * FROM `sliderlogin_tb` WHERE email = '$email'";
	
	$res = mysql_query($sql,$conn);
	$count = mysql_num_rows($res);
	if($count == 1){
		
				$r = mysql_fetch_assoc($res);
				$password = $r['password'];
				$to = $r['email'];
				$subject = "Your Recovered Password";
				 
				$message = "Please use this password to login " . $password;
				$headers = "From :vivek@codingcyber.com";
				if(mail($to, $subject, $message, $headers)){
					echo "Your Password has been sent to your email id";
				}else{
					echo "Failed to Recover your password, try again";
					}
				}else{
		        echo "User name does not exist in database";
	                 }
	
}







?>