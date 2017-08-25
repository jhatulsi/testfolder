<?php 
	include 'includes/dbconn.php';
	
	if(isset($_GET['appr_products'])){
		$appr_product_id = $_GET['appr_products'];
		
		$status='on';
		//echo $appr_product_id;exit;
		$update_status = "update products set status='$status' where product_id = '$appr_product_id'";
		
		$run_status = mysql_query($update_status, $conn);
		
	if($run_status){
		echo "<script>alert('One product has been Approved.')</script>";
		echo "<script>window.open('dashboardIndex.php?added_products','_self' )</script>";
		}
	}
		else{
			if(isset($_GET['disappr_products'])){
			$appr_product_id = $_GET['disappr_products'];
		
			$status='disapproved';
			//echo $appr_product_id;exit;
			$update_status = "update products set status='$status' where product_id = '$appr_product_id'";
			
			$run_status = mysql_query($update_status, $conn);
			
			if($run_status){
				echo "<script>alert('One product has been Disapproved.')</script>";
				echo "<script>window.open('dashboardIndex.php?added_products','_self' )</script>";
			}
			
		}
		
		
		
	}




?>