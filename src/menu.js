import dish from './dish.jpeg';
import main from './main.jpeg';

export default function createMenu() {
    const menu = document.createElement("menu");
    const menuHeader = document.createElement("div");
    const price = document.createElement("div");
    const menuItems = document.createElement("div");
    const entree = document.createElement("div");
    const mains = document.createElement("div");
    const dessert = document.createElement("div");
    const picHeader = document.createElement("div");
    const gallery = document.createElement("div");
    const restImg = document.createElement("img");
    const dishImg = document.createElement("img"); 

    menu.classList.add("menu");
    menuItems.id = "menuItems";
    menuHeader.id = "menuHeader";
    entree.id = "entree";
    mains.id = "mains";
    dessert.id = "dessert";
    price.id = "price";
    picHeader.id = "picHeader";
    gallery.id = "gallery";
    dishImg.src = dish;
    dishImg.id = "item1";
    restImg.src = main;
    restImg.id = "item2";

    price.innerHTML = "125 pp";
    menuHeader.innerHTML = "menu";
    picHeader.innerHTML = "gallery";

    const entree1 = document.createElement("div");
    const entree2 = document.createElement("div");
    const entree3= document.createElement("div");
    const main1 = document.createElement("div");
    const dessert1 = document.createElement("div");
    const dessert2 = document.createElement("div");

    entree1.innerHTML = "sweetbread ala Gusteau";
    entree2.innerHTML = "pheasant consumme";
    entree3.innerHTML = "sweet potatoes and French lentils"
    main1.innerHTML = "ratatouille";
    dessert1.innerHTML = "cheese souffle";
    dessert2.innerHTML = "crepe brulee, lemon aspen";

    document.getElementById("content").appendChild(menu);
    menu.appendChild(menuHeader);
    menu.appendChild(price);
    menu.appendChild(menuItems);
    menu.appendChild(picHeader);
    menu.appendChild(gallery);

    document.getElementById("menuItems").appendChild(entree);
    document.getElementById("menuItems").appendChild(mains);
    document.getElementById("menuItems").appendChild(dessert);

    document.getElementById("entree").appendChild(entree1);
    document.getElementById("entree").appendChild(entree2);
    document.getElementById("entree").appendChild(entree3);
    document.getElementById("mains").appendChild(main1);
    document.getElementById("dessert").appendChild(dessert1);
    document.getElementById("dessert").appendChild(dessert2);

    document.getElementById("gallery").appendChild(dishImg);
    document.getElementById("gallery").appendChild(restImg);
}

