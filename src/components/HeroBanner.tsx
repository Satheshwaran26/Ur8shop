import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Premium men's fashion campaign"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      <div className="relative h-full flex items-center section-padding">
        <div className="max-w-lg">
          <p className="text-primary-foreground/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 font-body">
            Spring/Summer 2026
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
            Define Your
            <br />
            Style
          </h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base mb-8 max-w-sm font-body leading-relaxed">
            Discover premium menswear crafted for the modern gentleman. Elevate every moment.
          </p>
          <div className="flex gap-3">
            <Link
              to="/products"
              className="inline-block bg-background text-foreground px-6 sm:px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-background/90 transition-colors rounded"
            >
              Shop Now
            </Link>
            <Link
              to="/products?category=new"
              className="inline-block border border-primary-foreground/50 text-primary-foreground px-6 sm:px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors rounded"
            >
              New In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
