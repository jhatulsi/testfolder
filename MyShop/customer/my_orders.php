<?php 
	
	include 'includes/dbconn.php';
	//include 'function/functions.php';

	 $c = $_SESSION['customer_email'];
	 
	 $db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
	 $get_c = "select * from customers where customer_email='$c'";
	 
	 //echo '<pre>';print_r( $get_c);exit;
	 
	 $run_c = mysql_query($get_c, $db);
	 
	$row_c =  mysql_fetch_array($run_c);
		$customer_id = $row_c['customer_id'];
		
?>
<h2>All Order Details:</h2>
&nbsp;&nbsp;&nbsp;<table width="700" align="center" bgcolor="#6699FF">
<tr></tr>
		<tr>
			<th>Order no</th>
			<th>Due Amount</th>
			<th>Invoice No</th>
			<th>Total Products</th>
			<th>Order Date</th>
			<th>Paid / Unpaid</th>
			<th>Status</th>
		</tr>
		
		


<?php 
	$get_orders = "select * from customer_order where customer_id= '$customer_id'";
	$run_orders = mysql_query($get_orders, $conn);
	$i=0;
	while ($row_orders = mysql_fetch_array($run_orders)){
		$order_id = $row_orders['order_id'];
		$due_amount = $row_orders['due_amount'];
		$invoice = $row_orders['invoice_no'];
		$products = $row_orders['total_products'];
		$date = 	$row_orders['order_date'];
		$status = 	$row_orders['order_status'];
		
		$i++;
		
		if($status == 'Pending'){
			
			$status = 'Unpaid';
			
		}else{
			
			$status = 'Paid';
		}
		
		echo "
				<tr align='center'>
					<td>$i</td>
					<td>$due_amount</td>
					<td>$invoice</td>
					<td>$products</td>
					<td>$date</td>
					<td>$status</td>
					<td><a href='confirm.php?order_id=$order_id' target='_blank'>Confirm If Paid</a></td>
					</tr>
		
		";
		
		
		
	}



?>


		
</table>
















