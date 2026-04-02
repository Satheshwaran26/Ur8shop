import { Link } from "react-router-dom";
import moodSummer from "@/assets/mood-summer.jpg";
import moodWork from "@/assets/mood-work.jpg";
import moodLuxury from "@/assets/mood-luxury.jpg";
import moodBasics from "@/assets/mood-basics.jpg";

const moods = [
  {
    title: "SUMMER",
    subtitle: "ESCAPE",
    image: moodSummer,
    href: "/products?category=shirts",
  },
  {
    title: "WORK",
    subtitle: "READY",
    image: moodWork,
    href: "/products?category=shirts",
  },
  {
    title: "LUXURY",
    subtitle: "REFINED",
    image: moodLuxury,
    href: "/products?category=jackets",
    badge: "UR8 LUXE",
  },
  {
    title: "BASICS",
    subtitle: "DAILY",
    image: moodBasics,
    href: "/products?category=t-shirts",
    badge: "CORE LAB",
  },
];

const MatchTheMood = () => {
  return (
    <section className="section-padding py-10 sm:py-14">
      <h2 className="font-heading text-lg sm:text-xl tracking-[0.15em] uppercase text-center mb-8 font-bold">
        Match the Mood
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {moods.map((mood) => (
          <Link
            key={mood.title}
            to={mood.href}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={mood.image}
              alt={mood.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
            {mood.badge && (
              <div className="absolute top-3 right-3">
                <span className="text-primary-foreground/70 text-[10px] tracking-[0.2em] uppercase">
                  {mood.badge}
                </span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-primary-foreground text-2xl sm:text-3xl font-heading font-bold leading-none">
                {mood.title}
              </h3>
              <p className="text-luxury-accent text-sm sm:text-base font-medium tracking-wider">
                {mood.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MatchTheMood;
