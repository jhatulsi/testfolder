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
				<th>Order No</th>
				<th>Customer</th>
				<th>Invoice</th>
				<th>Product ID</th>
				<th>Quantity</th>
				<th>Status</th>
				<th>Delete</th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i =0;
				$get_orders = "select * from pending_order";
				$run_orders = mysql_query($get_orders, $conn);
				
				while($row_orders = mysql_fetch_array($run_orders)){
					
					$order_id = $row_orders['order_id'];
					$c_id = $row_orders['customer_id'];
					$invoice	= $row_orders['invoice_no'];
					$p_id = $row_orders['product_id'];
					$qty = $row_orders['qty'];
					$status = $row_orders['order_status'];
					
			$i++;	
			
			?>
			
			<tr align="center">
			<td><?php echo $i ;?></td>
			<td><?php 
				$get_customer = "select * from customers where customer_id = '$c_id'";
				$run_customer = mysql_query($get_customer, $conn);
				$row_customer = mysql_fetch_array($run_customer);
				
				$customer_email = $row_customer['customer_email'];
				
				echo $customer_email;
			
			?></td>
			<td><?php echo $invoice; ?></td>
			<td><?php echo $p_id;?></td>
			<td><?php  echo $qty;?></td>
			<td>
			<?php 
			if($status == 'Pending'){
				echo $status = 'Pending';
			}else{
				echo $status = 'Complete'; 
			}
			
			
			
			
			?>
			
			
			
			</td>
			<td><a href="delete_order.php?delete_order=<?php echo $order_id; ?>">Delete</td>
			
<?php } ?>
			
			<table>
			</body>
			</html>
			
</body>

</html>