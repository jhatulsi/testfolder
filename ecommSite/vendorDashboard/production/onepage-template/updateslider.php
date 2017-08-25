<?php 
		include "dbconn.php";
			$error = "";
			$success = "";
			
			
			
		
		
		if (isset($_FILES['slide1']['name']) && $_FILES['slide1']['name'] != '') { 
		

			$target_dir = "uploads/";
			$target_file = $target_dir . basename($_FILES["slide1"]["name"]);
			$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
			$slide1=$_FILES['slide1']['name'];
			if($slide1 != ""){		
				
				 if (move_uploaded_file($_FILES["slide1"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["slide1"]["name"]). " has been uploaded.";
				}
			}
		}
		
		if (isset($_FILES['slide2']['name']) && $_FILES['slide2']['name'] != '') { 
		

			$target_dir = "uploads/";
			$target_file = $target_dir . basename($_FILES["slide2"]["name"]);
			$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
			$slide2=$_FILES['slide2']['name'];
			if($slide2 != ""){		
				
				 if (move_uploaded_file($_FILES["slide2"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["slide2"]["name"]). " has been uploaded.";
				}
			}
		}
		
		if (isset($_FILES['slide3']['name']) && $_FILES['slide3']['name'] != '') { 
		

			$target_dir = "uploads/";
			$target_file = $target_dir . basename($_FILES["slide3"]["name"]);
			$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
			$slide3=$_FILES['slide3']['name'];
			if($slide3 != ""){		
				
				 if (move_uploaded_file($_FILES["slide3"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["slide3"]["name"]). " has been uploaded.";
				}
			}
		}
	
		//$sql = "UPDATE slider_tb SET `slide1`= '$slide1', `slide2`= '$slide2', `slide3`= '$slide3' WHERE `id`=1" ; 
		
		
		
		$sql = "UPDATE slider_tb SET  "; 
		
				if (isset($_FILES['slide1']['name']) && $_FILES['slide1']['name'] != '') {
					
					$sql .= "slide1='".$_FILES['slide1']['name']."',";
					
				}
				
				if (isset($_FILES['slide2']['name']) && $_FILES['slide2']['name'] != '') {
					
					$sql .= "slide2='".$_FILES['slide2']['name']."',";
					
				}
				
				if (isset($_FILES['slide3']['name']) && $_FILES['slide3']['name'] != '') {
					
					$sql .= "slide3='".$_FILES['slide3']['name']."'";
					
				}
				
				
				//echo '<pre>';print_r($sql);exit;
		
			$sql .= " WHERE id=1";
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//echo '<pre>';print_r($sql);exit;
		
		
	
/*	$retval = mysql_query($sql,$conn);
	
			if($retval){
				$success .= "Record updated successfully";
			} else {
				$error= "Error updating record: " . mysql_error($conn);
			}
			*/
			
			if (mysql_query($sql,$conn)) {
				$success .= "Record updated successfully";
			} else {
				$error= "Error updating record: " . mysql_error($conn);
			}
			
		mysql_close($conn);
	
	
	
	
	
	
	
	//echo '<pre>';print_r($sql);exit;
?>