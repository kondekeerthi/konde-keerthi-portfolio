import Button from "../../components/Button";

export const metadata = { title: "About — Konde Keerthi" };

export default function AboutPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>About Me</h1>
        <p className="lead">
          AI Developer focused on practical, reliable software for real-world needs.
        </p>
      </div>
      <div className="grid grid-2">
        <section className="card" aria-label="Profile">
          <h2 className="card-title">Profile</h2>
          <ul className="profile-list">
            <li>
              <strong>Current role:</strong> AI Developer at PCS, Police Department (Chief
              Office).
            </li>
            <li>
              <strong>Education:</strong> B.Tech in Electronics and Communication Engineering.
            </li>
            <li>
              <strong>Focus:</strong> AI-assisted software development with clean, reusable
              components.
            </li>
            <li>
              <strong>What I build:</strong> practical web applications and data-driven
              solutions.
            </li>
            <li>
              <strong>How I work:</strong> continuous learning, problem-solving, Git-based
              workflows, and CLI-driven development.
            </li>
          </ul>
        </section>
        <section className="card" aria-label="Interests">
          <h2 className="card-title">Interests</h2>
          <ul className="profile-list">
            <li>AI-assisted development and AI-powered applications</li>
            <li>Web development with Next.js, HTML, and CSS</li>
            <li>Data analytics with SQL and Power BI</li>
            <li>Automation and DevOps workflows</li>
            <li>Deployment with Vercel and Netlify</li>
          </ul>
          <div className="card-actions" style={{ marginTop: "1rem" }}>
            <Button href="/skills">View My Skills</Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
