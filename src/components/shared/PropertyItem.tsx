import { getAllProperty } from "@/lib/api/property";
import Image from "next/image";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const PropertyItem = async () => {
    const property = await getAllProperty("active");

    return (
        <div className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="text-lg font-medium md:text-xl mb-3">
                Active Properties
            </h1>

            <PropertyCard property={property} />
        </div>
    );
};

export default PropertyItem;