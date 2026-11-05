import React from 'react';
import { MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=Hi%20STARK%20FITNESS,%20I'd%20like%20to%20inquire%20about%20gym%20admissions`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-black text-black" />
        <span className="hidden sm:inline">Chat with Us</span>
      </a>
    </aside>
  );
};
