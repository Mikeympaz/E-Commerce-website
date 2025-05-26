import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [orderComplete, setOrderComplete] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleShippingChange = (method: string) => {
    setShippingMethod(method);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    setOrderComplete(true);
    
    // Clear cart after successful order
    clearCart();
    
    // In a real app, you'd submit the order to your backend here
  };
  
  const shippingPrice = shippingMethod === 'express' ? 15 : (totalPrice >= 100 ? 0 : 10);
  const taxAmount = totalPrice * 0.08;
  const totalAmount = totalPrice + shippingPrice + taxAmount;
  
  if (cartItems.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }
  
  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Completed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      <div className="lg:flex lg:gap-8">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>
            </div>
            
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formState.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formState.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-gray-700 mb-2">State</label>
                    <input 
                      type="text" 
                      id="state" 
                      name="state" 
                      value={formState.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-gray-700 mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode" 
                      value={formState.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="country" className="block text-gray-700 mb-2">Country</label>
                  <select 
                    id="country" 
                    name="country" 
                    value={formState.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-gray-800 mb-4">Shipping Method</h3>
                  
                  <div className="space-y-4">
                    <div 
                      className={`border rounded-md p-4 cursor-pointer flex items-start ${
                        shippingMethod === 'standard' ? 'border-blue-900 bg-blue-50' : ''
                      }`}
                      onClick={() => handleShippingChange('standard')}
                    >
                      <input 
                        type="radio" 
                        id="shipping-standard" 
                        name="shippingMethod" 
                        value="standard" 
                        checked={shippingMethod === 'standard'}
                        onChange={() => handleShippingChange('standard')}
                        className="mt-1 mr-3"
                      />
                      <div>
                        <label htmlFor="shipping-standard" className="font-medium text-gray-800 block cursor-pointer">
                          Standard Shipping
                        </label>
                        <p className="text-sm text-gray-600">
                          {totalPrice >= 100 ? 'Free' : '$10.00'} - Delivery in 5-7 business days
                        </p>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer flex items-start ${
                        shippingMethod === 'express' ? 'border-blue-900 bg-blue-50' : ''
                      }`}
                      onClick={() => handleShippingChange('express')}
                    >
                      <input 
                        type="radio" 
                        id="shipping-express" 
                        name="shippingMethod" 
                        value="express" 
                        checked={shippingMethod === 'express'}
                        onChange={() => handleShippingChange('express')}
                        className="mt-1 mr-3"
                      />
                      <div>
                        <label htmlFor="shipping-express" className="font-medium text-gray-800 block cursor-pointer">
                          Express Shipping
                        </label>
                        <p className="text-sm text-gray-600">
                          $15.00 - Delivery in 1-3 business days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Payment Information</h2>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <label htmlFor="cardName" className="block text-gray-700 mb-2">Name on Card</label>
                  <input 
                    type="text" 
                    id="cardName" 
                    name="cardName" 
                    value={formState.cardName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="cardNumber" 
                      name="cardNumber" 
                      value={formState.cardNumber}
                      onChange={handleChange}
                      required
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 pl-10"
                    />
                    <CreditCard size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="expMonth" className="block text-gray-700 mb-2">Exp. Month</label>
                    <input 
                      type="text" 
                      id="expMonth" 
                      name="expMonth" 
                      value={formState.expMonth}
                      onChange={handleChange}
                      required
                      placeholder="MM"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expYear" className="block text-gray-700 mb-2">Exp. Year</label>
                    <input 
                      type="text" 
                      id="expYear" 
                      name="expYear" 
                      value={formState.expYear}
                      onChange={handleChange}
                      required
                      placeholder="YYYY"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
                    <input 
                      type="text" 
                      id="cvv" 
                      name="cvv" 
                      value={formState.cvv}
                      onChange={handleChange}
                      required
                      placeholder="XXX"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white text-center px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Complete Order
            </button>
          </form>
        </div>
        
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            </div>
            
            <div className="p-6">
              <div className="max-h-64 overflow-y-auto mb-6">
                {cartItems.map(item => {
                  const finalPrice = item.product.discount 
                    ? item.product.price - item.product.discount 
                    : item.product.price;
                    
                  return (
                    <div key={item.product.id} className="flex items-center py-4 border-b">
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-800">{item.product.name}</h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-gray-600">Qty: {item.quantity}</span>
                          <span className="font-medium">${(finalPrice * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {shippingPrice === 0 ? 'Free' : `$${shippingPrice.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900 font-medium">${taxAmount.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;