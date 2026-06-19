export type BlueTheme = {
  id: string
  name: string
  /** swatch shown in the version switcher */
  swatch: string
  /** CSS custom properties applied to the page root */
  vars: {
    "--bg": string
    "--fg": string
    "--muted": string
    "--subtle": string
    "--accent": string
    "--accent-fg": string
    "--kbd": string
    "--kbd-fg": string
    "--link": string
    "--grad-from": string
    "--grad-to": string
  }
}

export const blueThemes: BlueTheme[] = [
  {
    id: "midnight",
    name: "Midnight Navy",
    swatch: "#0a1226",
    vars: {
      "--bg": "#070d1c",
      "--fg": "#eef2fb",
      "--muted": "#8a96b8",
      "--subtle": "#5b6788",
      "--accent": "#16223f",
      "--accent-fg": "#eef2fb",
      "--kbd": "#1c2a4a",
      "--kbd-fg": "#cdd6ee",
      "--link": "#dbe3f7",
      "--grad-from": "#7aa2ff",
      "--grad-to": "#3b5bdb",
    },
  },
  {
    id: "white",
    name: "White",
    swatch: "#ffffff",
    vars: {
      "--bg": "#ffffff",
      "--fg": "#0f172a",
      "--muted": "#64748b",
      "--subtle": "#cbd5e1",
      "--accent": "#f1f5f9",
      "--accent-fg": "#0f172a",
      "--kbd": "#e2e8f0",
      "--kbd-fg": "#1e293b",
      "--link": "#2563eb",
      "--grad-from": "#3b5bdb",
      "--grad-to": "#7aa2ff",
    },
  },
]
