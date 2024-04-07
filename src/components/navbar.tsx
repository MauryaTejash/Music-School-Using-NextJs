'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


//here we have to define the type
function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed top-10 max-w-2xl mx-auto z-50", className)}>
            {/* the mandatory field */}
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} item="Home" active={active}>
                        
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} item="Our Courses" active={active}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/basicMusictheory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advance Composition</HoveredLink>
                        <HoveredLink href="/courses">SongWriting</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} item="Contact Us" active={active}>

                    </MenuItem>
                </Link>
                <Link href={'/signup'}>
                    <MenuItem setActive={setActive} item="SignUp" active={active}>

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar