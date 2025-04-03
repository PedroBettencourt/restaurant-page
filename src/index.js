import {home} from "./home.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";
import "./style.css";
import "./home.css";
import "./menu.css";
import "./contact.css";


const changeTab = function(tab) {
    if (tab === "home") {
        tab = home;
    } else if (tab === "menu") {
        tab = menu;
    } else if (tab === "contact") {
        tab = contact;
    } else {
        return;
    }
    const content = document.querySelector("div#content");
    content.innerHTML = "";
    content.appendChild(tab);
};

changeTab("home");

const buttons = document.querySelector("nav");
buttons.addEventListener("click", (e) => {
    const tab = e.target.textContent.toLowerCase();
    changeTab(tab);
})