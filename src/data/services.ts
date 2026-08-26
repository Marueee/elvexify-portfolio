import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  Smartphone,
  Workflow,
  BarChart3,
} from "lucide-react";

export interface Service {
  id: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  icon: LucideIcon;
  tech: string[];
  /** short label for the accent diagram */
  diagram: string;
}

export const SERVICES: Service[] = [
  {
    id: "custom-software",
    index: "01",
    title: "Custom Software Development",
    summary:
      "Business-specific systems designed around real operational requirements.",
    detail:
      "We build tailored applications that fit the way your organisation actually works — not a generic product you have to bend to. From internal tools to customer-facing platforms, the architecture is shaped around your processes, data and scale.",
    icon: Code2,
    tech: ["TypeScript", "Next.js", "Laravel", "Node.js", "PostgreSQL"],
    diagram: "SYS",
  },
  {
    id: "web-apps",
    index: "02",
    title: "Web Application Development",
    summary: "Modern, scalable and responsive web platforms.",
    detail:
      "Production-grade web applications engineered for performance and longevity. We design component systems, data layers and interfaces that stay fast and maintainable as your product grows.",
    icon: Globe,
    tech: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Supabase"],
    diagram: "WEB",
  },
  {
    id: "mobile-apps",
    index: "03",
    title: "Mobile Application Development",
    summary: "Cross-platform mobile experiences designed for real-world users.",
    detail:
      "Native-feeling mobile products built once and shipped to every device. We focus on offline resilience, smooth interactions and the small details that make an app feel trustworthy in the hand.",
    icon: Smartphone,
    tech: ["Flutter", "React Native", "Dart", "Firebase"],
    diagram: "MOB",
  },
  {
    id: "automation",
    index: "04",
    title: "Business Process Automation",
    summary: "Transform manual processes into streamlined digital workflows.",
    detail:
      "We map the work your team repeats by hand and replace it with reliable, observable automation — reducing errors, freeing people for higher-value work, and giving you a single source of truth.",
    icon: Workflow,
    tech: ["Workflow Engines", "APIs", "Webhooks", "Background Jobs"],
    diagram: "AUT",
  },
  {
    id: "data-dashboards",
    index: "05",
    title: "Data & Dashboard Solutions",
    summary: "Transform business data into useful dashboards, insights and reporting.",
    detail:
      "We turn fragmented data into clear, decision-ready dashboards. Real-time metrics, historical trends and the right level of detail — presented so the people who need it can act without a data team.",
    icon: BarChart3,
    tech: ["PostgreSQL", "Supabase", "Charts", "ETL"],
    diagram: "DATA",
  },
];
