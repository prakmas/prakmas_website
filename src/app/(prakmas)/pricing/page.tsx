"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "For small teams getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 10 team members",
        "5 projects",
        "Basic integrations",
        "Community support",
        "1GB storage",
      ],
    },
    {
      name: "Pro",
      description: "For scaling teams",
      monthlyPrice: 99,
      annualPrice: 990,
      popular: true,
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced integrations",
        "Priority support",
        "100GB storage",
        "Custom workflows",
        "Advanced analytics",
      ],
    },
    {
      name: "Enterprise",
      description: "For organizations",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom SLA",
        "Unlimited storage",
        "Advanced security",
        "Custom contracts",
        "Onboarding assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your team. Scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 bg-muted rounded-full transition-colors hover:bg-muted/80"
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-primary rounded-full transition-transform ${
                    isAnnual ? "translate-x-7" : ""
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                Annual <span className="text-primary">(Save 17%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-primary shadow-glow animate-glow-pulse"
                    : "border-border bg-card/50 backdrop-blur-sm"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {plan.monthlyPrice !== null ? (
                      <>
                        <div className="text-4xl font-bold">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          per {isAnnual ? "year" : "month"}
                        </div>
                      </>
                    ) : (
                      <div className="text-4xl font-bold">Custom</div>
                    )}
                  </div>

                  <Button
                    variant={plan.popular ? "hero" : "glass"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.monthlyPrice !== null ? "Start Free Trial" : "Talk to Sales"}
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I switch plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes! All paid plans come with a 14-day free trial. No credit card required.",
                },
                {
                  q: "What happens when I reach my limits?",
                  a: "We'll notify you in advance and help you upgrade to a plan that fits your needs.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
