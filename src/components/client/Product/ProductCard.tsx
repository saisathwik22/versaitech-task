import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../types/product';
import { RatingStars } from './RatingStars';
import { PriceTag } from './PriceTag';

/**
 * ProductCard Component
 * 
 * Displays a product in a card format for the product grid.
 * Features:
 * - Responsive image display
 * - Product name with truncation
 * - Rating display
 * - Price formatting
 * - Category tag
 * - Hover effects
 * - Click navigation to product detail
 * 
 * @param product - Product data to display
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      {/* Product Information */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <RatingStars rating={product.rating} />
          <span className="text-sm text-gray-600">
            ({product.reviews})
          </span>
        </div>
        <PriceTag price={product.price} className="text-xl" />
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};