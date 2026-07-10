"use client";

import Logo from "./Logo";
import LoginSignupBtn from "./LoginSignupBtn";
import { useSession } from "@/lib/auth-client";
import { NavigationMenuItems } from "../shadCn/NavigationMenuItem";
import { DropdownMenuAvatar } from "./DropDownMenu";

const Navbar = () => {
  const { data: session }: ReturnType<typeof useSession> = useSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">

        <Logo />

        <NavigationMenuItems />

        {
          user ?
            <DropdownMenuAvatar />
            :
            <LoginSignupBtn />
        }

      </div>
    </header>
  );
};

export default Navbar;