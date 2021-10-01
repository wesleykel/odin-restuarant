import Burger from "./impossible-burger.jpeg";
import Decor from "./3166168-9e9e9e.svg";
export function homePage() {
  const homeDiv = document.createElement("div");
  homeDiv.className = "home-container";
  homeDiv.id = "menuItems";
  const myBurger = new Image();
  myBurger.className = "burger-image";
  myBurger.src = Burger;
  homeDiv.appendChild(myBurger);
  const decorDiv = document.createElement("div");
  decorDiv.className = "decor-div";
  myBurger.insertAdjacentElement("afterend", decorDiv);

  const decoration = new Image();
  decoration.className = "page-decor";
  decoration.src = Decor;
  decorDiv.appendChild(decoration);
  return homeDiv;
}
