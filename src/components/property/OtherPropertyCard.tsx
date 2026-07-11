'use client';

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/api/property";


type PropertyCardProps = {
    relatedProperties: Property[];
};


const OtherPropertyCard = ({ relatedProperties }: PropertyCardProps) => {

    return (
        <section className="mt-16">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

                <div>
                    <h2 className="text-3xl font-bold">
                        Related Properties
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        Explore similar properties you may like.
                    </p>
                </div>

                <Link href="/properties">
                    <Button
                        variant="outline"
                        className="rounded-xl"
                    >
                        View All
                    </Button>
                </Link>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {relatedProperties.map((item) => (

                    <div
                        key={item._id}
                        className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">

                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width:768px) 100vw, 25vw"
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />


                            {/* Badge */}
                            <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 backdrop-blur">

                                {item.propertyType}

                            </div>

                        </div>


                        {/* Content */}
                        <div className="p-5">


                            <h3 className="line-clamp-1 text-lg font-bold">
                                {item.title}
                            </h3>

                            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                                <MapPin size={16}/>

                                {item.location}

                            </div>

                            <div className="mt-4 flex items-center justify-between">

                                <p className="text-xl font-bold text-blue-600">
                                    ${item.price.toLocaleString()}
                                </p>

                                {
                                    item.featured && (
                                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                                            Featured
                                        </span>
                                    )
                                }

                            </div>
                            <Link
                                href={`/properties/${item._id}`}
                                className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 font-medium text-white transition hover:bg-blue-700"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default OtherPropertyCard;