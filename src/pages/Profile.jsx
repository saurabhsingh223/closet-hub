// User profile page
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/userSlice';
import { User, Mail, Phone, MapPin, Edit2, Save, ShoppingBag, Heart, Settings, LogOut, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateUser(formData));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with gradient */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center 
                                justify-center mx-auto mb-4 shadow-lg">
                    <User className="h-14 w-14 text-white" />
                  </div>
                  <button className="absolute bottom-4 right-0 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg 
                                   hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <Camera className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{user.email}</p>
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 
                               text-xs font-semibold rounded-full">Active Member</span>
              </div>

              <nav className="space-y-2">
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-yellow-50 to-yellow-100 
                           dark:from-gray-700 dark:to-gray-600 text-yellow-600 dark:text-yellow-400 font-medium 
                           shadow-sm hover:shadow-md transition-all"
                >
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:translate-x-1"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>My Orders</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:translate-x-1"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shopping Cart</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:translate-x-1"
                >
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:translate-x-1"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
                <button
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 
                           hover:bg-red-50 dark:hover:bg-red-900/20 transition-all hover:translate-x-1 w-full"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Profile Information
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 
                             hover:from-yellow-500 hover:to-yellow-700 text-white px-5 py-2.5 rounded-lg 
                             font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Edit2 className="h-5 w-5" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 
                               hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 rounded-lg 
                               font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      <Save className="h-5 w-5" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-5 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 
                               text-gray-700 dark:text-gray-300 hover:bg-gray-100 
                               dark:hover:bg-gray-700 font-semibold transition-all hover:scale-105"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium 
                                  text-gray-700 dark:text-gray-300 mb-2">
                    <User className="h-4 w-4" />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-yellow-500
                             disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium 
                                  text-gray-700 dark:text-gray-300 mb-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-yellow-500
                             disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium 
                                  text-gray-700 dark:text-gray-300 mb-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-yellow-500
                             disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium 
                                  text-gray-700 dark:text-gray-300 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Address</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-yellow-500
                             disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Account Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Account Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 
                                rounded-xl p-5 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Orders</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2 this month</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 
                                rounded-xl p-5 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Spent</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">₹7,796</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Lifetime value</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 
                                rounded-xl p-5 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Wishlist Items</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">Saved items</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 
                                rounded-xl p-5 shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Rewards Points</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">780</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Available points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
