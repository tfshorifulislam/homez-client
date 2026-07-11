"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ChevronDown, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";


const slides = [
    "/home 6.jpg",
    "/home 1.jpg",
    "/home 2.jpg",
    "/home 3.jpg",
    "/home 4.jpg",
    "/home 5.jpg",
];

// Framer Motion Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};



const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
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



const Banner = () => {



    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    useEffect(() => {
        if (!emblaApi) return;

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [emblaApi]);

    return (
        <section className="relative h-[75vh] w-full overflow-hidden">
            {/* Slider */}
            <div className="h-full overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative h-full min-w-full shrink-0"
                        >
                            <Image
                                src={slide}
                                alt={`Home ${index + 1}`}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover object-center"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/65" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
                    <motion.div
                        className="max-w-3xl text-center md:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm"
                        >
                            <span className="text-base">🏡</span>
                            Trusted Real Estate Platform
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Find Your{" "}
                            <span className="block text-blue-400 md:inline">
                                Dream Home
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg mx-auto md:mx-0"
                        >
                            Discover premium apartments, luxury villas, modern homes and
                            investment properties from trusted sellers. Your perfect home is
                            just a few clicks away.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
                        >
                            <Link href={'/properties'}>
                                <Button
                                    size="lg"
                                    className="h-12 rounded-xl bg-blue-600 px-8 text-base font-semibold shadow-xl transition-all hover:bg-blue-700 hover:shadow-blue-600/20 cursor-pointer"
                                >
                                    Explore Properties
                                </Button>
                            </Link>


                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-xl border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-black"
                            >
                                Contact Agent
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8 mx-auto md:mx-0"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-white md:text-3xl">
                                    12K+
                                </h3>
                                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                                    Properties
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white md:text-3xl">
                                    8K+
                                </h3>
                                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                                    Happy Clients
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white md:text-3xl">
                                    350+
                                </h3>
                                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                                    Agents
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Previous Button */}
            <button
                onClick={() => {
                    emblaApi?.scrollPrev();
                   
                }}
                className="absolute left-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-black focus:outline-none"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
                onClick={() => {
                    emblaApi?.scrollNext();
                    
                }}
                className="absolute right-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-black focus:outline-none"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Scroll Indicator */}
            <motion.button
                onClick={() => {
                    const nextSection = document.getElementById("featured-properties");

                    if (nextSection) {
                        nextSection.scrollIntoView({
                            behavior: "smooth",
                        });
                    }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white">
                <motion.div
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-md"
                >
                    <ChevronDown size={20} />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Banner;