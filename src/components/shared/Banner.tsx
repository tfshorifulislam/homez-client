"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
    "/home 6.jpg",
    "/home 1.jpg",
    "/home 2.jpg",
    "/home 3.jpg",
    "/home 4.jpg",
    "/home 5.jpg",
];

const Banner = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    return (

        <section className="relative h-screen w-full overflow-hidden">
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
                            <div className="absolute inset-0 bg-black/70" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Fixed Content */}
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
                    <div className="max-w-3xl text-center md:text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                            <span className="text-base">🏡</span>
                            Trusted Real Estate Platform
                        </div>

                        {/* Heading */}
                        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Find Your
                            <span className="block text-blue-400">
                                Dream Home
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
                            Discover premium apartments, luxury villas, modern homes and
                            investment properties from trusted sellers. Your perfect home is
                            just a few clicks away.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button
                                size="lg"
                                className="h-12 rounded-xl bg-blue-600 px-8 text-base font-semibold shadow-xl hover:bg-blue-700"
                            >
                                Explore Properties
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-xl border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-black"
                            >
                                Contact Agent
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-8">
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
                        </div>

                    </div>
                </div>
            </div>

            {/* Previous Button */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
                <ChevronRight size={24} />
            </button>
        </section>
    );
};

export default Banner;