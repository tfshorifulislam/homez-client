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
import { signOut } from "@/lib/auth-client"

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

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>LR</AvatarFallback>
            </Avatar></Button>} />
            <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserRound />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LayoutDashboard />
                        Dashboard
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
