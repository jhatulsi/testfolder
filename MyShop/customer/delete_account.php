	<form action="" method="post">
		<table align="center" width="600">
			
			<tr align="center">
			<td><h3>Do You really want to delete your account. </h3></td>
			</tr>
		<tr><td></td></tr>
		<tr>
		<td align="center"><input type="submit" name="yes" value="I want to Delete"></td>
		<td align="center"><input type="submit" name="no" value="I do not want to Delete"></td>
		</tr>
		
		
		</table>
	
	
	</form>
	
	<?php 
			include 'includes/dbconn.php';
	
	$c = $_SESSION['customer_email'];
	
	if(isset($_POST['yes'])){
		$delete_customer = "delete from customers where customer_email='$c'";
		$run_delete = mysql_query($delete_customer, $conn);
		
		if($run_delete){
			
				echo "<script>alert('Your Account has been deleted,Good Bye!>')</script>";
				echo "<script>window_open('../index.php','_self')</script>";
		}
	
	}
	
	if(isset($_POST['no'])){
		echo "<script>window_open('my_account.php','_self')</script>";
	}
	
	
	?>
	
	
	



