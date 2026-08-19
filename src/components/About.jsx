export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        {/* Left Column: Bio and Tech Pills */}
        <div className="fade-up">
          <div className="section-label">Who I Am</div>
          <h2 className="section-title">
            Passionate about
            <br />
            <span style={{ color: "var(--blue)" }}>Clean Code</span>
          </h2>
          <p className="about-bio">
            I'm a <strong>MERN full-stack developer</strong> with a love for
            building products that are both visually stunning and technically
            robust. From crafting pixel-perfect React UIs to architecting
            scalable Node.js APIs, I do it all.
          </p>
          <p className="about-bio">
            When I'm not coding, I'm exploring new frameworks, contributing to
            open source, or thinking about how to make the web a better place.
          </p>

          <div className="tech-pills">
            <span className="tech-pill">MongoDB</span>
            <span className="tech-pill">Express.js</span>
            <span className="tech-pill">React</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Redux</span>
            <span className="tech-pill">REST APIs</span>
            <span className="tech-pill">GraphQL</span>
            <span className="tech-pill">Docker</span>
            <span className="tech-pill">AWS</span>
            <span className="tech-pill">Git</span>
            <span className="tech-pill">TailwindCSS</span>
          </div>
        </div>

        {/* Right Column: Image and Skill Bars */}
        <div className="fade-up" style={{ transitionDelay: ".15s" }}>
          <div className="about-img-wrap" style={{ margin: "0 auto 2rem" }}>
            <div className="about-img-frame">
              <span style={{ position: "relative", zIndex: 2 }}>👨‍💻</span>
              <div className="about-img-corner tl"></div>
              <div className="about-img-corner br"></div>
            </div>
          </div>

          <div className="about-skills-wrap">
            <div className="skill-bar-group">
              <div className="skill-bar-head">
                <span>React / Next.js</span>
                <span>95%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="skill-bar-group">
              <div className="skill-bar-head">
                <span>Node.js / Express</span>
                <span>90%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill-bar-group">
              <div className="skill-bar-head">
                <span>MongoDB / Mongoose</span>
                <span>88%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="skill-bar-group">
              <div className="skill-bar-head">
                <span>TypeScript</span>
                <span>85%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill-bar-group">
              <div className="skill-bar-head">
                <span>DevOps / Docker</span>
                <span>72%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: "72%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
