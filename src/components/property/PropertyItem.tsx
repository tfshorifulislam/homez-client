import { getAllProperty } from "@/lib/api/property";
import PropertyCard from "./PropertyCard";
import PropertyHeader from "./PropertyHeader";

type Props = {
    searchParams: Promise<{
        page?: string;
        search?: string;
        type?: string;
        sort?: "newest" | "low-high" | "high-low";
    }>;
};

const PropertyItem = async ({ searchParams }: Props) => {
    const {
        page,
        search,
        type,
        sort,
    } = await searchParams;

    const currentPage = Number(page) || 1;

    const result = await getAllProperty(
        "active",
        currentPage,
        12,
        undefined,
        search,
        type,
        sort
    );

    return (
        <div>
            <PropertyHeader />

            <div className="mx-auto max-w-7xl px-4 py-10 pb-24 md:pb-10">
                <h1 className="mb-3 text-lg font-medium md:text-xl">
                    Active Properties
                </h1>

                <PropertyCard
                    property={result.data}
                    totalPages={result.totalPages}
                    currentPage={result.currentPage}
                />
            </div>
        </div>
    );
};

export default PropertyItem;