import React from 'react';
import { Dumbbell, ShieldCheck, HeartPulse, Activity, Waves, Users2, Sparkles, CheckCircle } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const Facilities: React.FC = () => {
  const highlights = [
    {
      icon: Dumbbell,
      title: "Heavy-Duty Free Weights & Olympic Barbells",
      desc: "Calibrated cast iron & bumper plates, precision barbells, power racks, and dumbell racks ranging from beginner to heavyweight.",
    },
    {
      icon: ShieldCheck,
      title: "Ladies-Exclusive Training Batch",
      desc: "Complete privacy every Monday through Saturday from 10:00 AM to 1:00 PM with customized female strength & conditioning support.",
    },
    {
      icon: HeartPulse,
      title: "Cardio & Stamina Conditioning",
      desc: "High-end treadmills, exercise cycles, and elliptical trainers to build cardiovascular endurance, heart health, and support fat burn.",
    },
    {
      icon: Activity,
      title: "Personalized Workout & Nutrition Plans",
      desc: "Evidence-based macronutrient guidance, workout periodization, and form correction with certified fitness instructors.",
    },
    {
      icon: Users2,
      title: "Supportive, Motivating Community",
      desc: "A respectful, ego-free environment where beginners receive patient guidance and experienced athletes push each other to new PRs.",
    },
    {
      icon: Sparkles,
      title: "Hygienic & Well-Ventilated Studio",
      desc: "Pristine locker facilities, sanitized equipment, high-volume air circulation, and pure hydration stations.",
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-[#090e18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Modern Gym Facilities</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Engineered for Results</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            World-Class Training <span className="text-cyan-400">Environment</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every square foot of STARK FITNESS is purposefully equipped to give you the safest, most efficient workout experience in the region.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 group-hover:border-cyan-400/80 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-cyan-400/80 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Available for all members</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
