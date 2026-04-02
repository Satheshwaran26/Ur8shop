import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "New Arrivals", href: "/products?category=new" },
  { label: "Shirts", href: "/products?category=shirts" },
  { label: "T-Shirts", href: "/products?category=t-shirts" },
  { label: "Jeans", href: "/products?category=jeans" },
  { label: "Jackets", href: "/products?category=jackets" },
  { label: "Accessories", href: "/products?category=accessories" },
];

const searchPlaceholders = ["T-Shirt", "Jeans", "Sweaters", "Jackets"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Mobile menu */}
          <button
            className="lg:hidden p-1 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center: Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Ur8shop
          </Link>

          {/* Right: Search + Icons */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            {/* Search bar - desktop only */}
            <div className="hidden lg:flex items-center border border-border rounded-full px-3 py-1.5 gap-2 min-w-[180px]">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder={`Search "${searchPlaceholders[placeholderIdx]}"`}
                className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
              />
            </div>
            {/* Search icon - mobile only */}
            <button className="lg:hidden text-foreground hover:text-muted-foreground transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/login" className="text-foreground hover:text-muted-foreground transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-foreground hover:text-muted-foreground transition-colors relative" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="section-padding py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground tracking-wide uppercase py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
