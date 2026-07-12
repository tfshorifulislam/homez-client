'use client'
import Link from "next/link";

const SidebarSkeleton = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 flex-col border-r bg-white md:flex">
      <div className="border-b px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 animate-pulse rounded-xl bg-gray-200" />

          <div className="space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
          </div>
        </Link>
      </div>

      <div className="flex-1 space-y-3 p-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-11 animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;