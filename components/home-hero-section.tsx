import Image from "next/image"
import Link from "next/link"

const heroScreenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-Q8ZVsrAz7gI8iLWJ5W5YGfXt0YBeac.webp",
    alt: "Focus State timer screen",
    offset: "translate-y-6",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-I4zfsMKlkvF5DNH8ih6UECioN2IBqX.webp",
    alt: "Ratio mascot den screen",
    offset: "-translate-y-3",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img11-Hq3XpB7Wws2viABt9BzKPwmnoN8kqO.webp",
    alt: "Weekly planner screen",
    offset: "translate-y-6",
  },
]

function HeroPhone({ src, alt, offset }: { src: string; alt: string; offset: string }) {
  return (
    <div className={`relative w-36 sm:w-44 shrink-0 ${offset}`}>
      <div className="relative rounded-[2.2rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-4 w-20 rounded-full bg-gray-900" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.6rem]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 144px, 176px"
            unoptimized
            priority
          />
        </div>
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 h-1 w-16 rounded-full bg-white/30" />
      </div>
    </div>
  )
}

export function HomeHeroSection() {
  return (
    <section className="pt-20 pb-10 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Text */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-foreground tracking-tight text-balance leading-[1.05]">
            The focus timer that actually{" "}
            <span className="text-[#4F00FF]">sticks.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Ratio pairs a gamified focus timer with a loveable chinchilla mascot. Build streaks, hit your big goals, and make deep work something you actually look forward to.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#4F00FF] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#4000cc] transition-colors shadow-lg shadow-[#4F00FF]/30"
            >
              Download for Free
            </Link>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Free 3-day trial. No credit card required.
          </p>
        </div>

        {/* Phone screenshots row */}
        <div className="mt-16 flex items-end justify-center gap-4 sm:gap-6">
          {heroScreenshots.map((s) => (
            <HeroPhone key={s.alt} src={s.src} alt={s.alt} offset={s.offset} />
          ))}
        </div>

        {/* Soft gradient fade at bottom */}
        <div className="pointer-events-none h-24 bg-gradient-to-t from-background to-transparent -mt-20 relative z-10" />
      </div>
    </section>
  )
}
