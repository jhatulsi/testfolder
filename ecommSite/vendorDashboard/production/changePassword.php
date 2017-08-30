<?php 

	include 'includes/dbconn.php';
	
	if(isset($_GET['email'])){
		
		$vendor_email = $_GET['email'];
		
		//echo $vendor_email;exit;
		
	}
	
	$sql = "SELECT * FROM vendorreg where email=$vendor_email"; 
 //  echo '<pre>';print_r( $sql);exit;
 //  $sql = 'SELECT * FROM vendorreg';

   mysql_select_db('ecommsite');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
   while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
     
      $email = $row['email'];
   } 
	
?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WEBSITE Dashboard | </title>

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
    
          <div class="">
            <div class="page-title">
            

              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Update Password: </h2> 
					<h4><i color="red" align="right">Back To Dashboard</i></h4>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <br />
                  	   <form method="post" action="" class="form-horizontal form-label-left">

                       
					   <div class="form-group">
                        <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">Email</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="middle-name" class="form-control col-md-7 col-xs-12" name="email" type="email" name="middle-name" value="<?php echo $email;?>">
                        </div>
                      </div>
					  
                       <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name"  >Password <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="password" name="password" required="required" class="form-control col-md-7 col-xs-12" value="">
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                        
                          <input type="submit" class="btn btn-success" name="submit" value="updatePassword">
                        </div>
                      </div>

                    </form>
					
                  </div>
                </div>
          </section>
        </div>
      </div>
    </div>
  </body>
</html>

							
<?php 

		
		if(count($_POST['submit'])>0){
			
			$password = $_POST['password'];
			
			
			
			$sql = "update vendorlogin_tb SET password= '$password' where email='$email' AND is_active=1";
										
			//echo '<pre>';print_r($sql);exit;
			$run_sql = mysql_query($sql,$conn);
			if(! $run_sql ) {
				
			  die('Could not get data: ' . mysql_error());
		   }else{
			   
			   echo "updated Password successfully\n";
			  // header ('Location:dashboardIndex.php?update_profile');
			   
		   }
			
			
				  mysql_close($conn);
			//echo '<pre>';print_r($_POST);exit;
			
		}


// ?>
	
