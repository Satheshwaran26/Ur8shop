import { Link } from "react-router-dom";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const PromoBanner = () => {
  return (
    <section className="relative w-full aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
      <img
        src={heroSlide4}
        alt="Promotional campaign"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={768}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-foreground/50 via-foreground/20 to-transparent" />
      <div className="relative h-full flex items-center justify-end section-padding">
        <div className="text-right">
          <p className="text-primary-foreground/80 text-lg sm:text-2xl font-body mb-1">
            Last chance!
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-primary-foreground font-bold mb-4">
            UP TO <span className="font-black">30% OFF</span>
          </h2>
          <Link
            to="/products"
            className="inline-block bg-background text-foreground px-6 sm:px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-background/90 transition-colors rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
