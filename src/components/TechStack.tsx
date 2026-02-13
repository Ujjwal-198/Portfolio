import { Badge } from "@/components/ui/badge"

const TechStack = ({ className }: { className?: string }) => {
    const tools = [
        "React", "Next.js", "Tailwind CSS", "TypeScript", "Server Actions", "Node.js",
        "MongoDB", "Mongoose", "Vercel", "Git", "GitHub", "Data Structures & Algorithms",
        "Shadcn UI", "JWT", "Bcrypt", "Express", "REST APIs", "Postman", "NextAuth", "RBAC",
    ];

    return (
        <section className={`flex w-full flex-col items-center justify-center gap-12 px-10 py-20 text-zinc-50 md:px-20 ${className}`}>
            <h2 className="animate-in fade-in slide-in-from-bottom-4 text-center text-3xl leading-[1.1] font-bold text-transparent duration-700 md:text-4xl bg-gradient-to-r from-white via-indigo-200 to-indigo-300 bg-clip-text">
                Tech Stack & Tools
            </h2>
            <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-xl md:p-8">
                <div className="flex max-w-5xl flex-wrap items-start justify-center gap-3 md:mx-auto">
                    {tools.map((tool) => (
                        <Badge
                            key={tool}
                            variant="outline"
                            className="border-zinc-700 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-300 transition hover:border-indigo-300/50 hover:text-zinc-100"
                        >
                            {tool}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
