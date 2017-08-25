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
 
 Email:<input type="text" id="email" name="email" placeholder="email" value="">
 <br> 
 <br>
 Password:<input type="password" id="password" name="password" value="" placeholder="password">
 <br>
 
 <input id="submit" type="submit" name="submit" value="Log-In" >
 

 </form>
 </fieldset> 

 </div> 
 </body>
 </html>