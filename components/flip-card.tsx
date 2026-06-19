"use client"

import { useState, type ReactNode } from "react"

export function FlipCard({
  front,
  children,
}: {
  front: string
  children: ReactNode
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group relative h-64 w-full text-left [perspective:1200px]"
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-xl border p-6 transition-colors [backface-visibility:hidden] group-hover:border-[var(--link)]"
          style={{
            backgroundColor: "var(--accent)",
            borderColor: "var(--subtle)",
          }}
        >
          <span
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Accomplishment
          </span>
          <span
            className="text-balance text-2xl font-semibold leading-snug"
            style={{ color: "var(--fg)" }}
          >
            {front}
          </span>
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            Tap for details
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl border [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{
            backgroundColor: "var(--accent)",
            borderColor: "var(--link)",
          }}
        >
          {children}
        </div>
      </div>
    </button>
  )
}
