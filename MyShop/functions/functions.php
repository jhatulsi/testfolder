<?php


// echo getPro();

//function for getting ip address
	function getIP(){ 
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}
return $ip;
}


//getting the number of items from the cart
function items(){
	if(isset($_GET['add_cart'])){
		//$ip_add = getIP();
			$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
		
						
		$get_items = "select * from cart where ip_add='1'";
		$run_items = mysql_query($get_items , $db);
		$count_items = mysql_num_rows($run_items);
		}
		else {
			//$ip_add = getIP();
			$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						
		$get_items = "select * from cart where ip_add='1'";
		$run_items = mysql_query($get_items , $db);
		$count_items = mysql_num_rows($run_items);
			
			
			}
		echo $count_items;

}


function totalPrice(){
	$ip_add = getIP();
		$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						$total = 0;
						
			$sel_price = "select * from cart where ip_add='1'";
			$run_price = mysql_query($sel_price, $db);
			while ($record= mysql_fetch_array($run_price)){
				$pro_id = $record['p_id'];
				$pro_price = "select * from products where product_id='$pro_id'";
				$run_pro_price = mysql_query($pro_price , $db);
			while ($p_price = mysql_fetch_array($run_pro_price)){
				$product_price = array($p_price['product_price']);
				$values = array_sum($product_price);
				
				$total += $values;
				
				}
				
				
				}
			
			
				echo "$" . $total;
	
	}








//products added to cart

function cart(){
		$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						
		if(isset($_GET['add_cart'])){
			$ip_add = getIP();
	$p_id = $_GET['add_cart'];
	
	$check_pro = "select * from cart where ip_add='1' AND p_id='$p_id'";
//	$check_pro = "select * from cart where ip_add='$ip_add' AND p_id='$p_id'";
	
	$run_check = mysql_query($check_pro , $db);
	
		if(mysql_num_rows($run_check)>0){
				echo "";
			}else{
				$insert_in_cart = "insert into cart (p_id,ip_add) values ('$p_id','1')";
				
				$run_inserted_cart = mysql_query($insert_in_cart, $db);
				
				echo '<script>window_open("index.php","_self")</script>';
				}
		
		
		
			}
	}


function getPro(){
		
			if(!isset($_GET['cat'])){
				if(!isset($_GET['brand'])){
						$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						$get_products = "select * from products order by rand() LIMIT 0,6"; 
						$run_products = mysql_query($get_products , $db);
						
						while($row_products = mysql_fetch_array($run_products)){
							 $pro_id = $row_products['product_id'];
							 $pro_title = $row_products['product_title'];
							 $pro_cat = $row_products['cat_id'];
							 $pro_brand = $row_products['brand_id'];
							 $pro_desc = $row_products['product_desc'];
							 $pro_price = $row_products['product_price'];
							 $pro_image = $row_products['product_img1'];
							
							 
						 	
                	echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<img src='admin_area/product_images/$pro_image' width='180' height='180' /> <br>
						<p><b>Price: $pro_price</b></p>
						<a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a>
						<a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						</div>
						";
						
						}
				}
		}
	
	}
	function getCatPro(){
			if(isset($_GET['cat'])){
				
				$cat_id = $_GET['cat'];
				
				
				$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						$get_cat_pro =  "select * from products where cat_id='$cat_id'"; 
						$run_cat_pro = mysql_query($get_cat_pro , $db);
						
						$count = mysql_num_rows($run_cat_pro);
						if($count == 0){
							echo "<h2>No products Found In This Category</h2>";
						}
						while($row_cat_pro = mysql_fetch_array($run_cat_pro)){
							 $pro_id = $row_cat_pro['product_id'];
							 $pro_title = $row_cat_pro['product_title'];
							 $pro_desc = $row_cat_pro['product_desc'];
							 $pro_price = $row_cat_pro['product_price'];
							 $pro_image = $row_cat_pro['product_img1'];
							
							 
						 
                	echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<img src='admin_area/product_images/$pro_image' width='180' height='180' /> <br>
						<p><b>Price: $pro_price</b></p>
						<a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a>
						<a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						</div>
						";
						
						}
	
	
	
	
	
	
	
		}
	
	
	
	}
	
	
	
	
	
	
	

function getBrands(){
		$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						
						$get_brands = "select * From brands";
					$run_brands =mysql_query($get_brands , $db);
					 while($row_brands = mysql_fetch_array($run_brands)){
						 $brand_id = $row_brands['brand_id'];
						 $brand_title = $row_brands['brand_title'];
						 
                	echo "<li><a href='index.php?brand=$brand_id'>$brand_title</a></li>";
					 }



}


function getBrandPro(){
if(isset($_GET['brand'])){
				
				$brand_id = $_GET['brand'];
				
				
				$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						$get_brand_pro =  "select * from products where brand_id='$brand_id'"; 
						$run_brand_pro = mysql_query($get_brand_pro , $db);
						
						$count = mysql_num_rows($run_brand_pro);
						if($count == 0){
							echo "<h2>No products Found In This Category</h2>";
						}
						while($row_brand_pro = mysql_fetch_array($run_brand_pro)){
							 $pro_id = $row_brand_pro['product_id'];
							 $pro_title = $row_brand_pro['product_title'];
							 $pro_desc = $row_brand_pro['product_desc'];
							 $pro_price = $row_brand_pro['product_price'];
							 $pro_image = $row_brand_pro['product_img1'];
							
							 
						 
                	echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<img src='admin_area/product_images/$pro_image' width='180' height='180' /> <br>
						<p><b>Price: $pro_price</b></p>
						<a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a>
						<a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						</div>
						";
						
						}
	
	
	
	
	
	
	
		}
	
	
	

}

function getCats(){

			$db = mysql_connect('localhost','root','');
						mysql_select_db('myshop');
						
						$get_cats = "select * From categories";
					$run_cats =mysql_query($get_cats , $db);
					 while($row_cats = mysql_fetch_array($run_cats)){
						 $cat_id = $row_cats['cat_id'];
						 $cat_title = $row_cats['cat_title'];
						 
                	echo "<li><a href='index.php?cat=$cat_id'>$cat_title</a></li>";
					 }
                         
                          


}

?>