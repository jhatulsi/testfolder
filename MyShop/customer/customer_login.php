<?php 
@session_start();
include 'includes/dbconn.php';
//important line
//include 'function/functions.php';
?>

<div>
 
		<form action="checkout.php" method="post">
		
		<table width="600" bgcolor="#66CCCC" align="center">
		<h3>Login OR Register</h3>
		<tr>
		<td><b>Your Email:</b></td>
		<td><input type="text" name="c_email" value="Enter Your Email" /></td>
		</tr>
	
		<tr>
		<td><b>Your Password:</b></td>
		<td><input type="password" name="c_pass" value="Enter Your Password" /></td>
		</tr>
		<tr>
		<td>
		<td><h5 style=" align:center; padding:5px;"><a href="">Forgot Password</a></h5></td>
		<td><input type="submit" name="c_login" value="Login" style="align:center" /></td>
		</td>
		</tr>
		</table>
		
		<h4 style=" text-decoration:none; padding:5px;"><a href="customer_register.php">New Register Here</a></h4>
		
		</form>

</div>

<?php 
		////////////////
		$dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn ) {
      die('Could not connect: ' . mysql_error());
   }
   mysql_select_db("myshop")or die("cannot select DB"); 





	if(isset($_POST['c_login'])){
		$customer_email = $_POST['c_email'];
		$customer_pass =  $_POST['c_pass'];
	//echo $customer_pass;exit;
	
		//$sel_customer ="Select * from customers where customer_email='$customer_email' AND customer_pass='$customer_pass'";
			$sel_customer =mysql_query("Select * from customers where customer_email='$customer_email' AND customer_pass='$customer_pass'");
			$number_of_rows = mysql_num_rows($sel_customer);  
		
		/*if( $number_of_rows>0){
				$_SESSION['customer_email']=$customer_email;
				echo "<script>window.open('index.php','_self')</script>";
			}
			else{
				echo "<script>alert('Email or Password is wrong.')</script>";
			} */
		//$c_ip = getIP();
	$sel_cart = "select * from cart where ip_add='1'"; 
	
	$run_cart = mysql_query($sel_cart, $conn);
	$check_cart = mysql_num_rows($run_cart);
	
	if($number_of_rows == 0){
echo "<script>alert('Password or Email Address is not correct')</script>";
	}
	if($number_of_rows==1 AND $check_cart==0){
		$_SESSION['customer_email']=$customer_email;
		echo "<script>window.open('customer/my_account.php','_self')</script>";
	}/*else{
			$_SESSION['customer_email']=$customer_email;
	echo "<script>window.open('payment_options.php','_self')</script>";
	}*/
	
	else{
	echo "<script>alert('successfully loged in ,You can order now.')</script>";
		$_SESSION['customer_email']=$customer_email;
		include("payment_options.php");
	}
	

	
	
	
	
		}
		
?>

















