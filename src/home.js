function createHome() {
    const header = document.createElement("div")
    const heading = document.createElement("h1");
    const main = document.createElement("div");
    const mainHeading = document.createElement("div");
    const mainContent = document.createElement("div");
    const mainPic = document.createElement("img");
    const btn = document.createElement("button");

    header.id = "header";
    main.id = "main";
    mainHeading.id = "about"
    mainPic.id = "logo"

    heading.innerHTML = "Welcome to";
    mainHeading.innerHTML = "About Us";
    mainContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et molestie ac. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Tellus id interdum velit laoreet id donec ultrices tincidunt."
    btn.innerHTML = "Reservations";

    document.getElementById("content").appendChild(header);
    document.getElementById("content").appendChild(main);
    document.getElementById("content").appendChild(btn);

    document.getElementById("main").appendChild(mainPic);
    document.getElementById("main").appendChild(mainHeading);
    document.getElementById("main").appendChild(mainContent);
    document.getElementById("header").appendChild(heading);

}

function loadHome() {
    return createHome();
}

export default loadHome();