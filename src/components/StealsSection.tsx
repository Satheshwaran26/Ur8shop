import { Link } from "react-router-dom";

const steals = [
  {
    title: "SHIRTS",
    highlight: "UNDER ₹999",
    bg: "bg-secondary",
    href: "/products?category=shirts",
  },
  {
    title: "OFF SEASON",
    highlight: "SALE",
    bg: "bg-destructive/10",
    href: "/products",
    highlightColor: "text-destructive",
  },
  {
    title: "PRICE DROP",
    highlight: "SALE",
    bg: "bg-foreground",
    href: "/products",
    highlightColor: "text-destructive",
    dark: true,
  },
  {
    title: "CARGO PANTS",
    highlight: "UNDER ₹1099",
    bg: "bg-secondary",
    href: "/products?category=trousers",
  },
];

const StealsSection = () => {
  return (
    <section className="section-padding py-10 sm:py-14">
      <h2 className="font-heading text-lg sm:text-xl tracking-[0.15em] uppercase text-center mb-8 font-bold">
        Steals
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {steals.map((deal, i) => (
          <Link
            key={i}
            to={deal.href}
            className={`group relative aspect-[3/4] overflow-hidden ${deal.bg} flex flex-col items-center justify-center p-6 transition-transform hover:scale-[1.02]`}
          >
            <p
              className={`text-xs sm:text-sm tracking-[0.2em] uppercase font-bold mb-1 ${
                deal.dark ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {deal.title}
            </p>
            <p
              className={`text-3xl sm:text-4xl font-heading font-bold ${
                deal.highlightColor || (deal.dark ? "text-primary-foreground" : "text-foreground")
              }`}
            >
              {deal.highlight}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StealsSection;
