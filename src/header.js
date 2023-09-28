import createTab from "./createTab.js"

const header = document.createElement("div");
header.id = "header";
const banner = document.createElement("div");
banner.id = "banner";
banner.textContent = "THE BEAR";
const tablayer = document.createElement("div");
tablayer.id = "tabs";
const welcometab = createTab("welcome");
const menutab = createTab("menu");
const contacttab = createTab("contact");
header.appendChild(banner);
tablayer.appendChild(welcometab);
tablayer.appendChild(menutab);
tablayer.appendChild(contacttab);
header.appendChild(tablayer);
export default header;