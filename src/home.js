import mainImg from './painting.jpeg';

export default function createHome() {
    const home = document.createElement("div");
    const homeImg = document.createElement("img");    
    const header = document.createElement("div")
    const heading = document.createElement("h1");
    const main = document.createElement("div");
    const mainHeading = document.createElement("div");
    const mainContent = document.createElement("div");
    const btn = document.createElement("button");

    homeImg.src = mainImg;
    homeImg.alt= "restaurant";

    home.classList.add("home");
    header.id = "header";
    main.id = "main";
    mainHeading.id = "about"

    heading.innerHTML = "Welcome to Gusteau's";
    mainHeading.innerHTML = "About Us";
    mainContent.innerHTML = "Gusteau's is a fine dining restaurant located in the heart of Paris, overlooking the Eiffel Tower. It is home to the most famous chef in Paris, Auguste Gusteau, of whom reflects the depth and richness of French cuisine."; 
    btn.innerHTML = "Reservations";

    document.getElementById("content").appendChild(home);
    home.appendChild(homeImg);
    home.appendChild(header);
    home.appendChild(main);
    home.appendChild(btn);

    document.getElementById("main").appendChild(mainHeading);
    document.getElementById("main").appendChild(mainContent);
    document.getElementById("header").appendChild(heading);
}