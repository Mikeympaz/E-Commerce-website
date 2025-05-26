import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductGrid from '../components/product/ProductGrid';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <HeroBanner />
      <div className="container mx-auto px-4">
        <FeaturedCategories />
        
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our best deals on premium electronics from the world's leading brands.
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} />
          
          <div className="text-center mt-8">
            <a 
              href="/products" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Products
            </a>
          </div>
        </section>

        <section className="py-16 bg-gray-50 -mx-4 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose TechGadget?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Free shipping on orders over $100. Same-day delivery available in select areas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Warranty Guaranteed</h3>
                <p className="text-gray-600">All products come with manufacturer warranty. Extended warranty options available.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">Multiple payment options with secure checkout. Flexible payment plans available.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="bg-blue-900 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-8">Stay updated with our latest products, exclusive deals, and tech news.</p>
            
            <form className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-r-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;