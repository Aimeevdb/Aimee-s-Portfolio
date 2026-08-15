import React from "react";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0b0812",
        borderTop: "1px solid rgba(167,139,250,0.15)",
        padding: "3rem 2rem 2.5rem",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        .site-footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem 3rem;
          align-items: baseline;
          justify-content: space-between;
        }
        .site-footer-byline {
          font-size: 0.95rem;
          color: rgba(245,240,255,0.72);
          line-height: 1.7;
          margin: 0;
        }
        .site-footer-byline strong {
          color: #f5f0ff;
          font-weight: 500;
        }
        .site-footer-meta {
          font-size: 0.8rem;
          color: rgba(245,240,255,0.42);
          margin: 0.4rem 0 0;
          line-height: 1.7;
        }
        .site-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.85rem;
        }
        .site-footer-links a {
          color: #a78bfa;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .site-footer-links a:hover {
          color: #f5f0ff;
          border-bottom-color: rgba(167,139,250,0.6);
        }
        @media (max-width: 640px) {
          .site-footer-inner { flex-direction: column; }
        }
      `}</style>

      <div className="site-footer-inner">
        <div>
          <p className="site-footer-byline">
            Designed, coded, and deployed by{" "}
            <strong>Aimee Van den broeke</strong>.
          </p>
          <p className="site-footer-meta">
            Every screen, component, and line of code on this site is my own
            work — React &amp; Chakra UI, designed in Figma, deployed on Netlify.
            <br />
            &copy; {YEAR} Aimee Van den broeke &middot; Gresham, Oregon
          </p>
        </div>

        <nav className="site-footer-links" aria-label="Footer">
          <a
            href="https://github.com/Aimeevdb/Aimee-s-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the source &#8599;
          </a>
          <a
            href="https://www.linkedin.com/in/aimee-van-den-broeke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:aimeevdb@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
