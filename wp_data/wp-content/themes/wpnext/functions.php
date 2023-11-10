<?php


add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    $parenthandle = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
    $theme = wp_get_theme();
    wp_enqueue_style( $parenthandle, get_template_directory_uri() . '/style.css', 
        array(),  // if the parent theme code has a dependency, copy it to here
        $theme->parent()->get('Version')
    );
    wp_enqueue_style( 'child-style', get_stylesheet_uri(),
        array( $parenthandle ),
        $theme->get('Version') // this only works if you have Version in the style header
    );
}

add_action('init', 'my_remove_editor_from_post_type');
function my_remove_editor_from_post_type() {
	remove_post_type_support( 'post', 'editor' );
	remove_post_type_support( 'page', 'editor' );
}

add_action('admin_head', 'crunchify_disable_help_adminLink');
function crunchify_disable_help_adminLink() {
    if(is_admin()){
    echo '<style type="text/css">
            #contextual-help-link-wrap { display: none !important; }
          </style>';
    }
}
