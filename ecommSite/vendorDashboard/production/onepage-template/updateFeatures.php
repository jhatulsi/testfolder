<?php 
	include 'dbconn.php'; 
	
	$error = '';
	$success = '';
	
	if(count($_POST)>0){
		$ftrs_h1 = $_POST['ftrs_h1'];
		$ftrs_t1 = $_POST['ftrs_t1'];
		$ftrs_h2 = $_POST['ftrs_h2'];
		$ftrs_t2 = $_POST['ftrs_t2'];
		$ftrs_h3 = $_POST['ftrs_h3'];
		$ftrs_t3 = $_POST['ftrs_t3'];
		$ftrs_h4 = $_POST['ftrs_h4'];
		$ftrs_t4 = $_POST['ftrs_t4'];
		
		$sql = "UPDATE features_tb SET ftrs_h1 = '$ftrs_h1', ftrs_t1= '$ftrs_t1', ftrs_h2= '$ftrs_h2', ftrs_t2= '$ftrs_t2', ftrs_h3='$ftrs_h3', ftrs_t3='$ftrs_t3', ftrs_h4='$ftrs_h4', ftrs_t4='$ftrs_t4' WHERE id=1";
		
		
		//echo '<pre>';print_r($sql);exit;
		
		
		if (mysql_query($sql,$conn)) {
			$success = "Record updated successfully";
		} else {
			$error= "Error updating record: " . mysql_error($conn);
		}
		

		mysql_close($conn);
		
	}


?>