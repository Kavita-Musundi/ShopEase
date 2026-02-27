\# 🛒 E-Commerce Platform (MERN Stack)



A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring Indian products, ₹ currency, shopping cart, and user authentication.



\## 🚀 Features



\### 👤 User Features

\- User Registration \& Login with JWT

\- Browse products by categories

\- Add to Cart functionality

\- Update cart quantities

\- Remove items from cart

\- Checkout process

\- Order history

\- Profile management



\### 🛍️ Product Features

\- Product listing with images

\- Category-wise filtering

\- Indian products across 10+ categories

\- ₹ Rupee currency with Indian number formatting

\- Stock management



\### 🛒 Shopping Cart

\- Add/remove products

\- Update quantities

\- Persistent cart (localStorage)

\- Real-time total calculation

\- Order summary



\### 👑 Admin Features

\- Admin dashboard

\- Product management (Add/Edit/Delete)

\- Order management

\- User management



\## 🛠️ Tech Stack



\*\*Frontend:\*\*

\- React.js (with Vite)

\- React Router DOM

\- Context API for state management

\- Axios for API calls

\- Custom CSS (fully responsive)



\*\*Backend:\*\*

\- Node.js

\- Express.js

\- MongoDB with Mongoose

\- JWT Authentication

\- bcrypt for password hashing

\- RESTful API architecture



\## 📁 Project Structure

ecommerce-platform/

├── backend/ # Node.js + Express Server

│ ├── models/ # MongoDB models

│ ├── routes/ # API routes

│ ├── middleware/ # Auth middleware

│ ├── config/ # Database config

│ ├── server.js # Main server file

│ └── .env.example # Environment variables example

└── frontend/ # React + Vite App

├── src/

│ ├── components/ # Reusable components

│ ├── pages/ # Page components

│ ├── context/ # Cart context

│ ├── App.jsx # Main component

│ └── main.jsx # Entry point

└── index.html # HTML template





\## 🔧 Installation



\### Prerequisites

\- Node.js (v14 or higher)

\- MongoDB (local or Atlas)

\- npm or yarn



\### Backend Setup

```bash

cd backend

npm install

\##Install dependencies
 
 npm install

\## Create .env file in backend folder

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

\## Frontend Setup
Navigate to frontend folder:

\##bash
cd frontend
Install dependencies:

\##bash
npm install
Run the Application
Start Backend Server:

\##bash
cd backend
npm run dev
# Server runs on http://localhost:5000
Start Frontend Development Server (in new terminal):

\##vbash
cd frontend
npm run dev
# App opens at http://localhost:5174

\## 📡 API Endpoints
Method	   Endpoint	        Description	        Auth
POST	/api/auth/register	Register new user  Public
POST	/api/auth/login	    Login user	       Public
GET	  /api/auth/profile 	Get user profile  Private
PUT	  /api/auth/profile	   Update profile  	  Private
GET	  /api/products	     Get all products      Public
GET	  /api/products/:id	  Get single product   Public
POST	/api/products	  Create product       Admin
PUT	  /api/products/:id	  Update product       Admin
DELETE	/api/products/:id	Delete product	   Admin
POST	/api/orders	       Create order       Private
GET	  /api/orders/myorders	Get user orders	  Private
GET	  /api/orders/admin/all	Get all orders	  Admin



\## 🎯 Categories Available
Category	Icon	Products
Home & Kitchen	🏠	Kadai, Water Bottle, Kettle
Appliances	⚡	Mixer Grinder
Fashion	👕	Shirts, Jeans
Footwear	👟	Formal Shoes, Sports Shoes
Electronics	📱	Speaker, Smartwatch, TV
Groceries	🍎	Chocolate, Tea
Beauty	💄	Body Lotion
Personal Care	✂️	Trimmer
Books	📚	Autobiography
Sports	🏏	Cricket Bat, Football