# 🛒 E-Commerce Platform (MERN Stack)

Full-stack e-commerce platform with JWT authentication, shopping cart, and Indian products.

## 🚀 Features
- User login/register with JWT
- Browse products by category
- Add to cart with quantity management
- Checkout and order history
- Admin dashboard
- ₹ Rupee currency

## 🛠️ Tech Stack
- **Frontend:** React, Context API, Axios, CSS
- **Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt

## 🔧 Installation

### Backend
```bash
cd backend
npm install
npm run dev

##Frontend
bash
cd frontend
npm install
npm run dev

## API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/orders	Create order

##Categories
Home & Kitchen | Appliances | Fashion | Footwear | Electronics | Groceries | Beauty | Books | Sports
