console.log('test');

const heading = document.createElement("h1");
const main = document.createElement("div");
const mainHeading = document.createElement("div");
const mainContent = document.createElement("div");

main.id = "main";
heading.innerHTML = "Gusteau's";
mainHeading.innerHTML = "About Us"
mainContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et molestie ac. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Tellus id interdum velit laoreet id donec ultrices tincidunt."

document.getElementById("content").appendChild(heading);
document.getElementById("content").appendChild(main);

document.getElementById("main").appendChild(mainHeading);
document.getElementById("main").appendChild(mainContent);






