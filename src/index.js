import _ from "lodash";
import { homePage } from "./home";
import { makeMenu } from "./menu";
import { contactPage } from "./contact";
import "./style.css";

const content = document.getElementById("content");

function createMain() {
  const head = document.createElement("h1");
  head.innerText = "La Burger!";
  head.className = "head";
  content.appendChild(head);

  const menuBox = document.createElement("div");
  menuBox.className = "menu";
  head.insertAdjacentElement("afterend", menuBox);

  const homeBut = document.createElement("div");
  homeBut.className = "menuBut";
  homeBut.id = "homeBut";
  homeBut.innerText = "Home";

  menuBox.appendChild(homeBut);

  const menuBut = document.createElement("div");
  menuBut.className = "menuBut";
  menuBut.id = "menuButton";
  menuBut.innerText = "Menu";

  menuBox.appendChild(menuBut);

  const contactBut = document.createElement("div");
  contactBut.className = "menuBut";
  contactBut.id = "contactButton";
  contactBut.innerText = "Contact";
  menuBox.appendChild(contactBut);

  const displayBox = document.createElement("div");
  displayBox.id = "displayId";
  displayBox.className = "display";
  menuBox.insertAdjacentElement("afterend", displayBox);
  displayBox.appendChild(homePage());
}
createMain();

function showMenu() {
  const displayToReplace = document.getElementById("menuItems");

  displayToReplace.replaceWith(makeMenu());
}
function showHome() {
  const displayToReplace = document.getElementById("menuItems");

  displayToReplace.replaceWith(homePage());
}

function showContact() {
  const contactToReplace = document.getElementById("menuItems");
  contactToReplace.replaceWith(contactPage());
}

const menubtn = document
  .getElementById("menuButton")
  .addEventListener("click", showMenu);

const homebtn = document
  .getElementById("homeBut")
  .addEventListener("click", showHome);

const contactbtn = document
  .getElementById("contactButton")
  .addEventListener("click", showContact);
