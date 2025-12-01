import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: October 5, 2025</p>

        <div className="space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              This Cookie Policy explains how PraKMas (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar
              technologies when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files placed on your device to store data that can be read by a web server in the domain that placed the cookie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>Essential cookies to enable core site functionality.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>Analytics cookies to understand site usage and improve performance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground">•</span>
                <span>Preference cookies to remember your settings.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookies via your browser settings. If you disable cookies, some features of the website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about this policy, contact us at{" "}
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
              See also our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              {" "}and{" "}
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
