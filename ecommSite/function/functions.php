<?php 

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


function get_categories(){
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						
						$get_cats = "select * From categories";
						//echo '<pre>';print_r($get_cats);exit;
						
					$run_cats =mysql_query($get_cats , $db);
					 while($row_cats = mysql_fetch_array($run_cats)){
						 $cat_id = $row_cats['cat_id'];
						 $cat_title = $row_cats['cat_title'];
						 
                	echo "<li><a href='index.php?cat=$cat_id'>$cat_title</a></li>";
					 }
}


	function getCatPro(){
			if(isset($_GET['cat'])){
				
				$cat_id = $_GET['cat'];
				
				
				$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						$get_cat_pro =  "select * from products where cat_id='$cat_id'"; 
						$run_cat_pro = mysql_query($get_cat_pro , $db);
						
						$count = mysql_num_rows($run_cat_pro);
						if($count == 0){
							echo "<h2>No products Found In This Category</h2>";
						}
						while($row_cat_pro = mysql_fetch_array($run_cat_pro)){
							 $pro_id = $row_cat_pro['product_id'];
							 $pro_title = $row_cat_pro['product_title'];
							  $pro_key = $row_cat_pro['product_keywords'];
							 $pro_desc = $row_cat_pro['product_desc'];
							 $pro_price = $row_cat_pro['product_price'];
							 $pro_image = $row_cat_pro['product_image'];
							
							 
						 
                	echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<img src='$pro_image' width='180' height='180' /> <br>
						<p><b>Price: $ $pro_price</b></p>
						<a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a>
						<a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						</div>
						";
						}
			}
	
	}
	
	
	
	
	function price_ranges(){
	
		if(isset($_GET['p_range'])){
				$ip_add = getIP();
		$p_range = $_GET['p_range'];
		
	//	echo $p_id;exit;
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
		
		$min_price= 1;
		$max_price= $p_range/5;
		
		
		//$check_price = "select * from products where product_price MIN $min_price AND MAX $max_price";
		$check_price = "SELECT * FROM products ORDER BY product_price LIMIT $min_price, $max_price";
		
		//echo '<pre>';print_r($check_price);exit;
		
		
		$run_price = mysql_query($check_price , $db);
			
			while($row_price = mysql_fetch_array($run_price)){
							
							// $pro_color = $row_price['color'];
							 $pro_id = $row_price['product_price'];
							 $pro_title = $row_price['product_title'];
							 $pro_image = $row_price['product_image'];
							 $pro_keywords = $row_price['product_keywords'];
							
		
						echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<p><b> $pro_keywords</b></p>
						
						<img src='$pro_image' width='180' height='180' /> <br><a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a> <a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						
						
						
						</div>
						<br>
						";
						
						
					
						
						}
			
		
		exit;
		
			}
		
	}
	
	
	function p_ranges1(){
		
		if(isset($_GET['p_range1'])){
				$ip_add = getIP();
		$p_range1 = $_GET['p_range1'];
		
		//echo'<pre>';print_r($p_range1);exit; 
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
		
		$min_price= $p_range1/5 + 1;
		$max_price= $p_range1/2;
		
		
		//$check_price = "select * from products where product_price MIN $min_price AND MAX $max_price";
		$check_price1 = "SELECT * FROM products ORDER BY product_price LIMIT $min_price, $max_price";
		
		//echo '<pre>';print_r($check_price1);exit;
		
		
		$run_price = mysql_query($check_price1 , $db);
			
			while($row_price = mysql_fetch_array($run_price)){
						
						//echo '<pre>';print_r($row_price);exit;
								
							// $pro_color = $row_price['color'];
							 $pro_id = $row_price['product_price'];
							 $pro_title = $row_price['product_title'];
							 $pro_image = $row_price['product_image'];
							 $pro_keywords = $row_price['product_keywords'];
							
		
						echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<p><b> $pro_keywords</b></p>
						
						<img src='$pro_image' width='180' height='180' /> <br><a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a> <a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						
						
						
						</div>
						<br>
						";
						
						
					
						
						}
			
		
					exit;
		
			}
	
	}
	
	
	
	function price_range2(){
	
		if(isset($_GET['p_range2'])){
				$ip_add = getIP();
		$p_range2 = $_GET['p_range2'];
		
		//echo '<pre>';print_r($p_range2);exit;
	
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
		
		$min_price= $p_range2/2 + 1;
		$max_price= $p_range2;
		
		
		//$check_price = "select * from products where product_price MIN $min_price AND MAX $max_price";
		$check_price = "SELECT * FROM products ORDER BY product_price LIMIT $min_price , $max_price";
		
		//echo '<pre>';print_r($check_price);exit;
		
		
		$run_price = mysql_query($check_price , $db);
			
			//echo '<pre>';print_r($run_price);exit;
			
			while($row_price = mysql_fetch_array($run_price)){
							
							//echo '<pre>';print_r($row_price);exit;
							
							// $pro_color = $row_price['color'];
							 $pro_id = $row_price['product_price'];
							 $pro_title = $row_price['product_title'];
							 $pro_image = $row_price['product_image'];
							 $pro_keywords = $row_price['product_keywords'];
							
		
						echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<p><b> $pro_keywords</b></p>
						
						<img src='$pro_image' width='180' height='180' /> <br><a href='details.php?pro_id=$pro_id' style='float:left;'>Details</a> <a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						
						</div>
						<br>
						";
						
						}
				exit;
			}
	
	}
	
	
	
	
	function itemsColor(){
		
		if(isset($_GET['pro_id'])){
				$ip_add = getIP();
		$p_id = $_GET['pro_id'];
		
	//	echo $p_id;exit;
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
		
		
		
		$check_pro = "select product_color,color_id from products_color where product_id='$p_id'";
									// echo '<pre>';print_r($check_pro);exit;

		
	//	$check_pro = "select * from cart where ip_add='$ip_add' AND p_id='$p_id'";
		
		
		
			
							// echo '<pre>';print_r($row_products);exit;
							
							
							// $pro_image = $row_products['product_image'];
							
						 	
                	$returnStr = "
		<div class='header' align='center' >
					<h3>Choose Options</h3>
					<div class='clear'></div>
				</div>
				<div class='container' align='center'>
					<!--START: optionstemplate--><!--END: optionstemplate-->
					<!--START: options--><!--START: optionBlock13-->
					<div class='opt-regular' align='center'>
						<!--START: required--><span class='required'><img src='assets/templates/common/images/error2.gif' width='12' height='12' alt='' /></span><!--END: required-->
						<span class='label'>Color</span>
						<!--START: help--><!--END: help-->
						<div class='clear'></div>
						<div class='opt-field'>
						
						
					<div class='dropdownimage-format' align='center'>
						<select name='option-di_13-12' onchange='validateValues(document.add,1);selectOption(this);' class='txtBoxStyle'>
							<!--START: option-->";
			
		$run_check = mysql_query($check_pro , $db);				
			while($row_products = mysql_fetch_array($run_check)){
					 $pro_color = $row_products['product_color'];		
					 $pro_colorId = $row_products['color_id'];		
							$returnStr .= "<option value='$pro_colorId' >$pro_color </option>";
							}
							
					$returnStr .= "<!--END: option-->
						</select>
						<div class='dropdown-image'><img name='img_option-di_13-12' width='50' src='assets/templates/common-html5/images/spacer.gif' /></div>
					</div>
					</div>

	</div>

						
						
						
						
						
						
						
						<!--------------------->
						
					
						";
						
						
			
		echo $returnStr;
		
		
			}
		
	}

	
	
	
	function productSize(){
		
		if(isset($_GET['pro_id'])){
				$ip_add = getIP();
		$p_id = $_GET['pro_id'];
		
	//	echo $p_id;exit;
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
		
		
		
		$sel_color = "select product_color,color_id,product_image from products_color where product_id='$p_id'";
									// echo '<pre>';print_r($check_pro);exit;

									$run_color = mysql_query($sel_color , $db);				
			//while($row_products = mysql_fetch_array($run_check)){
			
					$row_products = mysql_fetch_array($run_color);
					 $pro_color = $row_products['product_color'];		
					 $pro_colorId = $row_products['color_id'];	
					 $pro_image = $row_products['product_image'];	
					
		
					//echo '<pre>';print_r($pro_color);exit;
						
			$sel_size = "select size_id,product_size from size_tb where product_id='$p_id' AND color_id='$pro_colorId'";
									
		
	//	$check_pro = "select * from cart where ip_add='$ip_add' AND p_id='$p_id'";
		
		
		
			
							// echo '<pre>';print_r($row_products);exit;
							
							
							// $pro_image = $row_products['product_image'];
							
						 	
                	$returnStr = "
		<div class='header' align='center' >
					<h3>Choose Sizes</h3>
					<div class='clear'></div>
				</div>
				<div class='container' align='center'>
					<!--START: optionstemplate--><!--END: optionstemplate-->
					<!--START: options--><!--START: optionBlock13-->
					<div class='opt-regular' align='center'>
						<!--START: required--><span class='required'><img src='assets/templates/common/images/error2.gif' width='12' height='12' alt='' /></span><!--END: required-->
						
						<!--START: help--><!--END: help-->
						<div class='clear'></div>
						<div class='opt-field'>
						
						
					<div class='dropdownimage-format' align='center'>
						<select name='option-di_13-12' onchange='validateValues(document.add,1);selectOption(this);' class='txtBoxStyle'>
							<!--START: option-->";
			
		$run_size = mysql_query($sel_size , $db);				
			while($sizes_row = mysql_fetch_array($run_size)){
					 $pro_sizeId = $sizes_row['size_id'];		
					 $pro_size = $sizes_row['product_size'];		
							$returnStr .= "<option value='$pro_sizeId' >$pro_size </option>";
							}
							
					$returnStr .= "<!--END: option-->
						</select>
						<div class='dropdown-image'><img name='img_option-di_13-12' width='50' src='assets/templates/common-html5/images/spacer.gif' /></div>
					</div>
					</div>

	</div>

						
						
						
						
						
						
						
						<!--------------------->
						
					
						";
						
						
			
		echo $returnStr;
		
		
			}
		
	}
	
	function productTaxes(){
	
	
	
	
	
	}
	
	function shippingRates(){
	
		
		$ip_add = getIP();
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						$total = 0;
					// Change Shipping charges:
						$shipping_charges = 5;
						$tax_rates = 3;
						
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
				
				$include_shipping =array($total,$shipping_charges,$tax_rates);
				$new_values = array_sum($include_shipping);
				}
				
				
				}
			
			
				echo "$" . $new_values;
	
		
	
	
	}
	
	
	
	
	
	

