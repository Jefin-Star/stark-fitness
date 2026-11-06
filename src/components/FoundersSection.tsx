import React from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  Clock, 
  Globe2, 
  Quote, 
  MessageSquare
} from 'lucide-react';
import { FOUNDERS_DATA, GYM_CONTACT } from '../data/gymData';

export const FoundersSection: React.FC = () => {
  const biju = FOUNDERS_DATA[0];

  return (
    <section id="founders" className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Background radial cyan glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Leadership & Vision</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>The Power Behind STARK FITNESS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            Meet the <span className="text-cyan-400">Founder & Coach</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The master strength coach behind STARK FITNESS. Combining 26 years of championship bodybuilding, powerlifting titles, and 15 years of international coaching in Dubai to bring world-class training standards to Nileshwar.
          </p>
        </div>

        {/* Centered Dark Card with Blue Glowing Moving Light Border Effect */}
        <div className="max-w-3xl mx-auto">
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
            <div className="relative rounded-[22px] bg-[#0c1220] p-7 sm:p-10 h-full flex flex-col justify-between z-10 border border-slate-800/90 backdrop-blur-md">
              <div>
                
                {/* Header: Photo + Core Identity */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-800/90 mb-6">
                  {/* Portrait */}
                  <div className="relative shrink-0">
                    <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-xl shadow-cyan-500/20 group-hover:border-cyan-400 transition-colors">
                      <img
                        src={biju.image}
                        alt={biju.name}
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Trophy Badge */}
                    <div className="absolute -bottom-2.5 -right-2.5 bg-gradient-to-r from-cyan-500 to-sky-400 text-black p-2 rounded-xl shadow-lg">
                      <Trophy className="w-4 h-4 fill-black" />
                    </div>
                  </div>

                  {/* Title & Experience */}
                  <div className="text-center sm:text-left flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-2">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{biju.role}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-wide uppercase mb-1">
                      {biju.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                      {biju.titleBadge}
                    </p>

                    {/* Key Experience Stats */}
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-bold text-white">26 Years Training Experience</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Globe2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-slate-200">15 Years in Dubai (International Fitness)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Championship Titles & Credentials */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Medal className="w-4 h-4 text-amber-400" />
                    <span>Championship Titles & Honors</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {biju.credentials.map((title, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-xl bg-[#070b14] border border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Certifications */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Accreditations & Certifications</span>
                  </h4>
                  <div className="space-y-2.5">
                    {biju.certifications.map((cert, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-[#070b14]/70 border border-slate-800/60"
                      >
                        <HeartPulse className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-semibold text-white">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="p-4 sm:p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 relative mb-6">
                  <Quote className="w-5 h-5 text-cyan-400/40 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed pr-6">
                    "{biju.quote}"
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Head Coach & Founder · STARK FITNESS Nileshwar
                </div>
                <a
                  href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=${encodeURIComponent(
                    'Hello Coach Biju Kuruvat, I would like to inquire about training programs and personal coaching at STARK FITNESS.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Connect with Coach Biju</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
