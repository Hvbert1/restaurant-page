import conImg from './contact.jpeg';

export default function createContact() {
    const contact = document.createElement("div");
    const contImg = document.createElement("img");    
    const conHeader = document.createElement("div");
    const address = document.createElement("div");
    const number = document.createElement("div");

    contact.classList.add("contact");
    contImg.src = conImg;
    conHeader.id = "conHeader";
    address.id = "address";
    conHeader.innerHTML = "contact us";
    address.innerHTML = "Paris, France";
    number.innerHTML = "626-549-695";

    document.getElementById("content").appendChild(contact);
    contact.appendChild(contImg);
    contact.appendChild(conHeader);
    contact.appendChild(address);
    contact.appendChild(number);
}