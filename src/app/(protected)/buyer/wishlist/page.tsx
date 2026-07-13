'use client';

import { useEffect, useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import { Property } from "@/lib/api/property";
import WishlistCard from "@/components/protectedComponent/WishlistCard";
import { toast } from "react-toastify";

const WishlistPage = () => {
    const { data: session } = useSession();

    const [wishlist, setWishlist] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session?.user?.email) return;

        const fetchWishlist = async () => {
            try {

                const { data: userToken } = await authClient.token();

                if (!userToken) {
                    console.error("Token not found");
                    return;
                }


                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist/properties/${session.user.email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userToken.token}`,
                        },
                    }
                );

                const data: Property[] = await res.json();
                setWishlist(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, [session?.user?.email]);

    const handleRemove = async (propertyId: string) => {
        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        propertyId,
                        userEmail: session?.user?.email,
                    }),
                }
            );

            setWishlist((prev) =>
                prev.filter((item) => item._id !== propertyId)
            );
            toast.success('remove suscess')
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className="py-20 text-center">
                Loading...
            </div>
        );
    }

    if (wishlist.length === 0) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-semibold">
                    Your wishlist is empty.
                </h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="mb-8 text-3xl font-bold">
                My Wishlist
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {wishlist.map((item) => (
                    <WishlistCard
                        key={item._id}
                        property={item}
                        onRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;