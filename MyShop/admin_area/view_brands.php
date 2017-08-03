
<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>

	<table align="center" width="794" bgcolor="#FFCC99">
		<tr align="center">
			<td colspan="6"><h2>View All Brand</h2></td>
			</tr>
			<tr>
				<th>Brand ID</th>
				<th>Brand Title</th>
				<th>Delete</th>
				<th>Edit</th>
				</tr>
				<?php 
					include 'includes/dbconn.php';
				
				$get_brands = "select * from brands";
				$run_brands = mysql_query($get_brands,$conn);
				while($row_brands = mysql_fetch_array($run_brands)){
					
					$brand_id = $row_brands['brand_id'];
					$brand_title = $row_brands['brand_title'];
			
				?>
				
				<tr align="center">
				<td><?php echo $brand_id;?></td>
				<td><?php echo $brand_title;?></td>
				<td><a href="index.php?edit_brand=<?php echo $brand_id;?>">Edit</a></td>
				<td><a href="index.php?edit_brand=<?php echo $brand_id;?>">Delete</a></td>
				<td><a href="delete_brand.php?delete_brand=<?php echo $brand_id;?>">Delete</a></td>
				
				</tr>
				<?php } ?>
	</table>


</body>
</html>







