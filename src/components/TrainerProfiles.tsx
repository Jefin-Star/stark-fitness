import React from 'react';
import { 
  Award, 
  Sparkles, 
  MessageSquare, 
  Check, 
  Heart, 
  Flame, 
  Calendar, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { TRAINER_PROFILES, GYM_CONTACT } from '../data/gymData';

interface TrainerProfilesProps {
  onBookTrainer: (trainerName: string) => void;
}

export const TrainerProfiles: React.FC<TrainerProfilesProps> = ({ onBookTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#070b12] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Expert Coaching Staff</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Certified Mentors</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            Meet Our <span className="text-cyan-400">Certified Trainers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Dedicated professionals ready to guide your journey. Certified, experienced, and passionate about helping clients in Nileshwar achieve real, sustainable strength, flexibility, and aerobic health.
          </p>
        </div>

        {/* Two Trainer Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-stretch">
          {TRAINER_PROFILES.map((trainer) => {
            const whatsAppConsultUrl = `https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=${encodeURIComponent(
              `Hi STARK FITNESS, I would like to inquire about training and coaching sessions with trainer ${trainer.name}.`
            )}`;

            return (
              <div
                key={trainer.id}
                className="rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group"
              >
                <div>
                  
                  {/* Top Profile Banner: Photo + Identity */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-800/80 mb-6">
                    {/* Trainer Portrait with Subtle Ring */}
                    <div className="relative shrink-0">
                      <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-colors">
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-cyan-950 border border-cyan-400 text-cyan-300 p-1.5 rounded-lg shadow">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bio & Credentials */}
                    <div className="text-center sm:text-left flex-1">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                        <span>{trainer.role}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-300">{trainer.experience}</span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase mb-3">
                        {trainer.name}
                      </h3>

                      {/* Certifications Box */}
                      <div className="space-y-1.5 mb-3">
                        {trainer.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-300">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="font-medium text-slate-200">{cert}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specializations Tag Row (Unboxed clean text) */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-xs text-cyan-300">
                        {trainer.specializations.map((spec, idx) => (
                          <React.Fragment key={idx}>
                            <span className="font-semibold">{spec}</span>
                            {idx < trainer.specializations.length - 1 && (
                              <span aria-hidden="true" className="text-slate-600">/</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio Prose */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {trainer.bio}
                  </p>

                  {/* Key Training Focus Areas */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Specializations & Methods
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {trainer.focusAreas.map((focus, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Note */}
                  <div className="p-3.5 rounded-xl bg-[#070b12] border border-slate-800/80 mb-6 flex items-start gap-2.5 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{trainer.scheduleNote}</span>
                  </div>

                </div>

                {/* Trainer Action CTAs */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={whatsAppConsultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 active:scale-98 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onBookTrainer(trainer.name)}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Book Personal Training</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Joint Commitment Callout Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0c162b] via-[#091122] to-[#070d1a] border border-cyan-500/30 p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <UserCheck className="w-4 h-4" />
              <span>Certified Mentorship for Every Member</span>
            </div>
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
              Ready To Train With Nisha & Praseena?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are enrolling in our exclusive <span className="text-cyan-300 font-semibold">Ladies Only Batch (10:00 AM – 1:00 PM)</span> or seeking 1-on-1 Personal Training (₹5,000/mo), both trainers are committed to giving you personalized, safe, and progressive results.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=Hi%20STARK%20FITNESS,%20I%20would%20like%20to%20learn%20more%20about%20the%20Ladies%20Only%20Batch%20and%20Personal%20Training%20with%20your%20female%20trainers`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Chat with Head Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
