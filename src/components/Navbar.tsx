import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, Heart } from "lucide-react";
import cat1 from "@/assets/nav/cat-1.png";
import cat2 from "@/assets/nav/cat-2.png";
import cat3 from "@/assets/nav/cat-3.png";
import cat4 from "@/assets/nav/cat-4.png";

const categories = [
  { label: "New Arrivals", href: "/products?category=new" },
  { label: "Bestsellers", href: "/products?category=best" },
  { label: "Shop All", href: "/products" },
  { label: "Shirts", href: "/products?category=shirts" },
  { label: "T-Shirts | Polo", href: "/products?category=t-shirts" },
  { label: "Jeans", href: "/products?category=jeans" },
  { label: "Trousers", href: "/products?category=trousers" },
  { label: "Linen Edit", href: "/products?category=linen" },
  { label: "Footwear", href: "/products?category=footwear" },
  { label: "Cargo Pants", href: "/products?category=cargo" },
  { label: "Overshirts", href: "/products?category=overshirts" },
  { label: "Joggers", href: "/products?category=joggers" },
  { label: "Shorts", href: "/products?category=shorts" },
  { label: "Perfumes", href: "/products?category=perfumes" },
  { label: "Accessories | Caps | Bandana", href: "/products?category=accessories" },
];

const featuredCats = [
  { img: cat1, label: "9691" },
  { img: cat2, label: "LEGACY" },
  { img: cat3, label: "GRIND" },
  { img: cat4, label: "BISMIL" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background transition-all duration-300 border-b border-border/50 ${
          scrolled ? "shadow-md py-1" : "py-2"
        }`}
      >
        <div className="px-4 flex items-center justify-between h-14 sm:h-16 relative w-full">
          {/* Left: Hamburger menu */}
          <div className="w-[80px] flex justify-start">
            <button
              className="p-1 -ml-1 text-foreground hover:bg-muted/50 rounded-md transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link
              to="/"
              className="flex items-center group flex-shrink-0"
            >
              <span className="font-heading text-xl sm:text-2xl font-black tracking-tighter uppercase text-foreground">
                Ur8shop
              </span>
            </Link>
          </div>

          {/* Right: Search + Icons */}
          <div className="w-[120px] flex items-center justify-end gap-1">
            {/* Desktop Search bar */}
            <div 
              className={`hidden md:flex items-center border border-border transition-all duration-300 ${
                searchFocused ? "border-foreground ring-1 ring-foreground/10" : ""
              } px-4 py-2 gap-3 min-w-[280px] lg:min-w-[400px] absolute right-40 top-1/2 -translate-y-1/2`}
            >
              <Search size={18} className={searchFocused ? "text-foreground" : "text-muted-foreground"} strokeWidth={1.5} />
              <input
                type="text"
                placeholder='Search "Formal Wear"'
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground font-body"
              />
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center">
              <button className="md:hidden text-foreground p-1.5" aria-label="Search">
                <Search size={22} strokeWidth={1.5} />
              </button>
              <Link to="/login" className="hidden sm:flex text-foreground hover:text-muted-foreground transition-colors p-1.5" aria-label="Account">
                <User size={22} strokeWidth={1.5} />
              </Link>
              <Link to="/cart" className="text-foreground hover:text-muted-foreground transition-colors relative p-1.5" aria-label="Cart">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <div className="absolute top-1 right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-background scale-75">
                  <span className="text-[10px]">3</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div 
        className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm transition-transform duration-500 ease-in-out transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <button 
              onClick={() => setMobileOpen(false)} 
              className="p-1 hover:bg-muted/50 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="font-heading font-black tracking-widest text-lg uppercase absolute left-1/2 -translate-x-1/2">
              CATEGORIES
            </h2>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {/* Featured Grid */}
            <div className="flex overflow-x-auto gap-3 p-4 no-scrollbar">
              {featuredCats.map((cat, i) => (
                <div key={i} className="flex-none w-[40%] sm:w-[25%] aspect-[4/5] relative overflow-hidden group cursor-pointer border border-border">
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white font-black text-[10px] sm:text-xs tracking-tighter uppercase bg-black/50 px-2 py-1 backdrop-blur-sm">
                      {cat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* List */}
            <div className="flex flex-col p-4 gap-1">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={cat.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-bold text-foreground tracking-tight py-4 uppercase border-b border-border/30 last:border-0 hover:bg-muted/30 px-2 transition-colors flex items-center justify-between group"
                >
                  {cat.label}
                  <div className="w-2 h-2 bg-foreground scale-0 group-hover:scale-100 transition-transform rounded-full" />
                </Link>
              ))}
            </div>
            
            {/* Footer space */}
            <div className="h-20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
