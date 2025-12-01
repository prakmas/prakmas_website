import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Activity,
  Brain,
  Clock,
  Shield,
  AlertTriangle,
  Calendar,
  FileText,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const ITSM = () => {
  const features = [
    {
      icon: Activity,
      title: "Unified Service Dashboard",
      description: "Merge incident queues, change statuses, and asset health into one consolidated view for instant risk detection."
    },
    {
      icon: Brain,
      title: "AI-Assisted Triage",
      description: "Machine learning automatically categorizes, prioritizes, and routes tickets, cutting first-response times dramatically."
    },
    {
      icon: Clock,
      title: "Real-Time SLA Tracking",
      description: "Dynamic gauges update live, warning service owners ahead of threshold breaches for timely corrective action."
    },
    {
      icon: Zap,
      title: "Runbook Automation",
      description: "One-click execution of diagnostic and remediation tasks restores service quickly and reliably under pressure."
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
              <span className="text-sm font-medium text-primary">IT Service Management</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Enterprise IT Service Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Resolve incidents in minutes with AI-driven automation, policy-based change control, and unified real-time SLA tracking
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
              Complete ITSM Workspace designed for modern operations teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-secondary/50 hover:shadow-glow-cyan transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-4 p-3 rounded-lg bg-secondary/10 inline-flex group-hover:bg-gradient-secondary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-secondary group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Management */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Intelligent Incident Resolution
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Stop firefighting. Start resolving incidents systematically with AI-powered assistance.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-secondary/10 inline-flex group-hover:bg-gradient-secondary group-hover:scale-110 transition-all duration-300">
                      <AlertTriangle className="h-6 w-6 text-secondary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Context-Rich Timeline</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Automatically attach related logs, alerts, and changes for faster root cause analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-secondary/10 inline-flex group-hover:bg-gradient-secondary group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-6 w-6 text-secondary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Post-Incident Reviews</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Integrated templates capture causes, assign action items, and link improvements to change backlogs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-3xl" />
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow-cyan">
                  <h3 className="text-xl font-semibold mb-6">Incidents & Priorities</h3>
                  <div className="space-y-4">
                    <div className="group p-4 rounded-lg hover:bg-secondary/10 border border-border hover:border-secondary/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-medium group-hover:text-secondary">Instant routing when things go wrong</span>
                        {/* <span className="px-2 py-1 rounded text-xs bg-destructive/20 text-destructive">P1</span> */}
                      </div>
                      <p className="text-[16px] text-muted-foreground mb-3">Every issue reaches the right person without delay.</p>
                      {/* <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Resolved in 12 minutes</span>
                      </div> */}
                    </div>
                    <div className="group p-4 rounded-lg hover:bg-secondary/10 border border-border hover:border-secondary/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-medium group-hover:text-secondary">Tickets that prioritize themselves</span>
                        {/* <span className="px-2 py-1 rounded text-xs bg-secondary/20 text-secondary">P2</span> */}
                      </div>
                      <p className="text-[16px] text-muted-foreground mb-3">PraKMas tags and ranks issues based on urgency and past patterns.</p>
                      {/* <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>In progress - 18 min remaining</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change Management */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow">
                  <h3 className="text-xl font-semibold mb-6">Upcoming Changes</h3>
                  <div className="space-y-4">
                    <div className="group p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <div className="flex items-center gap-3 mb-2">
                        {/* <Calendar className="h-4 w-4 text-primary" /> */}
                        <span className="text-xl font-medium group-hover:text-primary">Smart approvals that move fast </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {/* <CheckCircle2 className="h-3 w-3 text-primary" /> */}
                        <span className="text-[16px]">No waiting on emails; changes get auto-cleared or flagged instantly.</span>
                      </div>
                    </div>
                    <div className="group p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <div className="flex items-center gap-3 mb-2">
                        {/* <Calendar className="h-4 w-4" /> */}
                        <span className="text-xl font-medium group-hover:text-primary">Monitoring built into every change </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {/* <Clock className="h-3 w-3" /> */}
                        <span className="text-[16px]">See impact in real time before, during, and after rollout.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Streamlined Change Control
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Deploy changes safely with automated approvals, conflict detection, and audit-ready logs.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-primary/10 inline-flex group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                      <Shield className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Automated Approvals</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Policy-driven workflows automate approvals and record evidence without friction
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-primary/10 inline-flex group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Audit-Ready Logs</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Immutable records of approvals, timestamps, and outcomes for ITIL, ISO, and SOC audits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Why Teams Choose PraKMas ITSM
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Lightning-fast
                </div>
                <p className="text-muted-foreground">Faster incident resolution</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Always on track
                </div>
                <p className="text-muted-foreground">SLA compliance rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Hands-free workflows 
                </div>
                <p className="text-muted-foreground">Reduction in manual tasks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-12 md:p-16 text-center shadow-glow max-w-4xl mx-auto">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to bottom, hsl(var(--primary)) 0.5px, transparent 0.5px)',
              backgroundSize: '30px 30px'
            }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Transform Your IT Operations
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join organizations already delivering better service with intelligent automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="lg" asChild className="text-foreground hover:scale-110 transition-all duration-300 hover:shadow-glow animate-pulse-glow">
                  <Link href="https://app.prakmas.com/" target="_blank" rel="noopener noreferrer">Join Beta Program</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300 hover:border-primary-foreground/60">
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

export default ITSM;