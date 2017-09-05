	
<?php 

//echo 'hello';exit;
	//	session_start();
	include 'includes/dbconn.php';
	
	$sql = "SELECT * FROM admin_profile";
	
	$run_sql = mysql_query($sql,$conn);
	
	$get_sql = mysql_fetch_array($run_sql);
	$image= $get_sql['profile_image'];
	
	//echo '<pre>';exit($image);
	
	if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		
	
	
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; style="float:center;">
	<form action="" method="post" enctype="multipart/form-data">
			
			 <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Update Profile Image:</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
								<img src="<?php echo $image; ?>" height="150" width="150">
                          <input type="file" name="image" id="image" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                         <input type="submit" name="update_image" value=" Update image"/>
						 <!--<span id="categoryErr" style="color:green;"></span> --->
                        </div>
                      </div>
			
		
	</form>
	
				
<?php 
	

		if(isset($_POST['update_image'])){
		$p_image = $_FILES['image']['name'];
		$temp_image = $_FILES['image']['tmp_name'];
		
	
		move_uploaded_file($temp_image,'$p_image');
		
		if($p_image == ''){
			echo "<script>alert('No image Selected')</script>";
			exit;
		}
		
		$update_image = "update admin_profile SET profile_image = '$p_image'";
		
		$run_image = mysql_query($update_image, $conn);
		
		if($run_image){
				
				echo "<script>alert('Image Updated.')</script>";
		echo "<script>window.open('dashboardIndex.php','_self' )</script>";
			
			
		}
		
		
	}

?>

	
	
	<?php } ?>
	






	
	
	
	
	