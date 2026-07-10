import { getAllProperty } from "@/lib/api/property";
import Image from "next/image";
import Link from "next/link";

const Featured = async () => {
    const result = await getAllProperty("active", 1, 6, true);

    return (
        <section className="mx-auto max-w-7xl px-4 py-20">
            {/* Header */}
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Featured
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        Featured Properties
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        Explore our hand-picked premium properties.
                    </p>
                </div>

                <Link
                    href="/properties"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-blue-600 px-5 py-2.5 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white sm:w-auto"
                >
                    Show All
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {result.data.map((item) => (
                    <div
                        key={item._id}
                        className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="relative h-56 w-full">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="line-clamp-1 text-lg font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {item.location}
                            </p>

                            <p className="mt-3 text-2xl font-bold text-blue-600">
                                ${item.price.toLocaleString()}
                            </p>

                            <Link
                                href={`/properties/${item._id}`}
                                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 py-2.5 font-medium text-white transition hover:bg-blue-700"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;