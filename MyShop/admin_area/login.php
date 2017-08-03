<?php 
session_start();
include "includes/dbconn.php";
?>

<!DOCTYPE HTML>
 <html> 
 <head> <title>Sign-In</title> <link rel="stylesheet" type="text/css" href="style-sign.css"> </head>
 <body id="body-color" > 
 <div id="Sign-In" align= "center"> 
 <fieldset style="width:30%"; align="center" ><legend>LOG-IN HERE</legend> 
 <form method="POST" action="" >
 <?php $error="";?>
 <span <?php echo $error; ?>></span>
 <br>
 
 Username:<input type="text" id="email" name="admin_email" placeholder="email" value="" required >
 <br> 
 <br>
 Password:<input type="password" name="admin_name" value="" placeholder="password">
 <br>
 
 Remember Me<input type="checkbox" name="re" id="re" value="on" >
 <br>
<input type="submit" name="login" value="Admin Log-In" >
<br>
<br>
<a href="forgetpassword.php" >forgetpassword</a>



 </form>
 </fieldset> 

 </div>

<h2 style="color:white; text-align:center; padding:20px;"><?php echo @$_GET['logout'];?> </h2>
 </body>
 </html>

 
 <?php 
		if(isset($_POST['login'])){
			
			$user_email = $_POST['admin_email'];
			$user_pass = $_POST['admin_name'];
			
			$sel_admin = "select * from admins where admin_email='$user_email' AND admin_pass='$user_pass'";
			
			$run_admin = mysql_query($sel_admin , $conn);
			
			$check_admin = mysql_num_rows($run_admin);
			
			if($check_admin ==1){
				$_SESSION['admin_email'] = $user_email;
				
				echo "<script>window.open('index.php?logged_in=You Successfully Logged in.', '_self')</script>";
			}else{
				echo "<script>alert('Admin Email or Password is incorrect, try again.')</script>";
				
			}
			
		}
			
			
			
	
 
 ?>
 
 
 
 