"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { blueThemes } from "@/components/blue-themes"

const STORAGE_KEY = "mt-blue-theme"

export function useBlueTheme() {
  const [active, setActive] = useState(0)

  // Load persisted selection on mount
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored !== null) {
      const index = Number.parseInt(stored, 10)
      if (!Number.isNaN(index) && index >= 0 && index < blueThemes.length) {
        setActive(index)
      }
    }
  }, [])

  const select = (index: number) => {
    setActive(index)
    window.localStorage.setItem(STORAGE_KEY, String(index))
  }

  const theme = blueThemes[active]

  const style = {
    backgroundColor: "var(--bg)",
    color: "var(--fg)",
    ...theme.vars,
  } as CSSProperties

  return { active, select, theme, style, themes: blueThemes }
}
