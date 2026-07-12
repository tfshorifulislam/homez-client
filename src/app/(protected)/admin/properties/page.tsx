'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import {
    CheckCircle2,
    MapPin,
    XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

export type Property = {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    location: string;
    category: string;
    propertyType: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    garage: number;
    status: string;
    userName: string;
    userEmail: string;
};

const PendingPropertiesPage = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/inactive`
                );

                const data = await res.json();
                setProperties(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const handleAccept = async (id: string) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/property/accept/${id}`,
                {
                    method: "PATCH",
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);

            setProperties((prev) =>
                prev.filter((property) => property._id !== id)
            );
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    const handleReject = async (id: string) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/property/reject/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);
            setProperties((prev) =>
                prev.filter((property) => property._id !== id)
            );
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    if (loading) {
        return (
            <div className="flex h-72 items-center justify-center">
                <p className="text-lg font-medium text-muted-foreground">
                    Loading properties...
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl lg:flex-row lg:items-center">
                <div>
                    <h1 className="text-3xl font-bold">
                        Pending Property Requests
                    </h1>

                    <p className="mt-2 max-w-2xl text-blue-100">
                        Review submitted properties and decide whether to approve
                        or reject them before they appear publicly.
                    </p>
                </div>

                <div className="rounded-2xl bg-white/10 px-8 py-5 text-center backdrop-blur">
                    <p className="text-sm text-blue-100">
                        Total Pending
                    </p>

                    <h2 className="mt-1 text-4xl font-bold">
                        {properties.length}
                    </h2>
                </div>
            </div>

            {/* Empty */}
            {properties.length === 0 ? (
                <Card className="rounded-3xl py-16">
                    <CardContent className="text-center">
                        <h2 className="text-2xl font-bold">
                            No Pending Properties
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            All submitted properties have already been reviewed.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {properties.map((property) => (
                        <Card
                            key={property._id}
                            className="group overflow-hidden rounded-3xl border py-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                <Badge className="absolute left-4 top-4 bg-amber-500 text-white hover:bg-amber-500">
                                    Pending Review
                                </Badge>

                                <div className="absolute bottom-5 left-5">
                                    <p className="text-3xl font-bold text-white">
                                        ${property.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Body */}
                            <CardContent className="space-y-5 p-6">
                                <div>
                                    <h2 className="line-clamp-1 text-xl font-bold">
                                        {property.title}
                                    </h2>

                                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        {property.location}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">
                                        {property.propertyType}
                                    </Badge>

                                    <Badge variant="outline">
                                        {property.category}
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-3 gap-3 rounded-xl bg-muted/40 p-3 text-center">
                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Beds
                                        </p>

                                        <p className="font-bold">
                                            {property.bedrooms}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Baths
                                        </p>

                                        <p className="font-bold">
                                            {property.bathrooms}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Area
                                        </p>

                                        <p className="font-bold">
                                            {property.area} sqft
                                        </p>
                                    </div>
                                </div>
                            </CardContent>

                            {/* Footer */}
                            <CardFooter className="grid grid-cols-2 gap-3 border-t bg-muted/30 p-5">
                                <Button
                                    onClick={() => handleAccept(property._id)}
                                    className="h-11 rounded-xl bg-green-600 font-semibold hover:bg-green-700"
                                >
                                    <CheckCircle2 className="mr-2 h-4 w-4" />
                                    Accept
                                </Button>

                                <Button
                                    variant="destructive"
                                    onClick={() => handleReject(property._id)}
                                    className="h-11 rounded-xl"
                                >
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Reject
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PendingPropertiesPage;