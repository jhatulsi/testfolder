<?php 
		session_start();
		if(session_destroy()){
			echo " LogOut Done Successfully";
			header("loaction:../login.php");
		}
		
		
?>