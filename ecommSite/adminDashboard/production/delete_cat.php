<?php 
	include 'includes/dbconn.php';
	
	if(isset($_GET['delete_cat'])){
		$delete_id = $_GET['delete_cat'];
		
		$delete_pro = "delete from categories where cat_id= '$delete_id'";
		
		$run_delete = mysql_query($delete_pro, $conn);
		
		if($run_delete){
			echo "<script>alert('One product has been deleted.')</script>";
			echo "<script>window.open('dashboardIndex.php?view_categories','_self' )</script>";
		
		}
		
	}


?>