<?php 
	include 'includes/dbconn.php';
	
	if(isset($_GET['delete_order'])){
		$delete_id = $_GET['delete_order'];
		
		$delete_order = "delete from pending_order where order_id= '$delete_id'";
		
		$run_delete = mysql_query($delete_order, $conn);
		
	if($run_delete){
		echo "<script>alert('Order has been deleted.')</script>";
		echo "<script>window.open('index.php?view_orders','_self' )</script>";
		
		
		
	}
		
		
		
		
	}




?>