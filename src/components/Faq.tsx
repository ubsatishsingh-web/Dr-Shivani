import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: "book-appointment",
      question: "How do I book an appointment with Dr. Shivani Srivastava?",
      answer: (
        <span>
          Booking an appointment is incredibly easy. You can request a callback instantly by filling out our quick online inquiry form on the website, or you can call us directly at <a href="tel:+919236737372" className="text-primary font-bold hover:underline">+91 92367 37372</a>. We encourage you to <a href="#contact" className="text-primary font-bold hover:underline">book an appointment today</a> to secure your preferred timing slot.
        </span>
      ),
    },
    {
      id: "hours-emergency",
      question: "Is SHMIK Dental Clinic open 24/7 for all kinds of treatments?",
      answer: (
        <span>
          Our primary clinic consulting hours are Tuesday through Sunday from 9:00 AM to 9:00 PM (Monday from 11:00 AM to 4:00 PM). However, we offer dedicated on-demand emergency clinical support 24/7 for sudden severe pain, trauma, or swelling. We invite you to <a href="#contact" className="text-primary font-bold hover:underline">book your regular appointment online</a> or ring our emergency team immediately for urgent off-hours care.
        </span>
      ),
    },
    {
      id: "painless-rct",
      question: "Are root canal treatments (RCT) painful at your clinic?",
      answer: (
        <span>
          Not at all! Dr. Shivani Srivastava specialize in completely painless single-sitting or multi-sitting Root Canal Treatments using advanced rotary endodontics and highly precise local anesthesia techniques. Stop suffering in silence and <a href="#contact" className="text-primary font-bold hover:underline">book a painless RCT appointment today</a> for complete comfort.
        </span>
      ),
    },
    {
      id: "zirconia-crowns",
      question: "What is the lifespan and benefit of Zirconia Crowns?",
      answer: (
        <span>
          Zirconia crowns are metal-free, offer exceptional chewing durability, are highly biocompatible, and match the natural translucent shade of your teeth perfectly. With proper oral hygiene, they can easily last a lifetime. Protect your tooth's structural anatomy and <a href="#contact" className="text-primary font-bold hover:underline">book an appointment with Dr. Shivani Srivastava</a> to customize your premium Zirconia crown.
        </span>
      ),
    },
    {
      id: "braces-aligners",
      question: "Do you offer modern invisible aligners or clear braces?",
      answer: (
        <span>
          Yes, we offer advanced invisible dental aligners alongside classic metal and subtle tooth-colored ceramic brackets to comfortably align crooked teeth and resolve bite gapping. Take the first step towards a perfectly aligned, confident smile by <a href="#contact" className="text-primary font-bold hover:underline">booking your custom orthodontic assessment appointment today</a>.
        </span>
      ),
    },
    {
      id: "scaling-cleaning",
      question: "How often should I get professional scaling & dental cleaning?",
      answer: (
        <span>
          Dentists globally recommend scheduling a professional dental scaling and cleaning session every 6 months to remove mineralized tartar build-up, refresh bad breath, and stop early gum inflammation. We highly suggest you <a href="#contact" className="text-primary font-bold hover:underline">book your teeth cleaning appointment today</a> to keep your oral hygiene in pristine condition.
        </span>
      ),
    },
    {
      id: "dental-jewelry",
      question: "Is dental jewelry safe for my teeth?",
      answer: (
        <span>
          Absolutely! Our premium cosmetic dental jewelry service uses completely safe, non-invasive therapeutic dental adhesives to securely place dazzling gems on your front tooth structure. It requires no drilling at all, causes no structural damage to enamel, and can be removed easily. Elevate your smile aesthetics safely by <a href="#contact" className="text-primary font-bold hover:underline">booking your touch-up appointment with us today</a>.
        </span>
      ),
    },
    {
      id: "location-parking",
      question: "Where is the clinic located, and is parking available?",
      answer: (
        <span>
          Our state-of-the-art clinic is centrally situated in Sector 2, Vrindavan Colony, Lucknow. The premises are right on the main sector road with secure, congestion-free off-street parking available. This makes visits seamless for patients from LDA, Telibagh, and airport areas. Give your family professional, stress-free care and <a href="#contact" className="text-primary font-bold hover:underline">book a clinic visit appointment today</a>.
        </span>
      ),
    },
    {
      id: "emergency-options",
      question: "What steps should I take during a wisdom tooth emergency or midnight swelling?",
      answer: (
        <span>
          If you encounter an accidental tooth trauma or agonizing midnight dental pain, call our clinical response team at +91 92367 37372 immediately. We will coordinate directly with Dr. Shivani Srivastava's team to set up critical relief measures, so we always invite you to <a href="#contact" className="text-primary font-bold hover:underline">book an urgent emergency console slot</a> as soon as possible.
        </span>
      ),
    },
    {
      id: "sterilization-safety",
      question: "Do you maintain safe sterilization protocols for treatments?",
      answer: (
        <span>
          Patient health is our absolute priority. We employ full multi-stage autoclave sterilization and surgical-grade hygiene packing for every dental instrument to prevent any risk of cross-infection. For exceptional safety standards and peace of mind, we kindly ask you to <a href="#contact" className="text-primary font-bold hover:underline">book your sanitized clinical appointment today</a>.
        </span>
      ),
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-teal-50/10 border-t border-b border-teal-100/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-primary text-xs font-black uppercase tracking-wider mb-4"
          >
            PATIENT EDUCATION CENTER
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
          >
            Common Patient <span className="text-primary italic">Questions & FAQs</span>
          </motion.h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
            Get clear, authentic, and scientific answers directly from Dr. Shivani Srivastava's team at SHMIK 24x7 Dental Clinic. Empowering your journey towards painless dental wellness in Lucknow.
          </p>
        </div>

        {/* FAQs Accordion Layout */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-teal-100/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-extrabold text-sm md:text-base text-foreground hover:bg-teal-50/10 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-teal-50 text-primary flex items-center justify-center text-xs font-black">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "text-muted-foreground transition-transform duration-300 shrink-0 ml-3",
                      isOpen && "rotate-180 text-primary"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-teal-50 text-xs md:text-sm text-foreground/80 leading-relaxed space-y-4">
                        <div className="bg-teal-50/20 p-4 rounded-xl border border-teal-50/55 font-normal">
                          {faq.answer}
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href="#contact"
                            className={cn(
                              buttonVariants({ size: "sm" }),
                              "bg-primary hover:bg-primary/95 text-white rounded-full font-bold px-4"
                            )}
                          >
                            <Calendar className="mr-1.5 h-3.5 w-3.5" />
                            Book Appointment Slot Now
                          </a>
                          <a
                            href="tel:+919236737372"
                            className={cn(
                              buttonVariants({ size: "sm", variant: "outline" }),
                              "border-teal-200 text-primary hover:bg-teal-50/40 rounded-full font-bold px-4"
                            )}
                          >
                            <Phone className="mr-1.5 h-3.5 w-3.5" />
                            Call Coordinator
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-16 bg-gradient-to-r from-teal-50/30 to-teal-100/10 p-8 rounded-[32px] border border-teal-100/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100/70 text-primary flex items-center justify-center shrink-0">
              <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-foreground text-sm">Have a unique dental concern?</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Speak directly with Dr. Shivani Srivastava's team to get direct professional guidance tailored for your clinical needs.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "default" }),
              "bg-primary text-white hover:bg-primary/95 rounded-full font-black px-6 shadow-md shrink-0 w-full md:w-auto"
            )}
          >
            Ask a Custom Question
          </a>
        </div>

      </div>
    </section>
  );
}
