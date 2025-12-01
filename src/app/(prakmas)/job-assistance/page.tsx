import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Users, Target, Briefcase, TrendingUp, Award, Calendar, MessageSquare } from "lucide-react";

export default function JobAssistancePage() {
  const services = [
    {
      icon: FileText,
      title: "Resume & Portfolio Building",
      description: "ATS-optimized resumes and professional portfolios that get noticed",
      features: ["ATS-Friendly Resume", "GitHub Portfolio", "LinkedIn Optimization", "Cover Letter Templates"]
    },
    {
      icon: Target,
      title: "Interview Preparation",
      description: "Master technical and behavioral interviews with expert coaching",
      features: ["Mock Interviews", "Coding Challenges", "System Design Prep", "Behavioral Training"]
    },
    {
      icon: Users,
      title: "Career Mentorship",
      description: "One-on-one guidance from industry professionals at top companies",
      features: ["Personalized Roadmap", "Industry Insights", "Salary Negotiation", "Career Counseling"]
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Direct referrals to 50+ hiring partners and ongoing placement assistance",
      features: ["Company Referrals", "Job Matching", "Offer Evaluation", "Onboarding Support"]
    }
  ];

  const process = [
    { step: "1", title: "Career Assessment", desc: "Evaluate skills, experience, and career goals" },
    { step: "2", title: "Profile Building", desc: "Create compelling resume, portfolio, and LinkedIn" },
    { step: "3", title: "Interview Prep", desc: "Practice with mock interviews and feedback" },
    { step: "4", title: "Job Applications", desc: "Apply to matched positions with referrals" },
    { step: "5", title: "Offer Support", desc: "Negotiate salary and evaluate offers" },
    { step: "6", title: "Onboarding", desc: "Transition support for first 90 days" }
  ];

  const stats = [
    { value: "92%", label: "Placement Rate" },
    { value: "₹6.5L", label: "Avg Package" },
    { value: "50+", label: "Hiring Partners" },
    { value: "45 Days", label: "Avg Time to Offer" }
  ];

  const companies = [
    "Google", "Amazon", "Microsoft", "Accenture", "TCS", "Infosys",
    "Wipro", "Cognizant", "HCL", "Tech Mahindra", "Capgemini", "IBM"
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
              Land Your Dream Tech Job
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Comprehensive career services from resume building to job placement. Get placed at top companies with expert guidance and direct referrals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get Placement Support</Link>
              </Button>
              <Button variant="heroCyan" size="lg" asChild>
                <Link href="/contact">Schedule Career Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
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
              Complete Career Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transition from learning to earning
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

      {/* Process */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Your Path to Employment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured 6-step process to land your ideal role
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
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Hiring Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Direct referrals to leading tech companies and startups
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="font-semibold text-sm">{company}</span>
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
              Why Choose Our Career Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: TrendingUp, title: "High Success Rate", desc: "92% of our students get placed within 90 days" },
              { icon: Award, title: "Expert Mentors", desc: "Learn from professionals at Google, Amazon, Microsoft" },
              { icon: Calendar, title: "Lifetime Support", desc: "Ongoing career guidance even after placement" },
              { icon: MessageSquare, title: "1-on-1 Coaching", desc: "Personalized attention for every student" },
              { icon: Target, title: "Focused Approach", desc: "Target companies matching your skills and goals" },
              { icon: Briefcase, title: "Multiple Offers", desc: "Average of 3 offers per candidate" }
            ].map((item, index) => (
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
              Ready to Launch Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful professionals who landed their dream jobs with our support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Get Placement Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/training-internships">View Training Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
