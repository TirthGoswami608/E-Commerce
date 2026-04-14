import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [selectedCategory, priceRange, searchQuery]);

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">Browse our collection of premium organic honey</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-amber-600"
                  />
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
