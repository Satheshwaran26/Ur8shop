import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-padding py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="font-heading text-xl font-bold tracking-tight">Ur8shop</Link>
            <p className="text-primary-foreground/60 text-sm mt-3 max-w-xs leading-relaxed">
              Premium menswear for the modern gentleman. Quality, style, and confidence in every piece.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/80">Shop</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/products" className="hover:text-primary-foreground transition-colors">New Arrivals</Link></li>
              <li><Link to="/products?category=shirts" className="hover:text-primary-foreground transition-colors">Shirts</Link></li>
              <li><Link to="/products?category=t-shirts" className="hover:text-primary-foreground transition-colors">T-Shirts</Link></li>
              <li><Link to="/products?category=jeans" className="hover:text-primary-foreground transition-colors">Jeans</Link></li>
              <li><Link to="/products?category=jackets" className="hover:text-primary-foreground transition-colors">Jackets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/80">Help</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Track Order</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Shipping Info</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Returns & Exchange</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">FAQs</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/80">Company</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">About Us</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Careers</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary-foreground transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-primary-foreground/80">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 mb-3">Get 10% off your first order.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm px-3 py-2 rounded-l focus:outline-none focus:border-primary-foreground/40"
              />
              <button className="bg-primary-foreground text-foreground text-sm font-medium px-4 py-2 rounded-r hover:bg-primary-foreground/90 transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 section-padding py-4">
        <p className="text-xs text-primary-foreground/40 text-center">© 2026 Ur8shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
