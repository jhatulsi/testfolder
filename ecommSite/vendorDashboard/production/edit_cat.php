<?php 


	include 'includes/dbconn.php';
	//echo 'hello';exit;
	//getting the  specific product from table
	if(isset($_GET['edit_cat'])){
		
		
		$cat_id = $_GET['edit_cat'];
		
		
		$edit_cat = "select * from  categories where cat_id= '$cat_id'";
	
			//echo'<pre>';print_r($edit_cat);exit;
	
		$run_edit = mysql_query($edit_cat, $conn);
		
		$row_edit = mysql_fetch_array($run_edit);
		
		//echo'<pre>';print_r($row_edit);exit;
		$cat_edit_id = $row_edit['cat_id'];
		$cat_title = $row_edit['cat_title'];
		
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
	<form action="" method="post" >
		<b> Edit This Category</b>
		<input type="text" name="cat_title1" value="<?php echo $cat_title ; ?>" />
		<input type="submit" name="update_cat" value="Update Category " />
	</form>

</body>

</html>
<?php 

	if(isset($_POST['update_cat'])){
		$cat_title123 = $_POST['cat_title1'];
		$update_cat = "update categories set cat_title= '$cat_title123' where  cat_id='$cat_edit_id'";
		
		$run_update = mysql_query($update_cat, $conn);
		
		if($run_update){
				echo "<script>alert('category has been Updated.')</script>";
		echo "<script>window.open('dashboardIndex.php?view_categories','_self' )</script>";
			
			
		}
		
		
		
		
		
		
	}







?>





















