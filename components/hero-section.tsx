import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4F00FF]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F00FF]/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section header with gradient accent */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4F00FF]/[0.08] border border-[#4F00FF]/15 mb-6">
            <span className="text-xs font-semibold text-[#4F00FF] uppercase tracking-wider">Our Story</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-balance">
            <span className="text-foreground">Why this app </span>
            <span className="bg-gradient-to-r from-[#4F00FF] to-[#7C3AED] bg-clip-text text-transparent">exists</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
            A little bit about why I built Ratio — and the journey behind it
          </p>
        </div>

        {/* Main card */}
        <div className="mt-14 relative group">
          {/* Glow effect behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4F00FF]/20 via-[#7C3AED]/10 to-[#4F00FF]/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-card rounded-[1.75rem] shadow-xl shadow-black/[0.04] border border-border/60 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Mascot side */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-[#4F00FF]/[0.06] via-[#7C3AED]/[0.12] to-[#4F00FF]/[0.18] p-10 md:p-12 md:w-[320px] shrink-0">
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-56 h-56 rounded-full border border-[#4F00FF]/[0.08]" />
                  <div className="absolute w-72 h-72 rounded-full border border-[#4F00FF]/[0.05]" />
                </div>

                <div className="relative">
                  {/* Soft glow behind mascot */}
                  <div className="absolute inset-0 bg-[#4F00FF]/10 rounded-full blur-2xl scale-75" />
                  <Image
                    src="/mascot.png"
                    alt="Ratio the chinchilla mascot waving"
                    width={320}
                    height={320}
                    className="object-contain drop-shadow-xl relative z-10"
                    priority
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#4F00FF] to-[#7C3AED] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#4F00FF]/25 whitespace-nowrap">
                    Meet Ratio! 🐭
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="p-8 sm:p-12 lg:p-14 flex-1 relative">
                {/* Large decorative quote mark */}
                <div className="absolute top-6 right-8 text-[#4F00FF]/[0.06] pointer-events-none select-none">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                  {"Hi, I'm John Wong "}
                  <span className="inline-block animate-bounce-slow">👋</span>
                </h2>

                <div className="mt-7 space-y-4 text-base leading-[1.8] text-muted-foreground">
                  <p>
                    I built Ratio to be the most engaging and customizable focus timer possible.
                  </p>
                  <p>
                    {"I've tried so many productivity apps over the years, and I always found myself falling off. They were either too rigid, too boring, or just didn't stick."}
                  </p>
                  <p>
                    {"So I built Ratio with one goal in mind: make deep work rewarding and frictionless. I wanted to build a tool that actually makes you "}
                    <em className="font-semibold text-foreground/80 not-italic">want</em>
                    {" to put your phone down and focus."}
                  </p>
                  <p className="text-foreground/70 font-medium">
                    I really hope you find it as useful as I do :)
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-10 mb-6 h-px bg-gradient-to-r from-border via-border/60 to-transparent" />

                {/* Developer profile — frosted glass card */}
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#4F00FF]/[0.04] to-transparent px-5 py-3.5 rounded-2xl border border-[#4F00FF]/10">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4F00FF] to-[#7C3AED] flex items-center justify-center shrink-0 shadow-md shadow-[#4F00FF]/20">
                      <span className="text-base font-bold text-white">JW</span>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-card" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground text-sm">John Wong</span>
                    <span className="text-xs text-muted-foreground">Creator & Developer of Ratio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
