import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechGadget</h3>
            <p className="mb-4">Your one-stop shop for premium electronic devices with expert advice and dedicated customer service.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/phones" className="hover:text-orange-500 transition-colors">Phones</Link>
              </li>
              <li>
                <Link to="/products/laptops" className="hover:text-orange-500 transition-colors">Laptops</Link>
              </li>
              <li>
                <Link to="/products/tablets" className="hover:text-orange-500 transition-colors">Tablets</Link>
              </li>
              <li>
                <Link to="/products/monitors" className="hover:text-orange-500 transition-colors">Monitors</Link>
              </li>
              <li>
                <Link to="/products/printers" className="hover:text-orange-500 transition-colors">Printers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Iyunga, Mbeya City</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+255 (74) 709-3528</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>mdmpazi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-blue-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-blue-200">Get the latest updates on new products and special sales</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full md:w-64 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button 
                type="button" 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-r-md font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TechGadget. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;