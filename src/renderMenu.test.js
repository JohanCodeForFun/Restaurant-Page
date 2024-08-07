import renderMenu from "./renderMenu";
import menu from "./data/menu.json";

describe("render menu", () => {
  let content;

  beforeEach(() => {
    document.body.innerHTML = '<div id="content"></div>';
    content = document.querySelector("#content");
  });

  it("should render the default menu (grill) when first loaded", () => {
    renderMenu();

    expect(content.querySelector("h2").innerText).toBe("grill");
    expect(content.querySelectorAll("li.menu-option").length).toBe(
      menu.grill.length
    );
  });

  it("should render correct menu when valid option is provided", () => {
    renderMenu("snacks");

    expect(content.querySelector("h2").innerText).toBe("snacks");
    expect(content.querySelectorAll("li.menu-option").length).toBe(
      menu.snacks.length
    );
  });

  it("should clear previous menu content before rendering new content", () => {
    renderMenu("grill");
    renderMenu("beverages");

    expect(content.querySelector("h2").innerText).toBe("beverages");
    expect(content.querySelectorAll("li.menu-option").length).toBe(
      menu.beverages.length
    );
  });

  it("should render correct dish details", () => {
    renderMenu("grill");
    const firstDish = menu.grill[0];

    const firstDishElement = content.querySelector("li.menu-option");

    expect(firstDishElement.querySelector(".dish-name").textContent).toBe(
      firstDish.name
    );
    expect(firstDishElement.querySelector(".dish-price").textContent).toBe(
      "$" + firstDish.price
    );
    expect(
      firstDishElement.querySelector(".dish-description").textContent
    ).toBe(firstDish.description);
  });
});
