<?php
		session_start();
		if(!isset($_SESSION['admin_email']))
		{
			echo "<script>window.open('login.php', '_self')</script>";
		}else{
			
	
 ?>









<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">

<style type="text/css"> 
th,tr{border:3px groove #000}
</style>

</head>
<div class="wrapper">
	<div class="header" ><h1 align="center"><b>Manage Your Content</b></h1>
		
		<div class="right" >
			<a href="index.php?insert_product">Insert New Product</a>
			<a href="index.php?view_products">View All Products</a>
			<a href="index.php?insert_cat">Insert New Category</a>
			<a href="index.php?view_cats">View All Categories</a>
			<a href="index.php?insert_brand">Insert New Brand</a>
			<a href="index.php?view_brands">View All Brands</a>
			<a href="index.php?view_customers">View customers</a>
			<a href="index.php?view_order">View Orders</a>
			<a href="index.php?view_payments">View Payments</a>
			<a href="logout.php">Admin Logout</a>
		
		</div>
		
		<div class="left">
				<h2 style="color:red; text-align:center;"><?php echo $_GET['logged_in']; ?></h2>
		
			<?php 
				include "includes/dbconn.php";
					if(isset($_GET['insert_product'])){
						include 'insert_product.php';
					
					
				}
				if(isset($_GET['view_products'])){
						include 'view_products.php';
						}
			

					if(isset($_GET['edit_pro'])){
						include 'edit_pro.php';
						}
						
						if(isset($_GET['view_cats'])){
						include 'view_cats.php';
						}
					
					if(isset($_GET['edit_cat'])){
						include 'edit_cat.php';
						}
						
						if(isset($_GET['delete_cat'])){
						include 'delete_cat.php';
						}
						
						if(isset($_GET['insert_brand'])){
						include 'insert_brand.php';
						}
						
			
						if(isset($_GET['view_brands'])){
						include 'view_brands.php';
						}
			
					if(isset($_GET['edit_brand'])){
						include 'edit_brand.php';
					}
			
						if(isset($_GET['delete_brand'])){
						include 'delete_brand.php';
					}
					
						if(isset($_GET['view_customers'])){
						include 'view_customers.php';
					}
					
					if(isset($_GET['view_order'])){
						include 'view_orders.php';
					}
					
					
					if(isset($_GET['view_payments'])){
						include 'view_payments.php';
					}
			
			
			?>
			
			
			
		
		
		</div>
	
	</div>


</div>



</html>

		<?php } ?>
