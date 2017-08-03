<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>

		<table align="center" width="794" bgcolor="#FFCC99">
			<tr align="center">
			<td colspan="6"><h2>View All Payments</h2></td>
			</tr>
			<tr align="center">
				<th>Payment No</th>
				<th>Invoice No</th>
				<th>Amount Paid</th>
				<th>Payment Method</th>
				<th>Ref No</th>
				<th>Code</th>
				<th>Payment Date</th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i =0;
				$get_payments = "select * from payment";
				$run_payments = mysql_query($get_payments, $conn);
				
				while($row_payments = mysql_fetch_array($run_payments)){
					
					$payments_id = $row_payments['payment_id'];
					$invoice = $row_payments['invoice_no'];
					$amount	= $row_payments['amount'];
					$payment_mode = $row_payments['payment_mode'];
					$ref_no = $row_payments['ref_no'];
					$code = $row_payments['code'];
					$date = $row_payments['payment_date'];
					
			$i++;	
			
			?>
			
			<tr align="center">
			<td><?php echo $i ;?></td>
			<td><?php echo $invoice; ?></td>
			<td><?php echo $amount;?></td>
			<td><?php  echo $payment_mode;?></td>
			<td><?php  echo $ref_no;?></td>
			<td><?php  echo $code;?></td>
			<td><?php  echo $date;?></td>
			
		
			
<?php } ?>
			
			<table>
			</body>
			</html>
			
</body>

</html>