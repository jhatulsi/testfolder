
<?php 
		include 'updateServices.php';
		include 'dbconn.php';
		
		$sql ="SELECT * FROM services_tb WHERE id=1";
		
		mysql_select_db('example');
	
	$retval = mysql_query($sql, $conn);
	
		if(! $retval){
			die('could not get data:' . mysql_error());
		}
			//echo 'hello';exit;
			
			$row = mysql_fetch_assoc($retval);
			
		//	echo '<pre>';print_r($row);exit;
			mysql_close($conn);
			
		


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
<fieldset  style="width:870px">
<form method="post" action="" enctype="multipart/form-data">

	<a href="\minimaxwebsite\admin\logout.php\"><b style="color:red">LOGOUT</b></a>
	<br>
	
	<?php $success = "" ;?>

<span <?php echo $success; ?>></span>
<br>	
	<br>
	<h3><b style="color:green">|Edit Features:	</b></h3>
	
 <h4><i>Service's Heading 1:</i></h4>
<textarea name="srvs_h1" id="srvs_h1" rows="4" cols="50"><?php echo $row['srvs_h1'];?>
</textarea>
  <!-- <input type="textarea" name="ftrs_h1" value="" id="ftrs_h1"> -->
  <br>
  <h5><i>Service's Text 1:</i></h5>
  <textarea name="srvs_t1"  id="srvs_t1" rows="4" cols="50"><?php echo $row['srvs_t1']; ?>
</textarea>
  <!--<input type="textarea" name="ftrs_t1" value="" id="ftrs_t1"> -->
  <br>
  <br>
  <h4><i> Service's Heading 2:</i></h4>
   <textarea name="srvs_h2" id="srvs_h2" rows="4" cols="50"><?php echo $row['srvs_h2']?>
</textarea>

  <br>
  <h5><i>Service's Text 2:</i></h5>
  <textarea name="srvs_t2" id="srvs_t2" rows="4" cols="50"><?php echo $row['srvs_t2']?>
</textarea>
  
  <br>
  <br>
   <h4><i> Service's Heading 3:</i> </h4>
   <textarea name="srvs_h3" id="srvs_h3" rows="4" cols="50"><?php echo $row['srvs_h3']?>
</textarea>
  
  <br>
  <h5><i>Service's Text 3:</i></h5>
   <textarea name="srvs_t3" id="srvs_t3" rows="4" cols="50"><?php echo $row['srvs_t3']?>
</textarea>
  
 
 
  <br>
 <h4><i style="color:blue"> Submit:- </i><input type="submit" value="submit"></h4>
  
  <br>

  <!--<a href="\minimaxwebsite\admin\logout.php\">LOGOUT</a>-->
  
  
</form> 

</fieldset>




</body>
</html>
