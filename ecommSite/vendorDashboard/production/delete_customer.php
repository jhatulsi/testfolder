<?php 
	include 'includes/dbconn.php';
	
	if(isset($_GET['delete_cust'])){
		$delete_id = $_GET['delete_cust'];
		
		$delete_pro = "delete from customers where customer_id= '$delete_cust'";
		
		$run_delete = mysql_query($delete_pro, $conn);
		
		if($run_delete){
			echo "<script>alert('One Customer has been deleted.')</script>";
			echo "<script>window.open('dashboardIndex.php?view_customers','_self' )</script>";
		
		}
		
	}


?>