import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, TrendingUp, Users, Rocket, Building, Map, Shield, BarChart } from "lucide-react";

export default function GlobalConsultingPage() {
  const services = [
    {
      icon: Map,
      title: "Market Entry Strategy",
      description: "Data-driven market research and go-to-market strategies for US and European expansion",
      features: ["Market Analysis", "Competitor Research", "Pricing Strategy", "Launch Planning"]
    },
    {
      icon: Building,
      title: "Offshore Team Setup",
      description: "Build and manage dedicated offshore development teams in India for cost optimization",
      features: ["Team Recruitment", "Infrastructure Setup", "Process Management", "Quality Assurance"]
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Modernize operations with cloud migration, automation, and digital tools",
      features: ["Cloud Migration", "Process Automation", "Tech Stack Upgrade", "Change Management"]
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Navigate international regulations, GDPR, data privacy, and business registration",
      features: ["GDPR Compliance", "Business Registration", "Legal Documentation", "Tax Advisory"]
    }
  ];

  const regions = [
    {
      region: "North America",
      countries: ["United States", "Canada"],
      stats: "50+ successful expansions"
    },
    {
      region: "Europe",
      countries: ["UK", "Germany", "France", "Netherlands"],
      stats: "30+ market entries"
    },
    {
      region: "Asia Pacific",
      countries: ["Singapore", "Australia", "Japan"],
      stats: "20+ partnerships"
    }
  ];

  const benefits = [
    { icon: Globe2, title: "Global Network", desc: "Partners in 20+ countries across 5 continents" },
    { icon: Users, title: "Expert Team", desc: "15+ years average experience in global expansion" },
    { icon: Rocket, title: "Fast Setup", desc: "Launch your offshore team in 4-6 weeks" },
    { icon: BarChart, title: "Cost Savings", desc: "Up to 60% cost reduction with offshore teams" },
    { icon: Shield, title: "Risk Mitigation", desc: "Full compliance with international standards" },
    { icon: TrendingUp, title: "Proven Track Record", desc: "100+ successful global expansions" }
  ];

  const process = [
    { step: "1", title: "Assessment", desc: "Analyze business goals, resources, and target markets" },
    { step: "2", title: "Strategy", desc: "Design market entry and offshore team strategy" },
    { step: "3", title: "Execution", desc: "Set up operations, recruit teams, register business" },
    { step: "4", title: "Management", desc: "Ongoing support, optimization, and scaling" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-primary bg-clip-text text-transparent">
              Scale Your Business Globally
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Strategic consulting for international expansion, offshore team setup, and digital transformation. Navigate global markets with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Start Expansion</Link>
              </Button>
              <Button variant="heroCyan" size="lg" asChild>
                <Link href="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "20+", label: "Countries" },
              { value: "100+", label: "Expansions" },
              { value: "60%", label: "Cost Savings" },
              { value: "4-6 Weeks", label: "Setup Time" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Comprehensive Global Consulting
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end support for international business expansion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-cyan-500">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven expertise across major business markets worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {regions.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-transparent border border-border hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe2 className="w-8 h-8 text-orange-500" />
                  <h3 className="text-2xl font-bold">{item.region}</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {item.countries.map((country, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-muted-foreground">{country}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-cyan-600">{item.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Expansion Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured 4-phase approach to successful global expansion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative text-center p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Choose PraKMas?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Go Global?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your expansion goals and create a tailored strategy for success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Start Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/software-development">View Tech Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
