

<?php 

	include 'function/dbconn.php';
	include 'function/functions.php';

 $sql = 'SELECT * FROM products ORDER BY  product_price DESC';

   mysql_select_db('ecommsite');
   $retval = mysql_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysql_error());
   }
   
 // $row = mysql_fetch_array($retval, MYSQL_ASSOC);
 $row = mysql_fetch_array($retval, MYSQL_ASSOC);
     //echo '<pre>';print_r($row);exit;
	 
	 $data = $row['product_price'];
	 $range1 = $data/$data . '-' . $data/5;
	 $range2 = $data/5 + 1 . '-' . $data/2;
	 $range3 =  $data/2 + 1 . '-' . $data;
	// echo($range3);exit;
 //  echo "Fetched data successfully\n";
  // mysql_close($conn);
	
	
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
                <form method="get" name="mSearchForm" action="http://blackeagle-preview-com.3dcartstores.com/search.asp">
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
            <form method="get" name="searchForm" action="http://blackeagle-preview-com.3dcartstores.com/search.asp">
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
        <a id="cart" href="viewCart.php" class="hidden-mobile"><img src="assets/templates/black-eagle-html5-premium/images/cart.png"><span id="noItems"><?php items();?></span> <span id="noItemsText">Item</span>, <span id="cartlink">View Cart</span>, &nbsp;<span id="cartlink"><!--Total price: <?php //totalPrice(); ?></span> ---></a>
        <div class="clear"></div>
    </div>
    <div class="clear"></div>
  </header>
  <nav id="catNavMenu">
    <div class="wrapper">
	<!--START: FRAME_CATEGORY-->
	<ul id="desktopMenu">
		
				<li>
			
			<a href="index.php" class="cat">Home</a>
			
			
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
    <!--START: LEFT BAR-->
    <aside id="leftBar" class="leftBar">
      <div class="column" id="column1"> 
        <!--START: LEFT_BAR_BLOCKS-->
         
        
        <div id="modNewReleases" class="module"> <span class="menu-headers">New Releases</span>
          <div class="clear"></div>
          
          <div class="info">
            <div class="name"><a href="Mirage-Black-Leather-Belt_p_13.html" class="link">Mirage Black Leather Belt</a></div>
            <div class="clear"></div>
            <!--START: product_review--> 
            <!--START: product_review_average-->
            <div class="stars"><img src="assets/templates/common-html5/images/star0.png" alt="Average Rating" /></div>
            <!--END: product_review_average--> 
            <!--END: product_review-->
            <div class="price2"> 
              $12.99 
               
              </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
          
          <div class="div"></div>
          <div class="info">
            <div class="name"><a href="Billy-The-Kid-Leather-Jacket_p_12.html" class="link">Billy The Kid Leather Jacket</a></div>
            <div class="clear"></div>
            <!--START: product_review--> 
            <!--START: product_review_average-->
            <div class="stars"><img src="assets/templates/common-html5/images/star0.png" alt="Average Rating" /></div>
            <!--END: product_review_average--> 
            <!--END: product_review-->
            <div class="price2"> 
              $12.99 
               
              </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
          
          <div class="div"></div>
          <div class="info">
            <div class="name"><a href="Heavy-Duty-Leather-Boots_p_6.html" class="link">Heavy Duty Leather Boots</a></div>
            <div class="clear"></div>
            <!--START: product_review--> 
            <!--START: product_review_average-->
            <div class="stars"><img src="assets/templates/common-html5/images/star0.png" alt="Average Rating" /></div>
            <!--END: product_review_average--> 
            <!--END: product_review-->
            <div class="price2"> 
              $12.99 
               
              </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
           
        </div>
		
	
        <!--START: FRAME_BYPRICE-->
        <div id="modPrice" class="module" name="rangeItems"> <span class="menu-headers">Browse by Price</span>
          <ul>
            <!--START: byprice_format-->
            <li><a href="viewcart.php?p_range=<?php echo $data; ?>" class="cat"><?php echo $range1;?></a></li>
            
            <li><a href="viewcart.php?p_range1=<?php echo $data; ?>" class="cat"><?php echo $range2;?></a></li>
            
            <li><a href="viewcart.php?p_range2=<?php echo $data; ?>" class="cat"><?php echo $range3;?></a></li>
            <!--END: byprice_format-->
          </ul>
        </div>
		
		
	
		
        <!--END: FRAME_BYPRICE-->
        <!--START: FRAME_MANUFACTURER--><!--END: FRAME_MANUFACTURER-->
        <!--START: LEFT_BANNER--><!--END: LEFT_BANNER--> 
        <!--END: LEFT_BAR_BLOCKS--> 
      </div>
    </aside>
    <!--END: LEFT BAR-->
	
	
	
	
  <div id=""><section id="">
  	
	
  <form method="post" action="">
    <h1>View Cart</h1>
	
 
           <?php getIP(); ?>


		
		   
