/**
 * @fileoverview This file contains functions that are used to manipulate the
 * user interface.
 *
 */

/**
 * Shows an HTML element by setting its display property to "block".
 *
 * @param {HTMLElement} element - The element to be displayed.
 */
export function showElement(element) {
  element.style.display = "block";
}

/**
 * Hides an HTML element by setting its display property to "none".
 *
 * @param {HTMLElement} element - The element to be hidden.
 */
export function hideElement(element) {
  element.style.display = "none";
}
