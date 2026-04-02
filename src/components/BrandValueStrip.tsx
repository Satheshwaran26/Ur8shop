import { Truck, RotateCcw, ShieldCheck, Award } from "lucide-react";

const features = [
  { icon: Truck, label: "Free Shipping", desc: "On orders above ₹1,999" },
  { icon: RotateCcw, label: "Easy Returns", desc: "15-day hassle-free returns" },
  { icon: ShieldCheck, label: "Secure Payment", desc: "100% secure checkout" },
  { icon: Award, label: "Premium Quality", desc: "Crafted with care" },
];

const BrandValueStrip = () => {
  return (
    <section className="border-t border-b border-border section-padding py-8 sm:py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-3">
            <f.icon size={24} className="text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-foreground">{f.label}</p>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandValueStrip;
