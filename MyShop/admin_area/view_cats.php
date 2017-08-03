
<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>

	<table align="center" width="794" bgcolor="#FFCC99">
	<tr>
		<td colspan="3"><h2>View all Categories:</h2></td>
	</tr>
			<tr align="center">
			<td colspan="6"><h2>View All Products</h2></td>
			</tr>
			<tr>
				<th>Category ID</th>
				<th>Category Title</th>
				<th>Delete</th>
				<th>Edit</th>
				</tr>
				<?php 
					include 'includes/dbconn.php';
				
				$get_cats = "select * from categories";
				$run_cats = mysql_query ($get_cats,$conn);
				while($row_cats = mysql_fetch_array($run_cats)){
					
					$cat_id = $row_cats['cat_id'];
					$cat_title = $row_cats['cat_title'];
			
				?>
				
				<tr align="center">
				<td><?php echo $cat_id;?></td>
				<td><?php echo $cat_title;?></td>
				<td><a href="index.php?edit_cat=<?php echo $cat_id;?>">Edit</a></td>
				<td><a href="index.php?delete_cat=<?php echo $cat_id;?>">Delete</a></td>
				
				</tr>
				<?php } ?>
	</table>


</body>
</html>







