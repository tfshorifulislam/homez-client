const PropartySkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 animate-pulse">
      {/* Heading */}
      <div className="mb-6 h-8 w-56 rounded bg-gray-200" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="h-52 w-full bg-gray-200" />

            <div className="space-y-3 p-4">
              <div className="h-5 w-3/4 rounded bg-gray-200" />

              <div className="h-4 w-1/2 rounded bg-gray-200" />

              <div className="h-6 w-1/3 rounded bg-gray-200" />

              <div className="mt-4 h-10 w-full rounded-lg bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center gap-2">
        <div className="h-10 w-24 rounded bg-gray-200" />
        <div className="h-10 w-10 rounded bg-gray-200" />
        <div className="h-10 w-10 rounded bg-gray-200" />
        <div className="h-10 w-10 rounded bg-gray-200" />
        <div className="h-10 w-24 rounded bg-gray-200" />
      </div>
    </div>
  );
};

export default PropartySkeleton;