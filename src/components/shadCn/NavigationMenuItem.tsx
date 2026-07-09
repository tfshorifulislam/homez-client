"use client"

import * as React from "react"
import Link from "next/link"
import {
    CircleAlertIcon,
    CircleCheckIcon,
    CircleDashedIcon,
} from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const user:boolean = false;

export function NavigationMenuItems() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>

                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink

                        className={navigationMenuTriggerStyle()}
                    >
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Property */}
                <NavigationMenuItem>
                    <NavigationMenuLink

                        className={navigationMenuTriggerStyle()}
                    >
                        <Link href="/properties">Property</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Blog */}
                <NavigationMenuItem>
                    <NavigationMenuLink

                        className={navigationMenuTriggerStyle()}
                    >
                        <Link href="/blog">Blog</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid w-56 gap-1 p-2">
                            <ListItem href="/about" title="About Us">
                                Learn more about Homez.
                            </ListItem>

                            <ListItem href="/contact" title="Contact">
                                Get in touch with our team.
                            </ListItem>

                            <ListItem href="/faq" title="FAQ">
                                Frequently asked questions.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Profile */}
                {user &&
                    <NavigationMenuItem>
                        <NavigationMenuLink

                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/profile">Profile</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                }

                {/* Dashboard */}
                {user &&
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>
                            <Link href="/dashboard">Dashboard</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                }


            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
                <div className="leading-none font-medium">{title}</div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div></Link>} />
        </li>
    )
}