function getPro(){
		
			if(!isset($_GET['cat'])){
				if(!isset($_GET['brand'])){
						$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						$get_products = "select * from products order by rand() LIMIT 0,6"; 
						$run_products = mysql_query($get_products , $db);
						
						while($row_products = mysql_fetch_array($run_products)){
							 $pro_id = $row_products['product_id'];
							 $pro_title = $row_products['product_title'];
							 $pro_cat = $row_products['cat_id'];
							  $pro_key = $row_products['product_keywords'];
							 
							 //$pro_brand = $row_products['brand_id'];
							 $pro_desc = $row_products['product_desc'];
							 $pro_price = $row_products['product_price'];
							 $pro_image = $row_products['product_image'];
							
							 
						 	
                	echo "
					<div id='single_product'>
						<h3>$pro_title</h3>
						
						<img src='$pro_image' width='180' height='180' /> <br>
						<p><b>Price: $pro_price</b></p>
						<a href='details.php?pro_id=$pro_id&pro_keyword=$pro_key' style='float:left;'>Details</a>
						<a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						</div>
						";
						
						}
				}
		}

}


function cart(){
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						
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
	
	
	
	function details(){
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						
		if(isset($_GET['pro_id'])){
				$ip_add = getIP();
		$p_id = $_GET['pro_id'];
		
		$check_pro = "select * from products where product_id='$p_id'";
	//	$check_pro = "select * from cart where ip_add='$ip_add' AND p_id='$p_id'";
		
		$run_check = mysql_query($check_pro , $db);
			
			while($row_products = mysql_fetch_array($run_check)){
							 $pro_id = $row_products['product_id'];
							 $pro_title = $row_products['product_title'];
							 $pro_key = $row_products['product_keywords'];
							 //$pro_brand = $row_products['brand_id'];
							 $pro_desc = $row_products['product_desc'];
							 $pro_price = $row_products['product_price'];
							 $pro_image = $row_products['product_image'];
							
							 
						 	
                	echo "
					<div id='single_product'>
						<h3 align=''>$pro_title</h3>
						
						<img src='$pro_image' width='180' height='180' /> <br>
						<input type='text' value='$pro_key' name='keywords'>
						
						
						<p align='center'><b>Price: $ $pro_price</b></p>
						<p align='center'><b>Product description: $pro_desc</b></p>
						<a href='index.php?add_cart=$pro_id' style='float:right; background:#FFF;'>Add To Cart</a>
						</div>
						";
						
						}
			
		
		
		
			}
			
		
	}
	
	function priceRange(){
		
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						
		if(isset($_GET['price_range'])){
				$ip_add = getIP();
		$price = $_GET['price_range'];
		
		$get_items = "select product_price from products where status='on'";
		$run_items = mysql_query($get_items , $db);
		
		echo '<pre>';print_r($get_items);exit;
		
		}
		
		
		
		
	}
	
	
	function items(){
	if(isset($_GET['add_cart'])){
		//$ip_add = getIP();
			$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
		
						
		$get_items = "select * from cart where ip_add='1'";
		$run_items = mysql_query($get_items , $db);
		$count_items = mysql_num_rows($run_items);
		}
		else {
			//$ip_add = getIP();
			$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
						
		$get_items = "select * from cart where ip_add='1'";
		$run_items = mysql_query($get_items , $db);
		$count_items = mysql_num_rows($run_items);
			
			
			}
		echo $count_items;

}


function totalPrice(){
	$ip_add = getIP();
		$db = mysql_connect('localhost','root','');
						mysql_select_db('ecommsite');
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

	
	

?>