// Navigation bar component
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Moon, Sun, Menu, X, LogIn } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuthModal } from '../context/AuthModalContext';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { categories } from '../data/products';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { openLogin, openSignup } = useAuthModal();
  const { totalItems } = useSelector(state => state.cart);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              ClosetHub
            </div>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 
                         font-medium transition-colors"
              >
                Categories
              </button>
              {showCategories && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 
                           rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700 z-50"
                >
                  {categories.map(cat => (
                    <Link
                      key={cat.id}
                      to={`/products?category=${cat.id}`}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 
                               hover:bg-yellow-50 dark:hover:bg-gray-700 hover:text-yellow-600
                               transition-colors"
                      onClick={() => setShowCategories(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500 
                       font-medium transition-colors"
            >
              Products
            </Link>

            {/* Auth Button with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowAuthMenu(true)}
              onMouseLeave={() => setShowAuthMenu(false)}
            >
              <button
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 
                         hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold 
                         px-4 py-1.5 rounded-lg text-sm shadow-md hover:shadow-lg 
                         transform hover:scale-105 transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>Account</span>
              </button>
              
              {/* Dropdown Menu */}
              {showAuthMenu && (
                <div
                  className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-gray-800 
                           rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700 z-50"
                >
                  <button
                    onClick={() => {
                      openLogin();
                      setShowAuthMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 
                             hover:bg-yellow-50 dark:hover:bg-gray-700 hover:text-yellow-600
                             transition-colors flex items-center space-x-2"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={() => {
                      openSignup();
                      setShowAuthMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 
                             hover:bg-yellow-50 dark:hover:bg-gray-700 hover:text-yellow-600
                             transition-colors flex items-center space-x-2"
                  >
                    <User className="h-4 w-4" />
                    <span>Sign Up</span>
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs 
                               rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <User className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {showMenu ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/products"
              className="block text-gray-700 dark:text-gray-300 hover:text-yellow-500 font-medium"
              onClick={() => setShowMenu(false)}
            >
              All Products
            </Link>
            {categories.slice(1).map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="block text-gray-700 dark:text-gray-300 hover:text-yellow-500"
                onClick={() => setShowMenu(false)}
              >
                {cat.name}
              </Link>
            ))}
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <button
                onClick={() => {
                  openLogin();
                  setShowMenu(false);
                }}
                className="w-full flex items-center justify-center space-x-2 text-gray-700 
                         dark:text-gray-300 hover:text-yellow-500 font-medium py-2 px-4 
                         border-2 border-gray-200 dark:border-gray-700 rounded-lg transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
              <button
                onClick={() => {
                  openSignup();
                  setShowMenu(false);
                }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 
                         hover:to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg
                         shadow-md hover:shadow-lg transition-all"
              >
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                onClick={() => setShowMenu(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({totalItems})</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                onClick={() => setShowMenu(false)}
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
