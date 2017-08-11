<?php 

$to = "jhatulsi2011@gmail.com";
$subject = "Request From New User";

//echo 'hello';exit;

if(count($_POST)){

	$success == "";
	$error == "";

//echo '<pre>';print_r($_POST);exit;

	if(isset($_POST['name']) && $_POST['name'] != ''){

//         echo '<pre>';print_r($_POST);exit; 
     
     
         $name = $_POST['name'];
         $email = $_POST['email'];
         $mobile = $_POST['mobile'];
         $message = $_POST['message'];
         




 $message = "  

 <html>
<head>
<title>A Request From New User:</title>
<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;    
}
</style>
</head>
<body>
<p> A Request From New User:</p>
 <table style='width:100%'>
  <tr>
    <th>About</th>
<th>Info</th>
  </tr>
  <tr>
  <td>Name</td>
   <td>". $_POST['name'] ."</td>
        </tr>
        <tr>
        <td>Phone</td>
        <td>".$_POST['email']."</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>".$_POST['mobile']."</td>
</tr>
 <tr>
        <td>Message</td>
        <td>".$_POST['message']."</td>
</tr>


</table>
</body>
</html>";




// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <jhatulsi2011@gmail.com>' . "\r\n";
$headers .= 'Cc: jhatulsi2011@gmail.com' . "\r\n";


//echo $message;exit;

//mail($to,$subject,$message,$headers,$text);
		if(mail($to,$subject,$message,$headers)){
				 $success .= 'Your request has been submitted. Our team will contact you soon.';
				//echo "<script>alert('Your request has been submitted. Our team will contact you soon.')</script>";
				
		} else{
				$error .=  'Unable to send email. Please try again.';
				//echo "<script>alert('Unable to send email. Please try again.')</script>";
			}
 }





}
?>