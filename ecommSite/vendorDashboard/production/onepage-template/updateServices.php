<?php 

		include 'dbconn.php'; 
	
	$error = '';
	$success = '';
	
	if(count($_POST)>0){
		$srvs_h1 = $_POST['srvs_h1'];
		$srvs_t1 = $_POST['srvs_t1'];
		$srvs_h2 = $_POST['srvs_h2'];
		$srvs_t2 = $_POST['srvs_t2'];
		$srvs_h3 = $_POST['srvs_h3'];
		$srvs_t3 = $_POST['srvs_t3'];
		
		$sql = "UPDATE features_tb SET srvs_h1 = '$srvs_h1', srvs_t1= '$srvs_t1', srvs_h2= '$srvs_h2', srvs_t2= '$srvs_t2', srvs_h3='$srvs_h3', srvs_t3='$srvs_t3' WHERE id=1";
		
		
		//echo '<pre>';print_r($sql);exit;
		
		
		if (mysql_query($sql,$conn)) {
			$success = "Record updated successfully";
		} else {
			$error= "Error updating record: " . mysql_error($conn);
		}
		

		mysql_close($conn);
		
	}



?>