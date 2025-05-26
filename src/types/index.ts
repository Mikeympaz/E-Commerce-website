export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount?: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  imageUrl: string;
  stock: number;
  rating: number;
  reviews: number;
}

export type Category = 'phones' | 'laptops' | 'tablets' | 'monitors' | 'printers' | 'all';

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}