import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Stethoscope, 
  Sparkles, 
  Shield, 
  HeartPulse, 
  Smile, 
  Clock,
  ArrowRight,
  Phone,
  Calendar,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  Info
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesDetailData } from "../data/servicesDetail";

const services = [
  {
    id: "emergency-care",
    title: "24/7 Emergency Care",
    description: "Get a professional to manage your dental emergencies and pain even at midnight. Call us anytime.",
    icon: Clock,
    color: "bg-red-50 text-red-600 border-red-100",
    seoTitle: "24/7 Emergency Dental Care & Urgent Pain Management in Lucknow",
    seoContent: "Finding yourself in intense tooth pain at midnight can be terrifying. At SHMIK 24x7 Dental Clinic in Vrindavan Colony, Lucknow, we prioritize your urgent relief with our dedicated on-call emergency dental services. Led by Dr. Shivani Srivastava, our team stands ready to manage severe toothaches, wisdom tooth swellings, and accidental trauma round the clock. Lucknow residents no longer have to wait until regular hospital hours to find dynamic, skilled practitioners. A prompt phone call immediately routes you to a dental expert who will secure precise care and immediate pain management. Keep our emergency hotline (+91 92367 37372) saved for complete peace of mind."
  },
  {
    id: "painless-rct",
    title: "Painless RCT & Re-RCT",
    description: "Expert painless root canal treatment explained with educational videos for complete comfort.",
    icon: Stethoscope,
    color: "bg-teal-50 text-teal-600 border-teal-100",
    seoTitle: "Completely Painless Root Canal Treatment (RCT & Re-RCT) in Vrindavan Colony",
    seoContent: "Unmanaged tooth infections can cause extreme discomfort, but saving your natural teeth is our primary focus. We provide painless Root Canal Treatments (RCT) and specialized Re-RCT at SHMIK 24x7 Dental Clinic in Lucknow, India. Dr. Shivani Srivastava combines advanced endodontic techniques with patient-friendly counselling to deliver a stress-free outcome. To ease dental anxiety, we explain every single step thoroughly using high-definition educational video aids. Our precise approach guarantees quiet, pain-free recovery, and protects your original tooth structure efficiently. It is the gold standard of endodontic preservation in Vrindavan Colony, scheduled at pocket-friendly prices."
  },
  {
    id: "zirconia-crowns",
    title: "Precision Crowns & Capping",
    description: "High-precision Zirconia crowns designed so carefully you can't differentiate them from real teeth.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    seoTitle: "Precision Zirconia Crowns & Dental Capping matching Natural Teeth in Lucknow",
    seoContent: "Restore your bite structure and facial aesthetics with high-precision Zirconia crowns and dental capping in Vrindavan Colony, Lucknow. At SHMIK 24x7 Dental Clinic, we customize crowns with such rigorous accuracy that patients report they cannot distinguish the real tooth from the custom crown. Ideal for protecting weak teeth after a root canal or securing broken teeth, our high-quality Zirconia crowns offer exceptional durability and natural translucency. Dr. Shivani Srivastava takes precise digital measurements and partners with leading labs to provide a durable, beautiful fit designed to withstand daily wear elegantly."
  },
  {
    id: "dental-fillings",
    title: "Teeth Filling & Restoration",
    description: "Thorough, careful filling procedures using premium composite materials at highly reasonable prices.",
    icon: HeartPulse,
    color: "bg-pink-50 text-pink-600 border-pink-100",
    seoTitle: "Meticulous Tooth Fillings & Aesthetic Restorations",
    seoContent: "Protect your smile from dental decay with our thorough tooth filling and dental restoration services at SHMIK 24x7 Dental Clinic in Lucknow, India. We utilize premium composite and tooth-colored materials to seamlessly repair cavities, chips, and wear patterns. Dr. Shivani Srivastava performs fillings with meticulous care to support long-term chewing strength and block further bacterial decay. It is a highly hygienic, quick, and pocket-friendly procedure that restores perfect structural anatomy without any discomfort. Regular dental fillings protect against complex root infections, saving you substantial hassle and future treatment costs."
  },
  {
    id: "braces-aligners",
    title: "Braces & Orthodontics",
    description: "Dedicated and gentle orthodontic alignments utilizing high-quality metal, ceramic, or clear aligners.",
    icon: Smile,
    color: "bg-green-50 text-green-600 border-green-150",
    seoTitle: "Customized Braces & Modern Clear Aligners for Lucknow Patients",
    seoContent: "Achieve a beautifully aligned smile with customized orthodontic braces and modern clear aligners at SHMIK 24x7 Dental Clinic in Vrindavan Colony. We provide dedicated orthodontic interventions for teenagers and adults looking to resolve crowded teeth, gaps, or bite issues in Lucknow. Dr. Shivani Srivastava offers a full suite of multi-specialty options, including classic metal braces, subtle ceramic brackets, and invisible aligners. Our personalized approach ensures your comfortable treatment path is painless, hygienic, and perfectly matched to your aesthetic goals for long-term facial structure confidence."
  },
  {
    id: "cosmetics-jewelry",
    title: "Cosmetics & Dental Jewellery",
    description: "Elevate your smile with premium cosmetic dentistry, scaling, whitening, and custom dental jewelry.",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    seoTitle: "Smile Designing, Dental Hygiene & Premium Dental Jewelry",
    seoContent: "Brighten your overall look with premium cosmetic dental solutions and scaling at SHMIK. We provide detailed smile designing, professional teeth whitening, dental hygiene cleaning, and safe, custom dental jewelry. Our cosmetic jewel services allow you to safely place beautiful, non-invasive therapeutic gems on your front teeth for a personalized sparkle. Dr. Shivani Srivastava has exceptional expertise in dental aesthetics, creating natural, striking transitions that exceed patient expectations and build immense self-worth. It is an amazing and affordable way to elevate your smile's confidence in Lucknow."
  },
];

