export default function Hero({ projectsCount }) {
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
          MERN Full Stack Developer
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">MongoDB</span>
        </p>

        <p className="hero-desc fade-up" style={{ transitionDelay: ".3s" }}>
          I build scalable web applications with clean architecture, stunning
          UIs, and rock-solid backends. Currently pursuing a BS in Computer
          Science and graduating in 2027.
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
            <div className="stat-num">{projectsCount}</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div>
            <div className="stat-num">3.6</div>
            <div className="stat-label">Current CGPA</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
          <div>
            <div className="stat-num">15k+</div>
            <div className="stat-label">Lines of Code</div>
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
