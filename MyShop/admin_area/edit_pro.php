<?php 

	include 'includes/dbconn.php';
	
	//getting the  specific product from table
	if(isset($_GET['edit_pro'])){
		$edit_id = $_GET['edit_pro'];
		
		$get_edit = "select * from products where product_id= '$edit_id'";
	
	$run_edit = mysql_query($get_edit, $conn);
	$row_edit = mysql_fetch_array($run_edit);
		$p_title = $row_edit['product_title'];
		$cat_id = $row_edit['cat_id'];
		$brand_id = $row_edit['brand_id'];
		$p_image1 = $row_edit['product_img1'];
		$p_image2 = $row_edit['product_img2'];
		$p_image3 = $row_edit['product_img3'];
		$p_price = $row_edit['product_price'];
		$p_desc = $row_edit['product_desc'];
		$p_keywords = $row_edit['product_keywords'];
	}
	//getting the product relevant category
	
	$get_cat = "select * from categories where cat_id='$cat_id' ";
	$run_cat = mysql_query($get_cat);
	$cat_row = mysql_fetch_array($run_cat);
	$cat_edit_title = $cat_row['cat_title'];

//getting the exact brand for this product 
	
	$get_brand = "select * from brands where brand_id='$brand_id' ";
	$run_brand= mysql_query($get_brand);
	$brand_row = mysql_fetch_array($run_brand);
	$brand_edit_title = $brand_row['brand_title'];
	
	
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; float="center">
	<form action="" method="post" enctype="multipart/form-data">
    	<table width="700" align="center" border="2" bgcolor='#CCCCCC' height="730">
        
       		<tr>
            	<td colspan="2"><h2>Update or Edit Product:</h2></td>
            </tr>
            	
            <tr>
           		 <td align="right"><b>Product title</b></td>
            	<td><input type="text" name="product_title" size="50" value="<?php echo $p_title; ?>" ></td>
            </tr>
            
            
           		<tr>
                <td align="right"><b>Product Category</b></td>
            	<td> 
                <select name="product_cat">
                    <option value="<?php echo $cat_id;?>"><?php echo $cat_edit_title;?></option>
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
		<option value="<?php echo $brand_id;?>"><?php echo $brand_edit_title;?></option>           
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
            		<td><input type="file" name="product_img1"><img src="product_images/<?php echo $p_image1; ?>" height="80" width="80"></td>
            </tr>
            
              <tr>
              		<td align="right"><b>Product Image 2</b></td>
            		<td><input type="file" name="product_img2"><img src="product_images/<?php echo $p_image2; ?>" height="80" width="80"></td>
            </tr>
            
              <tr>
              		<td align="right"><b>Product Image 3</b></td>
            		<td><input type="file" name="product_img3"><img src="product_images/<?php echo $p_image3; ?>" height="80" width="80"></td>
            </tr>
            
            <tr>
            		<td align="right"><b>Product Price</b></td>
            		<td><input type="text" name="product_price" value="<?php echo $p_price; ?>"></td>
            </tr>
            
              <tr>
              		<td align="right"><b>Product Description</b></td>
            		<td><textarea name="product_desc" cols="30" rows="10" value="<?php echo $p_desc; ?>"></textarea></td>
            </tr>
            
            <tr>
            		<td align="right"><b>Product Keywords</b></td>
            		<td><input type="text" name="product_keywords" value="<?php echo $p_keywords; ?>" size="50"></td>
            </tr>
            
              <tr colspan="2" align="center">
            	<td><input type="submit" name="update_product" value="Update Product"></td>
            </tr>
            
      </table>      
    </form>
</body>
</html>

<?php

	if(isset($_POST['update_product'])){
		
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
				
				$update_product = " update products set	 cat_id='$product_cat',brand_id='$product_brand',date=NOW(),product_title='$product_title',product_img1='$image1',product_img2='$image2',product_img3='$image1',product_price='$product_price',product_desc='$product_desc',product_keywords= '$product_keywords' where product_id='$update_id'";
				
				//echo '<pre>';print_r($insert_product);exit;
				
				$run_product = mysql_query($update_product, $conn);
				
				if($run_update){
					
					echo "<script>alert('Product updated Successfully')</script>";
					echo "<script>window_open('index.php?view_products','_self ')</script>";
					}
				
			
			}













	}




?>

