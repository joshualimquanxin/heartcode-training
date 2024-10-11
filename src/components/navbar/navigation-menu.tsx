"use client"

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { UserButton, SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";

export function NavigationBar() {
    const {isSignedIn} = useAuth()

    return (
        // from-slate-200 via-slate-400 to-slate-600 dark:from-slate-600 dark:via-slate-800 dark:to-slate-950
        <NavigationMenu className="flex flex-row fixed justify-between min-w-full list-none h-16 top-0 p-5 mix-blend-difference">
            <div className="flex flex-row">
                <NavigationMenuItem>
                    <Link href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/quiz" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Quiz
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about-me" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/stories" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Stories
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </div>
            <div className="text-right flex gap-4">
                {isSignedIn ?   <UserButton/> :   <SignInButton/>}
                
                <ModeToggle/>
            </div>
        </NavigationMenu>
    )
}