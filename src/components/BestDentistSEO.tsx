import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, Heart, Compass, Star, MapPin, Phone, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BestDentistSEO() {
  return (
    <section id="best-dentist" className="py-24 bg-teal-50/20 text-foreground border-t border-teal-100/40 relative overflow-hidden">
      {/* Dynamic Grid Overlay Design Element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a610_1px,transparent_1px),linear-gradient(to_bottom,#14b8a610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Container */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-850 text-xs font-black uppercase tracking-wider mb-4"
          >
            ★ LUCKNOW'S PREFERRED MULTISPECIALITY CARE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
          >
            Best Dentist in <span className="text-primary italic">Vrindavan Colony, Lucknow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-md font-semibold text-muted-foreground mt-4 leading-relaxed"
          >
            Why families and emergency patients trust Dr. Shivani Srivastava's SHMIK 24x7 Dental Clinic for pain-free, premium, and pocket-friendly oral healthcare in Uttar Pradesh, India.
          </motion.p>
        </div>

        {/* Content Columns */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Main Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                Setting the Gold Standard for Dental Care in Lucknow Yojna
              </h3>
              <p className="text-sm md:text-base text-foreground/85 leading-relaxed font-normal">
                Finding a reputable, compassionate dentist in Vrindavan Colony can feel overwhelming, especially when you are seeking a doctor who combines modern advanced technical machinery with complete, comforting bedside politeness. At <strong>SHMIK 24x7 Dental Clinic</strong>, led by the highly skilled <strong>Dr. Shivani Srivastava (BDS)</strong>, we redefine the patient experience.
              </p>
              <p className="text-sm md:text-base text-foreground/85 leading-relaxed font-normal">
                Our clinic is not just a treatment room—it is a sanctuary designed to eliminate dental phobia. By utilizing premium-grade composite fillings, ultra-high strength Zirconia dental capping, specialized painless orthodontic braces, invisible aligners, and dental jewelry, we manage every facet of your oral wellness with surgical precision.
              </p>
            </div>

            {/* Core Patient Care Pillars */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-primary border border-teal-100 flex items-center justify-center shrink-0">
                    <Shield size={16} />
                  </span>
                  <h4 className="font-extrabold text-sm text-foreground">Multi-Stage Class Sterilization</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We implement autoclave protocols. Every mirror, extractor, and rotary file undergoes severe high-pressure sterilization to verify 100% germ-free, hygienic execution.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-primary border border-teal-100 flex items-center justify-center shrink-0">
                    <Star size={16} />
                  </span>
                  <h4 className="font-extrabold text-sm text-foreground">No Unnecessary Procedures</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We hold a strict commitment to clinical ethics. Dr. Shivani only advises treatments that are biologically essential to protect your original tooth structures.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-primary border border-teal-100 flex items-center justify-center shrink-0">
                    <Heart size={16} />
                  </span>
                  <h4 className="font-extrabold text-sm text-foreground">Extreme Patient Comfort & Help</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our clinicians use interactive digital education aids and video explanations so that you understand your recovery timeline step-by-step before we begin.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-primary border border-teal-100 flex items-center justify-center shrink-0">
                    <Compass size={16} />
                  </span>
                  <h4 className="font-extrabold text-sm text-foreground">Vrindavan Colony Core Location</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nestled perfectly in Sector 2, Vrindavan Yojna, we serve South Lucknow families, offering off-street parking and instant mapping coordinates for seamless visits.
                </p>
              </div>

            </div>

            {/* Comprehensive Local SEO Area Integration */}
            <div className="bg-white/60 border border-teal-150/40 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h4 className="font-extrabold text-sm text-foreground">Our Extensive Regional Accessibility</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                As the leading dental clinic in Vrindavan Colony, we take immense pride in being incredibly accessible to patients seeking trusted, high-standard dental treatment. Our clinic is popular among families arriving from nearby communities:
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-extrabold text-primary">
                <span className="bg-teal-55/10 py-1.5 px-3 rounded-full border border-teal-100">● Vrindavan Sector-1 to Sector-12</span>
                <span className="bg-teal-55/10 py-1.5 px-3 rounded-full border border-teal-100">● Telibagh Market</span>
                <span className="bg-teal-55/10 py-1.5 px-3 rounded-full border border-teal-100">● LDA Colony</span>
                <span className="bg-teal-55/10 py-1.5 px-3 rounded-full border border-teal-100">● Amausi Airport Road</span>
                <span className="bg-teal-55/10 py-1.5 px-3 rounded-full border border-teal-100">● South City, Lucknow</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Because we are strategically placed on standard multi-lane avenues, patients experiencing localized dental trauma or toothache emergencies can arrive at our clinic congestion-free.
              </p>
            </div>

          </div>

          {/* Trust Factors, Accolades & CTA Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 md:p-10 border-teal-100 bg-white/90 shadow-lg rounded-[32px] space-y-6">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-[10px] font-black tracking-widest leading-none">
                ★ PATIENT-TRUST AWARDED
              </div>
              
              <h4 className="text-xl font-extrabold text-foreground">Lucknow's Dental Trust Indicators</h4>
              
              <div className="space-y-4 text-xs font-semibold text-foreground/80">
                <div className="flex justify-between items-center py-2 border-b border-teal-100/40">
                  <span className="text-muted-foreground">Lead Provider:</span>
                  <span className="font-extrabold text-foreground">Dr. Shivani Srivastava, BDS</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-100/40">
                  <span className="text-muted-foreground">Primary Speciality:</span>
                  <span className="font-extrabold text-foreground">Painless RCT, Aligners & Crowns</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-100/40">
                  <span className="text-muted-foreground">Hygiene Certification:</span>
                  <span className="font-extrabold text-teal-800 uppercase text-[10px] tracking-wider">● ISO Surgical Autoclave</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-100/40">
                  <span className="text-muted-foreground">Emergency Services:</span>
                  <span className="font-extrabold text-red-600">On-Call Call Out (24 Hours)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Google Clinic Rating:</span>
                  <span className="font-extrabold text-foreground">4.9 ★★★★★</span>
                </div>
              </div>

              {/* Patient Trust Quote */}
              <div className="bg-teal-50/20 p-4 rounded-2xl border border-teal-100 text-xs italic text-foreground/75 leading-relaxed">
                "Our single absolute commitment is to give you a patient experience so comforting and painless that you will look forward to keeping your dental hygiene polished."
              </div>

              {/* Call Out Reservation Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "bg-primary text-white hover:bg-primary/95 text-xs text-center font-extrabold h-12 rounded-xl w-full flex items-center justify-center gap-2 shadow-md transition-all scale-100 hover:scale-[1.01]"
                  )}
                >
                  <Calendar className="h-4 w-4" />
                  BOOK SLOT AT VRINDAVAN COLONY
                </a>
                
                <a
                  href="https://wa.me/919236737372?text=Hello%20SHMIK%20Dental%20Clinic,%20I'd%20like%20to%20consult%20Dr.%20Shivani%20Srivastava%20for%20teeth%20treatment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "default", variant: "outline" }),
                    "border-emerald-500 text-emerald-800 hover:bg-emerald-50 text-xs text-center h-12 rounded-xl w-full flex items-center justify-center gap-2"
                  )}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.453 5.38-.003 9.75-4.382 9.755-9.76.002-2.605-1.01-5.05-2.848-6.89C16.51 2.112 14.06 1.1 11.45 1.1c-5.378 0-9.751 4.38-9.756 9.76-.001 1.764.462 3.483 1.341 5.013l-.986 3.6 3.692-.97zM17.07 14.4c-.272-.136-1.613-.796-1.861-.887-.25-.091-.43-.136-.61.136-.18.272-.7.886-.856 1.068-.157.182-.314.204-.586.068-.273-.136-1.15-.424-2.19-1.354-.808-.72-1.353-1.612-1.512-1.885-.158-.27-.017-.417.118-.552.123-.122.274-.32.41-.477.136-.159.18-.272.27-.454.092-.18.046-.34-.022-.477-.068-.136-.612-1.477-.838-2.022-.22-.53-.443-.457-.61-.466-.157-.008-.338-.01-.52-.01-.18 0-.476.068-.724.34-.25.272-.953.931-.953 2.27 0 1.338.975 2.632 1.11 2.814.137.182 1.92 2.932 4.653 4.114.65.281 1.157.448 1.554.574.653.207 1.25.178 1.72.108.524-.078 1.613-.659 1.84-1.295.226-.636.226-1.182.158-1.295-.068-.113-.25-.18-.522-.317z"/></svg>
                  CONSULT VIA WHATSAPP (FREE)
                </a>
              </div>

            </div>

            {/* Quick Emergency Note */}
            <div className="bg-teal-950 text-white rounded-[28px] p-6 shadow-md text-left">
              <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-2">● TOOTHACHE EMERGENCY HOUR</p>
              <p className="text-xs leading-relaxed text-teal-100 font-medium">
                Are you located in Vrindavan Colony, South City, or Telibagh and facing excruciating dental pain right now, even past midnight? Save yourself from the agony.
              </p>
              <a
                href="tel:+919236737372"
                className="inline-flex items-center text-xs font-black text-accent hover:underline mt-3"
              >
                Call On-Call Dental Doctor: +91 92367 37372 ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
