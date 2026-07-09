'use client';

import Link from "next/link";
import { Home } from "lucide-react";

const Logo = () => {
    return (
        <Link
            href="/"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                <Home className="h-6 w-6" strokeWidth={2.2} />
            </div>

            <div className="hidden md:flex flex-col leading-none">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                    Home<span className="text-blue-600">z</span>
                </h1>

                <p className=" text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                    Real Estate
                </p>
            </div>
        </Link>
    );
};

export default Logo;