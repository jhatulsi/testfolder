
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
  <div class="wrapper">
    <!--START: LEFT BAR--><!--START: FRAME_CATEGORY--><!--END: FRAME_CATEGORY--><!--END: LEFT BAR-->
  <div id="mainContent"><style type="text/css">
#simplemodal-container { border: none !important; background: none !important; overflow-y:visible; }
#divBusy{ display:none; background-image:url(admin/templates/images/ajax-loader.html); width:32px; height:32px; margin:auto;z-index:999; position: absolute; top: 40px; left: 50%; }

</style>
<script type="text/javascript">
	var parentid = '';
	if (typeof jQuery == 'undefined') {
		document.write("<script type=\"text/javascript\" src=\"assets/templates/common/js/jquery.min4a2e.js?vcart=7.6.0\"></" + "script>");
	}


	jQuery(document).ready(function () {
		jQuery("#divGiftWrap").hide();
	});

	jQuery.getScript('assets/templates/common/js/simplemodal.js');

	function cmdGWCancel_Click() {		
		jQuery.modal.close();
	}


	function buySAFEOnClick(wantsbond)
	{ 
		document.location.href='view_cart4178.html?wantsbond=' + wantsbond;
	}

	function showGiftWrap(itemid)
	{
	//used to display the modal box
		var url = '';
		var params = '';

		params = 'id=' + itemid + '&action=1';
		//SAVE THE ID OF HE ITEM BEING GIFTWRAPPED 
		parentid = itemid;
		
		url = 'giftwrap_ajaxd41d.html?' + params + '&no-cache='+Math.random();

		//window.location = url;

		jQuery("#divGiftWrap").modal({ containerCss: { borderWidth: "0px" } });
		jQuery("#divGiftWrap").fadeIn();
		
		jQuery.ajax({
			url: url,
			dataType: 'html',
			type: 'GET',
			cache: false,
			success: function (strResult) {
				if (strResult == '') {
					//alert('Thank you for your vote.\n\nPlease note that only one vote may be recorded per user.');
				}
				else {
					
					jQuery('#divGiftWrap').html(strResult);
				}
			},
			error: reportGWError
		});		
	}

	function updateGiftWrapOption()
	{
	    //USED TO UPDATE THE MIDDLE div with the option selected from the giftwrap dropdown.
		var url = '';
		var params = '';

		params = 'id=' + document.getElementById('giftwrap_id').value + '&action=2';

		url = 'giftwrap_ajaxd41d.html?' + params + '&no-cache=' + Math.random();

		//window.location = url;

		jQuery.ajax({
			url: url,
			dataType: 'html',
			type: 'GET',
			cache: false,
			success: function (strResult) {
				if (strResult == '') {
					//alert('Thank you for your vote.\n\nPlease note that only one vote may be recorded per user.');
				}
				else {
					jQuery('#divGiftwrapItem').html(strResult);
				}
			},
			error: reportGWError
		});

	}

	function cmdGWAdd_Click() {
		var url = '';
		var params = '';
		var id = document.getElementById('giftwrap_id').value;

		if (id == '')
		{
			alert('Please select the gift wrapping option before saving.');
			return (false);
		}

		params = 'parentid=' + parentid;
		params += '&id=' + id;
		params += '&action=3';
		params += '&giftwrap_message=' + document.getElementById('giftwrap_message').value;

		url = 'giftwrap_ajaxd41d.html?' + params + '&no-cache=' + Math.random();

		//window.location = url;

		jQuery.ajax({
			url: url,
			dataType: 'html',
			type: 'GET',
			cache: false,
			success: function (strResult) {
				jQuery("#divGiftWrap").fadeOut();
				window.location = 'messageeb96.html';
			},
			error: reportGWError
		});
	}

	function countChar(val)
	{
		var len = val.value.length;
		if (len >= 400)
		{
			val.value = val.value.substring(0, 400);
		}
		else
		{
			jQuery('#spnChars').text(400 - len);
		}
	}

	function reportGWError(jqXHR, textStatus) {
		if (jqXHR.status > 0)
		{
			alert("Error processing request, please try again."); 
			//alert(jqXHR.responseText);
			//alert(jqXHR.status + " - " + jqXHR);
		}
	}

	jQuery(function () {
		//submits the form in case the user presses enter
		jQuery("#calculate_shipping_zip").keyup(function (event) {
			if (event.keyCode == 13) {
				jQuery("#calculate_button_go").click();
			}
			 });
		});
