<form action="" method="post">
	<table width="500" align="center">
	<tr align="center">
	<td><h3>Change your Password</h3></td>
	</tr>

	<tr>
	<td>Enter Current Password</td>
	<td><input type="password" name="old_pass" required></td>
	</tr>
	
	<tr>
	<td>Enter New Password</td>
	<td><input type="password" name="new_pass" required></td>
	</tr>
	
	<tr>
	<td>Enter New Password Again</td>
	<td><input type="password" name="new_pass_again" required></td>
	</tr>

	<tr align="center">
	<td colspan="4"><input type="submit" name="change_pass" value="Change Password"></td>
	</tr>
	
</form>



<?php 

	include 'includes/dbconn.php';
	$c = $_SESSION['customer_email'];

		if(isset($_POST['change_pass'])){
			
			$old_pass = $_POST['old_pass'];
			$new_pass = $_POST['new_pass'];
			$new_pass_again = $_POST['new_pass_again'];
			
			$get_real_pass = "select * from customers where customer_pass='$old_pass'";
			$run_real_pass = mysql_query($get_real_pass, $conn);
			
			
			
			if(mysql_num_rows($run_real_pass)==0){
				
				
			echo "<script>alert('Your current Password is not valid!')</script>";
			exit();
			}
			
			if($new_pass != $new_pass_again){
				echo "<script>alert('New password did not match, try again!')</script>";
			}else{
				$update_pass = "update customers set customer_pass = '$new_pass' where customer_email= '$c'";
				$run_pass = mysql_query($update_pass , $conn);
				
				echo "<script>alert('Your password has been successfuly changed>')</script>";
				echo "<script>window_open('my_account.php','_self')</script>";
			}
			
			
			
			
		}
?>










