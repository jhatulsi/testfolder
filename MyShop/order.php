<?php 
		include 'includes/dbconn.php';
		include 'functions/functions.php';
		
		if(isset($_GET['c_id'])){
			$customer_id = $_GET['c_id'];
		
		// Getting products price & number of items
			$ip_add = getIP();
		//$db = mysql_connect('localhost','root','');
					//	mysql_select_db('myshop');
						$total = 0;
						
			$sel_price = "select * from cart where ip_add='1'";
			$run_price = mysql_query($sel_price, $conn);
			
			$status = 'Pending';
			$invoice_no = mt_rand();
			
			while ($record= mysql_fetch_array($run_price)){
				$pro_id = $record['p_id'];
				$pro_price = "select * from products where product_id='$pro_id'";
				$run_pro_price = mysql_query($pro_price , $db);
			while ($p_price = mysql_fetch_array($run_pro_price)){
				$product_price = array($p_price['product_price']);
				$values = array_sum($product_price);
				
				$total += $values;
				
				}
				
				}
				$get_cart = "select * from cart where ip_add='1'";
				
				$run_cart = mysql_fetch_array($get_cart);
				$qty = $get_qty['qty'];
				if($qty == 0){
					$qty = 1;
					$sub_total = $total;
				}else{
					$qty = $qty;
					$sub_total = $total * $qty;
				}
				$insert_order = mysql_query("insert into customer_orders (customer_id, due_amount, invoice_no, total_products, order_date, order_status) values ('$customer_id','$due_amount','$invoice_no','$count_pro','NOW()','$status')", $conn);
				
				
					echo "<script>alert('Order successfully submitted,thanks')</script>";
					echo "<script>window.open('customer/my_account.php','_self')</script>";
					
					$empty_cart = "delete from cart where ip_add= '1'";
					$run_empty  = mysql_query($empty_cart ,$conn);
					
					$insert_to_pending_orders =  mysql_query("insert into pending_orders (customer_id ,invoice_no, product_id , qty, order_status ) values ('$customer_id','$invoice_no','$pro_id','$qty','$status')", $conn);
					
					
					
					
			
			
			
		}








?>