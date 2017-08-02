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
			<?php 
				include "includes/dbconn.php";
					if(isset($_GET['insert_product'])){
						include 'insert_product.php';
					
					
				}
				if(isset($_GET['view_products'])){
						include 'view_products.php';
					
					
				}
				
			?>
		
		
		</div>
	
	</div>


</div>

<body></body>

</html>