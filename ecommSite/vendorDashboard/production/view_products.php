

<?php 
	//session_start();
	include 'includes/dbconn.php';
	
	if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		//echo $sess_id;exit;
		//echo '<pre>';print_r($sess_id);exit;
	

?>






<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="styles/style.css" media="all">
</head>

<body>

<?php 
if(isset($_GET['view_products'])){ ?>
		<table align="center" width="794" bgcolor="#FFCC99">
			<tr align="center">
			<td colspan="6"><h2>View My Products</h2></td>
			</tr>
			<tr>
				<th><b>S.No.</b></th>
				<th><b>Product No</b></th>
				<th><b>Title</b></th>
				<th><b>Image</b></th>
				<th><b>Price</b></th>
				<th><b>Keyword</b></th>
				<th><b>Status</b></th>
				<th><b>Edit</b></th>
				<th><b>Delete</b></th>
				</tr>
			<?php 
				include 'includes/dbconn.php';
				$i = 1;
				$get_pro = "select * from products where vendor_id=$sess_id";
				
				//echo '<pre>';print_r($get_pro);exit;
				
				$run_pro = mysql_query($get_pro, $conn);
				
				while($row_pro = mysql_fetch_array($run_pro)){
					
					$p_id = $row_pro['product_id'];
					$p_title = $row_pro['product_title'];
					$p_img = $row_pro['product_image'];
					$p_price = $row_pro['product_price'];
					$p_key = $row_pro['product_keywords'];
					$status = $row_pro['status'];
				
			
			
				
			
			?>
			
			
			
			
			
			
			<tr align="center">
			<td><?php echo $i;?></td>
			<td><?php echo $p_id;?></td>
			<td><?php echo $p_title;?></td>
			<td><img src="<?php echo $p_img;?>" width="50" height="50"></td>
			<td><?php echo $p_price;?></td>
			<td><?php echo $p_key;?></td>
			<!--<td>
				<?php 
			/*		$get_sold = "select * from pending_order where product_id='$p_id'";
			
			//exit($get_sold);
					$run_sold = mysql_query($get_sold , $conn);
					
					$count = mysql_num_rows($run_sold);
					
					 echo $count; 
					 */
					
				?>
			</td> -->
			<td>
				<?php 
					$get_status = "select * from products where product_id='$p_id'";
			
				//exit($get_sold);
					$run_status = mysql_query($get_status , $conn);
					$row_status = mysql_fetch_array($run_status);
					//echo '<pre>';print_r($row_status);exit;
					$p_status = $row_status['status'];
					
				 echo $p_status;
					 
					
				?>
		
			<td><a href="index.php?edit_pro=<?php echo $p_id; ?>">Edit</a></td>
			<td><a href="delete_pro.php?delete_pro=<?php echo $p_id; ?>">Delete</a></td>
			
		</tr>
		<?php 
			$i++;
			}
		}
		?>
		
			
		
		</table>
</body>

</html>


<?php } ?>