export interface TechCategory {
  id: string;
  label: string;
  note: string;
  items: string[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    note: "Interfaces that stay fast and legible at scale.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    note: "Reliable services and APIs built to last.",
    items: ["Laravel", "Node.js", "PHP", "JavaScript"],
  },
  {
    id: "mobile",
    label: "Mobile",
    note: "Cross-platform apps that feel native.",
    items: ["Flutter", "Dart", "React Native"],
  },
  {
    id: "database",
    label: "Database",
    note: "Data you can trust and query with confidence.",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    id: "infra",
    label: "Infrastructure",
    note: "Automated, observable and reproducible.",
    items: ["Git", "Docker", "CI/CD", "Cloud"],
  },
  {
    id: "integration",
    label: "Integration",
    note: "Systems that talk to each other cleanly.",
    items: ["REST APIs", "GraphQL", "Webhooks", "WebSockets"],
  },
];

export const ALL_TECH = Array.from(
  new Set(TECH_CATEGORIES.flatMap((c) => c.items))
);
