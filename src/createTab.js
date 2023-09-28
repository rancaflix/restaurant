import changeTab from './changeTab.js'

const createTab = (section) => {
    const tab = document.createElement("div");
    tab.textContent = `${section}`;
    tab.classList.add("tabelement");
    tab.addEventListener("click", () => changeTab(section))
    return tab;
}

export default createTab