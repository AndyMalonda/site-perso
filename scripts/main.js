import { handleScroll, scrollToTop } from "./scroll.js";
import { fetchData } from "./data.js";
import { renderExperiences, renderEducation } from "./render.js";
import { handleNavigation } from "./lateralNav.js";

(async () => {
  try {
    const data = await fetchData();
    renderExperiences(data.Experiences, "experiences");
    renderEducation(data.Education, "education");
  } catch (error) {
    console.error("Error:", error);
  }
})();

handleScroll();
handleNavigation();
