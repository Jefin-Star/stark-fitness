import React, { useState } from 'react';
import { Check, Clock, Sparkles, UserCheck, Heart, GraduationCap, Flame, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_SCHEDULES, MembershipPlan } from '../data/gymData';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'standard' | 'student' | 'couple' | 'personal_training'>('all');

  const filteredPlans = activeTab === 'all'
    ? MEMBERSHIP_PLANS
    : MEMBERSHIP_PLANS.filter((p) => p.category === activeTab);

  const getCategoryBadge = (category: MembershipPlan['category']) => {
    switch (category) {
      case 'student':
        return { label: 'Student Special', icon: GraduationCap };
      case 'couple':
        return { label: 'Couple Bundle', icon: Heart };
      case 'personal_training':
        return { label: '1-on-1 Coaching', icon: UserCheck };
      default:
        return { label: 'Standard Plan', icon: Flame };
    }
  };

  return (
    <section id="plans" className="py-24 bg-[#070b12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Transparent Pricing</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>No Hidden Fees</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            Membership <span className="text-cyan-400">Plans & Packages</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Invest in your fitness with transparent options suited for individual lifters, college students, couples, and those desiring 1-on-1 personal coaching.
          </p>

          {/* Interactive Category Segmented Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center p-1.5 bg-[#0f172a] rounded-xl border border-slate-800 gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'standard'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'student'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setActiveTab('couple')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'couple'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Couple
            </button>
            <button
              onClick={() => setActiveTab('personal_training')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'personal_training'
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Personal Training
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {filteredPlans.map((plan) => {
            const badge = getCategoryBadge(plan.category);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-7 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#101b33] to-[#0b1324] border-2 border-cyan-400/80 shadow-xl shadow-cyan-500/10'
                    : 'bg-[#0c1220] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Ribbon if marked */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-400 to-sky-400 text-black text-[11px] font-extrabold uppercase tracking-widest rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Category Indicator */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5 font-medium text-cyan-300">
                      <BadgeIcon className="w-3.5 h-3.5" />
                      <span>{badge.label}</span>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">{plan.duration}</span>
                  </div>

                  {/* Plan Name */}
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-wide uppercase mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-xs text-slate-300 min-h-[32px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight tabular-nums">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ {plan.duration}</span>
                    </div>

                    {/* Breakdown or Renewal Info */}
                    {plan.renewalDisplay && (
                      <div className="mt-2.5 flex items-center gap-2 text-xs">
                        <span className="text-cyan-400 font-medium">Renewal:</span>
                        <span className="font-semibold text-white tabular-nums">{plan.renewalDisplay}</span>
                        <span className="text-slate-500 text-[11px]">(ongoing rate)</span>
                      </div>
                    )}

                    {plan.breakdown && (
                      <div className="mt-2.5 text-xs text-cyan-300 font-medium">
                        Breakdown: {plan.breakdown}
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Included In Plan</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-md shadow-cyan-500/20 active:scale-98'
                      : 'bg-slate-800/80 hover:bg-cyan-400 hover:text-black text-white border border-slate-700/80 active:scale-98'
                  }`}
                >
                  <span>Join Now with This Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Operating Hours & Batches Highlight Section */}
        <div id="schedule" className="rounded-2xl bg-gradient-to-br from-[#0c1322] to-[#070b14] border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle cyan glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
              <Clock className="w-4 h-4" />
              <span>Official Daily Schedule & Timings</span>
            </div>
            
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
              Gym Operating Hours & Dedicated Batches
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              We provide structured training shifts to optimize floor space, coaching quality, and provide complete comfort for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {GYM_SCHEDULES.map((sched, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                    sched.highlight
                      ? 'bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : sched.type === 'closed'
                      ? 'bg-slate-900/40 border-slate-800/60 opacity-80'
                      : 'bg-[#0f172a]/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {sched.batch}
                      </span>
                      {sched.highlight && (
                        <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest bg-cyan-900/60 px-2 py-0.5 rounded">
                          Exclusive
                        </span>
                      )}
                    </div>
                    
                    <p className={`font-display font-bold text-lg sm:text-xl mb-1 ${sched.highlight ? 'text-cyan-300' : 'text-white'}`}>
                      {sched.time}
                    </p>
                    
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {sched.audience}
                    </p>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug pt-2 border-t border-slate-800/60">
                    {sched.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Ladies Only Special Note */}
            <div className="mt-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-300">
                <strong className="text-cyan-300 font-semibold">Special Ladies Batch (10:00 AM – 1:00 PM):</strong> Dedicated strictly for female fitness enthusiasts with total privacy, comfortable atmosphere, and specialized female-focused fitness coaching.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
