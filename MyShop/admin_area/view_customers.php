<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>

		<table align="center" width="794" bgcolor="#FFCC99">
			<tr align="center">
			<td colspan="6"><h2>View All customer</h2></td>
			</tr>
			<tr align="center">
				<th>S No</th>
				<th>Name</th>
				<th>Email</th>
				<th>Image</th>
				<th>Country</th>
				<th>Delete</th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i =0;
				$get_c = "select * from customers";
				$run_c = mysql_query($get_c, $conn);
				
				while($row_c = mysql_fetch_array($run_c)){
					
					$c_id = $row_c['customer_id'];
					$c_name = $row_c['customer_name'];
					$c_email	= $row_c['customer_email'];
					$c_image = $row_c['customer_image'];
					$c_country = $row_c['customer_country'];
					
			$i++;	
			
			?>
			
			<tr align="center">
			<td><?php echo $c_id;?></td>
			<td><?php echo $c_name;?></td>
			<td><?php echo $c_email;?></td>
			<td><img src="customer_photos/<?php echo $c_image;?>" height="80" width="80"></td>
			<td><?php echo $c_country;?></td>
			<td><a href="delete_customer.php?delete_c=<?php echo $c_id; ?>">Delete</td>
			
<?php } ?>
			
			<table>
			</body>
			</html>
			
</body>

</html>