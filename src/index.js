import "./styles.css";

import menu from "./data/menu.json";

// let menuOption = "grill"

const menuContent = document.querySelector("#content");

(function renderMenu(option = "grill") {
  const menuTitle = Object.keys(menu).find(element => element === option)
  const menuTitleElement = document.createElement("h2");
  menuTitleElement.innerText = `${menuTitle}`;
  menuContent.appendChild(menuTitleElement);

  const menuList = document.createElement("ul");
  let node, headerContainer, dishname, separator, dishPrice, dishDescription;

  for (let options of menu["grill"]) {
    node = document.createElement("li");
    headerContainer = document.createElement("h3");

    dishname = document.createTextNode(options.name)
    separator = document.createTextNode("------")
    dishPrice = document.createTextNode(options.price)
    node.appendChild(dishname)
    node.appendChild(separator)
    node.appendChild(dishPrice)

    dishDescription = document.createTextNode(options.description);
    node.appendChild(dishDescription)

    menuList.appendChild(node);
  }

  menuContent.appendChild(menuList)
})();

function changeMenu() {}

const menuButtons = document.querySelectorAll(".options")

menuButtons.forEach(button => {
  button.addEventListener("click", (event) => handleMenuClick(event.target.value))
})

function handleMenuClick(menuOption) {
  // menuOption = value
  console.log("menu option:", menuOption);
  console.log(menu[menuOption]);
  // menu[value].forEach(option => {
  //   // console.log(option)
  // })
}
