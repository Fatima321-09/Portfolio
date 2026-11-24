const groups = [
  ["Frontend", [["React.js", "R"], ["JavaScript (ES6+)", "JS"], ["HTML5", "H5"], ["CSS3", "C3"], ["Tailwind CSS", "TW"], ["React Router", "RR"], ["Vite", "V"]]],
  ["Backend", [["Node.js", "N"], ["Express.js", "EX"], ["MongoDB", "DB"], ["Python (Flask)", "FL"], ["SQLite", "SQL"], ["REST APIs", "API"], ["JWT Auth", "JWT"]]],
  ["AI (basic)", [["Ollama", "OL"], ["LangChain", "LC"], ["RAG", "RAG"], ["MCP", "MCP"]]],
  ["Tools & Languages", [["Git/GitHub", "Git"], ["Postman", "PM"], ["Python", "PY"], ["C", "C"], ["C++", "C++"]]],
];
export default function Skills() {
  return <section id="skills"><div className="projects-header"><div><div className="section-label">Toolbox</div><h2 className="section-title">Skills</h2></div></div><div className="skills-grid">{groups.flatMap(([group, skills]) => skills.map(([name, icon]) => <div className="skill-card" key={`${group}-${name}`}><span className="skill-icon" aria-hidden="true">{icon}</span><div className="skill-name">{name}</div><div className="skill-level">{group}</div></div>))}</div></section>;
}
