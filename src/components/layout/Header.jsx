// src/components/layout/Header.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Linkedin, Github, Instagram } from "lucide-react";
import { SiX } from "react-icons/si";
import fullLogo from '@/assets/logo-2.webp';

// Social media links data configuration
const socialLinks = [
    { name: "LinkedIn", url: "#", icon: Linkedin },
    { name: "X (Twitter)", url: "#", icon: SiX },
    { name: "Instagram", url: "#", icon: Instagram },
    { name: "GitHub", url: "#", icon: Github },
];

/**
 * Main application header component.
 * Renders a different navigation bar for desktop and mobile views.
 * @param {{ items: Array<{name: string, url: string}> }} props - Navigation items to display.
 */
const Header = ({ items }) => {
    const location = useLocation();

    return (
        <>
            {/* Desktop Navbar: Renders on medium screens and up */}
            <div className="hidden md:block font-heading">
                <TubelightNavbar items={items} />
            </div>

            {/* Mobile Navbar: A sticky header with a slide-out sheet menu */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden font-heading">
                <div className="container flex h-20 sm:h-24 items-center justify-between">

                    {/* Mobile Logo */}
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={fullLogo}
                            alt="Prenaya Softtech Logo"
                            // --- YAHAN FIX KIYA HAI BRO ---
                            // Logo 'above the fold' hai, isliye 'eager' aacha hai.
                            loading='eager'
                            className="h-16 w-auto min-w-[120px] sm:h-20 sm:min-w-[140px]"
                        />
                    </NavLink>

                    {/* Mobile Menu (Sheet) */}
                    <Sheet>
                        {/* Hamburger menu trigger */}
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-12 w-12">
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>

                        {/* Sidebar content */}
                        <SheetContent side="left">
                            <SheetHeader className="text-left mb-8">
                                <SheetTitle>
                                    <NavLink to="/">
                                        <img
                                            src={fullLogo}
                                            alt="Prenaya Softtech Logo"
                                            className="h-20 w-auto min-w-[160px] sm:h-24 sm:min-w-[180px]"
                                        />
                                    </NavLink>
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mapped navigation links */}
                            <div className="grid gap-4 font-heading">
                                {items.map((item) => {
                                    const isCurrent =
                                        location.pathname === item.url ||
                                        (item.url !== "/" && location.pathname.startsWith(item.url + "/"));

                                    return (
                                        <SheetClose asChild key={item.name}>
                                            <NavLink
                                                to={item.url}
                                                className={cn(
                                                    "block text-lg font-medium p-2 rounded-md hover:bg-muted transition",
                                                    isCurrent ? "bg-muted text-primary" : "text-foreground/80"
                                                )}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </SheetClose>
                                    );
                                })}
                            </div>

                            {/* Social Links Section */}
                            <div className="mt-10 border-t pt-6">
                                <p className="font-medium text-zinc-800 mb-3 text-sm">Follow Us</p>
                                <div className="flex items-center gap-3">
                                    {socialLinks.map((social) => {
                                        const SocialIcon = social.icon;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Follow us on ${social.name}`}
                                                className="p-2 bg-gray-100 rounded-full text-zinc-600 hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                <SocialIcon className="h-5 w-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    );
};

export default Header;