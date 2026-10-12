import siteConfig from "../../data/siteConfig";

export const metadata = { title: "Contact — Konde Keerthi" };

function isPlaceholder(url) {
  return !url || url === "#" || url.includes("YOUR_");
}

export default function ContactPage() {
  const cards = [
    {
      title: "GitHub",
      icon: "🐙",
      text: isPlaceholder(siteConfig.githubUrl) ? "Not configured yet" : siteConfig.githubUrl,
      href: isPlaceholder(siteConfig.githubUrl) ? null : siteConfig.githubUrl,
      note: "Set githubUsername in src/data/siteConfig.js"
    },
    {
      title: "LinkedIn",
      icon: "💼",
      text: isPlaceholder(siteConfig.linkedinUrl) ? "Not configured yet" : siteConfig.linkedinUrl,
      href: isPlaceholder(siteConfig.linkedinUrl) ? null : siteConfig.linkedinUrl,
      note: "Set linkedinUrl in src/data/siteConfig.js"
    },
    {
      title: "Email",
      icon: "✉️",
      text: isPlaceholder(siteConfig.email) ? "Not configured yet" : siteConfig.email,
      href: isPlaceholder(siteConfig.email) ? null : `mailto:${siteConfig.email}`,
      note: "Set email in src/data/siteConfig.js"
    },
    {
      title: "Portfolio",
      icon: "🌐",
      text: isPlaceholder(siteConfig.portfolioUrl) ? "Deploy first, then update" : siteConfig.portfolioUrl,
      href: isPlaceholder(siteConfig.portfolioUrl) ? null : siteConfig.portfolioUrl,
      note: "Set portfolioUrl after deploying to Vercel/Netlify"
    }
  ];

  return (
    <div className="container">
      <div className="page-head">
        <h1>Contact</h1>
        <p className="lead">
          Professional contact links. Placeholders are shown honestly — no details invented.
          No fake contact form: use the links below once configured.
        </p>
      </div>
      <div className="grid grid-2 contact-grid">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h3 className="card-title">
              <span aria-hidden="true">{card.icon} </span>
              {card.title}
            </h3>
            {card.href ? (
              <a href={card.href} target={card.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
                {card.text}
              </a>
            ) : (
              <>
                <p className="card-text">{card.text}</p>
                <p className="card-muted">{card.note}</p>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
