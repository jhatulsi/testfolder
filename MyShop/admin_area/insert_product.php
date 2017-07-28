<?php 

	include 'includes/dbconn.php';

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; float="center">
	<form action="insert_product.php" method="post" enctype="multipart/form-data">
    	<table width="700" align="center" border="2" bgcolor='#CCCCCC'>
        
       		<tr>
            	<td colspan="2"><h2>Insert New Product:</h2></td>
            </tr>
            	
            <tr>
           		 <td align="right"><b>Product title</b></td>
            	<td><input type="text" name="product_title" size="50"></td>
            </tr>
            
            
           		<tr>
                <td align="right"><b>Product Category</b></td>
            	<td> 
                <select name="product_cat">
                    <option>Select a Category</option>
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
                    </td></tr>
            
            
            
            
              <tr><td align="right"><b>Product Brand</b></td>
            	<td>
                <select name="product_brand">
                <option>Select a Category</option>
                <?php
					$get_brands = "select * From brands";
					$run_brands =mysql_query($get_brands , $conn);
					 while($row_brands = mysql_fetch_array($run_brands)){
						 $brand_id = $row_brands['brand_id'];
						 $brand_title = $row_brands['brand_title'];
						 
                	echo "<option value='$brand_id'>$brand_title</option>";
					 }
					?>
                    </select>
                    </td> 
					</tr>
              <tr>
              		<td align="right"><b>Product Image 1</b></td>
            		<td><input type="file" name="product_img1"></td>
            </tr>
            
              <tr>
              		<td align="right"><b>Product Image 2</b></td>
            		<td><input type="file" name="product_img2"></td>
            </tr>
            
              <tr>
              		<td align="right"><b>Product Image 3</b></td>
            		<td><input type="file" name="product_img3"></td>
            </tr>
            
            <tr>
            		<td align="right"><b>Product Price</b></td>
            		<td><input type="text" name="product_price"></td>
            </tr>
            
              <tr>
              		<td align="right"><b>Product Description</b></td>
            		<td><textarea name="product_desc" cols="30" rows="10"></textarea></td>
            </tr>
            
            <tr>
            		<td align="right"><b>Product Keywords</b></td>
            		<td><input type="text" name="product_keywords" size="50"></td>
            </tr>
            
              <tr colspan="2" align="center">
            	<td><input type="submit" name="insert_product" value="Insert Product"></td>
            </tr>
            
      </table>      
    </form>
</body>
</html>

<?php

	if(isset($_POST['insert_product'])){
		
		//echo '<pre>';print_r($_POST);exit;
	 
//text data variable
	$product_title = $_POST['product_title'];
	$product_cat = $_POST['product_cat'];
	$product_brand = $_POST['product_brand'];
	$product_price = $_POST['product_price'];
	$product_desc = $_POST['product_desc'];
	$status ='on';
	$product_keywords = $_POST['product_keywords'];
	
	// image names
	$image1 = $_FILES['product_img1']['name'];
	$image2 = $_FILES['product_img2']['name'];
	$image3 = $_FILES['product_img3']['name'];

	// temporary image names
	$temp_name1 = $_FILES['product_img1']['tmp_name'];
	$temp_name2 = $_FILES['product_img2']['tmp_name'];
	$temp_name3 = $_FILES['product_img3']['tmp_name'];


//echo '<pre>';print_r($_FILES['product_img1']['name']);exit;

	



	
	if($product_title =='' OR $product_cat =='' OR $product_brand == '' OR $product_price == '' OR $product_desc == '' OR $product_keywords == '' OR $image1 == ''){
		
		echo "<script>alert('Please fill all the Fields!')</script>";
		
		}
		else{
			
			move_uploaded_file($temp_name1,"product_images/$image1");
			move_uploaded_file($temp_name2,"product_images/$image2");
			move_uploaded_file($temp_name3,"product_images/$image3");
			
			$insert_product = " insert into products (	cat_id,brand_id,date,product_title,product_img1,product_img2,product_img3,product_price,product_desc,status) values ('$product_cat','$product_brand','NOW()','$product_title','$image1','$image2','$image3','$product_price','$product_desc','$status')";
			
			//echo '<pre>';print_r($insert_product);exit;
			
			$run_product = mysql_query($insert_product, $conn);
			
			if($run_product){
				
				echo "<script>alert('Product inserted Successfully')</script>";
				}
			
			
			}













	}




?>

