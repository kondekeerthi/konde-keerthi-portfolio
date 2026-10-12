import Link from "next/link";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-badge" aria-hidden="true">
            {siteConfig.shortName}
          </span>
          <p>
            <strong>{siteConfig.name}</strong> — {siteConfig.title}
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-copy">
          © {year} {siteConfig.name}. Built with Next.js. Deployed on Vercel or Netlify.
        </p>
      </div>
    </footer>
  );
}
