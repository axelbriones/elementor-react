<?php
/**
 * Plugin Name:       OTEC Elementor Enhancements
 * Plugin URI:        https://bbrion.es/elementor-react
 * Description:       Enhances Elementor with Tailwind CSS, AOS animations, and custom widgets for OTEC.
 * Version:           1.0.0
 * Author:            Byron Briones
 * Author URI:        https://bbrion.es/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       otec-elementor-enhancements
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define constants
define( 'OTEC_ENHANCEMENTS_VERSION', '1.0.0' );
define( 'OTEC_ENHANCEMENTS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'OTEC_ENHANCEMENTS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Load plugin textdomain.
 */
function otec_enhancements_load_textdomain() {
    load_plugin_textdomain( 'otec-elementor-enhancements', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'init', 'otec_enhancements_load_textdomain' );

// Further plugin code will go here.

/**
 * Enqueue scripts and styles.
 */
function otec_enhancements_enqueue_assets() {
    // Enqueue Tailwind CSS output file
    wp_enqueue_style(
        'otec-tailwind-output',
        OTEC_ENHANCEMENTS_PLUGIN_URL . 'assets/css/output.css',
        [],
        OTEC_ENHANCEMENTS_VERSION
    );
}
add_action( 'wp_enqueue_scripts', 'otec_enhancements_enqueue_assets' );
add_action( 'elementor/editor/before_enqueue_scripts', 'otec_enhancements_enqueue_assets' ); // For Elementor editor
add_action( 'elementor/preview/enqueue_styles', 'otec_enhancements_enqueue_assets' ); // For Elementor preview

?>
