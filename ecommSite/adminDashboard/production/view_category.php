<?php 
if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		
	

?>


<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>

	<table align="center" width="794" bgcolor="#FFCC99">
		<tr align="center">
			<td colspan="6"><h2>View All Categories</h2></td>
			</tr>
			<tr>
				<th><b>Category ID</b></th>
				<th><b>Category Title</b></th>
				<th><b>Delete</b></th>
				<th><b>Edit</b></th>
				<th><b>Delete</b></th>
				</tr>
				</hr>
				<?php 
					include 'includes/dbconn.php';
				
				$get_categories = "select * from categories";
				$run_categories = mysql_query($get_categories,$conn);
				while($row_categories = mysql_fetch_array($run_categories)){
					
					$category_id = $row_categories['cat_id'];
					$category_title = $row_categories['cat_title'];
			
				?>
				
				<tr align="">
				<td><?php echo $category_id;?></td>
				<td><?php echo $category_title;?></td>
				<td><a href="index.php?edit_brand=<?php echo $category_id;?>">Edit</a></td>
				<td><a href="index.php?edit_brand=<?php echo $category_id;?>">Delete</a></td>
				<td><a href="delete_brand.php?delete_brand=<?php echo $category_id;?>">Delete</a></td>
				
				</tr>
				<?php } ?>
	</table>


</body>
</html>


<?php } ?>