<?php 
	session_start();
	include 'function/dbconn.php';
	include 'function/functions.php';

	/* $sql = 'SELECT * FROM shipping';

   mysql_select_db('ecommsite');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
  $row = mysql_fetch_array($retval, MYSQL_ASSOC);
   
   //echo "Fetched data successfully\n";
   mysql_close($conn);
	
	*/

?>







<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Welcome to Black Eagle (Responsive)  - Preview</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

<script type="text/javascript" src="assets/templates/common-html5/js/modernizr.min4a2e.js?vcart=7.6.0"></script>
<script type="text/javascript" src="assets/templates/common-html5/js/utilities4a2e.js?vcart=7.6.0"></script>
<link rel="stylesheet" href="assets/templates/common-html5/quicksearch/quicksearch4a2e.css?vcart=7.6.0" type="text/css" media="screen" />
<link rel="stylesheet" href="assets/templates/common-html5/css/layout4a2e.css?vcart=7.6.0" type="text/css" media="all" />
<link rel="stylesheet" href="assets/templates/common-html5/css/responsive4a2e.css?vcart=7.6.0" type="text/css" media="screen" />
<link rel="stylesheet" href="assets/templates/black-eagle-html5-premium/css/default4a2e.css?vcart=7.6.0" type="text/css" media="screen" />
<link href='https://fonts.googleapis.com/css?family=Oswald:400,300,700&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="assets/templates/common-html5/css/fontello4a2e.css?vcart=7.6.0" />
<!--[if IE 7]>
<link rel="stylesheet" href="assets/templates/common-html5/css/fontello-ie7.css?vcart=7.6.0" />
<![endif]-->
<!--START: FRAME_RSSFEEDS -->
<link rel="alternate" type="application/rss+xml" title="Featured Items (RSS 2.0)" href="rss4ab8.asp?type=home" />
<link rel="alternate" type="application/rss+xml" title="Products On Sale (RSS 2.0)" href="rss4291.asp?type=onsale" />
<link rel="alternate" type="application/rss+xml" title="New Releases (RSS 2.0)" href="rssb42c.asp?type=newreleases" />
<link rel="alternate" type="application/rss+xml" title="Best Sellers (RSS 2.0)" href="rssd2f6.asp?type=bestsellers" />
<link rel="alternate" type="application/rss+xml" title="Latest Blog Posts (RSS 2.0)" href="rss6f62.asp?type=blog" />
<!--END: FRAME_RSSFEEDS -->
<script type="text/javascript">
    if (typeof jQuery == 'undefined') {
        document.write("<script type=\"text/javascript\" src=\"assets/templates/common-html5/js/jquery.min4a2e.js?vcart=7.6.0\"></" + "script>");
    }
