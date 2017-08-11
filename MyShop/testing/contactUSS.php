<!doctype html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

<title>Furniture Manufacturer in Delhi |  Office Furniture</title>
<meta name="description" content=""/>
<link rel="stylesheet" type="text/css" href="supreme-css/mainstyle.css"/>
<link rel="stylesheet" type="text/css" media="screen and (min-width:751px) and (max-width:1300px)" href="supreme-css/ipad.css"/>
<link rel="stylesheet" type="text/css" media="screen and (min-width:501px) and (max-width:750px)" href="supreme-css/tab.css"/>
<link rel="stylesheet" type="text/css" media="screen and (min-width:201px) and (max-width:500px)" href="supreme-css/mobile.css"/>


<link rel="shortcut icon" type="image/png" href="images/favi.png" />

<script type="text/javascript" src="supreme-js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="supreme-js/flatmenu.js"></script>
<link rel="stylesheet" type="text/css" href="supreme-css/flatmenu.css" />


<link rel="stylesheet" type="text/css" href="supreme-slider/slick.css"/>
<script type="text/javascript" src="supreme-slider/slick.js"></script>
<script type="text/javascript" src="supreme-slider/scripts.js"></script>

<link rel="stylesheet" type="text/css" href="assets/animate.css" />
<script src="assets/viewportchecker.js"></script>
<script type="text/javascript">
	jQuery(document).ready(function() {
		jQuery('.post').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
	    offset: 100    
	   });  
	   
	 jQuery(document).ready(function() {
	   jQuery('.topFade').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 100    
	   });
	   
	      
});    
});            
</script>


</head>

<body>
<!--HEADER-->
<div id="HeaderTop" class="fullWrapper">
	<div class="mainWrapper">
    	<div class="TopContact">
          <ul>
            <li class="Phonebg">Call Us: 0120-4254928 , +91- 9999623368</li>
            <li class="TopDivider">&nbsp;</li>
            <li class="Emailbg">Mail: <a href="mailto:info@homedesigninterior.in">info@homedesigninterior.in</a></li>
           </ul>
        </div>
    </div>
</div>

<div id="MainHeader" class="fullWrapper">
	<div class="mainWrapper">
		<div class="LogoContainer"><h1><a href="index.php"><img src="supreme-images/logo.png"  alt="" title="" width="200px" height="80px"/></a></h1></div>
        

          <div class="SocialIcon">
            <a href="javascript:void(0)"><img src="supreme-images/fb.png"  alt=""/></a>
            <a href="javascript:void(0)"><img src="supreme-images/twitter.png"  alt=""/></a>
         </div>
         
	  	  
<div id="menuWrap" class="nav green-black">
<div class="menu-icon"><nav>MENU</nav><span>Menu</span></div>
    <ul class="dropdown clear">            	
        <li><a href="index.php" class="rootLink ">Home <div class="line"></div></a></li>
        <li><a href="about.php" class="rootLink ">About Us<div class="line"></div></a></li>
        <li class="sub"><a href="#" class="rootLink mPrevent  ">Products<div class="line"></div></a><span class="mClick"></span>
            <ul class="fadeInDown">
                <li><a href="modular.php">Modular Furniture</a></li>
                <li><a href="cafetaria.php">Cafetaria </a></li>
                <li><a href="seating.php">Seating </a></li>
                
            </ul>                  
        </li>
        <!--li><a href="#" class="rootLink">Latest Projects<div class="line"></div></a></li-->
        <li><a href="portfolio.php" class="rootLink ">Portfolio<div class="line"></div></a></li>
        
        <li><a href="contact.php" class="rootLink ">Contact Us<div class="line"></div></a></li>
    </ul>
</div>
         
    </div>
