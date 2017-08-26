<?php 
		session_start();
		if(session_destroy()){
			echo " LogOut Done Successfully";
			echo "<script>window.open('login.php','_self')</script>";
			//header("loaction:../login.php");
		}
		
		
?>