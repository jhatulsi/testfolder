<?php 
	session_start();
	include 'includes/dbconn.php';
	include 'function/functions.php';

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link rel="stylesheet" href="styles/style.css" media="all" />
</head>

<body>
<!---- Main container starts----->
	<div class="main_wrapper">
    	<!-------Header Starts----->
        <div class="header_wrapper">
        	<img src="../images/image.png" style="float:left; width:100%; height:100%;">
        </div>
         <!-------Header ends----->
         
          <!-------Navigation starts----->
         <div id="navbar">
         		<ul id="menu">
                
                	<li><a href="../index.php">Home</a></li>
                    <li><a href="../all_products.php">All Products</a></li>
                    <li><a href="my_account.php">My Account</a></li>
					
					<?php 
						if(isset($_SESSION['customer_email'])){
						   echo "<span style='display:none;'> <li><a href='../user_register.php'>Sign Up</a></li></span>";
						}else{
							echo " <li><a href='../user_register.php'>Sign Up</a></li>";
						}
					
					 ?>
                     <li><a href="../cart.php">Shopping Cart</a></li>
                      <li><a href="../contact.php">Contact Us</a></li>
                </ul>
         
         
         <div id="form">
         	<form method="get" action="results.php" enctype="multipart/form-data">
            	<input type="text" name="user_query" placeholder="Search a Product">
                <input type="submit" name="search" value="Search" >
            
            </form>
         
         </div>
         
         
         
         
         
         </div>
          <!-------Navigation ends----->
          
         <div class="content_wrapper" >
         	<div id="left_sidebar">
            
            <div id="sidebar_title"> Manage Account</div>
            
            <ul id="cats">
				<?php 
					if(isset($_SESSION['customer_email'])){
						$user_session = $_SESSION['customer_email'];
						
						$get_customer_pic = "select * from customers where customer_email='$user_session'";
						
						$run_customer = mysql_query($get_customer_pic , $conn);
						
						$row_customer = mysql_fetch_array($run_customer);
						
						$customer_pic = $row_customer['customer_image'];
						
						echo "<img src='customer_photos/$customer_pic' width='150' height='150'><a href= 'change_pic'>Change Photo</a>";
						
					}
				
				?>
			
					<li><a href="my_account.php?my_orders"> My Orders </a></li>
					<li><a href="my_account.php?edit_account"> Edit Account </a></li>
					<li><a href="my_account.php?change_pass"> Change Password </a></li>
					<li><a href="my_account.php?delete_account"> Delete Account</a></li>
					<li><a href="logout.php"> LogOut </a></li>
                    
                </ul>
            </div>
			
		
            <div id="right_content">
            	<div id="headline">
                		<div id="headline_content"> 
						<?php 
						if(isset($_SESSION['customer_email'])){
							
							echo "<b>Welcome:" . "</b>" . "<b style='color:yellow;'>" . $_SESSION['customer_email'] .  "</b>";
							
						}?>
					
						 <?php	
							if(!isset($_SESSION['customer_email'])){
								echo "<a href='checkout.php' style='color:#F93;'> LogIn</a>";
							}
							else{
							echo "<a href='logout.php' style='color:#F93;'> LogOut</a>";
								}
							?>
							
							</span>
                        </div>
						<br>
                </div>
                
                <?php 
				//$ip= getIP();
				//echo $ip;
				?>
                
                <?php 
					cart();
				
				?>
                
                	<div>
						<h2 style="background:#000; color:#FC9; padding:20p; text-align:center; border-top:2px solid #FFF; ">Manage Your Account</h2>
                    		
								<?php getDefault(); ?>
							
							<?php  
								
								
								if(isset($_GET['my_orders']))
									{
									include 'my_orders.php';
									}
							
								if(isset($_GET['edit_account']))
										{
										include 'edit_account.php';
										}
										if(isset($_GET['delete_account']))
											{
											include 'delete_account.php';
											}
											
								?>
							<?php 
								if(isset($_GET['change_pass']))
									{
									include 'change_password.php';
									}
					?>
							
							
							
							
							
							
                         </div>
                
                
                
              </div>
         
         </div>
          </div>
          <div class="footer">
          
          <h1 style="color:#000; padding-top:30px; text-align:center;">&copy; 2014 - By www.appshiner.in</h1>
          
          
          </div>
          
          
          
    
     <!---- Main container end----->

</body>
</html>