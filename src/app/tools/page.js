import ToolCard from "../../components/ToolCard";
import toolsData from "../../data/tools";

export const metadata = { title: "Tools — Konde Keerthi" };

export default function ToolsPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Tools</h1>
        <p className="lead">The tools I use for AI-assisted development and shipping web apps.</p>
      </div>
      <div className="grid grid-3">
        {toolsData.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
