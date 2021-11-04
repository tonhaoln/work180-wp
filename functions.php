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
