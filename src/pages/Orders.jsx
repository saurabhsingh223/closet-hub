// Orders history page
import { useSelector } from 'react-redux';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { orders } = useSelector(state => state.user);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'In Transit':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'Processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Orders
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and manage your orders
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No orders yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Start shopping to see your orders here
            </p>
            <Link
              to="/products"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white 
                       font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                {/* Order Header */}
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b 
                              border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Order ID</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {order.id}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Order Date</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {new Date(order.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ₹{order.total}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Size: {item.size} | Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ₹{item.price}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 
                                flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 py-2 px-4 rounded-lg border border-yellow-500 
                                     text-yellow-500 hover:bg-yellow-50 dark:hover:bg-gray-700 
                                     font-medium transition-colors">
                      Track Order
                    </button>
                    {order.status === 'Delivered' && (
                      <button className="flex-1 py-2 px-4 rounded-lg border border-gray-300 
                                       dark:border-gray-600 text-gray-700 dark:text-gray-300 
                                       hover:bg-gray-100 dark:hover:bg-gray-700 
                                       font-medium transition-colors">
                        Download Invoice
                      </button>
                    )}
                    <button className="flex-1 py-2 px-4 rounded-lg border border-gray-300 
                                     dark:border-gray-600 text-gray-700 dark:text-gray-300 
                                     hover:bg-gray-100 dark:hover:bg-gray-700 
                                     font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-yellow-50 dark:bg-gray-800 rounded-lg p-6 border 
                      border-yellow-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Need Help?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Have questions about your order? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white 
                             font-medium py-2 px-6 rounded-lg transition-colors">
              Contact Support
            </button>
            <button className="border border-yellow-500 text-yellow-500 
                             hover:bg-yellow-50 dark:hover:bg-gray-700 
                             font-medium py-2 px-6 rounded-lg transition-colors">
              View FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
