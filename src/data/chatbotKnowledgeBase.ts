export interface KnowledgeBaseEntry {
  category: string;
  topic: string;
  keywords: string[];
  question: string;
  answer: string;
}

export const chatbotKnowledgeBase: KnowledgeBaseEntry[] = [
  {
    category: "cost-implants",
    topic: "Cost of implants",
    keywords: ["implants", "implant", "cost", "price", "screw", "missing tooth", "false teeth"],
    question: "What is the cost of dental implants?",
    answer: "At SHMIK 24x7 DENTAL CLINIC in Lucknow, our dental implants are highly affordable and transparently priced, with no hidden charges. We use premium, biocompatible material to secure your dental crown permanently. Call +91 92367 37372 to get a custom pricing estimate! We are open Tue–Sun (9 AM–9 PM) and Mon (11 AM–4 PM). Let's secure your preferred appointment slot today!"
  },
  {
    category: "rct-pain",
    topic: "Is RCT painful",
    keywords: ["rct", "root canal", "pain", "painful", "hurt", "toothache", "nerve"],
    question: "Is a root canal treatment painful?",
    answer: "Not at all! At SHMIK 24x7 DENTAL CLINIC in Lucknow, Dr. Shivani Srivastava performs root canals completely painlessly using advanced, gentle rotary endodontics. We prioritize your absolute comfort! Visit us during our timings: Tue–Sun (9 AM–9 PM) or Mon (11 AM–4 PM). Book a quick dental exam now or call us directly at +91 92367 37372!"
  },
  {
    category: "teeth-whitening",
    topic: "Teeth whitening",
    keywords: ["whitening", "bleaching", "yellow", "stains", "brighten", "cosmetic", "color"],
    question: "How does teeth whitening work and is it safe?",
    answer: "Our professional teeth whitening at SHMIK 24x7 DENTAL CLINIC in Lucknow is highly effective, safe, and fast! We use certified, light-activated dental gels to safely lift food, coffee, or aging stains without harming enamel. Give us a call at +91 92367 37372 to book a session during our hours: Tue–Sun (9 AM–9 PM) and Mon (11 AM–4 PM)!"
  },
  {
    category: "braces-invisalign",
    topic: "Braces/Invisalign",
    keywords: ["braces", "invisalign", "aligners", "crooked", "straightening", "gaps", "orthodontic"],
    question: "Do you offer braces or Invisalign aligners?",
    answer: "Yes, we do! At SHMIK 24x7 DENTAL CLINIC in Lucknow, we offer traditional braces, tooth-colored ceramic brackets, and clear Invisalign aligners. Our custom orthodontic setups deliver fantastic, highly hygienic alignment results. Call +91 92367 37372 to learn more during our hours: Tue–Sun (9 AM–9 PM) and Mon (11 AM–4 PM)!"
  },
  {
    category: "kids-dentistry",
    topic: "Kids dentistry",
    keywords: ["kids", "child", "children", "pediatric", "milk teeth", "fluoride", "cavity"],
    question: "Do you offer friendly pediatric or kids dentistry?",
    answer: "We absolutely do! Children's visits at SHMIK 24x7 DENTAL CLINIC in Lucknow are designed to be extremely fun, gentle, and stress-free. We protect active baby teeth with painless sealants and therapeutic fluoride. Call inside our routine timing: Tue–Sun (9 AM–9 PM) and Mon (11 AM–4 PM) at +91 92367 37372 to book their friendly checkup!"
  },
  {
    category: "emergency-help",
    topic: "Emergency help",
    keywords: ["emergency", "emergencies", "broken tooth", "swelling", "severe pain", "trauma", "night"],
    question: "What should I do in a painful dental emergency?",
    answer: "If you have severe pain, swelling, or a broken tooth, SHMIK 24x7 DENTAL CLINIC in Lucknow offers immediate emergency pain assistance. Call us directly at +91 92367 37372! Our doctors are available 24/7 for critical pain emergencies. For routine non-emergencies, our clinic hours are Tue–Sun (9 AM–9 PM) and Mon (11 AM–4 PM)."
  },
  {
    category: "clinic-timings",
    topic: "Clinic timings",
    keywords: ["timings", "timing", "hours", "open", "sunday", "monday", "schedule", "time"],
    question: "What are the clinic's operating timings?",
    answer: "At SHMIK 24x7 DENTAL CLINIC in Lucknow, our doors are open Tuesday to Sunday (9:00 AM to 9:00 PM) and Monday (11:00 AM to 4:00 PM). We are also fully equipped with 24/7 on-call emergency support for severe pain relief and trauma. Book a slot or speak to our dental assistant by dialing +91 92367 37372 now!"
  },
  {
    category: "book-appointment",
    topic: "Book appointment",
    keywords: ["book", "appointment", "schedule", "reserve", "slot", "consultation", "contact"],
    question: "How can I book an appointment?",
    answer: "Booking your appointment at SHMIK 24x7 DENTAL CLINIC in Lucknow is simple! You can use our web appointment scheduler form directly, or call our team helpline at +91 92367 37372. Our standard clinic hours are Tue–Sun (9 AM–9 PM) and Mon (11 AM–4 PM), with 24/7 pain relief on call. Book your dedicated slot today!"
  }
];
