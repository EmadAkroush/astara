<html lang="fa">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
   
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
    
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri()?>/parsboard/style.css" />
	<meta name="google-site-verification" content="y4tfbZe2FulZyGuibtqypStq3ariiyJDjBEh8gv0Y-0" />

    <link rel="dns-prefetch" href="https://daneshavaran.com/">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//www.google-analytics.com"> 
<link rel="dns-prefetch" href="https://www.cloudflare.com/">
<link rel="dns-prefetch" href="https://telegram.org/">
<link rel="dns-prefetch" href="https://www.instagram.com/">
<link rel="dns-prefetch" href="https://www.aparat.com/">

<?php wp_head(); ?>
</head>
 

<body>
<header class="header header-parsboard">
  <div class="header__container">
  <div class="header__wrapper-mobile">
  <div class="header__logo-wrapper">
  <a class="header__logo-link" href="#">  <img src="https://daneshavaran.com/wp-content/uploads/2021/11/logo-danesh-avaran.png" alt="برد هوشمند دانش آوران" class="logo-header-pars-board">
</a>
  </div>
     <div class="header__hamburger-wrapper">
      <button class="hamburger-btn hamburger--collapse"   id="hamburger" type="button">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
          <div class="hamburger-inner"></div>
          <div class="hamburger-inner"></div>
        </div>
      </button>
    </div>
	  </div>
	      
	  <nav class="header__nav show-nav">
                
                   
                        <?php

                        $defaults = array(
                            'theme_location'  => '',
                            'menu'            => 'فهرست اصلی',
                            'container'       => 'ul',
                            'container_class' => 'collapse navbar-collapse pull-left header__nav-list',
                            'container_id'    => '',
                            'menu_class'      => 'header-ul header__nav-list',
                            'menu_id'         => '',
                            'echo'            => true,
                            'fallback_cb'     => 'wp_page_menu',
                            'before'          => '',
                            'after'           => '',
                            'link_before'     => '',
                            'link_after'      => '',
                            'items_wrap'      => '<ul class="header-ul  header__nav-list">%3$s</ul>',
                            'depth'           => 1,
                            'walker'          => ''
                        );

                        wp_nav_menu( $defaults );

                        ?>
    </nav>
	  
	  
	  
	  
	  
  
  


  </div>
 </header>