</script>
<section id="viewCart">
<h1 class="page_headers"></h1>
  <!--START: CATEGORY_HEADER--><!--END: CATEGORY_HEADER-->
  <div class="chk-buttons">
    <a href="80s-Classic-Leather-Jacket_p_5.html?itemid=5"><i class="icon-left-open"></i> Continue Shopping</a>
    <button type="button" onclick="window.location='shipping.php'" id="vc_ChkButton1" class="btn"><i class="icon-basket"></i> Proceed to Checkout</button>
    <div class="clear"></div>
  </div>
  <form action="http://blackeagle-preview-com.3dcartstores.com/shipquote.asp" method="post" name="shipquote" onSubmit="return submitForm();">
    <input type="hidden" name="thispage" value="" />
    <input type="hidden" name="shipping_zip" value="[shipping_zip]" />
    <script type="text/javascript">document.shipquote.thispage.value = window.location.href;</script>
  </form>
  <form action="http://blackeagle-preview-com.3dcartstores.com/recalculate.asp" method="post" name="recalculate" id="recalculate">
    <!--START: SHOPPING_CART_SHIPMENT_INFO--><!--END: SHOPPING_CART_SHIPMENT_INFO-->
    <div class="shoppingCartItems" id="divshoppingCartItems">
      <div class="titles2">
        <div class="item-info">ITEMS</div>
        <div class="item-qty">QTY</div>
        <div class="item-price">PRICE</div>
        <div class="item-total">Total</div>
        <div class="item-remove">&nbsp;</div>
        <div class="clear"></div>
      </div>
	 
	  
	  
	   <?php 
						$ip_add = getIP();
						
						$total = 0;
						
						$sel_price = "select * from cart where ip_add='1'";
						$run_price = mysql_query($sel_price, $conn);
						while ($record= mysql_fetch_array($run_price)){
							$pro_id = $record['p_id'];
							$pro_qty = $record['qty'];
							$pro_price = "select * from products where product_id='$pro_id'";
							$run_pro_price = mysql_query($pro_price , $conn);
						while ($p_price = mysql_fetch_array($run_pro_price)){
						$product_price = $p_price['product_price'];
						$product_title = $p_price['product_title'];
						$product_image = $p_price['product_image'];
						$only_price = $p_price['product_price'];
						
						//$values = array_sum($product_price);
						
						//$total += $values;
			
					
						//echo "$" . $total;
						
							?>
	  
	  
	  
	  
	 
	  
      <!--START: SHOPPING_CART_ITEM-->
      <div class="row">
        <div class="item-info">
          <div class="product-image"><!--START: itemthumbnail--><a href="80s-Classic-Leather-Jacket_p_5.html"><img src="<?php echo $product_image;?>" height="55" width="55" /></a><!--END: itemthumbnail--><!--START: thumbnailnolink--><!--END: thumbnailnolink--></div>
          <div class="product-name-options"> 
            <!--START: itemnamelink--><a href="80s-Classic-Leather-Jacket_p_5.html"><?php echo $product_title; ?></a><!--END: itemnamelink--> 
            <!--START: itemnamenolink--><!--END: itemnamenolink--> 
            <!--START: itemoptions--><!--END: itemoptions--> 
            <!--START: recurring_frequency--><!--END: recurring_frequency--> 
            <!--START: giftwraplink--><!--END: giftwraplink--></div>
          <div class="clear"></div>
        </div>
        <div class="item-qty">
          <input type="text" name="qty0" value="1" size="3" maxlength="5" class="txtBoxStyle" />
          <input type="hidden" name="colid0" value="279" size="3" maxlength="5" />
          <a href="#" onclick="document.forms['recalculate'].submit();return false;" class="update-qty">Update</a>
        </div>
        <div class="item-price"><?php echo "$" . $product_price; ?></div>
        <div class="item-total"><?php echo "$" . $product_price; ?></div>
        <div class="item-remove"><a href="checkOut.php?proId=<?php echo $pro_id;?>" onclick="document.recalculate.qty0.value=0;document.recalculate.submit();"><i class="icon-cancel"></i></a></div>
        <div class="clear"></div>
      </div>
	  
	  	<?php }} ?>
	  
	  
	  
	  
	  
      <!--END: SHOPPING_CART_ITEM-->
      <div class="shoppingCartTotal">
        <div class="clear">&nbsp;</div>
        <div class="item-total"><?php totalPrice(); ?></div>
        <div class="item-price">Subtotal</div>
        <div class="clear"></div>
        <!--START: DISCOUNTS--><!--END: DISCOUNTS-->
        <div class="clear">&nbsp;</div>
        <div class="item-total"><strong><?php totalPrice(); ?></strong></div>
        <div class="item-price"><strong>Total</strong></div>
        <div class="clear"></div>
      </div>
    </div>
	
	
	
	
			  <?php 
			if(isset($_GET['proId'])){
				$ip_add = getIP();
				$p_id = $_GET['proId'];
				
				//echo $p_id;exit;
				
				//foreach($_GET['proId'] as $p_id){
										
					$delete_products =	 mysql_query(" delete from cart where p_id ='$p_id'");
						//echo '<pre>';print_r($delete_products);exit;
						
				//	$run_delete = mysql_query($delete_products , $conn);
					
						//echo '<pre>';print_r($run_delete);exit;
					if($delete_products){
						echo "<script>window.open('checkOut.php','_self')</script>";
					}else{
						echo 'not possible';
					}
				//}
	  }
	  
	  
	  ?>
	  
	  <div align="">
	  
		
		<h5>Tax Rates: $3</h5>
		
		<h5>Our Shipping Charges: $5</h5>
		<h3>So,Total Charges: <?php shippingRates(); ?> </h3>
	  </div>
	  
		
	
    <div class="clear"></div>
    <!--START: apply_coupon-->
    <div class="applyCoupon pad10 boxShadow">
      <div class="header">
        <h3 class="checkout-headers">Apply Coupon</h3>
      </div>
      <input type="text" name="coupon_code" class="txtBoxStyle" size="14"/>
      <!--START: gc_pin--><!--END: gc_pin-->
      <input type="submit" value="Apply" class="btn" onmouseover="this.className='btn_over'" onmouseout="this.className='btn'" />
      <div class="clear"></div>
      <div class="coupon-msg">If you have a promotion code enter it here.</div>
      <div class="clear"></div>
    </div>
    <!--END: apply_coupon--> 
    <!--START: ShipQuote-->
    <div class="shipQuote pad10 boxShadow">
      <div class="header">
        <h3 class="checkout-headers">Calculate Shipping</h3>
      </div>
      <div class="clear"></div>
      <div class="shipquote-location">
        <input type="text" name="shipping_zip" size="14" value="" class="txtBoxStyle" id="calculate_shipping_zip" />
        <input type="button" value="Calculate" class="btn" onclick="document.shipquote.shipping_zip.value=document.recalculate.shipping_zip.value;document.shipquote.submit();" onmouseover="this.className='btn_over'" onmouseout="this.className='btn'" id="calculate_button_go"/>
      </div>
      <div class="clear"></div>
      <div class="shipquote-msg">Enter zip code to calculate shipping.</div>
      <div class="clear"></div>
      <!--START: viewcart_ship--><!--END: viewcart_ship--> 
    </div>
    <!--END: ShipQuote--> 
    <!--START: ShipQuoteInternational--><!--END: ShipQuoteInternational-->
  <div class="clear"></div>
  <div class="chk-buttons"> 
      <!--START: savecart--><!--END: savecart-->
      <a href="80s-Classic-Leather-Jacket_p_5.html?itemid=5"><i class="icon-left-open"></i> Continue Shopping</a>
      <!--<button type="submit" name="Add" class="btn"><i class="icon-cw"></i> Update</button>-->
      <button type="button" onclick="window.location='checkout0c17.html?step=1'" id="vc_ChkButton" class="btn"><i class="icon-basket"></i> Proceed to Checkout</button>
      <div class="clear"></div>
      
    </div>
    <div class="clear"></div>
    <!--START: BUYSAFE_CONTROL--><!--END: BUYSAFE_CONTROL-->
    <fieldset class="third-party-payment">
        <legend>Or Checkout with:</legend>
        <div id="thirdPartyPayment">
        <!--START: checkoutMasterPass--><!--END: checkoutMasterPass--> 
		<!--START: checkout_visacheckout--><!--END: checkout_visacheckout-->

        <!--START: paypalexpress_braintree--><!--END: paypalexpress_braintree--> 
        <!--START: paypalexpress-->
        <div class="ppale-button"><a href="paypal_expressf60c.html?ch=1" title="Check out with PayPal"><img src="../www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png" alt="Check out with PayPal" /></a></div>
        <!--END: paypalexpress--> 
        <!--START: paypalcredit--><!--END: paypalcredit--> 
        <!--START: INTERNATIONAL_CHECKOUT--><!--END: INTERNATIONAL_CHECKOUT-->
        <!--START: BONGO_INTERNATIONAL--><!--END: BONGO_INTERNATIONAL--> 
        <!--START: checkoutByAmazon--><!--END: checkoutByAmazon-->
        <!--START: PayWithAmazon--><!--END: PayWithAmazon-->

        <!--START: shopatron--><!--END: shopatron-->
        </div>
    </fieldset>
    <div class="clear"></div>
  </form>
  <script type="text/javascript">
	//You should create the validator only after the definition of the HTML form
	var frmvalidator = new Validator("recalculate");
	
	frmvalidator.setAddnlValidationFunction("submitForm");
	
	//<!--START: apply_coupon_validation-->
	frmvalidator.addValidation("coupon_code","maxlen=20","Maximun Coupon Length is 20");
	//<!--END: apply_coupon_validation-->
	</script> 
  <!--START: PROMOTIONS--><!--END: PROMOTIONS--> 
  <!--START: GIFTCERTIFICATES--><!--END: GIFTCERTIFICATES--> 
  <!--START: FEATURE_MENU--><!--END: FEATURE_MENU-->
  <div class="clear"></div>
  <!--START: CATEGORY_FOOTER--><!--END: CATEGORY_FOOTER--> 
