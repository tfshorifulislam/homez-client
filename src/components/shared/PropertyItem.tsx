import { getAllProperty } from "@/lib/api/property";
import PropertyCard from "./PropertyCard";

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};


const PropertyItem = async ({ searchParams }: Props) => {
    const { page } = await searchParams;

    const currentPage = Number(page) || 1;
    const result = await getAllProperty("active", currentPage, 12);


    return (
        <div className="mx-auto max-w-7xl px-4 py-10 pb-24 md:pb-10">
            <h1 className="text-lg font-medium md:text-xl mb-3">
                Active Properties
            </h1>

            <PropertyCard
                property={result.data}
                totalPages={result.totalPages}
                currentPage={result.currentPage}
            />
        </div>
    );
};

export default PropertyItem;