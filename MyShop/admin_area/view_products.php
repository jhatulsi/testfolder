<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>
		<table align="center" width="794" bgcolor="#FFCC99">
			<tr align="center">
			<td colspan="6"><h2>View All Products</h2></td>
			</tr>
			<tr>
				<th>Product No</th>
				<th>Title</th>
				<th>Image</th>
				<th>Price</th>
				<th>Total Sold</th>
				<th>Status</th>
				<th>Edit</th>
				<th>Delete</th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i = 0;
				$get_pro = "select * from products";
				$run_pro = mysql_query($get_pro, $conn);
				
				while($row_pro = mysql_fetch_array($run_pro)){
					
					$p_id = $row_pro['product_id'];
					$p_title = $row_pro['product_title'];
					$p_img = $row_pro['product_img1'];
					$p_price = $row_pro['product_price'];
					$i++;
				}
			
			
			
			
			?>
			
			
			
			
			
			
			<tr align="center">
			<td><?php echo $i;?></td>
			<td><?php echo $p_title;?></td>
			<td><img src="product_images/<?php echo $p_img;?>" width="50" height="50"></td>
			<td><?php echo $p_price;?></td>
			<td>
				<?php 
					$get_sold = "select * from pending_orders where products_id='$p_id'";
			
			//exit($get_sold);
					$run_sold = mysql_query($get_sold , $conn);
					
					 mysql_num_rows($run_sold);
					exit(mysql_num_rows($run_sold));
					 echo $count;
					
				?>
			</td>
			<td>
				<?php 
				/*	$get_status = "select * from pending_orders where products_id='$p_id'";
			
				//exit($get_sold);
					$run_status = mysql_query($get_status , $conn);
					$row_status = mysql_fetch_array($run_status);
					//echo '<pre>';print_r($row_status);exit;
					$p_status = $row_status['order_status'];
					
					 echo $p_status;
					 */
					
				?>
			</td>
			<td></td>
			<td><a href="#">Edit</a></td>
			<td><a href="#">Delete</a></td>
			</tr>
			
		
		</table>
</body>

</html>