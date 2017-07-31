<?php 
	session_start();
	include 'includes/dbconn.php';
	include 'functions/functions.php';

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
        	<img src="images/image.png" style="float:left; width:100%; height:100%;">
        </div>
         <!-------Header ends----->
         
          <!-------Navigation starts----->
         <div id="navbar">
         		<ul id="menu">
                
                	<li><a href="index.php">Home</a></li>
                    <li><a href="all_products.php">All Products</a></li>
                    <li><a href="my_account.php">My Account</a></li>
                    <li><a href="user_register.php">Sign Up</a></li>
                     <li><a href="cart.php">Shopping Cart</a></li>
                      <li><a href="contact.php">Contact Us</a></li>
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
            
            <div id="sidebar_title"> Categories</div>
            
            <ul id="cats">
            	 <?php 
				 getCats(); 
				 
				 ?>
                    
                </ul>
             </ul>   
            <div id="sidebar_title"> Brands </div>
            	 <ul id="cats">
            	<?php getBrands();?>
             </ul> 
            
            </div>
            <div id="right_content">
            	<div id="headline">
                		<div id="headline_content">
                        	<b>Welcome Guest!</b>
                            <b style="color:yellow;">Shopping Cart</b>
                            <span>- Total Items: <?php items(); ?> -Total Price:<?php totalPrice(); ?><a href="cart.php" style="background:white;">Go to Cart</a> &nbsp;
						<?php	
							if(!isset($_SESSION['customer_email'])){
								echo "<a href=checkout.php style='color:#F93;'> LogIn</a>";
							}
							else{
							echo "<a href='logout.php' style='color:#F93;'> LogOut</a>";
								}
							?>
							</span>
                        </div>
                </div>
                
                <?php 
				//$ip= getIP();
				//echo $ip;
				?>
                
                <?php 
					cart();
				
				?>
                
                	<div id="products_box">
                    		
				<form action="checkout.php" method="post" enctype="multipart/form-data">
		
		<table width="750" bgcolor="#66CCCC" align="center">
		<tr align="center">
		<td colspan="8"><h3>Create an Account</h3></td>
		<tr>
		<tr></tr>
		<tr>
		<td align="right"><b>Customer Name:</b></td>
		<td><input type="text" name="c_name" required /></td>
		</tr>
	
		<tr>
		<td align="right"><b>Customer Email:</b></td>
		<td><input type="text" name="c-email" required /></td>
		</tr>
		
		<tr>
		<td align="right"><b>Customer Password:</b></td>
		<td><input type="password" name="c-password" required /></td>
		</tr>
		
		<tr>
		<td align="right" size="6"><b>Customer Country:</b></td>
		<td><select name="c_country">
			<option>India</option>
			<option>Pakistan</option>
			<option>China</option>
			<option>USA</option>
		
		</select></td>
		</tr>
		<tr>
		<td align="right"><b>Customer City:</b></td>
		<td><input type="text" name="c_city" required /></td>
		</tr>
		<tr>
		<td align="right"><b>Customer Mobile no.:</b></td>
		<td><input type="text" name="c_contact" required /></td>
		</tr>
		<tr>
		<td align="right"><b>Customer Address:</b></td>
		<td><input type="text" name="c_address" required /></td>
		</td>
		</tr>
		<tr>
		<td align="right"><b>Customer Image:</b></td>
		<td><input type="file" name="c_image" required /></td>
		</tr>
	<tr>
	
	<td colspan="8" align="center"><input type="submit" name="register" value="Submit" required /></td>
	</tr>
		
		</table>
		
		
		
		</form>		
							
							
							
                         </div>
                
                
                
              </div>
         
         </div>
         
          <div class="footer">
          
          <h1 style="color:#000; padding-top:30px; text-align:center;">&copy; 2014 - By www.appshiner.in</h1>
          
          
          </div>
          
          
          
     </div>
     <!---- Main container end----->

</body>
</html>

<?php 
	if(isset($_POST['register'])){
	
	$c_name	= $_POST['c_name'];
	$c_email = $_POST['c_email'];
	$c_pass = $_POST['c_pass'];
	$c_country	= $_POST['c_country'];
	$c_city	= $_POST['c_city'];
	$c_contact	= $_POST['c_contact'];
	$c_address	= $_POST['c_address'];
	$c_image	= $_POST['c_image']['name'];
	$c_image_tmp = $_FILES['c_image']['tmp_name'];
	
	$c_ip = getIP();
	
	$insert_customer =  mysql_query("insert into customers (customer_name,customer_email,customer_pass,customer_country,customer_city,customer_contact,customer_address,customer_image,customer_ip) values ('$c_name','$c_email','$c_pass','$c_country','$c_city','$c_contact','$c_address','$c_image','1')");
	
	
	//exit($insert_customer);
		
		$run_customer = mysql_num_rows($insert_customer);
		
		move_uploaded_file($c_image_tmp,"customer/customerPhotos/$c_image");
		
		$sel_cart = mysql_query("select * from cart where ip_add = '1'");
		//$run_cart = mysql_query($sel_cart, $conn);
		
		$check_cart = mysql_num_rows($sel_cart);
	
		//echo '<pre>';print_r($check_cart);exit;
		
		
		if($check_cart>0){
			
			$_SESSION['customer_email'] = $c_email;
			
			echo "<script>alert('Account Created Successfuly,Thank You!')</script>";
			echo "<script>window.open('checkout.php','_self')</script>";
			
		}else{
			$_SESSION['customer_email'] = $c_email;
			
			echo "<script>alert('Account Created Successfuly,Thank You!')</script>";
			echo "<script>window.open('index.php','_self')</script>";
		}
		
		
	}







































?>

