import map from "./map.jpg";

const contact = () => {
    const contactdiv = document.createElement("div");
    contactdiv.id = "contactdiv";
    const contactsquare = document.createElement("div");
    contactsquare.id = "contactsquare";
    const findUs = document.createElement("p");
    findUs.classList.add("sectiontitle");
    findUs.innerText = "Find us";
    const phone = document.createElement("p");
    phone.textContent = "123 456 789";
    const location = document.createElement("p");
    location.textContent = "666 N Orleans St, River North, Chicago, IL";
    const mapPicture = new Image();
    mapPicture.src = map;
    contactsquare.appendChild(findUs);
    contactsquare.appendChild(phone);
    contactsquare.appendChild(location);
    contactsquare.appendChild(mapPicture);
    contactdiv.appendChild(contactsquare);
    return contactdiv;
}

export default contact