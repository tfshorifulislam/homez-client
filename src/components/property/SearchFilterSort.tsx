"use client";

import { useState } from "react";
import PropertyTypeFilter, { PropertyType } from "../shared/FilterInput";
import SortInput, { SortType } from "./SortInput";
import SearchInput from "./SearchInput";

const SearchFilterSort = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState<PropertyType>("all");
    const [sort, setSort] = useState<SortType>("newest");

    const handleSearch = () => {
        console.log({
            search,
            type,
            sort,
        });

        // পরে router.push(...) করবে
    };

    return (
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
    );
};

export default SearchFilterSort;