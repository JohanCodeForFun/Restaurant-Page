import './styles.css'

import menu from './data/menu.json'

const menuButtons = document.querySelectorAll(".options")

menuButtons.forEach(button => {
  button.addEventListener("click", (event) => handleMenuClick(event.target.value))
})

function handleMenuClick(value) {
  console.log("menu button:", value)
}

console.log(menu)