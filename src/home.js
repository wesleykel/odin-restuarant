import Burger from "./impossible-burger.jpeg";

export function homePage() {
  const homeDiv = document.createElement("div");
  homeDiv.className = "home-container";

  const myBurger = new Image();
  myBurger.className = "burger-image";
  myBurger.src = Burger;
  homeDiv.appendChild(myBurger);

  return homeDiv;
}
