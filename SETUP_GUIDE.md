# ClosetHub - Complete Setup Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Detailed Setup](#detailed-setup)
3. [Project Structure Explained](#project-structure-explained)
4. [Customization](#customization)
5. [Adding Backend](#adding-backend)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

```bash
# Navigate to project
cd closet-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

---

## 📦 Detailed Setup

### Step 1: Install Dependencies

The project uses the following main dependencies:

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^6.x",
    "@reduxjs/toolkit": "^2.x",
    "react-redux": "^9.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "vite": "^7.x"
  }
}
```

### Step 2: Understanding the File Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with search, cart, theme toggle
│   ├── Footer.jsx      # Footer with links and contact info
│   ├── ProductCard.jsx # Product display card with add to cart
│   └── HeroCarousel.jsx # Auto-sliding banner carousel
│
├── pages/              # Main page components
│   ├── Home.jsx        # Homepage with carousel and featured products
│   ├── Products.jsx    # Product listing with filters
│   ├── Cart.jsx        # Shopping cart page
│   ├── Profile.jsx     # User profile management
│   └── Orders.jsx      # Order history page
│
├── store/              # Redux state management
│   ├── store.js        # Redux store configuration
│   ├── cartSlice.js    # Cart state and actions
│   └── userSlice.js    # User and orders state
│
├── context/            # React Context API
│   └── ThemeContext.jsx # Dark mode theme management
│
├── data/               # Mock data
│   └── products.js     # Product catalog and categories
│
├── App.jsx             # Main app with routing
├── main.jsx            # React entry point
└── index.css           # Global styles with Tailwind
```

### Step 3: Configuration Files

**tailwind.config.js** - Tailwind CSS configuration
- Defines custom colors (lemon yellow theme)
- Enables dark mode with class strategy
- Configures content paths for purging

**postcss.config.js** - PostCSS configuration
- Enables Tailwind CSS processing
- Adds autoprefixer for browser compatibility

**vite.config.js** - Vite build configuration
- React plugin setup
- Development server settings

---

## 🎨 Customization

### 1. Change Brand Name

**Update in multiple files:**

`src/components/Navbar.jsx`:
```javascript
<div className="text-2xl font-bold text-yellow-500">YourBrandName</div>
```

`src/components/Footer.jsx`:
```javascript
<h3 className="text-2xl font-bold text-yellow-500 mb-4">YourBrandName</h3>
```

`index.html`:
```html
<title>YourBrandName - Fashion Store</title>
```

### 2. Replace Product Images

**Option A: Use Your Own Images**

1. Create an `images` folder in `public/`
2. Add your product images
3. Update `src/data/products.js`:

```javascript
{
  id: 1,
  name: "Product Name",
  image: "/images/product1.jpg", // Your image path
  // ... other fields
}
```

**Option B: Use Different Placeholder Service**

Replace Unsplash URLs with:
- Picsum: `https://picsum.photos/400/500?random=1`
- Lorem Picsum: `https://loremflickr.com/400/500/fashion`

### 3. Modify Theme Colors

**Primary Color (Yellow)**

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#fefce8',
    500: '#eab308',  // Main color
    600: '#ca8a04',  // Hover state
  },
}
```

Then replace `yellow-500` with `primary-500` throughout components.

**Dark Mode Colors**

Tailwind automatically handles dark mode. Customize in `index.css`:
```css
.dark {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}
```

### 4. Add New Product Categories

Edit `src/data/products.js`:

```javascript
export const categories = [
  // ... existing categories
  { id: "accessories", name: "Accessories", icon: "watch" },
  { id: "shoes", name: "Shoes", icon: "shoe" },
];
```

Add products with the new category:
```javascript
{
  id: 31,
  category: "accessories",
  // ... other fields
}
```

### 5. Customize Homepage Sections

Edit `src/pages/Home.jsx`:

**Add New Section:**
```javascript
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
    Your Section Title
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Your content */}
  </div>
</section>
```

---

## 🔧 Adding Backend

### Option 1: Node.js + Express + MongoDB

**1. Create Backend Folder:**
```bash
mkdir backend
cd backend
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
```

**2. Basic Server Setup (backend/server.js):**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

**3. Product Model (backend/models/Product.js):**
```javascript
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  gender: { type: String, required: true },
  type: { type: String, required: true },
  sizes: [String],
  images: [String],
  description: String,
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
```

**4. Update Frontend to Use API:**

In `src/data/products.js`, create an API service:
```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const addToCartAPI = async (userId, item) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, item }),
  });
  return response.json();
};
```

**5. Environment Variables:**

Create `.env` in frontend:
```
VITE_API_URL=http://localhost:5000/api
```

Create `.env` in backend:
```
MONGODB_URI=mongodb://localhost:27017/closethub
JWT_SECRET=your_secret_key_here
PORT=5000
```

### Option 2: Firebase

**1. Install Firebase:**
```bash
npm install firebase
```

**2. Setup Firebase (src/firebase/config.js):**
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

**3. Fetch Products from Firestore:**
```javascript
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';

const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Method 1: CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

**Method 2: Git Integration**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Environment Variables in Vercel:**
- Go to Project Settings → Environment Variables
- Add: `VITE_API_URL=https://your-backend-url.com/api`

### Deploy to Netlify

**Method 1: CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Method 2: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify

**Method 3: Git Integration**
1. Push to GitHub
2. Go to Netlify → "New site from Git"
3. Select repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### Deploy Backend (if using Node.js)

**Render.com:**
1. Push backend code to GitHub
2. Go to [render.com](https://render.com)
3. Create "New Web Service"
4. Connect repository
5. Build command: `npm install`
6. Start command: `node server.js`
7. Add environment variables

**Railway.app:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up
```

---

## 🐛 Troubleshooting

### Issue: Module not found errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not loading

**Solution:**
1. Check `tailwind.config.js` content paths
2. Ensure `index.css` has Tailwind directives
3. Restart dev server: `npm run dev`

### Issue: Dark mode not working

**Solution:**
1. Check `tailwind.config.js` has `darkMode: 'class'`
2. Verify ThemeContext is wrapping App
3. Check localStorage for saved theme

### Issue: Images not loading

**Solution:**
1. Check image URLs are correct
2. For local images, place in `public/` folder
3. Use `/image.jpg` not `./image.jpg`
4. Check CORS if using external images

### Issue: Redux state not persisting

**Solution:**
Install redux-persist:
```bash
npm install redux-persist
```

Update store:
```javascript
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
```

### Issue: Build fails

**Common causes:**
1. Unused imports - Remove them
2. Missing dependencies - Run `npm install`
3. Type errors - Check console for details
4. Environment variables - Ensure they're prefixed with `VITE_`

---

## 📞 Support

For issues or questions:
1. Check this guide first
2. Review the main README.md
3. Check browser console for errors
4. Verify all dependencies are installed

---

## ✅ Checklist Before Deployment

- [ ] Replace all placeholder images
- [ ] Update brand name throughout
- [ ] Test all pages and features
- [ ] Test dark mode
- [ ] Test responsive design on mobile
- [ ] Add real product data
- [ ] Set up backend API (if needed)
- [ ] Configure environment variables
- [ ] Test cart functionality
- [ ] Optimize images
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add favicon
- [ ] Update meta tags for SEO

---

**Happy Coding! 🎉**
