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
    node.setAttribute("class", "menu-option")
    headerContainer = document.createElement("h3");
    headerContainer.setAttribute("class", "menu-title")


    const dishnamenode = document.createElement("span")
    dishnamenode.setAttribute("class", "dish-name");
    dishname = document.createTextNode(options.name)
    dishnamenode.appendChild(dishname);
    headerContainer.appendChild(dishnamenode);

    separator = document.createElement("span")
    separator.setAttribute("class", "separator")
    headerContainer.appendChild(separator);

    const dishPricenode = document.createElement("span");
    dishPricenode.setAttribute("class", "dish-price")
    dishPrice = document.createTextNode(options.price)
    dishPricenode.appendChild(dishPrice)
    headerContainer.appendChild(dishPricenode)

    node.appendChild(headerContainer)

    const description = document.createElement("p");
    description.setAttribute("class", "dish-description")
    dishDescription = document.createTextNode(options.description);
    description.appendChild(dishDescription)
    node.appendChild(description)

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
