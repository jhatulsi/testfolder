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
			$pass = $row['customer_pass'];
			$country = $row['customer_country'];
			$city = $row['customer_city'];
			$contact = $row['customer_contact'];
			$address = $row['customer_address'];
			$image = $row['customer_image'];
		
		

?>
	<form action='' method='post' enctype='multipart/form-data'>
		<table align='center' width='600'>
		
			<tr align="center">
		<td colspan="8"><h3>Update Your Account</h3></td>
		</tr>
		<tr>
		<td align="right"><b>Customer Name:</b></td>
		<td><input type="text" name="c_name" value="<?php echo $name ;?>" /></td>
		</tr>
	
		<tr>
		<td align="right"><b>Customer Email:</b></td>
		<td><input type="text" name="c_email" value="<?php echo $email;?>" /></td>
		</tr>
		
		<tr>
		<td align="right"><b>Customer Password:</b></td>
		<td><input type="text" name="c_pass" value="<?php echo $pass;?>" /></td>
		</tr>
		
		<tr>
		<td align="right" ><b>Customer Country:</b></td>
			<td>
			<select name="c_country" disabled>
				<option value="<?php echo $country; ?>"><?php echo $country;?></option>
				<option>India</option>
				<option>Pakistan</option>
				<option>China</option>
				<option>USA</option>
			
			</select>
			</td>
		</tr>
		<tr>
		<td align="right"><b>Customer City:</b></td>
		<td><input type="text" name="c_city" value="<?php echo $city;?>" /></td>
		</tr>
		<tr>
		<td align="right"><b>Customer Mobile no.:</b></td>
		<td><input type="text" name="c_contact" value="<?php echo $contact;?>" /></td>
		</tr>
		<tr>
		<td align="right"><b>Customer Address:</b></td>
		<td><input type="text" name="c_address" value="<?php echo $address;?>" /></td>
		</td>
		</tr>
		<tr>
		<td align="right"><b>Customer Image:</b></td>
		<td><input type="file" name="c_image" size="60"><img src="customer_photos/<?php echo $image;?>" width="60" height="60" ></td>
		</tr>
	
	<tr>
	
	<td colspan="8" align="center">
	<input type="submit" name="update_account" value="Update Now"/></td>
	</tr>
		
		
		
		</table>
	
	
	
	</form>
	
	
	<?php 

	if(isset($_POST['update_account'])){
		
		$update_id = $id;
	
	$c_name	= $_POST['c_name'];
	$c_email = $_POST['c_email'];
	$c_pass = $_POST['c_pass'];
	$c_city	= $_POST['c_city'];
	$c_contact	= $_POST['c_contact'];
	$c_address	= $_POST['c_address'];
	$c_image	= $_FILES['c_image']['name'];
	$c_image_tmp = $_FILES['c_image']['tmp_name'];
	
	$c_ip = getIP();
	
	
	
	$update_customer = "update customers set   customer_name='$c_name',customer_email='$c_email',customer_pass='$c_pass',customer_city='$c_city',customer_contact='$c_contact',customer_address='$c_address', customer_image='$c_image' where customer_id=$update_id";
		
		$run_customer =  mysql_query($update_customer , $conn);
	
		
		
		move_uploaded_file($c_image_tmp,"customerPhotos/$c_image");
		
	/*	$sel_cart = mysql_query("select * from cart where ip_add = '1'");
		//$run_cart = mysql_query($sel_cart, $conn);
		
		$check_cart = mysql_num_rows($sel_cart);
	
		//echo '<pre>';print_r($check_cart);exit; */
		
		
		if($run_customer){
			
			echo "<script>alert('Your account has been updated!')</script>";
			echo "<script>window.open('my_account.php','_self')</script>";
			
		}
		
	}



?>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	