# ClosetHub - Modern Ecommerce Website

A modern, fully-featured ecommerce website for a clothing brand built with React, Vite, Redux Toolkit, and Tailwind CSS.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, minimalist design with lemon yellow accent color
- **🌓 Dark Mode**: Toggle between light and dark themes
- **🛒 Shopping Cart**: Full cart functionality with Redux state management
- **📱 Responsive Design**: Mobile-first approach, works on all devices
- **🎠 Hero Carousel**: Auto-sliding banner carousel on homepage
- **🔍 Product Filtering**: Filter by category, gender, type, and price range
- **👤 User Profile**: Manage user information
- **📦 Order History**: Track past orders
- **🎯 Category Navigation**: Easy browsing by product categories

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Placeholders**: Unsplash API

## 📁 Project Structure

```
closet-hub/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── HeroCarousel.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   ├── Profile.jsx
│   │   └── Orders.jsx
│   ├── store/              # Redux store
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   └── userSlice.js
│   ├── context/            # React contexts
│   │   └── ThemeContext.jsx
│   ├── data/               # Mock data
│   │   └── products.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd closet-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Replace Product Images

Currently using Unsplash placeholder images. To use your own:

1. Open `src/data/products.js`
2. Replace the `image` URLs with your own product images
3. Comments are provided in the file for guidance

### Change Theme Colors

Edit `tailwind.config.js` to customize the yellow accent color:

```javascript
theme: {
  extend: {
    colors: {
      yellow: {
        // Customize these values
        500: '#eab308',
        600: '#ca8a04',
      },
    },
  },
}
```

### Add More Products

Edit `src/data/products.js` and add new product objects following the existing structure:

```javascript
{
  id: 31,
  name: "Product Name",
  brand: "Brand Name",
  price: 999,
  category: "category-name",
  gender: "men/women/unisex",
  type: "topwear/bottomwear/winterwear",
  sizes: ["S", "M", "L", "XL"],
  image: "image-url",
  description: "Product description"
}
```

## 🔧 Adding Backend Integration

### Recommended Stack: Node.js + Express + MongoDB

1. **Create API endpoints**:
   ```javascript
   // Example Express routes
   app.get('/api/products', getProducts);
   app.post('/api/cart', addToCart);
   app.get('/api/orders', getOrders);
   ```

2. **Replace mock data with API calls**:
   ```javascript
   // In your components
   useEffect(() => {
     fetch('/api/products')
       .then(res => res.json())
       .then(data => setProducts(data));
   }, []);
   ```

3. **Add authentication**:
   - Use JWT for token-based auth
   - Implement login/signup pages
   - Protect routes with auth middleware

4. **Database Schema (MongoDB)**:
   ```javascript
   // User Schema
   {
     name: String,
     email: String,
     password: String,
     address: String,
     orders: [OrderId]
   }

   // Product Schema
   {
     name: String,
     brand: String,
     price: Number,
     category: String,
     images: [String],
     sizes: [String],
     stock: Number
   }

   // Order Schema
   {
     userId: ObjectId,
     items: [{
       productId: ObjectId,
       quantity: Number,
       size: String
     }],
     total: Number,
     status: String,
     date: Date
   }
   ```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Alternative: Deploy via Git

**Vercel**:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

**Netlify**:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

## 📝 Future Enhancements

- [ ] Add product detail page
- [ ] Implement wishlist functionality
- [ ] Add product reviews and ratings
- [ ] Implement payment gateway integration
- [ ] Add size guide modal
- [ ] Implement product zoom on hover
- [ ] Add recently viewed products
- [ ] Implement email notifications
- [ ] Add social media sharing
- [ ] Implement advanced search with filters
- [ ] Add product recommendations
- [ ] Multi-language support

## 🐛 Known Issues

- CSS lint warnings for `-webkit-line-clamp` (cosmetic, doesn't affect functionality)
- Mock data is used for orders and user profile

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ for ClosetHub

---

**Note**: Remember to replace placeholder images with your actual product images before deploying to production!
