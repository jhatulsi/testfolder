
<?php 

	include 'function/dbconn.php';
	//include 'function/functions.php';


	if(isset($_GET['range'])){
		$items = $_GET['range'];
		
		$get_items = "select * from products where product_price='$items'";
		exit($get_items);
		$run_items = mysql_query($get_items , $conn);
		$count_items = mysql_num_rows($run_items);
		
		
		
	}

	
	
?>




<form action="" method="post" enctype="multipart/form-data">
					<br>
					<table width="740" height="40" bgcolor="" >
					
					<tr align="center">
						<td><b>Remove</b></td>
						<td><b>Product(s)</b></td>
						<td><b>Quantity</b></td>
						<td><b>Total Price</b></td>
					
					</tr>
					<?php 
						// $ip_add = getIP();
						
						// $total = 0;
						
						// $sel_price = "select * from cart where ip_add='1'";
						// $run_price = mysql_query($sel_price, $conn);
						// while ($record= mysql_fetch_array($run_price)){
							// $pro_id = $record['p_id'];
							// $pro_qty = $record['qty'];
							// $pro_price = "select * from products where product_id='$pro_id'";
							// $run_pro_price = mysql_query($pro_price , $conn);
						// while ($p_price = mysql_fetch_array($run_pro_price)){
						// $product_price = array($p_price['product_price']);
						// $product_title = $p_price['product_title'];
						// $product_image = $p_price['product_image'];
						// $only_price = $p_price['product_price'];
						
						// $values = array_sum($product_price);
						
						// $total += $values;
			
					
						//echo "$" . $total;
							
							?>
							<tr>
								<td><input type="checkbox" name="remove[]" value="<?php echo $pro_id; ?>"></td>
								<td><?php echo $product_title; ?><br><img src="<?php echo $product_image;?>" width="100" height="100"></td>
								<td><input type="text" name="qty_<?php echo $pro_id; ?>" value="<?php echo $pro_qty; ?>" size="3">
								<input type="hidden" name="prod_id_<?php echo $pro_id; ?>" value="<?php echo $pro_id; ?>">
								</td>
								<?php 
									// $ip_add = getIP(); 
								
									// if(isset($_POST['update'])){
										// $qty = $_POST['qty_' . $pro_id];
										// $pro_id = $_POST['prod_id_' . $pro_id];
										
										echo '<pre>';print_r($_POST['qty_' . $pro_id]);//exit;
										
										// $insert_qty = "update cart set qty='$qty' where p_id='$pro_id'";
										
											echo '<pre>';print_r($insert_qty);exit;
										
										// $run_qty = mysql_query($insert_qty, $conn);
										
										// $total = $total*$qty;
										
									// }
									
								?>
								
								
								
								
								<td><?php echo "$" . '&nbsp;' . $only_price; ?></td>
							
							</tr>
				
						<?php //	}} ?>
						
						
						
                            
						<tr>
						
							<td><input type="submit" name="update" value="Update Cart"></td>
							<td><input type="submit" name="continue" value="Continue Shopping"></td>
							<td><a href="checkOut.php"><h3 border="1px">Check Out</h3></a></td>
					<!--		<td><button onclick="location.href='checkOut.php';"><a href="checkOut.php" >Check Out</a></button></td> --->
							<td  colspan="4" align="right"><b>Sub Total</b></td>
						<td align="right"><b><?php echo "$" . '&nbsp;' . $total;?></b></td>
							
						</tr>
                            </table>
							
                            </form>
                            
							<?php 
								// function updateCart(){
								
									// if(isset($_POST['update'])){
										echo '<pre>';print_r($_POST);exit;
										// foreach($_POST['remove'] as $remove_id){
										
											// $delete_products =	 mysql_query(" delete from cart where p_id ='$remove_id'");
												echo '<pre>';print_r($delete_products);exit;
												
											$run_delete = mysql_query($delete_products , $conn);
											
												echo '<pre>';print_r($run_delete);exit;
											// if($delete_products){
												// echo "<script>window.open('viewCart.php','_self')</script>";
											// }else{
												// echo 'not possible';
											// }
										// }
										
										// }
										
										// if(isset($_POST['continue'])){
												// echo "<script>window.open('index.php','_self')</script>";
												
										// }
							// }	
							// echo	@$update_cart= updateCart() ;
							?>
                            
							
							
					



    <!--START: RETURNMESSAGE-->
    <div class="button"><input type="button" value="Click here to continue" class="btn" onclick="location.href='index.php';" onmouseover="this.className='btn_over'" onmouseout="this.className='btn'" /></div>
    <!--END: RETURNMESSAGE-->
  </form>