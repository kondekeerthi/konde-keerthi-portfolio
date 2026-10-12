// Central site configuration.
// TODO: Replace every "YOUR_..." / placeholder value with your real details.
const siteConfig = {
  name: "Konde Keerthi",
  shortName: "KK",
  role: "programmer",
  title: "AI Developer | Web Development | Data Analytics",
  organization: "PCS, Police Department (Chief Office)",
  education: "B.Tech in Electronics and Communication Engineering",
  // TODO: replace with your real GitHub username, e.g. "kondekeerthi"
  githubUsername: "YOUR_GITHUB_USERNAME",
  get githubUrl() {
    return `https://github.com/${this.githubUsername}`;
  },
  // TODO: replace with your real profiles
  linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  // TODO: replace with your real professional email
  email: "YOUR_EMAIL@example.com",
  portfolioUrl: "https://YOUR_DEPLOYED_SITE.vercel.app",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/tools", label: "Tools" },
    { href: "/learning", label: "Learning" },
    { href: "/github", label: "GitHub" },
    { href: "/contact", label: "Contact" }
  ]
};

module.exports = siteConfig;
