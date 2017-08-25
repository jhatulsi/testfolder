<?php 
include 'dbconn.php';
$success = '';
$error = '';
if(count($_POST)>0){
	
	$abt_txt = $_POST['abt_txt'];
	
		$target_dir = "uploads/";
					$target_file = $target_dir . basename($_FILES["abt_image"]["name"]);
			$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);	
			$abt_image=$_FILES['abt_image']['name'];
			
		if($abt_image != ""){		
			
			 if (move_uploaded_file($_FILES["abt_image"]["tmp_name"], $target_file)) {
				echo "The file ". basename( $_FILES["abt_image"]["name"]). " has been uploaded.";
			}
		}
	
	
			$sql = "UPDATE aboutus_tb SET abt_txt = '$abt_txt'";
	
			if (isset($_FILES['abt_image']['name']) && $_FILES['abt_image']['name'] != '') {
					
					$sql .= ",abt_image='".$_FILES['abt_image']['name']."'";
					
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