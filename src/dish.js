import bucatini from "./bucatini.jpg";
import cannoli from "./cannoli.jpg";
import copenhagensundae from "./copenhagensundae.jpg";
import focaccia from "./focaccia.jpg";
import omelette from "./omelette.jpg";
import sevenfishes from "./sevenfishes.jpg";
import thebear from "./thebear.jpg";
import thetbone from "./thetbone.jpg";
import welcomebroth from "./welcomebroth.jpg";


const dish = (plate) => {
    const dishsection = document.createElement("div");
    dishsection.classList.add("dish-section");
    const dishtitle = document.createElement("p");
    const platestring = String(plate).toLowerCase().replace(/\s+/g, '');
    console.log(platestring);
    const dishimage = new Image();
    dishimage.src = require(`./${platestring}.jpg`).default;
    dishimage.classList.add("dish-photo");
    dishtitle.innerText = `${plate}`;
    dishsection.appendChild(dishtitle);
    dishsection.appendChild(dishimage);
    return dishsection
}

export default dish