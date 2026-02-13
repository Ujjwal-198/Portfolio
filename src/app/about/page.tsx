import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Briefcase,
  Compass,
  LockKeyhole,
  Network,
  Sparkles,
  Wrench,
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

const principles = [
  {
    title: "Structured Architecture",
    description:
      "I separate concerns clearly across services, repositories, and UI layers to support maintainability and long-term project stability.",
    icon: Network,
  },
  {
    title: "Security First",
    description:
      "Authentication, role-based access control, and robust data validation are core requirements in my application design.",
    icon: LockKeyhole,
  },
  {
    title: "Scalable Design",
    description:
      "I design systems that grow predictably by keeping logic modular and patterns reusable.",
    icon: Blocks,
  },
  {
    title: "Maintainable Code",
    description:
      "Clear naming, consistent structure, and deliberate boundaries help applications evolve without structural breakdown.",
    icon: Wrench,
  },
];

const journey = [
  {
    title: "Foundations",
    text: "I started by strengthening problem-solving discipline and core computer science fundamentals.",
    icon: Compass,
  },
  {
    title: "System Building",
    text: "I then moved into full-stack development with focus on authentication flows, backend structure, and scalable architecture.",
    icon: Briefcase,
  },
  {
    title: "Current Focus",
    text: "Today I optimize for production readiness: predictable systems, clean implementation, and architecture that supports growth.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#000_0%,_#0f0f2d_40%,_transparent_100%),radial-gradient(ellipse_at_center,_#4f46e5_0%,_#1e1b4b_50%,_#000_80%)] text-zinc-100">
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-30 md:px-20">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge variant="outline" className="border-zinc-700/80 text-zinc-300">
            About Me
          </Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.15] text-transparent md:text-6xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text">
            Full-stack developer focused on structured, scalable systems.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I build full-stack applications using modern frameworks with an emphasis on modular backend architecture,
            secure authentication systems, and maintainable project structure. My approach prioritizes clarity in
            system design and long-term scalability over short-term complexity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge variant="outline" className="border-zinc-700 text-zinc-300">
              Clean Architecture
            </Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-300">
              Security by Design
            </Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-300">
              Production Ready Systems
            </Badge>
          </div>
        </section>

        <section className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <Card className="border-zinc-800 bg-black/45 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-zinc-100 md:text-3xl">Professional Summary</CardTitle>
              <CardDescription className="text-zinc-400">
                Building predictable systems through modular design and disciplined implementation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-zinc-300">
              <p>
                From implementing structured service-repository layers to organizing scalable folder architecture, I
                focus on engineering systems that are extensible, maintainable, and production-ready.
              </p>
              <p>
                I work to keep complexity intentional: clear boundaries, secure defaults, and implementation choices
                that make long-term iteration easier for teams.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-3xl font-bold leading-tight text-transparent md:text-4xl bg-gradient-to-r from-white via-indigo-200 to-indigo-300 bg-clip-text">
            How I Build
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group border-zinc-800 bg-black/45 transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-300/40"
                >
                  <CardHeader className="gap-3">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300">
                      <Icon size={14} className="text-indigo-300" />
                      Engineering Principle
                    </div>
                    <CardTitle className="text-zinc-100">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <h2 className="text-3xl font-bold leading-tight text-transparent md:text-4xl bg-gradient-to-r from-white via-indigo-200 to-indigo-300 bg-clip-text">
            Development Journey
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {journey.map((step) => {
              const Icon = step.icon;

              return (
                <Card key={step.title} className="border-zinc-800 bg-black/45">
                  <CardHeader className="gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80">
                      <Icon size={18} className="text-indigo-300" />
                    </div>
                    <CardTitle className="text-zinc-100">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-zinc-400">{step.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <Card className="border-zinc-800 bg-black/55">
            <CardHeader>
              <CardTitle className="text-2xl text-zinc-100 md:text-3xl">What I&apos;m Looking For</CardTitle>
              <CardDescription className="text-zinc-400">
                Teams and opportunities aligned with thoughtful engineering.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-3xl text-zinc-300">
                I am seeking opportunities where I can contribute to structured, production-ready systems while
                continuing to grow as a full-stack engineer. I value collaborative environments that prioritize
                clarity, architecture, and quality implementation.
              </p>
              <Button asChild variant="outline" className="w-fit border-zinc-700 bg-zinc-950/60 text-zinc-100">
                <Link href="/contact">
                  Let&apos;s Connect
                  <ArrowUpRight />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
