import header from "./header.js";
import footer from "./footer.js";
import welcome from "./welcome.js";

const content = document.getElementById("content");
const mid = document.createElement("div");
mid.id = "mid";
mid.appendChild(welcome());
content.appendChild(header);
content.appendChild(mid);
content.appendChild(footer);
