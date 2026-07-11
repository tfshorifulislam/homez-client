'use client';

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


type Blog = {
    id: number;
    title: string;
    image: string;
    category: string;
    date: string;
    read: string;
    description: string;
};

const blogs: Blog[] = [
    {
        id: 1,
        title: "10 Tips for Buying Your First Home",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        category: "Buying",
        date: "July 10, 2026",
        read: "5 min read",
        description:
            "Everything first-time home buyers should know before making one of the biggest financial decisions of their lives.",
    },
    {
        id: 2,
        title: "How to Increase Your Property Value",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
        category: "Investment",
        date: "July 8, 2026",
        read: "6 min read",
        description:
            "Simple renovations and improvements that can significantly increase your property's market value.",
    },
    {
        id: 3,
        title: "Real Estate Market Trends in 2026",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
        category: "Market",
        date: "July 5, 2026",
        read: "8 min read",
        description:
            "Explore the latest real estate trends, pricing changes, and investment opportunities this year.",
    },
    {
        id: 4,
        title: "Apartment vs House: Which One is Better?",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        category: "Guide",
        date: "July 2, 2026",
        read: "4 min read",
        description:
            "Compare apartments and houses based on budget, lifestyle, maintenance, and future value.",
    },
    {
        id: 5,
        title: "Mistakes Every Home Seller Should Avoid",
        image:
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        category: "Selling",
        date: "June 30, 2026",
        read: "7 min read",
        description:
            "Avoid common mistakes that reduce your property's value and delay successful sales.",
    },
    {
        id: 6,
        title: "Luxury Living: Choosing the Perfect Villa",
        image:
            "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1200&q=80",
        category: "Luxury",
        date: "June 27, 2026",
        read: "5 min read",
        description:
            "Things to consider before investing in luxury villas and premium residential communities.",
    },
];

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const BlogPage = () => {
    return (
        <>
            {/* Hero */}
            <section className="border-b bg-linear-to-br from-blue-50 via-white to-slate-100">
                <div className="mx-auto max-w-7xl px-4 py-24 text-center">

                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600"
                    >
                        Real Estate Insights
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2
                        }}
                        className="mt-6 text-5xl font-bold"
                    >
                        Our{" "}
                        <span className="text-blue-600">
                            Latest Blogs
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4
                        }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
                    >
                        Discover expert real estate tips, market trends, investment
                        strategies, and home-buying guides from industry professionals.
                    </motion.p>
                </div>
            </section>

            {/* Blogs */}
            <section className="mx-auto max-w-7xl px-4 py-20">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >

                    {blogs.map((blog) => (

                        <motion.article
                            key={blog.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                            }}
                            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition"
                        >


                            <div className="relative h-60 overflow-hidden">

                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition duration-500 hover:scale-110"
                                />

                            </div>




                            <div className="p-6">


                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                                    {blog.category}
                                </span>



                                <h2 className="mt-4 text-xl font-bold leading-8">
                                    {blog.title}
                                </h2>




                                <div className="mt-4 flex items-center gap-5 text-sm text-gray-500">


                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        {blog.date}
                                    </div>



                                    <div className="flex items-center gap-1">
                                        <Clock3 size={16} />
                                        {blog.read}
                                    </div>


                                </div>




                                <p className="mt-4 text-gray-600">
                                    {blog.description}
                                </p>




                                <Link
                                    href="#"
                                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                                >
                                    Read More
                                    <ArrowRight size={18} />
                                </Link>


                            </div>


                        </motion.article>

                    ))}


                </motion.div>

            </section>

            {/* Newsletter */}
            <section className="border-t bg-slate-50">
                <div className="mx-auto max-w-4xl px-4 py-20 text-center">
                    <h2 className="text-4xl font-bold">
                        Stay Updated
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Subscribe to receive the latest real estate news, market updates,
                        and expert tips directly in your inbox.
                    </p>

                    <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 flex-1 rounded-lg border px-4 outline-none focus:border-blue-600"
                        />

                        <button className="h-12 rounded-lg bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;