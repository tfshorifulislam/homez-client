import SearchFilterSort from "./SearchFilterSort";

const PropertyHeader = () => {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Explore <span className="text-blue-600">Properties</span>
          </h1>

          <p className="mt-2 text-muted-foreground">
            Discover apartments, villas and houses from trusted sellers.
          </p>
        </div>

        <div>
          <SearchFilterSort />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;