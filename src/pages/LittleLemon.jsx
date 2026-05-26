import React, { useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600&family=Karla:wght@300;400;500;600;700&display=swap');

  .ll-root {
    font-family: 'Karla', sans-serif;
    background: #EDEFEE;
    color: #333;
    line-height: 1.7;
    font-size: 16px;
    min-height: 100vh;
  }

  /* HERO */
  .ll-hero {
    background: #495E57;
    padding: 6rem 2rem 5rem;
    position: relative;
    overflow: hidden;
  }
  .ll-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: #EDEFEE;
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .ll-hero-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  @keyframes ll-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ll-hero-inner > * { animation: ll-fadeUp 0.7s ease both; }
  .ll-hero-inner > *:nth-child(2) { animation-delay: 0.15s; }

  .ll-tag {
    display: inline-block; font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: #495E57; background: #F4CE14;
    padding: 0.35rem 0.85rem; border-radius: 100px; margin-bottom: 1.25rem;
  }
  .ll-h1 {
    font-family: 'Markazi Text', serif;
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1.0; color: #F4CE14; margin-bottom: 0.25rem;
  }
  .ll-h1-sub {
    font-family: 'Markazi Text', serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: #EDEFEE; margin-bottom: 1.5rem; line-height: 1.1;
  }
  .ll-hero-desc {
    font-size: 1rem; color: rgba(237,239,238,0.85);
    max-width: 40ch; margin-bottom: 2rem; font-weight: 300;
  }
  .ll-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .ll-pill {
    font-size: 0.78rem; font-weight: 600; padding: 0.35rem 0.9rem;
    border-radius: 100px; border: 1px solid rgba(244,206,20,0.4);
    color: #F4CE14; background: rgba(244,206,20,0.08);
  }

  /* HERO ASIDE */
  .ll-hero-aside {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(244,206,20,0.2);
    border-radius: 1.5rem; padding: 2.5rem;
    position: relative; overflow: hidden;
  }
  .ll-aside-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: #F4CE14; margin-bottom: 0.5rem;
  }
  .ll-aside-value {
    font-size: 1rem; color: #EDEFEE; margin-bottom: 1.5rem; font-weight: 300;
  }
  .ll-live-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.88rem; font-weight: 700;
    background: #F4CE14; color: #333;
    padding: 0.7rem 1.4rem; border-radius: 100px;
    text-decoration: none; transition: opacity 0.2s, transform 0.2s;
  }
  .ll-live-btn:hover { opacity: 0.9; transform: translateY(-1px); }

  /* SECTIONS */
  .ll-section { max-width: 1100px; margin: 0 auto; padding: 5rem 2rem; }
  .ll-section-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
    text-transform: uppercase; color: #495E57; margin-bottom: 0.6rem;
  }
  .ll-h2 {
    font-family: 'Markazi Text', serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    line-height: 1.15; margin-bottom: 1.25rem; color: #333;
  }
  .ll-p { color: #555; max-width: 65ch; line-height: 1.8; }
  .ll-hr { border: none; border-top: 2px solid #D9D9D9; max-width: 1100px; margin: 0 auto; }
  .ll-yellow-hr {
    border: none; height: 3px; background: #F4CE14;
    max-width: 1100px; margin: 0 auto; border-radius: 100px;
  }

  /* PROBLEM / SOLUTION */
  .ll-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .ll-card {
    background: #fff; border-radius: 1.25rem; padding: 2rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    position: relative; overflow: hidden;
  }
  .ll-card-challenge::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: #EE9972;
  }
  .ll-card-approach::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: #495E57;
  }
  .ll-card-h3 {
    font-family: 'Markazi Text', serif; font-size: 1.5rem;
    color: #333; margin-bottom: 0.75rem;
  }

  /* HIGHLIGHTS */
  .ll-highlights { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .ll-highlight-card {
    background: #fff; border-radius: 1.25rem; padding: 2rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    border-top: 4px solid #F4CE14;
    text-align: center;
  }
  .ll-highlight-icon { font-size: 2rem; margin-bottom: 0.75rem; }
  .ll-highlight-title {
    font-family: 'Markazi Text', serif; font-size: 1.3rem;
    color: #333; margin-bottom: 0.5rem;
  }
  .ll-highlight-desc { font-size: 0.88rem; color: #777; line-height: 1.6; }

  /* WHAT I LEARNED */
  .ll-learned-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 2rem; }
  .ll-learned-item {
    background: #fff; border-radius: 1rem; padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    display: flex; gap: 1rem; align-items: flex-start;
  }
  .ll-learned-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: #495E57; flex-shrink: 0; margin-top: 0.5rem;
  }
  .ll-learned-text { font-size: 0.95rem; color: #555; line-height: 1.6; }

  /* CTA */
  .ll-cta-wrap {
    background: #495E57; border-radius: 2rem; padding: 4rem;
    display: grid; grid-template-columns: 1fr auto;
    gap: 3rem; align-items: center;
    position: relative; overflow: hidden;
  }
  .ll-cta-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: #F4CE14;
  }
  .ll-cta-h2 {
    font-family: 'Markazi Text', serif; font-size: 2.2rem;
    color: #F4CE14; margin-bottom: 0.5rem;
  }
  .ll-cta-p { color: rgba(237,239,238,0.75); font-size: 1rem; }
  .ll-cta-links { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-end; }
  .ll-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.75rem 1.6rem; border-radius: 100px; font-size: 0.88rem;
    font-weight: 700; text-decoration: none;
    transition: opacity 0.2s, transform 0.2s; cursor: pointer;
  }
  .ll-btn:hover { opacity: 0.9; transform: translateY(-1px); }
  .ll-btn-primary { background: #F4CE14; color: #333; }
  .ll-btn-secondary { background: rgba(255,255,255,0.1); color: #EDEFEE; border: 1px solid rgba(255,255,255,0.2); }

  /* FOOTER */
  .ll-footer {
    text-align: center; padding: 2.5rem 2rem;
    font-size: 0.82rem; color: #999;
    border-top: 1px solid #D9D9D9;
  }

  /* RESPONSIVE */
  @media (max-width: 800px) {
    .ll-hero-inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .ll-hero { padding: 6rem 1.5rem 4rem; }
    .ll-section { padding: 3rem 1.5rem; }
    .ll-two-col, .ll-learned-grid { grid-template-columns: 1fr; }
    .ll-highlights { grid-template-columns: 1fr 1fr; }
    .ll-cta-wrap { grid-template-columns: 1fr; padding: 2.5rem 1.75rem; }
    .ll-cta-links { align-items: flex-start; }
  }
  @media (max-width: 500px) {
    .ll-highlights { grid-template-columns: 1fr; }
  }
`;

const LIVE_APP_URL = "https://little-lemon-booking-by-aimee.netlify.app/";

const highlights = [
  { icon: "🎨", title: "Figma Component Library", desc: "Built a full component page in Figma with all UI elements organized and ready to hand off — my first real design system." },
  { icon: "📋", title: "Booking Form", desc: "Designed and built a fully functional reservation form with validation, state management, and a confirmation flow." },
  { icon: "⚛️", title: "React Architecture", desc: "Structured the app with reusable components, clean props, and React Router for multi-page navigation." },
];

const learned = [
  "How to translate Figma mockups directly into React components",
  "Building controlled forms with validation and state in React",
  "Organizing a component library in Figma for consistency and reuse",
  "Applying brand guidelines (color, typography, spacing) systematically across a UI",
  "Setting up React Router for client-side navigation",
  "Thinking about user flow from first landing to booking confirmation",
];

export default function LittleLemon() {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="ll-root">
      <div className="ll-hero-spacer" style={{ height: "60px" }} />

      {/* HERO */}
      <div className="ll-hero">
        <div className="ll-hero-inner">
          <div>
            <span className="ll-tag">Frontend Case Study</span>
            <h1 className="ll-h1">Little Lemon</h1>
            <div className="ll-h1-sub">Restaurant Booking App</div>
            <p className="ll-hero-desc">
              A fully functional restaurant reservation app built with React — my first end-to-end frontend project, from Figma component library to live deployed app.
            </p>
            <div className="ll-pills">
              <span className="ll-pill">React</span>
              <span className="ll-pill">Figma</span>
              <span className="ll-pill">Frontend Dev</span>
              <span className="ll-pill">Component Design</span>
            </div>
          </div>
          <div className="ll-hero-aside">
            <div className="ll-aside-label">Course</div>
            <div className="ll-aside-value">Meta Frontend Developer — Coursera</div>
            <div className="ll-aside-label">My Role</div>
            <div className="ll-aside-value">Frontend Developer &amp; UI Designer</div>
            <div className="ll-aside-label">Tools</div>
            <div className="ll-aside-value">React, Figma, VS Code, Netlify</div>
            <a className="ll-live-btn" href={LIVE_APP_URL} target="_blank" rel="noreferrer">
              &#9654; View Live App
            </a>
          </div>
        </div>
      </div>

      <hr className="ll-yellow-hr" />

      {/* CHALLENGE & APPROACH */}
      <section className="ll-section">
        <div className="ll-section-label">Overview</div>
        <h2 className="ll-h2">The challenge &amp; my approach</h2>
        <div className="ll-two-col">
          <div className="ll-card ll-card-challenge">
            <h3 className="ll-card-h3">&#9888; The Challenge</h3>
            <p className="ll-p">Build a fully functional restaurant booking experience for Little Lemon — a fictional Mediterranean restaurant — that felt polished, on-brand, and actually worked. The project was course-guided, but the design decisions, component structure, and UI choices were mine to make.</p>
          </div>
          <div className="ll-card ll-card-approach">
            <h3 className="ll-card-h3">&#10003; My Approach</h3>
            <p className="ll-p">I started in Figma, building out a component library before writing a single line of code. Having all my UI elements organized and consistent made the React build feel much more intentional. The booking form became the heart of the project — getting that right was the priority.</p>
          </div>
        </div>
      </section>

      <hr className="ll-hr" />

      {/* HIGHLIGHTS */}
      <section className="ll-section">
        <div className="ll-section-label">What I Built</div>
        <h2 className="ll-h2">Project highlights</h2>
        <div className="ll-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="ll-highlight-card">
              <div className="ll-highlight-icon">{h.icon}</div>
              <div className="ll-highlight-title">{h.title}</div>
              <p className="ll-highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="ll-hr" />

      {/* WHAT I LEARNED */}
      <section className="ll-section">
        <div className="ll-section-label">Reflection</div>
        <h2 className="ll-h2">What I took away from this</h2>
        <p className="ll-p" style={{ marginBottom: "2rem" }}>
          This was my first real frontend project and it taught me more than any tutorial could. Getting something from a blank Figma canvas to a live deployed app — and having it actually work — was the moment things clicked for me.
        </p>
        <div className="ll-learned-grid">
          {learned.map((item, i) => (
            <div key={i} className="ll-learned-item">
              <div className="ll-learned-dot" />
              <div className="ll-learned-text">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="ll-yellow-hr" />

      {/* CTA */}
      <section className="ll-section">
        <div className="ll-cta-wrap">
          <div>
            <div className="ll-cta-h2">See it in action</div>
            <p className="ll-cta-p">The app is live and fully functional — go ahead and make a reservation.</p>
          </div>
          <div className="ll-cta-links">
            <a className="ll-btn ll-btn-primary" href={LIVE_APP_URL} target="_blank" rel="noreferrer">
              &#9654; View Live App
            </a>
            <a className="ll-btn ll-btn-secondary" href="mailto:aimeevdb@gmail.com">
              &#9993; Get in touch
            </a>
          </div>
        </div>
      </section>

      <footer className="ll-footer">
        &copy; 2026 Aimee Van den Broeke &middot; Little Lemon Frontend Case Study
      </footer>
    </div>
  );
}