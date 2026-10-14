export const profile = {
  name: "Darshan",
  fullName: "Darshan Mardane",
  role: "Full Stack Developer",
  eyebrow: "Hey, I’m a",
  summary:
    "I build MERN products. React on the screen, Node and Express behind it, MongoDB for the data. 2.3 years as an Software Engineer.",
  years: 2.3,
  degree: "BE in Information Technology",
  /** Fill these in later. Empty values stay off the page. */
  roleTitle: "Software Engineer",
  company: "Mobisoft Infotech",
};

export const focus = [
  {
    number: "01",
    title: "React Interfaces",
    text: "Components, state, and the screens people actually use.",
  },
  {
    number: "02",
    title: "Node & Express",
    text: "APIs that take a request and return something the UI can trust.",
  },
  {
    number: "03",
    title: "MongoDB",
    text: "Data shaped for the product, not a pile of fields.",
  },
  {
    number: "04",
    title: "The Full Path",
    text: "A change on the screen that reaches the database and comes back clean.",
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
    name: "Virtual Mouse (OpenCV)",
    summary:
      "A virtual mouse using OpenCV and MediaPipe for hand gesture recognition.",
    stack: "Python, OpenCV, MediaPipe, PyAutoGUI, PyCaw",
    repo: "https://github.com/darshan242/virtual-mouse",
  },
  {
    name: "Throughline",
    summary:
      "An MCP that stores decisions across sessions and uses that context to guide the next one.",
    stack: "MCP",
    repo: "https://github.com/darshan242/tokenizer-project",
  },
  {
    name: "Mind Manifestation Design",
    summary: "A WordPress website for a construction company.",
    stack: "WordPress",
    live: "https://mindmanifestation.co.in",
  },
  {
    name: "Assembly Endgame",
    summary:
      "A word game. Guess the word within 8 attempts to save the assembly language from extinction.",
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

export type Skill = {
  name: string;
  score: number;
};

/** Every score sits between 80 and 90. */
export const skills: Skill[] = [
  { name: "React", score: 90 },
  { name: "JavaScript", score: 89 },
  { name: "TypeScript", score: 86 },
  { name: "HTML", score: 90 },
  { name: "CSS", score: 88 },
  { name: "Node.js", score: 85 },
  { name: "Express", score: 83 },
  { name: "MongoDB", score: 82 },
  { name: "Python", score: 84 },
  { name: "Java", score: 82 },
  { name: "Git", score: 88 },
  { name: "GitHub", score: 86 },
  { name: "WordPress", score: 80 },
];

export type Social = {
  name: string;
  href: string;
};

/** Paste profile URLs here. Blank entries stay visible and do not navigate. */
export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/darshan242" },
  { name: "WhatsApp", href: "https://wa.me/918767037115" },
  { name: "Instagram", href: "https://instagram.com/darshan_m_242" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/darshan-mardane-a6071b21a",
  },
  { name: "X", href: "https://x.com/DarshanMardane" },
  { name: "Email", href: "mailto:darshanmardane242@gmail.com" },
];
