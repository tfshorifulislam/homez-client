'use client';

import { Property } from "@/lib/api/property";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type WishlistCardProps = {
    property: Property;
    onRemove: (propertyId: string) => void;
};

const WishlistCard = ({ property, onRemove }: WishlistCardProps) => {
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                />

                <button
                    onClick={() => onRemove(property._id)}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:scale-110"
                >
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                </button>
            </div>

            <div className="space-y-3 p-5">
                <h2 className="line-clamp-1 text-lg font-semibold">
                    {property.title}
                </h2>

                <p className="text-sm text-gray-500">
                    {property.location}
                </p>

                <h3 className="text-2xl font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                </h3>

                <Link
                    href={`/properties/${property._id}`}
                    className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default WishlistCard;