</script>
<link media="screen" rel="stylesheet" href="assets/templates/common-html5/js/quick_view4a2e.css?vcart=7.6.0" />
<script src="assets/templates/common-html5/js/quick_view4a2e.js?vcart=7.6.0" type="text/javascript"></script>
<script src="assets/templates/common-html5/js/jquery.simplemodal.min4a2e.js?vcart=7.6.0" type="text/javascript"></script>
</head><body>
<div id="mainContainer">
  <div class="top-menu">
      <div class="wrapper">
      <a id="mobileMenu" class="show-mobile"><i class="icon-ellipsis-vert"></i></a>
      <a href="messageeb96.html" id="mobileCart" class="show-mobile"><i class="icon-basket"></i></a>
      <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="showSlideMenu">
        <a id="closeSlideMenu" class="show-mobile"><i class="icon-cancel-circled"></i></a>
        <ul>
          <li class="m-search show-mobile">
              <div>
                <form method="get" name="mSearchForm" action="">
                  <input type="text" name="keyword" value="" placeholder="Search" />
                  <button name="search"><i class="icon-search"></i></button>
                  <div class="clear"></div>
                </form>
              </div>
          </li>
          <div id="FRAME_MENU" ><!--START: FRAME_MENU-->
              <!--START: menuitems_view-->
              <li><a href="About-Us_ep_7.html" class="menu" target="_self">About Us</a></li>
              
              <li><a href="myaccount.html" class="menu" target="_self">Contact</a></li>
              
              <li><a href="blog.html" class="menu" target="_self">Blog</a></li>
              
              <li><a href="crm21e1.html?action=contactus" class="menu" target="_self">FAQ</a></li>
              <!--END: menuitems_view-->
          <!--END: FRAME_MENU--></div>
        </ul>
        <div id="FRAME_SEARCH" ><!--START: FRAME_SEARCH-->
          <div id="searchBox" class="hidden-mobile">
            <form method="get" name="searchForm" action="">
              <input type="text" id="searchlight" name="keyword" value="" placeholder="Search" />
              <input type="submit" name="search" value="" />
            </form>
            <div class="clear"></div>
          </div>
          <!--END: FRAME_SEARCH--></div>
        <div class="clear"></div>
        </nav>
          <div class="clear"></div>
      </div>
  </div>
  <header>
    <div class="wrapper">
      <div id="welcome-msg" class="welcome-msg">
        <!--START: login-->
        <a href="myaccount.html" class="link">My Account</a> | Hi Guest, <a href="myaccount.html">Login?</a>
        <!--END: login--> 
        <!--START: username--><!--END: username-->
      </div>
      <div id="logo">
        <!--START: global_header--><a href="index.html" title="Black Eagle (Responsive)"><img src="assets/images/logo.png" alt="Black Eagle (Responsive)" /></a><!--END: global_header-->
      </div>
	  
	
	  
	  
        <a id="cart" href="#" class="hidden-mobile"><img src="assets/templates/black-eagle-html5-premium/images/cart.png"><span id="noItems"><?php items(); ?></span> <span id="noItemsText">Item</span>, <span id="cartlink">View Cart</span></a>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </header>
  <nav id="catNavMenu">
    <div class="wrapper">
	<!--START: FRAME_CATEGORY-->
	<ul id="desktopMenu">
		
		<li>
			
			<a href="Home_c_1.html" class="cat">Home</a>
			
			<ul class="subMenu">
			
			</ul>
		</li>
		<li>
			
			<a href="" class="cat"><?php get_categories();?></a>
			

		</li>
	</ul>
	<!--END: FRAME_CATEGORY-->
	
    <div class="clear"></div>
    </div>
  </nav>
   <div class="wrapper">
    <!--START: LEFT BAR--><!--END: LEFT BAR-->
  <div id="mainContent"><section id="loginAccount"> 
  <!--START: BODY_HEADER-->
  <div class="breadcrumbs"><a href="http://blackeagle-preview-com.3dcartstores.com/">Home</a> > <a href="http://blackeagle-preview-com.3dcartstores.com/myaccount.asp">My Account</a></div>
  <!--END: BODY_HEADER-->
  <h1 class="page_headers">My Account</h1>
  <!--START: error_message--><!--END: error_message-->
    <div class="alpha-col">
      <div class="header">
        <h3>Returning Customers</h3>
      </div>
      <div class="myaccountLogin pad10">
        <form name="" action="" method="post" id="">
          <p>Please log in to your account.</p>
          <div class="loginField">
            <input type="email" size="30" name="admin_email" id="admin_email" value="" placeholder="Email" tabindex="1" class="txtBoxStyle" />
            <div class="clear"></div>
          </div>
          <div class="loginField">
            <input type="password" size="12" autocomplete="off" name="admin_pass" id="admin_pass" placeholder="Password" tabindex="2" class="txtBoxStyle" />
            <div class="clear"></div>
          </div>
          <div class="loginField">
            <a href="javascript:resetLoginPass();" class="resetpass-link"><i class="icon-cw"></i>Reset my password</a>
          </div>
          <!--START: captcha--><!--END: captcha-->
          <!--START: recaptcha--><!--END: recaptcha-->
            <!--START: recaptcharobot--><!--END: recaptcharobot-->
          <div class="submit-button">
		<input type="submit" name="login" class="btn" value="Log in to my account"><i class="icon-login"></i>
          </div>
          
        </form>
		
		
		 <?php 
		if(isset($_POST['login'])){
			
			$user_email = $_POST['admin_email'];
			$user_pass = $_POST['admin_pass'];
			
			$sel_admin = "select * from admins where admin_email='$user_email' AND admin_pass='$user_pass'";
			
			
			//echo '<pre>';print_r($sel_admin);exit;
			
			
			$run_admin = mysql_query($sel_admin , $conn);
			
			$check_admin = mysql_num_rows($run_admin);
			
		//	echo '<pre>';print_r($check_admin);exit;
			
			if($check_admin>0){
				$_SESSION['admin_email'] = $user_email;
				
				echo "<script>window.open('paypalPayment.php?logged_in=You Successfully Logged in.', '_self')</script>";
			}else{
				echo "<script>alert('Admin Email or Password is incorrect, try again.')</script>";
				
			}
			
		}
			
			
			
	
 
 ?>
 
		
		
		
		
		
		
        <form name="forgotPass" action="login.asp?action=forgotpass&ordertracking=0" method="post">
            <input type="hidden" name="email" id="resetEmail" value="" />
        </form>
      </div>
      <div class="clear"></div>
    </div>
    <div class="beta-col">
      <div class="header">
        <h3>New Customers</h3>
      </div>
      <div class="createNewAccount pad10">
        <p>If you don't have an account, please proceed by clicking the following button to continue first-time registration.

