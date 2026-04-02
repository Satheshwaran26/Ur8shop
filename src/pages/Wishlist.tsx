import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Wishlist = () => {
  const [items, setItems] = useState(products.slice(0, 4));
  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="section-padding py-8 sm:py-12">
        <h1 className="font-heading text-2xl sm:text-3xl mb-8">Wishlist</h1>
        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
            <Link to="/products" className="inline-block bg-foreground text-background px-6 py-3 text-sm font-medium tracking-wider uppercase rounded">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((p) => (
              <div key={p.id} className="group">
                <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] rounded overflow-hidden bg-secondary mb-3">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </Link>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">{p.category}</p>
                <Link to={`/product/${p.id}`}><h3 className="text-sm font-medium text-foreground">{p.name}</h3></Link>
                <p className="text-sm font-semibold text-foreground mb-2">₹{p.price.toLocaleString()}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-foreground text-background py-2 rounded text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-1.5">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                  <button onClick={() => remove(p.id)} className="w-9 h-9 border border-border rounded flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors">
                    <Heart size={14} className="fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
