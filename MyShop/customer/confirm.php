<?php 
	session_start();
	include 'includes/dbconn.php';
	$order_id = '';
	if(isset($_GET['order_id'])){
	
		$order_id =$_GET['order_id'];
	
	}
?>

<!DOCTYPE html>
<html>
<head>
<title></title>
</head>

<form action="confirm.php?update_id=<?php echo $order_id; ?>" method="post">

<input type="hidden" name="order_id" value="<?php echo $order_id;?>" />

	<table width="500" align="center" bgcolor="#CCCCCC" border="2">
		<tr align="center">
			<td colspan="5"><h2>Please Confirm Your Password</h2></td>
		</tr>
		
		<tr>
		<td align="center">Invoice No:</td>
		<td><input type="text" name="invoice_no" /></td>
		</tr>
		
		<tr>
		<td align="center">Amount Sent:</td>
		<td><input type="text" name="amount" /></td>
		</tr>
		
		<tr>
		<td align="center">Select Payment Mode:</td>
		<td><select name="payment_method">
		<option>Select Payment</option>
		<option>Bank Transfer</option>
		<option>Paypal</option>
		<option>Western Union</option>
		</td>
		</tr>
		
		<tr>
		<td align="center">Transaction/ Reference id:</td>
		<td><input type="text" name="tr" /></td>
		</tr>
		
		<tr>
		<td align="center">Easypaisa/UBLOMNI code:</td>
		<td><input type="text" name="code" /></td>
		</tr>
		
		
		<tr>
		<td align="center">Payment Date:</td>
		<td><input type="text" name="date" /></td>
		</tr>
		
		<tr align="center">
		<td colspan="5"><input type="submit" name="confirm" value="Confirm Payment" /></td>
		</tr>
	</table>
</form>

</html>

<?php 

if(isset($_POST['confirm'])){
	
	$update_id = $_GET['update_id'];
	$invoice = $_POST['invoice_no'];
	$amount = $_POST['amount'];
	$payment_method = $_POST['payment_method'];
	$ref_no = $_POST['tr'];
	$code = $_POST['code'];
	$date = $_POST['date'];
	$orderId = $_POST['order_id'];
	
	
	$insert_payment = "insert into payment (invoice_no ,amount ,payment_mode,ref_no,code,payment_date ) values ('$invoice','$amount','$payment_method','$ref_no','$code','$date')";
	
	$run_payment = mysql_query($insert_payment, $conn);
	if($run_payment){
		echo "<h2 style='text-align:center; color:white;'>Payment received, Your order will be completed within 24 hours.</h2>";
	
	}
	
	$update_orders = "update customer_order set order_status='complete' where order_id='$orderId'";
	$run_order = mysql_query($update_orders, $conn);
	
	
}


?>

















