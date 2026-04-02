import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "EVERYDAY\nTROUSERS",
    subtitle: "Tailored to move,\nbuilt to last.",
    cta: { label: "Shop Trousers", href: "/products?category=trousers" },
    layout: "portrait" as const,
  },
  {
    image: heroSlide2,
    title: "HUES OF\nSUMMER",
    subtitle: null,
    tags: ["PRINTED", "PLAIN", "TEXTURED"],
    cta: { label: "SHIRTS ₹999 ONWARDS", href: "/products?category=shirts" },
    layout: "portrait" as const,
  },
  {
    image: heroSlide3,
    title: "BAGGY\nDENIMS",
    subtitle: "Street-ready.\nAlways fresh.",
    cta: { label: "Shop Jeans", href: "/products?category=jeans" },
    layout: "portrait" as const,
  },
  {
    image: heroSlide4,
    title: "Last chance!",
    titleBig: "UP TO 30% OFF",
    subtitle: null,
    cta: { label: "Shop Now", href: "/products" },
    layout: "wide" as const,
  },
];

const HeroBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-[0_0_75%] sm:flex-[0_0_50%] lg:flex-[0_0_48%] min-w-0 relative mr-1"
            >
              <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  width={960}
                  height={1200}
                  {...(i === 0 ? {} : { loading: "lazy" as const })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  {slide.titleBig ? (
                    <>
                      <p className="text-primary-foreground/80 text-lg sm:text-2xl font-body mb-1">
                        {slide.title}
                      </p>
                      <h2 className="font-heading text-3xl sm:text-5xl text-primary-foreground font-bold leading-tight mb-4 whitespace-pre-line">
                        {slide.titleBig}
                      </h2>
                    </>
                  ) : (
                    <h2 className="font-heading text-3xl sm:text-5xl text-primary-foreground font-bold leading-tight mb-2 whitespace-pre-line">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-primary-foreground/80 text-sm sm:text-base font-body whitespace-pre-line mb-4">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.tags && (
                    <div className="flex gap-6 mb-4">
                      {slide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-primary-foreground/90 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    to={slide.cta.href}
                    className="inline-block bg-background text-foreground px-6 py-3 text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-background/90 transition-colors"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 mb-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-8 bg-foreground"
                : "w-3 bg-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
