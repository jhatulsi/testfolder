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
                        <?php 
						if(!isset($_SESSION['customer_email'])){
                        	echo "<b>Welcome Guest!</b>  <b style='color:yellow;'>Shopping Cart</b>" ;
						}else{
							echo "<b>Welcome:" . $_SESSION['customer_email'] . "</b>" . "<b style='color:yellow;'>Shopping Cart</b>";
						}
						?>
                            <span>- Total Items: <?php items(); ?> -Total Price:<?php totalPrice(); ?><a href="index.php" style="background:white;">Continue Shopping</a>&nbsp;
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
					<form action="cart.php" method="post" enctype="multipart/form-data">
					<br>
					<table width="740" height="40" bgcolor="#0099CC" >
					
					<tr align="center">
						<td><b>Remove</b></td>
						<td><b>Product(s)</b></td>
						<td><b>Quantity</b></td>
						<td><b>Total Price</b></td>
					
					</tr>
					<?php 
						$ip_add = getIP();
						
						$total = 0;
						
						$sel_price = "select * from cart where ip_add='1'";
						$run_price = mysql_query($sel_price, $conn);
						while ($record= mysql_fetch_array($run_price)){
							$pro_id = $record['p_id'];
							$pro_price = "select * from products where product_id='$pro_id'";
							$run_pro_price = mysql_query($pro_price , $conn);
						while ($p_price = mysql_fetch_array($run_pro_price)){
						$product_price = array($p_price['product_price']);
						$product_title = $p_price['product_title'];
						$product_image = $p_price['product_img1'];
						$only_price = $p_price['product_price'];
						
						$values = array_sum($product_price);
						
						$total += $values;
			
					
						//echo "$" . $total;
							
							?>
							<tr>
								<td><input type="checkbox" name="remove[]" value="<?php echo $pro_id; ?>"></td>
								<td><?php echo $product_title; ?><br><img src="admin_area/product_images/<?php echo $product_image;?>" width="100" height="100"></td>
								<td><input type="text" name="qty" value="1" size="3"></td>
								<?php 
									$ip_add = getIP(); 
								
									if(isset($_POST['update'])){
										$qty = $_POST['qty'];
										$insert_qty = "update cart set qty='$qty' where ip_add=1";
										$run_qty = mysql_query($insert_qty, $conn);
										
										$total = $total*$qty;
										
										
										
									}
									
								?>
								
								
								
								
								<td><?php echo $only_price; ?></td>
							
							</tr>
				
						<?php }} ?>
						
						<tr>
						<td  colspan="4" align="right"><b>Sub Total</b></td>
						<td align="right"><b><?php echo $total;?></b></td>
						
						</tr>
                            
						<tr>
							<td><input type="submit" name="update" value="Update Cart"></td>
							<td><input type="submit" name="continue" value="Continue Shopping"></td>
							<td><button><a href="checkout.php" >Check Out</a></button></td>
							
						</tr>
                            </table>
							
                            </form>
                            
							<?php 
								function updateCart(){
								
									if(isset($_POST['update'])){
										
										foreach($_POST['remove'] as $remove_id){
										
											$delete_products =	" delete from cart where p_id ='$remove_id'";
											$run_delete = mysql_query($delete_products , $conn);
											
											if($run_delete){
												echo "<script>window.open('cart.php','_self')</script>";
										}
									}
									
								}
								
								if(isset($_POST['continue'])){
										echo "<script>window.open('index.php','_self')</script>";
										
									}
							}	
						echo	@$update_cart= updateCart() ;
							?>
                            
                            
                            
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