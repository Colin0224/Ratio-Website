import type { Metadata } from "next"
import Link from "next/link"
import { PawPrint, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
    title: "Privacy Policy - Ratio",
    description:
        "Privacy Policy for the Ratio app by Donna Ding.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <PawPrint className="h-7 w-7 text-[#4F00FF]" />
                        <span className="text-xl font-extrabold text-foreground tracking-tight">
                            Ratio
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#4F00FF]/10 px-4 py-1.5 text-xs font-semibold text-[#4F00FF] mb-6">
                        Legal
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Effective as of <span className="font-semibold text-foreground">February 28, 2026</span>
                    </p>
                </div>

                {/* Body */}
                <div className="prose prose-neutral max-w-none space-y-8 text-foreground/85 leading-relaxed">
                    <p>
                        This privacy policy applies to the Ratio app (hereby referred to as
                        &ldquo;Application&rdquo;) for mobile devices that was created by
                        Donna Ding (hereby referred to as &ldquo;Service Provider&rdquo;) as
                        a Freemium service. This service is intended for use &ldquo;AS
                        IS&rdquo;.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Information Collection and Use
                        </h2>
                        <p>
                            The Application collects information when you download and use it.
                            This information may include information such as:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-1.5">
                            <li>
                                Your device&apos;s Internet Protocol address (e.g. IP address)
                            </li>
                            <li>
                                The pages of the Application that you visit, the time and date
                                of your visit, the time spent on those pages
                            </li>
                            <li>The time spent on the Application</li>
                            <li>
                                The operating system you use on your mobile device
                            </li>
                        </ul>
                        <p className="mt-4">
                            The Application does not gather precise information about the
                            location of your mobile device.
                        </p>
                        <p className="mt-4">
                            The Application does not use Artificial Intelligence (AI)
                            technologies to process your data or provide features.
                        </p>
                        <p className="mt-4">
                            The Service Provider may use the information you provided to
                            contact you from time to time to provide you with important
                            information, required notices and marketing promotions.
                        </p>
                        <p className="mt-4">
                            For a better experience, while using the Application, the Service
                            Provider may require you to provide us with certain personally
                            identifiable information, including but not limited to Email,
                            Activity. The information that the Service Provider request will be
                            retained by them and used as described in this privacy policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Third Party Access
                        </h2>
                        <p>
                            Only aggregated, anonymized data is periodically transmitted to
                            external services to aid the Service Provider in improving the
                            Application and their service. The Service Provider may share your
                            information with third parties in the ways that are described in
                            this privacy statement.
                        </p>
                        <p className="mt-4">
                            Please note that the Application utilizes third-party services that
                            have their own Privacy Policy about handling data. Below are the
                            links to the Privacy Policy of the third-party service providers
                            used by the Application:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-1">
                            <li>
                                <a
                                    href="https://firebase.google.com/support/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#4F00FF] hover:underline font-medium"
                                >
                                    Google Analytics for Firebase
                                </a>
                            </li>
                        </ul>
                        <p className="mt-4">
                            The Service Provider may disclose User Provided and Automatically
                            Collected Information:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-1.5">
                            <li>
                                as required by law, such as to comply with a subpoena, or
                                similar legal process;
                            </li>
                            <li>
                                when they believe in good faith that disclosure is necessary to
                                protect their rights, protect your safety or the safety of
                                others, investigate fraud, or respond to a government request;
                            </li>
                            <li>
                                with their trusted services providers who work on their behalf,
                                do not have an independent use of the information we disclose to
                                them, and have agreed to adhere to the rules set forth in this
                                privacy statement.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Opt-Out Rights
                        </h2>
                        <p>
                            You can stop all collection of information by the Application
                            easily by uninstalling it. You may use the standard uninstall
                            processes as may be available as part of your mobile device or via
                            the mobile application marketplace or network.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Data Retention Policy
                        </h2>
                        <p>
                            The Service Provider will retain User Provided data for as long as
                            you use the Application and for a reasonable time thereafter. If
                            you&apos;d like them to delete User Provided Data that you have
                            provided via the Application, please contact them at{" "}
                            <a
                                href="mailto:hootdaniel99@gmail.com"
                                className="text-[#4F00FF] hover:underline font-medium"
                            >
                                hootdaniel99@gmail.com
                            </a>{" "}
                            and they will respond in a reasonable time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Children
                        </h2>
                        <p>
                            The Service Provider does not use the Application to knowingly
                            solicit data from or market to children under the age of 13.
                        </p>
                        <p className="mt-4">
                            The Application does not address anyone under the age of 13. The
                            Service Provider does not knowingly collect personally identifiable
                            information from children under 13 years of age. In the case the
                            Service Provider discover that a child under 13 has provided
                            personal information, the Service Provider will immediately delete
                            this from their servers. If you are a parent or guardian and you
                            are aware that your child has provided us with personal
                            information, please contact the Service Provider (
                            <a
                                href="mailto:hootdaniel99@gmail.com"
                                className="text-[#4F00FF] hover:underline font-medium"
                            >
                                hootdaniel99@gmail.com
                            </a>
                            ) so that they will be able to take the necessary actions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Security
                        </h2>
                        <p>
                            The Service Provider is concerned about safeguarding the
                            confidentiality of your information. The Service Provider provides
                            physical, electronic, and procedural safeguards to protect
                            information the Service Provider processes and maintains.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Changes
                        </h2>
                        <p>
                            This Privacy Policy may be updated from time to time for any
                            reason. The Service Provider will notify you of any changes to the
                            Privacy Policy by updating this page with the new Privacy Policy.
                            You are advised to consult this Privacy Policy regularly for any
                            changes, as continued use is deemed approval of all changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Your Consent
                        </h2>
                        <p>
                            By using the Application, you are consenting to the processing of
                            your information as set forth in this Privacy Policy now and as
                            amended by us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions regarding privacy while using the
                            Application, or have questions about the practices, please contact
                            the Service Provider via email at{" "}
                            <a
                                href="mailto:hootdaniel99@gmail.com"
                                className="text-[#4F00FF] hover:underline font-medium"
                            >
                                hootdaniel99@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </div>

                {/* Back link */}
                <div className="mt-16 pt-8 border-t border-border">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4F00FF] hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </article>
        </main>
    )
}
