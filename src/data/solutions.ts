export interface Solution {
  index: string;
  title: string;
  description: string;
}

export const SOLUTIONS: Solution[] = [
  {
    index: "01",
    title: "Web Platforms",
    description:
      "Production web applications built around [CLIENT / ORGANIZATION] — fast, scalable and maintainable from day one.",
  },
  {
    index: "02",
    title: "Mobile Products",
    description:
      "Cross-platform mobile experiences designed for real users, shipped to every device from a single codebase.",
  },
  {
    index: "03",
    title: "Cloud & DevOps",
    description:
      "Reliable infrastructure, CI/CD and observability so [PROJECT NAME] stays online and easy to ship.",
  },
  {
    index: "04",
    title: "Data & AI",
    description:
      "Turn fragmented data into dashboards, insights and automation that the right people can actually use.",
  },
  {
    index: "05",
    title: "Integrations",
    description:
      "Connect your existing systems, APIs and platforms so information flows where it is needed automatically.",
  },
  {
    index: "06",
    title: "Support & Evolution",
    description:
      "The launch is the start. We measure, learn and improve the system from real-world feedback over time.",
  },
];
