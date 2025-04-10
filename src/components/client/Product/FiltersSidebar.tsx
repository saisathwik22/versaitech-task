import React from 'react';
import { FilterState } from '../../../types/product';
import { Sliders, Star } from 'lucide-react';

/**
 * FiltersSidebar Component
 * 
 * Provides filtering controls for the product list.
 * Features:
 * - Category selection with checkboxes
 * - Price range slider
 * - Minimum rating selection
 * 
 * @param filters - Current filter state
 * @param onFiltersChange - Callback for filter updates
 * @param categories - Available product categories
 */
export const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  filters,
  onFiltersChange,
  categories,
}) => {
  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Category Filter Section */}
        <div>
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, category]
                      : filters.categories.filter((c) => c !== category);
                    onFiltersChange({ ...filters, categories: newCategories });
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter Section */}
        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) => {
                onFiltersChange({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)],
                });
              }}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Rating Filter Section */}
        <div>
          <h3 className="font-medium mb-3">Minimum Rating</h3>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => {
                    onFiltersChange({ ...filters, rating });
                  }}
                  className="border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div className="flex items-center gap-1">
                  {Array(rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  <span className="text-sm">& up</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};