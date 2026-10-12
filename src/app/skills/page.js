import SkillCard from "../../components/SkillCard";
import skillsData from "../../data/skills";

export const metadata = { title: "Skills — Konde Keerthi" };

export default function SkillsPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Skills</h1>
        <p className="lead">
          Technologies and workflows I use. Each icon is shown on the same line,
          immediately before its name.
        </p>
      </div>
      <div className="grid grid-2">
        {skillsData.map((group) => (
          <SkillCard key={group.category} category={group.category} items={group.items} />
        ))}
      </div>
    </div>
  );
}
