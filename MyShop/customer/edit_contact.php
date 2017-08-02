<?php 
	@session_start();
	 include 'includes/dbconn.php';
	 
	 if(isset($_GET['edit_account'])){
		$customer_email = $_SESSION['customer_email'];	 }
		
		$get_customer = "select * from customers where customer_email='$customer_email'";
		$run_customer = mysql_query($get_customer);
		$row = mysql_fetch_array($run_customer);
			
			$id = $row['customer_id'];
			$name = $row['customer_name'];
			$email = $row['customer_email'];
			$country = $row['customer_country'];
			$city = $row['customer_city'];
			$contact = $row['customer_contact'];
			$address = $row['customer_address'];
			$image = $row['customer_image'];
		
		

?>
	<form action='' method='post'>
		<table align='center' width='600'>
		
		
		
		
		</table>
	
	
	
	</form>