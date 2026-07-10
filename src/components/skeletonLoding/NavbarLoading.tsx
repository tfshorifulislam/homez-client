import React from 'react';
import { Skeleton } from '../ui/skeleton';

const NavbarLoading = () => {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-18 items-center justify-between px-4">

                {/* Logo Skeleton */}
                <Skeleton className="h-10 w-28 rounded-md" />


                {/* Menu Skeleton */}
                <div className="hidden items-center gap-6 md:flex">
                    <Skeleton className="h-8 w-16 rounded-md" />
                    <Skeleton className="h-8 w-20 rounded-md" />
                    <Skeleton className="h-8 w-14 rounded-md" />
                    <Skeleton className="h-8 w-16 rounded-md" />
                </div>


                {/* Button Skeleton */}
                <Skeleton className="h-10 w-28 rounded-lg" />

            </div>
        </header>
    );
};

export default NavbarLoading;