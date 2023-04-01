<?php

/**
 * Plugin Name: Advanced Google Map
 * Plugin URI: https://talib.netlify.app
 * Description: Advanced google map blocks for WordPress Users
 * Version: 1.0.0
 * Author: TALIB
 * Author URI: https://talib.netlify.app
 * License: GPLv3
 * Text Domain: advanced-google-map
 * Domain Path: /languages/
 */

// Stop Direct Access
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Blocks Final Class
 */

final class AdvancedGoogleMap {
	public function __construct() {

		// define constants
		$this->agm_define_constants();

		// block initialization
		add_action('init', [$this, 'agm_blocks_init']);

		// blocks category
		if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
			add_filter('block_categories', [$this, 'agm_register_block_category'], 10, 2);
		} else {
			add_filter('block_categories_all', [$this, 'agm_register_block_category'], 10, 2);
		}

		// enqueue block assets
		add_action('enqueue_block_assets', [$this, 'agm_external_libraries']);
	}

	/**
	 * Initialize the plugin
	 */

	public static function init() {
		static $instance = false;
		if (!$instance) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function agm_define_constants() {
		define('AGM_VERSION', '1.0.0');
		define('AGM_URL', plugin_dir_url(__FILE__));
		define('AGM_INC_URL', AGM_URL . 'includes/');
	}

	/**
	 * Blocks Registration
	 */

	public function agm_register_block($name, $options = array()) {
		register_block_type(__DIR__ . '/build/blocks/' . $name, $options);
	}

	/**
	 * Blocks Initialization
	 */
	public function agm_blocks_init() {
		// register single block
		$this->agm_register_block('bootstrap');
		$this->agm_register_block('google-map');
	}

	/**
	 * Register Block Category
	 */

	public function agm_register_block_category($categories, $post) {
		return array_merge(
			array(
				array(
					'slug'  => 'advanced-google-map',
					'title' => __('Advanced Google Map', 'advanced-google-map'),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function agm_external_libraries() {
		// enqueue JS
		wp_enqueue_script('agm-lib', AGM_INC_URL . 'js/plugin.js', array(), AGM_VERSION, true);
	}
}

/**
 * Kickoff
 */

AdvancedGoogleMap::init();
