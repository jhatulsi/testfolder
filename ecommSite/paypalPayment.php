



<?php 

	include 'function/dbconn.php';
	include 'function/functions.php';


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






<div class="clear"></div>
				<div class="divOrderTotal">
					<div class="header">
						<h3 class="checkout-headers">Order Total</h3>
						<div class="clear"></div>
					</div>
					<div id="total_div" name="total_div" class="pad10 boxShadow">
						<!--START: total_template_noshipping-->
						<div class="totalinstructions pad10 boxShadow">Please select the appropriate shipping method to display the order total.</div>
						<!--END: total_template_noshipping-->
						<!--START: total_template--><!--END: total_template-->
					</div>
				</div>
			</div>
			<div class="clear"></div>
			<div id="divPayment">
				<!--START: PAYMENT_BLOCK-->
				<div class="header">
					<h3 class="checkout-headers">Choose one payment method</h3>
					<div class="clear"></div>
				</div>
				<!--START: NO_PAYMENT_BLOCK--><!--END: NO_PAYMENT_BLOCK-->
			<div id="divPaymentMethods" class="pad10 boxShadow">
			<!--START: checkoutMasterPass--><!--END: checkoutMasterPass-->
			<!--START: checkout_visacheckout--><!--END: checkout_visacheckout-->
			<!--START: VME_SELECTED--><!--END: VME_SELECTED-->
			<!--START: PayWithAmazon--><!--END: PayWithAmazon-->
			<!--START: checkoutByAmazon--><!--END: checkoutByAmazon-->
			<!--START: PPEXPRESS-->
			
			
			<?php 
		//	$ip = getIP();
			$get_customer = "select * from customers where customer_ip = '1'"; // or use i in place of 0 //customer_ip = '0'
			$run_customer = mysql_query($get_customer, $conn);
			$customer = mysql_fetch_array($run_customer);
			$customer_id = $customer['customer_id'];
			
			
			
			
				$ip_add = getIP();
			//$db = mysql_connect('localhost','root','');
						//	mysql_select_db('myshop');
						$total = 0;
						
			$sel_price = "select * from cart where ip_add='1'";
			$run_price = mysql_query($sel_price, $conn);
			
			$status = 'Pending';
			$invoice_no = mt_rand(); 
			$count_pro = mysql_num_rows($run_price);
			
			while ($record= mysql_fetch_array($run_price)){
				
				$pro_id = $record['p_id'];
				//echo $pro_id;exit;
				$pro_price = "select * from products where product_id='$pro_id'";
				
				
				$run_pro_price = mysql_query($pro_price , $conn);
				while ($p_price = mysql_fetch_array($run_pro_price)){
				$product_name = $p_price['product_title'];
				$product_price = array($p_price['product_price']);
				$values = array_sum($product_price);
				
				$total += $values;
				
				}
				
				}
				// Getting Quantity from the cart
				$get_cart = "select * from cart where ip_add='1'";
				
				$run_cart = mysql_query($get_cart , $conn);
				$get_qty = mysql_fetch_array($run_cart); 
				$qty = $get_qty['qty'];
				if($qty == 0){
					$qty = 1;
					$sub_total = $total;
				}else{
					$qty = $qty;
					$sub_total = $total * $qty;
				}
			
			
			

		
		?>

			
			
			
			
			<div class="ppExpress">
			    <h4>Check out with PayPal</h4>
				
				<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">

  <!-- Identify your business so that you can collect the payments. -->
  <input type="hidden" name="business" value="businesstulsitest@gmail.com">

  <!-- Specify a Buy Now button. -->
  <input type="hidden" name="cmd" value="_xclick">

  <!-- Specify details about the item that buyers will purchase. -->
  <input type="hidden" name="item_name" value="<?php echo $product_name; ?>">
  <input type="hidden" name="amount" value="<?php echo $sub_total; ?>">
  <input type="hidden" name="currency_code" value="USD">
  
  <!---------Return and cancel_return url-------->
  <input type="hidden" name="return" value="http://www.onlinetuting.com/myshop/paypal_success.php">
  <input type="hidden" name="cancel_return" value="http://www.onlinetuting.com/myshop/paypal_cancel.php">

  <!-- Display the payment button. -->
  <input type="image" name="submit" border="0"
  src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_buynow_107x26.png"
  alt="Buy Now">
  <img alt="" border="0" width="1" height="1"
  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" >

