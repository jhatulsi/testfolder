<?php 
		include 'updateAboutUs.php';
		include 'dbconn.php';
		
	$sql_tb = "SELECT * FROM aboutus_tb WHERE id=1";	
	 mysql_select_db('example');
   $retval = mysql_query( $sql_tb, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
   $row = mysql_fetch_assoc($retval);
   
   //echo '<pre>';print_r($row);exit;
   mysql_close($conn);
	
	
	//echo '<pre>';print_r($row);exit;

	
?>


<!DOCTYPE html>
<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src='https://cloud.tinymce.com/stable/tinymce.min.js'></script>
<script>
	  tinymce.init({
		selector: 'textarea'
	  });
	  </script>
 </head>

<body>
<fieldset>
<form method="post" action="" enctype="multipart/form-data">

	<a href="\onepage-template\admin\logout.php\"><b style="color:red">LOGOUT</b></a> 
	<br>
	

	<?php $success = "" ;?>

<span <?php echo $success; ?>></span>
<h3><b style="color:green">|Edit About you:	</b></h3>
<br>
	<img src="http://localhost/gentelella-master/production/onepage-template/uploads/<?php echo $row['abt_image']?>" height="100" width="130" border="4px color:black">

	 <h4>Image: 
	 <input type="file" name="abt_image" value="<?php echo $row['abt_image']?>" id="abt_image"> </h4>
	<br>
	<h4><i>Edit Text:</i></h4>
<textarea name="abt_txt" id="abt_txt" rows="4" cols="50"><?php echo $row['abt_txt'];?>
</textarea>
	
	<h4><i style="color:blue"> Submit:- </i><input type="submit" value="submit"></h4>
  
  <br>
 
  <!--<a href="\minimaxwebsite\admin\logout.php\">LOGOUT</a>-->
  
  
</form> 

</fieldset>



</body>
</html>
