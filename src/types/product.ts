export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  tags: string[];
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'newest';

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  rating: number | null;
}