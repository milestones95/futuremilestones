"use client"

import { ArrowRight, Command } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ShadeSwitcher } from "@/components/shade-switcher"
import { useBlueTheme } from "@/components/use-blue-theme"

const SOCIAL_LINKS = ["email", "twitter", "github", "linkedin", "instagram"]

export function LandingPage() {
  const { active, select, style, themes } = useBlueTheme()

  return (
    <main
      className="relative flex min-h-screen flex-col px-6 py-6 transition-colors duration-500 md:px-12"
      style={style}
    >
      <SiteHeader current="Home" />

      {/* Hero */}
      <section className="flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-balance text-6xl font-bold tracking-tight md:text-8xl">
            Miles Tucker
          </h1>

          <div className="mt-8 space-y-2">
            <p className="text-lg md:text-xl">
              Software Engineer &amp; CEO at{" "}
              <a
                href="#"
                className="underline underline-offset-4"
                style={{ color: "var(--link)" }}
              >
                Resend
              </a>
            </p>
            <p className="text-lg md:text-xl" style={{ color: "var(--muted)" }}>
              Love building products and talking to users
            </p>
          </div>

          <button
            type="button"
            className="mt-10 flex items-center gap-2 text-lg font-semibold"
          >
            <span>Press</span>
            <kbd
              className="flex size-7 items-center justify-center rounded-md text-sm"
              style={{ backgroundColor: "var(--kbd)", color: "var(--kbd-fg)" }}
            >
              <Command className="size-4" aria-hidden="true" />
            </kbd>
            <kbd
              className="flex size-7 items-center justify-center rounded-md text-sm font-bold"
              style={{ backgroundColor: "var(--kbd)", color: "var(--kbd-fg)" }}
            >
              K
            </kbd>
            <span>to start</span>
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Footer social links */}
      <footer className="flex justify-center gap-8 pt-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm transition-colors hover:opacity-100"
            style={{ color: "var(--muted)" }}
          >
            {link}
          </a>
        ))}
      </footer>

      <ShadeSwitcher themes={themes} active={active} onSelect={select} />
    </main>
  )
}
