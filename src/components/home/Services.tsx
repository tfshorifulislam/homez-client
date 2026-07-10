'use client';

import {
  Building2,
  Search,
  HandCoins,
  ShieldCheck,
  KeyRound,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Property Search",
    description:
      "Find apartments, villas, offices and commercial properties with powerful search and filters.",
  },
  {
    icon: Building2,
    title: "Property Listing",
    description:
      "List your property in minutes and reach thousands of verified buyers and renters.",
  },
  {
    icon: HandCoins,
    title: "Best Price Deals",
    description:
      "Compare prices and discover the best real estate opportunities within your budget.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every listing is carefully reviewed to ensure trust, transparency and authenticity.",
  },
  {
    icon: KeyRound,
    title: "Easy Booking",
    description:
      "Book property visits or connect with owners through a simple and secure process.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Our support team is always available to help you throughout your property journey.",
  },
];

const Services = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Everything You Need For Real Estate
          </h2>

          <p className="mt-4 text-gray-500">
            Whether you're buying, selling, renting or investing, we provide
            everything you need to make the process simple, secure and
            hassle-free.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-7 w-7 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {service.description}
                </p>

                <button className="mt-6 font-medium text-blue-600 transition hover:translate-x-1">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;