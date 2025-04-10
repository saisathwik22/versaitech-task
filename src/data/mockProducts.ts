import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music enthusiasts and professionals.',
    price: 299.99,
    rating: 4.5,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800'
    ],
    category: 'Audio',
    tags: ['wireless', 'headphones', 'premium']
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking, notifications, and a beautiful OLED display.',
    price: 399.99,
    rating: 4.8,
    reviews: 256,
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800'
    ],
    category: 'Wearables',
    tags: ['smartwatch', 'fitness', 'tech']
  },
  {
    id: '3',
    name: 'Ultra HD Camera',
    description: 'Professional-grade camera with 4K video capabilities and advanced autofocus system.',
    price: 1299.99,
    rating: 4.7,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800'
    ],
    category: 'Cameras',
    tags: ['camera', 'professional', '4k']
  },
  {
    id: '4',
    name: 'Gaming Laptop Pro',
    description: 'High-performance gaming laptop with RTX graphics and 165Hz display. Perfect for competitive gaming.',
    price: 1899.99,
    rating: 4.9,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800'
    ],
    category: 'Computers',
    tags: ['gaming', 'laptop', 'rtx']
  },
  {
    id: '5',
    name: 'Wireless Gaming Mouse',
    description: 'Ultra-responsive wireless gaming mouse with RGB lighting and customizable buttons.',
    price: 79.99,
    rating: 4.6,
    reviews: 342,
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800'
    ],
    category: 'Gaming',
    tags: ['mouse', 'gaming', 'wireless']
  },
  {
    id: '6',
    name: 'Mechanical Keyboard',
    description: 'Premium mechanical keyboard with RGB backlighting and hot-swappable switches.',
    price: 159.99,
    rating: 4.7,
    reviews: 218,
    images: [
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800'
    ],
    category: 'Gaming',
    tags: ['keyboard', 'mechanical', 'rgb']
  },
  {
    id: '7',
    name: 'Portable SSD 1TB',
    description: 'Ultra-fast portable SSD with 1TB storage and USB-C connectivity.',
    price: 199.99,
    rating: 4.8,
    reviews: 167,
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800',
      'https://images.unsplash.com/photo-1601737487795-dab272f52420?w=800'
    ],
    category: 'Storage',
    tags: ['ssd', 'portable', 'storage']
  },
  {
    id: '8',
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with active noise cancellation and premium sound quality.',
    price: 249.99,
    rating: 4.6,
    reviews: 432,
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
      'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=800'
    ],
    category: 'Audio',
    tags: ['earbuds', 'wireless', 'premium']
  },
  {
    id: '9',
    name: '4K Gaming Monitor',
    description: '32-inch 4K gaming monitor with 144Hz refresh rate and HDR support.',
    price: 699.99,
    rating: 4.8,
    reviews: 189,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
      'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800'
    ],
    category: 'Monitors',
    tags: ['monitor', '4k', 'gaming']
  },
  {
    id: '10',
    name: 'Streaming Microphone',
    description: 'Professional USB microphone perfect for streaming, podcasting, and recording.',
    price: 129.99,
    rating: 4.7,
    reviews: 276,
    images: [
      'https://images.unsplash.com/photo-1583609252423-9d5c5dc84afb?w=800',
      'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800'
    ],
    category: 'Audio',
    tags: ['microphone', 'streaming', 'usb']
  },
  {
    id: '11',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    rating: 4.5,
    reviews: 543,
    images: [
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800',
      'https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?w=800'
    ],
    category: 'Accessories',
    tags: ['charging', 'wireless', 'qi']
  },
  {
    id: '12',
    name: 'Webcam 4K Pro',
    description: '4K webcam with auto-focus and built-in microphone for professional video calls.',
    price: 199.99,
    rating: 4.6,
    reviews: 167,
    images: [
      'https://images.unsplash.com/photo-1622959588758-ee2d0f7f4133?w=800',
      'https://images.unsplash.com/photo-1587826080692-f439cd0c2f34?w=800'
    ],
    category: 'Cameras',
    tags: ['webcam', '4k', 'streaming']
  }
];