import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import siteConfig from "../data/siteConfig";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero" aria-label="Introduction">
        <h1>
          Hi, I&apos;m <span className="gradient-text">{siteConfig.name}.</span>
        </h1>
        <p className="subtitle">{siteConfig.title}</p>
        <p>
          I work as a {siteConfig.role} at {siteConfig.organization}. I hold a{" "}
          {siteConfig.education} and I build practical web applications and data-driven
          solutions with AI-assisted development, automation, and modern DevOps workflows.
        </p>
        <div className="hero-actions">
          <Button href="/skills">View My Skills</Button>
          <Button href="/contact" variant="secondary">
            Contact Me
          </Button>
        </div>
        <SocialLinks />
      </section>

      <section style={{ marginTop: "2rem" }} aria-label="Highlights">
        <div className="grid grid-3">
          <div className="card">
            <h3 className="card-title">AI-Assisted Development</h3>
            <p className="card-text">
              Building faster and cleaner with OpenCode, Cline, and CLI-based AI coding tools.
            </p>
            <a className="card-link" href="/tools">
              See my tools →
            </a>
          </div>
          <div className="card">
            <h3 className="card-title">Web &amp; Data</h3>
            <p className="card-text">
              Next.js, HTML, CSS for the front end; SQL and Power BI for data analytics.
            </p>
            <a className="card-link" href="/skills">
              See my skills →
            </a>
          </div>
          <div className="card">
            <h3 className="card-title">Currently Learning</h3>
            <p className="card-text">
              AI-powered apps, deployment, automation, and DevOps workflows.
            </p>
            <a className="card-link" href="/learning">
              See what I&apos;m learning →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
