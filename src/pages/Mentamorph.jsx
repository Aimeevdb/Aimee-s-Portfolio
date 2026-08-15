import React, { useEffect } from "react";
import usePageMeta from "../hooks/usePageMeta";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@700;800&display=swap');



  .mm-root {
    font-family: 'Space Grotesk', sans-serif;
    background: #0f0a1e;
    color: #f0eeff;
    line-height: 1.7;
    font-size: 16px;
    min-height: 100vh;
  }

  /* HERO */
  .mm-hero-spacer { height: 60px; }
  .mm-hero {
    position: relative; overflow: hidden;
    padding: 9rem 3rem 5rem;
    background: linear-gradient(135deg, #3b0764 0%, #1e3a5f 50%, #134e2a 100%);
  }
  .mm-hero-orb {
    position: absolute; top: -120px; right: -80px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%);
    pointer-events: none;
  }
  .mm-hero-orb2 {
    position: absolute; bottom: -100px; left: -60px;
    width: 380px; height: 380px; border-radius: 50%;
    background: radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%);
    pointer-events: none;
  }
  .mm-hero-content {
    position: relative; z-index: 2;
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: center;
  }
  @keyframes mm-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .mm-hero-content > * { animation: mm-fadeUp 0.7s ease both; }
  .mm-hero-content > *:nth-child(2) { animation-delay: 0.15s; }

  .mm-tag {
    display: inline-block; font-size: 0.72rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: #a78bfa; background: rgba(139,92,246,0.15);
    border: 1px solid rgba(139,92,246,0.3);
    padding: 0.35rem 0.85rem; border-radius: 100px; margin-bottom: 1.25rem;
  }
  .mm-h1 {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(2.8rem, 5vw, 4rem);
    line-height: 1.2; padding-bottom: 0.1em; color: #f0eeff; margin-bottom: 1.25rem;
  }
  .mm-h1 em {
    font-style: normal;
    color: #a78bfa;
  }
  .mm-hero-sub { font-size: 1.05rem; color: rgba(240,238,255,0.7); max-width: 40ch; margin-bottom: 2rem; }
  .mm-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .mm-pill {
    font-size: 0.78rem; font-weight: 500; padding: 0.35rem 0.9rem;
    border-radius: 100px; border: 1px solid rgba(255,255,255,0.15);
    color: rgba(240,238,255,0.7); background: rgba(255,255,255,0.06);
  }

  /* HERO ASIDE */
  .mm-hero-aside {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(139,92,246,0.25);
    border-radius: 1.5rem; padding: 2.5rem;
    position: relative; overflow: hidden;
    box-shadow: 0 0 40px rgba(139,92,246,0.15);
  }
  .mm-aside-label {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; color: #a78bfa; margin-bottom: 0.75rem;
  }
  .mm-aside-duration {
    font-family: 'Outfit', sans-serif; font-size: 1.1rem;
    color: #f0eeff; margin-bottom: 1.5rem;
  }
  .mm-team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin-bottom: 1.5rem; }
  .mm-team-item {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 0.75rem; padding: 0.75rem 1rem;
  }
  .mm-team-role { font-size: 0.7rem; color: #a78bfa; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.2rem; }
  .mm-team-name { font-size: 0.85rem; color: rgba(240,238,255,0.8); }
  .mm-slide-link {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.85rem; font-weight: 600; color: #34d399;
    text-decoration: none; border: 1px solid rgba(52,211,153,0.3);
    background: rgba(52,211,153,0.08); padding: 0.55rem 1.1rem;
    border-radius: 100px; transition: background 0.2s;
  }
  .mm-slide-link:hover { background: rgba(52,211,153,0.18); }

  /* SECTIONS */
  .mm-section { max-width: 1100px; margin: 0 auto; padding: 5rem 3rem; overflow: visible; }
  .mm-section-label {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: #a78bfa; margin-bottom: 0.6rem;
  }
  .mm-h2 {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    line-height: 1.4; padding-bottom: 0.3em; margin-bottom: 1rem; color: #f0eeff;
    overflow: visible; display: block;
  }
  .mm-p { color: rgba(240,238,255,0.65); max-width: 60ch; }
  .mm-hr { border: none; border-top: 1px solid rgba(139,92,246,0.15); max-width: 1100px; margin: 0 auto; }
  .mm-gradient-hr {
    border: none; height: 2px;
    background: linear-gradient(90deg, #7c3aed, #34d399);
    max-width: 1100px; margin: 0 auto; border-radius: 2px; opacity: 0.5;
  }

  /* PROBLEM / GOAL */
  .mm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .mm-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(139,92,246,0.2);
    border-radius: 1.25rem; padding: 2rem;
    position: relative; overflow: hidden;
  }
  .mm-card-problem::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #f87171, #fb923c);
  }
  .mm-card-goal::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #34d399, #a78bfa);
  }
  .mm-card-h3 { font-family: 'Outfit', sans-serif; font-size: 1.2rem; color: #f0eeff; margin-bottom: 0.75rem; }

  /* PERSONAS */
  .mm-persona-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .mm-persona-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(139,92,246,0.2);
    border-radius: 1.25rem; padding: 2rem;
  }
  .mm-persona-avatar {
    width: 56px; height: 56px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Outfit', sans-serif; font-size: 1.3rem;
    color: #fff; margin-bottom: 1rem; flex-shrink: 0;
  }
  .mm-persona-avatar-student { background: linear-gradient(135deg, #7c3aed, #a78bfa); }
  .mm-persona-avatar-parent { background: linear-gradient(135deg, #059669, #34d399); }
  .mm-persona-name { font-family: 'Outfit', sans-serif; font-size: 1.15rem; color: #f0eeff; margin-bottom: 0.2rem; }
  .mm-persona-role { font-size: 0.8rem; color: #a78bfa; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 1rem; }
  .mm-persona-quote {
    font-style: italic; font-size: 0.9rem;
    color: rgba(240,238,255,0.6); border-left: 2px solid #7c3aed;
    padding-left: 0.75rem; margin-bottom: 1rem;
  }
  .mm-mini-list { list-style: none; padding: 0; }
  .mm-mini-list li {
    font-size: 0.88rem; color: rgba(240,238,255,0.65);
    display: flex; gap: 0.5rem; align-items: flex-start; margin-bottom: 0.4rem;
  }
  .mm-mini-list li::before { content: '›'; color: #34d399; font-weight: 700; flex-shrink: 0; }

  /* PAIN POINTS */
  .mm-pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .mm-pain-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(139,92,246,0.2);
    border-radius: 1.25rem; padding: 1.75rem;
    text-align: center;
  }
  .mm-pain-num {
    width: 40px; height: 40px; border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #34d399);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Outfit', sans-serif; font-size: 1.1rem;
    color: #fff; margin: 0 auto 1rem;
  }
  .mm-pain-title { font-family: 'Outfit', sans-serif; font-size: 1rem; color: #f0eeff; margin-bottom: 0.5rem; }

  /* USABILITY */
  .mm-usability-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .mm-usability-card {
    border-radius: 1.25rem; padding: 2rem;
  }
  .mm-usability-before {
    background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.2);
  }
  .mm-usability-after {
    background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.2);
  }
  .mm-usability-label {
    font-family: 'Outfit', sans-serif; font-size: 1rem; margin-bottom: 1rem;
  }
  .mm-usability-before .mm-usability-label { color: #f87171; }
  .mm-usability-after .mm-usability-label { color: #34d399; }
  .mm-finding {
    display: flex; gap: 0.75rem; align-items: flex-start;
    margin-bottom: 0.75rem; font-size: 0.9rem; color: rgba(240,238,255,0.7);
  }
  .mm-finding-num {
    width: 22px; height: 22px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.72rem; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem;
  }
  .mm-usability-before .mm-finding-num { background: rgba(248,113,113,0.2); color: #f87171; }
  .mm-usability-after .mm-finding-num { background: rgba(52,211,153,0.2); color: #34d399; }

  /* CONTRIBUTIONS */
  .mm-contrib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem; }
  .mm-contrib-item {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(139,92,246,0.2);
    border-radius: 1rem; padding: 1.5rem;
    transition: border-color 0.2s;
  }
  .mm-contrib-item:hover { border-color: rgba(139,92,246,0.5); }
  .mm-contrib-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
  .mm-contrib-h4 { font-family: 'Outfit', sans-serif; font-size: 0.95rem; color: #f0eeff; }

  /* CONTACT */
  .mm-contact-wrap {
    background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(52,211,153,0.1));
    border: 1px solid rgba(139,92,246,0.25);
    border-radius: 1.75rem; padding: 4rem;
    display: grid; grid-template-columns: 1fr auto;
    gap: 3rem; align-items: center; position: relative; overflow: hidden;
  }
  .mm-contact-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #7c3aed, #34d399);
  }
  .mm-contact-links { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-end; }
  .mm-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.7rem 1.4rem; border-radius: 100px; font-size: 0.88rem;
    font-weight: 600; text-decoration: none; transition: opacity 0.2s, transform 0.2s; cursor: pointer;
  }
  .mm-btn:hover { opacity: 0.85; transform: translateY(-1px); }
  .mm-btn-primary { background: linear-gradient(90deg, #7c3aed, #34d399); color: #fff; }
  .mm-btn-secondary { background: rgba(255,255,255,0.06); color: #f0eeff; border: 1px solid rgba(255,255,255,0.15); }

  /* FOOTER */
  .mm-footer {
    text-align: center; padding: 2.5rem 3rem;
    font-size: 0.82rem; color: rgba(240,238,255,0.3);
    border-top: 1px solid rgba(139,92,246,0.15);
  }

  /* RESPONSIVE */
  @media (max-width: 800px) {
    .mm-nav { padding: 1rem 1.5rem; }
    .mm-hero-spacer { height: 60px; }
  .mm-hero { padding: 7rem 1.5rem 3rem; }
    .mm-hero-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .mm-section { padding: 3rem 1.5rem; }
    .mm-two-col, .mm-persona-grid, .mm-usability-grid { grid-template-columns: 1fr; }
    .mm-pain-grid, .mm-contrib-grid { grid-template-columns: 1fr 1fr; }
    .mm-team-grid { grid-template-columns: 1fr; }
    .mm-contact-wrap { grid-template-columns: 1fr; padding: 2.5rem 1.75rem; }
    .mm-contact-links { align-items: flex-start; }
  }
  @media (max-width: 500px) {
    .mm-pain-grid, .mm-contrib-grid { grid-template-columns: 1fr; }
  }
`;

const SLIDE_DECK_URL = "https://docs.google.com/presentation/d/1iJmHMGBb0r2g8qrxms0EwOvjJVEWSSiDjCJ0M13HqPc/preview";

const team = [
  { role: "UX Design Lead", name: "Kenisha Griggs" },
  { role: "UX Design", name: "Kaira Mellix" },
  { role: "UI Design", name: "Terrence Green" },
  { role: "UX Research Coordinator", name: "Aimee Van den broeke" },
  { role: "Usability Testing", name: "Raymond Chelf" },
];

const painPoints = [
  { title: "Confusing Terminology", desc: "Financial terms left users confused — plain language was needed throughout." },
  { title: "Unclear Information", desc: "Limited explanations made financial literacy hard to understand and apply." },
  { title: "Low Engagement", desc: "Text-heavy, passive content caused users to lose interest quickly." },
];

const beforeFindings = [
  "Players did not find starting the game intuitive.",
  "Players unanimously recommended more instruction and descriptions.",
  "Players were on average, neutral on whether the game effectively taught financial concepts.",
];

const afterFindings = [
  "Info buttons for financial terms led to higher understanding ratings.",
  "Redesigned UI with pop-ups and tutorials increased comprehension of gameplay mechanics.",
  "Adding feedback to player choices created higher overall satisfaction ratings.",
];

const contributions = [
  { icon: "🔬", label: "UX Research Coordination" },
  { icon: "🧪", label: "Usability Study Design" },
  { icon: "📋", label: "Survey Construction" },
  { icon: "🗺️", label: "User Journey Mapping" },
  { icon: "👤", label: "Persona Development" },
  { icon: "📎", label: null, isLink: true },
];

export default function Mentamorph() {
  usePageMeta(
    "MentaMorph — UX Research Case Study",
    "UX research case study from my work as UX Research Coordinator at MentaMorph Inc — personas, competitive audits, and a Figma design system."
  );
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="mm-root">
{/* HERO */}
      <div className="mm-hero-spacer" />
      <div className="mm-hero">
        <div className="mm-hero-orb" aria-hidden="true" />
        <div className="mm-hero-orb2" aria-hidden="true" />
        <div className="mm-hero-content">
          <div>
            <span className="mm-tag">UX Research &amp; Case Study</span>
            <h1 className="mm-h1">Menta<em>Morph</em></h1>
            <p className="mm-hero-sub">
              A financial literacy game that builds money management skills through resilience-enhancing, play-based learning for teens.
            </p>
            <div className="mm-pills">
              <span className="mm-pill">UX Case Study</span>
              <span className="mm-pill">Figma</span>
              <span className="mm-pill">Wireframing</span>
              <span className="mm-pill">Prototyping</span>
            </div>
          </div>
          <div className="mm-hero-aside">
            <div className="mm-aside-label">Project Duration</div>
            <div className="mm-aside-duration">May 2025 &ndash; July 2025</div>
            <div className="mm-aside-label">Riipen Team</div>
            <div className="mm-team-grid">
              {team.map((m, i) => (
                <div key={i} className="mm-team-item">
                  <div className="mm-team-role">{m.role}</div>
                  <div className="mm-team-name">{m.name}</div>
                </div>
              ))}
            </div>
            <a className="mm-slide-link" href={SLIDE_DECK_URL} target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              View Full Case Study
            </a>
          </div>
        </div>
      </div>

      <hr className="mm-gradient-hr" />

      {/* PROBLEM & GOAL */}
      <section className="mm-section">
        <div className="mm-section-label">Project Overview</div>
        <h2 className="mm-h2">The challenge &amp; the goal</h2>
        <div className="mm-two-col">
          <div className="mm-card mm-card-problem">
            <h3 className="mm-card-h3">&#9888; The Problem</h3>
            <p className="mm-p">Users had difficulty understanding key moments in the game due to a lack of clear indicators and contextual information. They couldn't easily tell when a round ended, financial terms were left undefined, and screen transitions felt clunky and frustrating.</p>
          </div>
          <div className="mm-card mm-card-goal">
            <h3 className="mm-card-h3">&#11088; The Goal</h3>
            <p className="mm-p">Enhance educational clarity and gameplay flow by incorporating accessible definitions for key financial literacy terms and streamlining screen transitions — fostering an engaging experience that supports long-term financial learning and resilience among teens.</p>
          </div>
        </div>
      </section>

      <hr className="mm-hr" />

      {/* PERSONAS */}
      <section className="mm-section">
        <div className="mm-section-label">The Users</div>
        <h2 className="mm-h2">Who we designed for</h2>
        <div className="mm-persona-grid">
          <div className="mm-persona-card">
            <div className="mm-persona-avatar mm-persona-avatar-student">M</div>
            <div className="mm-persona-name">Mateo — The Student</div>
            <div className="mm-persona-role">Age 12 &middot; 7th Grade &middot; Austin, TX</div>
            <p className="mm-persona-quote">"I want to save up for a gaming console, but I always spend my allowance too fast."</p>
            <ul className="mm-mini-list">
              <li>Set and stick to a budget</li>
              <li>Understand income, expenses, assets &amp; liabilities</li>
              <li>Build resilience for unexpected costs</li>
            </ul>
          </div>
          <div className="mm-persona-card">
            <div className="mm-persona-avatar mm-persona-avatar-parent">J</div>
            <div className="mm-persona-name">Jennifer — The Parent</div>
            <div className="mm-persona-role">Age 40 &middot; Full-time worker &middot; Parent of two</div>
            <p className="mm-persona-quote">"I want my kids to be money smart, but explaining it in a simple way is hard."</p>
            <ul className="mm-mini-list">
              <li>Help Mateo make sound financial decisions</li>
              <li>Make financial topics part of regular family life</li>
              <li>Promote long-term financial resilience</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="mm-hr" />

      {/* PAIN POINTS */}
      <section className="mm-section">
        <div className="mm-section-label">Research Findings</div>
        <h2 className="mm-h2">Key pain points</h2>
        <div className="mm-pain-grid">
          {painPoints.map((p, i) => (
            <div key={i} className="mm-pain-card">
              <div className="mm-pain-num">{i + 1}</div>
              <div className="mm-pain-title">{p.title}</div>
              <p className="mm-p" style={{ fontSize: "0.88rem" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="mm-gradient-hr" />

      {/* USABILITY */}
      <section className="mm-section">
        <div className="mm-section-label">Usability Study</div>
        <h2 className="mm-h2">Before &amp; after our design changes</h2>
        <div className="mm-usability-grid">
          <div className="mm-usability-card mm-usability-before">
            <div className="mm-usability-label">Before Changes</div>
            {beforeFindings.map((f, i) => (
              <div key={i} className="mm-finding">
                <span className="mm-finding-num">{i + 1}</span>
                {f}
              </div>
            ))}
          </div>
          <div className="mm-usability-card mm-usability-after">
            <div className="mm-usability-label">After Changes</div>
            {afterFindings.map((f, i) => (
              <div key={i} className="mm-finding">
                <span className="mm-finding-num">{i + 1}</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mm-hr" />

      {/* CONTRIBUTIONS */}
      <section className="mm-section">
        <div className="mm-section-label">My Contribution</div>
        <h2 className="mm-h2">What I brought to the team</h2>
        <div className="mm-contrib-grid">
          {contributions.map((item, i) =>
            item.isLink ? (
              <div key={i} className="mm-contrib-item">
                <div className="mm-contrib-icon">{item.icon}</div>
                <h4 className="mm-contrib-h4">
                  <a href={SLIDE_DECK_URL} target="_blank" rel="noreferrer" style={{ color: "#34d399", textDecoration: "none" }}>
                    View Full Case Study &#8594;
                  </a>
                </h4>
              </div>
            ) : (
              <div key={i} className="mm-contrib-item">
                <div className="mm-contrib-icon">{item.icon}</div>
                <h4 className="mm-contrib-h4">{item.label}</h4>
              </div>
            )
          )}
        </div>
      </section>

      <hr className="mm-hr" />

      {/* CONTACT */}
      <section className="mm-section" id="contact">
        <div className="mm-contact-wrap">
          <div>
            <div className="mm-section-label">Let's Connect</div>
            <h2 className="mm-h2">Interested in this work?</h2>
            <p className="mm-p">Reach out to learn more about the process, see the full prototype, or discuss opportunities.</p>
          </div>
          <div className="mm-contact-links">
            <a className="mm-btn mm-btn-primary" href="mailto:aimeevdb@gmail.com">
              &#9993; aimeevdb@gmail.com
            </a>
            <a className="mm-btn mm-btn-secondary" href="https://www.linkedin.com/in/aimee-van-den-broeke/" target="_blank" rel="noreferrer">
              LinkedIn &#8594;
            </a>
          </div>
        </div>
      </section>

      <footer className="mm-footer">
        &copy; 2026 Aimee Van den broeke &middot; MentaMorph UX Case Study
      </footer>
    </div>
  );
}