import { getAllProperty } from "@/lib/api/property";
import Link from "next/link";
import FeaturedCarousel from "./FeaturedCarousel";

const Featured = async () => {
    

    const result = await getAllProperty(
        "active",
        1,
        8,
        true
    );


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
                    View All
                </Link>


            </div>

            <FeaturedCarousel properties={result.data}/>

        </section>
    );
};


export default Featured;