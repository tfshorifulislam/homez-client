import { getAllProperty } from "@/lib/api/property";
import Image from "next/image";
import Link from "next/link";

const PropertyItem = async () => {
    const property = await getAllProperty("active");

    return (
        <div className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="text-lg font-medium md:text-xl mb-3">
                Active Properties
            </h1>

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
        </div>
    );
};

export default PropertyItem;