</form>
				
				
				
				
				
				
				
		<!--		
			    <div class="ppe-radio">
			        <input name="payment" id="online-[id]-ppe" onclick="javascript:checkoutSwitch(true);window.location.href = 'payment_options.php';" type="radio" value="online-[id]"/>
			    </div>
			    <div class="ppe-logo"><a href="javascript:document.getElementById('online-[id]-ppe').click();"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="Check out with PayPal"/></a>
			    </div>
			    <div class="clear"></div>
			</div>
		-->	
			
			<!--END: PPEXPRESS-->
			<!--START: PPCREDIT--><!--END: PPCREDIT-->
			<!--START: PAYFORT--><!--END: PAYFORT-->

			<!--START: PAYPALBRAINTREE--><!--END: PAYPALBRAINTREE-->
                <!--START: SQUARE--><!--END: SQUARE-->
					<!--START: PAYPALADV--><!--END: PAYPALADV-->
					<!--START: FUTUREPAY--><!--END: FUTUREPAY-->
					<!--START: WEPAY--><!--END: WEPAY-->
			<!--START: PAYMETRIC--><!--END: PAYMETRIC-->
			<!--START: AFFIRM--><!--END: AFFIRM-->
			<!--START: TRANSFLOW--><!--END: TRANSFLOW-->
			<!--START: SHOPATRON--><!--END: SHOPATRON-->
			<!--START: KLARNA--><!--END: KLARNA-->
			<!--START: CCGATEWAY--><!--END: CCGATEWAY-->
			<!--START: AUTHNETCIMBLOCK--><!--END: AUTHNETCIMBLOCK-->
			<!--START: MILITARYSTAR--><!--END: MILITARYSTAR-->
			<!--START: GEMONEY--><!--END: GEMONEY-->
			<!--START: CHECKGATEWAY--><!--END: CHECKGATEWAY-->
			<!--START: LINKGATEWAY--><!--END: LINKGATEWAY-->
            <!--START: ZIPPAYMONEY--><!--END: ZIPPAYMONEY-->
			<!--START: ELAYAWAYGATEWAY--><!--END: ELAYAWAYGATEWAY-->
			<!--START: CUSTOM-->
			<div class="customGateway">
			    <h4>
			        <label for="offline-42">
			            <input onclick="javascript:checkoutSwitch(false);controlDivPayment('42');" id="offline-42" name="payment" type="radio" value="offline-42" CHECKED/>
			            Money Order
			        </label>
			    </h4>
			    <div class="clear"></div>
			    <div id="divPaymentOption42" name="divPaymentOption" style="display: none;">
			        <div class="payment-desc"></div>
			        <div class="payment-type">Money Order</div>
			        <!--START: CUSTOM_FIELD--><!--END: CUSTOM_FIELD-->
			        <div class="clear"></div>
			    </div>
			    <div class="clear"></div>
			</div>
			<!--END: CUSTOM-->
			<div class="clear"></div>
			</div>
				<div class="clear"></div>
				<!--END: PAYMENT_BLOCK-->
				<!--START: VME_NOTSELECTED--><!--END: VME_NOTSELECTED-->
			</div>
			<div id="divCheckoutQuestions">
				<!--START: checkout_questions--><!--END: checkout_questions-->
			</div>
			<div id="divCheckoutComments">
				<div class="header">
					<h3 class="checkout-headers">Comments</h3>
					<div class="clear"></div>
				</div>
				<div class="chkComments pad10 boxShadow">
					<label for="ocomment">Please provide us with any additional information which may help complete your order.</label>
					<textarea onchange="clearContent(this);" name="ocomment" class="txtBoxStyle" cols="55" rows="3"></textarea>
					<div class="clear"></div>
				</div>
			</div>
			<div id="spanCheckout">
				<div id="divCheckout" name="divCheckout" style="width:80%;display:none;background:#ffffff;border:0px solid black;text-align:center;padding:10px;">
					<br />
					Processing...
				</div>
				<a name="checkoutButton"></a>
				<button type="button" onclick="doCheckout(this.form,'checkoutButton');" class="btn"><i class="icon-basket"></i> Check out</button>
			</div>
			<div class="clear"></div>
		</div>
	</form>
	<div class="clear"></div>
	<!--START: CATEGORY_FOOTER--><!--END: CATEGORY_FOOTER-->
	
  
