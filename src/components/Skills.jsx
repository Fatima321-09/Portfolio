const skills = [
  ["JavaScript", "Advanced", "JS"],
  ["C++", "Intermediate", "C++"],
  ["React", "Advanced", "R"],
  ["Python", "Intermediate", "PY"],
  ["Tailwind CSS", "Advanced", "TW"],
  ["Node.js", "Advanced", "N"],
  ["MongoDB", "Intermediate", "DB"],
  ["Git", "Intermediate", "Git"],
  ["GitHub", "Intermediate", "GH"],
  ["Express", "Advanced", "EX"],
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="projects-header">
        <div>
          <div className="section-label">Toolbox</div>
          <h2 className="section-title">Skills</h2>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map(([name, level, icon]) => (
          <div className="skill-card" key={name}>
            <span className="skill-icon" aria-hidden="true">
              {icon}
            </span>
            <div className="skill-name">{name}</div>
            <div className="skill-level">{level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
