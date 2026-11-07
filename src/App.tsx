/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FoundersSection } from './components/FoundersSection';
import { TrainerProfiles } from './components/TrainerProfiles';
import { Facilities } from './components/Facilities';
import { MembershipPlans } from './components/MembershipPlans';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);
  const [selectedTrainer, setSelectedTrainer] = useState<string | undefined>(undefined);

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlans = () => {
    const el = document.getElementById('plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    scrollToRegister();
  };

  const handleBookTrainer = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    setSelectedPlanId('pt-1m');
    scrollToRegister();
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 flex flex-col font-sans selection:bg-cyan-400 selection:text-black">
      {/* Navigation Top Bar */}
      <Navbar onJoinClick={scrollToRegister} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={scrollToRegister}
          onViewPlansClick={scrollToPlans}
        />

        {/* 2. About Our Gym */}
        <About />

        {/* 3. Founder Profile: Biju Kuruvat */}
        <FoundersSection onSelectPT={() => handleBookTrainer('Biju Kuruvat')} />

        {/* 4. Certified Trainer Profiles: Nisha Balakrishnan & Praseena Biju */}
        <TrainerProfiles onBookTrainer={handleBookTrainer} />

        {/* 4. Facilities & Equipment Section */}
        <Facilities />

        {/* 6. Membership Plans & Batch Schedules */}
        <MembershipPlans onSelectPlan={handleSelectPlan} />

        {/* 7. Membership Registration Form */}
        <RegistrationForm selectedPlanId={selectedPlanId} selectedTrainer={selectedTrainer} />

        {/* 8. Contact Us & Google Maps Embed */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Quick Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
