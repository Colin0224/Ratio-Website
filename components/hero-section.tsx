import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight text-balance">
          Why this app exists
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          A little bit about why I built Ratio
        </p>

        <div className="mt-14 bg-card rounded-3xl shadow-sm p-8 sm:p-12 border border-border/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {"Hi, I'm Cody Wong 👋"}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I built Ratio to be the most engaging and customizable focus timer possible.
            </p>
            <p>
              {"I've tried so many productivity apps over the years, and I always found myself falling off. They were either too rigid, too boring, or just didn't stick."}
            </p>
            <p>
              {"So I built Ratio with one goal in mind: make deep work rewarding and frictionless. I wanted to build a tool that actually makes you "}
              <em>want</em>
              {" to put your phone down and focus."}
            </p>
            <p>I really hope you find it as useful as I do :)</p>
          </div>

          <div className="mt-10 flex items-start gap-10">
            {/* Developer profile */}
            <div className="flex flex-col items-start">
              <span className="font-bold text-foreground">Cody Wong</span>
              <span className="text-sm text-muted-foreground">Ratio developer</span>
              <div className="mt-3 h-14 w-14 rounded-full bg-[#4F00FF]/10 overflow-hidden flex items-center justify-center">
                <span className="text-xl font-bold text-[#4F00FF]">CW</span>
              </div>
            </div>
            {/* Mascot profile */}
            <div className="flex flex-col items-start">
              <span className="font-bold text-foreground">Ratio</span>
              <span className="text-sm text-muted-foreground">Chinchilla Mascot</span>
              <div className="mt-3 h-14 w-14 rounded-full overflow-hidden bg-[#ecfdf5]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-I4zfsMKlkvF5DNH8ih6UECioN2IBqX.webp"
                  alt="Ratio the chinchilla mascot"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
