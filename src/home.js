function createHome() {
    const header = document.createElement("div")
    const heading = document.createElement("h1");
    const main = document.createElement("div");
    const mainHeading = document.createElement("div");
    const mainContent = document.createElement("div");
    const btn = document.createElement("button");

    header.id = "header";
    main.id = "main";
    mainHeading.id = "about"

    heading.innerHTML = "Welcome to";
    mainHeading.innerHTML = "About Us";
    mainContent.innerHTML = "Gusteau's is a fine dining restaurant located in the heart of Paris, home to the most famous chef in Paris, Auguste Gusteau. The restaurant overlooks the Eiffel Tower and is a delight in both food and in experience."; 

    btn.innerHTML = "Reservations";

    document.getElementById("content").appendChild(header);
    document.getElementById("content").appendChild(main);
    document.getElementById("content").appendChild(btn);

    document.getElementById("main").appendChild(mainHeading);
    document.getElementById("main").appendChild(mainContent);
    document.getElementById("header").appendChild(heading);

}

function loadHome() {
    return createHome();
}

export default loadHome();