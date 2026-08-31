import React, { useEffect, useRef, useState } from "react";

const stack = [
  { label: "React", note: "Router, hooks, component architecture" },
  { label: "Chakra UI", note: "Themed, responsive layout primitives" },
  { label: "Figma", note: "Wireframes, hi-fi mockups, design system" },
  { label: "Formik + Yup", note: "Validated contact form" },
  { label: "Netlify", note: "CI deploy from GitHub, custom domain, SSL" },
  { label: "Git / GitHub", note: "Version control, public source history" },
];

const process = [
  {
    step: "01",
    title: "Researched and wireframed it",
    desc: "Studied portfolios that won their owners real work, worked out what a visitor decides in the first thirty seconds, then wireframed around that in Figma.",
  },
  {
    step: "02",
    title: "Designed the system, not just screens",
    desc: "Built a reusable type scale, colour tokens, and component variants in Figma so every case study page stays visually consistent without redrawing it each time.",
  },
  {
    step: "03",
    title: "Coded it from scratch in React",
    desc: "No template, no site builder, no drag-and-drop. Hand-written components, client-side routing, responsive breakpoints, and accessible markup.",
  },
  {
    step: "04",
    title: "Shipped and maintain it myself",
    desc: "Continuous deploys from GitHub to Netlify, custom domain and SSL configured by hand, SEO metadata and sitemap included.",
  },
];

export default function ColophonSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="colophon-section"
      ref={ref}
      style={{
        background: "#120e1e",
        padding: "7rem 2rem",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        .colo-inner { max-width: 1100px; margin: 0 auto; }

        .colo-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .colo-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .colo-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.2rem, 3.6vw, 3rem);
          line-height: 1.2;
          color: #f5f0ff;
          margin: 0 0 1.25rem;
          max-width: 20ch;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .6s ease .1s, transform .6s ease .1s;
        }
        .colo-headline.visible { opacity: 1; transform: translateY(0); }
        .colo-headline em { font-style: italic; color: #c4b5fd; }

        .colo-lede {
          font-size: 1.05rem;
          line-height: 1.85;
          font-weight: 300;
          color: rgba(245,240,255,0.72);
          max-width: 62ch;
          margin: 0 0 3.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .6s ease .18s, transform .6s ease .18s;
        }
        .colo-lede.visible { opacity: 1; transform: translateY(0); }
        .colo-lede strong { color: #f5f0ff; font-weight: 500; }

        .colo-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 4.5rem;
          align-items: start;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .6s ease .28s, transform .6s ease .28s;
        }
        .colo-grid.visible { opacity: 1; transform: translateY(0); }

        .colo-step { padding-bottom: 2.25rem; display: flex; gap: 1.25rem; }
        .colo-step-num {
          font-family: 'DM Serif Display', serif;
          font-size: 0.95rem;
          color: #7c3aed;
          padding-top: 0.15rem;
          flex-shrink: 0;
        }
        .colo-step-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          color: #f5f0ff;
          margin-bottom: 0.4rem;
        }
        .colo-step-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(245,240,255,0.55);
        }

        .colo-sub {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1.25rem;
        }
        .colo-stack { list-style: none; margin: 0 0 2.5rem; padding: 0; }
        .colo-stack li {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(167,139,250,0.12);
          font-size: 0.88rem;
        }
        .colo-stack li span:first-child { color: #f5f0ff; font-weight: 500; }
        .colo-stack li span:last-child {
          color: rgba(245,240,255,0.45);
          text-align: right;
        }

        .colo-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.6rem;
          border: 1px solid rgba(167,139,250,0.4);
          border-radius: 100px;
          color: #a78bfa;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: background .2s, color .2s, border-color .2s;
        }
        .colo-cta:hover {
          background: rgba(167,139,250,0.12);
          color: #f5f0ff;
          border-color: rgba(167,139,250,0.7);
        }

        @media (max-width: 860px) {
          .colo-grid { grid-template-columns: 1fr; gap: 3rem; }
          .colo-headline { max-width: 100%; }
        }
      `}</style>

      <div className="colo-inner">
        <div className={`colo-eyebrow ${visible ? "visible" : ""}`}>
          Colophon
        </div>

        <h2 className={`colo-headline ${visible ? "visible" : ""}`}>
          This site is itself <em>a case study.</em>
        </h2>

        <p className={`colo-lede ${visible ? "visible" : ""}`}>
          I designed and built <strong>every pixel and every line of code</strong> on
          this site myself — no template, no page builder, no agency. It runs on
          a React codebase I wrote by hand, from a design system I made in Figma.
          The full commit history is public, so you can read exactly how it came
          together.
        </p>

        <div className={`colo-grid ${visible ? "visible" : ""}`}>
          <div>
            <div className="colo-sub">How it was made</div>
            {process.map((p) => (
              <div className="colo-step" key={p.step}>
                <div className="colo-step-num">{p.step}</div>
                <div>
                  <div className="colo-step-title">{p.title}</div>
                  <div className="colo-step-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="colo-sub">Built with</div>
            <ul className="colo-stack">
              {stack.map((s) => (
                <li key={s.label}>
                  <span>{s.label}</span>
                  <span>{s.note}</span>
                </li>
              ))}
            </ul>
            <a
              className="colo-cta"
              href="https://github.com/Aimeevdb/Aimee-s-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the source on GitHub &#8599;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
