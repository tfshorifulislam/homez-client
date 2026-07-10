'use client';

import {
  Building2,
  Users,
  BadgeCheck,
  MapPinned,
  LucideIcon,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

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
    <section className="bg-blue-600 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.subtitle}
                className="group rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;