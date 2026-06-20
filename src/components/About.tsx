import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Shield, HeartPulse, Eye, Calendar, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 bg-teal-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-primary text-xs font-extrabold mb-4"
          >
            MEET YOUR DENTIST
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
          >
            Meet Lucknow's Compassionate Dentist, <span className="text-primary italic">Dr. Shivani Srivastava</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mt-4 leading-relaxed font-medium"
          >
            Dedicated to providing comfortable, pocket-friendly, and advanced dental treatments in Vrindavan Colony, Lucknow, India.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Extensive warm story bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                A Gentle Approach to Your Dental Well-Being
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Welcome to SHMIK 24x7 Dental Clinic, where we turn dental fear into comfort. As an experienced dentist with a Bachelor of Dental Surgery (BDS), I made a promise to change how people experience dental treatments in Lucknow.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Many of my patients come in feeling anxious or scared due to past experiences. My focus is to listen patiently, counsel comfortably, and treat with maximum precision. We utilize educational videos to walk clients through procedures before starting, ensuring beautiful clarity and painless outcomes.
              </p>
            </div>

            <div className="border-t border-teal-100 pt-6">
              <h4 className="text-lg font-bold text-primary mb-3">Our 24x7 Care Philosophy</h4>
              <p className="text-base text-foreground/80 leading-relaxed">
                Dental pain and emergencies do not follow a clock. That is why SHMIK 24x7 Dental Clinic was created. From wisdom tooth pain at midnight to dynamic cosmetic fillings, we are fully prepared to assist you round the clock. Lucknow residents in Vrindavan Colony and surrounding areas can reach out anytime to receive trusted emergency attention.
              </p>
            </div>

            <div className="border-t border-teal-100 pt-6">
              <h4 className="text-lg font-bold text-primary mb-4">Our Technology & Standards</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Shield className="text-teal-600 shrink-0 mt-1" size={18} />
                  <div>
                    <span className="font-bold text-sm block text-foreground">Extreme Hygiene Standards</span>
                    <span className="text-xs text-muted-foreground">ISO-compliant autoclave sterilization for ultimate clinical safety.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <HeartPulse className="text-teal-600 shrink-0 mt-1" size={18} />
                  <div>
                    <span className="font-bold text-sm block text-foreground">Painless Advanced Modalities</span>
                    <span className="text-xs text-muted-foreground">Expert clinical techniques for nerve preservation and swift recovery.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <div className="glass-panel p-2.5 sm:p-4 text-center border-teal-100">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary">100%</p>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider font-extrabold text-muted-foreground">Painless Goal</p>
              </div>
              <div className="glass-panel p-2.5 sm:p-4 text-center border-teal-100 font-sans">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary">24/7</p>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider font-extrabold text-muted-foreground">Emergency Call</p>
              </div>
              <div className="glass-panel p-2.5 sm:p-4 text-center border-teal-100">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary">4.9★</p>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider font-extrabold text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Commitments, Practitioner Card & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-5 sm:p-8 md:p-10 border-teal-100 bg-white/80 shadow-lg rounded-2xl sm:rounded-3xl space-y-6">
              <h4 className="text-xl font-bold text-foreground">Why Book with Dr. Shivani?</h4>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Completely Transparent Counsel",
                    desc: "Only diagnostic, required treatments recommended—no unnecessary procedures."
                  },
                  {
                    title: "Precision Crown Matching",
                    desc: "Precision Zirconia crowns designed carefully to look like your authentic teeth."
                  },
                  {
                    title: "Warm, Politeness-Led Staff",
                    desc: "A warm patient welcome, comforting assistance, and complete patience."
                  },
                  {
                    title: "Pocket-Friendly Costs",
                    desc: "Advanced premium treatment delivered at the most cost-effective rates in town."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bio signature widget */}
              <div className="pt-6 border-t border-teal-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary shrink-0">
                  <img src="https://lh3.googleusercontent.com/d/1hk2aofFuxb-6lOIoRgDF9-5I2H-6uiSR" alt="Dr. Shivani Srivastava Profile Photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-extrabold text-sm leading-tight text-foreground">Dr. Shivani Srivastava</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">BDS, Head Dental Specialist</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a 
                  href="#contact" 
                  className={cn(buttonVariants({ size: "default" }), "bg-primary text-white hover:bg-primary/95 rounded-full px-6 font-bold flex-1 justify-center shadow-md")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Request Callback
                </a>
                <a 
                  href="tel:+919236737372" 
                  className={cn(buttonVariants({ size: "default", variant: "outline" }), "border-primary text-primary hover:bg-teal-50 rounded-full px-6 font-bold flex-1 justify-center")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Hotline
                </a>
              </div>
            </div>

            {/* Emergency note */}
            <div className="bg-teal-900 text-white rounded-3xl p-6 shadow-md">
              <p className="text-xs uppercase tracking-widest font-black text-accent mb-2">● 24/7 MIDNIGHT ALERTS</p>
              <p className="text-xs leading-relaxed text-teal-100 font-medium">
                Are you in Lucknow and experiencing intense tooth or wisdom pain right now? Talk directly to our dental professional on call at any hour.
              </p>
              <a 
                href="tel:+919236737372" 
                className="inline-flex items-center text-xs font-black text-accent hover:underline mt-3"
              >
                Call Support Immediately +91 92367 37372 ↗
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
