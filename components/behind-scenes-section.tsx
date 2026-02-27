import { Youtube, Instagram, ExternalLink } from "lucide-react"

export function BehindScenesSection() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight text-balance">
          {"Behind the scenes 👀"}
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          {"Want to see me build Ratio? I make videos documenting my progress 👀"}
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* YouTube Card */}
          <div className="rounded-3xl bg-card border border-border/50 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <Youtube className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">YouTube</p>
                  <p className="text-xs text-muted-foreground">Chris Raroque</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-card hover:bg-red-700 transition-colors"
              >
                Open <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-xl bg-secondary flex items-center justify-center overflow-hidden"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 shadow-sm">
                    <div className="h-0 w-0 ml-0.5 border-y-[6px] border-y-transparent border-l-[10px] border-l-foreground/70" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Card */}
          <div className="rounded-3xl bg-card border border-border/50 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                  <Instagram className="h-5 w-5 text-card" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Instagram</p>
                  <p className="text-xs text-muted-foreground">@chris.raroque</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-card hover:bg-foreground/90 transition-colors"
              >
                Open <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="flex gap-3 justify-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[9/16] w-28 rounded-xl bg-secondary flex items-center justify-center"
                >
                  <div className="h-6 w-8 rounded bg-muted-foreground/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