</p>
        <div class="clear"></div>
        <div class="create-account-button">
          <button type="button" onclick="window.location='register.asp?cg=0';" class="btn"><i class="icon-pencil"></i> Create Account</button>
        </div>
        
        <div class="clear"></div>
      </div>
    </div>
  <div class="clear"></div>
</section>

<script type="text/javascript">
    function resetLoginPass() {

        var loginEmail = document.getElementById('loginEmail').value;
        var resetPassBar = new MessageBar();
        resetPassBar.initialize();

        if (loginEmail == '' || loginEmail == null) {
            document.getElementById('loginEmail').focus();
            resetPassBar.alert('To Reset your password, Please enter your email address and then click "Reset my password".');
        }
        else {
            document.getElementById('resetEmail').value = loginEmail;
            document.forgotPass.submit();
        }
    }
</script></div>
    <!--START: RIGHT BAR--><!--END: RIGHT BAR-->
  <div class="clear"></div>
  </div>
  <footer>
    <div class="wrapper"> 
      <div class="ftr-col col1">

      </div>
      <div class="ftr-col col2">
      <div id="FRAME_LINKS" ><!--START: FRAME_LINKS-->
      <div id="modLinks">
          <ul class="frame-links">
            <!--START: LINKS-->
            <li><a href="http://blackeagle-preview-com.3dcartstores.com/blog.asp" target="_self" class="menu-bottom">Blog</a></li>
            
            <li><a href="http://blackeagle-preview-com.3dcartstores.com/Terms-and-Conditions_ep_2-1.html" target="_self" class="menu-bottom">Terms and Conditions</a></li>
            
            <li><a href="http://blackeagle-preview-com.3dcartstores.com/affiliateInfo.asp" target="_self" class="menu-bottom">Become an Affiliate</a></li>
            
            <li><a href="http://blackeagle-preview-com.3dcartstores.com/product_index.asp" target="_self" class="menu-bottom">Product Index</a></li>
            
            <li><a href="http://blackeagle-preview-com.3dcartstores.com/category_index.asp" target="_self" class="menu-bottom">Category Index</a></li>
            <!--END: LINKS-->
          </ul>
      </div>
      <!--END: FRAME_LINKS--></div> 
      </div>
      <div class="ftr-col col3">
      <!--START: FRAME_MAILLIST-->
      <div id="mailistBox">
        <form method="post" name="mailing" action="https://blackeagle-preview-com.3dcartstores.com/mailing_list.asp?action=add" onsubmit="return mailing_list();">
          <label>Mailing List</label>
          <div class="mailist-box">
            <input type="text" name="email" value="" placeholder="Email Address" />            
            <div class="clear"></div>
          </div>
          <input type="submit" name="www" value="GO" />
          <div class="radiowrap">
            <input type="radio" name="subscribe" value="1" checked="checked" />
            <span class="menu-text">Subscribe</span>
          </div>
          <div class="radiowrap">
            <input type="radio" name="subscribe" value="0" />
            <span class="menu-text">Unsubscribe</span>
          </div>
          <div class="clear"></div>
        </form>
        <div class="clear"></div>
      </div>
      <!--END: FRAME_MAILLIST-->
      <div class="clear"></div>
          <div class="social-icons"> 
            <h5>Social</h5>
            <!--START: social_link_facebook--><!--END: social_link_facebook-->
            <!--START: social_link_twitter--><!--END: social_link_twitter-->
            <!--START: social_link_googleplus--><!--END: social_link_googleplus-->
            <!--START: social_link_youTube--><!--END: social_link_youTube-->
            <!--START: social_link_pinterest--><!--END: social_link_pinterest-->
            <!--START: social_link_instagram--><!--END: social_link_instagram-->
            <!--START: social_link_tumblr--><!--END: social_link_tumblr-->
            <!--START: social_link_blog--><!--END: social_link_blog-->
            <div class="clear"></div>
          </div> 
      </div>
      <div class="clear"></div>
    </div>
  </footer>
  <div class="bottomBar">
    <div class="wrapper">
        <div id="globalFooter" class="footer"></div>
        <div id="copyright" class="footer">Copyright  <script type="text/javascript" language="javascript">var date = new Date(); document.write(date.getFullYear());</script> Black Eagle (Responsive). All Rights Reserved. <a href="http://www.3dcartstores.com" target="_blank">Web Store Software</a> by 3DCart.</div>
    </div>
  </div>
