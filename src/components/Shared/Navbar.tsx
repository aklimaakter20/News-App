"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

import React from "react";
import { Switch } from "@/components/ui/switch";
import { IoMenuSharp } from "react-icons/io5";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

const Navbar = () => {
    const pathname = usePathname()
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-green-500">
            News-app
          </Link>
        </div>
        {/* desktop-menu */}

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className={`${pathname === '/news' ? 'text-green-500 font-semibold': ''}hover:text-red-500`}>
                News
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/services"
                className={`${pathname === '/services' ? 'text-green-500 font-semibold': ''}hover:text-red-500`}
              >
                Services
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/about"
                className={`${pathname === '/about' ? 'text-green-500 font-semibold': ''}hover:text-red-500`}
              >
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact "
                className={`${pathname === '/contact' ? 'text-green-500 font-semibold': ''}hover:text-red-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Switch className="mr-2" />
            <span className="mr-3">Dark Mode</span>

            <Button variant="default">Login</Button>
          </div>
        </div>

        {/* for mobile menu */}

        <div className="md:hidden">
            <Button variant="outline"><IoMenuSharp size={24}/></Button>
        

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
