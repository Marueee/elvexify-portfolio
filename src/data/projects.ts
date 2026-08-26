export interface Project {
  id: string;
  name: string;
  fullTitle: string;
  client: string;
  category: "AI & Smart Agriculture" | "Enterprise Web Platform" | "IoT & Wearable Systems" | "IoT & Embedded ML" | "Cybersecurity & EdTech" | "Event & Academic Platform";
  filterCategory: "ai-ml" | "iot" | "web" | "mobile";
  summary: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  accent: "electric" | "violet" | "cyan";
  metricValue: string;
  metricLabel: string;
  logoUrl: string;
  coverImage: string;
  secondaryImage?: string;
  previewType: "multi-mobile" | "web-dashboard" | "mobile-device" | "device-mockup";
}

export const PROJECTS: Project[] = [
  {
    id: "paddyai",
    name: "PaddyAI",
    fullTitle: "AI-Powered Paddy Disease Detection & Monitoring System",
    client: "Smart Agriculture & Crop Health",
    category: "AI & Smart Agriculture",
    filterCategory: "ai-ml",
    summary:
      "An AI-powered smart agriculture mobile solution developed to assist paddy farmers with instant image-based disease detection, field health logging, and proactive treatment guidance.",
    problem:
      "Delayed diagnosis of common crop diseases like Leaf Blast and Brown Spot leads to severe harvest losses, excessive chemical wastage, and reduced farmer income across rural farming communities.",
    solution:
      "Engineered an on-device TensorFlow Lite image classification engine within a Flutter mobile application, backed by Supabase for disease history tracking and offline-first field detection.",
    result:
      "Instant disease classification in under 1 second with real-time confidence scores and diagnostic advice for farmers in the field.",
    technologies: [
      "Flutter",
      "Dart",
      "TensorFlow Lite",
      "Edge AI",
      "Image Classification",
      "Supabase",
      "Offline-First",
    ],
    accent: "cyan",
    metricValue: "98%+",
    metricLabel: "disease classification accuracy",
    logoUrl: "/projects/paddyai-logo.png",
    coverImage: "/projects/paddyai-detect.png",
    secondaryImage: "/projects/paddyai-dashboard.png",
    previewType: "multi-mobile",
  },
  {
    id: "internintrack",
    name: "InternIntrack",
    fullTitle: "Digital Internship Monitoring & Management System",
    client: "Higher Education & Industry Placement",
    category: "Enterprise Web Platform",
    filterCategory: "web",
    summary:
      "A comprehensive web-based internship monitoring and management system designed to coordinate students, academic supervisors, and corporate mentors through paperless workflows.",
    problem:
      "Traditional internship oversight relied on manual paper logbooks, fragmented email check-ins, and slow supervisor approvals, causing administrative overhead and verification bottlenecks.",
    solution:
      "Delivered a reactive Laravel & Livewire portal with Spatie role-based access control, automated attendance check-ins, weekly log submissions, and instant rubric scoring.",
    result:
      "100% digital transition for student daily check-ins, monthly attendance reporting, and multi-tier supervisor evaluations.",
    technologies: [
      "Laravel (MVC)",
      "PHP",
      "Livewire",
      "Tailwind CSS",
      "Spatie Permissions",
      "Supabase / PostgreSQL",
    ],
    accent: "electric",
    metricValue: "100%",
    metricLabel: "digital log & supervisor sign-off",
    logoUrl: "/projects/internintrack-logo.png",
    coverImage: "/projects/internintrack-attendance.png",
    secondaryImage: "/projects/internintrack-dashboard.png",
    previewType: "web-dashboard",
  },
  {
    id: "safehajj",
    name: "SafeHajj",
    fullTitle: "Smart IoT Wearable for Pilgrim Location & Health Monitoring",
    client: "Hajj & Umrah Pilgrim Safety",
    category: "IoT & Wearable Systems",
    filterCategory: "iot",
    summary:
      "An IoT-based wearable safety and telemetry system designed to protect elderly and high-risk pilgrims during Hajj and Umrah through continuous location tracking and vitals monitoring.",
    problem:
      "Densely crowded pilgrimage environments pose significant risks of elderly pilgrims getting lost, dehydrated, or experiencing unnoticed medical emergencies under extreme heat.",
    solution:
      "Integrated custom ESP32-S3 wearable hardware with GPS and biometric sensors, transmitting real-time telemetry to Supabase cloud and a companion Flutter emergency response application.",
    result:
      "Rapid emergency dispatch capability with live GPS tracking, automated distress alerts, and essential pilgrimage guide integrations.",
    technologies: [
      "ESP32-S3",
      "IoT Biometrics",
      "GPS Tracking",
      "Flutter",
      "Arduino C++",
      "Supabase Telemetry",
    ],
    accent: "violet",
    metricValue: "<2s",
    metricLabel: "emergency alert transmission",
    logoUrl: "/projects/safehajj-logo.png",
    coverImage: "/projects/safehajj-app.png",
    previewType: "mobile-device",
  },
  {
    id: "waterguard",
    name: "Smart WaterGuard",
    fullTitle: "IoT & AI Water Quality Monitoring System",
    client: "Freshwater Aquaculture Operators",
    category: "IoT & Embedded ML",
    filterCategory: "iot",
    summary:
      "An automated IoT and AI monitoring solution empowering freshwater aquaculture operators with continuous water condition telemetry and predictive health classification.",
    problem:
      "Unnoticed changes in water pH, temperature, and Total Dissolved Solids (TDS) cause sudden fish mortality, water contamination, and severe financial losses in aquaculture farms.",
    solution:
      "Connected submersible IoT sensor arrays to ESP32 microcontrollers with embedded TensorFlow Lite models, streaming telemetry and predictive safe/unsafe alerts to a Flutter dashboard.",
    result:
      "Continuous 24/7 water quality analysis with 98.8% machine learning prediction confidence and automated threshold warnings.",
    technologies: [
      "ESP32",
      "IoT Sensors (pH/TDS/Temp)",
      "Flutter",
      "Dart",
      "TensorFlow Lite",
      "Supabase",
    ],
    accent: "cyan",
    metricValue: "98.8%",
    metricLabel: "ML water safety prediction",
    logoUrl: "/projects/waterguard-logo.png",
    coverImage: "/projects/waterguard-dashboard.jpg",
    secondaryImage: "/projects/waterguard-history.jpg",
    previewType: "multi-mobile",
  },
  {
    id: "cyberguard",
    name: "CyberGuard",
    fullTitle: "Gamified Mobile Cybersecurity Learning & Defense Suite",
    client: "Cybersecurity Training & User Defense",
    category: "Cybersecurity & EdTech",
    filterCategory: "mobile",
    summary:
      "A gamified, mobile-first cybersecurity training application that transforms abstract security principles into practical, scenario-based defense simulations.",
    problem:
      "Passive security training fails to build instinctive defense habits, leaving non-technical users vulnerable to deceptive phishing URLs, credential theft, and smishing attacks.",
    solution:
      "Created an interactive mobile defense suite featuring on-device URL risk scanning, gamified phishing detection quizzes, interactive learning modules, and badge progression systems.",
    result:
      "Demonstrated 82.4%+ threat identification accuracy across simulated attack scenarios with measurable improvement in user vigilance.",
    technologies: [
      "Flutter",
      "Dart",
      "Gamification Engine",
      "URL & Smish Scanner",
      "Livewire Flux",
      "Supabase",
    ],
    accent: "electric",
    metricValue: "82.4%",
    metricLabel: "threat detection accuracy",
    logoUrl: "/projects/cyberguard-logo.png",
    coverImage: "/projects/cyberguard-mockup.png",
    previewType: "device-mockup",
  },
  {
    id: "signupgo",
    name: "SignUpGo",
    fullTitle: "Web-Based Conference & Innovation Management System",
    client: "Academic Conferences & Innovation Competitions",
    category: "Event & Academic Platform",
    filterCategory: "web",
    summary:
      "A centralized event management platform built to streamline participant registration, payment verification, rubric-based jury judging, and automated digital certificate dispatch.",
    problem:
      "Large-scale innovation expos (e.g., TICE, UISM) face logistical bottlenecks managing paper scoring rubrics, manual payment tracking, and high-volume certificate generation.",
    solution:
      "Engineered an automated Laravel MVC platform featuring instant payment verification, digital scoring rubrics for jury reviewers, Cloudinary storage, and automated certificate generation.",
    result:
      "Automated the complete event lifecycle from participant check-in to automated digital certificate delivery and post-event feedback.",
    technologies: [
      "Laravel (MVC)",
      "PHP",
      "PostgreSQL (Supabase)",
      "Cloudinary API",
      "Gmail SMTP",
      "Tailwind CSS",
    ],
    accent: "violet",
    metricValue: "5.0★",
    metricLabel: "organizer & jury satisfaction",
    logoUrl: "/projects/signupgo-logo.jpg",
    coverImage: "/projects/signupgo-dashboard.png",
    previewType: "web-dashboard",
  },
];
