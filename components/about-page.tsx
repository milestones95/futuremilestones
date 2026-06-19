"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { ShadeSwitcher } from "@/components/shade-switcher"
import { FlipCard } from "@/components/flip-card"
import { useBlueTheme } from "@/components/use-blue-theme"

const countries = [
  "Spain",
  "Italy",
  "Germany",
  "United Arab Emirates",
  "United Kingdom",
  "France",
  "Morocco",
  "South Africa",
  "Ghana",
  "Thailand",
  "Singapore",
  "Indonesia",
  "Philippines",
  "Japan",
  "Canada",
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Dominican Republic",
  "Mexico",
]

export function AboutPage() {
  const { active, select, style, themes } = useBlueTheme()

  return (
    <main
      className="relative flex min-h-screen flex-col px-6 py-6 transition-colors duration-500 md:px-12"
      style={style}
    >
      <SiteHeader current="About" />

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
            Miles Tucker
          </span>
        </h1>

        {/* Photo + bio */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,420px)_1fr] md:gap-14">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/bio.jpg"
              alt="Miles Tucker on safari with an elephant in the background"
              width={840}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed md:text-xl">
            <p style={{ color: "var(--muted)" }}>
              <span style={{ color: "var(--fg)" }}>Yo, I&apos;m Miles! </span>
              I think challenges make life interesting because they give us something to
              work towards. A bit about me....
            </p>

            <p style={{ color: "var(--muted)" }}>
              {" "}
              I'm an Ex-Microsoft Engineer and have been doing startups since 2020. Most of them were complete flops,
              but they helped me build the muscle of bringing my ideas to life and not being afraid to embarrass myself lol.
            </p>

            <p style={{ color: "var(--muted)" }}>
              Some projects did earn some revenue. The ideas I'm most proud of are:
            </p>

            <ul className="space-y-2 pl-1" style={{ color: "var(--muted)" }}>
              <li className="flex gap-3">
                <span aria-hidden="true" style={{ color: "var(--accent-fg)" }}>
                  &mdash;
                </span>
                <span style={{ color: "var(--fg)" }}>Generating written sex stories</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" style={{ color: "var(--accent-fg)" }}>
                  &mdash;
                </span>
                <span style={{ color: "var(--fg)" }}>
                  Automating quality assurance testing for customer&apos;s websites
                </span>
              </li>
            </ul>

            <p style={{ color: "var(--muted)" }}>
              If you want to read the entire list of projects I&apos;ve worked on since
              2020, you can{" "}
              <Link
                href="/projects"
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: "var(--link)" }}
              >
                find them here
              </Link>
              .
            </p>

            <p style={{ color: "var(--muted)" }}>
              Want to see what I did at Microsoft? Check out my{" "}
              <Link
                href="https://www.linkedin.com/in/miles-tucker-software-engineer/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: "var(--link)" }}
              >
                LinkedIn
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Interesting accomplishments */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight">Interesting Accomplishments</h2>
          <p className="mt-4 text-lg" style={{ color: "var(--muted)" }}>
            Tap a card to flip it and see the details.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Countries */}
            <FlipCard front="Traveled to 21 countries">
              <div className="flex h-full flex-col p-5">
                <h3
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent-fg)" }}
                >
                  21 countries
                </h3>
                <ul
                  className="mt-3 flex flex-wrap gap-x-3 gap-y-1 overflow-y-auto text-sm leading-relaxed"
                  style={{ color: "var(--fg)" }}
                >
                  {countries.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </FlipCard>

            {/* Pharrell */}
            <FlipCard front="Received $50k Investment from Pharrell Williams">
              <div className="relative h-full w-full">
                <Image
                  src="/images/black-ambition.jpg"
                  alt="Demo Day presented by Louis Vuitton — Black Ambition founders holding an oversized prize check on stage with Pharrell Williams"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium"
                  style={{
                    color: "#ffffff",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                >
                  Backed by Pharrell&apos;s Black Ambition — Demo Day, presented by Louis
                  Vuitton
                </span>
              </div>
            </FlipCard>

            {/* Dancing */}
            <FlipCard front="Danced salsa & bachata for 1 year">
              <div className="relative h-full w-full">
                <Image
                  src="/images/dancing.jpg"
                  alt="Miles dancing on a ballroom social dance floor under chandeliers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium"
                  style={{
                    color: "#ffffff",
                    background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                  }}
                >
                  Salsa &amp; bachata on the social dance floor
                </span>
              </div>
            </FlipCard>
          </div>
        </section>
      </div>

      <ShadeSwitcher themes={themes} active={active} onSelect={select} />
    </main>
  )
}