export function Services() {
  const [activeTabId, setActiveTabId] = useState("painless-rct");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeDetail = servicesDetailData.find((item) => item.id === activeTabId) || servicesDetailData[0];

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setOpenFaqIndex(0); // Reset accordion to first FAQ
    // Smooth scroll down to the detail container
    const element = document.getElementById("interactive-guide-anchor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-primary text-xs font-bold mb-4"
          >
            OUR DENTAL SPECTRUM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
          >
            Comprehensive Care for <span className="text-primary italic">Every Smile</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            We offer premium quality treatments with professional care in Vrindavan Colony, Lucknow. Explore our specific specialties and view our interactive clinical guides.
          </motion.p>
        </div>

        {/* Quick Grid Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const isActive = activeTabId === service.id;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div 
                  onClick={() => handleTabChange(service.id)}
                  className={cn(
                    "h-full border rounded-[24px] p-6 transition-all duration-355 group cursor-pointer flex flex-col justify-between text-left",
                    isActive 
                      ? "bg-teal-50/40 border-primary ring-2 ring-primary/20 shadow-md" 
                      : "bg-teal-50/10 border-teal-100 shadow-sm hover:shadow-md hover:bg-white"
                  )}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${service.color} border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}>
                      <service.icon size={22} />
                    </div>
                    <h3 className="text-xl font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground font-semibold mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center text-primary text-xs font-black group-hover:gap-2 transition-all mt-auto">
                    <span>{isActive ? "Viewing Guide Below" : "Read Patient Guide"}</span>
                    <ArrowRight size={12} className={cn("ml-1 transition-transform", isActive ? "rotate-90 text-primary" : "group-hover:translate-x-1")} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Anchor point for smooth scrolling */}
        <div id="interactive-guide-anchor" className="scroll-mt-24" />

        {/* Interactive, Educational Clinical Detail Panel */}
        <motion.div 
          layout
          className="bg-teal-50/20 border border-teal-100/60 rounded-[36px] p-6 md:p-12 shadow-sm mb-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-teal-100 pb-8 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-850 text-[10px] font-black uppercase tracking-wider mb-2">
                ● Advanced Clinical Guide
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                {activeDetail.title}
              </h3>
              <p className="text-xs font-semibold text-primary/80 mt-1">
                {activeDetail.subtitle} — {activeDetail.location}
              </p>
            </div>
            
            <div className="flex gap-2">
              <a 
                href="#contact" 
                className={cn(buttonVariants({ size: "default" }), "bg-primary text-white hover:bg-primary/95 rounded-full font-bold px-6 shadow-md")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Treatment
              </a>
              {activeDetail.id === "emergency-care" && (
                <a 
                  href="tel:+919236737372" 
                  className={cn(buttonVariants({ size: "default", variant: "outline" }), "border-red-600 text-red-600 hover:bg-red-50 rounded-full px-5 font-bold")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Clinic (24/7)
                </a>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 text-left">
            
            {/* Left Column: What is it, Symptoms, Procedure */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* What is it */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Info size={16} />
                  <span>Clinical Overview</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {activeDetail.whatIsIt}
                </p>
              </div>

              {/* Signs/Symptoms */}
              <div className="bg-white rounded-3xl p-6 border border-teal-100/50 shadow-sm space-y-4">
                <h4 className="font-extrabold text-foreground text-sm">
                  When Should You Seek Treatment? (Key Indicators)
                </h4>
                <div className="space-y-3">
                  {activeDetail.signsNeeded.map((sign, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-100 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</span>
                      <span className="text-xs text-foreground/85 font-medium leading-relaxed">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step By Step Procedure */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-foreground text-sm flex items-center gap-2">
                  <span>Professional Step-by-Step Procedure</span>
                </h4>
                <div className="relative border-l border-teal-150 pl-6 ml-3 space-y-6">
                  {activeDetail.procedureSteps.map((step, idx) => {
                    const separatorIndex = step.indexOf(": ");
                    const title = separatorIndex !== -1 ? step.substring(0, separatorIndex) : step;
                    const desc = separatorIndex !== -1 ? step.substring(separatorIndex + 2) : "";
                    return (
                      <div key={idx} className="relative">
                        <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white flex items-center justify-center text-[0px]" />
                        <span className="font-bold text-sm block text-foreground leading-tight">{title}</span>
                        {desc && <span className="text-xs text-muted-foreground mt-1 block leading-relaxed">{desc}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Benefits, and 5 FAQs */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Core Benefits */}
              <div className="bg-primary text-white rounded-3xl p-6 md:p-8 space-y-4">
                <h4 className="font-black tracking-tight text-white text-xs uppercase">Key Health & Aesthetic Benefits</h4>
                <div className="space-y-3">
                  {activeDetail.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-xs font-bold leading-normal text-teal-50">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Patient FAQs */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-foreground text-sm flex items-center gap-2">
                  <HelpCircle size={18} className="text-primary" />
                  <span>Frequently Asked Patient Questions</span>
                </h4>
                
                <div className="space-y-2">
                  {activeDetail.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        className="border border-teal-100 bg-white rounded-2xl overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-xs text-foreground hover:bg-teal-50/20 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown size={14} className={cn("text-muted-foreground transition-transform duration-300 shrink-0 ml-2", isOpen && "rotate-180 text-primary")} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="p-4 pt-0 border-t border-teal-50 text-xs text-muted-foreground leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Clean, detailed SEO list with focus-triggers */}
        <div className="border-t border-teal-50 pt-24 space-y-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
              Detailed Treatment Insights & Healthcare Benefits
            </h3>
            <p className="text-base text-muted-foreground mt-2 font-medium">
              Understand our advanced clinical modalities and why Lucknow families trust Dr. Shivani Srivastava's precise approach to pain-free dentistry.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                id={`seo-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-8 md:p-12 rounded-[32px] bg-teal-50/20 border border-teal-100/40 relative overflow-hidden group hover:bg-teal-50/40 transition-colors duration-300 text-left"
              >
                <div className="absolute top-6 right-8 text-[120px] font-black leading-none text-teal-900/5 select-none font-sans">
                  0{index + 1}
                </div>
                
                <div className="relative z-10 max-w-4xl space-y-6">
                  <div className="inline-flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center shadow-sm border`}>
                      <service.icon size={20} />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-black text-primary">{service.title} Specialist</span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight tracking-tight">
                    {service.seoTitle}
                  </h4>

                  <p className="text-base text-foreground/80 leading-relaxed font-normal">
                    {service.seoContent}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <button 
                      type="button"
                      onClick={() => handleTabChange(service.id)}
                      className={cn(buttonVariants({ size: "default" }), "bg-primary text-white hover:bg-primary/95 rounded-full px-6 font-bold flex items-center shadow-md")}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      View Full Clinical Guide & FAQs
                    </button>
                    {service.id === "emergency-care" && (
                      <a 
                        href="tel:+919236737372" 
                        className={cn(buttonVariants({ size: "default", variant: "outline" }), "border-red-600 text-red-600 hover:bg-red-50 rounded-full px-6 font-bold flex items-center")}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Emergency Hotline (24/7)
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple patient assurance notice */}
        <div className="mt-24 p-8 md:p-12 rounded-[40px] bg-teal-950 text-white shadow-xl text-center space-y-6">
          <p className="text-xs uppercase tracking-widest font-black text-accent">● COMFORT GUARANTEE</p>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Your Peace of Mind is Our Greatest Success</h3>
          <p className="text-teal-100/80 max-w-2xl mx-auto text-base leading-relaxed">
            Every step we take at SHMIK 24x7 Dental Clinic revolves around extreme clean standards, reassuring smiles, and painless dental expertise. Connect with Dr. Shivani Srivastava's team in Lucknow for trusted local checkups.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent/90 text-teal-950 px-8 py-3.5 rounded-full font-black text-sm shadow-md transition-all scale-100 hover:scale-[1.03]"
            >
              Request Quick Callback
            </a>
            <a 
              href="tel:+919236737372" 
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all"
            >
              Contact Us: +91 92367 37372
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
