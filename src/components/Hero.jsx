import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <p className="hero-greeting fade-up">Available for work</p>

        <h1 className="hero-name fade-up" style={{ transitionDelay: ".1s" }}>
          <span>Fatima</span>
          <br />
          <span className="highlight glitch" data-text="Asif">
            Asif
          </span>
        </h1>

        <p className="hero-role fade-up" style={{ transitionDelay: ".2s" }}>
          <span className="hero-role-text">MERN Full Stack Developer</span>
          <span className="hero-tags">
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">MongoDB</span>
          </span>
        </p>

        <p className="hero-desc fade-up" style={{ transitionDelay: ".3s" }}>
          I build full-stack web applications with React, Node.js and MongoDB, plus AI-powered tools with Ollama and LangChain. Final-year BSCS student at LCWU, graduating June 2027.
        </p>

        <div className="hero-ctas fade-up" style={{ transitionDelay: ".4s" }}>
          <a href="#projects" className="btn-primary">
            View Projects -&gt;
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </div>

        <div className="hero-stats fade-up" style={{ transitionDelay: ".5s" }}>
          <div>
            <div className="stat-num">{projects.length}</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div>
            <div className="stat-num">3.6</div>
            <div className="stat-label">Current CGPA</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div>
            <div className="stat-num">2027</div>
            <div className="stat-label">Graduating</div>
          </div>
        </div>
      </div>

      <div className="hero-float-code">
        <div>
          <span className="code-line-num">01</span>
          <span className="code-kw">const</span> dev = {"{"}
        </div>
        <div>
          <span className="code-line-num">02</span>&nbsp;&nbsp;name:{" "}
          <span className="code-str">'Fatima Asif'</span>,
        </div>
        <div>
          <span className="code-line-num">03</span>&nbsp;&nbsp;stack:{" "}
          <span className="code-str">'MERN'</span>,
        </div>
        <div>
          <span className="code-line-num">04</span>&nbsp;&nbsp;
          <span className="code-fn">build</span>: (idea) =&gt; {"{"}
        </div>
        <div>
          <span className="code-line-num">05</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="code-kw">return</span>{" "}
          <span className="code-fn">ship</span>(idea);
        </div>
        <div>
          <span className="code-line-num">06</span>&nbsp;&nbsp;{"}"},
        </div>
        <div>
          <span className="code-line-num">07</span>
          {"}"};
        </div>
        <div>
          <span className="code-line-num">08</span>
          <span className="code-comment">// Always shipping</span>
        </div>
      </div>
    </section>
  );
}
