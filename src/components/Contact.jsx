export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact-wrap">
          <div>
            <h2 className="contact-info-title">
              Let's build something useful.
            </h2>
            <p className="contact-info-desc">
              Open to internships, junior MERN roles, freelance projects, and
              collaboration on practical web applications.
            </p>

            <div className="contact-links">
              <a className="contact-link-item" href="mailto:fatima@example.com">
                <span className="contact-link-icon" aria-hidden="true">
                  @
                </span>
                <span>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-val">
                    {" "}
                    fatimaasif092004@gmai.com
                  </span>
                </span>
              </a>
              <a
                className="contact-link-item"
                href="https://github.com/Fatima321-09"
                target="_blank"
              >
                <span className="contact-link-icon" aria-hidden="true">
                  GH
                </span>
                <span>
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-val">
                    {" "}
                  github link</span>
                </span>
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-input" id="name" name="name" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-textarea" id="message" name="message" />
            </div>
            <button className="form-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-copy">
          Built by <span>Fatima Asif</span>
        </div>
        <div className="footer-stack">React / Vite / CSS</div>
      </footer>
    </>
  );
}
