export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  /** visual accent used for the generated preview */
  accent: "electric" | "violet" | "cyan";
  metricValue: string;
  metricLabel: string;
}

export const PROJECTS: Project[] = [
  {
    id: "enterprise-ops",
    name: "[PROJECT NAME]",
    client: "[CLIENT / ORGANIZATION]",
    category: "Enterprise Systems",
    summary:
      "[PROJECT DESCRIPTION — a one-line summary of what was built and why it mattered.]",
    problem:
      "[Describe the business problem: fragmented systems, manual processes, scaling bottlenecks, or data silos that made operations slow or error-prone.]",
    solution:
      "[Describe the engineered solution: architecture, key systems, integrations, and the experience delivered.]",
    result:
      "[Key outcome the client experienced. Use an editable placeholder such as '[X% faster processing]' rather than a fabricated figure.]",
    technologies: ["Next.js", "Laravel", "PostgreSQL", "REST APIs"],
    accent: "electric",
    metricValue: "[00%]",
    metricLabel: "[improvement — e.g. faster processing]",
  },
  {
    id: "ops-automation",
    name: "[PROJECT NAME]",
    client: "[CLIENT / ORGANIZATION]",
    category: "Business Automation",
    summary:
      "[PROJECT DESCRIPTION — what manual workflow was automated and the impact on the team.]",
    problem:
      "[Describe the manual, repetitive process that consumed team time and introduced errors.]",
    solution:
      "[Describe the automation layer, integrations and dashboards built to replace it.]",
    result:
      "[Outcome placeholder, e.g. '[X hours/month saved]' — do not invent a real number.]",
    technologies: ["Workflow Engine", "Webhooks", "Node.js", "Supabase"],
    accent: "violet",
    metricValue: "[00h]",
    metricLabel: "[time saved per month]",
  },
  {
    id: "platform-web",
    name: "[PROJECT NAME]",
    client: "[CLIENT / ORGANIZATION]",
    category: "Digital Platform",
    summary:
      "[PROJECT DESCRIPTION — the web platform or product delivered and who it served.]",
    problem:
      "[Describe the gap the platform filled — an underserved workflow, a broken experience, or a market need.]",
    solution:
      "[Describe the platform: frontend, backend, data model and integrations delivered.]",
    result:
      "[Outcome placeholder, e.g. '[X] active users' — replace with real data when available.]",
    technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    accent: "cyan",
    metricValue: "[0K]",
    metricLabel: "[active users]",
  },
  {
    id: "mobile-product",
    name: "[PROJECT NAME]",
    client: "[CLIENT / ORGANIZATION]",
    category: "Mobile Application",
    summary:
      "[PROJECT DESCRIPTION — the mobile product and the real-world users it served.]",
    problem:
      "[Describe the constraint users faced — offline needs, slow legacy tools, or no mobile access at all.]",
    solution:
      "[Describe the cross-platform app, its offline behaviour and the experience delivered.]",
    result:
      "[Outcome placeholder, e.g. '[X.X★] app rating' — replace with real data when available.]",
    technologies: ["Flutter", "Firebase", "Dart", "REST APIs"],
    accent: "electric",
    metricValue: "[0.0★]",
    metricLabel: "[app store rating]",
  },
];
