import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ProjectsSection = ({ className }: { className?: string }) => {
    const projects = [
        {
            title: "The Margin",
            description: "A blogging platform for creating and publishing content.",
            image: "/Images/projects/TheMarginSS.png",
            href: "/projects",
            external: false,
            featured: true,
        },
        {
            title: "InvoiceSwift",
            description: "An invoicing platform for generating and managing business invoices.",
            image: "/Images/projects/InvoiceSwiftSS.png",
            href: "https://invoiceswift-app-frontend.onrender.com/#/",
            external: true,
            featured: true,
        },
        {
            title: "Luminote",
            description: "A secure note platform for creating and browsing academic notes.",
            image: "/Images/projects/LuminoteSS.png",
            href: "https://luminote-gbzu.onrender.com/",
            external: true,
            featured: true,
        },
    ];

    return (
        <section id="projects" className={`flex w-full flex-col items-center justify-center gap-14 px-10 py-20 text-white md:px-20 ${className}`}>
            <h2 className="animate-in fade-in slide-in-from-bottom-4 text-center text-3xl leading-[1.1] font-bold text-transparent duration-700 md:text-4xl bg-gradient-to-r from-white via-indigo-200 to-indigo-300 bg-clip-text">
                Projects Overview
            </h2>
            <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
                {projects.map((project, idx) => (
                    <Card
                        key={project.title}
                        className="group relative mx-auto w-full max-w-sm overflow-hidden border-zinc-800 bg-zinc-950 pt-0 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            width={480}
                            height={280}
                            className="relative z-20 aspect-video w-full object-cover brightness-60 transition duration-300 group-hover:scale-[1.01]"
                            priority={idx === 0}
                            unoptimized={project.image.startsWith("http")}
                        />
                        <CardHeader>
                            <CardAction>
                                {project.featured ? <Badge variant="secondary" className="text-sm">Featured</Badge> : null}
                            </CardAction>
                            <CardTitle className="text-zinc-50">{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className="w-full cursor-pointer border-zinc-700 transition-all hover:border" asChild>
                                <a
                                    target={project.external ? "_blank" : undefined}
                                    rel={project.external ? "noopener noreferrer" : undefined}
                                    href={project.href}
                                >
                                    View Project
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
