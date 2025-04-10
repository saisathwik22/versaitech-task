import React, { useState, useMemo } from 'react';
import { FilterState, Product, SortOption } from '../../../types/product';
import { ProductCard } from './ProductCard';
import { FiltersSidebar } from './FiltersSidebar';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../../../data/mockProducts';

/**
 * ProductListPage Component
 * 
 * Displays a grid of products with filtering and sorting capabilities.
 * Features:
 * - Responsive grid layout
 * - Category filtering
 * - Price range filtering
 * - Rating-based filtering
 * - Multiple sort options
 * - Mobile-friendly filter toggle
 */
export const ProductListPage: React.FC = () => {
  // State for managing filters, sort order, and mobile filter visibility
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 2000],
    rating: null,
  });
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories from products for filter options
  const categories = useMemo(() => 
    Array.from(new Set(products.map((p) => p.category))),
    []
  );

  // Apply filters and sorting to products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Apply price range filter
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Apply rating filter
    if (filters.rating) {
      result = result.filter((p) => p.rating >= filters.rating!);
    }

    // Apply sorting based on selected option
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // In a real app, we'd sort by date
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filters Toggle Button */}
          <button
            className="md:hidden flex items-center gap-2 text-gray-600"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters Sidebar - Hidden on mobile unless toggled */}
          <div className={`
            ${showFilters ? 'block' : 'hidden'}
            md:block transition-all duration-200
          `}>
            <FiltersSidebar
              filters={filters}
              onFiltersChange={setFilters}
              categories={categories}
            />
          </div>

          {/* Product Grid Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Products ({filteredProducts.length})
              </h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border-gray-300 text-gray-700"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};