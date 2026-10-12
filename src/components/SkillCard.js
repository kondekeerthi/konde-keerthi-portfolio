export function TechIcon({ icon, badge, name, invert = false }) {
  if (icon) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={icon}
        alt={`${name} logo`}
        width={28}
        height={28}
        loading="lazy"
        className={`tech-icon${invert ? " invert" : ""}`}
      />
    );
  }
  return (
    <span className="tech-badge" aria-hidden="true">
      {badge || name.charAt(0)}
    </span>
  );
}

export default function SkillCard({ category, items }) {
  return (
    <section className="card" aria-label={category}>
      <h3 className="card-title">{category}</h3>
      <ul className="skill-list">
        {items.map((skill) => (
          <li key={skill.name} className="skill-row">
            <TechIcon icon={skill.icon} badge={skill.badge} name={skill.name} invert={skill.invert} />
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
