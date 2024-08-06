# Restaurant Menu Page

This project is a simple restaurant menu page built with JavaScript. It dynamically renders menu items based on the selected category.

Thank you The Odin Project for the project assignment!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/JohanCodeForFun/Restaurant-Page.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Restaurant-Page
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open the generated index.html file in /dist using live server.
3. your browser and navigate to `http://127.0.0.1:5500/dist/index.html` to see the menu page.

## Project Structure
restaurant-page/ ├── src/ ├── dist/ │ ├── data/ │ │ └── menu.json │ ├── index.js │ ├── renderMenu.js │ └── styles.css ├── .gitignore ├── package.json ├── README.md └── webpack.config.js

### `menu.json`

This file contains the menu data in JSON format. Each category (e.g., grill, snacks, beverages) has an array of menu items.

### `index.js`

This is the entry point of the application. It sets up event listeners for menu buttons and calls the `renderMenu` function.

### `renderMenu.js`

This module exports the `renderMenu` function, which dynamically renders the menu items based on the selected category.

### `styles.css`

This file contains the styles for the menu page.

