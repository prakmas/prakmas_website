import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Code, TestTube, Rocket, BarChart3 } from "lucide-react";
import productVisual from "../../../../public/assets/product-visual.jpg";
import Image from "next/image";

const Product = () => {
  const modules = [
    {
      icon: Target,
      title: "Plan Smarter",
      description:
        "Intelligent task boards and goal tracking that adapt to your team's workflow. Capture ideas instantly and watch AI help prioritize what matters.",
      features: ["AI-powered backlog grooming", "Sprint planning automation", "Dependency mapping"],
    },
    {
      icon: Code,
      title: "Code Together",
      description:
        "Unified repository view with real-time collaboration. Code reviews, comments, and commits all in context with your planning.",
      features: ["In-line code discussions", "Automated merge suggestions", "Context-aware notifications"],
    },
    {
      icon: TestTube,
      title: "Test Seamlessly",
      description:
        "Comprehensive QA dashboards that integrate with your CI/CD pipeline. Catch issues before they ship.",
      features: ["Automated test generation", "Coverage tracking", "Performance benchmarks"],
    },
    {
      icon: Rocket,
      title: "Deploy Faster",
      description:
        "Streamlined CI/CD pipeline management with automated compliance checks and rollback capabilities.",
      features: ["One-click deployments", "Environment management", "Release notes automation"],
    },
    {
      icon: BarChart3,
      title: "Track Clearly",
      description:
        "AI-powered analytics and reporting that give you actionable insights into team performance and project health.",
      features: ["Velocity tracking", "Burndown charts", "Predictive analytics"],
    },
  ];

  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Every Part of Your Dev Cycle — Connected
            </h1>
            <p className="text-xl text-muted-foreground">
              PraKMas brings together all stages of development in one intelligent Workspace
            </p>
          </div>

          <div className="mt-12 animate-fade-in-up">
            <Image
              src={productVisual}
              alt="Product Overview"
              className="rounded-2xl border border-border shadow-glow-cyan mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 animate-fade-in`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10">
                    <module.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{module.title}</h2>
                  <p className="text-lg text-muted-foreground">{module.description}</p>
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <div className="p-8 rounded-2xl bg-gradient-mesh border border-border/50 backdrop-blur-sm">
                    <div className="h-64 flex items-center justify-center">
                      <module.icon className="h-32 w-32 text-primary/20 animate-float" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
