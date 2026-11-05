import React from 'react';
import { Check, Target, HeartHandshake, Dumbbell, Award, Sparkles } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#090e18] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>About STARK FITNESS</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Our Philosophy</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-6 leading-tight">
            Where Discipline Meets <span className="text-cyan-400">Real Transformation</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded with a commitment to pure athletic excellence in Nileshwar, STARK FITNESS provides an uncompromising training ground for beginners, fitness enthusiasts, and dedicated strength athletes alike. We believe that true fitness is built on consistent effort, proper biomechanics, and a supportive environment.
          </p>
        </div>

        {/* Content Split: Imagery + Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase with Official Crest */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={GYM_CONTACT.coachingImage}
                alt="Personal training session at STARK FITNESS"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge with Official Logo */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 p-4 rounded-xl bg-[#070b12]/90 border border-slate-700 backdrop-blur-md">
                <img
                  src={GYM_CONTACT.logoSrc}
                  alt="STARK GYM Emblem"
                  className="w-14 h-14 rounded-full object-cover border border-cyan-400 shrink-0"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-base uppercase">STARK GYM & FITNESS</h4>
                  <p className="text-xs text-slate-400">Official Nileshwar Center · Certified Coaches</p>
                </div>
              </div>
            </div>

            {/* Equipment Preview Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 relative group h-44">
                <img
                  src={GYM_CONTACT.equipmentImage}
                  alt="Heavy duty free weights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">Olympic Racks & Weights</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f172a]/90 p-5 flex flex-col justify-between">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <div>
                  <span className="font-display font-extrabold text-2xl text-white block">100%</span>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Safe & Motivating Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Facilities */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-xl border border-slate-800 bg-[#0f172a]/60 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-1">
                  <Dumbbell className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-2">
                    Commercial-Grade Strength Equipment
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Featuring professional Olympic barbells, calibrated weight plates, heavy-duty power racks, and precision cable stations built for biomechanically sound muscle growth and strength progression.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0f172a]/60 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-1">
                  <HeartHandshake className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-2">
                    Dedicated Ladies-Only Batch (10 AM – 1 PM)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We maintain an exclusive, private training window exclusively for women, offering complete privacy, comfortable coaching, and dedicated guidance for every female member.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0f172a]/60 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-1">
                  <Target className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-2">
                    Personal Training & Nutrition Advice
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Certified trainers provide personalized 1-on-1 coaching, dietary frameworks, and exercise form corrections tailored to fat loss, muscle gain, and injury rehabilitation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-800 bg-[#0f172a]/60 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-1">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-2">
                    Transparent, Student & Couple Friendly Rates
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Clear pricing with no surprise charges. Affordable student packages, value-packed couple bundles, and simple monthly renewals starting from just ₹800.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
