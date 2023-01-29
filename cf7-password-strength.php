<?php
/*
Plugin Name: Contact Form 7 Password Strength
Description: Adds a password strength indicator to Contact Form 7 forms.
Version: 1.0
Author: Arafat Rahman
Author URI: https://example.com
*/
function cf7_password_field() {
  return '
    [password password-strength-message id:password placeholder "Password"]
    <div id="password-strength-message"></div>
  ';
}

add_filter( 'wpcf7_form_elements', 'cf7_password_field' );

function cf7_password_strength_scripts() {
  wp_enqueue_script( 'password-strength-js', plugins_url( '/password-strength.js', __FILE__ ), array( 'jquery' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'cf7_password_strength_scripts' );


