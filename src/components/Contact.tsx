import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Checkup & Cleaning",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start text-left">
          
          {/* Left Column: High-Conversion Copywriting, Location Importance, and Timings */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-primary text-xs font-black uppercase tracking-wider mb-4"
              >
                ● COMFORT & CARE IS JUST A CALL AWAY
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
              >
                Reach Out to Lucknow’s Trusted <span className="text-primary italic">SHMIK 24x7 Dental Clinic</span>
              </motion.h2>
              <p className="text-base text-muted-foreground mt-4 leading-relaxed font-semibold">
                Whether you wish to schedule a routing teeth checkup or have a painful dental crisis at midnight, Dr. Shivani Srivastava’s team is completely prepared to assist you.
              </p>
            </div>

            {/* Address & Local SEO Accessibility Detail */}
            <div className="bg-teal-50/15 border border-teal-150/40 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center shrink-0 border border-teal-100">
                  <MapPin size={22} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-lg text-foreground">Our Strategic Location in Vrindavan Colony</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong>SHMIK 24x7 Dental Clinic</strong> is centrally placed on the main road of Sector 2, Vrindavan Colony, Lucknow. Our location features spacious off-street parking, an extremely hygienic, sterile environment, and absolute patient comfort. 
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Being located right in the heart of Vrindavan Yojna, we are easily reachable within 5 to 15 minutes for patients traveling from Telibagh, Amausi Airport Road, LDA Colony, and South Lucknow regions. This smooth, congestion-free accessibility proves life-saving for families seeking urgent pain relief or wisdom tooth extraction at odd hours.
                  </p>
                  <p className="text-sm font-bold text-foreground pt-1">
                    Address: Sector 2, Vrindavan Colony, Lucknow, Uttar Pradesh, 226029
                  </p>
                </div>
              </div>
            </div>

            {/* Timings & Emergency Note */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Clock size={18} />
                  <span className="font-extrabold text-xs uppercase tracking-wider">Clinic Operation Hours</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We maintain regular operating hours six days a week for routine checkups, restorations, capping, and cosmetic design:
                </p>
                <div className="border border-teal-100/40 rounded-2xl p-4 bg-teal-50/10 text-xs text-foreground/80 space-y-2 font-medium">
                  <div className="flex justify-between">
                    <span>Tuesday - Sunday:</span>
                    <strong className="text-foreground">9:00 AM - 9:00 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Monday:</span>
                    <strong className="text-foreground">11:00 AM - 4:00 PM</strong>
                  </div>
                  <div className="border-t border-teal-100/40 pt-2 flex justify-between">
                    <span className="font-bold text-teal-800">Midnight Call Out:</span>
                    <strong className="text-teal-900 font-extrabold">24/7 (On Call)</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-600">
                  <Phone size={18} />
                  <span className="font-extrabold text-xs uppercase tracking-wider">Urgent Emergency Disclaimer</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If you are experiencing agonizing wisdom tooth pain, dental nerve swelling, or have suffered an accidental tooth injury at midnight, please note that you do not have to wait. 
                </p>
                <div className="bg-red-50 text-red-900 border border-red-100 rounded-2xl p-4 text-xs font-semibold leading-relaxed">
                  Simply dial our dedicated emergency hotline below. We will immediately coordinate with Dr. Shivani Srivastava's specialized clinical staff to arrange quick, painless pain-relief support.
                  <a href="tel:+919236737372" className="block text-sm font-black text-red-700 hover:underline mt-2">
                    Call On-Call Doctor: +91 92367 37372 ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Clickable Map Link (No visual image descriptions, just action button) */}
            <a 
              href="https://share.google/Do7sPHr7lTaZTgL8c"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-panel overflow-hidden h-44 bg-teal-950/5 hover:bg-teal-900/10 border border-teal-100 transition-all rounded-3xl relative group"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <MapPin size={32} className="text-primary group-hover:scale-110 transition-transform mb-2" />
                <p className="text-sm font-black text-foreground group-hover:text-primary transition-colors">
                  Open Google Maps Satellite View
                </p>
                <p className="text-xs text-muted-foreground mt-1 px-4">
                  Find our clinic at Vrindavan Yojna Sector-2, Lucknow easily. Check exact driving time and get step-by-step route directions.
                </p>
                <span className="text-[10px] font-black uppercase text-primary tracking-widest mt-3 underline">
                  Get Route Map ↗
                </span>
              </div>
            </a>
          </div>

          {/* Right Column: Appointment Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-teal-50/15 border border-teal-100/60 p-8 md:p-10 shadow-lg rounded-[32px] font-sans"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="contact-form-key"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Request Call-back</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      No advance processing fees. Simply submit your inquiry and get authentic advice directly from our clinic coordinator.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-black text-primary block">Your Full Name *</label>
                      <Input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Satish Singh" 
                        className="h-11 rounded-xl bg-white border-teal-100/60 focus:ring-1 focus:ring-primary focus:border-primary text-xs" 
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-black text-primary block">Phone Number *</label>
                        <Input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Your 10-digit number" 
                          className="h-11 rounded-xl bg-white border-teal-100/60 focus:ring-1 focus:ring-primary focus:border-primary text-xs" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-black text-primary block">Email ID</label>
                        <Input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="name@gmail.com" 
                          className="h-11 rounded-xl bg-white border-teal-100/60 focus:ring-1 focus:ring-primary focus:border-primary text-xs" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-black text-primary block">Select Treatment Speciality</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full h-11 rounded-xl border border-teal-100 bg-white px-3 py-2 text-xs focus:ring-1 focus:ring-primary focus-visible:outline-none focus-visible:border-primary font-medium"
                      >
                        <option>General Checkup & Teeth Cleaning</option>
                        <option>Painless Root Canal Treatment (RCT)</option>
                        <option>Precision Zirconia Crown & Capping</option>
                        <option>Orthodontic Braces & Aligners</option>
                        <option>Cosmetic Dental Jewels & Design</option>
                        <option>Midnight Emergency / Extreme Pain Relief</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-black text-primary block">Describe Symptoms (Optional)</label>
                      <Textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Write brief history of your tooth pain, swelling, or aesthetic wishes..." 
                        className="min-h-[100px] rounded-xl bg-white border-teal-100/60 focus:ring-1 focus:ring-primary focus:border-primary text-xs resize-none" 
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-xs bg-primary hover:bg-primary/95 text-white rounded-xl font-bold shadow-md tracking-wider flex items-center justify-center">
                      REQUEST FREE Slot & CALLBACK
                      <Send className="ml-2 h-3 w-3" />
                    </Button>
                  </form>

                  {/* WhatsApp Direct Option (First prompt CTA goal) */}
                  <div className="pt-4 border-t border-teal-100/50 text-center">
                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-2">Or text directly via instant messenger</p>
                    <a 
                      href="https://wa.me/919236737372?text=Hello%20SHMIK%20Dental%20Clinic,%20I'd%20like%20to%20consult%20Dr.%20Shivani%20Srivastava%20for%20teeth%20treatment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full h-11 border border-emerald-500 bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl text-xs font-extrabold shadow-sm transition-colors"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.453 5.38-.003 9.75-4.382 9.755-9.76.002-2.605-1.01-5.05-2.848-6.89C16.51 2.112 14.06 1.1 11.45 1.1c-5.378 0-9.751 4.38-9.756 9.76-.001 1.764.462 3.483 1.341 5.013l-.986 3.6 3.692-.97zM17.07 14.4c-.272-.136-1.613-.796-1.861-.887-.25-.091-.43-.136-.61.136-.18.272-.7.886-.856 1.068-.157.182-.314.204-.586.068-.273-.136-1.15-.424-2.19-1.354-.808-.72-1.353-1.612-1.512-1.885-.158-.27-.017-.417.118-.552.123-.122.274-.32.41-.477.136-.159.18-.272.27-.454.092-.18.046-.34-.022-.477-.068-.136-.612-1.477-.838-2.022-.22-.53-.443-.457-.61-.466-.157-.008-.338-.01-.52-.01-.18 0-.476.068-.724.34-.25.272-.953.931-.953 2.27 0 1.338.975 2.632 1.11 2.814.137.182 1.92 2.932 4.653 4.114.65.281 1.157.448 1.554.574.653.207 1.25.178 1.72.108.524-.078 1.613-.659 1.84-1.295.226-.636.226-1.182.158-1.295-.068-.113-.25-.18-.522-.317z"/></svg>
                      Direct WhatsApp Messenger Chat
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success-form-key"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 text-primary border-4 border-white shadow-md">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-foreground">Callback Scheduled!</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your callback request regarding <strong>{formData.service}</strong> has been secured in our Lucknow database.
                    </p>
                    <p className="text-xs text-primary font-bold">
                      Our coordinator will ring your number ({formData.phone}) within 15 minutes.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-teal-100/40">
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-wider mb-2">
                      In severe pain? Don't wait for our call!
                    </p>
                    <a 
                      href="tel:+919236737372" 
                      className="inline-block bg-primary hover:bg-primary/95 text-white font-black py-2.5 px-6 rounded-full text-xs transition-all shadow-md"
                    >
                      Call Helpline Immediately
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
