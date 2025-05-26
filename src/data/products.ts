import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "phones",
    price: 999,
    discount: 50,
    description: "The most advanced iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
    features: [
      "A17 Pro chip for breakthrough performance",
      "Titanium design, the lightest Pro models ever",
      "48MP Main camera with 4x optical zoom",
      "All-day battery life and USB-C connector"
    ],
    specifications: {
      display: "6.1-inch Super Retina XDR display",
      chip: "A17 Pro chip",
      camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      storage: "128GB, 256GB, 512GB, 1TB",
      colors: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium"
    },
    imageUrl: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg",
    stock: 50,
    rating: 4.8,
    reviews: 235
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "phones",
    price: 1199,
    description: "The ultimate smartphone with S Pen, 200MP camera and AI-powered features.",
    features: [
      "Snapdragon 8 Gen 3 processor",
      "200MP main camera with 8K video",
      "6.8-inch QHD+ Dynamic AMOLED 2X display",
      "Built-in S Pen for note-taking and creativity"
    ],
    specifications: {
      display: "6.8-inch QHD+ Dynamic AMOLED 2X",
      chip: "Snapdragon 8 Gen 3",
      camera: "200MP Main, 12MP Ultra Wide, 10MP Telephoto, 50MP Telephoto",
      battery: "5000mAh",
      storage: "256GB, 512GB, 1TB",
      colors: "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow"
    },
    imageUrl: "https://images.pexels.com/photos/13596629/pexels-photo-13596629.jpeg",
    stock: 35,
    rating: 4.7,
    reviews: 185
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch",
    category: "laptops",
    price: 2499,
    description: "Supercharged for pros with M3 Pro or M3 Max chip, stunning Liquid Retina XDR display, and all the ports you need.",
    features: [
      "Apple M3 Pro or M3 Max chip for extraordinary performance",
      "Up to 32-core GPU for graphics-intensive apps and games",
      "Up to 64GB unified memory for running multiple pro apps",
      "Stunning 16-inch Liquid Retina XDR display with extreme dynamic range"
    ],
    specifications: {
      display: "16-inch Liquid Retina XDR display",
      chip: "Apple M3 Pro or M3 Max",
      memory: "16GB to 64GB unified memory",
      storage: "512GB to 8TB SSD",
      battery: "Up to 22 hours",
      ports: "SDXC, HDMI, 3.5 mm headphone jack, MagSafe 3, Three Thunderbolt 4 ports"
    },
    imageUrl: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
    stock: 20,
    rating: 4.9,
    reviews: 120
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "laptops",
    price: 1899,
    discount: 200,
    description: "Creator-ready laptop with stunning InfinityEdge display and powerful performance.",
    features: [
      "13th Gen Intel Core processors up to i9",
      "NVIDIA GeForce RTX 4070 graphics",
      "Beautiful 15.6-inch 3.5K OLED touch display",
      "Premium design with CNC machined aluminum and carbon fiber"
    ],
    specifications: {
      display: "15.6-inch 3.5K OLED touch display",
      processor: "13th Gen Intel Core i7 or i9",
      graphics: "NVIDIA GeForce RTX 4070",
      memory: "16GB to 64GB DDR5",
      storage: "512GB to 4TB SSD",
      battery: "Up to 12 hours"
    },
    imageUrl: "https://images.pexels.com/photos/3766195/pexels-photo-3766195.jpeg",
    stock: 15,
    rating: 4.6,
    reviews: 95
  },
  {
    id: 5,
    name: "iPad Pro 12.9-inch",
    category: "tablets",
    price: 1099,
    description: "The ultimate iPad experience with the M2 chip, Liquid Retina XDR display, and pro cameras.",
    features: [
      "M2 chip for next-level performance",
      "12.9-inch Liquid Retina XDR display with extreme dynamic range",
      "Pro cameras with LiDAR Scanner for immersive AR",
      "Thunderbolt port for high-performance accessories"
    ],
    specifications: {
      display: "12.9-inch Liquid Retina XDR display",
      chip: "Apple M2 chip",
      camera: "12MP Wide camera, 10MP Ultra Wide camera, LiDAR Scanner",
      storage: "128GB, 256GB, 512GB, 1TB, 2TB",
      connectivity: "Wi-Fi 6E and optional 5G cellular",
      accessories: "Compatible with Apple Pencil and Magic Keyboard"
    },
    imageUrl: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
    stock: 30,
    rating: 4.8,
    reviews: 110
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9 Ultra",
    category: "tablets",
    price: 1199,
    description: "Premium Android tablet with massive display, S Pen included and powerful performance.",
    features: [
      "Snapdragon 8 Gen 2 processor",
      "Dynamic AMOLED 2X display with 120Hz refresh rate",
      "Quad speakers tuned by AKG",
      "S Pen included for note-taking and creativity"
    ],
    specifications: {
      display: "14.6-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      memory: "12GB or 16GB RAM",
      storage: "256GB, 512GB, 1TB, expandable up to 1TB",
      battery: "11,200mAh",
      camera: "13MP Main + 8MP Ultra Wide (rear), 12MP + 12MP (front)"
    },
    imageUrl: "https://images.pexels.com/photos/106341/pexels-photo-106341.jpeg",
    stock: 25,
    rating: 4.6,
    reviews: 85
  },
  {
    id: 7,
    name: "LG UltraFine 27-inch 4K Monitor",
    category: "monitors",
    price: 699,
    discount: 100,
    description: "Professional 4K monitor with stunning color accuracy and USB-C connectivity.",
    features: [
      "4K UHD (3840 x 2160) resolution",
      "USB-C with 60W power delivery",
      "VESA DisplayHDR 400 certified",
      "Ergonomic stand with height, tilt, and pivot adjustments"
    ],
    specifications: {
      display: "27-inch IPS with anti-glare coating",
      resolution: "3840 x 2160 (4K UHD)",
      color: "DCI-P3 95% color gamut",
      connectivity: "USB-C, HDMI, DisplayPort",
      speakers: "Built-in stereo speakers (10W x 2)",
      stand: "Height, tilt, pivot adjustable"
    },
    imageUrl: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg",
    stock: 20,
    rating: 4.5,
    reviews: 60
  },
  {
    id: 8,
    name: "HP Color LaserJet Pro MFP",
    category: "printers",
    price: 449,
    description: "Fast, reliable color laser printer with scanning, copying and faxing capabilities.",
    features: [
      "Print, scan, copy, and fax functionality",
      "Fast printing up to 28 ppm",
      "Automatic two-sided printing",
      "Wireless and Ethernet networking"
    ],
    specifications: {
      printSpeed: "Up to 28 ppm (black and color)",
      printResolution: "Up to 600 x 600 dpi",
      paperHandling: "250-sheet input tray, 50-sheet ADF",
      connectivity: "USB, Ethernet, Wi-Fi, Apple AirPrint",
      monthlyDuty: "Up to 50,000 pages",
      dimensions: "16.5 x 15.3 x 12.5 inches"
    },
    imageUrl: "https://images.pexels.com/photos/6636713/pexels-photo-6636713.jpeg",
    stock: 15,
    rating: 4.3,
    reviews: 45
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.discount).slice(0, 4);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};