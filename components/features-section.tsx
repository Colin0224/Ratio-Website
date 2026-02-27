import Image from "next/image"

const features = [
  {
    title: "Distraction-free focus timer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-Q8ZVsrAz7gI8iLWJ5W5YGfXt0YBeac.webp",
    bg: "bg-[#f3f0ff]",
  },
  {
    title: "Track Big Goals & Energy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-p0QQ4hCOAK6Fpq1yAtYZuOrX0pup0O.webp",
    bg: "bg-[#fef3e2]",
  },
  {
    title: "Weekly Power Grid",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img11-Hq3XpB7Wws2viABt9BzKPwmnoN8kqO.webp",
    bg: "bg-[#ecfdf5]",
  },
  {
    title: "Visual Focus Calendar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img12-8QiRURgwcBWDos1rx23Ox5RURlO6Hb.png",
    bg: "bg-[#fef3e2]",
  },
  {
    title: "Goals at a glance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img10-aSYsXLWeTPFcmKT8ElT5nrl6gOHLDm.webp",
    bg: "bg-[#f3f0ff]",
  },
  {
    title: "Mascot Customization",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-I4zfsMKlkvF5DNH8ih6UECioN2IBqX.webp",
    bg: "bg-[#ecfdf5]",
  },
  {
    title: "Custom App Themes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img9-6ebhvnZ3eaP0qZU0oTrDSfjmIE2o46.webp",
    bg: "bg-[#f3f0ff]",
  },
  {
    title: "Satisfying Sounds",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img7-joszguoT2xwlrSb240Mgqt6xYWPZ5O.webp",
    bg: "bg-[#fef3e2]",
  },
  {
    title: "Custom App Icons",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img8-gkYtXLINB7MrJHh8fNVbsaLthr17SK.webp",
    bg: "bg-[#ecfdf5]",
  },
]

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-48 sm:w-56">
      {/* Phone frame */}
      <div className="relative rounded-[2rem] border-[6px] border-foreground/10 bg-card shadow-lg overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-6 w-28 rounded-b-2xl bg-foreground/10" />
        {/* Screen */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 192px, 224px"
          />
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight text-balance">
          {"Simple, but powerful 💪"}
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl mx-auto">
          Powerful features to help you break your struggle and dedicate your focus to building.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className={`${feature.bg} rounded-3xl p-6 pb-4 w-full flex flex-col items-center`}>
                <PhoneMockup src={feature.image} alt={feature.title} />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
