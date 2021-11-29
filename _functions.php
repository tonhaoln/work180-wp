<?php
/**
* Append checkboxes on the WP MENU menu-item-has-children
*
*/
function yourprefix_menu_arrow($item_output, $item, $depth, $args) {
    if (in_array('menu-item-has-children', $item->classes)) {
        $arrow = '<input type="checkbox" id="toggle"></input>'; // Change the class to your font icon
        $item_output = str_replace('</a>', '</a>'. $arrow .'', $item_output);
    }
    return $item_output;
}
add_filter('walker_nav_menu_start_el', 'yourprefix_menu_arrow', 10, 4);


/**
 * Register new image sizes
 */
function new_image_sizes() {
  add_image_size( 'blog-landscape', 580, 300, true );  
  add_image_size( 'blog-square', 300, 300, true );  
}

add_action('after_setup_theme', 'new_image_sizes'); 

add_filter( 'image_size_names_choose', 'my_custom_sizes' );

function my_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'blog-landscape' => __( 'Blog Landscape' ),
		'blog-square' => __( 'Blog Square' ),
    ));
}



/**
 * Search Function to only search posts
 */
function SearchFilter($query) {
    if ($query->is_search) {
        $query->set('post_type', 'post');
    }
    return $query;
}
add_filter('pre_get_posts','SearchFilter');
