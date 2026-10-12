// Skills grouped by category. Each skill has an icon shown
// on the same line, immediately before its name.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.simpleicons.org";

const skillsData = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg`, invert: true }
    ]
  },
  {
    category: "Database & Analytics",
    items: [
      { name: "SQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "Power BI", icon: `${SIMPLE}/powerbi/F2C811` }
    ]
  },
  {
    category: "AI-Assisted Development Tools",
    items: [
      // No official Devicon/SimpleIcon; rendered as letter badges (never broken).
      { name: "Cline", badge: "C" },
      { name: "OpenCode", badge: "O" },
      { name: "CLI-based AI coding tools", badge: ">_" }
    ]
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, invert: true }
    ]
  },
  {
    category: "Deployment & Hosting",
    items: [
      { name: "Vercel", icon: `${SIMPLE}/vercel/white` },
      { name: "Netlify", icon: `${SIMPLE}/netlify/00C7B7` }
    ]
  },
  {
    category: "DevOps & Workflows",
    items: [
      { name: "CLI tools", badge: "$" },
      { name: "Development workflows", badge: "{}" },
      { name: "DevOps practices", badge: "∞" }
    ]
  }
];

module.exports = skillsData;
