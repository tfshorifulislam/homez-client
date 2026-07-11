'use client';

import Image from "next/image";
import {
    Bath,
    BedDouble,
    MapPin,
    Maximize,
    Home,
    BadgeCheck,
    Car,
    Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/api/property";
import OtherPropertyCard from "./OtherPropertyCard";


interface Props {
    property: Property;
}


const PropertyDetailsComponent = ({ property, relatedProperties }: Props) => {

    return (
        <section className="bg-muted/30 py-10">
            <div className="mx-auto max-w-7xl px-4">

                {/* Main Details */}
                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative h-[450px] overflow-hidden rounded-3xl">

                        <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            sizes="(max-width:1024px) 100vw, 50vw"
                            className="object-cover"
                        />

                    </div>

                    {/* Information */}
                    <div>

                        <div className="flex items-center gap-3">

                            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                                {property.propertyType}
                            </span>


                            {
                                property.featured && (
                                    <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600">
                                        Featured
                                    </span>
                                )
                            }

                        </div>

                        <h1 className="mt-5 text-4xl font-bold">
                            {property.title}
                        </h1>

                        <div className="mt-3 flex items-center gap-2 text-muted-foreground">

                            <MapPin size={18} />

                            {property.location}

                        </div>

                        <div className="mt-5 flex items-center gap-2">

                            <Star
                                size={20}
                                className="fill-yellow-400 text-yellow-400"
                            />

                            <span className="font-semibold">
                                {property.rating}
                            </span>

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-blue-600">

                            ${property.price.toLocaleString()}

                        </h2>

                        {/* Property Features */}

                        <div className="mt-8 grid grid-cols-2 gap-4">

                            <div className="flex items-center gap-3 rounded-xl border bg-background p-4">

                                <BedDouble className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Bedrooms
                                    </p>

                                    <p className="font-semibold">
                                        {property.bedrooms}
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl border bg-background p-4">

                                <Bath className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Bathrooms
                                    </p>

                                    <p className="font-semibold">
                                        {property.bathrooms}
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl border bg-background p-4">

                                <Maximize className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Area
                                    </p>

                                    <p className="font-semibold">
                                        {property.area} sqft
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl border bg-background p-4">

                                <Car className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Garage
                                    </p>

                                    <p className="font-semibold">
                                        {property.garage}
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl border bg-background p-4">

                                <Home className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Category
                                    </p>

                                    <p className="font-semibold">
                                        {property.category}
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl border bg-background p-4">

                                <BadgeCheck className="text-blue-600" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Status
                                    </p>

                                    <p className="font-semibold capitalize">
                                        {property.isActive}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}

                        <div className="mt-8 flex gap-4">
                            <Button className="flex-1">
                                Contact Agent
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1"
                            >
                                Book Visit
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-14 rounded-3xl border bg-background p-8">
                    <h2 className="text-2xl font-bold">
                        Description
                    </h2>
                    <p className="mt-4 leading-8 text-muted-foreground">
                        {property.description}
                    </p>
                </div>

                <OtherPropertyCard relatedProperties={relatedProperties} />
            </div>
        </section>
    );
};


export default PropertyDetailsComponent;