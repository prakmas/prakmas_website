import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Smartphone, Cloud, Database, Zap, Shield, Rocket, Users } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Scalable web applications built with modern frameworks like React, Next.js, Node.js, and Python",
      features: ["Progressive Web Apps", "E-commerce Platforms", "Enterprise Portals", "SaaS Applications"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android using React Native and Flutter",
      features: ["iOS & Android Apps", "Cross-Platform Solutions", "Mobile-First Design", "App Store Deployment"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud migration, infrastructure automation, and CI/CD pipelines on AWS, Azure, and GCP",
      features: ["Cloud Architecture", "Kubernetes & Docker", "Automated Deployments", "Infrastructure as Code"]
    },
    {
      icon: Database,
      title: "API & Integration",
      description: "RESTful APIs, GraphQL, microservices architecture, and third-party system integrations",
      features: ["API Development", "Microservices", "System Integration", "Real-time Data Sync"]
    }
  ];

  const process = [
    { step: "1", title: "Discovery", description: "We analyze your requirements, goals, and technical constraints" },
    { step: "2", title: "Design", description: "Architecture planning, UI/UX design, and technology stack selection" },
    { step: "3", title: "Development", description: "Agile sprints with regular demos and continuous feedback" },
    { step: "4", title: "Testing", description: "Comprehensive QA including automated tests and security audits" },
    { step: "5", title: "Deployment", description: "Production launch with monitoring, documentation, and training" },
    { step: "6", title: "Support", description: "Ongoing maintenance, updates, and feature enhancements" }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL", "React Native"
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
              Enterprise Software Development
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Transform your vision into powerful digital products with our expert development team. From MVP to enterprise-scale applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="heroCyan" size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Comprehensive Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack expertise across web, mobile, cloud, and data technologies
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
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agile methodology with transparency, collaboration, and rapid delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern, battle-tested technologies for enterprise-grade solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Why Choose PraKMas?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Rapid Delivery", desc: "Agile sprints with 2-week iteration cycles" },
                { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with security-first approach" },
                { icon: Rocket, title: "Scalable Architecture", desc: "Built to handle millions of users from day one" },
                { icon: Users, title: "Dedicated Team", desc: "Senior developers with 5+ years experience" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Build Your Next Product?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom development plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
