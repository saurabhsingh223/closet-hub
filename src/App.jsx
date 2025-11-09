// Main App component with routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './context/ThemeContext';
import { AuthModalProvider, useAuthModal } from './context/AuthModalContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

function AppContent() {
  const { isOpen, mode, close } = useAuthModal();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Auth Modal - Rendered at App level */}
      <AuthModal isOpen={isOpen} onClose={close} initialMode={mode} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthModalProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