</section>

<script type="text/javascript">
    //Show/Hide 3rd Party Payment Options section.
    jQuery(function () {
        if (jQuery('#thirdPartyPayment').has('div').length == 0) {
            jQuery('.third-party-payment').hide();
        }
        else {
            jQuery('.third-party-payment').show();
        }
    });
</script>

<!--START: GIFTWRAP_OPTIONS-->
<div id="divGiftWrap">
  <form method="post" name="frmGiftWrap" id="frmGiftWrap">
    <div class="header">
      <h3>Gift Wrapping Options</h3>
      <div class="clear"></div>
    </div>
    <label for="giftwrap_id">Select Gift Wrapping:</label>
    <select id="giftwrap_id" name="giftwrap_id" class="txtBoxStyle" onchange="updateGiftWrapOption()">
      <option value="">-- Select Gift Wrapping --</option>
      
    </select>
    <div class="clear"></div>
    <div id="divGiftwrapItem"> 
      <!--START: giftwrapitem-->
      <div class="gw-image" id="giftwrap_thumb"></div>
      <div class="gw-id"></div>
      <div class="gw-name"></div>
      <div class="clear"></div>
      <div class="gw-desc"></div>
      <div class="clear"></div>
      <!--END: giftwrapitem--> 
    </div>
    <div id="divGiftwrapMsg">
      <label for="giftwrap_message">Giftcard Message:</label>
      <textarea name="giftwrap_message" id="giftwrap_message" onkeyup="countChar(this)" rows="6" cols="45"></textarea>
      <div class="chars-left"><span id="spnChars"><!--START: giftwrapcount-->400<!--END: giftwrapcount--></span>&nbsp;Characters left</div>
      <div class="clear"></div>
    </div>
    <input type="button" name="cmdGWCancel" id="cmdGWCancel" value="Cancel" onclick="cmdGWCancel_Click()" class="btn" onmouseover="this.className='btn_over'" onmouseout="this.className='btn'" />
    <input type="button" name="cmdGWAdd" id="cmdGWAdd" value="Add Giftwrap" onclick="cmdGWAdd_Click()" class="btn" onmouseover="this.className='btn_over'" onmouseout="this.className='btn'" />
  </form>
