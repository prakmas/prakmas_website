"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveCard from "@/components/InteractiveCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useReCaptcha } from "@/hooks/use-recaptcha";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Your Next Developer Should Be From India: The Hidden Advantages of Offshore Teams",
    excerpt: "Discover how India has become the world's leading destination for software development talent. With 800+ trained professionals and 150+ successful projects, PraKMas reveals the strategic advantages of building offshore teams in India's thriving tech ecosystem.",
    category: "Global Consulting",
    date: "2025-03-28",
    readTime: "7 min read",
    image: "/assets/ai-sdlc-hero.webp",
    featured: true,
  },
  {
    id: 2,
    title: "From Bootcamp to ₹6.5L Package: How PraKMas Transforms Careers in 6 Months",
    excerpt: "With a 92% placement rate and an average package of ₹6.5L, PraKMas's training programs are rewriting the rules of tech education. Learn how hands-on projects, industry certifications, and guaranteed internships create job-ready developers.",
    category: "Career Development",
    date: "2025-03-25",
    readTime: "8 min read",
    image: "/assets/devops-tools.webp",
    featured: true,
  },
  {
    id: 3,
    title: "The 60% Cost Savings Formula: Building High-Performance Offshore Development Teams",
    excerpt: "Companies are saving up to 60% on development costs while accessing world-class talent. This comprehensive guide reveals PraKMas's proven 4-6 week setup process for establishing successful offshore teams across 20+ countries.",
    category: "Global Consulting",
    date: "2025-03-20",
    readTime: "10 min read",
    image: "/assets/predictive-analytics.webp",
    featured: false,
  },
  {
    id: 4,
    title: "MVP to Enterprise: Scaling Your Software Product Without Breaking the Bank",
    excerpt: "From early-stage startups to enterprise-scale applications, learn PraKMas's agile development methodology that delivers production-ready software in 2-week sprints. Real case studies from 150+ successful projects.",
    category: "Software Development",
    date: "2025-03-15",
    readTime: "9 min read",
    image: "/assets/ai-future.webp",
    featured: false,
  },
  {
    id: 5,
    title: "Full-Stack to Cloud: Which Tech Career Path Pays Best in 2025?",
    excerpt: "An in-depth analysis of the most lucrative tech career paths in 2025. Compare salaries, growth potential, and job availability across Full-Stack Development, Cloud Engineering, AI/ML, and Data Science with insights from 50+ hiring partners.",
    category: "Career Development",
    date: "2025-03-10",
    readTime: "6 min read",
    image: "/assets/team-collaboration.webp",
    featured: false,
  },
  {
    id: 6,
    title: "Interview Decoded: What Top Companies Really Look For When Hiring Developers",
    excerpt: "From Google to local startups, hiring managers reveal what separates successful candidates from the rest. Essential technical skills, behavioral patterns, and portfolio projects that land job offers.",
    category: "Career Development",
    date: "2025-03-05",
    readTime: "8 min read",
    image: "/assets/ai-sdlc-hero.webp",
    featured: false,
  },
  {
    id: 7,
    title: "Market Entry Masterclass: Expanding Your Business to US and European Markets",
    excerpt: "Navigate the complexities of international expansion with PraKMas's proven market entry strategies. From legal compliance to cultural adaptation, discover how 100+ companies successfully expanded globally.",
    category: "Global Consulting",
    date: "2025-03-01",
    readTime: "12 min read",
    image: "/assets/devops-tools.webp",
    featured: false,
  },
  {
    id: 8,
    title: "React vs Next.js vs React Native: Choosing the Right Framework for Your Project",
    excerpt: "A technical deep-dive into modern JavaScript frameworks. When to use React, when Next.js is essential, and how React Native fits into cross-platform development strategies with real-world examples.",
    category: "Software Development",
    date: "2025-02-28",
    readTime: "10 min read",
    image: "/assets/predictive-analytics.webp",
    featured: false,
  },
];

const categories = ["All", "Software Development", "Career Development", "Global Consulting"];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();
  const { recaptchaRef, executeRecaptcha, resetRecaptcha } = useReCaptcha();

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);

    try {
      // Execute reCAPTCHA verification if available
      let recaptchaToken = null;
      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        recaptchaToken = await executeRecaptcha();
        
        if (!recaptchaToken) {
          toast({
            title: "Verification Required",
            description: "Please complete the reCAPTCHA verification to subscribe.",
            variant: "destructive",
          });
          setIsSubscribing(false);
          return;
        }
      }

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          recaptchaToken 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter. You'll receive the latest insights delivered to your inbox.",
          variant: "default",
        });
        setEmail(""); // Clear the form
        resetRecaptcha(); // Reset reCAPTCHA after successful submission
      } else {
        toast({
          title: "Subscription Failed",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Bold Asymmetric Design */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold text-primary">INSIGHTS & RESOURCES</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1]">
                <span className="block">Where</span>
                <span className="block text-primary">Innovation</span>
                <span className="block">Meets Insight</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Expert perspectives on software development, career growth, and global tech trends
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-black text-primary">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Articles</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground font-medium">Readers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">Weekly</div>
                  <div className="text-sm text-muted-foreground font-medium">Updates</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Featured highlight */}
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <Badge className="bg-primary/10 text-primary border-primary/20 font-bold">FEATURED</Badge>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 leading-tight">
                  Latest in Software Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore cutting-edge techniques, best practices, and industry insights from our expert team
                </p>
                <Link href="/blog/offshore-teams-india">
                  <Button className="w-full group">
                    Read Latest Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Floating Pills */}
      <section className="sticky top-20 z-40 py-6 bg-background/95 backdrop-blur-2xl border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">FILTER:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" 
                    : "bg-card border-2 border-border hover:border-primary/50 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid - Card-Based Modern Layout */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-black mb-4">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Handpicked content to accelerate your success journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link 
                key={post.id} 
                href={
                  post.id === 1 ? "/blog/offshore-teams-india" :
                  post.id === 2 ? "/blog/career-transformation" :
                  post.id === 3 ? "/blog/offshore-cost-savings" :
                  post.id === 4 ? "/blog/mvp-to-enterprise" :
                  post.id === 5 ? "/blog/tech-career-paths-2025" :
                  post.id === 6 ? "/blog/interview-guide" :
                  post.id === 7 ? "/blog/market-entry-guide" :
                  post.id === 8 ? "/blog/react-frameworks-guide" : "#"
                }
                className="group"
              >
                <article 
                  className="h-full flex flex-col bg-card rounded-2xl border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image Area with Color Overlay */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,168,168,0.1),transparent_50%)]" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-white text-primary border-0 font-bold shadow-lg">
                        {post.category.split(' ')[0]}
                      </Badge>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-tl-full" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-medium">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-black mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Bold Split Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl border-2 border-primary/20 p-12 md:p-16 shadow-2xl">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
                  <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary to-primary/80">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center mb-10">
                <h2 className="text-5xl md:text-6xl font-black mb-4">
                  <span className="block mb-2">Stay Ahead</span>
                  <span className="text-primary">Get Weekly Insights</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join 10,000+ professionals receiving expert tips, industry trends, and exclusive content every week
                </p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleNewsletterSubscription} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-xl bg-background border-2 border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-base font-medium"
                    disabled={isSubscribing}
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold text-base shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Subscribe
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Join 10,000+ subscribers • Unsubscribe anytime
                </p>
              </form>
                
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
