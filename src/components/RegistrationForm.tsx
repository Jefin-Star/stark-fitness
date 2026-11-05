import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  Calendar, 
  User, 
  Phone, 
  Dumbbell, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { GYM_CONTACT, MEMBERSHIP_PLANS } from '../data/gymData';

interface RegistrationFormProps {
  selectedPlanId?: string;
  selectedTrainer?: string;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  planId: string;
  startDate: string;
  preferredBatch: string;
  preferredTrainer: string;
  fitnessGoals: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  planId?: string;
  startDate?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedPlanId, selectedTrainer }) => {
  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    planId: selectedPlanId || MEMBERSHIP_PLANS[1].id, // Default to 3 Months Standard
    startDate: getTodayString(),
    preferredBatch: 'Morning 5:00 AM – 9:00 AM',
    preferredTrainer: selectedTrainer || '',
    fitnessGoals: 'Strength Training & Muscle Building',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync selected plan when user clicks from pricing card
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, planId: selectedPlanId }));
    }
  }, [selectedPlanId]);

  // Sync selected trainer
  useEffect(() => {
    if (selectedTrainer) {
      setFormData((prev) => ({
        ...prev,
        planId: 'pt-1m', // Automatically switch to Personal Training plan
        preferredTrainer: selectedTrainer,
        fitnessGoals: prev.fitnessGoals.includes(selectedTrainer)
          ? prev.fitnessGoals
          : `Personal training requested with ${selectedTrainer}. Goals: Aerobic fitness, flexibility & strength.`,
      }));
    }
  }, [selectedTrainer]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const phoneClean = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.planId) {
      newErrors.planId = 'Please select a membership plan';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please select your preferred start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const currentPlan = MEMBERSHIP_PLANS.find((p) => p.id === formData.planId) || MEMBERSHIP_PLANS[0];

  const generateSummaryText = () => {
    return `*STARK FITNESS - New Membership Registration*\n` +
      `------------------------------------\n` +
      `👤 Name: ${formData.fullName}\n` +
      `📱 Phone: ${formData.phoneNumber}\n` +
      `✉️ Email: ${formData.email}\n` +
      `🏋️ Plan: ${currentPlan.name} (${currentPlan.priceDisplay})\n` +
      (formData.preferredTrainer ? `⭐ Requested Trainer: ${formData.preferredTrainer}\n` : '') +
      `📅 Start Date: ${formData.startDate}\n` +
      `⏰ Preferred Batch: ${formData.preferredBatch}\n` +
      `🎯 Goals / Notes: ${formData.fitnessGoals || 'General Fitness'}\n` +
      `------------------------------------\n` +
      `Registration generated from starkfitness.com`;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(generateSummaryText());
    return `https://wa.me/${GYM_CONTACT.whatsAppNumber}?text=${text}`;
  };

  const getEmailMailto = () => {
    const subject = encodeURIComponent(`New Membership Registration - ${formData.fullName}`);
    const body = encodeURIComponent(generateSummaryText());
    return `mailto:${GYM_CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      planId: MEMBERSHIP_PLANS[1].id,
      startDate: getTodayString(),
      preferredBatch: 'Morning 5:00 AM – 9:00 AM',
      preferredTrainer: '',
      fitnessGoals: 'Strength Training & Muscle Building',
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-24 bg-[#090e18] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
            <span>Online Registration</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Join The Brotherhood</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            Membership <span className="text-cyan-400">Registration</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Reserve your spot at STARK FITNESS Nileshwar. Submit your details below to activate your registration instantly via WhatsApp or email.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-[#0c1220] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Submission Success State */
            <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center mx-auto mb-6 text-cyan-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mb-2">
                Registration Form Completed!
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your registration for <span className="text-cyan-400 font-bold">{currentPlan.name} ({currentPlan.priceDisplay})</span> is ready. Please confirm directly with our front desk on WhatsApp or Email.
              </p>

              {/* Registration Summary Card */}
              <div className="bg-[#070b12] border border-slate-800 rounded-xl p-5 max-w-xl mx-auto text-left mb-8 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Member Name:</span>
                  <span className="font-bold text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Phone Number:</span>
                  <span className="font-mono text-white">{formData.phoneNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Email:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Selected Plan:</span>
                  <span className="text-cyan-300 font-bold">{currentPlan.name} ({currentPlan.priceDisplay})</span>
                </div>
                {formData.preferredTrainer && (
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-400">Personal Trainer:</span>
                    <span className="text-cyan-400 font-bold">{formData.preferredTrainer}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Target Start Date:</span>
                  <span className="font-mono text-white">{formData.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Preferred Batch:</span>
                  <span className="text-white font-medium">{formData.preferredBatch}</span>
                </div>
              </div>

              {/* Action Buttons for Direct Dispatch */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 text-xs font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg shadow-emerald-900/30 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Send to WhatsApp (+91 {GYM_CONTACT.phoneRaw})</span>
                </a>

                <a
                  href={getEmailMailto()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Send via Email</span>
                </a>
              </div>

              {/* Copy & Reset */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
                </button>
                <span className="text-slate-700">·</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Register Another Member
                </button>
              </div>

            </div>
          ) : (
            /* Active Registration Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-10 pr-4 py-3 bg-[#070b12] border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-slate-800 hover:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-400 mt-1.5">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Phone Number <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`w-full pl-10 pr-4 py-3 bg-[#070b12] border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                        errors.phoneNumber ? 'border-red-500' : 'border-slate-800 hover:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-red-400 mt-1.5">{errors.phoneNumber}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className={`w-full pl-10 pr-4 py-3 bg-[#070b12] border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-800 hover:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                </div>

                {/* Membership Plan Dropdown */}
                <div>
                  <label htmlFor="planId" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Membership Plan <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Dumbbell className="w-4 h-4" />
                    </div>
                    <select
                      id="planId"
                      value={formData.planId}
                      onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 bg-[#070b12] border border-slate-800 hover:border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none cursor-pointer"
                    >
                      <optgroup label="Standard Membership">
                        {MEMBERSHIP_PLANS.filter(p => p.category === 'standard').map((p) => (
                          <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                            {p.name} - {p.priceDisplay} (Renewal: {p.renewalDisplay})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Student Packages">
                        {MEMBERSHIP_PLANS.filter(p => p.category === 'student').map((p) => (
                          <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                            {p.name} - {p.priceDisplay}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Couple Packages">
                        {MEMBERSHIP_PLANS.filter(p => p.category === 'couple').map((p) => (
                          <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                            {p.name} - {p.priceDisplay}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Personal Training">
                        {MEMBERSHIP_PLANS.filter(p => p.category === 'personal_training').map((p) => (
                          <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                            {p.name} - {p.priceDisplay} / month
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label htmlFor="startDate" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Start Date <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      value={formData.startDate}
                      min={getTodayString()}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#070b12] border border-slate-800 hover:border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                  {errors.startDate && <p className="text-xs text-red-400 mt-1.5">{errors.startDate}</p>}
                </div>

                {/* Preferred Batch */}
                <div>
                  <label htmlFor="preferredBatch" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Batch Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="preferredBatch"
                      value={formData.preferredBatch}
                      onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                      className="w-full pl-10 pr-8 py-3 bg-[#070b12] border border-slate-800 hover:border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="Morning 5:00 AM – 9:00 AM" className="bg-slate-900">
                        Morning: 5:00 AM – 9:00 AM (Ladies & Gents)
                      </option>
                      <option value="Exclusive Ladies Batch 10:00 AM – 1:00 PM" className="bg-slate-900">
                        Exclusive: 10:00 AM – 1:00 PM (Ladies Only)
                      </option>
                      <option value="Evening 4:00 PM – 9:00 PM" className="bg-slate-900">
                        Evening: 4:00 PM – 9:00 PM (Ladies & Gents)
                      </option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label htmlFor="fitnessGoals" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Message / Fitness Goals
                </label>
                <textarea
                  id="fitnessGoals"
                  rows={3}
                  value={formData.fitnessGoals}
                  onChange={(e) => setFormData({ ...formData, fitnessGoals: e.target.value })}
                  placeholder="Tell us about your goals (e.g. Muscle Building, Weight Loss, Posture Correction, Powerlifting, General Health)..."
                  className="w-full px-4 py-3 bg-[#070b12] border border-slate-800 hover:border-slate-700 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              {/* Selected Plan Summary preview strip */}
              <div className="p-4 rounded-xl bg-[#070b12] border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Selected Package Rate</span>
                  <span className="font-display font-bold text-lg text-white">{currentPlan.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-display font-extrabold text-xl text-cyan-400 tabular-nums">{currentPlan.priceDisplay}</span>
                  {currentPlan.renewalDisplay && (
                    <span className="block text-[11px] text-slate-400">Renewal: {currentPlan.renewalDisplay}</span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 rounded-xl shadow-lg shadow-cyan-500/20 active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-slate-500">
                Direct integration with WhatsApp & Email support. No online card required.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
