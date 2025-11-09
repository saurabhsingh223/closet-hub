// Products page with filtering
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories, genderFilters, typeFilters } from '../data/products';
import { Filter, X } from 'lucide-react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('featured');

  // Apply filters from URL params on mount
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const gender = searchParams.get('gender') || 'all';
    const type = searchParams.get('type') || 'all';
    const search = searchParams.get('search') || '';

    setSelectedCategory(category);
    setSelectedGender(gender);
    setSelectedType(type);

    // Apply filters
    let filtered = [...products];

    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    // Gender filter
    if (gender !== 'all') {
      filtered = filtered.filter(p => p.gender === gender || p.gender === 'unisex');
    }

    // Type filter
    if (type !== 'all') {
      filtered = filtered.filter(p => p.type === type);
    }

    // Search filter
    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [searchParams, selectedCategory, selectedGender, selectedType, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedGender('all');
    setSelectedType('all');
    setPriceRange([0, 5000]);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              All Products
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 bg-yellow-500 text-white 
                     px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`lg:block ${showFilters ? 'block' : 'hidden'} 
                       lg:w-64 bg-white dark:bg-gray-800 rounded-lg p-6 h-fit sticky top-24`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="mr-2 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Gender</h3>
              <div className="space-y-2">
                {genderFilters.map(filter => (
                  <label key={filter.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedGender === filter.id}
                      onChange={() => setSelectedGender(filter.id)}
                      className="mr-2 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{filter.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Type</h3>
              <div className="space-y-2">
                {typeFilters.map(filter => (
                  <label key={filter.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === filter.id}
                      onChange={() => setSelectedType(filter.id)}
                      className="mr-2 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{filter.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Price Range
              </h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-yellow-500"
                />
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No products found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-yellow-500 hover:text-yellow-600 font-medium"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
