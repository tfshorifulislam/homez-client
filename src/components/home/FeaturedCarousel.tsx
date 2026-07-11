"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Property } from "@/lib/api/property";


interface Props {
    properties: Property[];
}
 

const FeaturedCarousel = ({
    properties
}: Props) => {


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });


    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);



    useEffect(() => {

        if (!emblaApi) return;

        setScrollSnaps(
            emblaApi.scrollSnapList()
        );

        const onSelect = () => {
            setSelectedIndex(
                emblaApi.selectedScrollSnap()
            );
        };

        emblaApi.on("select", onSelect);


        onSelect();


    }, [emblaApi]);





    return (

        <div className="relative">


            {/* Carousel */}
            <div
                ref={emblaRef}
                className="overflow-hidden"
            >


                <div className="flex">


                    {
                        properties.map((item) => (

                            <div
                                key={item._id}
                                className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/4"
                            >


                                <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">


                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">


                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="300px"
                                            className="object-cover transition duration-500 group-hover:scale-110"
                                        />


                                    </div>





                                    {/* Content */}
                                    <div className="p-5">


                                        <h3 className="line-clamp-1 text-lg font-semibold">
                                            {item.title}
                                        </h3>



                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {item.location}
                                        </p>



                                        <p className="mt-3 text-2xl font-bold text-blue-600">
                                            ${item.price.toLocaleString()}
                                        </p>




                                        <Link
                                            href={`/properties/${item._id}`}
                                            className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
                                        >
                                            View Details
                                        </Link>


                                    </div>


                                </div>


                            </div>

                        ))
                    }


                </div>


            </div>





            {/* Previous Button */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white"
            >

                <ChevronLeft size={22}/>

            </button>





            {/* Next Button */}
            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white"
            >

                <ChevronRight size={22}/>

            </button>






            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center gap-2">


                {
                    scrollSnaps.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                selectedIndex === index
                                ? "w-8 bg-blue-600"
                                : "w-2.5 bg-gray-300"
                            }`}
                        />

                    ))
                }


            </div>




        </div>

    );
};


export default FeaturedCarousel;