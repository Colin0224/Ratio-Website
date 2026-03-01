import Image from "next/image"
import Link from "next/link"
import { WaitlistForm } from "./waitlist-form"

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
    <div className={`relative w-40 sm:w-48 shrink-0 ${offset}`}>
      <div className="relative w-full aspect-[9/19.5] rounded-[2.2rem] border-[4px] border-gray-900 bg-gray-900  overflow-hidden shadow-gray-900/40">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 160px, 192px"
          unoptimized
          priority
        />
        {/* Top hardware bezel (dynamic island) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-[14px] w-[55px] rounded-full bg-black" />
        {/* Bottom hardware bezel (home indicator) */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 h-[4px] w-[36px] rounded-full bg-black/40" />
      </div>
    </div>
  )
}

export function HomeHeroSection() {
  return (
    <section className="pt-20 pb-10 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Text + Mascot */}
        <div className="text-center max-w-3xl mx-auto relative">
          {/* Mascot floating on the side (visible on larger screens) */}
          <div className="hidden lg:block absolute -right-36 top-0">
            <Image
              src="/mascot-thumbsup.png"
              alt="Ratio mascot giving thumbs up"
              width={220}
              height={220}
              className="object-contain animate-bounce-slow drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-foreground tracking-tight text-balance leading-[1.05]">
            The focus timer that actually{" "}
            <span className="text-[#4F00FF]">sticks.</span>
          </h1>

          {/* Mascot inline for mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            <Image
              src="/mascot-thumbsup.png"
              alt="Ratio mascot giving thumbs up"
              width={150}
              height={150}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Ratio pairs a gamified focus timer with a loveable chinchilla mascot. Build streaks, hit your big goals, and make deep work something you actually look forward to.
          </p>
          <div id="waitlist" className="mt-10">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-sm font-medium text-muted-foreground/80">
            Join the waitlist to get early access and exclusive updates.
          </p>
        </div>

        {/* Phone screenshots row */}
        <div className="mt-16 flex items-end justify-center gap-4 sm:gap-6">
          {heroScreenshots.map((s) => (
            <HeroPhone key={s.alt} src={s.src} alt={s.alt} offset={s.offset} />
          ))}
        </div>

        {/* Soft gradient fade at bottom */}
        <div className="pointer-events-none h-24 from-background -mt-20 relative z-10" />
      </div>
    </section>
  )
}
