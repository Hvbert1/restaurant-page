
import loadHome from './home';
import './style.css';
import Icon from './logo.png';


const myIcon = new Image();
myIcon.src = Icon;
document.getElementById("header").appendChild(myIcon);

loadHome();


