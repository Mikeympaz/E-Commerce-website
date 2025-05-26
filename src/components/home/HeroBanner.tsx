import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the Latest Tech Gadgets</h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Explore our premium selection of phones, laptops, tablets, monitors, and printers.
              Find the perfect device to match your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center"
              >
                Shop Now <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/products/phones"
                className="bg-transparent border border-white hover:bg-white hover:text-blue-900 transition-colors px-6 py-3 rounded-md font-medium"
              >
                Featured Phones
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
              alt="Tech devices showcase"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white px-4 py-2 rounded-md font-bold text-lg shadow-lg">
              New Arrivals
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroBanner;