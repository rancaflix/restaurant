import welcome from './welcome.js';
import menu from './menu.js';
import contact from './contact.js';

const changeTab = (section) => {
    const mid = document.getElementById("mid");
    mid.innerHTML = "";
    if (section == "welcome"){
        mid.appendChild(welcome());
    } else if (section == "menu"){
        mid.appendChild(menu());
    } else if (section == "contact"){
        mid.appendChild(contact());
    }
}

export default changeTab;