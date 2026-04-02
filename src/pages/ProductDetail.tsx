import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const images = [product.image, product.hoverImage];

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="section-padding py-8 sm:py-12">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-[3/4] rounded overflow-hidden bg-secondary">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-foreground" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">{product.category}</p>
              <h1 className="font-heading text-2xl sm:text-3xl mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? "fill-luxury-accent text-luxury-accent" : "text-border"}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-foreground">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-xs font-medium text-destructive">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Colors */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-muted-foreground">Color</p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button key={c} className="border border-border text-xs px-3 py-1.5 rounded hover:border-foreground transition-colors">
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Size</p>
                <button className="text-xs text-muted-foreground underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-10 border text-sm rounded transition-colors ${
                      selectedSize === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <button className="flex-1 bg-foreground text-background py-3 rounded text-sm font-medium tracking-wider uppercase hover:bg-foreground/90 transition-colors">
                Add to Cart
              </button>
              <button className="w-12 h-12 border border-border rounded flex items-center justify-center hover:border-foreground transition-colors" aria-label="Add to wishlist">
                <Heart size={18} />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck size={16} /> Free shipping on orders above ₹1,999
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RotateCcw size={16} /> 15-day easy returns
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck size={16} /> Secure checkout
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <ProductGrid title="You May Also Like" items={related} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
