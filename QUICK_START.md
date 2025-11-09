# ClosetHub - Quick Start Guide

## ⚡ Get Running in 2 Minutes

### Step 1: Install & Run
```bash
cd closet-hub
npm install
npm run dev
```

Open browser: **http://localhost:5173**

---

## 🎯 What You Get

✅ **30 Products** across 8 categories  
✅ **Full Shopping Cart** with Redux  
✅ **Dark Mode** toggle  
✅ **Responsive Design** (mobile-first)  
✅ **Product Filtering** (category, gender, type, price)  
✅ **User Profile** & Order History  
✅ **Auto-sliding Hero Carousel**  

---

## 📝 First Customizations

### 1. Change Brand Name (2 files)

**src/components/Navbar.jsx** (line 30):
```javascript
<div className="text-2xl font-bold text-yellow-500">YourBrand</div>
```

**src/components/Footer.jsx** (line 13):
```javascript
<h3 className="text-2xl font-bold text-yellow-500 mb-4">YourBrand</h3>
```

### 2. Replace Product Images

**src/data/products.js** - Update `image` URLs:
```javascript
image: "/images/your-product.jpg"  // Your image path
```

Place images in: `public/images/`

### 3. Change Theme Color

**tailwind.config.js**:
```javascript
colors: {
  yellow: {
    500: '#your-color',  // Main color
    600: '#your-hover-color',
  },
}
```

---

## 🗂️ File Structure (Key Files)

```
src/
├── pages/
│   ├── Home.jsx          ← Homepage
│   ├── Products.jsx      ← Product listing
│   ├── Cart.jsx          ← Shopping cart
│   ├── Profile.jsx       ← User profile
│   └── Orders.jsx        ← Order history
│
├── components/
│   ├── Navbar.jsx        ← Navigation
│   ├── Footer.jsx        ← Footer
│   ├── ProductCard.jsx   ← Product display
│   └── HeroCarousel.jsx  ← Banner slider
│
├── store/
│   ├── cartSlice.js      ← Cart state
│   └── userSlice.js      ← User state
│
└── data/
    └── products.js       ← Product data (EDIT THIS!)
```

---

## 🎨 Key Features to Test

1. **Add to Cart**: Select size → Click "Add to Cart"
2. **Dark Mode**: Click moon/sun icon in navbar
3. **Filters**: Go to Products → Use sidebar filters
4. **Search**: Type in search bar → Enter
5. **Cart**: View cart → Update quantities
6. **Profile**: Edit user information
7. **Orders**: View order history

---

## 🚀 Deploy in 5 Minutes

### Vercel (Easiest)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

---

## 📚 Need More Help?

- **Full Setup**: Read `SETUP_GUIDE.md`
- **All Features**: Read `FEATURES.md`
- **Deployment**: Read `README.md` → Deployment section

---

## 🐛 Quick Fixes

**Styles not loading?**
```bash
npm run dev
# Restart server
```

**Module errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run build
# Check console for errors
```

---

## ✅ Pre-Deployment Checklist

- [ ] Replace placeholder images
- [ ] Update brand name
- [ ] Test all pages
- [ ] Test dark mode
- [ ] Test on mobile
- [ ] Run `npm run build`
- [ ] Test with `npm run preview`

---

## 🎯 Next Steps

1. **Add Real Products**: Edit `src/data/products.js`
2. **Customize Colors**: Edit `tailwind.config.js`
3. **Add Backend**: Follow `SETUP_GUIDE.md` → Backend section
4. **Deploy**: Use Vercel or Netlify

---

**You're all set! Start customizing! 🎉**

For detailed documentation, see:
- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Detailed setup & backend
- `FEATURES.md` - Full feature list
