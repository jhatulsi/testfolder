<?php 
include 'loginvalid.php';

?>

<!DOCTYPE HTML>
 <html> 
 <head> <title>Sign-In</title> <link rel="stylesheet" type="text/css" href="style-sign.css"> </head>
 <body id="body-color"> 
 <div id="Sign-In"> 
 <fieldset style="width:30%";  ><legend>LOG-IN HERE</legend> 
 <form method="POST" action="" >
 <?php $error="";?>
 <span <?php echo $error; ?>></span>
 <br>
 
 Username:<input type="text" id="email" name="email" placeholder="email" value="">
 <br> 
 <br>
 Password:<input type="password" id="password" name="password" value="" placeholder="password">
 <br>
 
 Remember Me<input type="checkbox" name="re" id="re" value="on" <?php if(isset($_COOKIE['password_cookie'])) echo 'checked';?> ><br>
<input id="submit" type="submit" name="submit" value="Log-In" >



 </form>
 </fieldset> 

 </div> 
 </body>
 </html>
 
 
 
<?php
   include 'dbconn.php';
   if(count($_POST)>0){
	  // echo '<pre>';print_r($_POST);exit;
	   
	   $email = $_POST['email'];
	   $password = $_POST['password'];
   
  
		//$newpassword = stripslashes(md5($password));
		
   $sql ="INSERT INTO vendorlogin_tb(`email`, `password`,is_active)
   VALUES ('$email', '$password', 1)";
      
   mysql_select_db('ecommsite');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not enter data: ' . mysql_error());
   }
   
   echo "<script>Entered data successfully</script>";
   echo "<script>window.open('../production/dashboardIndex.php',_self)</script>";
   
   mysql_close($conn);
   
   }
   
?> 	