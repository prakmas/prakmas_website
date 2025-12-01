import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Brain,
  Clock,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Zap,
  Eye,
} from "lucide-react";
import Link from "next/link";

const ComplianceManagement = () => {
  const features = [
    {
      icon: Shield,
      title: "Unified Compliance Dashboard",
      description: "See release compliance built from normalized counters across SAST, SCA, containers, and IaC scans - all in one real-time view."
    },
    {
      icon: FileCheck,
      title: "Automated Release Certifications",
      description: "Every GitHub release triggers metric ingestion, objective mapping, and auto-generated Release Certifications tied to that version."
    },
    {
      icon: Clock,
      title: "Real-Time Control Monitoring",
      description: "Live indicators show severity spikes, reopened issues, and high-risk findings as soon as new scan data arrives."
    },
    {
      icon: Zap,
      title: "Automated Evidence Collection",
      description: "Scan results, objective matches, IDs, approvals, and counters are captured automatically and stored as audit-ready evidence."
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
              <span className="text-sm font-medium text-primary">Compliance Management</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Enterprise Compliance Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unify compliance across your software lifecycle with automated controls, GitHub-triggered metrics, and a single platform that certifies every release
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
              A Compliance Workspace that ingests metrics for Security Compliance, Code Compliance, Process Compliance and Regulatory Compliance and enforces org policies for every release your organization ships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-secondary/50 hover:shadow-glow-cyan transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-4 p-3 rounded-lg bg-secondary/10 inline-flex group-hover:bg-gradient-secondary group-hover:scale-110 transition-all">
                  <feature.icon className="h-6 w-6 text-secondary group-hover:text-white" />
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

      {/* Risk Management */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Proactive Compliance Validation
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Shift from manual checks to continuous validation powered by GitHub workflows and normalized scan data.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-secondary/10 inline-flex group-hover:bg-gradient-secondary group-hover:scale-110 transition-all duration-300">
                      <AlertTriangle className="h-6 w-6 text-secondary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Evidence-Driven Timeline</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Each release includes linked scans, approvals, version-normalized identifiers, and change history to accelerate verification
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-secondary/10 inline-flex group-hover:bg-gradient-secondary group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-6 w-6 text-secondary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Structured Compliance Reviews</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Templates highlight control gaps, track follow-ups, and connect remediation items to upcoming releases
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-3xl" />
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow-cyan">
                  <h3 className="text-xl font-semibold mb-6">Controls & Alerts</h3>
                  <div className="space-y-4">
                    <div className="group p-4 rounded-lg hover:bg-secondary/10 border border-border hover:border-secondary/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-medium group-hover:text-secondary">Instant signals when severity counts spike</span>
                      </div>
                      <p className="text-[16px] text-muted-foreground mb-3">Severity changes, reopened highs, or new critical findings reach the right owner instantly.</p>
                    </div>
                    <div className="group p-4 rounded-lg hover:bg-secondary/10 border border-border hover:border-secondary/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-medium group-hover:text-secondary">Reviews that organize themselves</span>
                      </div>
                      <p className="text-[16px] text-muted-foreground mb-3">PraKMas ranks gaps using counters, compliance keys, and historical scan patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Support */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-glow">
                  <h3 className="text-xl font-semibold mb-6">Upcoming Evaluations</h3>
                  <div className="space-y-4">
                    <div className="group p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl font-medium group-hover:text-primary">Fast checks that never bottleneck</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-[16px]">Controls are auto cleared or flagged the moment metrics post to the endpoint.</span>
                      </div>
                    </div>
                    <div className="group p-4 rounded-lg hover:bg-primary/10 border border-border hover:border-primary/50">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl font-medium group-hover:text-primary">Visibility built into every control</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-[16px]">Track compliance impact across severity, age, and status before and after each deployment.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Adaptive Compliance Control
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Keep releases aligned with standards using automated validations and audit-ready tracking across every deployment.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-primary/10 inline-flex group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                      <FileCheck className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Automated Control Reviews</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Policy engines verify SAST, SCA, container, and IaC metrics, then archive outcomes for compliance evidence
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 rounded-lg bg-primary/10 inline-flex group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                      <Eye className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Comprehensive Audit Trail</h3>
                      <p className="text-[16px] text-muted-foreground">
                        Each ingestion creates an audit trail record with scan, application, and release mapping
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
              Why Teams Choose PraKMas Compliance
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Risk-first oversight
                </div>
                <p className="text-muted-foreground">Objective-based compliance driven by real metrics</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Always audit-ready
                </div>
                <p className="text-muted-foreground">Certifications generated automatically for every release</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  Hands-free verification
                </div>
                <p className="text-muted-foreground">Compliance checks triggered directly from GitHub</p>
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
                Strengthen Your Compliance Operations
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join teams advancing their SDLC with PraKMas&apos;s release-aligned compliance engine and automated certifications
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

export default ComplianceManagement;
