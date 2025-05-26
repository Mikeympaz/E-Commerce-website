import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import CategoryFilter from '../components/product/CategoryFilter';
import { getProductsByCategory, searchProducts } from '../data/products';
import { Product } from '../types';
import { SlidersHorizontal } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    let filteredProducts: Product[];
    
    if (searchQuery) {
      filteredProducts = searchProducts(searchQuery);
      document.title = `Search: ${searchQuery} - TechGadget`;
    } else {
      filteredProducts = getProductsByCategory(category || 'all');
      document.title = category ? 
        `${category.charAt(0).toUpperCase() + category.slice(1)} - TechGadget` : 
        'All Products - TechGadget';
    }
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => {
      const finalPrice = product.discount ? product.price - product.discount : product.price;
      return finalPrice >= priceRange[0] && finalPrice <= priceRange[1];
    });
    
    // Apply sorting
    switch(sortBy) {
      case 'price-asc':
        filteredProducts.sort((a, b) => {
          const priceA = a.discount ? a.price - a.discount : a.price;
          const priceB = b.discount ? b.price - b.discount : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => {
          const priceA = a.discount ? a.price - a.discount : a.price;
          const priceB = b.discount ? b.price - b.discount : b.price;
          return priceB - priceA;
        });
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For this example, we don't have a date field, so we'll just sort by ID
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      // featured is default, no sorting needed
    }
    
    setProducts(filteredProducts);
  }, [category, searchQuery, sortBy, priceRange]);
  
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    if (index === 0 && newValue > priceRange[1]) {
      newRange[1] = newValue;
    } else if (index === 1 && newValue < priceRange[0]) {
      newRange[0] = newValue;
    }
    setPriceRange(newRange as [number, number]);
  };

  const pageTitle = searchQuery 
    ? `Search results for "${searchQuery}"`
    : category 
      ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
      : 'All Products';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{pageTitle}</h1>
      
      <div className="lg:flex gap-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button 
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Sidebar with filters */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <CategoryFilter />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Price Range</h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <div className="mb-4">
                <input 
                  type="range" 
                  min="0" 
                  max="3000" 
                  value={priceRange[0]} 
                  onChange={(e) => handlePriceRangeChange(e, 0)}
                  className="w-full"
                />
                <input 
                  type="range" 
                  min="0" 
                  max="3000" 
                  value={priceRange[1]} 
                  onChange={(e) => handlePriceRangeChange(e, 1)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">Min</label>
                  <input 
                    type="number" 
                    id="min-price"
                    min="0" 
                    value={priceRange[0]} 
                    onChange={(e) => handlePriceRangeChange(e, 0)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">Max</label>
                  <input 
                    type="number" 
                    id="max-price"
                    min="0" 
                    value={priceRange[1]} 
                    onChange={(e) => handlePriceRangeChange(e, 1)}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-gray-600">{products.length} products found</p>
              </div>
              <div className="flex items-center">
                <label htmlFor="sort-by" className="text-gray-700 mr-2">Sort by:</label>
                <select 
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
          
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;