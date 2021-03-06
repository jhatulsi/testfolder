<?php 
	session_start();
	include 'includes/dbconn.php';
	
	$sql = "SELECT * FROM admin_profile";
	
	$run_sql = mysql_query($sql,$conn);
	
	$get_sql = mysql_fetch_array($run_sql);
	$image= $get_sql['profile_image'];
	
	
	
	if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		$sess_email	= $_SESSION['loginUserEmail'];



?>







<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Gentelella Alela! | </title>
	<h3><a href="../../index.php" style= "color:white">Website</a></h3>

    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
	
    <!-- bootstrap-progressbar -->
    <link href="../vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
    <!-- JQVMap -->
    <link href="../vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
    <!-- bootstrap-daterangepicker -->
    <link href="../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../build/css/custom.min.css" rel="stylesheet">
	
	
	
	
	<style>
		.menu_section li:hover {
				text-decoration:underline;
				font-weight:bolder;	
		}
	
	</style>
	

	
	
	
	
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
          <!--  <div class="navbar nav_title" style="border: 0;">
              <a href="" class="site_title"><i class="fa fa-paw"></i> <span></span></a>
            </div> -->

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <a href="dashboardIndex.php?update_image"> <img src="<?php echo $image; ?>" alt="..." class="img-circle profile_img"></a>
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
                <h2>Admin</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
              
                <ul class="nav side-menu">
                  
				
				  <li  class="" ><a href="dashboardIndex.php?insert_product"> Insert New Product</a>
					
				  <li><a href="dashboardIndex.php?view_products"><i class=""></i> View All Products <span class=""></span></a>
				  <li><a href="dashboardIndex.php?added_products"><i class=""></i> Added Products <span class=""></span></a>
						
                  <li><a  href="dashboardIndex.php?insert_category"><i class=""></i> Insert New Category<span class=""></span></a>
						
                  <li><a  href="dashboardIndex.php?view_categories"><i class=""></i>View All Categories <span class=""></span></a>
                  
				  <li><a  href="dashboardIndex.php?added_category"><i class=""></i>Added Categories <span class=""></span></a>
						
				   <li> <a href="dashboardIndex.php?insert_brand"><i></i> Insert New Brand<span class=""></span></a>
						
                  <li><a  href="dashboardIndex.php?view_brands"><i class=""></i>View All Brands <span class=""></span></a>
                  <li><a  href="dashboardIndex.php?view_customers"><i class=""></i>View customers <span class=""></span></a>
                  <li><a  href="dashboardIndex.php?view_vendors"><i class=""></i>View vendors <span class=""></span></a>
                  <li><a  href="dashboardIndex.php?view_orders"><i class=""></i>View Orders <span class=""></span></a>
                  <li><a  href="dashboardIndex.php?view_payments"><i class=""></i>View Payments <span class=""></span></a>
                  <li><a  href="dashboardIndex.php?view_companies"><i class=""></i>All Companies <span class=""></span></a>
					<li><a  href="dashboardIndex.php?change_pswd"><i class=""></i>Change Password <span class=""></span></a>	
				
					<li><a href="../admin/logout.php"><i class=""></i><b>ADMIN LogOut </b><span class=""></span></a>
					</ul>
                  
              
                  </li>
				  
              </div>
         
            </div>
			
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
       

        <!-- page content -->
        <div class="right_col" role="main">
     
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="dashboard_graph">

                <div class="row x_title">
                  <div class="col-md-6">
                    <h3>Manage Your Content Here... </h3>
					
				
                  </div>
            
                  </div>
                </div>
                <!-- end of weather widget -->
              </div>
            </div>
			
		
			 
			 	<?php 
				include "includes/dbconn.php";
					if(isset($_GET['insert_product'])){
						include 'insert_product.php';
					
					
				}
					if(isset($_GET['insert_brand'])){
						include 'insert_brand.php';
					
					
				}
				
				if(isset($_GET['insert_category'])){
						include 'insert_category.php';
					
					
				}
				
				if(isset($_GET['view_categories'])){
						include 'view_category.php';
					
					
				}
		
				if(isset($_GET['view_orders'])){
						include 'view_orders.php';
					
					
				}
				
				if(isset($_GET['view_payments'])){
						include 'view_payments.php';
					
					
				}
				
				if(isset($_GET['view_customers'])){
						include 'view_customers.php';
					
					
				}
				
				if(isset($_GET['view_products'])){
						include 'view_products.php';
					
				}
				
					if(isset($_GET['added_products'])){
						include 'added_products.php';
					
				}
		
		if(isset($_GET['added_category'])){
						include 'added_category.php';
					
				}
				
				if(isset($_GET['view_vendors'])){
						include 'view_vendors.php';
					
				}
				
				if(isset($_GET['change_pswd'])){
						include 'changePassword.php';
					
				}
				
				
				if(isset($_GET['edit_pro'])){
						include 'edit_pro.php';
					
					
				}
				
				if(isset($_GET['edit_cat'])){
						include 'edit_cat.php';
					
					
				}
				
				if(isset($_GET['update_image'])){
						include 'update_profile.php';
					
				}
		
				
			?>
			
			
          </div>
        </div>
        <!-- /page content -->

        <!-- footer content -->
       
        <!-- /footer content -->
      </div>
    </div>
	
	<div>
	 <footer>
          <div class="pull-right">
           <!--  Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>  -->
          </div>
          <div class="clearfix"></div>
        </footer>
		
		</div>

    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>
    <!-- Chart.js -->
    <script src="../vendors/Chart.js/dist/Chart.min.js"></script>
    <!-- gauge.js -->
    <script src="../vendors/gauge.js/dist/gauge.min.js"></script>
    <!-- bootstrap-progressbar -->
    <script src="../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
    <!-- iCheck -->
    <script src="../vendors/iCheck/icheck.min.js"></script>
    <!-- Skycons -->
    <script src="../vendors/skycons/skycons.js"></script>
    <!-- Flot -->
    <script src="../vendors/Flot/jquery.flot.js"></script>
    <script src="../vendors/Flot/jquery.flot.pie.js"></script>
    <script src="../vendors/Flot/jquery.flot.time.js"></script>
    <script src="../vendors/Flot/jquery.flot.stack.js"></script>
    <script src="../vendors/Flot/jquery.flot.resize.js"></script>
    <!-- Flot plugins -->
    <script src="../vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
    <script src="../vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
    <script src="../vendors/flot.curvedlines/curvedLines.js"></script>
    <!-- DateJS -->
    <script src="../vendors/DateJS/build/date.js"></script>
    <!-- JQVMap -->
    <script src="../vendors/jqvmap/dist/jquery.vmap.js"></script>
    <script src="../vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
    <script src="../vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
    <!-- bootstrap-daterangepicker -->
    <script src="../vendors/moment/min/moment.min.js"></script>
    <script src="../vendors/bootstrap-daterangepicker/daterangepicker.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>
	
  </body>
</html>


<?php 
	} ?>
