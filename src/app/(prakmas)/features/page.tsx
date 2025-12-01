import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import {
  Zap,
  Shield,
  TrendingUp,
  Plug,
  GitBranch,
  Lock,
  Settings,
  Network,
  LineChart,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "PraKMas automatically runs checks and triggers tasks based on how your team works, so you don’t have to follow up manually.",
    },
    {
      icon: Shield,
      title: "Built-in Compliance",
      description:
        "Every deployment includes an automatically created compliance report with quality checks, test results, and security scans.",
    },
    {
      icon: TrendingUp,
      title: "Infinite Scalability",
      description:
        "PraKMas grows alongside your team, smoothly supporting everything from small startups to large enterprises.",
    },
    {
      icon: Plug,
      title: "Easy Tool Connections",
      description:
        "Link PraKMas with GitHub, Checkmarx, Google Workspace and more in a few clicks. No setup headaches, no scripts, just the tools simply working together.",
    },
    {
      icon: GitBranch,
      title: "Single Page Application Workspace",
      description:
        "Everything you need to manage, like ideas, tasks, tests, releases lives in one fast, clean screen. No tab‑hopping, no distractions, just smooth end‑to‑end work.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "Your code and data stay safe with robust encryption and security built into the Workspace.",
    },
    {
      icon: Settings,
      title: "Customizable Workflows",
      description:
        "Tailor PraKMas to fit your team with custom fields, automated steps, and reusable templates.",
    },
    {
      icon: Network,
      title: "Real-Time Collaboration",
      description:
        "Live updates across all team members. See changes as they happen and comment directly in context.",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description:
        "PraKMas learns from past projects to forecast delivery timelines, identify risks early, and recommend actions that keep every sprint on track.",
    },
  ];

  const differentiators = [
    {
      title: "No More Tool Sprawl",
      description:
        "Switching between many tools slows down work; use one workspace that includes everything you need. Stop paying for duplicate features and focus on building good software.",
    },
    {
      title: "AI-Native from Day One",
      description:
        "Our workspace is built with AI at its core, not added later. It offers smart suggestions, automatically creates documentation, and predicts future issues to keep your work smooth.",
    },
    {
      title: "Developer-First Design",
      description:
        "Created by engineers, for engineers, with features like keyboard shortcuts, command-line access, and an API-focused setup to make coding faster and easier. ",
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
              Features That Set Us Apart
            </h1>
            <p className="text-xl text-muted-foreground">
              Built for teams who refuse to compromise on quality, speed, or
              collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Highlighted Features */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Single Page Application Workspace */}
            <div className="animate-fade-in">
              <div className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 h-full">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                  <GitBranch className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Single Page Application Workspace</h3>
                <p className="text-[16px] text-muted-foreground">Everything you need, like ideas, tasks, tests, releases lives in one fast, clean screen. No tab-hopping, no distractions, just smooth end-to-end work.</p>
              </div>
            </div>
            {/* Built-in Compliance */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 h-full">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Built-In Compliance</h3>
                <p className="text-[16px] text-muted-foreground">Manual audits and compliance tracking slow releases. PraKMas auto generates compliance dossiers with real-time quality checks and certifications.</p>
              </div>
            </div>
            {/* Easy Tool Connections */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 h-full">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                  <Plug className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Easy Tool Connections</h3>
                <p className="text-[16px] text-muted-foreground">Link PraKMas with GitHub, Checkmarx, Google Workspace and more in a few clicks. No setup headaches, no scripts, just the tools simply working together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Teams Choose PraKMas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than features - a whole new way to build software
              better.{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
