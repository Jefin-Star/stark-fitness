import React from 'react';
import { ArrowRight, Dumbbell, ShieldCheck, Clock, Users } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#070b12]">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_CONTACT.heroImage}
          alt="STARK FITNESS High Performance Gym Floor"
          className="w-full h-full object-cover object-center filter brightness-65 scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend smoothly into top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/60 to-[#070b12]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/90 via-[#070b12]/40 to-transparent" />
        {/* Subtle cyan ambient glow element */}
        <div className="absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Unboxed Location & Trust Tag (No pill enclosure) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
            <span>Nileshwar, Kasaragod</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Premier Strength & Fitness Center</span>
          </div>

          {/* Gym Name & Tagline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase text-balance leading-[1.05] mb-5">
            STARK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white">FITNESS</span>
          </h1>

          <p className="font-display font-bold text-2xl sm:text-3xl text-slate-200 tracking-wide uppercase mb-6 text-balance">
            Build Your Strength. <span className="text-cyan-400">Transform Your Life.</span>
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
            Welcome to Nileshwar’s premier gym destination. Whether your focus is progressive strength training, fat loss, or athletic conditioning, our professional equipment and certified trainers provide the standard you need to excel.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onJoinClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-lg shadow-lg shadow-cyan-500/25 active:scale-98 transition-all cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewPlansClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 rounded-lg backdrop-blur-sm transition-all cursor-pointer"
            >
              <span>View Membership Plans</span>
            </button>
          </div>

          {/* Schedule Highlights on Hero */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>5 AM – 9 AM & 4 PM – 9 PM (Ladies & Gents)</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
            <div className="flex items-center gap-2 text-cyan-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>10 AM – 1 PM Ladies Only Batch</span>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Item Proof & Feature Strip Below Hero */}
      <div className="relative z-10 border-t border-slate-800 bg-[#0a0f1d]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
            
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                <Dumbbell className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Olympic Grade</p>
                <p className="text-sm font-bold text-white">Free Weights & Racks</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Dedicated Batch</p>
                <p className="text-sm font-bold text-white">Ladies Only 10am-1pm</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">1-on-1 Guidance</p>
                <p className="text-sm font-bold text-white">Personal Training</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Starting From</p>
                <p className="text-sm font-bold text-cyan-400">₹800 Renewal / Month</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
