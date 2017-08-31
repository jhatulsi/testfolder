<?php 
	//session_start();
	include 'includes/dbconn.php';
	if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		//echo $sess_id;exit;
		//echo '<pre>';print_r($sess_id);exit;
	}
	
	
	// if(isset($_GET['id'])){
		
		// $vendor_id = $_GET['id'];
		
		// echo '<pre>';print_r($vendor_id);exit;
	// }

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; float="center" >

	   <form class="form-horizontal form-label-left" method="post" action="" enctype="multipart/form-data">

			<!--		<div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Company Name:</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" name="comp_name" id="comp_name" class="form-control" data-inputmask="'mask': '99/99/9999'">
                        </div>
                      </div>
	    -->
	   
                     <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product title:</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" name="product_title" id="product_title" class="form-control" data-inputmask="'mask': '99/99/9999'">
                        </div>
                      </div>
					  
					        <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Category: </i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <select class="form-control" name="cat_id">
                            <option><i>Choose Your Category</i></option>
                            <?php
                        $get_cats = "select * From categories";
                        $run_cats =mysql_query($get_cats , $conn);
                         while($row_cats = mysql_fetch_array($run_cats)){
						 $cat_id = $row_cats['cat_id'];
						 $cat_title = $row_cats['cat_title'];
                             
                        echo "<option value='$cat_id'>$cat_title</option>"; 
                         
                          }
                        ?>	
                          </select>
                        </div>
                      </div>
					  
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Keywords</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" name="product_keywords" id="product_keywords" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                         
                        </div>
                      </div>
					  
					   <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Price</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" name="product_price" id="product_price" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                         
                        </div>
                      </div>
					  
					   <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Description</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" name="product_desc" id="product_desc" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                         
                        </div>
                      </div>
					  
                  
					  
					  
				
					  
                <!--       <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Brand: </i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <select class="form-control">
                            <option><i>Choose Your Brand</i></option>
                            <option>Option one</option>
                            <option>Option two</option>
                            <option>Option three</option>
                            <option>Option four</option>
                          </select>
                        </div>
                      </div>
					  ---->
                        
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Image 1</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="file" name="product_image" id="product_image" class="form-control" data-inputmask="'mask' : '99-99999999'">
                          
                        </div>
                      </div>
                   <!--   <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Product Image 2</i></label>
                       <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="file" class="form-control" data-inputmask="'mask' : '9999-9999-9999-9999'">
                          
                        </div>
                      </div>  --->
                      <div class="ln_solid"></div>

                      <div class="form-group">
                        <div class="col-md-9 col-md-offset-3">
                          <button type="" class="btn btn-primary"><a href="insert_product.php">Cancel</a></button>
                             
						  <input type="submit" name="insert_product" value="Insert Product" class="btn btn-success">
                        </div>
                      </div>

<?php

	if(isset($_POST['insert_product'])){
		
		//echo '<pre>';print_r($_POST);exit;
	 
//text data variable
	
	
//	$comp_name = $_POST['comp_name'];
	$product_title = $_POST['product_title'];
	$cat_id= $_POST['cat_id'];
	$product_keywords = $_POST['product_keywords'];
	$product_price = $_POST['product_price'];
	$product_desc = $_POST['product_desc'];
	
	
	$status ='off';
	
	// image names
	$image1 = $_FILES['product_image']['name'];
//	$image2 = $_FILES['product_img2']['name'];
	//$image3 = $_FILES['product_img3']['name'];

	// temporary image names
	$temp_name1 = $_FILES['product_image']['tmp_name'];
//	$temp_name2 = $_FILES['product_img2']['tmp_name'];
	//$temp_name3 = $_FILES['product_img3']['tmp_name'];


//echo '<pre>';print_r($_FILES['product_img1']['name']);exit;

	



	
		if($product_title =='' OR $cat_id =='' OR $product_price == '' OR $product_desc == '' OR $product_keywords == '' OR $image1 == ''){
		
		echo "<script>alert('Please fill all the Fields!')</script>";
		
		}
		else{
			
				move_uploaded_file($temp_name1,"$image1");
				//move_uploaded_file($temp_name2,"product_images/$image2");
				//move_uploaded_file($temp_name3,"product_images/$image3");
				
				$insert_product = " insert into products (cat_id,vendor_id,product_title,date,product_price,product_keywords,product_desc,product_image,status) values ('$cat_id','$sess_id','$product_title',NOW(),'$product_price','$product_keywords','$product_desc','$image1','$status')";
				
				//echo '<pre>';print_r($insert_product);exit;
				
				$run_product = mysql_query($insert_product, $conn);
				
				if($run_product){
					
					echo "<script>alert('Product inserted Successfully')</script>";
					echo "<script>window_open('dashboardIndex.php?insert_product','_self ')</script>";
					}
				
			
			}

		

	}

?>
					  
					  
                    </form>
             
				  </br>
				  <div class="ln_solid"></div>
				  	<form id="f_color" action="" method="post" enctype="multipart/form-data">

					<div>
							
							<div class="col-md-2 col-sm-2 col-xs-2">
							  <select class="form-control" name="p_color">
								<option><i>Select Color</i></option>
								<option value="Blue">Blue</option>
								<option value="Green">Green</option>
								<option value="Yellow">Yellow</option>
								<option value="Sky">Sky</option>
							  </select>
							</div>
						 
						  </br>
					  
					
						</br><input type="file" name="product_image" id="product_image" align="center" >
					</div>  
						

<input type="submit" name="color_submit" value="submit" align="center">
					  
<?php 

	if(isset($_POST['color_submit'])){
		
		$get_proId = "SELECT * FROM products ORDER BY product_id DESC ";
		
			//echo'<pre>';print_r($get_proId);exit; 
		
		 mysql_select_db('ecommsite');
		   $retval = mysql_query( $get_proId, $conn );
		   
		   if(! $retval ) {
			  die('Could not get data: ' . mysql_error());
		   }
		   
		 // $row = mysql_fetch_array($retval, MYSQL_ASSOC);
		 $row = mysql_fetch_array($retval, MYSQL_ASSOC);
			$pro_id = $row['product_id'];
			$ven_id = $row['vendor_id'];
			//echo'<pre>';print_r($pro_id);exit; 
		
		$p_color = $_POST['p_color'];
		$p_image = $_FILES['product_image']['name'];
		$temp_image = $_FILES['product_image']['tmp_name'];
		
			move_uploaded_file($temp_image,"$p_image");
		
		$insert_color = " insert into products_color (product_id,vendor_id,product_color,product_image) values ('$pro_id','$ven_id','$p_color','$p_image')";
		
		
		
		$run_product = mysql_query($insert_color, $conn);
				
				if($run_product){
					
					echo "<script>alert('Product color and image inserted Successfully')</script>";
					echo "<script>window_open('dashboardIndex.php?insert_product','_self ')</script>";
					} 
		
	}


?>					 
</form>
	<div class="ln_solid"></div>			  
            





					 
	
</body>
</html>
