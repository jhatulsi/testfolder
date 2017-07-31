<!DOCTYPE html>
<html>
	<head>
		<title> Payment Offline</title>
		<body>
		<?php 
			include 'includes/dbconn.php';
		//include 'functions/functions.php';
		
		?>
		<h2>Payment Options For You</h2>
		<hr>
		<br>
		<?php 
			$ip = getIP();
			$get_customer = "select * from customers where customer_ip = '1'"; // or use i in place of 0 //customer_ip = '0'
			$run_customer = mysql_query($get_customer, $conn);
			$customer = mysql_fetch_array($run_customer);
			$customer_id = $customer['customer_id'];
		
		?>

<div>
	<b>Pay With</b><h3>PAYPAL</h3><b>Or<a href="order.php?c_id<?php echo $customer_id; ?>">PAY Offline</a></b>
	<br>
	<b style="color:red;"> If you selected "Pay Offline" option then please check your email or account to find the Invoice No for your order</b>
	<hr>

</div






















