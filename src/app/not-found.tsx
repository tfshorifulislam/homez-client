"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 px-4">

            <div className="max-w-xl text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-8xl font-bold text-blue-600"
                >
                    404
                </motion.div>


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-4xl font-bold text-gray-900"
                >
                    Property Not Found
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-lg leading-8 text-gray-600"
                >
                    Sorry, the page or property you are looking for does not
                    exist. It may have been removed, renamed, or the URL might
                    be incorrect.
                </motion.p>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
                >

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        <Home size={20}/>
                        Back Home
                    </Link>



                    <Link
                        href="/properties"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        <ArrowLeft size={20}/>
                        Browse Properties
                    </Link>

                </motion.div>


            </div>

        </section>
    );
};

export default NotFoundPage;