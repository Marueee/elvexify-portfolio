export interface Value {
  index: string;
  title: string;
  description: string;
}

export const VALUES: Value[] = [
  {
    index: "01",
    title: "Build With Purpose",
    description:
      "We start from the problem, not the technology. Every feature earns its place by solving something real.",
  },
  {
    index: "02",
    title: "Users First",
    description:
      "Software is for people. We design for comprehension and respect the attention of everyone who uses what we build.",
  },
  {
    index: "03",
    title: "Engineer With Discipline",
    description:
      "Clean architecture, tested systems and maintainable code. Quality is not a phase — it is how we work.",
  },
  {
    index: "04",
    title: "Learn Continuously",
    description:
      "Technology moves; so do we. We invest in learning so the solutions we ship stay ahead of the curve.",
  },
  {
    index: "05",
    title: "Deliver Real Impact",
    description:
      "A project is only done when it changes something for the better. We measure success by outcomes, not output.",
  },
];

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "Understand the problem, the users and the business context before a line of code is written.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "Translate messy requirements into a clear, scoped solution everyone can align on.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Shape the experience and the system architecture together — form and structure in one pass.",
  },
  {
    index: "04",
    title: "Develop",
    description:
      "Build the solution with clean, tested, maintainable engineering.",
  },
  {
    index: "05",
    title: "Test",
    description:
      "Validate quality and reliability under real conditions, not just happy paths.",
  },
];

/** Compact process used in the intro value-proposition diagram. */
export const INTRO_FLOW: string[] = [
  "Problem",
  "Discover",
  "Design",
  "Develop",
  "Deploy",
  "Improve",
];
