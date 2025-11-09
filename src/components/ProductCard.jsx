// Product card component
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { ShoppingCart, Check } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    dispatch(addToCart({ product, size: selectedSize }));
    setAdded(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                    hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
                    border border-gray-100 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
          NEW
        </div>
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
          -30%
        </div>
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.brand}</p>
        
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
            ₹{Math.round(product.price * 1.4)}
          </span>
        </div>

        {/* Size Selection */}
        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Size:
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all
                  ${selectedSize === size
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2
                     shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95
            ${added
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
              : 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white'
            }`}
        >
          {added ? (
            <>
              <Check className="h-5 w-5" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
