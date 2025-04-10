import React from 'react';

/**
 * PriceTag Component
 * 
 * Displays a formatted price value.
 * Features:
 * - Locale-aware price formatting
 * - Currency symbol
 * - Customizable styling
 * 
 * @param price - Numeric price value
 * @param className - Additional CSS classes
 */
export const PriceTag: React.FC<PriceTagProps> = ({ price, className = '' }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <span className={`font-semibold ${className}`}>
      {formattedPrice}
    </span>
  );
};