import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage: string;
  badge?: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Noir Slim Fit Shirt",
    category: "Shirts",
    price: 2499,
    originalPrice: 3499,
    image: product1,
    hoverImage: product2,
    badge: "New",
    rating: 4.5,
    reviews: 128,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "White"],
    description: "Premium cotton slim fit shirt with a modern tailored cut. Perfect for both formal occasions and smart casual looks.",
    inStock: true,
  },
  {
    id: "2",
    name: "Classic Navy Polo",
    category: "T-Shirts",
    price: 1499,
    image: product2,
    hoverImage: product1,
    rating: 4.3,
    reviews: 95,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Grey"],
    description: "Soft piqué cotton polo with a refined fit. An everyday essential elevated with premium fabric and subtle detailing.",
    inStock: true,
  },
  {
    id: "3",
    name: "Sand Slim Chinos",
    category: "Trousers",
    price: 1999,
    originalPrice: 2799,
    image: product3,
    hoverImage: product4,
    badge: "Sale",
    rating: 4.6,
    reviews: 210,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Sand", "Olive", "Charcoal"],
    description: "Tailored slim fit chinos crafted from premium stretch cotton. Versatile enough for the office or weekend.",
    inStock: true,
  },
  {
    id: "4",
    name: "Olive Bomber Jacket",
    category: "Jackets",
    price: 3999,
    image: product4,
    hoverImage: product3,
    badge: "Trending",
    rating: 4.8,
    reviews: 67,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black", "Navy"],
    description: "Military-inspired bomber jacket with ribbed cuffs and a clean silhouette. Lightweight and perfect for layering.",
    inStock: true,
  },
  {
    id: "5",
    name: "White Linen Shirt",
    category: "Shirts",
    price: 2799,
    image: product5,
    hoverImage: product6,
    rating: 4.4,
    reviews: 156,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Sky Blue", "Beige"],
    description: "Breathable pure linen shirt with a relaxed fit. Ideal for warm weather and resort-style dressing.",
    inStock: true,
  },
  {
    id: "6",
    name: "Dark Wash Slim Jeans",
    category: "Jeans",
    price: 2299,
    originalPrice: 2999,
    image: product6,
    hoverImage: product5,
    badge: "Best Seller",
    rating: 4.7,
    reviews: 342,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Dark Wash", "Mid Wash", "Black"],
    description: "Premium stretch denim with a slim tapered fit. Dark wash finishing for a clean, modern look.",
    inStock: true,
  },
  {
    id: "7",
    name: "Rust Crew Neck Tee",
    category: "T-Shirts",
    price: 999,
    image: product7,
    hoverImage: product8,
    rating: 4.2,
    reviews: 88,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rust", "Sage", "Charcoal"],
    description: "Soft-touch organic cotton t-shirt with a relaxed crew neck. Essential basics redefined with premium quality.",
    inStock: true,
  },
  {
    id: "8",
    name: "Charcoal Wool Blazer",
    category: "Jackets",
    price: 5999,
    originalPrice: 7999,
    image: product8,
    hoverImage: product7,
    badge: "Premium",
    rating: 4.9,
    reviews: 45,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Navy", "Black"],
    description: "Luxurious wool-blend blazer with a half-canvas construction. Sophisticated tailoring for the modern gentleman.",
    inStock: true,
  },
];

export const categories = [
  { name: "Shirts", slug: "shirts" },
  { name: "T-Shirts", slug: "t-shirts" },
  { name: "Jeans", slug: "jeans" },
  { name: "Jackets", slug: "jackets" },
  { name: "Trousers", slug: "trousers" },
  { name: "Accessories", slug: "accessories" },
];
