import Link from "next/link";
import {
  CalendarClock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Send,
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

const contactOptions = [
  {
    title: "Email",
    value: "kumarujjwalsingh76@gmail.com",
    href: "mailto:kumarujjwalsingh76@gmail.com",
    icon: Mail,
    detail: "Best for project discussions and collaboration inquiries.",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/ujjwal-singh-b44256271",
    href: "https://linkedin.com/in/ujjwal-singh-b44256271",
    icon: Linkedin,
    detail: "For professional networking and role-based opportunities.",
  },
  {
    title: "GitHub",
    value: "github.com/Ujjwal-198",
    href: "https://github.com/Ujjwal-198",
    icon: Github,
    detail: "Explore code samples, architecture patterns, and experiments.",
  },
];

const quickInfo = [
  { label: "Location", value: "India (Remote Friendly)", icon: MapPin },
  { label: "Response Time", value: "Within 24-48 hours", icon: CalendarClock },
  { label: "Preferred Contact", value: "Email / LinkedIn", icon: PhoneCall },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#000_0%,_#0f0f2d_40%,_transparent_100%),radial-gradient(ellipse_at_center,_#4f46e5_0%,_#1e1b4b_50%,_#000_80%)] text-zinc-100">
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-30 md:px-20">
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge variant="outline" className="border-zinc-700 text-zinc-300">
            Contact
          </Badge>
          <h1 className="mt-4 max-w-4xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-4xl font-bold leading-[1.15] text-transparent md:text-6xl">
            Let&apos;s build something structured and meaningful.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
            I&apos;m open to discussing full-stack opportunities, collaborative builds, and architecture-driven
            projects. If your team values clarity, quality, and scalable implementation, I&apos;d be glad to connect.
          </p>
        </section>

        <section className="mt-14 grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Card className="border-zinc-800 bg-black/45 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-zinc-100">Reach Out</CardTitle>
                <CardDescription className="text-zinc-400">
                  Choose the channel that works best for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {contactOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <Link
                      key={option.title}
                      href={option.href}
                      target={option.href.startsWith("http") ? "_blank" : undefined}
                      rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group block rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 transition hover:-translate-y-0.5 hover:border-indigo-300/40"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex size-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70">
                          <Icon size={16} className="text-indigo-300" />
                        </div>
                        <div>
                          <p className="font-medium text-zinc-100">{option.title}</p>
                          <p className="text-sm text-zinc-400">{option.value}</p>
                          <p className="mt-1 text-xs text-zinc-500">{option.detail}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-black/45">
              <CardHeader>
                <CardTitle className="text-zinc-100">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="inline-flex size-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70">
                        <Icon size={14} className="text-indigo-300" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                        <p className="text-sm text-zinc-300">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          <Card className="border-zinc-800 bg-black/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 lg:col-span-3">
            <CardHeader>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-300">
                <MessageSquareText size={14} className="text-indigo-300" />
                Send a Message
              </div>
              <CardTitle className="text-zinc-100">Project Inquiry Form</CardTitle>
              <CardDescription className="text-zinc-400">
                Share a quick overview and I&apos;ll get back with next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm text-zinc-300">Full Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-10 rounded-md border border-zinc-700 bg-zinc-950/70 px-3 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/60"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-zinc-300">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-10 rounded-md border border-zinc-700 bg-zinc-950/70 px-3 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/60"
                  />
                </label>
                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm text-zinc-300">Subject</span>
                  <input
                    type="text"
                    placeholder="Project scope / role / opportunity"
                    className="h-10 rounded-md border border-zinc-700 bg-zinc-950/70 px-3 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/60"
                  />
                </label>
                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm text-zinc-300">Message</span>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project, timeline, and goals."
                    className="min-h-32 rounded-md border border-zinc-700 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/60"
                  />
                </label>
                <div className="relative md:col-span-2">
                  <div className="group w-full">
                    <Button
                      type="button"
                      disabled
                      className="w-full cursor-not-allowed bg-indigo-500 text-white"
                    >
                      Send Message
                      <Send />
                    </Button>
                    <div className="pointer-events-none absolute -top-14 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-zinc-200 shadow-lg group-hover:block">
                      Please email me at kumarujjwalsingh76@gmail.com
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
