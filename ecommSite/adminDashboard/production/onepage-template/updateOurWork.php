<?php 
		include 'dbconn.php';
		
		
		if(count($_POST)>0){
				$wrk_text1 = $_POST['wrk_text1'];
				$wrk_text2 = $_POST['wrk_text2'];
				$wrk_text3 = $_POST['wrk_text3'];
				$wrk_text4 = $_POST['wrk_text4'];
				
				
				
				$target_dir = "uploads/";
						$target_file = $target_dir . basename($_FILES["wrk_image1"]["name"]);
				$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
				$wrk_image1=$_FILES['wrk_image1']['name'];
				
			if($wrk_image1 != ""){		
				
				 if (move_uploaded_file($_FILES["wrk_image1"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["wrk_image1"]["name"]). " has been uploaded.";
				}
			}
				
				$target_dir = "uploads/";
						$target_file = $target_dir . basename($_FILES["wrk_image2"]["name"]);
				$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
				$wrk_image2=$_FILES['wrk_image2']['name'];
				
			if($wrk_image2 != ""){		
				
				 if (move_uploaded_file($_FILES["wrk_image2"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["wrk_image2"]["name"]). " has been uploaded.";
				}
			}
			
			$target_dir = "uploads/";
						$target_file = $target_dir . basename($_FILES["wrk_image3"]["name"]);
				$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
				$wrk_image3=$_FILES['wrk_image3']['name'];
				
			if($wrk_image3 != ""){		
				
				 if (move_uploaded_file($_FILES["wrk_image3"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["wrk_image3"]["name"]). " has been uploaded.";
				}
			}
			
			
			$target_dir = "uploads/";
						$target_file = $target_dir . basename($_FILES["wrk_image4"]["name"]);
				$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
				$wrk_image4=$_FILES['wrk_image4']['name'];
				
			if($wrk_image4 != ""){		
				
				 if (move_uploaded_file($_FILES["wrk_image4"]["tmp_name"], $target_file)) {
					echo "The file ". basename( $_FILES["wrk_image4"]["name"]). " has been uploaded.";
				}
			}
				
				
				
				$sql = "UPDATE ourwork_tb SET wrk_text1='$wrk_text1', wrk_text2='$wrk_text2', wrk_text3='$wrk_text3', wrk_text4='$wrk_text4'";
				
				
				
				if (isset($_FILES['wrk_image1']['name']) && $_FILES['wrk_image1']['name'] != '') {
					
					$sql .= ",wrk_image1='".$_FILES['wrk_image1']['name']."'";
					
				}
				
				if (isset($_FILES['wrk_image2']['name']) && $_FILES['wrk_image2']['name'] != '') {
					
					$sql .= ",wrk_image2='".$_FILES['wrk_image2']['name']."'";
					
				}
				
				if (isset($_FILES['wrk_image3']['name']) && $_FILES['wrk_image3']['name'] != '') {
					
					$sql .= ",wrk_image3='".$_FILES['wrk_image3']['name']."'";
					
				}
				
				if (isset($_FILES['wrk_image4']['name']) && $_FILES['wrk_image4']['name'] != '') {
					
					$sql .= ",wrk_image4='".$_FILES['wrk_image4']['name']."'";
					
				}
				
			
			$sql .= " WHERE id=1";
	
			if (mysql_query($sql,$conn)) {
				$success = "Record updated successfully";
			} else {
				$error= "Error updating record: " . mysql_error($conn);
			}


			mysql_close($conn);
			
			
			
		}




?>