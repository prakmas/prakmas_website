"use client"
import { Button } from "./ui/button-variants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Services", path: "/software-development" },
    { name: "Training", path: "/training-internships" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-black via-primary to-black bg-[length:200%_100%] animate-gradient-x backdrop-blur-2xl border-b-2 border-primary/30 shadow-2xl shadow-primary/20' 
        : 'bg-gradient-to-r from-black/90 via-primary/90 to-black/90 bg-[length:200%_100%] animate-gradient-x backdrop-blur-xl'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-white to-accent rounded-full opacity-60 group-hover:opacity-100 blur-md transition-all animate-pulse" />
              <Image
                src="/logo.jpeg"
                alt="PraKMas Logo"
                width={50}
                height={50}
                className="relative h-12 w-12 group-hover:scale-110 transition-transform rounded-full ring-2 ring-white/50 group-hover:ring-white"
                priority
              />
            </div>
            <div>
              <div className="text-2xl font-black text-white group-hover:text-accent transition-all">
                PraKMas
              </div>
              <div className="text-[11px] font-bold text-white/90 italic tracking-wide -mt-1">
                Driven By Innovation!
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-5 py-2.5 text-sm font-bold transition-all rounded-xl ${
                  isActive(item.path)
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full bg-accent animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border-2 border-transparent hover:border-white/30"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* CTA Button */}
            <Button asChild className="bg-primary text-slate-300 hover:bg-primary/90 border-0 shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all font-bold hover:scale-105">
              <Link href="/contact" className="text-slate-300">
                <span className="text-slate-300">Get in Touch</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-50 animate-fade-in">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative h-full overflow-y-auto py-8 px-6">
              <div className="flex flex-col space-y-3 max-w-md mx-auto">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-6 py-4 text-lg font-bold transition-all rounded-2xl ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30 scale-105"
                        : "bg-card text-foreground hover:bg-primary/10 border-2 border-border hover:border-primary/50"
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Theme Toggle */}
                <div className="flex items-center justify-between px-6 py-5 mt-6 rounded-2xl bg-card border-2 border-border">
                  <span className="text-base font-bold">Theme</span>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {mounted && theme === "dark" ? (
                      <Sun className="h-6 w-6 text-primary" />
                    ) : (
                      <Moon className="h-6 w-6 text-secondary" />
                    )}
                  </button>
                </div>

                {/* Mobile CTA */}
                <div className="pt-6">
                  <Button asChild className="w-full h-14 bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 border-0 font-bold text-lg shadow-lg rounded-2xl">
                    <Link href="/contact" className="text-white" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-white">Get Started Free</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
