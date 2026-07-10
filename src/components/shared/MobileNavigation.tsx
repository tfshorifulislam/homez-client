"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Building2,
    LayoutDashboard,
    User,
    Newspaper,
    LucideIcon,
} from "lucide-react";

type MenuItem = {
    title: string;
    href: string;
    icon: LucideIcon;
};

const menus: MenuItem[] = [
    {
        title: "Home",
        href: "/",
        icon: Home,
    },
    {
        title: "Property",
        href: "/properties",
        icon: Building2,
    },
    {
        title: "Profile",
        href: "/profile",
        icon: User,
    },
    {
        title: "Blog",
        href: "/blog",
        icon: Newspaper,
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
];

const MobileNavigation = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 md:hidden">
            <div className="grid h-16 grid-cols-5">
                {menus.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center gap-1 transition-colors ${active
                                ? "text-blue-600"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <Icon
                                size={22}
                                className={active ? "stroke-[2.5]" : ""}
                            />

                            <span className="text-[11px] font-medium">
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNavigation;