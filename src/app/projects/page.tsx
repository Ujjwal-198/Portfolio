import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenText,
  Database,
  FileSpreadsheet,
  Layers3,
  Lightbulb,
  LockKeyhole,
  NotebookPen,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    name: "The Margin",
    short:
      "A role-based blogging platform built with modular backend architecture and structured content workflows.",
    overview:
      "The Margin is a structured blogging platform that enables authenticated users to create, manage, and publish content within a role-based access control system.",
    problem:
      "Managing content workflows requires controlled access, scalable organization, and clean separation between presentation and data layers.",
    capabilities: [
      "Secure authentication flow",
      "Role-based access control (admin / user)",
      "Structured content CRUD operations",
      "Organized backend service and repository layers",
      "Scalable folder architecture for maintainability",
    ],
    architecture:
      "The system separates business logic and database operations using modular service-repository structure to maintain clean responsibility boundaries. Authentication and access control are enforced at both route and logic levels.",
    takeaway:
      "Designed for long-term maintainability with clear system layering and scalable code organization.",
    implementation: {
      techStack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "TailwindCSS", "Server Actions"],
      architecture:
        "The application follows a modular structure separating concerns into service and repository layers. Business logic is handled within dedicated service modules, while database operations are abstracted through repository functions to maintain clean responsibility boundaries.",
      securityTitle: "Authentication & Authorization",
      security:
        "Authentication is implemented using NextAuth with session handling. Role-Based Access Control (RBAC) is enforced at both route-level and logic-level to ensure secure content publishing workflows.",
      database:
        "MongoDB is used for flexible content storage. Mongoose schemas define structured models for users and posts, with clear relational referencing and validation rules.",
      decisions: [
        "Separated business logic from database operations",
        "Structured folder hierarchy for scalability",
        "Route protection using authentication middleware",
        "Controlled publishing permissions based on role",
      ],
      outcome:
        "A scalable blogging system with structured backend layering and maintainable code organization.",
    },
    icon: BookOpenText,
  },
  {
    name: "Luminote",
    short:
      "A secure note management system designed for user-level data isolation and scalable backend organization.",
    overview:
      "Luminote is a minimal note management platform that allows users to securely create, organize, and manage personal notes.",
    problem:
      "Personal note systems require fast interactions, user-level isolation, and structured data modeling without unnecessary complexity.",
    capabilities: [
      "Secure user authentication",
      "User-scoped data isolation",
      "Real-time CRUD operations",
      "Clean API layer organization",
      "Efficient MongoDB schema design",
    ],
    architecture:
      "The application enforces strict user-level data boundaries and maintains clarity between frontend state and backend persistence layers.",
    takeaway:
      "Built with simplicity in mind while maintaining structured backend discipline and scalable organization.",
    implementation: {
      techStack: ["React", "JavaScript", "MongoDB", "Mongoose", "JWT", "REST APIs", "TailwindCSS"],
      architecture:
        "Built using a clean separation between frontend interaction logic and backend persistence. Server-side actions handle CRUD operations while enforcing user-level data boundaries.",
      securityTitle: "Authentication & Data Isolation",
      security:
        "Each note is associated with an authenticated user ID. All database queries are scoped by user to ensure strict data isolation and prevent cross-user access.",
      database:
        "Notes are modeled with user references, timestamps, and validation constraints. Indexing strategy ensures efficient retrieval for user-specific data queries.",
      decisions: [
        "Enforced strict user-level data isolation",
        "Optimized MongoDB queries for performance",
        "Simplified API layer while maintaining structure",
        "Maintained predictable folder organization",
      ],
      outcome:
        "A minimal yet secure note management system emphasizing scalability and clarity.",
    },
    icon: NotebookPen,
  },
  {
    name: "InvoiceSwift",
    short:
      "A structured invoicing application built with modular business logic and efficient financial data management.",
    overview:
      "InvoiceSwift is a streamlined invoicing platform built to enable structured invoice creation, tracking, and management for small-scale business workflows.",
    problem:
      "Manual invoice handling often lacks structure, tracking clarity, and efficient record management.",
    capabilities: [
      "Invoice generation and tracking",
      "Structured database schema design",
      "Organized financial record management",
      "Modular business logic layer",
      "Clean UI for workflow efficiency",
    ],
    architecture:
      "Designed with modular backend logic to separate financial computations from request handling. Data modeling prioritizes scalability for expanding invoice records and client data.",
    takeaway:
      "Focused on building structured business logic workflows with clean backend layering and predictable system behavior.",
    implementation: {
      techStack: ["React", "JavaScript", "MongoDB", "Mongoose", "JWT", "TailwindCSS", "REST API Patterns"],
      architecture:
        "The backend separates financial logic from request handlers. Invoice generation logic is encapsulated in service-level modules, ensuring clear separation between computation and data persistence.",
      securityTitle: "Business Logic Design",
      security:
        "Invoice totals, item aggregation, and data validation are handled through modular functions to keep financial computation predictable and maintainable.",
      database:
        "Invoices and client records are structured using normalized schemas to maintain scalability for expanding business records.",
      decisions: [
        "Encapsulated financial computation logic",
        "Designed scalable invoice schema",
        "Maintained separation between UI rendering and backend processing",
        "Organized codebase for future extensibility",
      ],
      outcome:
        "A structured invoicing system with modular financial workflows and scalable backend organization.",
    },
    icon: FileSpreadsheet,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#000_0%,_#0f0f2d_40%,_transparent_100%),radial-gradient(ellipse_at_center,_#4f46e5_0%,_#1e1b4b_50%,_#000_80%)] text-zinc-100">
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-30 md:px-20">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
            Projects
          </Badge>
          <h1 className="mt-4 max-w-5xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-4xl font-bold leading-[1.12] text-transparent md:text-6xl">
            Engineering-focused projects built with structure, scalability, and system clarity.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
            These projects reflect my approach to full-stack development: clean architecture, secure flows,
            maintainable backend organization, and predictable system behavior.
          </p>
        </section>

        <section className="mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <Card
                  key={project.name}
                  className="group border-zinc-800 bg-black/45 transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-300/40"
                >
                  <CardHeader className="gap-3">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300">
                      <Icon size={14} className="text-indigo-300" />
                      Featured Project
                    </div>
                    <CardTitle className="text-zinc-100">{project.name}</CardTitle>
                    <CardDescription className="text-zinc-400">{project.short}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="border-zinc-700 bg-zinc-950/60 text-zinc-100 hover:bg-zinc-900 hover:text-zinc-100"
                    >
                      <Link href="/contact">
                        Discuss Project
                        <ArrowUpRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.name}
                className={`border-zinc-800 bg-black/50 animate-in fade-in slide-in-from-bottom-4 duration-700 ${index === 0 ? "delay-300" : index === 1 ? "delay-500" : "delay-700"
                  }`}
              >
                <CardHeader>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300">
                    <Icon size={14} className="text-indigo-300" />
                    Detailed Breakdown
                  </div>
                  <CardTitle className="mt-2 text-2xl text-zinc-100 md:text-3xl">{project.name}</CardTitle>
                  <CardDescription className="text-zinc-400">{project.overview}</CardDescription>
                </CardHeader>

                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                        <Lightbulb size={15} className="text-indigo-300" />
                        Problem It Solves
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.problem}</p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                        <Layers3 size={15} className="text-indigo-300" />
                        Architectural Focus
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.architecture}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                        <ShieldCheck size={15} className="text-indigo-300" />
                        Core Capabilities
                      </p>
                      <ul className="flex flex-col mt-3 space-y-2">
                        {project.capabilities.map((capability) => (
                          <li key={capability} className="inline-flex items-start gap-2 text-sm text-zinc-400">
                            <BadgeCheck size={14} className="mt-0.5 shrink-0 text-indigo-300" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                      <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                        <LockKeyhole size={15} className="text-indigo-300" />
                        Key Takeaway
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.takeaway}</p>
                    </div>
                  </div>
                </CardContent>

                <CardContent className="pt-0">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 md:p-5">
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                      <ServerCog size={15} className="text-indigo-300" />
                      Implementation Details
                    </p>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Tech Stack</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.implementation.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-zinc-700 text-zinc-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                          <Database size={13} className="text-indigo-300" />
                          Database Design
                        </p>
                        <p className="mt-2 text-sm text-zinc-400">{project.implementation.database}</p>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Architecture</p>
                        <p className="mt-2 text-sm text-zinc-400">{project.implementation.architecture}</p>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{project.implementation.securityTitle}</p>
                        <p className="mt-2 text-sm text-zinc-400">{project.implementation.security}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Key Engineering Decisions</p>
                        <ul className="mt-2 space-y-2">
                          {project.implementation.decisions.map((decision) => (
                            <li key={decision} className="inline-flex items-start gap-2 text-sm text-zinc-400">
                              <BadgeCheck size={14} className="mt-0.5 shrink-0 text-indigo-300" />
                              <span>{decision}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Outcome</p>
                        <p className="mt-2 text-sm text-zinc-400">{project.implementation.outcome}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </main>
    </div>
  );
}
