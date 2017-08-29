<?php 
		include 'includes/dbconn.php';
		
		if(count($_POST['submit'])>0){
			
			$name = $_POST['name'];
			$comp_name = $_POST['comp_name'];
			$state = $_POST['state'];
			$country = $_POST['country'];
			$email = $_POST['email'];
			$gender = $_POST['gender'];
			
			
			$sql = "update vendorReg (`name`,`comp_name`,`state`,`country`,`gender`,`email`,`is_active`) values('$name','$comp_name','$state','$country','$gender','$email',1)";
			
			$run_sql = mysql_query($sql,$conn);
			if(! $run_sql ) {
			  die('Could not get data: ' . mysql_error());
		   }else{
			   
			   echo "updated data successfully\n";
			   header ('Location:dashboardIndex.php');
			   
		   }
			
			
				  mysql_close($conn);
			//echo '<pre>';print_r($_POST);exit;
			
		}













// ?>