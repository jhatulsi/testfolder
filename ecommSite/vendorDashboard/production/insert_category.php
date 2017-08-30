	
<?php 
	//	session_start();
	include 'includes/dbconn.php';
	if(isset($_GET['id'])){
		
		$vendor_id = $_GET['id'];
	}
	

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; style="float:center;">
	<form action="" method="post">
			
			 <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Insert New Category:</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" name="cat_title" id="cat_title" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                         <input type="submit" name="insert_category" value=" Insert Category"/>
						 <!--<span id="categoryErr" style="color:green;"></span> --->
                        </div>
                      </div>
			
	</form>
	
<?php 
	
	//echo 'hello';exit;
		if(isset($_POST['insert_category'])){
		$cat_title = $_POST['cat_title'];
		$status="off";
		$insert_cat = "insert into categories (cat_title,vendor_id,status)  values ('$cat_title','$vendor_id','$status')";
		//exit($insert_cat);
		
		$run_cat = mysql_query($insert_cat, $conn);
		
		if($run_cat){
				//echo "<script>$('#categoryErr').('New category inserted')</script>";
				echo "<script>alert('New category Requested.')</script>";
		echo "<script>window.open('dashboardIndex.php?insert_category','_self' )</script>";
			
			
		}
		
		
	}

?>





	
	
	
	
	