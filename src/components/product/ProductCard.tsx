import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Save ${product.discount}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-900 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {product.discount ? (
              <>
                <span className="text-xl font-bold text-gray-900">${product.price - product.discount}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${product.price}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="bg-blue-900 text-white p-2 rounded-full hover:bg-orange-500 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;