"use client"

import {
    BellIcon,
    LayoutDashboard,
    LogOutIcon,
    Settings,
    UserRound,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"
import { signOut, useSession } from "@/lib/auth-client"

export function DropdownMenuAvatar() {

    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push("/");
            router.refresh();
            toast.success("Logged out successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to log out.");
        }
    };

    const { data: session }: ReturnType<typeof useSession> = useSession();
    const user = session?.user

    const defaultImg: string = 'https://github.com/shadcn.png'

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={<Button
                    variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                        <AvatarImage
                            src={user?.image || defaultImg}
                            alt={user?.name || "User"}
                        />
                        <AvatarFallback>
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                </Button>} />
            <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <LayoutDashboard />
                        Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <UserRound />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BellIcon />
                        Notifications
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        Setting
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <LogOutIcon />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
