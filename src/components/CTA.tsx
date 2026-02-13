import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

const CTA = ({ className }: { className?: string }) => {
    return (
        <section className={`flex w-full flex-col items-center justify-center gap-5 px-10 py-20 md:px-20 ${className}`}>
            <div className="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950/45 p-8 text-center backdrop-blur-sm md:p-10">
                <h2 className="animate-in fade-in slide-in-from-bottom-4 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-3xl font-bold leading-[1.3] text-transparent duration-700 md:text-4xl">
                    Let&apos;s Build Something Meaningful.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-400 md:text-lg">
                    I&apos;m open to collaborating on structured, scalable web applications and challenging development
                    problems. If you&apos;re looking for someone who values clean architecture and disciplined
                    implementation, let&apos;s connect.
                </p>
                <div className="mt-10 flex w-full items-center justify-center gap-6">
                    <Button
                        variant="outline"
                        className="cursor-pointer border-zinc-700 bg-zinc-950/50 text-zinc-100 hover:bg-zinc-900 hover:text-zinc-100"
                        asChild
                    >
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                    <Button variant="link" className="cursor-pointer text-zinc-50" asChild>
                        <Link href="/projects">
                            See My Work <MoveRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