</div>
<!--/HEADER--><script type="text/javascript" src="http://sfms.co.in/supreme-js/jquery.validate-latest.js"></script>
<script language="javascript" type="text/javascript">
$(document).ready(function(){
    $("#frmEnquiry").validate({
        rules: {
            name:"required", 
            email: {
                required: true,
                email: true
            },
            mobile:"required",
            
            message:"required" 
        },
        messages: {
            name:"",
            email: "",
            mobile:"",
         
            message:""
        },
        submitHandler: function() {
            var formvalue = $("#frmEnquiry").serialize();
            
            $.ajax({
                type: "POST",
                url: "ajax_enquiry.php",
                data: "type=siteEnquiry&" + formvalue,
                beforeSend: function() {
					$("#INPROCESS").html('<input class="submit-button" type="button" value="Processing..." name="submit">');      
                },
                success: function(msg) {
                    //alert(msg);
                    //return false;        
                 setTimeout(function(){                                   
                    var spl_txt = msg.split("~~~");                   
                    if($.trim(spl_txt[1]) == "1")
                    {
                       $("#name").val("");
                       $("#email").val("");
                       $("#mobile").val("");
                       $("#message").val("");
                       $("#name").focus("");
					   //$("#INPROCESS").html('<input class="submit-button" type="button" value="'+spl_txt[2]+'" name="submit">'); 
                       ga('send', 'event', { eventCategory: 'Form', eventAction: 'submission', eventLabel: 'Enquiry'});
                       window.location.href = "thank-you.php";
                    } 
                    else
                    {
                        $("#INPROCESS").html('<div id="msg" class="txtError">'+spl_txt[2]+'</div>');
                    }                  
                       setTimeout(function(){
                    
                         $("#INPROCESS").html('<input class="submit-button" type="submit" value="Submit" name="submit">');             
                       },2000);
                   },2000);      
                }
            });
        }
    });
});

function checkNum(num)
{ 
	var w = ""; 
	var v = "+0123456789"; 
	for (i=0; i < num.value.length; i++) 
	{	
		x = num.value.charAt(i); 
		if (v.indexOf(x,0) != -1) w += x; 
	} 
	num.value = w; 
}
</script>
<!--INNER PAGE-->
<div id="BedcrumbWpper" class="fullWrapper">
<div class="tpBg"></div>
    <div class="mainWrapper">
    	<div class="Bedcrumb">
        	<ul>
            	<li><a href="index.php">Home</a></li>
            	<li>/</li>
            	<li class="bactive">Contact Us</li>
            </ul>
        </div>
    </div>
</div>

