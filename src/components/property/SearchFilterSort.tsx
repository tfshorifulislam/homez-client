"use client";

import { useState } from "react";
import PropertyTypeFilter, { PropertyType } from "../shared/FilterInput";
import SortInput, { SortType } from "./SortInput";
import SearchInput from "./SearchInput";


import {
    useRouter,
    usePathname,
    useSearchParams,
} from "next/navigation";
import { Button } from "../ui/button";

const SearchFilterSort = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState<PropertyType>("all");
    const [sort, setSort] = useState<SortType>("newest");

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const updateFilters = (
        nextSearch = search,
        nextType = type,
        nextSort = sort
    ) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", "1");

        if (nextSearch.trim()) {
            params.set("search", nextSearch);
        } else {
            params.delete("search");
        }

        if (nextType !== "all") {
            params.set("type", nextType);
        } else {
            params.delete("type");
        }

        if (nextSort !== "newest") {
            params.set("sort", nextSort);
        } else {
            params.delete("sort");
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_220px_220px_auto]">
            <SearchInput
                value={search}
                onChange={setSearch}
                onSearch={() => updateFilters()}
            />

            <PropertyTypeFilter
                value={type}
                onValueChange={(value) => {
                    setType(value);
                    updateFilters(search, value, sort);
                }}
            />

            <SortInput
                value={sort}
                onValueChange={(value) => {
                    setSort(value);
                    updateFilters(search, type, value);
                }}
            />

            <Button
                variant="outline"
                onClick={() => router.push("/properties?page=1")}
            >
                Clear
            </Button>
        </div>
    );
};

export default SearchFilterSort;