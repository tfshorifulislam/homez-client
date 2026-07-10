'use client';

import {
  Building2,
  Users,
  BadgeCheck,
  MapPinned,
  LucideIcon,
} from "lucide-react";

type Highlight = {
    icon: LucideIcon,
    title: string,
    subtitle: string
}

const highlights: Highlight[] = [
  {
    icon: Building2,
    title: "2,500+",
    subtitle: "Properties Listed",
  },
  {
    icon: Users,
    title: "15,000+",
    subtitle: "Happy Customers",
  },
  {
    icon: BadgeCheck,
    title: "100%",
    subtitle: "Verified Listings",
  },
  {
    icon: MapPinned,
    title: "50+",
    subtitle: "Cities Covered",
  },
];

const Highlights = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 lg:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.subtitle}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur transition hover:bg-white/20"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600">
                <Icon size={32} />
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-blue-100">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;