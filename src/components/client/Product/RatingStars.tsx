import React from 'react';
import { Star, StarHalf } from 'lucide-react';

/**
 * RatingStars Component
 * 
 * Displays a star rating visualization.
 * Features:
 * - Full and half star support
 * - Customizable star size
 * - Empty stars for remaining rating
 * 
 * @param rating - Rating value (0-5)
 * @param size - Size of star icons in pixels
 */
export const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`star-${i}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
      {/* Half Star */}
      {hasHalfStar && (
        <StarHalf
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      )}
      {/* Empty Stars */}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star
          key={`empty-star-${i}`}
          size={size}
          className="text-gray-300"
        />
      ))}
    </div>
  );
};