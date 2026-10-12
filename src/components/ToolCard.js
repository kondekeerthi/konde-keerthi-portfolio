import { TechIcon } from "./SkillCard";

export default function ToolCard({ tool }) {
  return (
    <article className="card tool-card">
      <div className="tool-header">
        <TechIcon icon={tool.icon} badge={tool.badge} name={tool.name} invert={tool.invert} />
        <h3 className="card-title">{tool.name}</h3>
      </div>
      <p className="card-text">{tool.description}</p>
      {tool.url ? (
        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="card-link">
          Official website →
        </a>
      ) : (
        <span className="card-muted">Built-in / workflow tool</span>
      )}
    </article>
  );
}
