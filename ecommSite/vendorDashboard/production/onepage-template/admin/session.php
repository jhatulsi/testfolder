<?php 

	include 'dbconn.php';
	session_start();
	$user_check = $_SESSION['loginUser'];
	$ses_sql = mysql_query("select email from sliderlogin.php where email = '$user_check'",$conn);
	
	$row = mysql_fetch_array($ses_sql,MYSQL_ASSOC);
	$login_session = $row['email'];

	if(!isset($_SESSION['loginUser'])){
		header("location:loginform.php");
	}


?>