import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Inbox,
  Sparkles,
  Tag,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const IdeaManagement = () => {
  const features = [
    {
      icon: Inbox,
      title: "Unified Ideas Inbox",
      description: "Gather every suggestion from support tickets, CRM notes, Slack channels, and analytics into a single, prioritized view."
    },
    {
      icon: Sparkles,
      title: "AI Deduplication",
      description: "Machine learning automatically groups duplicates and related feedback, focusing review sessions on unique, high-value ideas."
    },
    {
      icon: Tag,
      title: "Smart Source Tagging",
      description: "Each idea is automatically tagged with origin channel, customer value, and potential revenue impact for instant clarity."
    },
    {
      icon: Sliders,
      title: "RICE & ICE Scoring",
      description: "Objective prioritization using weighted scoring for reach, impact, confidence, and effort with customizable criteria."
    },
  ];

  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Idea Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
              Transform Ideas Into Actionable Plans
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Capture, prioritize, and convert scattered feedback into clear roadmaps with AI-powered intelligence
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
              Everything you need to manage ideas from capture to execution
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
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                From Chaos to Clarity
              </h2>
              <p className="text-lg text-muted-foreground">
                Streamlined workflow that turns scattered ideas into structured execution
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                  <span className="text-lg font-bold text-primary-foreground">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Capture Everywhere</h3>
                  <p className="text-muted-foreground">
                    Ideas flow in from support tickets, Slack, email, and analytics. One unified inbox brings them all together.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center shadow-glow-cyan">
                  <span className="text-lg font-bold text-secondary-foreground">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Prioritize Objectively</h3>
                  <p className="text-muted-foreground">
                    AI-powered RICE scoring weighs reach, impact, confidence, and effort. Customize criteria to match your goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                  <span className="text-lg font-bold text-primary-foreground">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Build Roadmaps</h3>
                  <p className="text-muted-foreground">
                    Top ideas sync automatically to visual roadmaps with quarterly swim lanes and capacity awareness.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group hover:translate-x-2 transition-transform">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center shadow-glow-cyan">
                  <span className="text-lg font-bold text-secondary-foreground">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Close the Loop</h3>
                  <p className="text-muted-foreground">
                    Automatically notify requesters when features ship. Track sentiment and correlate usage data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Stop Losing Great Ideas
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">No More Spreadsheets:</span> Replace manual tracking with intelligent automation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Objective Decisions:</span> Data-driven prioritization eliminates heated debates
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Customer Satisfaction:</span> Close the feedback loop and turn users into advocates
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Fast Execution:</span> Ideas become reality faster with automated workflows
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow">
                  <div className="space-y-6">
                    <div className="group flex flex-col items-center justify-between p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <span className="text-2xl font-medium group-hover:text-primary">Input stays organized </span>
                      <span className="text-md">Every idea lands in one place </span>
                    </div>
                    <div className="group flex flex-col items-center justify-between p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <span className="text-2xl font-medium group-hover:text-primary">Duplicates get cleaned</span>
                      <span className="text-md">AI keeps your backlog clutter-free </span>
                    </div>
                    <div className="group flex flex-col  items-center justify-between p-4 rounded-lg hover:bg-primary/10 border border-border  hover:border-primary/50">
                      <span className="text-2xl font-medium group-hover:text-primary">Every request gets context</span>
                      <span className="text-md">See who asked and why it matters</span>
                    </div>
                     <div className="group flex flex-col items-center justify-between p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <span className="text-2xl font-medium group-hover:text-primary">Action follows insight</span>
                      <span className="text-md">Top ideas move straight into production</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-12 md:p-16 text-center shadow-glow max-w-4xl mx-auto">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 0.5px, transparent 0.5px), linear-gradient(to bottom, hsl(var(--primary)) 0.5px, transparent 0.5px)',
              backgroundSize: '30px 30px'
            }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join innovative teams already shipping customer-driven features faster
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

export default IdeaManagement;