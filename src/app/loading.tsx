import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <section className="min-h-screen bg-muted/30 py-10">
            <div className="mx-auto max-w-7xl px-4">

                {/* Hero Skeleton */}
                <div className="rounded-3xl border bg-white p-8 shadow-sm">

                    <Skeleton className="h-10 w-72" />

                    <Skeleton className="mt-4 h-5 w-full max-w-xl" /> 

                    <Skeleton className="mt-2 h-5 w-96" />


                    <div className="mt-8 grid gap-6 md:grid-cols-3">

                        {
                            [1,2,3].map((item)=>(
                                <div
                                    key={item}
                                    className="space-y-4"
                                >
                                    <Skeleton className="h-48 w-full rounded-xl" />

                                    <Skeleton className="h-6 w-3/4" />

                                    <Skeleton className="h-4 w-1/2" />

                                    <Skeleton className="h-5 w-1/3" />

                                </div>
                            ))
                        }

                    </div>

                </div>




                {/* Property Cards Skeleton */}

                <div className="mt-12">

                    <Skeleton className="h-8 w-64" />


                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {
                            [1,2,3,4].map((item)=>(
                                <div
                                    key={item}
                                    className="overflow-hidden rounded-xl border bg-white"
                                >

                                    <Skeleton className="h-56 w-full" />


                                    <div className="space-y-4 p-5">

                                        <Skeleton className="h-6 w-full" />

                                        <Skeleton className="h-4 w-2/3" />

                                        <Skeleton className="h-7 w-1/2" />


                                        <Skeleton className="h-10 w-full rounded-lg" />

                                    </div>


                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
        </section>
    );
};


export default Loading;