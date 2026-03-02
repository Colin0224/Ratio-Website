import type { Metadata } from "next"
import Link from "next/link"
import { PawPrint, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
    title: "Terms & Conditions - Ratio",
    description:
        "Terms and Conditions for the Ratio app by Donna Ding.",
}

export default function TermsPage() {
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
                        Terms &amp; Conditions
                    </h1>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Effective as of <span className="font-semibold text-foreground">February 28, 2026</span>
                    </p>
                </div>

                {/* Body */}
                <div className="prose prose-neutral max-w-none space-y-8 text-foreground/85 leading-relaxed">
                    <p>
                        These terms and conditions apply to the Ratio app (hereby referred
                        to as &ldquo;Application&rdquo;) for mobile devices that was created
                        by Donna Ding (hereby referred to as &ldquo;Service Provider&rdquo;)
                        as a Freemium service.
                    </p>

                    <p>
                        Upon downloading or utilizing the Application, you are automatically
                        agreeing to the following terms. It is strongly advised that you
                        thoroughly read and understand these terms prior to using the
                        Application.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Intellectual Property
                        </h2>
                        <p>
                            Unauthorized copying, modification of the Application, any part of
                            the Application, or our trademarks is strictly prohibited. Any
                            attempts to extract the source code of the Application, translate
                            the Application into other languages, or create derivative
                            versions are not permitted. All trademarks, copyrights, database
                            rights, and other intellectual property rights related to the
                            Application remain the property of the Service Provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Modifications &amp; Charges
                        </h2>
                        <p>
                            The Service Provider is dedicated to ensuring that the Application
                            is as beneficial and efficient as possible. As such, they reserve
                            the right to modify the Application or charge for their services at
                            any time and for any reason. The Service Provider assures you that
                            any charges for the Application or its services will be clearly
                            communicated to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Data &amp; Security
                        </h2>
                        <p>
                            The Application stores and processes personal data that you have
                            provided to the Service Provider in order to provide the Service.
                            It is your responsibility to maintain the security of your phone
                            and access to the Application. The Service Provider strongly
                            advises against jailbreaking or rooting your phone, which involves
                            removing software restrictions and limitations imposed by the
                            official operating system of your device. Such actions could expose
                            your phone to malware, viruses, malicious programs, compromise
                            your phone&apos;s security features, and may result in the Application
                            not functioning correctly or at all.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Third-Party Services
                        </h2>
                        <p>
                            Please note that the Application utilizes third-party services that
                            have their own Terms and Conditions. Below are the links to the
                            Terms and Conditions of the third-party service providers used by
                            the Application:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-1">
                            <li>
                                <a
                                    href="https://firebase.google.com/terms/analytics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#4F00FF] hover:underline font-medium"
                                >
                                    Google Analytics for Firebase
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Service Limitations
                        </h2>
                        <p>
                            Please be aware that the Service Provider does not assume
                            responsibility for certain aspects. Some functions of the
                            Application require an active internet connection, which can be
                            Wi-Fi or provided by your mobile network provider. The Service
                            Provider cannot be held responsible if the Application does not
                            function at full capacity due to lack of access to Wi-Fi or if you
                            have exhausted your data allowance.
                        </p>
                        <p className="mt-4">
                            If you are using the application outside of a Wi-Fi area, please
                            be aware that your mobile network provider&apos;s agreement terms still
                            apply. Consequently, you may incur charges from your mobile
                            provider for data usage during the connection to the application,
                            or other third-party charges. By using the application, you accept
                            responsibility for any such charges, including roaming data charges
                            if you use the application outside of your home territory (i.e.,
                            region or country) without disabling data roaming. If you are not
                            the bill payer for the device on which you are using the
                            application, they assume that you have obtained permission from the
                            bill payer.
                        </p>
                        <p className="mt-4">
                            Similarly, the Service Provider cannot always assume responsibility
                            for your usage of the application. For instance, it is your
                            responsibility to ensure that your device remains charged. If your
                            device runs out of battery and you are unable to access the
                            Service, the Service Provider cannot be held responsible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Liability
                        </h2>
                        <p>
                            In terms of the Service Provider&apos;s responsibility for your use of
                            the application, it is important to note that while they strive to
                            ensure that it is updated and accurate at all times, they do rely
                            on third parties to provide information to them so that they can
                            make it available to you. The Service Provider accepts no liability
                            for any loss, direct or indirect, that you experience as a result
                            of relying entirely on this functionality of the application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Updates &amp; Termination
                        </h2>
                        <p>
                            The Service Provider may wish to update the application at some
                            point. The application is currently available as per the
                            requirements for the operating system (and for any additional
                            systems they decide to extend the availability of the application
                            to) may change, and you will need to download the updates if you
                            want to continue using the application. The Service Provider does
                            not guarantee that it will always update the application so that it
                            is relevant to you and/or compatible with the particular operating
                            system version installed on your device. However, you agree to
                            always accept updates to the application when offered to you.
                        </p>
                        <p className="mt-4">
                            The Service Provider may also wish to cease providing the
                            application and may terminate its use at any time without providing
                            termination notice to you. Unless they inform you otherwise, upon
                            any termination, (a) the rights and licenses granted to you in
                            these terms will end; (b) you must cease using the application,
                            and (if necessary) delete it from your device.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Changes to These Terms &amp; Conditions
                        </h2>
                        <p>
                            The Service Provider may periodically update their Terms and
                            Conditions. Therefore, you are advised to review this page
                            regularly for any changes. The Service Provider will notify you of
                            any changes by posting the new Terms and Conditions on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions or suggestions about the Terms and
                            Conditions, please do not hesitate to contact the Service Provider
                            at{" "}
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
