/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { BestDentistSEO } from "./components/BestDentistSEO";
import { Reviews } from "./components/Reviews";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <BestDentistSEO />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}
