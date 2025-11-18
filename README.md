🛍️ Snežana React Store

A modern e-commerce web application built with React.js, featuring dynamic product data from the Noroff API, category filtering, a fully functional cart, and a checkout modal.



📦 Features

✅ Dynamic Product Listing

Fetches live data from the Noroff API:
https://v2.api.noroff.dev/online-shop

Displays product image, description, and discounted price if available.

✅ Category Filter & Search

Users can search by product title.

Filter by category tags dynamically generated from the API.

✅ Product Detail Page

Each product links to a detailed view with description, price, and image.

✅ Cart Functionality

Add/remove products from cart.

Update total price dynamically.

“Clear Cart” and “Checkout” modal for order completion.

✅ Persistent Cart State

Cart data stored using Zustand for consistent global state management.

✅ Responsive Design

Fully responsive layout with modern styling using CSS3 and reusable components.

🧠 Technologies Used
Category	Tools
Frontend	React.js (CRA)
State Management	Zustand
Routing	React Router
API	Noroff API v2
Styling	Custom CSS
Deployment	Netlify / Vercel
🧩 Folder Structure
src/
 ├── components/
 │   ├── Header/
 │   ├── Footer/
 │   └── Layout/
 ├── hooks/
 │   └── useApi.jsx
 ├── pages/
 │   ├── Home/
 │   ├── Product/
 │   └── Cart/
 ├── store/
 │   └── cartStore.js
 ├── App.jsx
 └── index.js

⚙️ Installation & Setup

Clone this repository:

git clone https://github.com/NoroffFEU/jsfw-2025-v1-snezana-jsframeworks.git


Navigate to the project folder:

cd jsfw-2025-v1-snezana-jsframeworks


Install dependencies:

npm install


Start the development server:

npm start


Open your browser and visit:

http://localhost:3000


🧑‍💻 Author

Snežana Kragujevac
📧 sneza.kragujevac@gmail.com
🔗 https://github.com/snezanakg