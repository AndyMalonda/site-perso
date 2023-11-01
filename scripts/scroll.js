/**
 * @fileoverview
 * This file contains functions that are used to handle the scroll event and
 * scroll to the top of the document.
 */

import { showElement, hideElement } from "./ui.js";

/**
 * Handles the scroll event to determine whether to display the "back to top" button.
 *
 * @param {HTMLElement} goToTopBtn - The "back to top" button element.
 */
export function handleScroll() {
  const goToTopBtn = document.getElementById("btn-back-to-top");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
      showElement(goToTopBtn);
    } else {
      hideElement(goToTopBtn);
    }
  });
  goToTopBtn.addEventListener("click", scrollToTop);
}

/**
 * Scrolls to the top of the document when the "back to top" button is clicked.
 */
export function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
