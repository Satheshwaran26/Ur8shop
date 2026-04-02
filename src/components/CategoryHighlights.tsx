import { Link } from "react-router-dom";
import catShirts from "@/assets/cat-shirts.jpg";
import catTshirts from "@/assets/cat-tshirts.jpg";
import catJeans from "@/assets/cat-jeans.jpg";
import catJackets from "@/assets/cat-jackets.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";

const cats = [
  { name: "Shirts", image: catShirts, slug: "shirts" },
  { name: "T-Shirts", image: catTshirts, slug: "t-shirts" },
  { name: "Jeans", image: catJeans, slug: "jeans" },
  { name: "Jackets", image: catJackets, slug: "jackets" },
  { name: "Accessories", image: catAccessories, slug: "accessories" },
];

const CategoryHighlights = () => {
  return (
    <section className="section-padding py-12 sm:py-16 lg:py-20">
      <h2 className="font-heading text-2xl sm:text-3xl text-center mb-8 sm:mb-12">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {cats.map((cat) => (
          <Link
            key={cat.slug}
            to={`/products?category=${cat.slug}`}
            className="group relative aspect-[3/4] rounded overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-primary-foreground text-sm sm:text-base font-medium tracking-wider uppercase">
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
