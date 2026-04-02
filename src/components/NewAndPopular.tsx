import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const filterTabs = ["ALL", "SHIRTS", "JEANS", "TROUSERS", "T-SHIRTS", "JACKETS"];

const NewAndPopular = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered =
    activeTab === "ALL"
      ? products
      : products.filter(
          (p) => p.category.toUpperCase() === activeTab
        );

  return (
    <section className="section-padding py-10 sm:py-14">
      <h2 className="font-heading text-lg sm:text-xl tracking-[0.15em] uppercase text-center mb-6 font-bold">
        New and Popular
      </h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-xs tracking-[0.1em] uppercase font-medium border rounded-sm transition-colors ${
              activeTab === tab
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-foreground border-border hover:border-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product grid — 5 columns on desktop like Snitch */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        {filtered.map((product) => (
          <div key={product.id} className="group">
            <Link
              to={`/product/${product.id}`}
              className="block relative aspect-[3/4] overflow-hidden bg-secondary mb-2"
            >
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
              <button
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Add to wishlist"
                onClick={(e) => e.preventDefault()}
              >
                <Heart size={20} />
              </button>
            </Link>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-xs sm:text-sm font-medium text-foreground leading-snug line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm font-semibold text-foreground">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewAndPopular;
