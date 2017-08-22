<?php 

	include 'includes/dbconn.php';

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; style="float:center;">
	<form action="" method="post">
			<b>Insert New Category</b>
				<input type="text" name="brand_title"/>
				<input type="submit" name="insert_brand" value=" Insert Brand"/>
			
			
	</form>
	<?php 

		if(isset($_POST['insert_brand'])){
		$brand_title = $_POST['brand_title'];
		$insert_brand = "insert into brands (brand_title)  values ('$brand_title')";
		
		$run_brand = mysql_query($insert_brand, $conn);
		
		if($run_brand){
				echo "<script>alert('New brand inserted.')</script>";
		echo "<script>window.open('index.php?view_brands','_self' )</script>";
			
			
		}
		
		
	}

?>







	
	
	
	
	