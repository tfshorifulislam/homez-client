"use client";

import {
    Building2,
    ShieldCheck,
    Handshake,
    Home,
    Users,
    BadgeCheck,
} from "lucide-react";
import Image from "next/image";


const journey = [
    {
        year: "2020",
        title: "Company Founded",
    },
    {
        year: "2022",
        title: "1000+ Properties",
    },
    {
        year: "2024",
        title: "Expanded Nationwide",
    },
    {
        year: "2026",
        title: "10,000+ Happy Clients",
    },
];


const testimonials = [
    {
        name: "Sarah Johnson",
        review:
            "The platform helped us find our dream home in just a few days.",
    },
    {
        name: "Michael Brown",
        review:
            "Professional service and verified property listings.",
    },
    {
        name: "Emily Wilson",
        review:
            "Highly recommended for anyone buying or renting property.",
    },
];


const team = [
    {
        name: "John Anderson",
        role: "Founder & CEO",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        name: "Emma Watson",
        role: "Property Consultant",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
        name: "Michael Smith",
        role: "Sales Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Brown",
        role: "Marketing Lead",
        image: "https://randomuser.me/api/portraits/women/41.jpg",
    },
];

const features = [
    {
        title: "Trusted Listings",
        description:
            "Every property is carefully reviewed to help buyers and renters find genuine opportunities.",
        icon: ShieldCheck,
    },
    {
        title: "Professional Agents",
        description:
            "Connect with experienced real estate professionals who understand your needs.",
        icon: Users,
    },
    {
        title: "Easy Property Search",
        description:
            "Search properties by location, price, and category with a simple and intuitive experience.",
        icon: Home,
    },
];

const stats = [
    { value: "10K+", label: "Properties Listed" },
    { value: "5K+", label: "Happy Customers" },
    { value: "350+", label: "Trusted Agents" },
    { value: "25+", label: "Cities Covered" },
];


const values = [
    {
        title: "Integrity",
        desc: "We believe in honesty and complete transparency with every client.",
        icon: "🤝",
    },
    {
        title: "Innovation",
        desc: "We continuously improve our platform with modern technology.",
        icon: "🚀",
    },
    {
        title: "Customer First",
        desc: "Every decision we make starts with our customers' needs.",
        icon: "❤️",
    },
    {
        title: "Trust",
        desc: "Thousands of verified properties from trusted sellers.",
        icon: "🛡️",
    },
];


const AboutUsPage = () => {
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="border-b bg-gradient-to-br from-blue-50 via-white to-slate-100">
                <div className="mx-auto max-w-7xl px-4 py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                            About Our Company
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                            Helping People Find Their
                            <span className="text-blue-600"> Perfect Home</span>
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We make buying, selling, and renting properties simple, secure,
                            and transparent. Our mission is to connect people with homes they
                            truly love through trusted listings and exceptional service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="mx-auto max-w-7xl px-4 py-20">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
                            <Building2 size={32} />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold">
                            Building Trust in Real Estate
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            Our platform was created with one goal: making property searching
                            easier for everyone. Whether you're looking for your dream home,
                            an investment opportunity, or a rental property, we provide a
                            seamless experience backed by trusted information.
                        </p>

                        <p className="mt-5 leading-8 text-gray-600">
                            We believe that every customer deserves transparency, reliability,
                            and professional support throughout their real estate journey.
                        </p>
                    </div>

                    <div className="rounded-3xl border bg-slate-50 p-8 shadow-sm">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Handshake className="text-blue-600" />
                                <div>
                                    <h3 className="font-semibold">Our Mission</h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        To make real estate accessible, transparent, and stress-free
                                        for everyone.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <BadgeCheck className="text-blue-600" />
                                <div>
                                    <h3 className="font-semibold">Our Vision</h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Becoming the most trusted digital platform for buying,
                                        renting, and selling properties worldwide.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <ShieldCheck className="text-blue-600" />
                                <div>
                                    <h3 className="font-semibold">Our Promise</h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Honest listings, reliable information, and a smooth user
                                        experience from start to finish.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">
                            Why Choose Our Platform?
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Everything you need to buy, sell, or rent properties with
                            confidence.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                                >
                                    <div className="inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-4xl font-bold text-center">
                        Meet Our Team
                    </h2>

                    <p className="text-center text-gray-500 mt-3">
                        Passionate people behind our success.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white"
                            >

                                <div className="relative h-72">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-5 text-center">

                                    <h3 className="font-bold text-lg">
                                        {member.name}
                                    </h3>

                                    <p className="text-blue-600 mt-1">
                                        {member.role}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border bg-white p-8 text-center shadow-sm"
                            >
                                <h3 className="text-4xl font-bold text-blue-600">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center">
                        Our Core Values
                    </h2>

                    <p className="text-center text-gray-500 mt-3">
                        Principles that guide everything we do.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition"
                            >
                                <div className="text-5xl">{item.icon}</div>

                                <h3 className="font-bold text-xl mt-5">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 mt-3">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">

                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-center text-4xl font-bold">
                        Our Journey
                    </h2>

                    <div className="mt-16 grid md:grid-cols-4 gap-8">

                        {journey.map((item) => (

                            <div
                                key={item.year}
                                className="text-center"
                            >

                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mx-auto">
                                    {item.year}
                                </div>

                                <h3 className="font-semibold mt-5">
                                    {item.title}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <section className="py-20">

                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-center text-4xl font-bold">
                        What Clients Say
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-8 mt-12">

                        {testimonials.map((item) => (

                            <div
                                key={item.name}
                                className="rounded-2xl border p-8 shadow-sm"
                            >

                                <div className="text-yellow-500 text-xl">
                                    ⭐⭐⭐⭐⭐
                                </div>

                                <p className="mt-5 text-gray-600 italic">
                                    {item.review}
                                </p>

                                <h3 className="mt-6 font-bold">
                                    {item.name}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* CTA */}
            <section className="py-20 bg-blue-600">

                <div className="max-w-4xl mx-auto text-center px-4">

                    <h2 className="text-5xl font-bold text-white">
                        Ready to Find Your Dream Home?
                    </h2>

                    <p className="text-blue-100 mt-6">
                        Browse thousands of verified properties and connect with trusted real estate experts today.
                    </p>

                    <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-slate-100 transition">
                        Explore Properties
                    </button>

                </div>

            </section>
        </main>
    );
};

export default AboutUsPage;