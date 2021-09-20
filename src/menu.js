export function makeMenu() {
  const menuItems = document.createElement("div");
  menuItems.className = "menu-items";

  const itemOne = document.createElement("div");
  itemOne.className = "burger-types";
  menuItems.appendChild(itemOne);
  itemOne.innerText = "Hamburger";
  const itemTwo = document.createElement("div");
  itemTwo.className = "burger-types";
  menuItems.appendChild(itemTwo);
  itemTwo.innerText = "Cheese Burger";
  const itemThree = document.createElement("div");
  itemThree.className = "burger-types";
  menuItems.appendChild(itemThree);
  itemThree.innerText = "Vegetarian Burger";
  const itemFour = document.createElement("div");
  itemFour.className = "burger-types";
  menuItems.appendChild(itemFour);
  itemFour.innerText = "Half Pounder";

  return menuItems;
}
