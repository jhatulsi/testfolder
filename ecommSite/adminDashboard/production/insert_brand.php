<?php 
if(isset($_SESSION['loginUserId'])){
		$sess_id = $_SESSION['loginUserId'];
		
	}

?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body bgcolor="#999999"; style="float:center;">
	<form action="" method="post">
			
			 <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-3"><i>Insert New Brand:</i></label>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <input type="text" class="form-control" data-inputmask="'mask' : '(999) 999-9999'">
                         <input type="submit" name="insert_brand" value=" Insert Brand"/>
                        </div>
                      </div>
			
	</form>
	





	
	
	
	
	