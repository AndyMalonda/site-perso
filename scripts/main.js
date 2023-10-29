import { handleScroll, scrollToTop } from "./scroll.js";
import { fetchData } from "./data.js";
import { renderExperiences, renderEducation } from "./render.js";

const goToTopBtn = document.getElementById("btn-back-to-top");

handleScroll(goToTopBtn);
goToTopBtn.addEventListener("click", scrollToTop);

(async () => {
  try {
    const data = await fetchData();
    renderExperiences(data.Experiences, "experiences");
    renderEducation(data.Education, "education");
  } catch (error) {
    console.error("Error:", error);
  }
})();

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

// JavaScript code
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
