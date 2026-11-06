export interface MembershipPlan {
  id: string;
  name: string;
  category: 'standard' | 'student' | 'couple' | 'personal_training';
  duration: string;
  price: number;
  priceDisplay: string;
  renewalFee?: number;
  renewalDisplay?: string;
  breakdown?: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export const GYM_CONTACT = {
  name: "STARK FITNESS",
  subName: "STARK GYM & FITNESS",
  locationName: "Nileshwar",
  tagline: "Build Your Strength. Transform Your Life.",
  phoneDisplay: "+91 9400483566",
  phoneRaw: "9400483566",
  whatsAppNumber: "919400483566",
  email: "starkgymoffitness@gmail.com",
  instagramUrl: "https://www.instagram.com/stark_fitness_gym_official?srtk=anVxeW8wa2FnZmlv&utm_source=qr",
  instagramHandle: "@stark_fitness_gym_official",
  address: "STARK GYM & FITNESS, Nileshwar, Kasaragod, Kerala, India",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.0775609217894!2d75.1368821!3d12.2594108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47b20d50ea205%3A0x78d91d9afa38e188!2sSTARK%20GYM%20%26%20FITNESS!5e1!3m2!1sen!2sin!4v1793855549637!5m2!1sen!2sin",
  logoSrc: "./images/logo.jpg",
  heroImage: "./images/hero_gym.jpg",
  equipmentImage: "./images/gym_equipment.jpg",
  coachingImage: "./images/strength_coaching.jpg",
};

export const GYM_SCHEDULES = [
  {
    batch: "Morning Session",
    time: "5:00 AM – 9:00 AM",
    audience: "Ladies & Gents",
    type: "general",
    note: "Prime time for heavy lifting & morning cardio",
  },
  {
    batch: "Ladies Exclusive Batch",
    time: "10:00 AM – 1:00 PM",
    audience: "Ladies Only",
    type: "ladies_only",
    highlight: true,
    note: "Private, supportive, and dedicated coaching environment for women",
  },
  {
    batch: "Evening Session",
    time: "4:00 PM – 9:00 PM",
    audience: "Ladies & Gents",
    type: "general",
    note: "Post-work strength training, bodybuilding & conditioning",
  },
  {
    batch: "Sunday",
    time: "Closed",
    audience: "All Batches",
    type: "closed",
    note: "Deep facility sanitization & scheduled muscle recovery",
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  // Standard Plans
  {
    id: "std-1m",
    name: "1 Month Standard",
    category: "standard",
    duration: "1 Month",
    price: 1800,
    priceDisplay: "₹1,800",
    renewalFee: 800,
    renewalDisplay: "₹800",
    description: "Ideal for trying out the facility and kicking off your fitness routine.",
    features: [
      "Access to all general batch hours",
      "Full free weights & machine floor access",
      "Locker & changing room access",
      "General trainer floor guidance",
      "Renewal fee only ₹800/month after month 1",
    ],
  },
  {
    id: "std-3m",
    name: "3 Months Standard",
    category: "standard",
    duration: "3 Months",
    price: 3000,
    priceDisplay: "₹3,000",
    renewalFee: 2000,
    renewalDisplay: "₹2,000",
    popular: true,
    description: "The most popular plan for visible transformation and strength gains.",
    features: [
      "Full facility access during open hours",
      "Complimentary workout routine design",
      "Body composition assessment",
      "Ladies only batch option included",
      "Cost-effective renewal fee of ₹2,000",
    ],
  },
  {
    id: "std-6m",
    name: "6 Months Standard",
    category: "standard",
    duration: "6 Months",
    price: 4500,
    priceDisplay: "₹4,500",
    renewalFee: 4500,
    renewalDisplay: "₹4,500",
    description: "Long-term commitment for serious lifters and sustained lifestyle transformation.",
    features: [
      "Complete 6 months unlimited gym access",
      "Quarterly fitness progress audit",
      "Advanced barbell & conditioning access",
      "Full batch flexibility",
      "Best per-month long term rate",
    ],
  },

  // Student Packages
  {
    id: "stu-1m",
    name: "Student 1 Month",
    category: "student",
    duration: "1 Month",
    price: 1700,
    priceDisplay: "₹1,700",
    breakdown: "₹800 fee + ₹900 admission",
    description: "Budget-friendly student package designed for college and school athletes.",
    features: [
      "Valid Student ID required upon check-in",
      "Inclusive of admission & initial setup",
      "Access during morning & evening batches",
      "Strength & conditioning equipment",
      "Locker room & hydration zone",
    ],
  },
  {
    id: "stu-3m",
    name: "Student 3 Months",
    category: "student",
    duration: "3 Months",
    price: 2800,
    priceDisplay: "₹2,800",
    popular: true,
    description: "Extended student package providing the best semester workout value.",
    features: [
      "Substantial savings for active students",
      "Full access during all open batches",
      "Routine consultation with certified coach",
      "Endurance & strength equipment",
      "No hidden extra charges",
    ],
  },

  // Couple Packages
  {
    id: "cpl-1m",
    name: "Couple 1 Month",
    category: "couple",
    duration: "1 Month",
    price: 3400,
    priceDisplay: "₹3,400",
    description: "Train together, stay motivated together with shared gym access.",
    features: [
      "Gym access for 2 persons",
      "Flexible workout hours together",
      "General trainer supervision & tips",
      "Access to cardio and strength zones",
      "Shared progress milestones",
    ],
  },
  {
    id: "cpl-3m",
    name: "Couple 3 Months",
    category: "couple",
    duration: "3 Months",
    price: 5500,
    priceDisplay: "₹5,500",
    popular: true,
    description: "Our recommended couple package for building lasting health habits together.",
    features: [
      "Full 3 months access for 2 members",
      "Partner workout guidance & technique checks",
      "Access during ladies-only batch for female partner",
      "Significant discount over individual plans",
      "Full locker & amenities access",
    ],
  },
  {
    id: "cpl-6m",
    name: "Couple 6 Months",
    category: "couple",
    duration: "6 Months",
    price: 8500,
    priceDisplay: "₹8,500",
    description: "Maximum couple savings for sustained commitment over half a year.",
    features: [
      "Complete 6 months access for 2 members",
      "Personalized training milestones",
      "Unrestricted batch access",
      "Priority equipment orientation",
      "Best overall couple savings (₹8,500 flat)",
    ],
  },

  // Personal Training
  {
    id: "pt-1m",
    name: "Personal Training",
    category: "personal_training",
    duration: "1 Month",
    price: 5000,
    priceDisplay: "₹5,000",
    popular: true,
    description: "Intensive 1-on-1 private coaching tailored to your exact physical goals.",
    features: [
      "Dedicated 1-on-1 certified personal trainer",
      "Custom nutritional guidance & diet framework",
      "Biomechanics & lifting technique correction",
      "Weekly body composition & weight tracking",
      "Faster, safer, injury-free muscle & fat loss results",
      "Flexible session booking within operating hours",
    ],
  },
];

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specializations: string[];
  certifications: string[];
  bio: string;
  focusAreas: string[];
  scheduleNote: string;
}

export const TRAINER_PROFILES: TrainerProfile[] = [
  {
    id: 'nisha-balakrishnan',
    name: 'Nisha Balakrishnan',
    role: 'Female Personal Trainer',
    experience: '8 Years Experience',
    image: './images/nisha_balakrishnan.jpg',
    specializations: ['Aerobic Fitness', 'Yoga & Flexibility', 'Mind-Body Wellness'],
    certifications: ['Diploma in Yoga', 'NSDC Certified (National Skill Development Corporation)'],
    bio: 'With over 8 years of professional coaching experience, Nisha Balakrishnan blends the mindfulness and core flexibility of classical yoga with high-energy aerobic conditioning. She specializes in helping women build core stability, improve cardiovascular endurance, and develop sustainable, injury-free health habits.',
    focusAreas: [
      'Core & Spinal Alignment',
      'Aerobic Endurance & Fat Burn',
      'Yoga Asanas & Breathwork',
      'Postural Correction & Joint Health',
    ],
    scheduleNote: 'Active during Ladies Exclusive Shift (10am–1pm) & 1-on-1 Personal Training appointments.',
  },
  {
    id: 'praseena-biju',
    name: 'Praseena Biju',
    role: 'Certified Female Fitness Trainer',
    experience: '6 Years Experience',
    image: './images/praseena_biju.jpg',
    specializations: ['Fitness & Aerobics Training', 'Body Toning', 'Functional Resistance'],
    certifications: ['Certified by Max Impact Fitness Academy', 'Aerobics & Fitness Conditioning'],
    bio: 'Praseena Biju brings 6 years of dynamic fitness and aerobics training expertise. Certified by Max Impact Fitness Academy, she is passionate about empowering clients to smash fitness barriers through energetic, result-oriented aerobic sessions and functional resistance training.',
    focusAreas: [
      'High-Energy Aerobics & HIIT',
      'Full-Body Functional Toning',
      'Metabolic Conditioning',
      'Beginner-to-Advanced Weight Progression',
    ],
    scheduleNote: 'Leads energetic group aerobics & customized personal training routines.',
  },
];

export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  titleBadge: string;
  image: string;
  experienceHeadline: string;
  credentials: string[];
  certifications: string[];
  careerHighlights: string[];
  quote: string;
}

export const FOUNDERS_DATA: FounderProfile[] = [
  {
    id: 'biju-kuruvat',
    name: 'Biju Kuruvat',
    role: 'Founder & Coach',
    titleBadge: 'Champion Athlete & Master Coach',
    image: './images/biju_kuruvat.jpg',
    experienceHeadline: '26 Years Training Experience · 15 Years in Dubai',
    credentials: [
      'Two-Time Kannur University Title Winner',
      'Mr. Kerala Silver Medalist',
      'Mr. Kasaragod Junior Title Holder',
      'Powerlifting Champion',
    ],
    certifications: [
      'NSDC Certified Fitness Trainer',
      'BCLS CPR Certified (Basic Cardiac Life Support)',
    ],
    careerHighlights: [
      '26 years of elite strength and bodybuilding training experience',
      '15 years of international coaching and gym management in Dubai',
      'Decades of competitive powerlifting & physique mentorship',
      'Master trainer in strength conditioning & injury prevention',
    ],
    quote: 'True strength is forged through relentless discipline, precise biomechanics, and consistency. STARK FITNESS was founded to bring world-class training standards to our hometown of Nileshwar.',
  },
];


