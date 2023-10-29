/**
 * @fileoverview Lateral navigation menu
 *
 * This file contains functions that are used to handle the lateral navigation
 * menu.
 *
 */

/**
 * Handles the lateral navigation menu by handling active classes and scrolling
 * to the target section.
 *
 */
const handleNavigation = () => {
  const menuItems = document.querySelectorAll(".lateral-menu ul li");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });
      // Add active class to the clicked item
      item.classList.add("active");
    });
  });

  document.querySelectorAll(".lateral-menu a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

export { handleNavigation };
