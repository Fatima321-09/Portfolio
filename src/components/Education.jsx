const education = [
  {
    degree: "BS Computer Science",
    school: "Current Degree",
    period: "2023 - 2027",
    description: "Current GPA: 3.6 / 4.0.",
    courses: ["Computer Science", "Databases", "Web Development", "OOP"],
  },
  {
    degree: "Intermediate",
    school: "College",
    period: "2020 - 2022",
    description: "Completed intermediate studies with a B+ grade.",
    courses: ["Biology", "Ma", "English"],
  },
  {
    degree: "Matric",
    school: "School",
    period: "2018 - 2020",
    description: "Completed matriculation with an A grade.",
    courses: ["Science", "Mathematics", "English"],
  },
];

const experience = [
  {
    date: "2024 - 2025",
    role: "Freelance MERN Developer",
    company: "Freelance Work",
    description:
      "Engineered high-performance web applications using the MERN stack and RESTful APIs.",
    tags: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
  },
  {
    date: "Sep 2024 - Oct 2024",
    role: "Frontend Developer",
    company: "Frontend Development",
    description:
      "Developed responsive web interfaces using HTML5, CSS, and JavaScript, ensuring cross-browser compatibility and mobile-first responsiveness.",
    tags: ["HTML5", "CSS", "JavaScript", "Responsive Design"],
  },
];

export default function Education() {
  return (
    <>
      <section id="education">
        <div className="projects-header">
          <div>
            <div className="section-label">Learning Path</div>
            <h2 className="section-title">Education</h2>
          </div>
        </div>

        <div className="edu-grid">
          {education.map((item) => (
            <article className="edu-card" key={item.degree}>
              <div className="edu-icon" aria-hidden="true">
                //
              </div>
              <h3 className="edu-degree">{item.degree}</h3>
              <div className="edu-school">{item.school}</div>
              <div className="edu-period">{item.period}</div>
              <p className="edu-desc">{item.description}</p>
              <div className="edu-courses">
                {item.courses.map((course) => (
                  <span className="edu-course" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="projects-header">
          <div>
            <div className="section-label">Practice</div>
            <h2 className="section-title">Experience</h2>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-role">{item.role}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-desc">{item.description}</p>
              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span className="tl-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
