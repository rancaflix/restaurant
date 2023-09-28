import letitrip from "./letitrip.png"

const welcome = () => {
    const welcomediv = document.createElement("div");
    welcomediv.id = "welcomediv";
    const welcomesquare = document.createElement("div");
    welcomesquare.id = "welcomesquare";
    const aboutUs = document.createElement("p");
    aboutUs.innerText = "About us";
    aboutUs.classList.add("sectiontitle");
    const section = document.createElement("p");
    section.classList.add("section");
    section.innerHTML = 
    "From a team with passion for fine cuisine, comes The Bear.</br>\
    We subject ourselves to the highest standards in the restaurant industry to provide our guest with a world class experience."
    const michaelphoto = new Image();
    michaelphoto.src = letitrip;
    const michael = document.createElement("p");
    michael.innerText = "In loving memory of Michael Berzatto.";
    welcomesquare.appendChild(aboutUs);
    welcomesquare.appendChild(section);
    welcomesquare.appendChild(michaelphoto);
    welcomesquare.appendChild(michael);
    welcomediv.appendChild(welcomesquare);
    return welcomediv;
}

export default welcome