</div>
<!--END: GIFTWRAP_OPTIONS--> 

<!--START: ShipQuoteInternationalScript--><!--END: ShipQuoteInternationalScript--> 




</div>
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
            <li><a href="blog.html" target="_self" class="menu-bottom">Blog</a></li>
            
            <li><a href="Terms-and-Conditions_ep_2-1.html" target="_self" class="menu-bottom">Terms and Conditions</a></li>
            
            <li><a href="affiliateInfo.html" target="_self" class="menu-bottom">Become an Affiliate</a></li>
            
            <li><a href="product_index.html" target="_self" class="menu-bottom">Product Index</a></li>
            
            <li><a href="category_index.html" target="_self" class="menu-bottom">Category Index</a></li>
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
        <div id="copyright" class="footer">Copyright  <script type="text/javascript" language="javascript">var date = new Date(); document.write(date.getFullYear());</script> Black Eagle (Responsive). All Rights Reserved. <a href="http://www.3dcartstores.com/" target="_blank">Web Store Software</a> by 3DCart.</div>
    </div>
  </div>
</div>
<!--START: quicksearch--> 
<script type="text/javascript" src="assets/templates/common-html5/quicksearch/jquery.quicksearch4a2e.js?vcart=7.6.0"></script> 
<script type="text/javascript">
jQuery(function() {
	jQuery('#searchlight').searchlight('search_quick.html');
});
</script> 
<!--END: quicksearch--> 
<script type="text/javascript" src="assets/templates/black-eagle-html5-premium/js/functions4a2e.js?vcart=7.6.0"></script>
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
var file='stats/spacer.gif';

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
  <img src="stats/spacer.gif" width="90" height="30" alt="" />
  </noscript>
  <!--END: 3dcart stats--> 
</div>
<div id="qv_buttontitle" style="display:none;">Quick View</div>
<script>(new Image()).src = 'http://blackeagle-preview-com.3dcartstores.com/3dvisit.asp'</script></body>
</html>