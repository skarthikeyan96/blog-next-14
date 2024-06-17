'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {LoginLink, LogoutLink, useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/posts",
        label: "Posts"
    },
    {
        href: "/create-post",
        label: "Create post"
    }

]
const Header = () => {
    const pathname = usePathname();
    console.log(pathname)
    const { user } = useKindeBrowserClient();
    console.log(user)

    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Image src="/vercel.svg" className="w-[40px] h-[40px]" alt="Logo" width={40} height={40} />
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                    {
                        navLinks.map((link, idx) => {
                            return (
                                <Link className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`} key={idx} href={link.href}> {link.label} </Link>
                            )
                        })
                    }
                    {
                        user ? <LogoutLink> Logout </LogoutLink> : <LoginLink> Login </LoginLink>
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header;
