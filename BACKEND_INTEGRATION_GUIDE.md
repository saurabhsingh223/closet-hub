# ClosetHub - Complete Backend Integration Guide

## 📚 Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Backend Setup](#backend-setup)
4. [Database Setup](#database-setup)
5. [API Development](#api-development)
6. [Frontend Integration](#frontend-integration)
7. [Authentication](#authentication)
8. [Deployment](#deployment)
9. [Testing](#testing)

---

## 🎯 Overview

This guide will help you add a complete backend to your ClosetHub ecommerce website using **Node.js**, **Express**, and **MongoDB**.

### **What You'll Build:**
- RESTful API server
- MongoDB database
- User authentication (JWT)
- Product management
- Cart functionality
- Order processing
- Image upload
- Payment integration

---

## 🛠️ Technology Stack

### **Backend:**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### **Authentication:**
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

### **Additional:**
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **Stripe/Razorpay** - Payment processing
- **Nodemailer** - Email service

---

## 🚀 Backend Setup

### **Step 1: Create Backend Folder**

```bash
# In your project root (ClosetHub folder)
mkdir backend
cd backend
npm init -y
```

### **Step 2: Install Dependencies**

```bash
# Core dependencies
npm install express mongoose dotenv cors

# Authentication
npm install jsonwebtoken bcryptjs express-validator

# File upload
npm install multer cloudinary

# Payment (choose one)
npm install stripe
# OR
npm install razorpay

# Email
npm install nodemailer

# Development dependencies
npm install --save-dev nodemon
```

### **Step 3: Update package.json**

```json
{
  "name": "closethub-backend",
  "version": "1.0.0",
  "description": "Backend API for ClosetHub ecommerce",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["ecommerce", "api", "nodejs"],
  "author": "Your Name",
  "license": "MIT"
}
```

### **Step 4: Create Project Structure**

```bash
backend/
├── config/
│   ├── db.js              # Database connection
│   └── cloudinary.js      # Cloudinary config
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── userController.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Order.js
│   └── Cart.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   └── userRoutes.js
├── middleware/
│   ├── auth.js            # JWT verification
│   ├── errorHandler.js
│   └── upload.js          # Multer config
├── utils/
│   ├── sendEmail.js
│   └── generateToken.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## 💾 Database Setup

### **Step 1: Install MongoDB**

**Option A: Local MongoDB**
```bash
# Download from: https://www.mongodb.com/try/download/community
# Install and start MongoDB service
```

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string

### **Step 2: Create Database Connection**

**File: `backend/config/db.js`**
```javascript
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
```

### **Step 3: Create Environment Variables**

**File: `backend/.env`**
```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/closethub
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/closethub

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_change_this
JWT_EXPIRE=30d

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Payment (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# OR Payment (Razorpay)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Frontend URL
CLIENT_URL=http://localhost:5173
```

---

## 📊 Database Models

### **1. User Model**

**File: `backend/models/User.js`**
```javascript
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false,
  },
  phone: {
    type: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/150',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
```

### **2. Product Model**

**File: `backend/models/Product.js`**
```javascript
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, 'Please provide brand name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
    min: 0,
  },
  originalPrice: {
    type: Number,
  },
  category: {
    type: String,
    required: [true, 'Please provide category'],
    enum: ['jeans', 'hoodies', 'tshirts', 'jackets', 'shirts', 'sweatshirts', 'shorts', 'sweaters'],
  },
  gender: {
    type: String,
    required: [true, 'Please provide gender'],
    enum: ['men', 'women', 'unisex'],
  },
  type: {
    type: String,
    required: [true, 'Please provide type'],
    enum: ['topwear', 'bottomwear', 'winterwear'],
  },
  sizes: [{
    size: {
      type: String,
      enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    stock: {
      type: Number,
      default: 0,
    },
  }],
  images: [{
    url: String,
    public_id: String,
  }],
  colors: [String],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    rating: Number,
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Product', productSchema);
```

### **3. Order Model**

**File: `backend/models/Order.js`**
```javascript
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  orderItems: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name: String,
    image: String,
    price: Number,
    size: String,
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  }],
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['card', 'upi', 'cod'],
  },
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String,
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: Date,
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  deliveredAt: Date,
  status: {
    type: String,
    enum: ['Processing', 'Shipped', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Processing',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Order', orderSchema);
```

### **4. Cart Model**

**File: `backend/models/Cart.js`**
```javascript
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  }],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Cart', cartSchema);
```

---

## 🔐 Authentication Setup

### **JWT Middleware**

**File: `backend/middleware/auth.js`**
```javascript
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Admin middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};
```

### **Generate JWT Token**

**File: `backend/utils/generateToken.js`**
```javascript
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d',
  });
};