<div id="InnerWpper" class="fullWrapper">
    <div class="mainWrapper">
        
        <div class="InnerRightWrap">
        
        	<img src="supreme-images/contactus.png" alt="" style="margin-top:40px;"/>
         </div>
         
    	<div class="InnerLeftWrap">
        	<h2>Contact Us</h2>
            <div class="cls"></div>
            
            <div class="ContactWrap">
            
            <div class="contactBox">
            <p><strong>Home Design PVT LTD</strong></p>
          	<p>
                D-329,Sector-10,Noida,Uttar Pradesh, <br>
                India
				<br><br>
                Tel: 0120-4254928 , +91- 9999623368<br>
            	Email: <a href="mailto:">  info@homedesign.com</a> 
            </p>
            
            
            
            
            </div>
         
                          
             <div class="enqieryWrap clearfix">
             	<h4>Enquiry Form</h4>
                <p style="font-size:12px;">Please fill up the following form for enquiry</p>
                <form  enctype="multipart/form-data" autocomplete="" method="post" action="">
				
				<span id="nameErr" style="color:red;"></span>
                <input name="name" id="name" class="" type="text" maxlength="250" onblur="this.placeholder = 'Name'" onfocus="this.placeholder = ''" placeholder="Name" />
				
					<span id="emailErr" style="color:red;"></span>
                <input name="email" id="email" class="" type="text" maxlength="250" onblur="this.placeholder = 'Email'" onfocus="this.placeholder = ''" placeholder="Email" />
				
				<span id="mobileErr" style="color:red;"></span>
                <input name="mobile" id="mobile" class="" type="text" maxlength="12" onblur="this.placeholder = 'Contact Number'" onkeyup="checkNum(this);" onblur="checkNum(this);" onfocus="this.placeholder = ''" placeholder="Contact Number" /><br>
				
				
				
				<span id="messageErr" style="color:red;"></span>
				<textarea name="message" id="message" class="" maxlength="400" style="resize:none;" onblur="this.placeholder = 'Message'" onfocus="this.placeholder = ''" placeholder="Message" ></textarea>
				
				
                <div id=""><button class="" value="" name="submit" onclick="return mailFunc();">Submit</button></div>
                </form> 
                </div>
				
				
													<script>
			function mailFunc(){
			
				
						var name =$('#name').val();
					/*	var email =$('#email').val();
						var mobile =$('#mobile').val();
						var message =$('#message').val();
					
*/					
						if(name == ''){
							$('#nameErr').text('Name is required');
							return false;
						 }else{
									$('#nameErr').text('');
							}
							
					/*		if(($("#email").val() =='') || (!isEmail(email))){
							$('#emailErr').text('Email is required');
								//$('#emailErr').text('valid email required');
								return false;				
								}else{
									$('#emailErr').text('');
							}
							
							
						if(mobile == ''){
							$('#mobileErr').text('Mobile is required');
							//alert ('Mobile is required');
							return false;
						}else{
									$('#mobileErr').text('');
							}
							
							if(message == ''){
							$('#messageErr').text('Message is required');
							//alert ('Message is required');
							return false;
						}else{
								$('#messageErr').text('');
							}
							
							
							*/
							
						/*	$.post("emailCode.php",
								{
								name: name,
								email: email,
								mobile: mobile,
								message:message
								},
								 function(data, status){
								//alert("Data: " + data + "\nStatus: " + status);
								});
							*/
						
					}

					
						function isEmail(email) {
						  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						  return regex.test(email);
						} 
	
						</script>
						
						
						<?php 

$to = "jhatulsi2011@gmail.com";
$subject = "Request From New User";

//echo 'hello';exit;

if(count($_POST)){

	
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
				echo  'Your request has been submitted. Our team will contact you soon.';
				//echo "<script>alert('Your request has been submitted. Our team will contact you soon.')</script>";
				
		} else{
				echo  'Unable to send email. Please try again.';
				//echo "<script>alert('Unable to send email. Please try again.')</script>";
			}
 }





}
?>
				
				
             </div>
            
        </div>
    
    </div>
</div>

<!--/INNER PAGE-->



<!--/INNER PAGE-->


<!--HOME CLIENT-->
<div id="ClientWraper" class="fullWrapper">
    <div class="mainWrapper">
		<div class="ClientHeading">
            <h2>Clients </h2>
             <h3> <marquee ><strong>“The best interior design is living with the ones you love”</strong></marquee></h3>
           <div class="cls"></div>
        </div>
            <div class="cls"></div>
            <div class="clients">
                <div class="slider clientlogos">
                   
                    <div><img src="images/logo/1.jpg" /></div>
                   <div><img src="images/logo/2.jpg" /></div>
				   <div><img src="images/logo/3.jpg" /></div>
				   <div><img src="images/logo/4.jpg" /></div>
				   <div><img src="images/logo/5.jpg" /></div>
				   <div><img src="images/logo/6.jpg" /></div>
				   <div><img src="images/logo/7.jpg" /></div>
				   <div><img src="images/logo/8.jpg" /></div>
				   <div><img src="images/logo/9.jpg" /></div>
				   <div><img src="images/logo/10.jpg" /></div>
				   <div><img src="images/logo/11.jpg" /></div>
                </div>
            </div>
        
    </div>
 </div>
<!--/HOME CLIENT-->





    

<!--/FOOTER-->

<!--FOOTER-->
<div id="FooterWrapper" class="fullWrapper">
    <div class="mainWrapper">
    	<div class="FooterLeft">
   	      © 2017 . All rights reserved.
        </div>
        <div class="FooterRight">Website Designed by <a href="www.appshiner.com" target="_blank">Appshiner</a></div>
  </div>
 </div>
<!--/FOOTER-->

</body>

</html>
