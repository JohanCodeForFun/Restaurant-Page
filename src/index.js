import "./styles.css";

import menu from "./data/menu.json";

const menuContent = document.querySelector("#content");

(function renderMenu() {
  const menuTitle = document.createElement("h2");
  menuTitle.innerText = `${Object.keys(menu)[0]}`;
  menuContent.appendChild(menuTitle);

  const menuList = document.createElement("ul");
  let node, textnode;

  for (let options of menu["grill"]) {
    node = document.createElement("li");
    textnode = document.createTextNode(options.name)
    node.appendChild(textnode)
    menuList.appendChild(node);
  }

  menuContent.appendChild(menuList)
})();

function changeMenu() {}

// const menuButtons = document.querySelectorAll(".options")

// menuButtons.forEach(button => {
//   button.addEventListener("click", (event) => handleMenuClick(event.target.value))
// })

function handleMenuClick(menuOption) {
  // menuOption = value
  console.log("menu option:", menuOption);
  console.log(menu[menuOption]);
  // menu[value].forEach(option => {
  //   // console.log(option)
  // })
}
