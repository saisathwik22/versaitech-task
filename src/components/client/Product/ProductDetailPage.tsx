import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { RatingStars } from './RatingStars';
import { PriceTag } from './PriceTag';
import { products } from '../../../data/mockProducts';

/**
 * ProductDetailPage Component
 * 
 * Displays detailed information about a single product.
 * Features:
 * - Image gallery with thumbnails
 * - Product information display
 * - Rating and review count
 * - Category and tag display
 * - Add to cart functionality
 * - Responsive layout
 * - Back navigation
 */
export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Track the currently selected image in the gallery
  const [selectedImage, setSelectedImage] = useState(0);

  // Find the product by ID from our data
  const product = products.find((p) => p.id === id);

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Navigation */}
        <button
          onClick={() => navigate('/products')}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to products
        </button>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery Section */}
            <div className="space-y-4">
              {/* Main Image Display */}
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnail Navigation */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      w-20 h-20 rounded-lg overflow-hidden flex-shrink-0
                      ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}
                    `}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information Section */}
            <div className="space-y-6">
              {/* Product Title and Metadata */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RatingStars rating={product.rating} size={20} />
                    <span className="text-gray-600">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{product.category}</span>
                </div>
              </div>

              {/* Price Display */}
              <PriceTag price={product.price} className="text-3xl" />

              {/* Product Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Product Tags */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};