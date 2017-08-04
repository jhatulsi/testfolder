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
		//	$ip = getIP();
			$get_customer = "select * from customers where customer_ip = '1'"; // or use i in place of 0 //customer_ip = '0'
			$run_customer = mysql_query($get_customer, $conn);
			$customer = mysql_fetch_array($run_customer);
			$customer_id = $customer['customer_id'];
			
			
			
			
				$ip_add = getIP();
			//$db = mysql_connect('localhost','root','');
						//	mysql_select_db('myshop');
						$total = 0;
						
			$sel_price = "select * from cart where ip_add='1'";
			$run_price = mysql_query($sel_price, $conn);
			
			$status = 'Pending';
			$invoice_no = mt_rand(); 
			$count_pro = mysql_num_rows($run_price);
			
			while ($record= mysql_fetch_array($run_price)){
				
				$pro_id = $record['p_id'];
				//echo $pro_id;exit;
				$pro_price = "select * from products where product_id='$pro_id'";
				
				
				$run_pro_price = mysql_query($pro_price , $conn);
				while ($p_price = mysql_fetch_array($run_pro_price)){
				$product_name = $p_price['product_title'];
				$product_price = array($p_price['product_price']);
				$values = array_sum($product_price);
				
				$total += $values;
				
				}
				
				}
				// Getting Quantity from the cart
				$get_cart = "select * from cart where ip_add='1'";
				
				$run_cart = mysql_query($get_cart , $conn);
				$get_qty = mysql_fetch_array($run_cart); 
				$qty = $get_qty['qty'];
				if($qty == 0){
					$qty = 1;
					$sub_total = $total;
				}else{
					$qty = $qty;
					$sub_total = $total * $qty;
				}
			
			
			

		
		?>

<div>
	<b>Pay With paypal &nbsp;</b><form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">

  <!-- Identify your business so that you can collect the payments. -->
  <input type="hidden" name="business" value="businesstulsitest@gmail.com">

  <!-- Specify a Buy Now button. -->
  <input type="hidden" name="cmd" value="_xclick">

  <!-- Specify details about the item that buyers will purchase. -->
  <input type="hidden" name="item_name" value="<?php echo $product_name; ?>">
  <input type="hidden" name="amount" value="<?php echo $sub_total; ?>">
  <input type="hidden" name="currency_code" value="USD">
  
  <!---------Return and cancel_return url-------->
  <input type="hidden" name="return" value="http://www.onlinetuting.com/myshop/paypal_success.php">
  <input type="hidden" name="cancel_return" value="http://www.onlinetuting.com/myshop/paypal_cancel.php">

  <!-- Display the payment button. -->
  <input type="image" name="submit" border="0"
  src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_buynow_107x26.png"
  alt="Buy Now">
  <img alt="" border="0" width="1" height="1"
  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" >

</form><b>Or<a href="order.php?c_id=<?php echo $customer_id; ?>">PAY Offline</a></b>
	<br>
	<b style="color:red;"> If you selected "Pay Offline" option then please check your email or account to find the Invoice No for your order</b>
	<hr>

</div






















