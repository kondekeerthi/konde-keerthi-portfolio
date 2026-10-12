import learningData from "../../data/learning";

export const metadata = { title: "Currently Learning — Konde Keerthi" };

export default function LearningPage() {
  return (
    <div className="container">
      <div className="page-head">
        <h1>Currently Learning</h1>
        <p className="lead">
          Learning interests — what I&apos;m actively exploring, not verified expertise.
        </p>
      </div>
      <div className="grid grid-3">
        {learningData.map((item) => (
          <article key={item.title} className="card">
            <h3 className="card-title">
              <span aria-hidden="true">{item.icon} </span>
              {item.title}
            </h3>
            <p className="card-text">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
