import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Founders', href: '#founders' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Plans & Pricing', href: '#plans' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070b12]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav links) — Zone 3 (Primary action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <img
              src={GYM_CONTACT.logoSrc}
              alt="STARK FITNESS Emblem"
              className="w-11 h-11 rounded-full object-cover border border-cyan-400/40 shadow-sm shadow-cyan-500/20 group-hover:border-cyan-400 transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors uppercase">
                STARK <span className="text-cyan-400">FITNESS</span>
              </span>
              <span className="text-[10px] uppercase font-medium tracking-widest text-slate-400 -mt-0.5">
                Nileshwar Gym & Fitness
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + quick WhatsApp contact */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=Hi%20STARK%20FITNESS,%20I%20would%20like%20to%20inquire%20about%20gym%20memberships`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/40 transition-colors whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>{GYM_CONTACT.phoneRaw}</span>
            </a>

            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-md shadow-cyan-500/20 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Join Now
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-medium text-slate-200 bg-slate-800/80 border border-slate-700 rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>WhatsApp: +91 {GYM_CONTACT.phoneRaw}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full py-3 px-4 text-xs font-bold tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 to-sky-400 rounded-lg shadow-md cursor-pointer"
            >
              Register For Membership
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
