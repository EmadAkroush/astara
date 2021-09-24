<?php 

// child style

function childtheme_enqueue_style() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css');
    wp_register_script( 'child-style' , get_stylesheet_directory_uri().'/style.css' );	
wp_enqueue_script( 'custom' , get_stylesheet_directory_uri().'/js/custom.js' );
}
add_action ('wp_enqueue_scripts' , 'childtheme_enqueue_style' , 999 );



/* function wpb_hook_javascript() {
    if (is_page ('10')) { 
      ?>
          <script type="text/javascript" src="<?php get_stylesheet_directory_uri() ?>/js/custom.js">
           
          </script>
      <?php
    }
  }
  add_action('wp_head', 'wpb_hook_javascript'); */