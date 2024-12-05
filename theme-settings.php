<?php declare(strict_types = 1);

/**
 * @file
 * Theme settings form for Discovery theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function discovery_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['discovery'] = [
    '#type' => 'details',
    '#title' => t('Discovery'),
    '#open' => TRUE,
  ];

  $form['discovery']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
