<?php 

	include 'includes/dbconn.php';
	
	//getting the  specific product from table
	if(isset($_POST['edit_brand'])){
		$cat_id = $_GET['edit_brand'];
		
		$edit_brand = "select * from  brands where cat_id= '$cat_id'";
	
		$run_brand = mysql_query($edit_brand, $conn);
		
		$row_brand = mysql_fetch_array($run_brand);
		
		//echo'<pre>';print_r($row_edit);exit;
		$brand_edit_id = $row_brand['brand_id'];
		$brand_title = $row_brand['brand_title'];
		
		//exit($cat_title); 
		
	}
?>



<!DOCTYPE html>
<html>
<head>
<title>Untitled document </title> 
<style type="text/css">
	
	form {margin:15%;}

</style>

<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>
	<form action="" method="post">
		<b> Edit This Category</b>
		<input type="text" name="brand_title1" value="<?php echo $brand_title ; ?>" />
		<input type="submit" name="update_brand" value="Update brand " />
	</form>

</body>

</html>
<?php 

	if(isset($_POST['update_brand'])){
		$brand_title123 = $_POST['brand_title1'];
		$update_brand = "update brands set brand_title= '$brand_title123' where  brand_id='$brand_edit_id'";
		
		$run_brand = mysql_query($update_brand, $conn);
		
		if($run_brand){
				echo "<script>alert('Brand has been Updated.')</script>";
		echo "<script>window.open('index.php?view_brands','_self' )</script>";
			
			
		}
		
		
		
		
		
		
	}







?>





















