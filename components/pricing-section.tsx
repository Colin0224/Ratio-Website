import { Check, User } from "lucide-react"

const monthlyFeatures = [
  "Premium Dark Mode",
  "Custom Outfits & Themes",
  "Detailed Focus History",
  "Home & Lock screen widgets",
  "Reminders",
  "and a lot more!",
]

const yearlyFeatures = [
  "Everything in monthly",
  "Save 17% with annual billing",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Pricing
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          {"All new accounts automatically come with a 3-day trial, no credit card needed ✌️"}
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Subscription Card */}
          <div className="rounded-3xl bg-card border border-border/50 shadow-sm p-8">
            <h3 className="text-lg font-bold text-foreground">Subscription</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-foreground">$9.99</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4F00FF]">
                    <Check className="h-3 w-3 text-card" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Yearly Card */}
          <div className="rounded-3xl bg-card border-2 border-[#4F00FF]/30 shadow-sm p-8">
            <h3 className="text-lg font-bold text-foreground">Yearly</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-foreground">$99.99</span>
              <span className="text-muted-foreground text-sm">/year</span>
            </div>
            <ul className="mt-6 space-y-3">
              {yearlyFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4F00FF]">
                    <Check className="h-3 w-3 text-card" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note on Pricing */}
        <div className="mt-10 mx-auto max-w-2xl rounded-3xl bg-[#fefce8] border border-[#fef08a]/60 shadow-sm p-8 rotate-[-0.5deg]">
          <h3 className="text-lg font-bold text-foreground">A note on pricing</h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              {"I want to be transparent about why Ratio is priced the way it is. The app uses custom themes, detailed analytics, and personalized features that take time and resources to develop and maintain."}
            </p>
            <p>
              {"On average, the cost per user is between $4-$8 per month, and in many cases, the app runs at a loss for users who use it every single day."}
            </p>
            <p>
              {"To keep the app running sustainably (without ads or selling your data), that's why it's priced the way it is. I hope to continue adding more features to make Ratio even more valuable for you."}
            </p>
            <p>Hope this helps!</p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F00FF]/10">
              <User className="h-5 w-5 text-[#4F00FF]" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">- John</span>
          </div>
        </div>
      </div>
    </section>
  )
}
