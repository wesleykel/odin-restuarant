import _ from "lodash";
import { homePage } from "./home";
import { makeMenu } from "./menu";
import "./style.css";

const content = document.getElementById("content");

const createMain = () => {
  const head = document.createElement("h1");
  head.innerText = "Burger Planet";
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
  contactBut.id = "contactBut";
  contactBut.innerText = "Contact";
  menuBox.appendChild(contactBut);

  const displayBox = document.createElement("div");
  displayBox.className = "display";
  menuBox.insertAdjacentElement("afterend", displayBox);
  displayBox.appendChild(homePage());
};

createMain();
