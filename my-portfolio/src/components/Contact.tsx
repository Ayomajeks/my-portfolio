import { Code2, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-grid">    
        <div>
          <p className="eyebrow"> CONTACT</p>
          <h2>
            Let's build
            <br />
            <em>something great.</em>
          </h2>
          <p>
            Looking to connect ? or Collaborate on new ideas, Feel free to reach out to me.
          </p>
          <a
            href="https://github.com/Ayomajeks"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-github"
          >
            <Code2 size={18} style={{ display: "inline", marginRight: 8 }} />
            Explore my GitHub
            <ArrowUpRight size={16} style={{ display: "inline", marginLeft: 6 }} />
          </a>
        </div>
        <div className="contact-panel">
          <Mail size={32} color="#97B8E6" />

          <h3 style={{ marginTop: 20 }}>
            Get in touch
          </h3>

          <p>
            I'm always open to discussing software
            development, new insights, and opportunities.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aymajeks@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-light"
          >
            <span>
              <Mail size={18} style={{ display: "inline", marginRight: 10 }} />
              Send an email
            </span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;