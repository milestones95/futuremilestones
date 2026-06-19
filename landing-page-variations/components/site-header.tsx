"use client"

import { useState } from "react"
import Link from "next/link"
import { Command, Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
]

export function SiteHeader({ current }: { current?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold tracking-tight">
        MT
      </Link>

      <nav className="hidden items-center gap-1 lg:flex">
        {NAV_ITEMS.map((item) => {
          const isActive = item.label === current
          return (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors"
              style={
                isActive
                  ? { backgroundColor: "var(--accent)", color: "var(--accent-fg)" }
                  : { color: "var(--muted)" }
              }
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden"
        style={{ color: "var(--muted)" }}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <Command className="hidden size-6 lg:block" style={{ color: "var(--muted)" }} aria-hidden="true" />

      {open && (
        <nav
          className="absolute top-full right-0 z-50 mt-2 flex flex-col gap-1 rounded-xl border p-2 backdrop-blur lg:hidden"
          style={{
            backgroundColor: "color-mix(in srgb, var(--bg) 90%, transparent)",
            borderColor: "color-mix(in srgb, var(--fg) 15%, transparent)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === current
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors"
                style={
                  isActive
                    ? { backgroundColor: "var(--accent)", color: "var(--accent-fg)" }
                    : { color: "var(--muted)" }
                }
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
