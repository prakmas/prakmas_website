import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: October 5, 2025</p>

        <div className="space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the PraKMas website and
              any related services (collectively, the &quot;Services&quot;). By using the Services, you agree to be
              bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to misuse the Services or help anyone else do so. For example, you will not
              interfere with the normal operation of the Services, attempt to access them using a method
              other than through the interfaces and instructions we provide, or use the Services for
              unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Services, including content, features, and functionality, are owned by FusionOne Inc and
              its licensors, and are protected by intellectual property laws. All rights are reserved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
              kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, in no event shall FusionOne Inc be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
              intangible losses, resulting from (a) your use or inability to use the Services; (b) any
              unauthorized access to or use of our servers; or (c) any other matter relating to the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. We will post the updated Terms on this page
              with a revised &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:info@prakmas.com" className="text-primary hover:underline">
                info@prakmas.com
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              123 N Branch River RD, Branchburg, New Jersey - 08876
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Please also review our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              {" "}and{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
