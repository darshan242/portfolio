export const profile = {
  name: "Darshan",
  fullName: "Darshan Mardane",
  role: "Full Stack Developer",
  eyebrow: "Hey, I’m a",
  summary:
    "I build React interfaces. 2.3 years as an SDE, with a BE in Information Technology.",
  years: 2.3,
  degree: "BE in Information Technology",
  /** Fill these in later. Empty values stay off the page. */
  roleTitle: "",
  company: "",
};

export const focus = [
  {
    number: "01",
    title: "React interfaces",
    text: "Components, state, and the screens people actually use.",
  },
  {
    number: "02",
    title: "UI engineering",
    text: "Layout, type, and interaction that stay consistent.",
  },
  {
    number: "03",
    title: "Responsive layout",
    text: "Interfaces that hold together from phone to desktop.",
  },
  {
    number: "04",
    title: "Motion",
    text: "Scroll and hover animation that stays readable.",
  },
];

export type Project = {
  name: string;
  summary: string;
  stack: string;
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Claud Chef",
    summary:
      "RecipeGenie, an AI recipe generator. React, Motion, and Hugging Face inference.",
    stack: "React, Motion, Hugging Face",
    repo: "https://github.com/darshan242/claud-chef",
    live: "https://claud-chef.vercel.app",
  },
  {
    name: "Assembly Endgame",
    summary: "A word game. Guess the word within 8 attempts.",
    stack: "React, Vite",
    repo: "https://github.com/darshan242/assembly-endgame",
    live: "https://assembly-endgame-five-gold.vercel.app",
  },
  {
    name: "Tenzies",
    summary:
      "Roll until every die matches. Click a die to freeze it between rolls.",
    stack: "React, Vite",
    repo: "https://github.com/darshan242/tenzies-game",
    live: "https://tenzies-game-one-khaki.vercel.app",
  },
  {
    name: "Throughline",
    summary:
      "An MCP that stores decisions across sessions and uses that context to guide the next one.",
    stack: "MCP",
  },
];

export const earlierWork: Project[] = [
  {
    name: "Credit card fraud detection",
    summary: "A machine-learning notebook.",
    stack: "Jupyter",
    repo: "https://github.com/darshan242/Credit_Card_Fraud_Detection_using_ML",
  },
  {
    name: "Student database",
    summary: "A Python platform for student records.",
    stack: "Python",
    repo: "https://github.com/darshan242/Student_Database_Handling_Platform_Using_Python",
  },
  {
    name: "Notepad",
    summary: "A Java notepad.",
    stack: "Java",
    repo: "https://github.com/darshan242/CodeClause_Task2",
  },
  {
    name: "PDF splitter",
    summary: "A Java tool that splits PDFs.",
    stack: "Java",
    repo: "https://github.com/darshan242/CodeClause_Task1",
  },
];

export type Social = {
  name: string;
  href: string;
};

/** Paste profile URLs here. Blank entries stay visible and do not navigate. */
export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/darshan242" },
  { name: "WhatsApp", href: "" },
  { name: "Instagram", href: "https://instagram.com/darshan_m_242" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/darshan-mardane-a6071b21a",
  },
  { name: "X", href: "https://x.com/DarshanMardane" },
  { name: "Email", href: "" },
];
