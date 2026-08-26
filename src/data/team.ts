export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  interests: string[];
  accent: "electric" | "violet" | "cyan";
  image: string;
  initials: string;
}

export const TEAM: TeamMember[] = [
  {
    id: "haikal",
    name: "Muhammad Haikal bin Mohd Jaki",
    role: "Co-Founder & Technical Lead",
    specialty:
      "Leads system architecture, enterprise platform delivery, and full-stack engineering discipline across all Elvexify engagements.",
    interests: ["System Architecture", "Enterprise Platforms", "Next.js", "Laravel"],
    accent: "electric",
    image: "/team/haikal.png",
    initials: "MH",
  },
  {
    id: "aiman-hakimi",
    name: "Muhammad Aiman Hakimi bin Abdul Wahid",
    role: "AI & Machine Learning Lead",
    specialty:
      "Architects intelligent diagnostic models, on-device Edge AI pipelines, and computer vision classification systems.",
    interests: ["Computer Vision", "TensorFlow Lite", "Edge AI", "Model Optimization"],
    accent: "cyan",
    image: "/team/aiman-hakimi.png",
    initials: "AH",
  },
  {
    id: "azim",
    name: "Muhammad Azim bin Mat Kala",
    role: "Full-Stack & Web Platform Engineer",
    specialty:
      "Specializes in robust enterprise web applications, real-time database models, and reactive dashboard workflows.",
    interests: ["Laravel", "Livewire", "PostgreSQL", "React"],
    accent: "violet",
    image: "/team/azim.png",
    initials: "MA",
  },
  {
    id: "ilyas",
    name: "Muhammad Ilyas bin Kamal Nawawi",
    role: "IoT & Embedded Systems Engineer",
    specialty:
      "Engineers connected microcontrollers, telemetry sensors, and low-latency cloud-to-hardware data transmission pipelines.",
    interests: ["ESP32-S3", "IoT Sensors", "Embedded C++", "Cloud Telemetry"],
    accent: "electric",
    image: "/team/ilyas.png",
    initials: "MI",
  },
  {
    id: "luqmanul",
    name: "Luqmanul Hakeem bin Zulkarnain",
    role: "Mobile Product & Software Engineer",
    specialty:
      "Builds high-performance, offline-first mobile applications with native fluidity and ergonomic design systems.",
    interests: ["Flutter", "Dart", "Mobile Architecture", "Supabase"],
    accent: "cyan",
    image: "/team/luqmanul.png",
    initials: "LH",
  },
  {
    id: "aiman-junaidih",
    name: "Mohammad Aiman bin Junaidih",
    role: "Cybersecurity & Systems Engineer",
    specialty:
      "Focuses on threat defense architectures, secure API protocols, and interactive gamified security simulation engines.",
    interests: ["Application Security", "Threat Detection", "DevSecOps", "Cloud Security"],
    accent: "violet",
    image: "/team/aiman-junaidih.png",
    initials: "AJ",
  },
];
