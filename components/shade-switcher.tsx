"use client"

import type { BlueTheme } from "@/components/blue-themes"

type ShadeSwitcherProps = {
  themes: BlueTheme[]
  active: number
  onSelect: (index: number) => void
}

export function ShadeSwitcher({ themes, active, onSelect }: ShadeSwitcherProps) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="flex items-center gap-1 rounded-full border px-1.5 py-1.5 backdrop-blur"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 60%, transparent)",
          borderColor: "color-mix(in srgb, var(--fg) 15%, transparent)",
        }}
      >
        {themes.map((t, i) => {
          const isActive = i === active
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelect(i)}
              title={t.name}
              className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all"
              style={{
                backgroundColor: isActive
                  ? "color-mix(in srgb, var(--fg) 12%, transparent)"
                  : "transparent",
                color: isActive ? "var(--fg)" : "var(--muted)",
              }}
            >
              <span
                className="size-3 rounded-full ring-1 ring-inset ring-white/20"
                style={{ backgroundColor: t.swatch }}
              />
              <span className="hidden sm:inline">{t.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
