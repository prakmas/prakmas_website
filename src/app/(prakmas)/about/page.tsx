import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Target, Eye, Code2, GraduationCap, Globe2, Zap, Users, Lightbulb, TrendingUp, Award, Heart, Rocket } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />

      {/* Hero Section - Dynamic & Modern */}
      <section className="relative pt-32 pb-24 overflow-hidden hero-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Multi-Sector Innovation Leader</span>
            </div>
            
            <h1 className="hero-title mb-6">
              <span className="text-primary">Building the Future</span>
              <br />
              <span className="hero-text-white">Across Every Industry</span>
            </h1>
            
            <p className="hero-subtitle max-w-3xl mx-auto mb-8 hero-text-gray">
              Where cutting-edge technology meets world-class talent development, global business expansion, and innovative consumer products
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center items-center text-sm hero-text-gray-light">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>Founded 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span>20+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>4 Business Verticals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals - Interactive Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Four Verticals. One Vision.
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Diversified innovation driving impact across technology, education, global business, and consumer products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Code2,
                title: "Software Development",
                description: "Enterprise-grade web & mobile solutions for global clients",
                stat: "150+ Projects",
                color: "primary",
                link: "/software-development"
              },
              {
                icon: GraduationCap,
                title: "Training & Education",
                description: "Industry-ready programs with hands-on mentorship",
                stat: "800+ Graduates",
                color: "secondary",
                link: "/training-internships"
              },
              {
                icon: Globe2,
                title: "Global Consulting",
                description: "Market entry & offshore team setup expertise",
                stat: "50+ Companies",
                color: "primary",
                link: "/global-consulting"
              },
              {
                icon: Zap,
                title: "Consumer Products",
                description: "Innovative food technology & lifestyle solutions",
                stat: "Coming Soon",
                color: "secondary",
                link: "/product"
              }
            ].map((vertical, index) => (
              <Link 
                href={vertical.link}
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-3 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${vertical.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`mb-6 p-4 rounded-xl bg-${vertical.color}/20 inline-flex group-hover:scale-110 transition-transform duration-300`}>
                    <vertical.icon className={`h-8 w-8 text-${vertical.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {vertical.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {vertical.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${vertical.color}/10 border border-${vertical.color}/20`}>
                    <TrendingUp className={`h-3 w-3 text-${vertical.color}`} />
                    <span className={`text-sm font-medium text-${vertical.color}`}>{vertical.stat}</span>
                  </div>
                </div>

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${vertical.color}/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern Split */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 h-full">
                <div className="mb-6 p-4 rounded-xl bg-primary/20 inline-flex">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To empower businesses and individuals through cutting-edge technology solutions, world-class training programs, career acceleration services, and innovative products that improve lives.
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  We bridge the gap between ambition and achievement by delivering excellence across every vertical we serve.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 h-full">
                <div className="mb-6 p-4 rounded-xl bg-secondary/20 inline-flex">
                  <Eye className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To be recognized globally as a multi-sector innovation leader delivering transformative software solutions, nurturing the next generation of tech professionals, and facilitating global business expansion.
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  Creating products and services that enhance everyday life while driving sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline Style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a focused consultancy to a diversified innovation powerhouse
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                year: "2025",
                title: "The Beginning",
                description: "Founded PraKMas Global Innovations with a vision to create meaningful impact across technology and education sectors. Started as a software consultancy focused on delivering quality solutions.",
                icon: Rocket
              },
              {
                year: "Q2 2025",
                title: "Training Academy Launch",
                description: "Launched our Training Academy recognizing the gap between academic education and industry requirements. Developed comprehensive programs combining theoretical knowledge with hands-on projects.",
                icon: GraduationCap
              },
              {
                year: "Q3 2025",
                title: "Global Expansion",
                description: "Expanded operations to multiple countries, helping international companies set up offshore development teams in India. Building portfolio of successful projects across web, mobile, and enterprise solutions.",
                icon: Globe2
              },
              {
                year: "Q4 2025",
                title: "Multi-Sector Innovation",
                description: "Integrated four business verticals: Software Development, Training & Education, Global Consulting, and Consumer Products. Rapidly growing our network of trained professionals with strong placement focus.",
                icon: Award
              }
            ].map((milestone, index) => (
              <div 
                key={index}
                className="group relative flex gap-8 items-start"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Line */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <milestone.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="w-0.5 h-32 bg-gradient-to-b from-primary to-secondary opacity-30 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and every innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions"
              },
              {
                icon: Users,
                title: "People Focused",
                description: "Investing in talent development and creating opportunities for individuals to thrive"
              },
              {
                icon: Heart,
                title: "Quality Driven",
                description: "Maintaining excellence in every project, program, and product we deliver"
              },
              {
                icon: Globe2,
                title: "Global Mindset",
                description: "Operating across borders while understanding local markets and cultural nuances"
              },
              {
                icon: TrendingUp,
                title: "Growth Oriented",
                description: "Helping clients and students scale sustainably while growing our own capabilities"
              },
              {
                icon: Award,
                title: "Results Committed",
                description: "Measuring success by the tangible impact we create for stakeholders"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 inline-flex group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Stats - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Impact by Numbers
              </h2>
              <p className="text-lg text-muted-foreground">
                Real results delivered across our four business verticals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "150+", label: "Projects Delivered", sublabel: "Enterprise solutions worldwide", color: "from-primary to-primary/70" },
                { value: "800+", label: "Alumni Network", sublabel: "Career-ready graduates", color: "from-secondary to-secondary/70" },
                { value: "20+", label: "Countries Served", sublabel: "Global presence", color: "from-primary to-primary/70" },
                { value: "98%", label: "Client Satisfaction", sublabel: "Long-term partnerships", color: "from-secondary to-secondary/70" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-4 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-5xl md:text-6xl font-black mb-3 text-primary group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xl font-bold mb-2 text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.sublabel}
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>
              ))}
            </div>

            {/* Additional Stats Row */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                { value: "92%", label: "Placement Rate", sublabel: "Training program success" },
                { value: "60-70%", label: "Cost Savings", sublabel: "Offshore development" },
                { value: "4.9/5", label: "Average Rating", sublabel: "Student & client reviews" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
                >
                  <div className="text-4xl font-black mb-2 text-primary group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <Rocket className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Ready to Transform?</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#dc2626' }}>
                  Let's Build Your Future Together
                </h2>
                
                <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: '#dc2626' }}>
                  Whether you need cutting-edge software solutions, career training programs, global expansion support, or innovative products — we're here to help you succeed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button variant="glass" size="xl" asChild className="text-foreground hover:scale-105 transition-transform shadow-xl">
                    <Link href="/contact">
                      <span className="flex items-center gap-2">
                        Get Started
                        <Rocket className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                  <Button variant="heroCyan" size="xl" asChild className="hover:scale-105 transition-transform shadow-xl">
                    <Link href="/features">
                      <span className="flex items-center gap-2">
                        Explore Services
                        <Globe2 className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap gap-4 justify-center text-sm text-white/80">
                  <Link href="/software-development" className="hover:text-white transition-colors flex items-center gap-1">
                    <Code2 className="h-3 w-3" />
                    Software Dev
                  </Link>
                  <span className="text-white/40">•</span>
                  <Link href="/training-internships" className="hover:text-white transition-colors flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" />
                    Training Programs
                  </Link>
                  <span className="text-white/40">•</span>
                  <Link href="/global-consulting" className="hover:text-white transition-colors flex items-center gap-1">
                    <Globe2 className="h-3 w-3" />
                    Global Consulting
                  </Link>
                  <span className="text-white/40">•</span>
                  <Link href="/resources" className="hover:text-white transition-colors flex items-center gap-1">
                    <Lightbulb className="h-3 w-3" />
                    Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
