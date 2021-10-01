import Burger1 from "./Burger1.jpg";

export function makeMenu() {
  const menuItems = document.createElement("div");
  menuItems.className = "menu-items";

  menuItems.id = "menuItems";

  const itemOne = document.createElement("div");
  itemOne.className = "burger-types";
  menuItems.appendChild(itemOne);
  const hamburger = new Image();
  hamburger.className = "menuImages";
  hamburger.src = Burger1;

  itemOne.innerText = "Hamburger";
  itemOne.appendChild(hamburger);

  const itemTwo = document.createElement("div");
  itemTwo.className = "burger-types";
  menuItems.appendChild(itemTwo);
  const hamburger2 = new Image();
  hamburger2.className = "menuImages";
  hamburger2.src = Burger1;

  itemTwo.innerText = "Cheese Burger";
  itemTwo.appendChild(hamburger2);
  const itemThree = document.createElement("div");
  itemThree.className = "burger-types";
  const hamburger3 = new Image();
  hamburger3.className = "menuImages";
  hamburger3.src = Burger1;
  menuItems.appendChild(itemThree);
  itemThree.innerText = "Vegetarian Burger";
  itemThree.appendChild(hamburger3);
  const itemFour = document.createElement("div");
  itemFour.className = "burger-types";
  const hamburger4 = new Image();
  hamburger4.className = "menuImages";
  hamburger4.src = Burger1;
  menuItems.appendChild(itemFour);
  itemFour.innerText = "Half Pounder";
  itemFour.appendChild(hamburger4);

  return menuItems;
}
