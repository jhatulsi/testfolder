<?php 
		include 'updateOurwork.php';
		include 'dbconn.php';
		
	$sql_tb = "SELECT * FROM ourwork_tb WHERE id=1";	
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
<form method="post" action="updateOurwork.php" enctype="multipart/form-data">

	<a href="\onepage-template\admin\logout.php\"><b style="color:red">LOGOUT</b></a> 
	<br>
	

	<?php $success = "" ;?>

<span <?php echo $success; ?>></span>
<h3><b style="color:green">|Edit Our Work Related images:</b></h3>
<br>
	<img src="http://localhost/gentelella-master/production/onepage-template/uploads/<?php echo $row['wrk_image1']?>" height="100" width="130" border="4px color:black">

	 <h4>OurWork Image1: 
	 <input type="file" name="wrk_image1" value="<?php echo $row['wrk_image1']?>" id="wrk_image1"> </h4>
	<br>
	
	<img src="http://localhost/gentelella-master/production/onepage-template/uploads/<?php echo $row['wrk_image2']?>" height="100" width="130" border="4px color:black">

	 <h4>OurWork Image2: 
	 <input type="file" name="wrk_image2" value="<?php echo $row['wrk_image2']?>" id="wrk_image2"> </h4>
	<br>
	
	<img src="http://localhost/gentelella-master/production/onepage-template/uploads/<?php echo $row['wrk_image3']?>" height="100" width="130" border="4px color:black">

	 <h4>OurWork Image3: 
	 <input type="file" name="wrk_image3" value="<?php echo $row['wrk_image3']?>" id="wrk_image3"> </h4>
	<br>
	
	<img src="http://localhost/gentelella-master/production/onepage-template/uploads/<?php echo $row['wrk_image4']?>" height="100" width="130" border="4px color:black">

	 <h4>OurWork Image4: 
	 <input type="file" name="wrk_image4" value="<?php echo $row['wrk_image4']?>" id="wrk_image4"> </h4>
	<br>
	
	<h3><b style="color:green">|Edit Our Work Related Text:</b></h3>
	
	<h4><i>OurWork's Text1:</i></h4>
<textarea name="wrk_text1"  id="wrk_text1" rows="4" cols="50"><?php echo $row['wrk_text1'];?>
</textarea>

<h4><i>OurWork's Text2:</i></h4>
<textarea name="wrk_text2"  id="wrk_text2" rows="4" cols="50"><?php echo $row['wrk_text2'];?>
</textarea>

<h4><i>OurWork's Text3:</i></h4>
<textarea name="wrk_text3"  id="wrk_text3" rows="4" cols="50"><?php echo $row['wrk_text3'];?>
</textarea>

<h4><i>OurWork's Text4:</i></h4>
<textarea name="wrk_text4"  id="wrk_text4" rows="4" cols="50"><?php echo $row['wrk_text4'];?>
</textarea>
	
	<h4><i style="color:blue"> Submit:- </i><input type="submit" value="submit"></h4>
  
  <br>
 
  <!--<a href="\minimaxwebsite\admin\logout.php\">LOGOUT</a>-->
  
  
</form> 

</fieldset>



</body>
</html>
