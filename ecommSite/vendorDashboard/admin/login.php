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
 
 Username:<input type="text" id="email" name="email" placeholder="email" value="<?php if(isset($_COOKIE['username_cookie'])) echo $_COOKIE['username_cookie']?>">
 <br> 
 <br>
 Password:<input type="password" id="password" name="password" value="<?php if(isset($_COOKIE['password_cookie'])) echo $_COOKIE['password_cookie']?>" placeholder="password">
 <br>
 
 Remember Me<input type="checkbox" name="re" id="re" value="on" <?php if(isset($_COOKIE['password_cookie'])) echo 'checked';?> ><br>
<input id="submit" type="submit" name="submit" value="Log-In" >
<a href="fpassword.php">forgetpassword</a>
<h4><a href="signInForm.php" color="red">NEW USER?? Sign-in </a></h4>

 </form>
 </fieldset> 

 </div> 
 </body>
 </html>
 <?php 
 
	if(count($_POST)>0){
		
		echo '<pre>';print_r($_POST);exit;
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
 
 
 
 
 ?>