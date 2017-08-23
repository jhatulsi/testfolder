<?php   
	
include 'dbconn.php';

$sql_slider="SELECT * FROM slider_tb WHERE id=1";
$fetch_slider_value = mysql_query($sql_slider, $conn);

if(! $fetch_slider_value){
	die('could not connect:' . mysql_error());
}

$row	 = mysql_fetch_assoc($fetch_slider_value);
/////////////////////////////////////////////

$sql_text ="SELECT * FROM hometext_tb WHERE id=1";
$fetch_sldr_text = mysql_query($sql_text, $conn);

if(! $fetch_sldr_text){
	die('could not connect:' . mysql_error());
}

$row_text = mysql_fetch_assoc($fetch_sldr_text);

//////////////////////////////////////////////

$sql_fetr ="SELECT * FROM features_tb WHERE id=1";
$fetch_fetr_val = mysql_query($sql_fetr, $conn);

if(! $fetch_fetr_val){
	die('could not connect:' . mysql_error());
}

$row_fetr = mysql_fetch_assoc($fetch_fetr_val);


/////////////////////////////////////////////////////////


$sql_abt ="SELECT * FROM aboutus_tb WHERE id=1";
$fetch_abt_val = mysql_query($sql_abt, $conn);

if(! $fetch_abt_val){
	die('could not connect:' . mysql_error());
}

$row_abt = mysql_fetch_assoc($fetch_abt_val);
////////////////////////////////////////////

$sql_srvs ="SELECT * FROM services_tb WHERE id=1";
$fetch_srvs_val = mysql_query($sql_srvs, $conn);

if(! $fetch_srvs_val){
	die('could not connect:' . mysql_error());
}

$row_srvs = mysql_fetch_assoc($fetch_srvs_val);

////////////////////////////////////////////


$sql_work ="SELECT * FROM ourwork_tb WHERE id=1";
$fetch_work_val = mysql_query($sql_work, $conn);

if(! $fetch_work_val){
	die('could not connect:' . mysql_error());
}

$row_work = mysql_fetch_assoc($fetch_work_val);


////////////////////////////////////////////////


$sql_news ="SELECT * FROM news_tb WHERE id=1";
$fetch_news_val = mysql_query($sql_news, $conn);

if(! $fetch_news_val){
	die('could not connect:' . mysql_error());
}

$row_news = mysql_fetch_assoc($fetch_news_val);

////////////////////////////////////////////////







mysql_close($conn);

?>




