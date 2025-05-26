import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronRight, Truck } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id));
      setProduct(productData || null);
      
      if (productData) {
        document.title = `${productData.name} - TechGadget`;
      } else {
        document.title = 'Product Not Found - TechGadget';
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
  }, [id]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && product && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link 
          to="/products" 
          className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }
  
  const finalPrice = product.discount ? product.price - product.discount : product.price;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <nav className="flex">
          <ol className="flex items-center space-x-1 text-gray-500 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-900">Home</Link>
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} />
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-900">Products</Link>
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} />
            </li>
            <li>
              <Link to={`/products/${product.category}`} className="hover:text-blue-900">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} />
            </li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-8">
            <div className="relative">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto rounded-md"
              />
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Save ${product.discount}
                </div>
              )}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-8 bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                    className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
            </div>
            
            <div className="mb-6">
              {product.discount ? (
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">${finalPrice}</span>
                  <span className="text-xl text-gray-500 line-through ml-2">${product.price}</span>
                  <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded">
                    Save {((product.discount / product.price) * 100).toFixed(0)}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Truck size={16} className="mr-2" />
                <span>Free shipping on orders over $100</span>
              </div>
              
              <div className="text-sm">
                <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.stock > 0 && (
                  <span className="text-gray-600 ml-2">
                    ({product.stock} {product.stock === 1 ? 'unit' : 'units'} available)
                  </span>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Quantity</label>
              <div className="flex">
                <button 
                  onClick={decrementQuantity}
                  className="px-4 py-2 bg-gray-200 rounded-l-md hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  min="1" 
                  max={product.stock}
                  className="w-16 text-center border-t border-b"
                />
                <button 
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium flex items-center transition-colors"
                disabled={product.stock === 0}
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              
              <button className="border border-gray-300 hover:border-blue-900 hover:text-blue-900 px-4 py-3 rounded-md flex items-center transition-colors">
                <Heart size={20} className="mr-2" />
                Wishlist
              </button>
              
              <button className="border border-gray-300 hover:border-blue-900 hover:text-blue-900 px-4 py-3 rounded-md flex items-center transition-colors">
                <Share2 size={20} className="mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs for product information */}
        <div className="border-t">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 font-medium text-center ${
                activeTab === 'description' 
                ? 'text-blue-900 border-b-2 border-blue-900' 
                : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab('features')}
              className={`px-6 py-4 font-medium text-center ${
                activeTab === 'features' 
                ? 'text-blue-900 border-b-2 border-blue-900' 
                : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-4 font-medium text-center ${
                activeTab === 'specifications' 
                ? 'text-blue-900 border-b-2 border-blue-900' 
                : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Specifications
            </button>
          </div>
          
          <div className="p-8">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-4 h-4 bg-blue-900 rounded-full mt-1.5 mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="divide-y">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="py-3 flex">
                    <div className="w-1/3 font-medium text-gray-900">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    <div className="w-2/3 text-gray-700">{value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;