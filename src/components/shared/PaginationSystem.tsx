'use client';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationSystemProps = {
    currentPage: number;
    totalPages: number;
};

const PaginationSystem = ({
    currentPage,
    totalPages,
}: PaginationSystemProps) => {
    return (
        <div className="mt-8 w-fit mx-auto">
            <Pagination>
                <PaginationContent>

                    <PaginationItem>
                        <PaginationPrevious
                            href={`?page=${Math.max(currentPage - 1, 1)}`}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href={`?page=${index + 1}`}
                                isActive={currentPage === index + 1}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href={`?page=${Math.min(currentPage + 1, totalPages)}`}
                        />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PaginationSystem;