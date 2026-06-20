import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-[100px] hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary text-xs font-bold mb-6">
              <span className="text-primary animate-pulse">●</span>
              <span>24/7 EMERGENCY DENTAL HELP & PAIN MANAGEMENT</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-balance text-foreground">
              Elite Dental Care at <span className="text-primary font-bold">SHMIK 24x7.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-semibold">
              Led by Dr. Shivani Srivastava, our state-of-the-art clinic in Vrindavan Colony, Lucknow provides premier dental treatment with round-the-clock professional emergency care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full font-bold flex items-center justify-center shadow-md")}
              >
                Book Appointment
              </a>
              <a 
                href="#services" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary/5 font-bold flex items-center justify-center")}
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Google Rating</span>
                <div className="flex items-center gap-2 text-foreground">
                  <span className="font-bold text-2xl">4.9</span>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground font-semibold">Based on verified Lucknow reviews</span>
              </div>
              <div className="glass-panel p-6 flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Key Highlights</span>
                <div className="flex flex-wrap gap-2">
                  {["Painless RCT", "Precision Crowns", "24/7 Emergency"].map((tag) => (
                    <span key={tag} className="bg-white/50 px-2 py-1 rounded text-[10px] font-bold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square bg-gray-100">
              <img
                src="https://lh3.googleusercontent.com/d/1lX2L7UNmL2Bt8zs6LjiiH65Y1-QBCtrO"
                alt="Dr. Shivani Srivastava - Lead Dentist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card - Hidden on small mobile screens to prevent right overlay overflow */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 z-20 glass-panel p-6 rounded-2xl max-w-[240px] hidden sm:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-gray-100 flex items-center justify-center">
                  <img src="https://lh3.googleusercontent.com/d/1hk2aofFuxb-6lOIoRgDF9-5I2H-6uiSR" alt="Dr. Shivani Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">Dr. Shivani Srivastava</p>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">BDS - Head Dentist</p>
                </div>
              </div>
              <p className="text-xs italic text-foreground/85 leading-relaxed">
                "We provide premium quality treatments with professional care. Your health and comfort are our absolute priorities, even at midnight."
              </p>
            </motion.div>

            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
