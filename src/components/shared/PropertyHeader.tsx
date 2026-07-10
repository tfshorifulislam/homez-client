"use client";

import { useState } from "react";

import SearchInput from "./SearchInput";

import PropertyTypeFilter, {
  PropertyType,
} from "./FilterInput";

import SortInput, {
  SortType,
} from "./SortInput";

const PropertyHeader = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<PropertyType>("all");
  const [sort, setSort] = useState<SortType>("newest");

  const handleSearch = () => {
    console.log({
      search,
      type,
      sort,
    });
  };

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

        <div className="grid items-center gap-4 lg:grid-cols-[1fr_220px_220px]">
          <SearchInput
            value={search}
            onChange={setSearch}
            onSearch={handleSearch}
          />

          <PropertyTypeFilter
            value={type}
            onValueChange={setType}
          />

          <SortInput
            value={sort}
            onValueChange={setSort}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeader;