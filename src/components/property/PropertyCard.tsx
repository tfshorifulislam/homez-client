'use client';

import { Property } from '@/lib/api/property';
import Image from 'next/image';
import Link from 'next/link';
import PaginationSystem from './PaginationSystem';
import { Heart } from "lucide-react";
import { useSession } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

type PropertyCardProps = {
    property: Property[];
    totalPages: number;
    currentPage: number;
};

type WishlistItem = {
    _id: string;
    userEmail: string;
    propertyId: string;
};

const PropertyCard = ({ property, totalPages, currentPage }: PropertyCardProps) => {
    const { data: session } = useSession();
    const [savedProperties, setSavedProperties] = useState<string[]>([]);

    useEffect(() => {
        if (!session?.user?.email) return;

        const fetchWishlist = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist/${session.user.email}`
                );

                const data: WishlistItem[] = await res.json();

                setSavedProperties(data.map((item) => item.propertyId));
            } catch (error) {
                console.error(error);
            }
        };

        fetchWishlist();
    }, [session?.user?.email]);

    const handleWishlist = async (propertyId: string) => {
        if (!session?.user?.email) {
            toast.error("Please login first.");
            return;
        }

        const isSaved = savedProperties.includes(propertyId);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist`,
                {
                    method: isSaved ? "DELETE" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        propertyId,
                        userEmail: session.user.email,
                    }),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Something went wrong");
                return;
            }


            if (isSaved) {
                setSavedProperties((prev) =>
                    prev.filter((id) => id !== propertyId)
                );

                toast.success("Removed from wishlist");
            } else {
                setSavedProperties((prev) => [
                    ...prev,
                    propertyId,
                ]);

                toast.success("Property saved successfully");
            }

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {property.map((item) => (
                    <div key={item._id} className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg">
                        <div className="relative h-52 w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />

                            {/* Save Button */}
                            <button
                                onClick={() => handleWishlist(item._id)}
                                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition hover:scale-110"
                            >
                                <Heart
                                    className={`h-5 w-5 transition-colors ${savedProperties.includes(item._id)
                                        ? "fill-red-500 text-red-500"
                                        : "text-gray-600 hover:fill-red-500 hover:text-red-500"
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="p-4">
                            <h2 className="text-lg font-semibold line-clamp-1">
                                {item.title}
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                {item.location}
                            </p>

                            <p className="mt-3 text-xl font-bold text-blue-600">
                                ${item.price.toLocaleString()}
                            </p>

                            <Link
                                href={`/properties/${item._id}`}
                                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            <PaginationSystem
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default PropertyCard;