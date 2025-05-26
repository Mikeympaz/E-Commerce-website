import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Smartphone, Laptop, Tablet, Monitor, Printer, LayoutGrid 
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products', icon: LayoutGrid },
  { id: 'phones', name: 'Phones', icon: Smartphone },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
  { id: 'tablets', name: 'Tablets', icon: Tablet },
  { id: 'monitors', name: 'Monitors', icon: Monitor },
  { id: 'printers', name: 'Printers', icon: Printer },
];

const CategoryFilter: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const currentCategory = category || 'all';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-gray-800">Categories</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <li key={cat.id}>
                <Link
                  to={cat.id === 'all' ? '/products' : `/products/${cat.id}`}
                  className={`flex items-center p-2 rounded-md transition-colors ${
                    currentCategory === cat.id
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} className="mr-2" />
                  <span>{cat.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;