<!--START: ELAYAWAYGATEWAYSCRIPTS--><!--END: ELAYAWAYGATEWAYSCRIPTS--> 
  
  <!-- /* BEGIN TEMPLATES BLOCKS */  --> 
  
  <!--START: addressType--><!--END: addressType--> 
  <!--START: CARRIER--><!--END: CARRIER--> 

  <!--START: INSURANCE--><!--END: INSURANCE-->

  <!--START: checkout_questions_templates--><!--END: checkout_questions_templates-->
  <div class="clear"></div>
</section>

<!--START: verByVisa--> 
<div id="divVerByVisa" style="display:none;"> <br />
  <div style="background-color:#fff; text-align:right; border: 1px solid #ccc; box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);"> <a href="#" onclick="javascript:closeVerByVisa();//window.location.reload();">close</a>&nbsp;&nbsp;
    <div style="text-align:center;">
      <iframe id="iframeVisa" name="iframeVisa" src="assets/images/spacer.gif" width="750" height="450" scrolling="no" frameborder="0"></iframe>
    </div>
  </div>
</div>
<!--END: verByVisa--> 

<!--START: paypaladvance-->
<form method="post" action="https://payflowlink.paypal.com" name="frmPayPalAdv" id="frmPayPalAdv" target="iframePayPalAdv">
  <input type="hidden" name="SECURETOKEN" value="">
  <input type="hidden" name="SECURETOKENID" value="" >
</form>
<script type="text/javascript">
    function openPayPalAdv(strToken, strTokenId) {
        var elt = document.getElementById("divPayPalAdv");

        //document.getElementById("iframePayPalAdv").src = "https://payflowlink.paypal.com/?SECURETOKEN=" + strToken + "&SECURETOKENID=" + strTokenId;
        document.getElementById("frmPayPalAdv").SECURETOKEN.value = strToken;
        document.getElementById("frmPayPalAdv").SECURETOKENID.value = strTokenId;
        document.getElementById("frmPayPalAdv").submit();

        elt.style.display = 'block';
    }
    function checkoutSwitch(bolHide) {
        if (document.getElementById("spanCheckout")) {
            if (bolHide)
                document.getElementById("spanCheckout").style.display = 'none';
            else
                document.getElementById("spanCheckout").style.display = 'block';
        }
    }
</script> 
<!--END: paypaladvance--> 



<input type="hidden" name="hdnAddrressValidatorResult" id="hdnAddrressValidatorResult" value="" />
<div id="divAddrressValidator" style="display:none;"> 
  <!--START: AddressValidatorBlock-->
  <div style="background-color: #FFF; padding: 30px;"> 
    <!--START: AddressValidatorBlock_ValidationFailed-->
    <div>[result_msg]</div>
    <!--END: AddressValidatorBlock_ValidationFailed--> 
    <!--START: AddressValidatorBlock_ValidationSuggestion-->
    <div> [result_msg] 
      <!--START: AddressValidatorBlock_ValidationSuggestion_SingleAddressBlock--> 
      <br />
      <br />
      <strong></strong> <a style="text-decoration:underline;" href="#" onclick="javascript:selectAddress('[AddrressValidator_address1]', '[AddrressValidator_address2]', '[AddrressValidator_city]', '[AddrressValidator_state]', '[AddrressValidator_zip]', '[AddrressValidator_addresstype]', '[AddrressValidator_rdi]');">[AddrressValidator_address], [AddrressValidator_city], [AddrressValidator_state], [AddrressValidator_zip]</a> 
      <!--END: AddressValidatorBlock_ValidationSuggestion_SingleAddressBlock--> 
    </div>
    <!--END: AddressValidatorBlock_ValidationSuggestion--> 
    <!--START: AddressValidatorBlock_ValidationSuggestion_ContinueWithEnteredAddress--> 
    <br />
    <a style="text-decoration:underline;" href="javascript:void(0);" onclick="javascript:addressValidatorContinue('[AddrressValidator_addresstype]');"></a> <br />
    <!--END: AddressValidatorBlock_ValidationSuggestion_ContinueWithEnteredAddress--> 
    <br />
    <a style="text-decoration:underline;" href="javascript:void(0);" onclick="javascript:closeAddressValidatorModal();"><i class="icon-cancel"></i></a></div>
  <!--END: AddressValidatorBlock--> 
</div>

<!--START: VME_SELECTED_SCRIPT--><!--END: VME_SELECTED_SCRIPT-->

<!--START: delivery_calendar--><!--END: delivery_calendar--></div>
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