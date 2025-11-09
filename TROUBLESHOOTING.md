# ClosetHub - Troubleshooting Guide

## ✅ Tailwind CSS Issue - FIXED!

### What Was Wrong
The project initially had Tailwind CSS v4 installed, which has different syntax and configuration requirements.

### What Was Done
1. Uninstalled Tailwind CSS v4
2. Installed stable Tailwind CSS v3.4.1
3. Updated `index.css` to use standard `@tailwind` directives
4. Verified `tailwind.config.js` configuration
5. Restarted dev server

### Current Setup (Working)
```json
"devDependencies": {
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.17"
}
```

---

## 🚀 How to Start the Application

```bash
# Navigate to project
cd closet-hub

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

**Server will start at:** http://localhost:5173

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot find module" errors

**Solution:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Port 5173 already in use

**Solution:**
```bash
# Kill the process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or change port in vite.config.js:
export default defineConfig({
  server: { port: 3000 }
})
```

### Issue 3: Styles not loading

**Solution:**
1. Check `index.css` has:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Verify `tailwind.config.js` exists with correct content paths

3. Restart dev server:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

### Issue 4: Dark mode not working

**Solution:**
1. Check `tailwind.config.js` has: `darkMode: 'class'`
2. Clear browser cache
3. Check browser console for errors

### Issue 5: Images not loading

**Solution:**
- Unsplash images require internet connection
- Check browser console for CORS errors
- Replace with local images in `public/images/`

### Issue 6: Redux state not updating

**Solution:**
1. Check Redux DevTools in browser
2. Verify Provider wraps App in `main.jsx`
3. Check console for Redux errors

### Issue 7: Routing not working

**Solution:**
1. Verify `react-router-dom` is installed
2. Check BrowserRouter wraps routes in `App.jsx`
3. For production, configure server redirects

### Issue 8: Build fails

**Solution:**
```bash
# Check for errors
npm run build

# Common fixes:
# 1. Remove unused imports
# 2. Fix any TypeScript errors
# 3. Check environment variables
```

---

## 🔍 Debugging Steps

### Step 1: Check Browser Console
- Open DevTools (F12)
- Look for red errors
- Check Network tab for failed requests

### Step 2: Check Terminal Output
- Look for compilation errors
- Check for missing dependencies
- Verify server is running

### Step 3: Verify File Structure
```
src/
├── components/  ✓
├── pages/       ✓
├── store/       ✓
├── context/     ✓
├── data/        ✓
├── App.jsx      ✓
├── main.jsx     ✓
└── index.css    ✓
```

### Step 4: Check Dependencies
```bash
npm list react react-dom react-router-dom @reduxjs/toolkit
```

All should show installed versions.

---

## 📦 Package Versions (Verified Working)

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.5",
    "@reduxjs/toolkit": "^2.9.2",
    "react-redux": "^9.2.0",
    "lucide-react": "^0.552.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17",
    "vite": "^7.1.7"
  }
}
```

---

## 🌐 Browser Compatibility

### Recommended Browsers
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

### Not Supported
- Internet Explorer (any version)
- Very old mobile browsers

---

## 💻 System Requirements

- **Node.js**: v16 or higher
- **npm**: v7 or higher
- **RAM**: 4GB minimum
- **Disk Space**: 500MB for node_modules

---

## 🔧 Advanced Troubleshooting

### Clear All Caches
```bash
# Clear npm cache
npm cache clean --force

# Clear node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Clear browser cache
# Chrome: Ctrl+Shift+Delete
```

### Check Node Version
```bash
node --version  # Should be v16+
npm --version   # Should be v7+
```

### Verify Vite Config
Check `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Check PostCSS Config
Check `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 📝 Quick Fixes Checklist

Before asking for help, try these:

- [ ] Restart dev server (`Ctrl+C`, then `npm run dev`)
- [ ] Clear browser cache
- [ ] Check browser console for errors
- [ ] Verify all files are saved
- [ ] Check internet connection (for Unsplash images)
- [ ] Try different browser
- [ ] Restart VS Code / IDE
- [ ] Restart computer (if all else fails)

---

## 🆘 Still Having Issues?

### Check These Files

1. **src/index.css** - Should have `@tailwind` directives
2. **tailwind.config.js** - Should have content paths
3. **postcss.config.js** - Should have tailwindcss plugin
4. **package.json** - Should have all dependencies
5. **vite.config.js** - Should have React plugin

### Get More Help

1. Check error message in terminal
2. Check browser console
3. Search error on Google/Stack Overflow
4. Check GitHub issues for similar problems

---

## ✅ Verification Steps

### Test 1: Server Running
```bash
npm run dev
# Should show: Local: http://localhost:5173
```

### Test 2: Styles Loading
- Open http://localhost:5173
- Should see yellow accent colors
- Should see proper layout (not plain HTML)

### Test 3: Dark Mode
- Click sun/moon icon in navbar
- Background should change
- Colors should invert

### Test 4: Cart Functionality
- Click on a product
- Select size
- Click "Add to Cart"
- Cart badge should update

### Test 5: Navigation
- Click different pages
- URL should change
- Content should update

---

## 🎯 Performance Issues

### Slow Loading
- Check internet connection (for Unsplash images)
- Clear browser cache
- Close other applications
- Check CPU/RAM usage

### Slow Build
```bash
# Use production build
npm run build

# Preview production build
npm run preview
```

---

## 📞 Emergency Reset

If nothing works, start fresh:

```bash
# Backup your customizations first!

# Delete everything except src/ and public/
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Restart
npm run dev
```

---

**Most issues are solved by restarting the dev server or clearing caches!** 🎉
