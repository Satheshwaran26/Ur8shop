import { Link } from "react-router-dom";
import promoBanner from "@/assets/promo-banner.jpg";

const PromoBanner = () => {
  return (
    <section className="section-padding py-12 sm:py-16">
      <div className="relative rounded overflow-hidden h-[240px] sm:h-[320px] lg:h-[400px]">
        <img
          src={promoBanner}
          alt="Seasonal collection"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase mb-2">Limited Time</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-3">
            End of Season Sale
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base mb-6 max-w-md">
            Up to 40% off on selected styles. Refresh your wardrobe with premium essentials.
          </p>
          <Link
            to="/products"
            className="inline-block bg-background text-foreground px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-background/90 transition-colors rounded"
          >
            Shop the Sale
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
