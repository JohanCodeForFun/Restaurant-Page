import "./styles.css";

import renderMenu from "./renderMenu";

renderMenu();

function changeMenu(option) {
  renderMenu(option)
}

const menuButtons = document.querySelectorAll(".options")

menuButtons.forEach(button => {
  button.addEventListener("click", (event) => handleMenuClick(event.target.value))
})

function handleMenuClick(menuOption) {
  changeMenu(menuOption);
}
