"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { Loader2, } from "lucide-react";
import DeleteDialog from "./DeleteDialog";

type Property = {
    _id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    location: string;
    category: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    garage: number;
    propertyType: string;
    featured: boolean;
    isActive: "active" | "inActive";
};


const MyPropertiesPage = () => {
    const { data: session } = useSession();

    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session?.user?.email) return;

        const fetchProperties = async () => {

            //client component get token.

            try {
                const { data: userToken } = await authClient.token();

                if (!userToken) {
                    console.error("Token not found");
                    return;
                }

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-properties/${session.user.email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userToken.token}`,
                        },
                    }
                );

                const data = await res.json();
                console.log(data);
                console.log(Array.isArray(data));

                setProperties(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [session?.user?.email]);

    if (loading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <Loader2 className="h-7 w-7 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 rounded-2xl border bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
                <h1 className="text-3xl font-bold">
                    My Properties
                </h1>

                <p className="mt-2 text-blue-100">
                    View, update and manage all of your listed properties in one place.
                </p>

                <div className="mt-6 inline-flex items-center rounded-xl bg-white/15 px-4 py-2 backdrop-blur">
                    <span className="text-sm">Total Properties</span>

                    <span className="ml-3 text-xl font-bold">
                        {properties.length}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {properties.map((item) => (
                    <div
                        key={item._id}
                        className="overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />

                            {/* Property Type */}
                            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow">
                                {item.propertyType}
                            </span>

                            {/* Status */}
                            <span
                                className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.isActive === "active"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                    }`}
                            >
                                {item.isActive === "active" ? "Active" : "Inactive"}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 p-4">
                            <div>
                                <h2 className="line-clamp-1 text-lg font-bold">
                                    {item.title}
                                </h2>

                                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{item.location}</span>

                                <span>⭐ {item.rating}</span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span>🛏 {item.bedrooms} Bed</span>

                                <span>🚿 {item.bathrooms} Bath</span>

                                <span>📐 {item.area} sqft</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-blue-600">
                                    ${item.price.toLocaleString()}
                                </h3>

                                {item.featured && (
                                    <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <div>
                                <DeleteDialog id={item._id} />
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPropertiesPage;