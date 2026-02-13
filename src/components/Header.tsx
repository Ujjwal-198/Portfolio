"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-5 left-1/2 z-50 w-[92%] -translate-x-1/2 text-zinc-50 md:w-auto">
            <div className="rounded-full border border-white/10 bg-zinc-900/70 px-4 py-3 backdrop-blur-xl backdrop-saturate-200 md:px-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="px-2 py-1 text-sm font-semibold tracking-wide text-zinc-100 md:hidden">
                        Ujjwal
                    </Link>

                    <ul className="hidden items-center justify-center gap-5 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="px-3 py-1 text-md text-zinc-200 transition hover:text-white">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-zinc-200 transition hover:bg-white/10 hover:text-white md:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {isOpen ? (
                    <nav className="mt-3 border-t border-white/10 pt-3 md:hidden">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block rounded-md px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ) : null}
            </div>
        </header>
    );
}