</div>
<!--START: quicksearch--> 
<script type="text/javascript" src="assets/templates/common-html5/quicksearch/jquery.quicksearch.js?vcart=7.6.0"></script> 
<script type="text/javascript">
jQuery(function() {
	jQuery('#searchlight').searchlight('/search_quick.asp');
});
</script> 
<!--END: quicksearch--> 
<script type="text/javascript" src="assets/templates/black-eagle-html5-premium/js/functions.js?vcart=7.6.0"></script>
<script type="text/javascript">
jQuery(document).ready(function () {
    jQuery('#desktopMenu').slicknav({
        prependTo: '.top-menu .wrapper',
        label: '',
        allowParentLinks: true,
        closedSymbol: '',
        openedSymbol: ''
    });
});
</script>
<div class="stats"> 
  <!--START: 3dcart stats--> 
  <script type="text/javascript">
//<![CDATA[
var file='/stats/count.asp';

var stats_d=new Date();
var stats_s=stats_d.getSeconds();
var stats_m=stats_d.getMinutes();
var stats_x=stats_s*stats_m;
var prdID = '[catalogid]';
var catID = '[catid]';

stats_f='' + escape(document.referrer); stats_f=stats_f.replace('_','----');
if (navigator.appName=='Netscape'){stats_b='NS';}
if (navigator.appName=='Microsoft Internet Explorer'){stats_b='MSIE';}
if (navigator.appVersion.indexOf('MSIE 3')>0) {stats_b='MSIE';}
stats_u='' + escape(document.URL); stats_u=stats_u.replace('_','----'); stats_w=screen.width; stats_h=screen.height;
stats_v=navigator.appName;
stats_fs = window.screen.fontSmoothingEnabled;
if (stats_v != 'Netscape') {stats_c=screen.colorDepth;}
else {stats_c=screen.pixelDepth;}
stats_j=navigator.javaEnabled();
info='w=' + stats_w + '&h=' + stats_h + '&c=' + stats_c + '&r=' + stats_f + '&u='+ stats_u + '&fs=' + stats_fs + '&b=' + stats_b + '&x=' + stats_x + '&cat=' + catID + '&prd=' + prdID;
document.write('<img src="' + file + '?'+info+ '" width="1" height="1" border="0" alt="stats" />');
//]]>
</script>
  <noscript>
  <img src="/stats/count.asp" width="90" height="30" alt="" />
  </noscript>
  <!--END: 3dcart stats--> 
</div>
<div id="qv_buttontitle" style="display:none;">Quick View</div>
<script>(new Image()).src = 'https://blackeagle-preview-com.3dcartstores.com/3dvisit.asp'</script></body>
</html>