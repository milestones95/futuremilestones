"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ShadeSwitcher } from "@/components/shade-switcher"
import { useBlueTheme } from "@/components/use-blue-theme"

type Project = {
  name: string
  date: string
  description: string
  revenue?: string
  link?: { label: string; href: string }
}

const projects: Project[] = [
  {
    name: "Darknore",
    date: "2023–2026",
    description:
      "Making QA testing easier. Instead of spending hours manually testing features each week, my startup Darknore made it easy for teams to automate their testing without writing code. Darknore was specifically used for testing web applications. This idea did okay. Most of the people I talked to didn't have improving testing as a top priority. I had a hard time getting strangers to even try it, let alone pay. Most of my customers were within my network.",
    revenue: "$2,150",
    link: { label: "darknore.ai", href: "https://darknore.ai" },
  },
  {
    name: "Resume writing",
    date: "2022",
    description:
      "This one generated revenue the fastest.We used AI to generate resumes for product managers looking for a job. We acquired customers through career prep Slack channels and TikTok content. Shut it down because we didn't think there would be much customer retention with generating resumes. Looking back on it, this was one of the better ideas because we were getting strangers consistently through marketing, and we had market pull for the product.",
    revenue: "$1k",
  },
  {
    name: "Checkflow",
    date: "2022",
    description:
      "$5 to conduct background checks on guests on behalf of Airbnb hosts. Some hosts were interested, but the price they were willing to pay didn't make sense as a business.",
    revenue: "$5",
  },
  {
    name: "Untold",
    date: "2021",
    description:
      "Users could request a personalized sex story to be written for them. They could define the setting, characters, sex details, and more. This one also had decent market pull, and all the paying customers were complete strangers from reddit. But I couldn't figure out a consistent way to acquire new customers online and lost energy on it.",
    revenue: "$455",
    link: {
      label: "View landing page",
      href: "https://landing-page-c23a48-83581ad046b8b7a0fd1.webflow.io/",
    },
  },
  {
    name: "Thorou",
    date: "2020",
    description:
      "A Chrome extension that optimizes credit card selection at checkout when shopping online. Cards earn different point multipliers depending on the merchant. For example, your Amex Platinum earns 3× on eBay while your Chase Sapphire earns only 1×. On a $247 eBay purchase, that's the difference between $14 and $7 in rewards value. Thorou detects the merchant, compares multipliers across your linked cards, and surfaces the better card before you pay.",
    revenue: "$0",
  },
  {
    name: "Withizze",
    date: "2020",
    description:
      "A Chrome extension that helps people shop for clothes online. It shows what women of similar appearance and size to you rated the clothing.",
    revenue: "$0",
  },
]

export function ProjectsPage() {
  const { active, select, style, themes } = useBlueTheme()

  return (
    <main
      className="relative flex min-h-screen flex-col px-6 py-6 transition-colors duration-500 md:px-12"
      style={style}
    >
      <SiteHeader current="Projects" />

      <div className="mx-auto w-full max-w-5xl pt-12 pb-32 md:pt-20">
        {/* Gradient headline */}
        <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--grad-from), var(--grad-to))",
            }}
          >
            Projects
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          A running list of the things I&apos;ve built since 2020. Most were flops, a few
          earned revenue, and got better at shipping after each one.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border p-6 transition-colors md:p-8"
              style={{ backgroundColor: "var(--accent)", borderColor: "var(--subtle)" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
                  {project.name}
                </h2>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                  style={{ backgroundColor: "var(--kbd)", color: "var(--kbd-fg)" }}
                >
                  {project.date}
                </span>
                {project.revenue ? (
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                    style={{ backgroundColor: "var(--kbd)", color: "var(--kbd-fg)" }}
                  >
                    Revenue: {project.revenue}
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-base leading-relaxed md:text-lg" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              {project.link ? (
                <Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color: "var(--link)" }}
                >
                  {project.link.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <ShadeSwitcher themes={themes} active={active} onSelect={select} />
    </main>
  )
}
