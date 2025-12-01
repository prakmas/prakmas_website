import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveCard from "@/components/InteractiveCard";
import {
  LayoutDashboard,
  ListTodo,
  GanttChart,
  BarChart3,
  Target,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const ProjectManagement = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Central Status Pulse",
      description:
        "Aggregate active tasks, risk flags, and burn rate in a live dashboard tile for instant sprint health visibility.",
    },
    {
      icon: ListTodo,
      title: "Smart Prioritization",
      description:
        "Auto-rank backlog items with RICE and MoSCoW scores for transparent, objective, and defensible prioritization.",
    },
    {
      icon: GanttChart,
      title: "Interactive Gantt Charts",
      description:
        "Drag-and-drop task durations and sequencing with automatic dependency updates and critical path highlighting.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Velocity Tracking",
      description:
        "Velocity trend graphs reveal story points delivered per sprint, enabling data-driven capacity planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Project Management
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
              AI-Assisted Project Delivery
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unified Workspace for tasks, timelines, and resources with smart
              prioritization and real-time insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroCyan" size="lg" asChild>
                <Link href="https://app.prakmas.com/" target="_blank" rel="noopener noreferrer">Join Beta Program</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to deliver projects on time and on budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 inline-flex group-hover:bg-gradient-primary group-hover:scale-110 transition-all">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Deliver Projects Confidently
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Data-Driven Planning:
                      </span>{" "}
                      AI validates work items before they enter sprints
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Dependency Detection:
                      </span>{" "}
                      Graph analysis prevents mid-sprint blockers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Executive Visibility:
                      </span>{" "}
                      One-click exports for board-ready summaries
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow">
                  <div className="space-y-6">
                    <div className="group flex flex-col items-center justify-between p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50 text-center">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        Paced for progress{" "}
                      </h3>
                      <span className="text-[16px]">
                        Keep delivery speed steady across every sprint.
                      </span>
                    </div>
                    <div className="group flex flex-col items-center justify-between p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50 text-center">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        Milestones that land
                      </h3>
                      <span className="text-[16px]">
                        Plan, track, and hit your deadlines without guesswork.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-12 md:p-16 text-center shadow-glow max-w-4xl mx-auto">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to bottom, hsl(var(--primary)) 0.5px, transparent 0.5px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Ready to Deliver Faster?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join teams already shipping on time with intelligent project
                management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="glass"
                  size="lg"
                  asChild
                  className="text-foreground hover:scale-110 transition-all duration-300 hover:shadow-glow animate-pulse-glow"
                >
                  <Link href="/contact">Join Beta Program</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300 hover:border-primary-foreground/60"
                >
                  <Link href="/features">Explore All Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectManagement;
