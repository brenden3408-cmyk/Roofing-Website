/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Star, 
  ShieldCheck, 
  Hammer, 
  CloudLightning, 
  Droplets, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Award,
  Users,
  Calendar
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-charcoal" size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tighter text-white`}>
            APEX ROOFING
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Gallery', 'Reviews'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:5551234567" 
            className="flex items-center gap-2 bg-gold text-charcoal px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            <Phone size={16} />
            (555) 123-4567
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Services', 'Process', 'Gallery', 'Reviews'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:5551234567" 
              className="flex items-center justify-center gap-2 bg-gold text-charcoal py-4 rounded-xl font-bold"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2071&auto=format&fit=crop" 
          alt="Beautiful modern roof at golden hour" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              Top Rated in the Tri-State Area
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
            Your Roof. <br />
            <span className="italic text-gold">Done Right.</span> <br />
            Guaranteed.
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Premium roofing solutions backed by a lifetime warranty. We handle everything from minor repairs to full storm restoration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gold text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 group">
              Get Your Free Inspection
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trust Badges Floating */}
      <div className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-12 flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
            <Award size={24} className="text-gold" />
            GAF Certified
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
            <ShieldCheck size={24} className="text-gold" />
            Licensed & Insured
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
            <Users size={24} className="text-gold" />
            BBB Accredited
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Roof Replacement",
      desc: "Full removal and installation using premium materials from GAF and Owens Corning.",
      icon: <Hammer className="text-gold" size={32} />,
      price: "Starting at $8,500"
    },
    {
      title: "Expert Repairs",
      desc: "Fixing leaks, missing shingles, and structural damage before they become disasters.",
      icon: <CheckCircle2 className="text-gold" size={32} />,
      price: "Starting at $299"
    },
    {
      title: "Storm Damage",
      desc: "Specialized in hail and wind claims. We work directly with your insurance provider.",
      icon: <CloudLightning className="text-gold" size={32} />,
      price: "$0 Out of Pocket*"
    },
    {
      title: "Gutters & Siding",
      desc: "Complete exterior protection with seamless gutters and durable siding options.",
      icon: <Droplets className="text-gold" size={32} />,
      price: "Starting at $1,200"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
              Comprehensive Roofing <br />& Exterior Solutions
            </h2>
          </div>
          <p className="text-charcoal/60 max-w-sm text-lg">
            We provide transparent pricing and expert craftsmanship for every project, no matter the size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-charcoal/5 bg-stone-50 hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{s.title}</h3>
              <p className="text-charcoal/60 mb-6 text-sm leading-relaxed">{s.desc}</p>
              <div className="pt-6 border-t border-charcoal/5">
                <span className="text-xs font-bold text-charcoal/40 uppercase tracking-widest block mb-1">Pricing</span>
                <span className="text-charcoal font-bold">{s.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Free Inspection",
      desc: "We perform a 50-point inspection of your roof, attic, and gutters using drone technology.",
      icon: "01"
    },
    {
      title: "Detailed Quote",
      desc: "Receive a transparent, line-itemed proposal with material options and financing plans.",
      icon: "02"
    },
    {
      title: "Expert Install",
      desc: "Most roofs are completed in just one day with a full site cleanup and final walkthrough.",
      icon: "03"
    }
  ];

  return (
    <section id="process" className="section-padding bg-charcoal text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">How it works</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">The Apex Standard</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-serif text-white/5 absolute -top-12 -left-4 group-hover:text-gold/10 transition-colors duration-500">
                {step.icon}
              </div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-gold"></span>
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
              <Calendar className="text-gold" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Ready to start?</h4>
              <p className="text-white/50">Schedule your inspection today.</p>
            </div>
          </div>
          <button className="bg-gold text-charcoal px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Book My Inspection
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Homeowner in Oak Ridge",
      text: "Apex made the insurance process so easy. After the hail storm, they handled everything with my adjuster. The new roof looks incredible!",
      img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop"
    },
    {
      name: "Mark Thompson",
      role: "Property Manager",
      text: "I've used them for 5 different properties now. Their cleanup is impeccable—you wouldn't even know they were there except for the beautiful roof.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Trusted by Your Neighbors</h2>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-gold text-gold" />)}
            <span className="ml-2 font-bold text-charcoal">4.9/5 (500+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto">
                <img src={r.img} alt="Roofing project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <p className="text-charcoal/70 italic mb-8 text-lg leading-relaxed">"{r.text}"</p>
                <div>
                  <h4 className="font-bold text-charcoal">{r.name}</h4>
                  <p className="text-sm text-charcoal/40 uppercase tracking-widest">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
              <ShieldCheck className="text-charcoal" size={18} />
            </div>
            <span className="text-xl font-bold tracking-tighter">APEX ROOFING</span>
          </div>
          <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
            Serving the community with integrity and excellence since 2008. Your home is our priority.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
              <Users size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
              <Star size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-sm">Services</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Residential Roofing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Commercial Roofing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Storm Restoration</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gutter Systems</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold" />
              (555) 123-4567
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck size={16} className="text-gold mt-1" />
              123 Skyline Drive<br />Summit, NJ 07901
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
        <p>© 2026 Apex Roofing & Exteriors. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-charcoal">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Sticky Call Bar for Mobile */}
        <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
          <a 
            href="tel:5551234567" 
            className="flex items-center justify-center gap-3 bg-gold text-charcoal py-4 rounded-2xl font-bold shadow-2xl active:scale-95 transition-transform"
          >
            <Phone size={20} />
            Get Free Inspection
          </a>
        </div>

        <Services />
        
        {/* Storm Damage Section */}
        <section className="section-padding bg-stone-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1974&auto=format&fit=crop" 
                  alt="Storm damage inspection" 
                  className="rounded-[3rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
                  <CloudLightning size={48} className="text-charcoal mb-4" />
                  <p className="text-charcoal font-bold text-xl">Storm Damage?<br />We Can Help.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Insurance Claims</span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
                Your Guide Through <br />Storm Restoration
              </h2>
              <p className="text-charcoal/60 text-lg mb-8 leading-relaxed">
                Filing an insurance claim can be overwhelming. Our specialists act as your advocate, meeting with adjusters and ensuring every bit of damage is documented and covered.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Free drone-assisted damage assessment",
                  "Direct billing to insurance companies",
                  "Assistance with claim documentation",
                  "Emergency tarping and mitigation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-charcoal font-medium">
                    <CheckCircle2 size={20} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-charcoal font-bold text-lg group">
                Learn about the claims process
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <Process />
        
        {/* Neighborhood Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-12">Proudly Serving Your Neighborhood</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["Summit", "Oak Ridge", "Maplewood", "Short Hills", "Chatham", "Madison"].map((city) => (
                <div key={city} className="px-6 py-3 rounded-full border border-charcoal/10 text-charcoal/60 font-medium hover:border-gold hover:text-gold transition-colors cursor-default">
                  {city}, NJ
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
