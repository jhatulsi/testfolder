
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gentelella Alela! | </title>

    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="../vendors/animate.css/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../build/css/custom.min.css" rel="stylesheet">
  </head>

  <body class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form method="post" action="">
             <h1>Create Account</h1>
              <div>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" value="">
              </div>
              <div>
			  <input type="password" class="form-control" id="password" name="password" value="" placeholder="Password">
              </div>
             
              <div>
                
				<input id="submit" type="submit" name="submit" value="Sign-In" class="btn btn-default submit" >
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">Already a member ?
                  <a href="login.php" class="to_register"> Log in </a>
                </p>

                <div class="clearfix"></div>
                <br />

               
              </div>
            </form>
          </section>
        </div>

     
      </div>
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
   
   echo "Entered data successfully";
   header ('location:../production/vendor_form.php');
   
   mysql_close($conn);
   
   }
   
?> 	









