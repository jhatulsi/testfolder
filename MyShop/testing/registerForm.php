<?php 

$to = "jhatulsi2011@gmail.com";
$subject = "Request From New User";

//echo 'hello';exit;

if(count($_POST)){

//echo '<pre>';print_r($_POST);exit;

	if(isset($_POST['firstname']) && $_POST['firstname'] != ''){

//         echo '<pre>';print_r($_POST);exit; 
     
     
         $firstname = $_POST['firstname'];
         $middle_name = $_POST['middle_name'];
         $last_name = $_POST['last_name'];
         $salaryDay = $_POST['salaryDay'];
         $salaryMonth = $_POST['salaryMonth'];
         $salaryYear = $_POST['salaryYear'];
         $email = $_POST['email'];
         $mobile = $_POST['mobile'];
         $address = $_POST['address'];
         $gender = $_POST['gender'];
         $qualification = $_POST['qualification'];
         $Experience_Years = $_POST['Experience_Years'];
         $Experience_Months = $_POST['Experience_Months'];
         $designation = $_POST['designation'];
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
   <td>". $_POST['firstname'] . $_POST['middle_name'] . $_POST['last_name'] ."</td>
        </tr>
        <tr>
        <td>Date Of Birth</td>
        <td>".$_POST['salaryDay'] . $_POST['salaryMonth'] . $_POST['salaryYear'] . "</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>".$_POST['email']."</td>
</tr>
 <tr>
        <td>Mobile</td>
        <td>".$_POST['mobile']."</td>
</tr>
 <tr>
        <td>Address</td>
        <td>".$_POST['address']."</td>
</tr>
 <tr>
  <td>Gender</td>
   <td>". $_POST['gender'] ."</td>
        </tr>
        <tr>
        <td>Qualification</td>
        <td>".$_POST['qualification']."</td>
    </tr>
    <tr>
        <td>Experience_Years</td>
        <td>".$_POST['Experience_Years']."</td>
</tr>
 <tr>
        <td>Experience_Months</td>
        <td>".$_POST['Experience_Months']."</td>
</tr>
 <tr>
        <td>Designation</td>
        <td>".$_POST['designation']."</td>
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
				 echo ' Your request has been submitted. Our team will contact you soon.';
                                 	

		} else{
				echo  'Unable to send email. Please try again.';
			}
 }





}
?>