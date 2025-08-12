# Plant Website

This project is a plant website built using Tailwind CSS for styling and JavaScript for interactivity. The website showcases various plants, provides information about services, and includes customer reviews.

## Project Structure

```
plant-website
├── src
│   │   
│   ├── js
│   │   └── main.js
    └── input.css
│   ├── index.html
│   └── output.css
├── assets
│   ├── img
│   │   ├── cart-1.png
│   │   ├── cart-2.png
│   │   ├── cart-3.png
│   │   ├── cart-4.png
│   │   ├── home.png
│   │   ├── leaf-1.png
│   │   ├── leaf-2.png
│   │   ├── leaf-3.png
│   │   ├── leaf-4.png
│   │   ├── plant-1.png
│   │   ├── plant-2.png
│   │   ├── review-1.jpg
│   │   ├── review-2.jpg
│   │   ├── review-3.jpg
│   │   └── review-4.jpg
├── package.json
├── tailwind.config.js
└── README.md
```

## Features

- Responsive design using Tailwind CSS.
- Interactive elements powered by JavaScript.
- Sections for Home, About, Services, Popular Plants, and Customer Reviews.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd plant-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the CSS:
   ```bash
   npx tailwindcss -i ./src/css/input.css -o ./src/output.css --watch
   ```

4. Open `src/index.html` in your browser to view the website.

## Usage

- Navigate through the website using the menu.
- Explore different sections to learn about various plants and services offered.
- View customer reviews to understand the experiences of other users.

## License

This project is licensed under the MIT License.
