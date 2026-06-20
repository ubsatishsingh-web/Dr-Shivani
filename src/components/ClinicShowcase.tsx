import React from "react";
import { motion } from "motion/react";

export function ClinicShowcase() {
  return (
    <section id="showcase" className="py-20 sm:py-24 bg-teal-50/10 overflow-hidden border-t border-teal-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Real Clinic Photo Gallery */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-primary text-xs font-extrabold mb-4"
          >
            CLINIC SHOWCASE
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-balance"
          >
            Explore Our <span className="text-primary italic">Lucknow Clinic</span> in Pictures
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground mt-3 font-medium"
          >
            Take a virtual tour of our modern, kid-friendly, and sterile dental setup in Vrindavan Colony.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {/* 1. Surgery room setup (Takes 3 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white/80 border border-teal-100/50 shadow-md group flex flex-col justify-between"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/d/1w2u9iYImaEpSk4gVrKFKqkuvF5Y0Xp51"
                alt="SHMIK 24x7 Dental Clinic Surgery Room"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                Operative Care Zone
              </span>
            </div>
            <div className="p-5 sm:p-6 text-left">
              <h4 className="font-extrabold text-base sm:text-lg text-foreground mb-1">State-of-the-Art Operations Room</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                Our modern clinical workspace features an adjustable lavender therapy chair, advanced ultraviolet (UV) sterilization instruments, and our iconic grinning tooth neon light which comforts anxious kids and adults.
              </p>
            </div>
          </motion.div>

          {/* 2. Pediatric certificate award checkup (Takes 3 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white/80 border border-teal-100/50 shadow-md group flex flex-col justify-between"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/d/1lgJBuSYlFPH44rvbwDRO15tGvDgJkKde"
                alt="Kids Dentistry at SHMIK Dental Clinic"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-teal-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                Pediatric Success
              </span>
            </div>
            <div className="p-5 sm:p-6 text-left">
              <h4 className="font-extrabold text-base sm:text-lg text-foreground mb-1">Painless Pediatric Checkups</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                We turn tooth-dread into pure joy! Every single child receives a personalized certificate of oral excellence from Dr. Shivani Srivastava after their comfortable, pain-free dental scan.
              </p>
            </div>
          </motion.div>

          {/* 3. Implant Model (Takes 2 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white/80 border border-teal-100/50 shadow-md group flex flex-col justify-between"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/d/16gDVOPaLkEf4p55gktyR6hTNRHoWLtzo"
                alt="Dental Implant model, prosthetic teeth replacement"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                Prosthetic Tech
              </span>
            </div>
            <div className="p-5 sm:p-6 text-left">
              <h4 className="font-extrabold text-base text-foreground mb-1">Durable Dental Implants</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                Custom-engineered, lifelike bridges and Titanium dental implants designed carefully to restore lost speaking fluidity and biting force.
              </p>
            </div>
          </motion.div>

          {/* 4. Dr Treatment cap (Takes 2 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white/80 border border-teal-100/50 shadow-md group flex flex-col justify-between"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/d/13zIhZy19WYzo6DIJrr2pL9WynuXcK1u7"
                alt="Precise RCT and treatments"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                Sterile Procedures
              </span>
            </div>
            <div className="p-5 sm:p-6 text-left">
              <h4 className="font-extrabold text-base text-foreground mb-1">Rotary Root Canals (RCT)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                Dr. Shivani Srivastava performs meticulous crown alignments and nerve scaling treatments with professional, comfortable speed and precision.
              </p>
            </div>
          </motion.div>

          {/* 5. Kids desk consult (Takes 2 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl sm:rounded-[32px] overflow-hidden bg-white/80 border border-teal-100/50 shadow-md group flex flex-col justify-between"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/d/1PJHgBsveWb2zFnYvF0AK_LaTQT_vMLP5"
                alt="Compassionate client counseling"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                Patient Counsel
              </span>
            </div>
            <div className="p-5 sm:p-6 text-left">
              <h4 className="font-extrabold text-base text-foreground mb-1">Empathetic Counseling</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                Listening carefully and mapping out pocket-friendly pathways alongside children and active parents, banishing tooth anxiety.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
