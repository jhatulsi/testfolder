<?php 
	//	include 'updateslider.php';
		include 'dbconn.php';
		
	$sql_tb = "SELECT * FROM slider_tb WHERE id=1";	
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
 </head>

<body>
<fieldset>
<form method="post" action="updateslider.php" enctype="multipart/form-data">

	<a href="\onepage-template\admin\logout.php\"><b style="color:red">LOGOUT</b></a> 
	<br>
	
	<?php $success = "" ;?>

<span <?php echo $success; ?>></span>
<h3><b style="color:green">|Slider images:	</b></h3>
<br>
	<img src="http://localhost/onepage-template/uploads/<?php echo $row['slide1']?>" height="100" width="230" border="4px color:black">

	 <h4>Slide 1: 
	 <input type="file" name="slide1" value="<?php echo $row['slide1']?>" id="slide1"> </h4>
	<br>
	
	<img src="http://localhost/onepage-template/uploads/<?php echo $row['slide2']?>" height="70" width="230" border="4px color:black" >
	 <h4>Slide 2: 
	 <input type="file" name="slide2" value="<?php echo $row['slide2']?>" id="slide2"> </h4>
	
	<br>
	
	<img src="http://localhost/onepage-template/uploads/<?php echo $row['slide3']?>" height="80" width="230" border="4px color:black" >
	 <h4>Slide 3: 
	 <input type="file" name="slide3" value="<?php echo $row['slide3']?>" id="slide3"> </h4>
	 
	
	<h4><i style="color:blue"> Submit:- </i><input type="submit" value="submit"></h4>
  
  <br>
 
  <!--<a href="\minimaxwebsite\admin\logout.php\">LOGOUT</a>-->
  
  
</form> 

</fieldset>




</body>
</html>
