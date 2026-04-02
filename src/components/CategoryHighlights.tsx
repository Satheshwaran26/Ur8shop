import { Link } from "react-router-dom";
import catShirts from "@/assets/cat-shirts.jpg";
import catTshirts from "@/assets/cat-tshirts.jpg";
import catJeans from "@/assets/cat-jeans.jpg";
import catJackets from "@/assets/cat-jackets.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";

const cats = [
  { name: "Shirts", image: catShirts, slug: "shirts" },
  { name: "Trousers", image: heroSlide1, slug: "trousers" },
  { name: "Jeans", image: catJeans, slug: "jeans" },
  { name: "T-Shirts", image: catTshirts, slug: "t-shirts" },
  { name: "Jackets", image: catJackets, slug: "jackets" },
  { name: "Accessories", image: catAccessories, slug: "accessories" },
];

const CategoryHighlights = () => {
  return (
    <section className="section-padding py-10 sm:py-14">
      <h2 className="font-heading text-lg sm:text-xl tracking-[0.15em] uppercase text-center mb-8 font-bold">
        Featured Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {cats.map((cat) => (
          <Link
            key={cat.slug}
            to={`/products?category=${cat.slug}`}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h3 className="text-primary-foreground text-xs sm:text-sm font-bold tracking-[0.15em] uppercase">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryHighlights;
