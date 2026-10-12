import siteConfig from "../data/siteConfig";

function isPlaceholder(url) {
  return !url || url === "#" || url.includes("YOUR_");
}

export default function SocialLinks({ showEmail = true }) {
  const githubReady = !siteConfig.githubUrl.includes("YOUR_");
  return (
    <div className="social-links">
      {githubReady ? (
        <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub Profile
        </a>
      ) : (
        <span className="btn btn-secondary btn-disabled" title="Set githubUsername in siteConfig.js">
          GitHub (configure username)
        </span>
      )}
      {!isPlaceholder(siteConfig.linkedinUrl) ? (
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          LinkedIn
        </a>
      ) : (
        <span className="btn btn-secondary btn-disabled" title="Set linkedinUrl in siteConfig.js">
          LinkedIn (not configured)
        </span>
      )}
      {showEmail && !isPlaceholder(siteConfig.email) ? (
        <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost">
          {siteConfig.email}
        </a>
      ) : null}
    </div>
  );
}
