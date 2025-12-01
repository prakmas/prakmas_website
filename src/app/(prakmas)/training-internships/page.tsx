import { Button } from "@/components/ui/button-variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code, GraduationCap, Briefcase, Award, Users, Clock, Trophy, Target } from "lucide-react";

export default function TrainingInternshipsPage() {
  const programs = [
    {
      icon: Code,
      title: "Full-Stack Development",
      duration: "6 Months",
      description: "Master MERN/MEAN stack with hands-on project experience",
      skills: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "REST APIs & GraphQL"],
      level: "Beginner to Advanced"
    },
    {
      icon: GraduationCap,
      title: "Cloud & DevOps",
      duration: "4 Months",
      description: "Learn AWS, Docker, Kubernetes, and CI/CD automation",
      skills: ["AWS/Azure/GCP", "Docker & Kubernetes", "Jenkins & GitLab CI", "Infrastructure as Code"],
      level: "Intermediate"
    },
    {
      icon: Briefcase,
      title: "AI/ML Engineering",
      duration: "5 Months",
      description: "Deep learning, NLP, computer vision with Python and TensorFlow",
      skills: ["Python & TensorFlow", "ML Algorithms", "Deep Learning", "Model Deployment"],
      level: "Intermediate to Advanced"
    },
    {
      icon: Award,
      title: "Data Science & Analytics",
      duration: "5 Months",
      description: "Data analysis, visualization, and predictive modeling",
      skills: ["Python & R", "Pandas & NumPy", "Tableau & Power BI", "Statistical Analysis"],
      level: "Beginner to Intermediate"
    }
  ];

  const benefits = [
    { icon: Users, title: "Live Interactive Classes", desc: "Learn from industry experts with 10+ years experience" },
    { icon: Code, title: "Real Client Projects", desc: "Work on production projects, not just tutorials" },
    { icon: Award, title: "Industry Certifications", desc: "Earn recognized certificates from leading platforms" },
    { icon: Briefcase, title: "Internship Guarantee", desc: "3-6 month paid internship with our clients" },
    { icon: Trophy, title: "Job Placement Support", desc: "Resume building, interview prep, and job referrals" },
    { icon: Clock, title: "Flexible Learning", desc: "Weekend and weekday batches available" }
  ];

  const stats = [
    { value: "800+", label: "Students Trained" },
    { value: "92%", label: "Placement Rate" },
    { value: "50+", label: "Hiring Partners" },
    { value: "₹6.5L", label: "Avg Package" }
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
              Launch Your Tech Career
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Industry-aligned training programs with guaranteed internships and job placement support. Learn from experts, work on real projects, get hired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button variant="heroCyan" size="lg" asChild>
                <Link href="/contact">Download Brochure</Link>
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

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from industry-leading programs designed to make you job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-cyan-500">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.level}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-600">
                    {program.duration}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold mb-3">Key Skills:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {program.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild className="mt-6 w-full">
                  <Link href="/contact">View Details</Link>
                </Button>
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
              Why Learn with PraKMas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just training — a complete career transformation program
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-cyan-500 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Your Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From beginner to industry-ready professional in 6 months
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Assessment", desc: "Skill evaluation & program selection" },
              { step: "2", title: "Training", desc: "Live classes & hands-on labs" },
              { step: "3", title: "Projects", desc: "Real client project work" },
              { step: "4", title: "Internship", desc: "3-6 month paid internship" },
              { step: "5", title: "Placement", desc: "Job support & interviews" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative text-center p-6 rounded-xl bg-gradient-to-br from-muted/50 to-transparent border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Start Your Tech Career Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Limited seats available. Enroll now and get 20% early bird discount
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
