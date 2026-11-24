import { useState } from "react";

const FORMSPREE_ID = "TODO";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(
        response.ok
          ? "Message sent successfully."
          : "Unable to send message. Please try again.",
      );
    } catch {
      setStatus("Unable to send message. Please try again.");
    }
  }

  return (
    <>
      <section id="contact">
        <div className="contact-wrap">
          <div className="contact-info">
            <div className="section-label">Get in touch</div>
            <h2 className="contact-info-title">Let's build something useful.</h2>
            <p className="contact-info-desc">
              Open to internships, junior MERN roles and collaboration on practical web applications.
            </p>
            <div className="contact-links">
              <a className="contact-link-item" href="mailto:fatimaasif092004@gmail.com">
                <span className="contact-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="contact-link-copy">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-val">fatimaasif092004@gmail.com</span>
                </span>
              </a>
              <a className="contact-link-item" href="https://github.com/Fatima321-09" target="_blank" rel="noreferrer">
                <span className="contact-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </span>
                <span className="contact-link-copy">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-val">github.com/Fatima321-09</span>
                </span>
              </a>
              <a className="contact-link-item" href="https://linkedin.com/in/fatima-asif-9ab0a731a" target="_blank" rel="noreferrer">
                <span className="contact-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.22 0Z" />
                  </svg>
                </span>
                <span className="contact-link-copy">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-val">linkedin.com/in/fatima-asif-9ab0a731a</span>
                </span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-input" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-textarea" id="message" name="message" placeholder="How can I help you?" required />
            </div>
            <button className="form-submit" type="submit">Send Message</button>
            {status && <p className="form-label" role="status">{status}</p>}
          </form>
        </div>
      </section>
      <footer>
        <div className="footer-copy">Built by <span>Fatima Asif</span></div>
        <div className="footer-stack">React / Vite / CSS</div>
      </footer>
    </>
  );
}
