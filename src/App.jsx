import React, { useState } from 'react';
import {
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  User,
  Sparkles,
  ExternalLink,
  X,
  Menu,
  HeartPulse,
  Activity,
  CreditCard,
  Building2,
  Maximize2,
  AlertCircle,
  PhoneCall,
  Zap,
  Radio
} from 'lucide-react';

// Custom SVG WhatsApp Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  // Booking Form State
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    doctor: 'Dr. Prasad Babu',
    service: 'Dental Implantation',
    date: '',
    timeSlot: '10:00 AM - 11:00 AM',
    notes: ''
  });

  // Gallery Photos from Clinic Data
  const galleryPhotos = [
    {
      id: 1,
      url: "https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-4i9ibs4.jpg",
      category: "Exterior View",
      title: "Clinic Entrance & Signage",
      alt: "Durga Prasad Dental Hospital entrance with illuminated signage at Leela Mahal Junction, Tirupati."
    },
    {
      id: 2,
      url: "https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-11sjan.jpg",
      category: "Reception & Lounge",
      title: "Executive Waiting Lounge",
      alt: "Comfortable air-conditioned patient waiting area with magazines and relaxing ambiance."
    },
    {
      id: 3,
      url: "https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-elntip.jpg",
      category: "Treatment Suite",
      title: "Active Examination Suite",
      alt: "Expert dental examination in progress with modern clinical tools and sterilized hygiene."
    },
    {
      id: 4,
      url: "https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-1xuxhy4.jpg",
      category: "Equipment",
      title: "Ergonomic Dental Chair",
      alt: "State-of-the-art dental chair with overhead LED surgical lamp and precision attachments."
    },
    {
      id: 5,
      url: "https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-3w3xc17.jpg",
      category: "Consultation",
      title: "Precision Dental Procedure",
      alt: "Dentist performing precision dental treatment under bright shadowless medical lighting."
    },
    {
      id: 6,
      url: "https://images.jdmagicbox.com/v2/tirupati/21/9999pmulhydstd1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-8mln.jpg",
      category: "Sterilization Bay",
      title: "Modern Clinical Facility",
      alt: "Clean hospital floor layout with rigorous sanitization and advanced oral care technology."
    }
  ];

  // Services Catalog
  const services = [
    {
      title: "Doctors For Dental Implantation",
      desc: "Permanent, natural-looking tooth replacement solution using titanium precision implants for full chewing restoration and aesthetic perfection.",
      tag: "Specialist Care",
      icon: Activity,
      image: "/images/dental-implant.png"
    },
    {
      title: "Cosmetic Dentistry & Smile Design",
      desc: "Transform your smile with veneers, tooth-colored bonding, gum contouring, and advanced smile correction procedures.",
      tag: "Popular",
      icon: Sparkles,
      image: "/images/cosmetic-dentistry.jpg"
    },
    {
      title: "Dental Surgery & Extractions",
      desc: "Painless surgical extractions, wisdom tooth removal, bone grafting, and sinus lift procedures conducted by senior surgeons.",
      tag: "Surgical",
      icon: HeartPulse,
      image: "/images/dental-surgery.jpg"
    },
    {
      title: "Dental Crown & Bridge Restoration",
      desc: "High-grade zirconia, ceramic, and metal-fused crowns built for maximum durability, biocompatibility, and natural tooth shade match.",
      tag: "Restorative",
      icon: ShieldCheck,
      image: "/images/dental-crowns.jpg"
    },
    {
      title: "Root Canal Therapy (Endodontics)",
      desc: "Microscopic root canal treatment designed to save infected teeth quickly with single-visit painless technology.",
      tag: "Pain-Free",
      icon: Stethoscope,
      image: "/images/root-canal.jpg"
    },
    {
      title: "General & Family Dentistry",
      desc: "Comprehensive dental checkups, scaling, polishing, cavities filling, fluoride treatment, and pediatric dental care.",
      tag: "Essential",
      icon: User,
      image: "/images/family-dentistry.jpg"
    }
  ];

  // Doctors
  const doctors = [
    {
      name: "Dr. Prasad Babu",
      role: "Chief Dental Surgeon & Implantologist",
      exp: "24+ Years Clinical Experience",
      specialties: ["Dental Implantation", "Full Mouth Rehabilitation", "Oral Surgery"],
      desc: "Renowned dental surgeon in Tirupati with extensive expertise in dental implantology, bone augmentation, and complex oral surgeries since 2002."
    },
    {
      name: "Dr. Sujani K",
      role: "Senior Dental Surgeon & Cosmetic Dentist",
      exp: "15+ Years Clinical Experience",
      specialties: ["Cosmetic Dentistry", "Root Canal Therapy", "Pediatric Dental Care"],
      desc: "Specialist in aesthetic tooth restorations, painless root canal procedures, and preventive family oral healthcare."
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "Where is Durga Prasad Dental Hospital & Implant Centre located in Tirupati?",
      a: "The clinic is conveniently located in Korlagunta, Near Leela Mahal Junction, Beside Sarayus Super Market, Tirupati, Andhra Pradesh 517501."
    },
    {
      q: "What are the clinic operating hours?",
      a: "We are open Monday to Saturday from 9:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 2:00 PM."
    },
    {
      q: "How can I book an urgent appointment or contact the doctor?",
      a: "You can call our direct helpline at +91 9440214460 or WhatsApp us directly using the floating WhatsApp button on this site."
    },
    {
      q: "What payment options are accepted at the hospital?",
      a: "We accept Cash, Visa / Master Card / Rupay, American Express, and Cheque / Demand Draft."
    },
    {
      q: "Are dental implant consultations available for seniors?",
      a: "Yes, Dr. Prasad Babu provides specialized implant consultations tailored for senior citizens, including full arch replacement and bone density evaluations."
    }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
      setBookingData({
        name: '',
        phone: '',
        doctor: 'Dr. Prasad Babu',
        service: 'Dental Implantation',
        date: '',
        timeSlot: '10:00 AM - 11:00 AM',
        notes: ''
      });
    }, 3000);
  };

  const whatsappUrl = "https://api.whatsapp.com/send?phone=919440214460&text=Hello%20Durga%20Prasad%20Dental%20Hospital,%20I%20would%20like%20to%20enquire%20about%20dental%20treatments.";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans holo-grid-bg">
      
      {/* Top Holographic Banner Contact Line */}
      <div className="bg-slate-950/90 border-b border-teal-500/30 text-xs sm:text-sm py-2.5 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-teal-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>Mon-Sat: 9:00 AM - 9:00 PM | Sun: 9:00 AM - 2:00 PM</span>
            </span>
            <span className="hidden md:flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Korlagunta, Near Leela Mahal Junction, Tirupati</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/40"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
            <a 
              href="tel:9440214460" 
              className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-semibold transition-colors bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/40"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 9440214460</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Holographic Navbar */}
      <header className="sticky top-0 z-40 holo-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 via-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-teal-400" />
              </div>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl holo-text tracking-tight block leading-none">
                DURGA PRASAD
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-400 font-semibold tracking-wider uppercase block mt-1">
                Dental Hospital & Implant Centre
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-teal-300 transition-colors">About Us</a>
            <a href="#services" className="hover:text-teal-300 transition-colors">Specialities</a>
            <a href="#gallery" className="hover:text-teal-300 transition-colors">Clinic Gallery</a>
            <a href="#doctors" className="hover:text-teal-300 transition-colors">Specialists</a>
            <a href="#location" className="hover:text-teal-300 transition-colors">Location & Hours</a>
            <a href="#faqs" className="hover:text-teal-300 transition-colors">FAQs</a>
          </nav>

          {/* Quick Contact & Booking Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-400 hover:text-emerald-300 transition-all shadow-md flex items-center gap-2 text-xs font-bold"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:9440214460"
              className="p-2.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 text-cyan-300 hover:text-white transition-all shadow-md flex items-center gap-2 text-xs font-bold"
              title="Call Hospital"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="holo-btn text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-teal-500/40 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-teal-500/30 px-4 py-6 space-y-4">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-teal-300 font-medium"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-teal-300 font-medium"
            >
              Specialities
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-teal-300 font-medium"
            >
              Clinic Gallery
            </a>
            <a 
              href="#doctors" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-teal-300 font-medium"
            >
              Specialists
            </a>
            <a 
              href="#location" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-teal-300 font-medium"
            >
              Location & Hours
            </a>
            <a 
              href="#faqs" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-200 hover:text-teal-300 font-medium"
            >
              FAQs
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-950 border border-emerald-500/60 text-emerald-300 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us Direct</span>
              </a>
              <a
                href="tel:9440214460"
                className="w-full bg-cyan-950 border border-cyan-500/60 text-cyan-300 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call +91 9440214460</span>
              </a>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full holo-btn text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Direct Full Screen Background Video (No Overlays) */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
        {/* Full Screen Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/DURGA1.mp4" type="video/mp4" />
        </video>

        {/* Hero Content (Positioned Directly over Video) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-teal-400/60 text-teal-300 text-xs sm:text-sm font-semibold shadow-2xl">
              <Award className="w-4 h-4 text-teal-400" />
              <span>Serving Tirupati Since 2002 | 24+ Years Excellence</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              World-Class Dental Care & <span className="holo-text">Implantology</span> in Tirupati
            </h1>

            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Experience painless dental procedures, precision dental implantation, and aesthetic smile rehabilitation at Durga Prasad Dental Hospital. Dedicated to patient comfort and oral health.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto holo-btn text-white font-extrabold px-8 py-4 rounded-xl shadow-2xl transition-all flex items-center justify-center gap-3 text-base active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
                <ChevronRight className="w-5 h-5 text-teal-200" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-emerald-400/70 bg-slate-950/90 hover:bg-emerald-950/80 text-emerald-300 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3 text-base backdrop-blur-md shadow-2xl"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Us Direct</span>
              </a>

              <a
                href="tel:9440214460"
                className="w-full sm:w-auto border border-cyan-400/60 bg-slate-950/85 hover:bg-slate-900 text-cyan-200 font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-3 text-base backdrop-blur-md shadow-2xl"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Key Trust Stats Badge */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-slate-700/60 max-w-xl">
              <div className="holo-card p-3.5 rounded-xl border border-teal-500/40 shadow-xl">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">2002</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Established Year</div>
              </div>
              <div className="holo-card p-3.5 rounded-xl border border-teal-500/40 shadow-xl">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-teal-300">3.8 ★</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">63+ Verified Reviews</div>
              </div>
              <div className="holo-card p-3.5 rounded-xl border border-teal-500/40 shadow-xl">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Sterile & Pain-Free</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/50 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-teal-400" />
                <span>About Durga Prasad Dental Hospital</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dedicated Dental Healthcare for <span className="holo-text">Patients of All Ages</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Located conveniently in Korlagunta, Tirupati, Durga Prasad Dental Hospital & Implant Centre has been providing compassionate, state-of-the-art dental care since 2002.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our clinic is equipped with modern ergonomic dental units, digital radiography, autoclaves for 100% instrument sterilization, and dedicated surgical spaces for dental implantation. We strive to create a relaxing, welcoming atmosphere so every dental visit is stress-free and comfortable.
              </p>

              {/* Highlights List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl holo-card">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Prime Location</h4>
                    <p className="text-xs text-slate-400">Near Leela Mahal Junction & Sarayus Super Market</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl holo-card">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Transparent Pricing</h4>
                    <p className="text-xs text-slate-400">Tailored treatment packages for all budgets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl holo-card">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Sterile Protocol</h4>
                    <p className="text-xs text-slate-400">Strict hospital-grade hygiene guidelines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl holo-card">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Multiple Payment Options</h4>
                    <p className="text-xs text-slate-400">Cards, Amex, UPI & Cash accepted</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="holo-card rounded-2xl p-1">
                  <img 
                    src="https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-11sjan.jpg" 
                    alt="Waiting lounge" 
                    className="rounded-xl object-cover h-64 w-full shadow-lg"
                  />
                </div>
                <div className="holo-card rounded-2xl p-1 mt-8">
                  <img 
                    src="https://images.jdmagicbox.com/comp/tirupati/21/9999PMULHYDSTD1321/catalogue/durga-prasad-dental-hospital-implant-centre-tirupati-ho-tirupati-dentists-1xuxhy4.jpg" 
                    alt="Dental chair equipment" 
                    className="rounded-xl object-cover h-64 w-full shadow-lg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specializations & Services Section */}
      <section id="services" className="py-24 bg-slate-950/80 border-y border-teal-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/50 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
              <span>Our Specialities & Offerings</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Dental & <span className="holo-text">Implant Services</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Providing complete oral care from diagnostic checks to full dental implantation under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="holo-card rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  {/* Service Image */}
                  <div className="relative w-full h-52 overflow-hidden border-b border-teal-500/30">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <span className="absolute top-3 right-3 text-xs font-bold text-teal-300 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-teal-500/50 shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-500/50 flex items-center justify-center text-teal-400 flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed flex-1">{item.desc}</p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setBookingData(prev => ({ ...prev, service: item.title }));
                          setIsBookingOpen(true);
                        }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white group"
                      >
                        <span>Schedule Treatment</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-teal-400" />
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center gap-1 text-xs"
                        title="Inquire via WhatsApp"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLOATING RIGHT-TO-LEFT GALLERY SECTION (AFTER SPECIALITIES) */}
      <section id="gallery" className="py-24 bg-slate-950/90 border-b border-teal-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/50 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>Interactive Clinic Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Floating <span className="holo-text">Dental Gallery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Take a visual tour of our modern dental hospital, waiting lounge, and advanced clinical equipment. Hover to pause or click any photo to inspect.
          </p>
        </div>

        {/* Marquee Wrapper Moving Right to Left */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Gradient Edge Blurs */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track (Repeated images for continuous seamless right-to-left loop) */}
          <div className="animate-marquee-left flex gap-6 sm:gap-8 px-4">
            {[...galleryPhotos, ...galleryPhotos, ...galleryPhotos].map((photo, index) => (
              <div 
                key={`${photo.id}-${index}`}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative cursor-pointer flex-shrink-0 min-w-[340px] sm:min-w-[460px] md:min-w-[500px] h-[280px] sm:h-[340px] md:h-[360px] rounded-2xl overflow-hidden holo-card transition-all duration-300"
              >
                {/* High Resolution Image */}
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating Content Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold bg-slate-950/90 text-teal-300 px-3 py-1 rounded-full border border-teal-500/50">
                      {photo.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-normal">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Photo Viewer Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-teal-500/40 shadow-2xl">
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2">
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.alt}
                className="w-full max-h-[70vh] object-contain rounded-2xl bg-black/50"
              />
            </div>
            <div className="p-6 bg-slate-900 border-t border-teal-500/30">
              <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                {selectedPhoto.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{selectedPhoto.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{selectedPhoto.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Doctors Section */}
      <section id="doctors" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/50 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <User className="w-3.5 h-3.5 text-teal-400" />
              <span>Esteemed Medical Panel</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet Our Senior <span className="holo-text">Dental Specialists</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Dedicated professionals committed to delivering gentle care and clinical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doc, idx) => (
              <div 
                key={idx} 
                className="holo-card rounded-3xl p-8 border border-teal-500/30 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-teal-500/30">
                      <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        {doc.name.replace('Dr. ', '').substring(0, 2)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{doc.name}</h3>
                      <p className="text-sm text-teal-300 font-semibold">{doc.role}</p>
                      <span className="inline-block mt-1 text-xs text-slate-300 bg-slate-900/90 px-2.5 py-0.5 rounded border border-teal-500/30">
                        {doc.exp}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{doc.desc}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs text-slate-400 font-medium block">Key Focus Areas:</span>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialties.map((sp, i) => (
                        <span key={i} className="text-xs bg-teal-950/90 text-teal-300 px-2.5 py-1 rounded-md border border-teal-500/40">
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-teal-500/20 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setBookingData(prev => ({ ...prev, doctor: doc.name }));
                      setIsBookingOpen(true);
                    }}
                    className="w-full holo-btn text-white font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with {doc.name}</span>
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-semibold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Consultation Query</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-24 bg-slate-950/80 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Address & Hours details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/50 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Visit Us in Tirupati</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Location & <span className="holo-text">Working Hours</span>
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl holo-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-500/50 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Hospital Address</h4>
                    <p className="text-sm text-slate-300 mt-1">
                      Korlagunta, Near Leela Mahal Junction, Beside Sarayus Super Market, Tirupati, Andhra Pradesh - 517501
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Durga+Prasad+Dental+Hospital+Korlagunta+Tirupati" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-300 font-semibold mt-2 hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl holo-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-500/50 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-base font-bold text-white mb-2">Weekly Schedule</h4>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between text-slate-300 border-b border-teal-500/20 pb-1">
                        <span>Monday - Saturday</span>
                        <span className="font-bold text-teal-300">9:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between text-slate-300 pt-1">
                        <span>Sunday</span>
                        <span className="font-bold text-teal-300">9:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl holo-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-500/50 flex items-center justify-center text-teal-400 flex-shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Accepted Payments</h4>
                    <p className="text-sm text-slate-300 mt-1">
                      Visa, Master Card, Rupay, American Express, Cash & Cheque / Demand Draft
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Direct Helpline Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="holo-card rounded-3xl p-6 border border-teal-500/40 relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    Geo Coordinates
                  </span>
                  <span className="text-xs text-slate-400">Lat: 13.640588 | Lng: 79.427941</span>
                </div>
                
                {/* Visual Map Mockup Card */}
                <div className="h-64 rounded-2xl bg-slate-950 relative border border-teal-500/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400 mb-3">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Durga Prasad Dental Hospital</h4>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">
                    Near Leela Mahal Junction, Beside Sarayus Super Market, Korlagunta, Tirupati
                  </p>
                  <a
                    href="https://maps.google.com/?q=13.640588,79.427941"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 holo-btn text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <span>Open Live GPS Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/60 flex items-center justify-between transition-all"
                  >
                    <div>
                      <div className="text-[10px] text-emerald-400 font-bold uppercase">Instant Chat</div>
                      <div className="text-sm font-bold text-white">WhatsApp Query</div>
                    </div>
                    <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                  </a>

                  <a
                    href="tel:9440214460"
                    className="p-3.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/60 flex items-center justify-between transition-all"
                  >
                    <div>
                      <div className="text-[10px] text-cyan-400 font-bold uppercase">Direct Phone</div>
                      <div className="text-sm font-bold text-white">+91 9440214460</div>
                    </div>
                    <PhoneCall className="w-5 h-5 text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-500/50 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-teal-400" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked <span className="holo-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="holo-card rounded-2xl p-6 border border-teal-500/30">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-3">
                  <span className="text-teal-400 font-mono text-sm mt-0.5">0{idx + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-300 mt-2 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-teal-500/30 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-purple-600 p-[1px]">
                  <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <span className="font-display font-bold text-white holo-text">DURGA PRASAD</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Durga Prasad Dental Hospital & Implant Centre in Korlagunta, Tirupati. Delivering exceptional dental implants, cosmetic dentistry, and dental surgery since 2002.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Quick Navigation</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#about" className="hover:text-teal-300">About Hospital</a></li>
                <li><a href="#services" className="hover:text-teal-300">Specialities</a></li>
                <li><a href="#gallery" className="hover:text-teal-300">Floating Gallery</a></li>
                <li><a href="#doctors" className="hover:text-teal-300">Doctors & Team</a></li>
                <li><a href="#location" className="hover:text-teal-300">Location & Directions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Operating Hours</h4>
              <p className="text-xs text-slate-400">Mon - Sat: 9:00 AM - 9:00 PM</p>
              <p className="text-xs text-slate-400 mt-1">Sunday: 9:00 AM - 2:00 PM</p>
              <p className="text-xs text-teal-300 font-semibold mt-3">Emergency Call: +91 9440214460</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Address</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Korlagunta, Near Leela Mahal Junction, Beside Sarayus Super Market, Tirupati, AP 517501
              </p>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© {new Date().getFullYear()} Durga Prasad Dental Hospital & Implant Centre. All rights reserved.</p>
            <p>Holographic Theme | Zero Emojis | Floating Gallery</p>
          </div>
        </div>
      </footer>

      {/* FIXED PERSISTENT FLOATING QUICK ACTION WIDGET (WHATSAPP & CALL) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Floating WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-slate-950/90 hover:bg-emerald-950 border border-emerald-400/80 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95 backdrop-blur-xl"
          title="Chat on WhatsApp"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg animate-pulse">
            <WhatsAppIcon className="w-5 h-5" />
          </div>
          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-[10px] text-emerald-400 font-extrabold tracking-wider uppercase leading-none">WhatsApp Us</span>
            <span className="text-xs font-bold text-white mt-0.5">+91 9440214460</span>
          </div>
        </a>

        {/* Floating Direct Call Button */}
        <a
          href="tel:9440214460"
          className="group relative flex items-center gap-3 bg-slate-950/90 hover:bg-cyan-950 border border-cyan-400/80 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all hover:scale-105 active:scale-95 backdrop-blur-xl"
          title="Call Hospital Now"
        >
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-[10px] text-cyan-300 font-extrabold tracking-wider uppercase leading-none">Emergency Call</span>
            <span className="text-xs font-bold text-white mt-0.5">Call Now</span>
          </div>
        </a>
      </div>

      {/* Appointment Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg holo-card rounded-3xl border border-teal-500/50 shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/40">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Schedule Appointment</h3>
                <p className="text-xs text-slate-400">Durga Prasad Dental Hospital, Tirupati</p>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500 text-teal-400 mx-auto flex items-center justify-center shadow-lg shadow-teal-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Appointment Reserved!</h4>
                <p className="text-sm text-slate-300">
                  Thank you, <span className="font-semibold text-teal-300">{bookingData.name}</span>. Your consultation request for <span className="font-semibold text-white">{bookingData.service}</span> with <span className="font-semibold text-white">{bookingData.doctor}</span> has been received. Our clinic team will reach out at {bookingData.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-teal-500/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-teal-500/40 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Select Doctor</label>
                    <select
                      value={bookingData.doctor}
                      onChange={(e) => setBookingData({ ...bookingData, doctor: e.target.value })}
                      className="w-full bg-slate-950 border border-teal-500/40 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Dr. Prasad Babu">Dr. Prasad Babu</option>
                      <option value="Dr. Sujani K">Dr. Sujani K</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
                    <select
                      value={bookingData.service}
                      onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-teal-500/40 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="Dental Implantation">Dental Implantation</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Dental Surgery">Dental Surgery</option>
                      <option value="Crowns & Bridges">Crowns & Bridges</option>
                      <option value="Root Canal">Root Canal</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date</label>
                    <input 
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full bg-slate-950 border border-teal-500/40 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Time Slot</label>
                    <select
                      value={bookingData.timeSlot}
                      onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                      className="w-full bg-slate-950 border border-teal-500/40 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400"
                    >
                      <option value="9:30 AM - 11:30 AM">Morning (9:30 AM - 11:30 AM)</option>
                      <option value="12:00 PM - 2:00 PM">Afternoon (12:00 PM - 2:00 PM)</option>
                      <option value="5:00 PM - 8:30 PM">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 holo-btn text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
