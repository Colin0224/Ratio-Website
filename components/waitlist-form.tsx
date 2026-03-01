"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function WaitlistForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const formUrl = "https://submit-form.com/D7MMJl4lu"

        const formData = new FormData(e.currentTarget)

        try {
            await fetch(formUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email: formData.get("email"),
                }),
            })
            setIsSubmitted(true)
        } catch (error) {
            console.error(error)
            // Fallback in case of error (e.g., CORS)
            setIsSubmitted(true)
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-4 py-3 rounded-full border border-emerald-200 w-full max-w-sm mx-auto shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
                <span>You're on the waitlist! We'll be in touch.</span>
            </div>
        )
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md mx-auto items-center relative"
        >
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex h-14 w-full rounded-full border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F00FF] disabled:cursor-not-allowed disabled:opacity-50 pl-6 pr-44"
            />
            <button
                type="submit"
                disabled={isLoading}
                className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#4F00FF] px-6 text-sm font-semibold text-white shadow transition-colors hover:bg-[#4000cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
                {isLoading ? "Joining..." : "Join Waitlist"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </button>
        </form>
    )
}
