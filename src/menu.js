import dish from './dish.js'

const menu = () => {
    const menudiv = document.createElement("div");
    menudiv.id = "menudiv";
    const ourMenu = document.createElement("p");
    ourMenu.classList.add("sectiontitle");
    ourMenu.innerText = "Our menu";
    const entrees = document.createElement("div");
    entrees.classList.add("menu-section");
    const entreesname = document.createElement("p");
    entreesname.innerText = "Entrées";
    entrees.appendChild(entreesname);
    entrees.appendChild(dish("Focaccia"));
    entrees.appendChild(dish("Welcome Broth"));
    entrees.appendChild(dish("Omelette"));
    const mains = document.createElement("div");
    mains.classList.add("menu-section");
    const mainsname = document.createElement("p");
    mainsname.innerText = "Main dishes";
    mains.appendChild(mainsname);
    mains.appendChild(dish("Bucatini"));
    mains.appendChild(dish("Seven Fishes"));
    mains.appendChild(dish("The T Bone"));
    const desserts = document.createElement("div");
    desserts.classList.add("menu-section");
    const dessertsname = document.createElement("p");
    dessertsname.innerText = "Desserts";
    desserts.appendChild(dessertsname);
    desserts.appendChild(dish("The Bear"));
    desserts.appendChild(dish("Cannoli"));
    desserts.appendChild(dish("Copenhagen Sundae"));
    menudiv.appendChild(ourMenu);
    menudiv.appendChild(entrees);
    menudiv.appendChild(mains);
    menudiv.appendChild(desserts);
    return menudiv;
}

export default menu