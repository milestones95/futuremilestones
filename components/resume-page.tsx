"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ShadeSwitcher } from "@/components/shade-switcher"
import { useBlueTheme } from "@/components/use-blue-theme"

export function ResumePage() {
  const { active, select, style, themes } = useBlueTheme()

  return (
    <main
      className="relative flex min-h-screen flex-col px-6 py-6 transition-colors duration-500 md:px-12"
      style={style}
    >
      <SiteHeader current="Resume" />

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
            Resume
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            A quick look at my background, or grab the PDF below.
          </p>

          <Link
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: "var(--link)" }}
          >
            Download PDF
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div
          className="mt-8 overflow-hidden rounded-xl border p-2 md:p-3"
          style={{ backgroundColor: "var(--accent)", borderColor: "var(--subtle)" }}
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="h-[75vh] w-full rounded-lg border-0"
          />
        </div>
      </div>

      <ShadeSwitcher themes={themes} active={active} onSelect={select} />
    </main>
  )
}
