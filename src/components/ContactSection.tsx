import React from 'react';
import { 
  MessageSquare, 
  Mail, 
  Instagram, 
  MapPin, 
  PhoneCall, 
  Clock, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { GYM_CONTACT, GYM_SCHEDULES } from '../data/gymData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Location & Direct Access</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            Visit & Contact <span className="text-cyan-400">STARK FITNESS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Conveniently located in Nileshwar. Reach out directly via WhatsApp, call our staff, or come down for a personalized walk-through of the facilities.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels + Live Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Action Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=Hi%20STARK%20FITNESS,%20I%20would%20like%20to%20learn%20more%20about%20gym%20admissions`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-cyan-400/80 transition-all flex items-start justify-between shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    WhatsApp Chat (Instant Response)
                  </span>
                  <span className="font-display font-extrabold text-xl text-white group-hover:text-cyan-400 transition-colors">
                    +91 {GYM_CONTACT.phoneRaw}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct chat with head coach & front desk
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GYM_CONTACT.email}?subject=Gym%20Inquiry%20-%20STARK%20FITNESS`}
              className="group p-6 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-cyan-400/80 transition-all flex items-start justify-between shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Official Email Address
                  </span>
                  <span className="font-display font-medium text-base text-white group-hover:text-cyan-400 transition-colors break-all">
                    {GYM_CONTACT.email}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    For corporate, institutional & general inquiries
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
            </a>

            {/* Instagram Card */}
            <a
              href={GYM_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-pink-500/60 transition-all flex items-start justify-between shadow-lg hover:shadow-pink-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-950/50 border border-pink-800/50 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Follow on Instagram
                  </span>
                  <span className="font-display font-bold text-lg text-white group-hover:text-pink-400 transition-colors">
                    {GYM_CONTACT.instagramHandle}
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Workout clips, member PRs & daily motivation
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 shrink-0" />
            </a>

            {/* Address & Timings Summary */}
            <div className="p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800">
              <div className="flex items-start gap-3.5 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    STARK GYM & FITNESS NILESHWAR
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Nileshwar, Kasaragod District, Kerala 671314
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Mon - Sat: 5am–9am, 10am–1pm (Ladies), 4pm–9pm</span>
                </span>
                <span className="text-red-400 font-medium">Sunday Closed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map with Professional Styling */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[460px] rounded-2xl overflow-hidden border border-slate-800 bg-[#0c1220] shadow-2xl relative flex flex-col">
              
              {/* Map Title Bar */}
              <div className="px-5 py-3.5 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Live Location: STARK GYM & FITNESS Nileshwar
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?cid=8708170845347918216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* The Provided Iframe Embed */}
              <div className="flex-1 w-full h-full min-h-[400px]">
                <iframe
                  src={GYM_CONTACT.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="STARK GYM & FITNESS Location Map"
                  className="w-full h-full filter contrast-105"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
