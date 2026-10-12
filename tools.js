const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.simpleicons.org";

// AI-assisted development workflow tools (GitHub intentionally excluded here;
// it lives in the Contact section). No external website links.
const toolsData = [
  {
    name: "Cline",
    badge: "C",
    description: "AI coding assistant for VS Code that plans, writes, and edits code with your approval."
  },
  {
    name: "OpenCode",
    badge: "O",
    description: "Open-source terminal-based AI coding agent for building software with language models."
  },
  {
    name: "Git",
    icon: `${DEVICON}/git/git-original.svg`,
    description: "Distributed version control system for tracking code changes and collaboration."
  },
  {
    name: "Next.js",
    icon: `${DEVICON}/nextjs/nextjs-original.svg`,
    invert: true,
    description: "React framework for production-grade web apps with App Router and server rendering."
  },
  {
    name: "Vercel",
    icon: `${SIMPLE}/vercel/white`,
    description: "Cloud platform for deploying Next.js apps with previews and edge network."
  },
  {
    name: "Netlify",
    icon: `${SIMPLE}/netlify/00C7B7`,
    description: "Hosting platform for static sites and serverless functions with continuous deploy."
  },
  {
    name: "CLI Development Tools",
    badge: ">_",
    description: "Terminal-first workflow: package managers, Git CLI, linters, and automation scripts."
  }
];

module.exports = toolsData;
