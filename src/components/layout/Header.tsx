import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-blue-900 font-bold text-2xl">TechGadget</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link to="/products/phones" className="text-gray-700 hover:text-blue-900 transition-colors">
              Phones
            </Link>
            <Link to="/products/laptops" className="text-gray-700 hover:text-blue-900 transition-colors">
              Laptops
            </Link>
            <Link to="/products/tablets" className="text-gray-700 hover:text-blue-900 transition-colors">
              Tablets
            </Link>
            <Link to="/products/monitors" className="text-gray-700 hover:text-blue-900 transition-colors">
              Monitors
            </Link>
            <Link to="/products/printers" className="text-gray-700 hover:text-blue-900 transition-colors">
              Printers
            </Link>
          </nav>

          {/* Search, Cart, and User Icons */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-blue-900 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition-colors"
              >
                <Search size={20} />
              </button>
            </form>

            <Link to="/cart" className="relative text-gray-700 hover:text-blue-900 transition-colors">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-900 transition-colors flex items-center">
                  <User size={24} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    Signed in as <span className="font-medium">{user?.name}</span>
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Orders
                  </Link>
                  <button 
                    onClick={logout} 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-blue-900 transition-colors">
                <User size={24} />
              </Link>
            )}

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-900 transition-colors"
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-900 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-blue-900 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-blue-900">Menu</h2>
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8 px-4">
              <ul className="space-y-6">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/phones" 
                    className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    Phones
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/laptops" 
                    className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/tablets" 
                    className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/monitors" 
                    className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    Monitors
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/printers" 
                    className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    Printers
                  </Link>
                </li>
                {isAuthenticated ? (
                  <>
                    <li>
                      <Link 
                        to="/profile" 
                        className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                        onClick={toggleMenu}
                      >
                        Your Profile
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/orders" 
                        className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                        onClick={toggleMenu}
                      >
                        Your Orders
                      </Link>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          logout();
                          toggleMenu();
                        }} 
                        className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                      >
                        Sign out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link 
                      to="/login" 
                      className="text-gray-700 hover:text-blue-900 text-lg font-medium"
                      onClick={toggleMenu}
                    >
                      Sign in
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;