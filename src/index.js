
import './style.css';
import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';

function reset () {
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(createNav());
}

function createNav() {
    const nav = document.createElement("nav");
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.addEventListener("click", () => {
        reset();
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    menuButton.addEventListener("click", () => {
        reset();
        loadMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.innerHTML = "Contact";
    contactButton.addEventListener("click", () => {
        reset();
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}

document.getElementById("content").appendChild(createNav());

createNav();
loadHome();

