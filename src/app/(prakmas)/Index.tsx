import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Globe2,
  Zap,
  Target,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Laptop,
  BookOpen,
  Rocket,
  ChevronRight,
  Star,
  Clock,
  ShoppingBag,
  Leaf,
  Heart,
  Monitor,
  Database,
  Cloud,
  Cpu,
  UserCheck,
  Presentation,
  MapPin,
  Building2,
  Shield,
  Lightbulb,
  DollarSign,
  Trophy,
  PlayCircle,
  BadgeCheck,
  TrendingDown,
  Gauge,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const services = [
    {
      icon: Monitor,
      title: "Software Development",
      description: "Ship production-ready MVPs in 2 weeks. Cut development costs by 65% with our elite offshore teams in India.",
      features: ["⚡ Lightning-Fast Delivery", "💰 Save $150K+ Annually", "🎯 100% Quality Guaranteed", "🔒 Enterprise-Grade Security"],
      link: "/software-development",
      iconBg: "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500",
      accentColor: "text-blue-500",
      badge: "💰 Save 65%",
      stats: "150+ Projects",
    },
    {
      icon: GraduationCap,
      title: "Career Transformation",
      description: "Land your dream tech job with ₹6-12L packages in just 4-6 months. 95% placement rate with top companies.",
      features: ["🎓 Industry Certifications", "💼 Guaranteed Job Placement", "🚀 Real Client Projects", "👨‍💼 Personal Career Coach"],
      link: "/training-internships",
      iconBg: "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500",
      accentColor: "text-purple-500",
      badge: "🎯 95% Placed",
      stats: "800+ Graduates",
    },
    {
      icon: UserCheck,
      title: "Job Acceleration",
      description: "Get hired 3x faster with personalized coaching, portfolio building, and direct company connections.",
      features: ["📝 ATS-Optimized Resume", "🎤 Mock Interviews", "🤝 Direct Referrals", "💪 Salary Negotiation"],
      link: "/job-assistance",
      iconBg: "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-500",
      accentColor: "text-emerald-500",
      badge: "⚡ 3x Faster",
      stats: "500+ Placements",
    },
    {
      icon: Building2,
      title: "Global Expansion",
      description: "Enter US & European markets in 30 days. Complete market entry strategy with offshore team setup.",
      features: ["🌍 20+ Countries", "📊 Market Research", "🏢 Team Setup", "💼 Business Strategy"],
      link: "/global-consulting",
      iconBg: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
      accentColor: "text-orange-500",
      badge: "🌍 Global",
      stats: "50+ Expansions",
    },
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered", icon: Rocket, color: "from-blue-500 to-cyan-500" },
    { value: "800+", label: "Careers Transformed", icon: Users, color: "from-purple-500 to-pink-500" },
    { value: "25+", label: "Countries Worldwide", icon: Globe2, color: "from-orange-500 to-red-500" },
    { value: "98%", label: "Client Satisfaction", icon: Star, color: "from-yellow-500 to-orange-500" },
  ];

  const benefits = [
    { icon: Rocket, text: "Ship Products 3x Faster Than Competitors", gradient: "from-blue-500 to-cyan-500" },
    { icon: DollarSign, text: "Save $150K+ Annually on Development", gradient: "from-emerald-500 to-teal-500" },
    { icon: Trophy, text: "Work With Award-Winning Experts", gradient: "from-amber-500 to-orange-500" },
    { icon: Globe2, text: "24/7 Support Across All Timezones", gradient: "from-purple-500 to-pink-500" },
    { icon: Shield, text: "Enterprise-Grade Security & Compliance", gradient: "from-red-500 to-rose-500" },
    { icon: Gauge, text: "Lightning-Fast Turnaround Times", gradient: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Clean Marketing */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Animated trust badge */}
            <div className="flex justify-center mb-8 sm:mb-12 animate-fade-in">
              <div className="group relative inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 sm:py-4 rounded-2xl bg-card border-2 border-primary/30 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
                </div>
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm font-bold">
                  <span className="text-foreground">🏆 Trusted by 150+ Companies</span>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <span className="text-foreground">⭐ 800+ Success Stories</span>
                </div>
              </div>
            </div>

            {/* Headline with gradient animation */}
            <h1 className="hero-title text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="block mb-3 text-foreground">
                Transform Ideas Into
              </span>
              <span className="block relative inline-block">
                <span className="text-primary relative z-10 font-black">
                  Profitable Reality
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl -z-10 animate-pulse" />
              </span>
            </h1>
            
            {/* Subheadline with icons */}
            <div className="hero-subtitle text-center mb-6 max-w-5xl mx-auto text-foreground animate-fade-in flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-primary/20">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-foreground text-sm sm:text-base">Ship <span className="text-primary font-black">3x Faster</span></span>
              </span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-primary/20">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-foreground text-sm sm:text-base">Save <span className="text-primary font-black">$150K+</span></span>
              </span>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-primary/20">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-foreground text-sm sm:text-base">Land <span className="text-primary font-black">₹12L+</span></span>
              </span>
            </div>
            
            {/* Compelling value proposition with urgency */}
            <p className="text-lg lg:text-xl text-center text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join <span className="text-foreground font-bold">150+ companies</span> revolutionizing their business and <span className="text-foreground font-bold">800+ professionals</span> transforming their careers with our proven methodology
            </p>

            {/* CTAs with enhanced design */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="xl" variant="hero" asChild className="group text-white relative overflow-hidden w-full sm:w-auto">
                <Link href="/contact" className="flex items-center justify-center gap-3 min-h-[56px] sm:min-h-[60px] px-8 sm:px-12 text-base font-bold text-white">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles className="w-5 h-5 text-white relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="text-white relative z-10">Start Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white relative z-10" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="group relative overflow-hidden w-full sm:w-auto">
                <Link href="/resources" className="min-h-[56px] sm:min-h-[60px] px-8 sm:px-10 font-bold text-base flex items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <PlayCircle className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Watch Demo</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </Button>
            </div>
            
            {/* Enhanced trust signals */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 group hover:scale-105 transition-all cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                </div>
                <span className="font-bold text-foreground">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 group hover:scale-105 transition-all cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="font-bold text-foreground">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 group hover:scale-105 transition-all cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <span className="font-bold text-foreground">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2 group hover:scale-105 transition-all cursor-pointer">
                <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <span className="font-bold text-foreground">24/7 Support</span>
              </div>
            </div>

            {/* Modern stats cards */}
            <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="text-3xl sm:text-5xl font-black mb-1 sm:mb-2 text-center text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground text-center font-bold uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-6 py-3 rounded-2xl bg-card border-2 border-primary/30 text-foreground text-sm font-bold uppercase tracking-wide shadow-lg">
                💼 Our Solutions
              </span>
            </div>
            <h2 className="section-title mb-6 leading-tight animate-fade-in text-center" style={{ animationDelay: '0.1s' }}>
              <span className="block mb-2 text-foreground">Everything You Need</span>
              <span className="block text-primary">To Dominate Your Market</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
              End-to-end solutions that <span className="text-foreground font-bold">cut costs by 65%</span>, <span className="text-foreground font-bold">accelerate delivery 3x</span>, and <span className="text-foreground font-bold">transform careers</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.iconBg.replace('bg-gradient-to-br', 'from-primary via-accent to-primary')} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                <div className="relative h-full p-8 rounded-2xl bg-card border-2 border-border group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Animated badge */}
                  <div className="absolute top-6 right-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-xs font-bold shadow-lg">
                      {service.badge}
                    </span>
                  </div>
                  
                  <div className="relative">
                    {/* Icon with animation */}
                    <div className={`inline-flex p-5 rounded-2xl ${service.iconBg} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                      <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-3xl font-black mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features with icons */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <div className="mt-0.5 p-1.5 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={2.5} />
                          </div>
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Stats with animation */}
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-primary/20 group-hover:shadow-md transition-all">
                      <Trophy className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-primary">{service.stats}</span>
                    </div>
                    
                    {/* Enhanced CTA */}
                    <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                      <span className="text-primary">Explore Service</span>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="px-6 py-3 rounded-xl bg-card border border-primary/30 text-foreground text-sm font-bold uppercase tracking-wide">
                ⚡ Why PraKMas
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 animate-fade-in font-heading" style={{ animationDelay: '0.1s' }}>
              <span className="block mb-2 text-foreground">Your Success Is</span>
              <span className="block text-primary">Our Only Mission</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience the difference of working with a <span className="text-foreground font-bold">partner who delivers results</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <div className="relative p-6 rounded-xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="relative">
                    <div className="mb-4">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <p className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Products Section */}
      <section className="py-20 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Innovation Beyond Tech
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bringing the same innovation mindset to food technology and consumer products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border hover:border-green-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Organic Food Products</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Premium organic and health-focused food products developed with sustainable practices and quality ingredients
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Farm-to-table sourcing</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Certified organic ingredients</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Sustainable packaging</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Consumer Goods</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Innovative consumer products designed to enhance everyday life with quality and convenience
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Quality-tested products</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Direct to consumer</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border hover:border-red-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Health & Wellness</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nutritious and health-focused products supporting active lifestyles and well-being
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Nutritionist approved</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Natural ingredients</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Lab tested & certified</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Coming Soon: Our food products division launching in 2025</p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-6 py-3 rounded-xl bg-card border border-primary/30 text-foreground text-sm font-bold uppercase tracking-wide">
                🚀 LIMITED TIME OFFER
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight animate-fade-in font-heading" style={{ animationDelay: '0.1s' }}>
              <span className="block mb-2 text-foreground">Ready to</span>
              <span className="block text-primary">
                Transform Your Future?
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join <span className="text-foreground font-bold">150+ organizations</span> and <span className="text-foreground font-bold">800+ professionals</span> who trust PraKMas for their growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="xl" variant="hero" asChild className="group text-white">
                <Link href="/contact" className="flex items-center gap-3 min-h-[60px] px-12 text-base font-bold text-white">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white">Schedule Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="group">
                <Link href="/resources" className="min-h-[60px] px-10 font-bold text-base flex items-center gap-3">
                  <PlayCircle className="w-5 h-5" />
                  <span>View Success Stories</span>
                </Link>
              </Button>
            </div>
            
            {/* Trust signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