<!DOCTYPE html>
<html lang="en-US">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Responsive One Page website template</title>
      <link rel="stylesheet" href="css/components.css">
      <link rel="stylesheet" href="css/responsee.css">
      <link rel="stylesheet" href="css/icons.css">
      <link rel="stylesheet" href="owl-carousel/owl.carousel.css">
      <link rel="stylesheet" href="owl-carousel/owl.theme.css">
      <!-- CUSTOM STYLE -->
      <link rel="stylesheet" href="css/template-style.css">
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
      <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
      <script type="text/javascript" src="js/jquery-ui.min.js"></script>    
      <script type="text/javascript" src="js/template-scripts.js"></script> 
   </head>
   <body class="size-1140">
      <!-- TOP NAV WITH LOGO -->
      <header>
         <div id="topbar">
            <div class="line">
               <div class="s-12 m-6 l-6">
                  <p>CONTACT US: <strong>0800 200 200</strong> | <strong>contact@sampledomain.com</strong></p>
               </div>
               <div class="s-12 m-6 l-6">
                  <div class="social right">
                     <a><i class="icon-facebook_circle"></i></a> <a><i class="icon-twitter_circle"></i></a> <a><i class="icon-google_plus_circle"></i></a> <a><i class="icon-instagram_circle"></i></a>
                  </div>
               </div>
            </div>  
         </div> 
         <nav>
            <div class="line">
               <div class="s-12 l-2">
                  <p class="logo"><strong>One</strong>page</p>
               </div>
               <div class="top-nav s-12 l-10">
                  <p class="nav-text">Custom menu text</p>
                  <ul class="right">
                     <li class="active-item"><a href="#carousel">Home</a></li>
                     <li><a href="#features">Features</a></li>
                     <li><a href="#about-us">About Us</a></li>
                     <li><a href="#our-work">Our Work</a></li>
                     <li><a href="#services">Services</a></li>
                     <li><a href="#contact">Contact</a></li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>  
      <section>
         <!-- CAROUSEL --> 
         <div id="carousel">
            <div id="owl-demo" class="owl-carousel owl-theme"> 
               <div class="item">
                  <img src="http://localhost/onepage-template/uploads/<?php echo $row['slide1']?>" alt="">
                  <div class="line"> 
                     <div class="text hide-s">
                        <div class="line"> 
                          <div class="prev-arrow hide-s hide-m">
                             <i class="icon-chevron_left"></i>
                          </div>
                          <div class="next-arrow hide-s hide-m">
                             <i class="icon-chevron_right"></i>
                          </div>
                        </div> 
                        <h2><?php echo $row_text['sldr_h1']?></h2>
                        <p><?php echo $row_text['sldr_t1']?></p>
                     </div>
                  </div>
               </div>
               <div class="item">
                  <img src="http://localhost/onepage-template/uploads/<?php echo $row['slide2']?>" alt="">
                  <div class="line">
                     <div class="text hide-s"> 
                        <div class="line"> 
                          <div class="prev-arrow hide-s hide-m">
                             <i class="icon-chevron_left"></i>
                          </div>
                          <div class="next-arrow hide-s hide-m">
                             <i class="icon-chevron_right"></i>
                          </div>
                        </div> 
                        <h2><?php echo $row_text['sldr_h2']?></h2>
                        <p><?php echo $row_text['sldr_t2']?></p>
                     </div>
                  </div>
               </div>
               <div class="item">
                  <img src="http://localhost/onepage-template/uploads/<?php echo $row['slide3']?>" alt="">
                  <div class="line">
                     <div class="text hide-s">
                        <div class="line"> 
                          <div class="prev-arrow hide-s hide-m">
                             <i class="icon-chevron_left"></i>
                          </div>
                          <div class="next-arrow hide-s hide-m">
                             <i class="icon-chevron_right"></i>
                          </div>
                        </div> 
                        <h2><?php echo $row_text['sldr_h3']?></h2>
                        <p><?php echo $row_text['sldr_t3']?></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- FIRST BLOCK -->
         <div id="first-block">
            <div class="line">
               <h1><?php echo $row_text['cntr_h4']?></h1>
               <p><?php echo $row_text['cntr_t4']?></p>
               <div class="s-12 m-4 l-2 center"><a class="white-btn" href="#contact">Contact Us</a></div>
            </div>
         </div>
         <!-- FEATURES -->
         <div id="features">
            <div class="line">
               <div class="margin">
                  <div class="s-12 m-6 l-3 margin-bottom">
                     <i class="icon-tablet icon3x"></i>
                     <h2><?php echo $row_fetr['ftrs_h1']?></h2>
                     <p><?php echo $row_fetr['ftrs_t1']?></p>
                  </div>
                  <div class="s-12 m-6 l-3 margin-bottom">
                     <i class="icon-isight icon3x"></i>
                     <h2><?php echo $row_fetr['ftrs_h2']?></h2>
                     <p><?php echo $row_fetr['ftrs_t2']?></p>
                  </div>
                  <div class="s-12 m-6 l-3 margin-bottom">
                     <i class="icon-star icon3x"></i>
                     <h2><?php echo $row_fetr['ftrs_h3']?></h2>
                     <p><?php echo $row_fetr['ftrs_t3']?>.</p>
                  </div>
                  <div class="s-12 m-6 l-3 margin-bottom">
                     <i class="icon-heart icon3x"></i>
                     <h2><?php echo $row_fetr['ftrs_h4']?></h2>
                     <p><?php echo $row_fetr['ftrs_t4']?>.</p>
                  </div>
               </div>
            </div>
         </div>
         <!-- ABOUT US -->
         <div id="about-us">
            <div class="s-12 m-12 l-6 media-container">
               <img src="http://localhost/onepage-template/uploads/<?php echo $row_abt['abt_image']?>" alt="">
            </div>
            <article class="s-12 m-12 l-6">
               <!--<h2><?php echo $row_abt['ftrs_h3']?></h2> -->
               <p><?php echo $row_abt['abt_txt']?>
               </p>
               <div class="about-us-icons">
                  <i class="icon-paperplane_ico"></i> <i class="icon-trophy"></i> <i class="icon-clock"></i>
               </div>
            </article>
         </div>
         <!-- OUR WORK -->
         <div id="our-work">
            <div class="line">
               <h2 class="section-title">Our Work</h2>
               <div class="tabs">
                  <div class="tab-item tab-active">
                    <a class="tab-label active-btn">Web Design</a>
                    <div class="tab-content">
                      <div class="margin">
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div> <img src="http://localhost/onepage-template/uploads/<?php echo $row_work['wrk_image1']?>" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="http://localhost/onepage-template/uploads/<?php echo $row_work['wrk_image2']?>" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="http://localhost/onepage-template/uploads/<?php echo $row_work['wrk_image3']?>" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="http://localhost/onepage-template/uploads/<?php echo $row_work['wrk_image4']?>" alt=""></a></div>
                      </div>
                    </div>  
                  </div>
                  <div class="tab-item">
                    <a class="tab-label">Development</a>        
                    <div class="tab-content">
                      <div class="margin">
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por7.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por5.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por1.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por2.jpg" alt=""></a></div>
                      </div>
                    </div>  
                  </div>
                  <div class="tab-item">
                    <a class="tab-label">Social Campaigns</a>
                    <div class="tab-content">
                      <div class="margin">
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por4.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por6.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por3.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por5.jpg" alt=""></a></div>
                      </div>
                    </div>  
                  </div>
                  <div class="tab-item">
                    <a class="tab-label">Photography</a>
                    <div class="tab-content">
                      <div class="margin">
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por7.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por2.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por5.jpg" alt=""></a></div>
                        <div class="s-12 m-6 l-3"><a class="our-work-container lightbox margin-bottom"><div class="our-work-text"><h4>Lorem Ipsum Dolor</h4><p>Laoreet dolore magna aliquam erat volutpat.</p></div><img src="img/por6.jpg" alt=""></a></div>
                      </div>
                    </div>  
                  </div>
               </div>
            </div>
         </div>         
         <!-- SERVICES -->
         <div id="services">
            <div class="line">
               <h2 class="section-title">What we do</h2>
               <div class="margin">
                  <div class="s-12 m-6 l-4 margin-bottom">
                     <i class="icon-vector"></i>
                     <div class="service-text">
                        <h3><?php echo $row_srvs['srvs_h1']?></h3>
                        <p><?php echo $row_srvs['srvs_t1']?></p>
                     </div>
                  </div>
                  <div class="s-12 m-6 l-4 margin-bottom">
                     <i class="icon-eye"></i>
                     <div class="service-text">
                        <h3><?php echo $row_srvs['srvs_h2']?></h3>
                        <p><?php echo $row_srvs['srvs_t2']?></p>
                     </div>
                  </div>
                  <div class="s-12 m-12 l-4 margin-bottom">
                     <i class="icon-random"></i>
                     <div class="service-text">
                        <h3><?php echo $row_srvs['srvs_h3']?></h3>
                        <p><?php echo $row_srvs['srvs_t3']?></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- LATEST NEWS -->
         <div id="latest-news">
            <div class="line">
              <h2 class="section-title">Latest News</h2> 
              <div class="margin">
                <div class="s-12 m-6 l-6">
                  <div class="s-12 l-2">
                    <div class="news-date">
                      <p class="day">28</p><p class="month">AUGUST</p><p class="year">2015</p>
                    </div>
                  </div>
                  <div class="s-12 l-10">
                    <div class="news-text">
                      <h4>First latest News</h4>
                      <p><?php echo $row_news['frst_news']?></p>
                    </div>
                  </div>   
                </div> 
                <div class="s-12 m-6 l-6">
                  <div class="s-12 l-2">
                    <div class="news-date">
                      <p class="day">12</p><p class="month">JULY</p><p class="year">2015</p>
                    </div>
                  </div>
                  <div class="s-12 l-10">
                    <div class="news-text">
                      <h4>Second latest News</h4>
                      <p><?php echo $row_news['scnd_news']?></p>
                    </div>
                  </div>   
                </div>  
              </div>
            </div>
         </div> 
         <!-- CONTACT -->
         <div id="contact">
            <div class="line">
               <h2 class="section-title">Contact Us</h2>
               <div class="margin">
                  <div class="s-12 m-12 l-3 hide-m hide-s margin-bottom right-align">
                    <img src="img/contact.jpg" alt="">
                  </div>
                  <div class="s-12 m-12 l-4 margin-bottom right-align">
                     <h3>Vision Design - graphic zoo</h3>
                     <address>
                        <p><strong>Adress:</strong> Gallayova 19, 841 02 Bratislava</p>
                        <p><strong>Country:</strong> Slovakia - Europe</p>
                        <p><strong>E-mail:</strong> info@visiondesign.sk</p>
                     </address>
                     <br />
                     <h3>Social</h3>
                     <p><i class="icon-facebook icon"></i> <a href="https://www.facebook.com/pages/Vision-Design-graphic-ZOO/154664684553091">Vision Design - graphic zoo</a></p>
                     <p><i class="icon-facebook icon"></i> <a href="https://www.facebook.com/myresponsee">Responsee</a></p>
                     <p class="margin-bottom"><i class="icon-twitter icon"></i> <a href="https://twitter.com/MyResponsee">Responsee</a></p>
                  </div>
                  <div class="s-12 m-12 l-5">
                    <h3>Example contact form (do not use)</h3>
                    <form class="customform" action="">
                      <div class="s-12"><input name="" placeholder="Your e-mail" title="Your e-mail" type="text" /></div>
                      <div class="s-12"><input name="" placeholder="Your name" title="Your name" type="text" /></div>
                      <div class="s-12"><textarea placeholder="Your message" name="" rows="5"></textarea></div>
                      <div class="s-12 m-12 l-4"><button class="color-btn" type="submit">Submit Button</button></div>
                    </form>
                  </div>                
               </div>
            </div>
         </div>
         <!-- MAP -->
         <div id="map-block">  	  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1247814.3661917313!2d16.569872019090596!3d48.23131953825178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8cbf758ecb9f%3A0xddeb1d26bce5eccf!2sGallayova+2150%2F19%2C+841+02+D%C3%BAbravka!5e0!3m2!1ssk!2ssk!4v1440344568394" width="100%" height="450" frameborder="0" style="border:0"></iframe>
         </div>
      </section>
      <!-- FOOTER -->
      <footer>
         <div class="line">
            <div class="s-12 l-6">
               <p>Copyright 2017, Vision Design - graphic zoo</p>
               <p>All images have been purchased from Bigstock. Do not use the images in your website.</p>
            </div>
            <div class="s-12 l-6">
               <a class="right" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding<br> by Responsee Team</a>
            </div>
         </div>
      </footer>
      <script type="text/javascript" src="js/responsee.js"></script>
      <script type="text/javascript" src="owl-carousel/owl.carousel.js"></script>
      <script type="text/javascript">
         jQuery(document).ready(function($) {
            var theme_slider = $("#owl-demo");
            $("#owl-demo").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoPlay: 6000,
                addClassActive: true,
             // transitionStyle: "fade",
                singleItem: true
            });
            $("#owl-demo2").owlCarousel({
                slideSpeed: 300,
                autoPlay: true,
                navigation: true,
                navigationText: ["&#xf007","&#xf006"],
                pagination: false,
                singleItem: true
            });
        
            // Custom Navigation Events
            $(".next-arrow").click(function() {
                theme_slider.trigger('owl.next');
            })
            $(".prev-arrow").click(function() {
                theme_slider.trigger('owl.prev');
            })     
        }); 
      </script>
   </body>
</html>