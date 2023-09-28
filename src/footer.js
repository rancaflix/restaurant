const footer = document.createElement("div");
footer.id = "footer";

const madeBy = document.createElement("p");
madeBy.textContent = "Made by Cristobal Pozo 2023"

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/rancaflix";

const githubIcon = document.createElement("i");
githubIcon.classList.add("fab");
githubIcon.classList.add("fa-github");
githubLink.appendChild(githubIcon);

footer.appendChild(madeBy);
footer.appendChild(githubLink);
export default footer;