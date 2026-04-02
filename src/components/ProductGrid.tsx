import ProductCard from "./ProductCard";
import { products } from "@/data/products";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  items?: typeof products;
}

const ProductGrid = ({ title, subtitle, items }: ProductGridProps) => {
  const displayProducts = items || products.slice(0, 4);

  return (
    <section className="section-padding py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-heading text-2xl sm:text-3xl mb-2">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
