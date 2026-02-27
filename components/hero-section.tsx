import { User, PawPrint } from "lucide-react"

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
            {"Hi, I'm Chris 👋"}
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
            <p>
              I really hope you find it as useful as I do :)
            </p>
            <p>
              {"If you like Ratio, check out my other apps: "}
              <a href="#" className="text-[#4F00FF] underline underline-offset-2 hover:text-[#4000cc]">Ellie</a>
              {" (a better daily planner), "}
              <a href="#" className="text-[#4F00FF] underline underline-offset-2 hover:text-[#4000cc]">Luna</a>
              {" (a better budgeting app), and "}
              <a href="#" className="text-[#4F00FF] underline underline-offset-2 hover:text-[#4000cc]">Mogul</a>
              {" (a better networking app)."}
            </p>
          </div>

          <div className="mt-10 flex items-start gap-10">
            <div className="flex flex-col items-start">
              <span className="font-bold text-foreground">Chris Raroque</span>
              <span className="text-sm text-muted-foreground">Ratio developer</span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#4F00FF]/10">
                <User className="h-6 w-6 text-[#4F00FF]" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-foreground">Ratio</span>
              <span className="text-sm text-muted-foreground">Chinchilla Mascot</span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#4F00FF]/10">
                <PawPrint className="h-6 w-6 text-[#4F00FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
