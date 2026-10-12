"use client";

import { useState } from "react";
import siteConfig from "../../data/siteConfig";

function StatImage({ src, alt, linkHref }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="fallback" role="status">
        <p>
          <strong>Statistics unavailable.</strong>
        </p>
        <p>
          Could not load “{alt}” from the external stats service. Check your connection,
          verify the GitHub username in <code>src/data/siteConfig.js</code>, or open the
          profile directly.
        </p>
      </div>
    );
  }
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="stats-img"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
  return linkHref ? (
    <a href={linkHref} target="_blank" rel="noopener noreferrer">
      {img}
    </a>
  ) : (
    img
  );
}

export default function GitHubPage() {
  const username = siteConfig.githubUsername;
  const isPlaceholder = !username || username.includes("YOUR_");
  const profileUrl = siteConfig.githubUrl;

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`;
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`;
  const streakUrl = `https://streak-stats.demolab.com?user=${username}&theme=tokyonight`;

  return (
    <div className="container">
      <div className="page-head">
        <h1>GitHub Statistics</h1>
        <p className="lead">
          Live statistics loaded from external services — no numbers are invented here.
        </p>
      </div>

      {isPlaceholder ? (
        <div className="fallback" role="status" style={{ marginBottom: "1.5rem" }}>
          <p>
            <strong>GitHub username not configured yet.</strong>
          </p>
          <p>
            Open <code>src/data/siteConfig.js</code> and set{" "}
            <code>githubUsername</code> to your real username (e.g.{" "}
            <code>&quot;kondekeerthi&quot;</code>). The cards below will start working
            automatically.
          </p>
        </div>
      ) : null}

      <div className="grid grid-2">
        <section className="card" aria-label="Profile overview">
          <h2 className="card-title">Profile overview</h2>
          <p className="card-text">
            Username: <strong>{username}</strong>
          </p>
          <div className="card-actions">
            {isPlaceholder ? (
              <span className="btn btn-secondary btn-disabled">
                Configure username first
              </span>
            ) : (
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open GitHub Profile
              </a>
            )}
          </div>
        </section>
        <section className="card" aria-label="Statistics card">
          <h2 className="card-title">Statistics</h2>
          {isPlaceholder ? (
            <div className="fallback">Add your username to load live stats.</div>
          ) : (
            <StatImage src={statsUrl} alt={`${username} GitHub statistics`} linkHref={profileUrl} />
          )}
        </section>
        <section className="card" aria-label="Most used languages">
          <h2 className="card-title">Most-used languages</h2>
          {isPlaceholder ? (
            <div className="fallback">Add your username to load language stats.</div>
          ) : (
            <StatImage src={langsUrl} alt={`${username} most-used languages`} linkHref={profileUrl} />
          )}
        </section>
        <section className="card" aria-label="Contribution streak">
          <h2 className="card-title">Contribution streak</h2>
          {isPlaceholder ? (
            <div className="fallback">Add your username to load the streak card.</div>
          ) : (
            <StatImage src={streakUrl} alt={`${username} contribution streak`} linkHref={profileUrl} />
          )}
        </section>
      </div>
    </div>
  );
}
