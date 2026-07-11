"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import {
    Building2,
    ClipboardList,
    Heart,
    Home,
    LayoutDashboard,
    PlusSquare,
    Settings,
    User,
    Users,
} from "lucide-react";

type Role = "buyer" | "seller" | "admin";

type MenuItem = {
    title: string;
    href: string;
    icon: React.ElementType;
};

const menus: Record<Role, MenuItem[]> = {
    buyer: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Profile",
            href: "/dashboard/profile",
            icon: User,
        },
        {
            title: "Wishlist",
            href: "/dashboard/wishlist",
            icon: Heart,
        },
        {
            title: "My Bookings",
            href: "/dashboard/bookings",
            icon: ClipboardList,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ],

    seller: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Add Property",
            href: "/dashboard/add-property",
            icon: PlusSquare,
        },
        {
            title: "My Properties",
            href: "/dashboard/my-properties",
            icon: Building2,
        },
        {
            title: "Profile",
            href: "/dashboard/profile",
            icon: User,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },

    ],

    admin: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Users",
            href: "/dashboard/users",
            icon: Users,
        },
        {
            title: "Properties",
            href: "/dashboard/properties",
            icon: Building2,
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ],
};

const SideBar = () => {
    const pathname = usePathname();

    const { data: session } = useSession();

    const role = (session?.user?.role as Role) ?? "buyer";

    return (
        <aside className="sticky top-0 hidden h-screen w-62 flex-col border-r bg-white md:flex">
            {/* Header */}
            <div className="border-b px-6 py-5">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Home size={22} />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-blue-600">Homez</h2>

                        <p className="text-xs capitalize text-gray-500">
                            {role} Dashboard
                        </p>
                    </div>
                </Link>
            </div>

            {/* Menu */}
            <nav className="flex-1 space-y-2 overflow-y-auto p-4">
                {menus[role].map((item) => {
                    const Icon = item.icon;

                    const active =
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/");

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${active
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                                }`}
                        >
                            <Icon className="h-5 w-5" />

                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
};

export default SideBar;