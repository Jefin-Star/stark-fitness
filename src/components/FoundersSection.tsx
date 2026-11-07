import React from 'react';
import { 
  Crown, 
  CheckCircle2, 
  MessageSquare, 
  Dumbbell, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { GYM_CONTACT, FOUNDERS_DATA } from '../data/gymData';

interface FoundersSectionProps {
  onSelectPT?: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onSelectPT }) => {
  const biju = FOUNDERS_DATA[0];

  const qualifications = [
    'Two time Kannur University title winner (1996 97 and 1997 98)',
    'Mr. Kerala silver medalist (1995 96)',
    'Mr. Kasaragod Junior title holder (1996 97)',
    'Two time Kannur University powerlifting champion',
    '26 years experience in fitness training',
    '15 years international experience in Dubai',
    'NSDC certified',
    'BCLS CPR certified',
  ];

  return (
    <section id="founders" className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Blue Glowing Border Wrapper */}
        <div className="relative p-[2.5px] rounded-3xl overflow-hidden group shadow-2xl">
          
          {/* Blue glowing, moving light border effect */}
          <div 
            className="absolute inset-[-150%] animate-glow-border pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 240deg, #0284c7 280deg, #00d2ff 325deg, #38bdf8 345deg, #00d2ff 360deg)',
            }}
          />
          
          {/* Ambient cyan glow backdrop */}
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/15 blur-xl group-hover:bg-cyan-500/25 transition-all duration-500 pointer-events-none animate-pulse-glow" />

          {/* Inner Dark Card */}
          <div className="relative rounded-[22px] bg-[#0c1220] p-6 sm:p-10 text-center z-10 border border-slate-800/90 backdrop-blur-md">
            
            {/* 1. Pill shaped badge above the photo */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-950/80 border border-cyan-400/60 shadow-lg shadow-cyan-500/20 text-xs sm:text-sm font-extrabold tracking-widest text-cyan-300 uppercase mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>MASTER COACH & HEAD OF FITNESS</span>
            </div>

            {/* 2. Framed Photo of Biju Kuruvat */}
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/20 mb-6">
              <img
                src={biju.image}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/1d3febd4-e23c-4804-a912-69d831f6a2a7_eb19a2e8.jpg';
                }}
                alt="BIJU KURUVAT - Founder & Coach"
                className="w-full h-auto max-h-[500px] object-cover object-top filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3. Card below photo: Crown Icon, Name 'BIJU KURUVAT', Title 'FOUNDER & COACH' */}
            <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl bg-[#070b14]/90 border border-slate-800 flex items-center justify-center gap-3.5 mb-8 shadow-inner">
              <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 fill-amber-400/20 shrink-0" />
              <div className="text-left">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wider uppercase leading-none">
                  BIJU KURUVAT
                </h3>
                <p className="text-xs sm:text-sm font-extrabold text-cyan-400 tracking-widest uppercase mt-1">
                  FOUNDER & COACH
                </p>
              </div>
            </div>

            {/* 4. Section titled 'VERIFIED CREDENTIALS & CERTIFICATIONS' */}
            <div className="pt-6 border-t border-slate-800/80 text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-6">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <h4 className="font-display font-extrabold text-base sm:text-lg text-white uppercase tracking-wider text-center sm:text-left">
                  VERIFIED CREDENTIALS & CERTIFICATIONS
                </h4>
              </div>

              {/* Grid of Qualifications with Checkmark Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {qualifications.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/80 flex items-start gap-3 hover:border-cyan-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Buttons: 'CHAT WITH COACH' and '1 ON 1 PT DETAILS' */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=${encodeURIComponent(
                  'Hello Coach Biju Kuruvat, I would like to connect with you regarding fitness training at STARK FITNESS.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 shadow-lg shadow-cyan-500/25 active:scale-98 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-black text-black" />
                <span>CHAT WITH COACH</span>
              </a>

              <button
                type="button"
                onClick={onSelectPT}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-400/50 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 active:scale-98 transition-all cursor-pointer"
              >
                <Dumbbell className="w-4 h-4 text-cyan-400" />
                <span>1 ON 1 PT DETAILS</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
