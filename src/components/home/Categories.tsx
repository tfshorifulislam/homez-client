'use client';

import Link from "next/link";
import {
    Building2,
    Home,
    Building,
    Warehouse,
    Hotel,
    Store,
    LucideIcon,
} from "lucide-react";

type Category = {
    title: string;
    icon: LucideIcon;
    count: string;
    color: string;
    href: string;
};

const categories: Category[] = [
    {
        title: "Apartment",
        icon: Building2,
        count: "240+ Properties",
        color: "bg-blue-100 text-blue-600",
        href: "/properties?type=apartment",
    },
    {
        title: "House",
        icon: Home,
        count: "180+ Properties",
        color: "bg-green-100 text-green-600",
        href: "/properties?type=house",
    },
    {
        title: "Villa",
        icon: Hotel,
        count: "95+ Properties",
        color: "bg-purple-100 text-purple-600",
        href: "/properties?type=villa",
    },
    {
        title: "Office",
        icon: Building,
        count: "120+ Properties",
        color: "bg-orange-100 text-orange-600",
        href: "/properties?type=office",
    },
    {
        title: "Commercial",
        icon: Store,
        count: "75+ Properties",
        color: "bg-pink-100 text-pink-600",
        href: "/properties?type=commercial",
    },
    {
        title: "Warehouse",
        icon: Warehouse,
        count: "45+ Properties",
        color: "bg-cyan-100 text-cyan-600",
        href: "/properties?type=warehouse",
    },
];

const Categories = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-20">
            {/* Header */}
            <div className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Categories
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                    Browse by Property Type
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Find your perfect property from apartments, villas, offices,
                    commercial spaces and more.
                </p>
            </div>

            {/* Categories */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                        >
                            <div
                                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                            >
                                <Icon size={32} />
                            </div>

                            <h3 className="text-xl font-semibold transition group-hover:text-blue-600">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {item.count}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600">
                                Explore Properties
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Categories;