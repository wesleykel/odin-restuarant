import Map from "./map.png";
export function contactPage() {
  const mapPic = new Image();
  mapPic.id = "map-pic";
  mapPic.src = Map;
  const contactDiv = document.createElement("div");
  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";
  const mapBox = document.createElement("div");
  mapBox.id = "map-box";
  mapBox.appendChild(mapPic);
  const addressBox = document.createElement("div");
  addressBox.id = "address-box";
  addressBox.innerHTML =
    "<address>La Burger!<br> 192 Mayfair Square <br> London <br>W1J 8HA<br> LA@burger.com</address>";

  contactDiv.className = "contact";
  contactDiv.id = "menuItems";
  contactDiv.innerText = "Contact Us";

  contactDiv.appendChild(contactContainer);
  contactContainer.appendChild(mapBox);
  contactContainer.appendChild(addressBox);

  return contactDiv;
}
