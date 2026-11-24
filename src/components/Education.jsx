const education = [{
  degree: "Bachelor of Computer Science (BSCS)",
  school: "Lahore College for Women University (LCWU)",
  period: "Expected June 2027",
  description: "GPA: 3.6 / 4.0",
  courses: ["Databases", "Web Development", "OOP"],
}, {
  degree: "Intermediate",
  school: "Concordia College",
  period: "2020 - 2022",
  description: "Completed intermediate with a B+ grade.",
  courses: ["Biology", "Mathematics", "English"],
}, {
  degree: "Matriculation",
  school: "Adabistan-e-Soophia",
  period: "2018 - 2020",
  description: "Completed matriculation with an A grade.",
  courses: ["Science", "Mathematics", "English"],
}];
const experience = [
  { date: "Jun 2026 - Aug 2026", role: "Artificial Intelligence Intern", company: "Software Systems Research Laboratory (SSRL), KICS, UET Lahore", description: "Worked on AI/ML, Generative AI and MCP prototypes in a team of 4 under professional supervision, using Git/GitHub.", tags: ["AI/ML", "Generative AI", "MCP", "Git"] },
  { date: "Sep 2024 - Oct 2024", role: "Frontend Developer", company: "Code Alpha", description: "Built responsive, cross-browser user interfaces with HTML5, CSS3 and JavaScript, collaborating via Git/GitHub and code review.", tags: ["HTML5", "CSS3", "JavaScript", "Git"] },
];
const certifications = ["JavaScript Fullstack (MEAN/MERN), KICS, UET Lahore, May 2026", "Frontend Developer, Code Alpha, Oct 2024", "Python Developer, SoloLearn, Jan 2026"];
export default function Education() {
  return <><section id="education"><div className="projects-header"><div><div className="section-label">Learning Path</div><h2 className="section-title">Education</h2></div></div><div className="edu-grid">{education.map((item) => <article className="edu-card" key={item.degree}><div className="edu-icon" aria-hidden="true">//</div><h3 className="edu-degree">{item.degree}</h3>{!item.school.startsWith("[") && <div className="edu-school">{item.school}</div>}<div className="edu-period">{item.period}</div><p className="edu-desc">{item.description}</p><div className="edu-courses">{item.courses.map((course) => <span className="edu-course" key={course}>{course}</span>)}</div></article>)}</div></section><section id="experience"><div className="projects-header"><div><div className="section-label">Practice</div><h2 className="section-title">Experience</h2></div></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><div className="timeline-dot"></div><div className="timeline-date">{item.date}</div><h3 className="timeline-role">{item.role}</h3>{item.company && <div className="timeline-company">{item.company}</div>}<p className="timeline-desc">{item.description}</p><div className="timeline-tags">{item.tags.map((tag) => <span className="tl-tag" key={tag}>{tag}</span>)}</div></article>)}</div></section><section><div className="projects-header"><div><div className="section-label">Credentials</div><h2 className="section-title">Certifications</h2></div></div><div className="timeline">{certifications.map((item) => <article className="timeline-item" key={item}><div className="timeline-dot"></div><h3 className="timeline-role">{item}</h3></article>)}</div></section></>;
}


