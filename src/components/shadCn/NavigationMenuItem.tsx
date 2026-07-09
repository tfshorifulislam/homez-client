"use client";

import * as React from "react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Box, CircleQuestionMark, CircleUserRound } from "lucide-react";

const user = false;

export function NavigationMenuItems() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        render={<Link href="/">Home</Link>}
                    />
                </NavigationMenuItem>

                {/* Property */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        render={<Link href="/properties">Property</Link>}
                    />
                </NavigationMenuItem>

                {/* Blog */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        render={<Link href="/blog">Blog</Link>}
                    />
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid w-[200px]">
                            <li>
                                <NavigationMenuLink
                                    render={<Link href="about-us"
                                        className="flex-row items-center gap-2">
                                        <Box />About Us</Link>} />
                                <NavigationMenuLink
                                    render={<Link href="contact-us"
                                        className="flex-row items-center gap-2">
                                        <CircleUserRound />Contact Us</Link>} />
                                <NavigationMenuLink
                                    render={<Link href="FAQ"
                                        className="flex-row items-center gap-2">
                                        <CircleQuestionMark />FAQ</Link>} />
                            </li>
                        </ul>
                    </NavigationMenuContent>

                </NavigationMenuItem>

                {/* Profile */}
                {user && (
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            render={<Link href="/profile">Profile</Link>}
                        />
                    </NavigationMenuItem>
                )}

                {/* Dashboard */}
                {user && (
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            render={<Link href="/dashboard">Dashboard</Link>}
                        />
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

type ListItemProps = React.ComponentPropsWithoutRef<"li"> & {
    title: string;
    href: string;
    children: React.ReactNode;
};

function ListItem({
    title,
    children,
    href,
    ...props
}: ListItemProps) {
    return (
        <li {...props}>
            <NavigationMenuLink
                render={
                    <Link
                        href={href}
                        className="block rounded-md p-3 transition-colors hover:bg-accent"
                    >
                        <div className="text-sm font-medium">{title}</div>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                            {children}
                        </p>
                    </Link>
                }
            />
        </li>
    );
}