import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
      
      <div className="lg:flex lg:gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6 border-b">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-gray-800">Cart Items ({cartItems.length})</h2>
              </div>
            </div>
            
            <div className="divide-y">
              {cartItems.map(item => {
                const finalPrice = item.product.discount 
                  ? item.product.price - item.product.discount 
                  : item.product.price;
                  
                return (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row">
                    <div className="sm:w-32 sm:h-32 mb-4 sm:mb-0">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="sm:ml-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-1">
                            <Link to={`/product/${item.product.id}`} className="hover:text-blue-900">
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">{item.product.category}</p>
                        </div>
                        
                        <div className="flex items-center mb-4 sm:mb-0">
                          {item.product.discount ? (
                            <div className="flex flex-col items-end">
                              <span className="text-lg font-bold text-gray-900">${finalPrice}</span>
                              <span className="text-sm text-gray-500 line-through">${item.product.price}</span>
                            </div>
                          ) : (
                            <span className="text-lg font-bold text-gray-900">${item.product.price}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            max={item.product.stock}
                            value={item.quantity} 
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            className="w-12 text-center border-t border-b"
                          />
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 sticky top-24">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {totalPrice >= 100 ? 'Free' : '$10.00'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900 font-medium">${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">
                      ${(totalPrice + (totalPrice < 100 ? 10 : 0) + (totalPrice * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/checkout"
                  className="block w-full bg-blue-900 text-white text-center px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
                >
                  Proceed to Checkout <ArrowRight size={18} className="inline ml-2" />
                </Link>
                
                <Link
                  to="/products"
                  className="block w-full text-center mt-4 text-blue-900 hover:text-blue-800 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;