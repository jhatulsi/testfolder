<?php 
	include 'includes/dbconn.php';
	// echo 'hello';exit;
	if(isset($_GET['appr_cat'])){
		$appr_cat_id = $_GET['appr_cat'];
		
		$status='on';
		//echo $appr_product_id;exit;
		$update_status = "update categories set status='$status' where cat_id = '$appr_cat_id'";
		
		$run_status = mysql_query($update_status, $conn);
		
	if($run_status){
		echo "<script>alert('One category has been Approved.')</script>";
		echo "<script>window.open('dashboardIndex.php?added_category','_self' )</script>";
		}
	}
		else{
			if(isset($_GET['disappr_cat'])){
			$appr_cat_id = $_GET['disappr_cat'];
		
			$status='disapproved';
			//echo $appr_product_id;exit;
			$update_status = "update categories set status='$status' where cat_id = '$appr_cat_id'";
			
			$run_status = mysql_query($update_status, $conn);
			
			if($run_status){
				echo "<script>alert('One category has been Disapproved.')</script>";
				echo "<script>window.open('dashboardIndex.php?added_category','_self' )</script>";
			}
			
		}
		
		
		
	}




?>