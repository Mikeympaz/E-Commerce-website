import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Tablet, Monitor, Printer } from 'lucide-react';

const categories = [
  { 
    id: 'phones', 
    name: 'Smartphones', 
    icon: Smartphone, 
    color: 'bg-blue-500', 
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg'
  },
  { 
    id: 'laptops', 
    name: 'Laptops', 
    icon: Laptop, 
    color: 'bg-purple-500', 
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg'
  },
  { 
    id: 'tablets', 
    name: 'Tablets', 
    icon: Tablet, 
    color: 'bg-orange-500', 
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg'
  },
  { 
    id: 'monitors', 
    name: 'Monitors', 
    icon: Monitor, 
    color: 'bg-teal-500', 
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
  },
  { 
    id: 'printers', 
    name: 'Printers', 
    icon: Printer, 
    color: 'bg-red-500', 
    image: 'https://images.pexels.com/photos/6636713/pexels-photo-6636713.jpeg'
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Browse Categories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map(category => {
            const Icon = category.icon;
            
            return (
              <Link 
                key={category.id}
                to={`/products/${category.id}`} 
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2">
                  <div className="relative h-40">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-30 group-hover:opacity-0 transition-opacity"></div>
                    <div className={`absolute bottom-0 left-0 right-0 ${category.color} p-3 flex items-center justify-between`}>
                      <span className="text-white font-medium">{category.name}</span>
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;