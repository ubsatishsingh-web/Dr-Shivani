import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Best Dentist", href: "#best-dentist" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mx-4 md:mx-10 mt-5 px-6 h-20 flex items-center justify-between glass-panel ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.45 1.5 4.5 3.65 5.5A7 7 0 1 0 12 2z"/><path d="M8 14.5V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5"/></svg>
            </div>
            <span className="font-sans text-lg md:text-xl font-extrabold tracking-tight text-primary whitespace-nowrap">
              SHMIK 24x7 Dental
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a 
              href="tel:+919236737372" 
              className={cn(buttonVariants({ size: "sm" }), "bg-primary hover:bg-primary/90 rounded-full px-6 font-bold flex items-center gap-1.5")}
            >
              <Phone size={14} />
              +91 92367 37372
            </a>
          </div>
        </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a href="tel:+919236737372" className="text-primary hover:text-primary/80">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className={cn(buttonVariants({ size: "default" }), "w-full bg-primary font-bold shadow-md flex items-center justify-center")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
