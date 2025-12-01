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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-black via-primary to-black bg-[length:200%_100%] animate-gradient-x backdrop-blur-2xl border-b-2 border-primary/30 shadow-2xl shadow-primary/20' 
        : 'bg-gradient-to-r from-black/90 via-primary/90 to-black/90 bg-[length:200%_100%] animate-gradient-x backdrop-blur-xl'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-white to-accent rounded-full opacity-60 group-hover:opacity-100 blur-md transition-all animate-pulse" />
              <Image
                src="/logo.jpeg"
                alt="PraKMas Logo"
                width={50}
                height={50}
                className="relative h-10 w-10 sm:h-12 sm:w-12 group-hover:scale-110 transition-transform rounded-full ring-2 ring-white/50 group-hover:ring-white"
                priority
              />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white group-hover:text-accent transition-all">
                PraKMas
              </div>
              <div className="text-[9px] sm:text-[11px] font-bold text-white/90 italic tracking-wide -mt-1">
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
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white transition-all border border-white/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[9999] bg-black/98 overflow-hidden"
            onClick={(e) => {
              // Close menu when clicking the backdrop
              if (e.target === e.currentTarget) {
                setMobileMenuOpen(false);
              }
            }}
          >
            {/* Menu Content */}
            <div className="h-full w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-sm border-b border-white/10">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/logo.jpeg"
                    alt="PraKMas"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full"
                  />
                  <div>
                    <div className="text-base font-bold text-white">PraKMas</div>
                    <div className="text-[8px] text-white/70 italic -mt-0.5">Innovation Driven!</div>
                  </div>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                        isActive(item.path)
                          ? "bg-gradient-to-r from-primary to-accent text-white"
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Theme Toggle */}
                <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">Theme</span>
                    <button
                      onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                      }}
                      className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30"
                      aria-label="Toggle theme"
                    >
                      {mounted && theme === "dark" ? (
                        <Sun className="h-4 w-4 text-white" />
                      ) : (
                        <Moon className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <Link
                    href="/contact"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-center text-sm font-bold hover:opacity-90"
                  >
                    Get Started Free
                  </Link>
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
