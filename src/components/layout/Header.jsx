import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { TubelightNavbar } from '@/components/ui/tubelight-navbar';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mountain } from "lucide-react";

const Header = ({ items }) => {
    return (
        <>
            {/* DESKTOP NAVBAR */}
            <div className="hidden md:block font-heading">
                <TubelightNavbar items={items} />
            </div>

            {/* MOBILE NAVBAR */}
            <header className="font-heading sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
                <div className="container flex h-14 items-center justify-between">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <Mountain className="h-6 w-6" />
                        <span className="font-bold">Prenaya Softtech</span>
                    </NavLink>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader className="text-left mb-8">
                                <SheetTitle>
                                    <div className="flex items-center space-x-2">
                                        <Mountain className="h-6 w-6" />
                                        <span className="font-bold">Prenaya Softtech</span>
                                    </div>
                                </SheetTitle>
                                <SheetDescription>
                                    Navigate to different pages of the website.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="grid gap-4">
                                {items.map((item) => (
                                    <SheetClose asChild key={item.name}>
                                        <NavLink
                                            to={item.url}
                                            className={({ isActive }) =>
                                                cn(
                                                    "block text-lg font-medium p-2 rounded-md hover:bg-muted",
                                                    isActive ? "bg-muted text-primary" : "text-foreground/80"
                                                )
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    );
};

export default Header;