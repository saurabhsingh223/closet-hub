// Shopping cart page
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, size, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart({ productId, size }));
    } else {
      dispatch(updateQuantity({ productId, size, quantity: newQuantity }));
    }
  };

  const handleRemove = (productId, size) => {
    if (confirm('Remove this item from cart?')) {
      dispatch(removeFromCart({ productId, size }));
    }
  };

  const handleClearCart = () => {
    if (confirm('Clear all items from cart?')) {
      dispatch(clearCart());
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link
              to="/products"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white 
                       font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart ({totalItems} items)
          </h1>
          <button
            onClick={handleClearCart}
            className="text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.product.brand}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Size: <span className="font-medium">{item.size}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.product.id, item.size)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.size, item.quantity - 1)
                          }
                          className="p-1 rounded-md bg-gray-100 dark:bg-gray-700 
                                   hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Minus className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                        </button>
                        <span className="text-gray-900 dark:text-white font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product.id, item.size, item.quantity + 1)
                          }
                          className="p-1 rounded-md bg-gray-100 dark:bg-gray-700 
                                   hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Plus className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          ₹{item.product.price * item.quantity}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          ₹{item.product.price} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (18% GST)</span>
                  <span>₹{Math.round(totalPrice * 0.18)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>₹{Math.round(totalPrice * 1.18)}</span>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-2"
                />
                <button className="w-full py-2 px-4 rounded-lg border border-yellow-500 
                                 text-yellow-500 hover:bg-yellow-50 dark:hover:bg-gray-700 
                                 font-medium transition-colors">
                  Apply Code
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white 
                               font-bold py-3 px-4 rounded-lg transition-colors mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center text-yellow-500 hover:text-yellow-600 
                         font-medium transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
