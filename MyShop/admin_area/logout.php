<?php 
		session_start();
		
		
		session_destroy();
		
		echo "<script>window.open('login.php?logout = You successfully Logged Out.Come Back Soon.','_self')</script>";



?>