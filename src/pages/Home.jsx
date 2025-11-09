// Home page with hero carousel and category sections
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  // Get featured products (first 8)
  const featuredProducts = products.slice(0, 8);

  // Get products by category for display sections
  const getCategoryProducts = (categoryId, limit = 4) => {
    return products.filter(p => p.category === categoryId).slice(0, limit);
  };

  // Category-specific images - Replace with your own images later
  const categoryImages = {
    jeans: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop',
    hoodies: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
    tshirts: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    jackets: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
    shirts: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
    sweatshirts: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=300&fit=crop',
    shorts: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop',
    sweaters: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      {/* Hero Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        <HeroCarousel />
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="text-yellow-500 text-3xl mb-2">🚚</div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Free Shipping</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">On orders above ₹999</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="text-yellow-500 text-3xl mb-2">🔄</div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Easy Returns</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">30-day return policy</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="text-yellow-500 text-3xl mb-2">💳</div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Secure Payment</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">100% secure checkout</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="text-yellow-500 text-3xl mb-2">⭐</div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Premium Quality</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Verified products</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Discover our curated collection of premium fashion
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {categories.slice(1).map(category => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative h-48 rounded-lg overflow-hidden shadow-md 
                       hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Image - Replace with your own images */}
              <img
                src={categoryImages[category.id] || 'https://via.placeholder.com/400x300/eab308/ffffff?text=' + category.name}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              {/* Category Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-gray-800/50 rounded-2xl my-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Handpicked favorites just for you</p>
          </div>
          <Link
            to="/products"
            className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white 
                     font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl
                     transform hover:scale-105 transition-all duration-200"
          >
            <span>View All</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trending Jeans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trending Jeans
          </h2>
          <Link
            to="/products?category=jeans"
            className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 
                     font-medium transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCategoryProducts('jeans').map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Winter Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Winter Collection
          </h2>
          <Link
            to="/products?type=winterwear"
            className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 
                     font-medium transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCategoryProducts('hoodies').map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-white font-semibold text-sm">🎉 SPECIAL OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get 20% Off on Your First Order!
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join our fashion community and enjoy exclusive discounts, early access to new collections, and special member benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 font-bold py-4 px-10 rounded-lg 
                               hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
                Sign Up Now
              </button>
              <Link 
                to="/products"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg 
                         hover:bg-white hover:text-yellow-600 transition-all transform hover:scale-105"
              >
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with Latest Trends
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter and never miss out on new arrivals, exclusive deals, and fashion tips
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold 
                               px-8 py-3 rounded-lg shadow-lg hover:shadow-xl
                               transform hover:scale-105 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
