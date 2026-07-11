"use client";

import * as React from "react";
import {
    BellIcon,
    Building2,
    ClipboardList,
    Heart,
    LayoutDashboard,
    LogOutIcon,
    PlusSquare,
    Settings,
    User,
    UserRound,
    Users,
    LogIn,
    UserPlus,
} from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

export function DropdownMenuAvatar() {
    const router = useRouter();

    const { data: session }: ReturnType<typeof useSession> = useSession();
    const user = session?.user;

    const defaultImg = "https://github.com/shadcn.png";

    const role: Role = (user?.role as Role) || "buyer";
    const roleMenus = user ? menus[role] : [];

    const handleSignOut = async () => {
        try {
            await signOut();

            toast.success("Logged out successfully!");

            router.push("/");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to log out.");
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={user && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full p-0">
                    <Avatar className="h-10 w-10">
                        <AvatarImage
                            src={user.image || defaultImg}
                            alt={user.name || "User"} />
                        <AvatarFallback>
                            {user.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            )} />

            <DropdownMenuContent align="end" className="w-50 p-2">
                {user && (
                    <>
                        <DropdownMenuGroup className="space-y-1">
                            {roleMenus.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <DropdownMenuItem
                                        key={item.href}
                                        className="cursor-pointer rounded-md px-3 py-2 md:hidden"
                                        onClick={() => router.push(item.href)}
                                    >
                                        <Icon className="mr-2 h-4 w-4" />
                                        <span>{item.title}</span>
                                    </DropdownMenuItem>
                                )
                            })}
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator className="my-2 md:hidden" />
                        <DropdownMenuItem
                            className="cursor-pointer rounded-md px-3 py-2 text-red-600 focus:text-red-600"
                            onClick={handleSignOut}>
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            <span>Sign Out</span>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}