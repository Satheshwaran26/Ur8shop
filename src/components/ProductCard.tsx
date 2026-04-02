import { Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group product-card-hover">
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] rounded overflow-hidden bg-secondary mb-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] px-2.5 py-1 rounded-sm font-medium tracking-wider uppercase">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-sm"
            aria-label="Add to wishlist"
          >
            <Heart size={14} />
          </button>
          <button
            className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-sm"
            aria-label="Quick view"
          >
            <Eye size={14} />
          </button>
        </div>
      </Link>
      <div className="space-y-1">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-foreground leading-snug">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