<?php cart();?>
	<form action="" method="post" enctype="multipart/form-data">
					<br>
					<table width="740" height="40" bgcolor="" >
					
					<tr align="center">
						<td><b>Remove</b></td>
						<td><b>Product(s)</b></td>
						<td><b>Quantity</b></td>
						<td><b>Total Price</b></td>
					
					</tr>
					<?php 
						$ip_add = getIP();
						
						$total = 0;
						
						$sel_price = "select * from cart where ip_add='1'";
						$run_price = mysql_query($sel_price, $conn);
						while ($record = mysql_fetch_array($run_price)){
							$pro_id = $record['p_id'];
							$pro_qty = $record['qty'];
							$pro_price = "select * from products where product_id='$pro_id'";
							$run_pro_price = mysql_query($pro_price , $conn);
						while ($p_price = mysql_fetch_array($run_pro_price)){
						$product_price = array($p_price['product_price']);
						$product_title = $p_price['product_title'];
						$product_image = $p_price['product_image'];
						$only_price = $p_price['product_price'];
						
						$values = array_sum($product_price);
						
						$total += $values;
			
					
						//echo "$" . $total;
							
							?>
							<tr>
								<td><input type="checkbox" name="remove[]" value="<?php echo $pro_id; ?>"></td>
								<td><?php echo $product_title; ?><br><img src="<?php echo $product_image;?>" width="100" height="100"></td>
								<td><input type="text" name="qty_<?php echo $pro_id; ?>" value="<?php echo $pro_qty; ?>" size="3">
								<input type="hidden" name="prod_id_<?php echo $pro_id; ?>" value="<?php echo $pro_id; ?>">
								</td>
								<?php 
									$ip_add = getIP(); 
								
									if(isset($_POST['update'])){
										$qty = $_POST['qty_' . $pro_id];
										$pro_id = $_POST['prod_id_' . $pro_id];
										
										//echo '<pre>';print_r($_POST['qty_' . $pro_id]);//exit;
										
										$insert_qty = "update cart set qty='$qty' where p_id='$pro_id'";
										
											//echo '<pre>';print_r($insert_qty);exit;
										
										$run_qty = mysql_query($insert_qty, $conn);
										
										$total = $total*$qty;
										
									}
									
								?>
								
								
								
								
								<td><?php echo "$" . '&nbsp;' . $only_price; ?></td>
							
							</tr>
				
						<?php }} ?>
						
						
						
                            
						<tr>
						
							<td><input type="submit" name="update" value="Update Cart"></td>
							<td><input type="submit" name="continue" value="Continue Shopping"></td>
							<td><a href="checkOut.php"><h3 border="1px">Check Out</h3></a></td>
					<!--		<td><button onclick="location.href='checkOut.php';"><a href="checkOut.php" >Check Out</a></button></td> --->
							<td  colspan="4" align="right"><b>Sub Total</b></td>
						<td align="right"><b><?php echo "$" . '&nbsp;' . $total;?></b></td>
							
						</tr>
                            </table>
							
                            </form>
                            
							<?php 
								function updateCart(){
								
									if(isset($_POST['update'])){
										//echo '<pre>';print_r($_POST);exit;
										foreach($_POST['remove'] as $remove_id){
										
											$delete_products =	 mysql_query(" delete from cart where p_id ='$remove_id'");
												//echo '<pre>';print_r($delete_products);exit;
												
										//	$run_delete = mysql_query($delete_products , $conn);
											
												//echo '<pre>';print_r($run_delete);exit;
											if($delete_products){
												echo "<script>window.open('viewCart.php','_self')</script>";
											}else{
												echo 'not possible';
											}
										}
										
										}
										
										if(isset($_POST['continue'])){
												echo "<script>window.open('index.php','_self')</script>";
												
										}
							}	
							echo	@$update_cart= updateCart() ;
							?>
                            
							
							
					



    <!--START: RETURNMESSAGE-->
    <div class="button"><input type="button" value="Click here to continue" class="btn" onclick="location.href='index.php';" onmouseover="this.className='btn_over'" onmouseout="this.className='btn'" /></div>
    <!--END: RETURNMESSAGE-->
  </form>
</section></div>
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
        <form method="post" name="" action="" onsubmit="return mailing_list();">
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