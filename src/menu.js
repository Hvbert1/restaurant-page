export default function createMenu() {
    const menuHeader = document.createElement("div");
    const price = document.createElement("div");
    const menuItems = document.createElement("div");
    const entree = document.createElement("div");
    const mains = document.createElement("div");
    const dessert = document.createElement("div");
    const notice = document.createElement("div");
    const picHeader = document.createElement("div");
    const gallery = document.createElement("div");

    menuItems.id = "menuItems";
    menuHeader.id = "menuHeader";
    entree.id = "entree";
    mains.id = "mains";
    dessert.id = "dessert";
    price.id = "price";
    picHeader.id = "picHeader";
    gallery.id = "gallery";
    notice.id = "notice";

    price.innerHTML = "125 pp";
    menuHeader.innerHTML = "set menu";
    picHeader.innerHTML = "gallery";

    const entree1 = document.createElement("div");
    const entree2 = document.createElement("div");
    const main1 = document.createElement("div");
    const dessert1 = document.createElement("div");
    const dessert2 = document.createElement("div");

    entree1.innerHTML = "sweetbread ala Gusteau";
    entree2.innerHTML = "pheasant consumme";
    main1.innerHTML = "ratatouille";
    dessert1.innerHTML = "cheese souffle";
    dessert2.innerHTML = "crepe brulee, lemon aspen";

    
    document.getElementById("content").appendChild(menuHeader);
    document.getElementById("content").appendChild(price);
    document.getElementById("content").appendChild(menuItems);
    document.getElementById("content").appendChild(picHeader);
    document.getElementById("content").appendChild(gallery);

    document.getElementById("menuItems").appendChild(entree);
    document.getElementById("menuItems").appendChild(mains);
    document.getElementById("menuItems").appendChild(dessert);

    document.getElementById("entree").appendChild(entree1);
    document.getElementById("entree").appendChild(entree2);
    document.getElementById("mains").appendChild(main1);
    document.getElementById("dessert").appendChild(dessert1);
    document.getElementById("dessert").appendChild(dessert2);

    return;
}

