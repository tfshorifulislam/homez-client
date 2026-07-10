'use client';

import {
    Building2,
    Users,
    BadgeCheck,
    Globe2,
    LucideIcon,
} from "lucide-react";

type Stats = {
    icon: LucideIcon,
    value: string,
    label: string
}

const stats: Stats[] = [
    {
        icon: Building2,
        value: "2,500+",
        label: "Properties Listed",
    },
    {
        icon: Users,
        value: "15K+",
        label: "Happy Clients",
    },
    {
        icon: BadgeCheck,
        value: "98%",
        label: "Customer Satisfaction",
    },
    {
        icon: Globe2,
        value: "50+",
        label: "Cities Covered",
    },
];

const Statistics = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
                        Statistics
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        Trusted By Thousands
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        We help buyers, sellers and investors make smarter real estate
                        decisions every day.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className="rounded-2xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                            >
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <Icon className="h-8 w-8 text-blue-600" />
                                </div>

                                <h3 className="text-4xl font-bold text-slate-900">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-muted-foreground">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Statistics;