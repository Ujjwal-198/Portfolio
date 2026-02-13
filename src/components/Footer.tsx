import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ className }: { className?: string }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`w-full border-t border-white/10 bg-zinc-950 backdrop-blur-sm ${className}`}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-10 py-14 md:px-20">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
                    <div className="max-w-md">
                        <h2 className="bg-gradient-to-r from-white via-indigo-200 to-indigo-300 bg-clip-text text-2xl font-bold leading-tight text-transparent">
                            Ujjwal Singh
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                            Full-Stack Developer focused on structured, scalable systems.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Connect</p>
                        <div className="flex items-center gap-3">
                            <Link
                                href="https://github.com/Ujjwal-198"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-indigo-300/60 hover:text-white"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/ujjwal-singh-b44256271"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-indigo-300/60 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </Link>
                            <Link
                                href="mailto:kumarujjwalsingh76@gmail.com"
                                className="rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-indigo-300/60 hover:text-white"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center">
                    <p>&copy; {currentYear} Ujjwal. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="transition hover:text-zinc-300">Home</Link>
                        <Link href="/projects" className="transition hover:text-zinc-300">Projects</Link>
                        <Link href="/contact" className="transition hover:text-zinc-300">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
