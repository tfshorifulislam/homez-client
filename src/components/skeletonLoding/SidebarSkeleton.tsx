import { Skeleton } from "@/components/ui/skeleton";

const SidebarSkeleton = () => {
    return (
        <aside className="sticky top-0 hidden h-screen w-60 flex-col border-r bg-white md:flex">

            {/* Header Skeleton */}
            <div className="border-b px-6 py-5">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-xl" />

                    <div className="space-y-2">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-3 w-20" />
                    </div>
                </div>
            </div>


            {/* Menu Skeleton */}
            <nav className="flex-1 space-y-3 p-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="h-11 w-full rounded-lg"
                    />
                ))}
            </nav>

        </aside>
    );
};

export default SidebarSkeleton;