import menu from "./data/menu.json";

function createMenuTitle(option) {
  const menuTitleElement = document.createElement("h2");
  menuTitleElement.innerText = option;
  return menuTitleElement;
}

function createMenuItem(option) {
  const node = document.createElement("li");
  node.setAttribute("class", "menu-option");

  const headerContainer = document.createElement("h3");
  headerContainer.setAttribute("class", "menu-title");

  const dishnamenode = document.createElement("span");
  dishnamenode.setAttribute("class", "dish-name");
  dishnamenode.innerText = option.name;
  headerContainer.appendChild(dishnamenode);

  const separator = document.createElement("span");
  separator.setAttribute("class", "separator");
  headerContainer.appendChild(separator);

  const dishPricenode = document.createElement("span");
  dishPricenode.setAttribute("class", "dish-price");
  dishPricenode.innerText = `$${option.price}`;
  headerContainer.appendChild(dishPricenode);

  node.appendChild(headerContainer);

  const dishDescription = document.createElement("p");
  dishDescription.setAttribute("class", "dish-description");
  dishDescription.innerText = option.description;
  node.appendChild(dishDescription);

  return node;
}

function renderMenu(option = "grill") {
  const menuContent = document.querySelector("#content");
  menuContent.innerHTML = "";

  const menuTitleElement = createMenuTitle(option);
  menuContent.appendChild(menuTitleElement);

  const menuList = document.createElement("ul");

  menu[option].forEach((item) => {
    const menuItem = createMenuItem(item);
    menuList.appendChild(menuItem);
  });

  menuContent.appendChild(menuList);
}

export default renderMenu;
