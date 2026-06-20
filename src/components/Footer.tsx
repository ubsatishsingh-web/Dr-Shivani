import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/90 backdrop-blur-md text-white pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.45 1.5 4.5 3.65 5.5A7 7 0 1 0 12 2z"/><path d="M8 14.5V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5"/></svg>
              </div>
              <span className="font-sans text-2xl font-extrabold tracking-tight">SHMIK 24x7 Dental</span>
            </div>
            <p className="text-white/70 leading-relaxed font-medium">
              Providing premium quality dental treatment with professional care and most advanced treatment modalities in Vrindavan Colony, Lucknow. Call us for midnight emergency pain relief.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://share.google/Do7sPHr7lTaZTgL8c" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">24/7 Emergency Care</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Painless RCT & Re-RCT</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Zirconia Crowns & Capping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Teeth Filling & Restoration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Braces & Aligners</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cosmetic Dental Jewelry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Patient Inquiries</h4>
            <p className="text-white/70 mb-6">Enter your email and we'll send you professional care guidelines.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-primary font-bold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-sm">
          <p>© 2026 SHMIK 24x7 DENTAL CLINIC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> for healthy smiles
          </p>
        </div>
      </div>
    </footer>
  );
}
