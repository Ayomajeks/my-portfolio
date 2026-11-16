
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState(
    window.location.hash || "#about"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="shell header-inner">

        {/* Portfolio logo */}
        <a href="/" className="wordmark">
          Ayomipo Majekodunmi
        </a>

        {/* Navigation */}
        <nav className="site-nav" aria-label="Main navigation">

          <a
            href="/#about"
            aria-current={activeHash === "#about" ? "location" : undefined}
            style={{
              borderBottom:
                activeHash === "#about"
                  ? "2px solid #97B8E6"
                  : "2px solid transparent",
              paddingBottom: "6px",
              transition: "border-color 0.3s ease",
            }}
          >
            About
          </a>

          <a
            href="/#projects"
            aria-current={activeHash === "#projects" ? "location" : undefined}
            style={{
              borderBottom:
                activeHash === "#projects"
                  ? "2px solid #97B8E6"
                  : "2px solid transparent",
              paddingBottom: "6px",
              transition: "border-color 0.3s ease",
            }}
          >
            Projects
          </a>

          <a href="/#contact" className="nav-cta" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Get in Touch  <ArrowUpRight size={16}/>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
