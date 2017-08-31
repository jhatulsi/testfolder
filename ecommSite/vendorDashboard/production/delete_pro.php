<?php 
	include 'includes/dbconn.php';
	
	if(isset($_GET['delete_pro'])){
		$delete_id = $_GET['delete_pro'];
		
		$delete_pro = "delete from products where product_id= '$delete_id'";
		
		$run_delete = mysql_query($delete_pro, $conn);
		
		if($run_delete){
			echo "<script>alert('One product has been deleted.')</script>";
			echo "<script>window.open('index.php?view_products','_self' )</script>";
			
			
			
		}
		
		
		
		
	}




?>