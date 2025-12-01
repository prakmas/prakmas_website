import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: October 5, 2025</p>

        <div className="space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains what information PraKMas (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) collects, how we use it, and your choices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information you provide directly (such as email address when you contact
              us) and certain technical information automatically when you visit our website (such as IP
              address, device and browser type, and usage data).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>To provide, maintain, and improve our website and services.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>To communicate with you, including responding to inquiries.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>To analyze usage and enhance user experience.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>To protect our services and users from security threats.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance functionality and analyze traffic. Learn
              more in our{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data. We may share data with trusted service providers who
              process it on our behalf, under appropriate safeguards, and as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>You can configure your browser to refuse some or all cookies.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>You may contact us to access, correct, or delete your personal information.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy, contact us at{" "}
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
              For additional terms governing your use of our services, please see our{" "}
              <Link href="/terms-of-service" className="text-primary hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