export default generateToken;
```

---

## 🎮 API Controllers

### **Auth Controller**

**File: `backend/controllers/authController.js`**
```javascript
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

### **Product Controller**

**File: `backend/controllers/productController.js`**
```javascript
import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const { category, gender, type, search, minPrice, maxPrice } = req.query;
    
    let query = { isActive: true };

    // Filters
    if (category) query.category = category;
    if (gender) query.gender = gender;
    if (type) query.type = type;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
      ];
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

---

## 🛣️ API Routes

### **Auth Routes**

**File: `backend/routes/authRoutes.js`**
```javascript
import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

export default router;
```

### **Product Routes**

**File: `backend/routes/productRoutes.js`**
```javascript
import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

router.route('/:id')
  .get(getProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
```

---

## 🖥️ Main Server File

**File: `backend/server.js`**
```javascript
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Import routes
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
```

---

## 🔗 Frontend Integration

### **Step 1: Create API Service**

**File: `closet-hub/src/services/api.js`**
```javascript
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
};

// Products API
export const productsAPI = {
  getAll: (params) => api.get('/products', { params }),
  getOne: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

export default api;
```

### **Step 2: Update AuthModal**

**File: `closet-hub/src/components/AuthModal.jsx`**
```javascript
// Add this import at the top
import { authAPI } from '../services/api';

// Update handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    if (mode === 'login') {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
      });
      
      // Store token
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      
      alert('Login successful!');
      onClose();
      window.location.reload(); // Refresh to update UI
    } else {
      const response = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      
      // Store token
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      
      alert('Account created successfully!');
      onClose();
      window.location.reload();
    }
  } catch (error) {
    console.error('Auth error:', error);
    alert(error.response?.data?.message || 'Authentication failed');
  }
};
```

### **Step 3: Update Products Page**

**File: `closet-hub/src/pages/Products.jsx`**
```javascript
// Add this import
import { productsAPI } from '../services/api';
import { useEffect } from 'react';

// Inside Products component
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const params = {
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        gender: selectedGender !== 'all' ? selectedGender : undefined,
        type: selectedType !== 'all' ? selectedType : undefined,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      };
      
      const response = await productsAPI.getAll(params);
      setFilteredProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  fetchProducts();
}, [selectedCategory, selectedGender, selectedType, priceRange]);
```

### **Step 4: Create .env for Frontend**

**File: `closet-hub/.env`**
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Running the Application

### **Start Backend:**
```bash
cd backend
npm run dev
```

### **Start Frontend:**
```bash
cd closet-hub
npm run dev
```

### **Access:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

---

## 📤 Deployment

### **Backend Deployment (Render.com)**

1. **Push code to GitHub**
2. **Go to Render.com**
3. **Create New Web Service**
4. **Connect GitHub repo**
5. **Configure:**
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add environment variables

### **Frontend Deployment (Vercel)**

```bash
cd closet-hub
vercel --prod
```

### **Database (MongoDB Atlas)**

Already cloud-based, just update connection string in production.

---

## 🧪 Testing API

### **Using Postman/Thunder Client:**

**Register User:**
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login:**
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Get Products:**
```
GET http://localhost:5000/api/products?category=jeans
```

---

## 📚 Additional Features to Add

### **1. Image Upload (Cloudinary)**
### **2. Payment Integration (Stripe/Razorpay)**
### **3. Email Notifications**
### **4. Order Tracking**
### **5. Reviews & Ratings**
### **6. Wishlist**
### **7. Admin Dashboard**

---

## 🎯 Next Steps

1. ✅ Set up backend folder
2. ✅ Install dependencies
3. ✅ Create database models
4. ✅ Build API controllers
5. ✅ Set up routes
6. ✅ Connect frontend
7. ✅ Test API endpoints
8. ✅ Deploy

---

**Your backend is now ready to integrate with ClosetHub!** 🎉

For detailed implementation of specific features (payments, emails, etc.), refer to the respective sections in this guide.
