import React from 'react';
import { MessageSquare, Mail, Instagram, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={GYM_CONTACT.logoSrc}
                alt="STARK FITNESS Logo"
                className="w-12 h-12 rounded-full object-cover border border-cyan-400/50 shadow-md shadow-cyan-500/10"
              />
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider uppercase block">
                  STARK <span className="text-cyan-400">FITNESS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 block -mt-0.5">
                  Nileshwar Gym & Fitness
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Build your strength. Transform your life. Nileshwar’s premier strength and fitness destination with dedicated batches, Olympic weight systems, and certified coaching.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/80 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/80 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${GYM_CONTACT.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Our Gym</a>
              </li>
              <li>
                <a href="#founders" className="hover:text-cyan-400 transition-colors">Meet the Founders</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-cyan-400 transition-colors">Certified Trainers</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-cyan-400 transition-colors">Membership Plans</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-cyan-400 transition-colors">Batch Timings</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-cyan-400 transition-colors">Facilities & Equipment</a>
              </li>
              <li>
                <a href="#register" className="hover:text-cyan-400 transition-colors">Online Registration</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Membership Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Packages
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#plans" className="hover:text-cyan-400 transition-colors">Standard Memberships</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-cyan-400 transition-colors">Student Package (₹1700 / ₹2800)</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-cyan-400 transition-colors">Couple Package (from ₹3400)</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-cyan-400 transition-colors">Personal Training (₹5000/mo)</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-cyan-400 transition-colors">Monthly Renewals (from ₹800)</a>
              </li>
            </ul>
          </div>

          {/* Training Timings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Shift Timings
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-300 font-semibold">Morning Shift</p>
                <p className="text-slate-400">5:00 AM – 9:00 AM (Ladies & Gents)</p>
              </div>
              <div className="p-2 rounded bg-cyan-950/30 border border-cyan-800/40">
                <p className="text-cyan-300 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Ladies Exclusive
                </p>
                <p className="text-slate-300 text-[11px]">10:00 AM – 1:00 PM (Ladies Only)</p>
              </div>
              <div>
                <p className="text-slate-300 font-semibold">Evening Shift</p>
                <p className="text-slate-400">4:00 PM – 9:00 PM (Ladies & Gents)</p>
              </div>
              <div className="text-[11px] text-red-400 font-medium">
                Sunday: Closed for recovery
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} STARK FITNESS. All Rights Reserved. Nileshwar, Kasaragod.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Built for champions</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
