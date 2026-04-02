import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Popular", value: "popular" },
];

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [sort, setSort] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = [...products];
    if (categoryParam !== "all" && categoryParam !== "new") {
      items = items.filter((p) => p.category.toLowerCase().replace(" ", "-").replace("-", "-") === categoryParam ||
        p.category.toLowerCase() === categoryParam);
    }
    if (sort === "price-asc") items.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items.sort((a, b) => b.price - a.price);
    if (sort === "popular") items.sort((a, b) => b.reviews - a.reviews);
    return items;
  }, [categoryParam, sort]);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="section-padding py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground capitalize">{categoryParam === "all" ? "All Products" : categoryParam.replace("-", " ")}</span>
        </nav>

        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading text-2xl sm:text-3xl capitalize">
            {categoryParam === "all" ? "All Products" : categoryParam === "new" ? "New Arrivals" : categoryParam.replace("-", " ")}
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors lg:hidden"
            >
              <SlidersHorizontal size={16} /> Filter
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-background border border-border text-sm px-3 py-2 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-56 flex-shrink-0`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-3 text-muted-foreground">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/products" className={`text-sm ${categoryParam === "all" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors`}>
                      All Products
                    </Link>
                  </li>
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/products?category=${c.slug}`}
                        className={`text-sm ${categoryParam === c.slug ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"} transition-colors`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-3 text-muted-foreground">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "XXL"].map((s) => (
                    <button key={s} className="border border-border text-xs px-3 py-1.5 rounded hover:border-foreground transition-colors">{s}</button>
                  ))}
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-xs font-semibold tracking-widest uppercase mb-3 text-muted-foreground">Price</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> Under ₹1,000</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> ₹1,000 - ₹2,500</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> ₹2,500 - ₹5,000</label>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded" /> Above ₹5,000</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-6">{filtered.length} products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListing;
