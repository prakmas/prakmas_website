"use client"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail("");
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-50 blur-sm" />
                <Image
                  src="/logo.jpeg"
                  alt="PraKMas Logo"
                  width={48}
                  height={48}
                  className="relative h-12 w-12 rounded-full"
                />
              </div>
              <div>
                <div className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                  PraKMas
                </div>
                <div className="text-xs font-semibold text-muted-foreground italic -mt-0.5">
                  Driven By Innovation
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground mb-5 max-w-md leading-relaxed">
              Empowering organizations and professionals with cutting-edge software solutions, 
              comprehensive training programs, and global consulting services.
            </p>
            
            {/* Newsletter */}
            <div className="mb-5">
              <h3 className="font-bold mb-3 text-base text-foreground">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-primary text-slate-300 hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-md hover:shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 text-slate-300" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <a href="mailto:info@prakmas.com" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">info@prakmas.com</span>
              </a>
              <a href="tel:+919121317848" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">+91 91213 17848</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-base text-foreground">Solutions</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/software-development" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/training-internships" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  Training & Internships
                </Link>
              </li>
              <li>
                <Link href="/job-assistance" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  Career Services
                </Link>
              </li>
              <li>
                <Link href="/global-consulting" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  Global Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-base text-foreground">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-8 pt-8 border-t border-border">
          <a
            href="https://www.linkedin.com/company/prakmas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/prakmas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/prakmas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/prakmas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <span className="font-medium">© {new Date().getFullYear()} <span className="text-foreground font-bold">PraKMas Global Innovations</span>. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap gap-5 text-sm justify-center">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Terms
              </Link>
              <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
