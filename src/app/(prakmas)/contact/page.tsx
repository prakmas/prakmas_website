"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Phone, MapPin, Clock, Globe, Code2, GraduationCap, Briefcase, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useReCaptcha } from "@/hooks/use-recaptcha";
import Link from "next/link";

const Contact = () => {
  const { toast } = useToast();
  const { recaptchaRef, executeRecaptcha, resetRecaptcha } = useReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA verification if available
      let recaptchaToken = null;
      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        recaptchaToken = await executeRecaptcha();
        
        if (!recaptchaToken) {
          toast({
            title: "Verification Required",
            description: "Please complete the reCAPTCHA verification to send your message.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show user-friendly error message
        toast({
          title: "⚠️ Message not sent",
          description: (
            <div>
              <p className="mb-2">We're experiencing temporary issues. Please email us at:</p>
              <code className="block bg-card px-3 py-2 rounded font-mono text-sm font-bold text-primary select-all cursor-text">
                info@prakmas.com
              </code>
            </div>
          ),
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      toast({
        title: "🎉 Message received!",
        description: "Thank you for reaching out. We'll respond within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
      resetRecaptcha(); // Reset reCAPTCHA after successful submission
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Connection issue",
        description: (
          <div>
            <p className="mb-2">Please check your internet connection and try again, or email us at:</p>
            <code className="block bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded font-mono text-sm font-bold text-red-900 dark:text-red-100 select-all cursor-text">
              info@prakmas.com
            </code>
          </div>
        ),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background grid-bg">
      <Navbar />

      {/* Hero Section - Modern & Engaging */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">We typically respond within 24 hours</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Let's Create</span>
              <br />
              <span className="text-foreground">Something Amazing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you need world-class software, career transformation, or global expansion — we're here to turn your vision into reality
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section - Split Layout */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Left Sidebar - Contact Info & Quick Actions */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact Cards */}
              <div className="space-y-4 animate-fade-in">
                {/* Email Card */}
                <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 text-foreground">Email Us</h3>
                      <a 
                        href="mailto:info@prakmas.com" 
                        className="text-primary hover:underline font-medium"
                      >
                        info@prakmas.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Quick response guaranteed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-glow-cyan">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 text-foreground">Call Us</h3>
                      <a 
                        href="tel:+919121317848" 
                        className="text-secondary hover:underline font-medium"
                      >
                        +91 91213 17848
                      </a>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Mon-Fri, 9 AM - 6 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Headquartered in India
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        Serving 20+ countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Why Choose PraKMas?
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>150+ successful projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>98% client satisfaction rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Global expertise, local support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                {/* Background gradient */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-2xl" />
                
                <div className="relative p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-border shadow-2xl">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        I'm interested in (Optional)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'software', label: 'Software Dev', icon: Code2 },
                          { id: 'training', label: 'Training', icon: GraduationCap },
                          { id: 'consulting', label: 'Consulting', icon: Briefcase },
                          { id: 'other', label: 'Other', icon: TrendingUp }
                        ].map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                              selectedService === service.id
                                ? 'border-primary bg-primary/10 shadow-glow'
                                : 'border-border hover:border-primary/30 bg-card/50'
                            }`}
                          >
                            <service.icon className={`h-5 w-5 ${selectedService === service.id ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className={`text-sm font-medium ${selectedService === service.id ? 'text-primary' : 'text-foreground'}`}>
                              {service.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-card/50 border-border h-12"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-card/50 border-border h-12"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-card/50 border-border h-12"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-card/50 border-border min-h-[160px] resize-none"
                        placeholder="Tell us about your project, goals, or questions..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full h-14 text-lg font-semibold group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </p>

                    {/* Invisible reCAPTCHA */}
                    {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                      <div className="absolute -left-[9999px] opacity-0 pointer-events-none">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                          size="invisible"
                        />
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - Enhanced Cards */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Explore Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "Software Development", 
                desc: "Custom web & mobile apps, enterprise solutions", 
                link: "/software-development",
                icon: Code2,
                color: "primary",
                stats: "150+ Projects"
              },
              { 
                title: "Training Programs", 
                desc: "Industry-ready tech education with hands-on projects", 
                link: "/training-internships",
                icon: GraduationCap,
                color: "secondary",
                stats: "800+ Alumni"
              },
              { 
                title: "Career Services", 
                desc: "Job placement support & interview preparation", 
                link: "/job-assistance",
                icon: Briefcase,
                color: "primary",
                stats: "92% Success"
              },
              { 
                title: "Global Consulting", 
                desc: "Market entry & offshore team setup expertise", 
                link: "/global-consulting",
                icon: Globe,
                color: "secondary",
                stats: "20+ Countries"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-3 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`mb-6 p-4 rounded-xl bg-${service.color}/10 inline-flex group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">{service.stats}</span>
                    <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </span>
                  </div>
                </div>

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${service.color}/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Quick Answers
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions from clients and students
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "How quickly will you respond?",
                  a: "We typically respond within 24 hours on business days. Urgent inquiries are prioritized."
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! We provide free initial consultations to understand your needs and propose solutions."
                },
                {
                  q: "What industries do you serve?",
                  a: "We work across FinTech, Healthcare, E-commerce, SaaS, Education, and more."
                },
                {
                  q: "Can you work with international clients?",
                  a: "Absolutely! We serve clients in 20+ countries with flexible time zone support."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="font-bold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent border-2 border-border shadow-2xl">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Global Reach, Local Expertise</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Headquartered in India, Serving the World
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                PraKMas Global Innovations Private Limited operates across 20+ countries with a dedicated team of experts positioned to deliver exceptional results wherever you are.
              </p>
              
              <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Timezones</div>
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

export default Contact;
