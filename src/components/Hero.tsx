import { Button } from "./ui/button";
import { Download, MoveRight } from 'lucide-react';
import Link from "next/link";

export default function Hero({ className }: { className?: string }) {
    return (
        <div className={`flex flex-col justify-center items-start md:px-20 px-10 min-h-screen md:gap-6 gap-8 w-full text-zinc-50 ${className}`}>
            <h1 className="text-4xl sm:text-6xl font-bold leading-[1.2] bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-[1.2]">
                Engineering Systems with <br />
                Precision and Structure
            </h1>

            <p className="md:text-lg text-sm text-zinc-300 max-w-2xl leading-[1.2] tracking-wide">
                I approach web development with a strong foundation in <span className="font-semibold text-white">logical problem-solving and structured system design. </span>From backend architecture organization to authentication workflows, I build applications that are optimized, maintainable, and thoughtfully engineered.
            </p>
            <div className="flex gap-5 mt-4">
                <Button
                    variant="outline"
                    className="cursor-pointer border-zinc-700 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900 hover:text-zinc-100"
                    asChild
                >
                    <a href="/Docs/UjjwalSingh.pdf" download="UjjwalSingh.pdf">
                        <Download /> Download CV
                    </a>
                </Button>
                <Button variant="link" className="cursor-pointer text-zinc-50"><Link href="/projects">See My Work</Link> <MoveRight /></Button>
            </div>
        </div>
    );
}
