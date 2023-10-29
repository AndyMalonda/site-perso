export function renderExperiences(data, sectionId) {
  const section = document.getElementById(sectionId);

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-md-12 mb-2"; // Make it take the full width (one column)

    // Replace newline characters with HTML line breaks in the description
    const descriptionHTML = item.Description.replace(/\n/g, "<br>");

    const categoriesHTML = item.Competences
      ? Object.keys(item.Competences)
          .map((category) => {
            const competences = Array.isArray(item.Competences[category])
              ? item.Competences[category]
              : [item.Competences[category]];
            const categoryHTML = generateCategoryHTML(category);
            const competencesHTML = generateCompetencesHTML(competences);
            return `
              <div class="col-md-4">
                ${categoryHTML}
                ${competencesHTML}
              </div>
            `;
          })
          .join("")
      : "<div class='col-md-12'><ul><li>N/A</li></ul></div>";

    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">${item.Poste}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.Entreprise}</h6>
                <p class="card-text">${item.Duree}, ${item.Lieu}</p>
                <br>
                <h6 class="card-subtitle mb-2">Description</h6>
                <hr>
                <p class="card-text">${descriptionHTML}</p> <!-- Use the modified description -->
                <br>
                <h6 class="card-subtitle mb-2">Compétences</h6>
                <hr>
                <div class="d-flex flex-wrap">
                  ${categoriesHTML}
                </div>
            </div>
        </div>
      `;

    section.querySelector(".row").appendChild(card);
  });
}

export function renderEducation(data, sectionId) {
  const section = document.getElementById(sectionId);

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col-md-12 mb-2";

    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">${item.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.Date}</h6>
                <p class="card-text">${item.Institution}</p>
            </div>
        </div>
      `;

    section.querySelector(".row").appendChild(card);
  });
}

function generateCategoryHTML(category) {
  const isNumber = !isNaN(parseInt(category));
  if (!isNumber) {
    return `<h6>${category}</h6>`;
  }
  return "";
}

function generateCompetencesHTML(competences) {
  return `
      <ul>
        ${competences.map((competence) => `<li>${competence}</li>`).join("")}
      </ul>
    `;
}
