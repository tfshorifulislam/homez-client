"use client";

import Logo from "./Logo";
import LoginSignupBtn from "./LoginSignupBtn";
import { NavigationMenuItems } from "../shadCn/NavigationMenuItem";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">

        <Logo />

        <NavigationMenuItems />

        <LoginSignupBtn />

      </div>
    </header>
  );
};

export default Navbar;