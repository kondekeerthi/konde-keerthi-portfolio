// Central site configuration.
const siteConfig = {
  name: "Konde Keerthi",
  shortName: "KK",
  role: "programmer",
  title: "AI Developer | Web Development | Data Analytics",
  organization: "PCS, Police Department (Chief Office)",
  education: "B.Tech in Electronics and Communication Engineering",
  githubUsername: "kondekeerthi",
  get githubUrl() {
    return `https://github.com/${this.githubUsername}`;
  },
  email: "kkeerthireddy1999@gmail.com",
  portfolioUrl: "https://konde-keerthi-portfolio.vercel.app",
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
