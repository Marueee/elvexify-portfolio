export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  interests: string[];
  /** gradient accent for the placeholder tile */
  accent: "electric" | "violet" | "cyan";
  initials: string;
}

export const TEAM: TeamMember[] = [
  {
    id: "m1",
    name: "[TEAM MEMBER NAME]",
    role: "Chief Executive / Product Lead",
    specialty: "Owns product vision, client strategy and delivery discipline.",
    interests: ["Product", "Strategy", "Systems Thinking"],
    accent: "electric",
    initials: "EL",
  },
  {
    id: "m2",
    name: "[TEAM MEMBER NAME]",
    role: "Technical Lead",
    specialty: "Architects systems and keeps the engineering bar high.",
    interests: ["Architecture", "Cloud", "Performance"],
    accent: "violet",
    initials: "EL",
  },
  {
    id: "m3",
    name: "[TEAM MEMBER NAME]",
    role: "Full-Stack Developer",
    specialty: "Moves comfortably across frontend, backend and data.",
    interests: ["TypeScript", "Laravel", "Next.js"],
    accent: "cyan",
    initials: "EL",
  },
  {
    id: "m4",
    name: "[TEAM MEMBER NAME]",
    role: "Frontend Engineer",
    specialty: "Builds interfaces that are fast, accessible and precise.",
    interests: ["React", "Tailwind", "Motion"],
    accent: "electric",
    initials: "EL",
  },
  {
    id: "m5",
    name: "[TEAM MEMBER NAME]",
    role: "Backend Engineer",
    specialty: "Designs APIs, data models and resilient services.",
    interests: ["PHP", "PostgreSQL", "APIs"],
    accent: "violet",
    initials: "EL",
  },
  {
    id: "m6",
    name: "[TEAM MEMBER NAME]",
    role: "UI/UX Designer",
    specialty: "Turns complexity into calm, usable experiences.",
    interests: ["Design Systems", "Research", "Prototyping"],
    accent: "cyan",
    initials: "EL",
  },
  {
    id: "m7",
    name: "[TEAM MEMBER NAME]",
    role: "Mobile / Software Engineer",
    specialty: "Ships cross-platform products that feel native.",
    interests: ["Flutter", "Dart", "Mobile"],
    accent: "electric",
    initials: "EL",
  },
];
