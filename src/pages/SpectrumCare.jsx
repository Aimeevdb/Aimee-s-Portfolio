import React, { useEffect } from "react";
import usePageMeta from "../hooks/usePageMeta";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

  .sc-root {
    font-family: 'DM Sans', sans-serif;
    background: #FAF8F5;
    color: #1A2B26;
    line-height: 1.7;
    font-size: 16px;
    min-height: 100vh;
  }
  .sc-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.1rem 3rem;
    background: rgba(250,248,245,0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #DDE8E5;
  }
  .sc-nav-name {
    font-family: 'DM Serif Display', serif;
    font-size: 1.05rem; color: #1A2B26;
    text-decoration: none; letter-spacing: 0.01em;
  }
  .sc-nav-link {
    font-size: 0.85rem; font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase;
    color: #5A706B; text-decoration: none; transition: color 0.2s;
  }
  .sc-nav-link:hover { color: #6B9E8F; }

  .sc-hero-spacer { height: 60px; }
  .sc-hero-banner {
    position: relative; overflow: hidden;
    padding: 8rem 3rem 4rem;
    background: linear-gradient(180deg, #dce8f5 0%, #e8f0f8 40%, #f5f0e8 70%, #faf8f5 100%);
  }
  .sc-rainbow-arc {
    position: absolute; bottom: -60px; left: 50%;
    transform: translateX(-50%);
    width: 160%; height: 420px;
    border-radius: 50% 50% 0 0;
    background: transparent;
    pointer-events: none;
  }
  .sc-rainbow-arc::before {
    content: '';
    position: absolute; inset: 0;
    border-radius: inherit;
    background: conic-gradient(from 180deg at 50% 100%,
      #e63946 0deg, #f4722b 25deg, #f9c74f 50deg,
      #6fcf97 75deg, #4ea8de 100deg, #8b5cf6 125deg,
      transparent 130deg
    );
    mask: radial-gradient(ellipse 100% 100% at 50% 100%, transparent 68%, black 70%, black 78%, transparent 80%);
    -webkit-mask: radial-gradient(ellipse 100% 100% at 50% 100%, transparent 68%, black 70%, black 78%, transparent 80%);
    opacity: 0.85; filter: blur(1px);
  }
  .sc-hero-content {
    position: relative; z-index: 2;
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: end;
  }
  @keyframes sc-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .sc-hero-content > * { animation: sc-fadeUp 0.7s ease both; }
  .sc-hero-content > *:nth-child(2) { animation-delay: 0.15s; }
  .sc-tag {
    display: inline-block; font-size: 0.75rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: #7c3aed; background: rgba(139,92,246,0.1);
    border: 1px solid rgba(139,92,246,0.25);
    padding: 0.35rem 0.85rem; border-radius: 100px; margin-bottom: 1.5rem;
  }
  .sc-h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.8rem, 5vw, 4.2rem);
    line-height: 1.1; color: #1A2B26; margin-bottom: 1.25rem;
  }
  .sc-h1 em {
    font-style: italic;
    background: linear-gradient(90deg, #e63946, #f4722b, #f9c74f, #6fcf97, #4ea8de, #8b5cf6);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .sc-hero-sub { font-size: 1.05rem; color: #5A706B; max-width: 38ch; margin-bottom: 2rem; }
  .sc-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .sc-pill {
    font-size: 0.8rem; font-weight: 500; padding: 0.4rem 1rem;
    border-radius: 100px; border: 1px solid rgba(0,0,0,0.12);
    color: #5A706B; background: rgba(255,255,255,0.7); backdrop-filter: blur(4px);
  }
  .sc-hero-aside {
    background: rgba(255,255,255,0.6); backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.8); border-radius: 1.5rem;
    padding: 2.5rem; color: #1A2B26; position: relative;
    overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }
  .sc-hero-aside::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #e63946, #f4722b, #f9c74f, #6fcf97, #4ea8de, #8b5cf6);
    border-radius: 1.5rem 1.5rem 0 0;
  }
  .sc-aside-label {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; color: #A8BBB7; margin-bottom: 0.75rem;
  }
  .sc-aside-quote {
    font-family: 'DM Serif Display', serif; font-size: 1.25rem;
    line-height: 1.45; font-style: italic; color: #1A2B26; margin-bottom: 1.5rem;
  }
  .sc-slide-link {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.85rem; font-weight: 600; color: #7c3aed;
    text-decoration: none; border: 1px solid rgba(139,92,246,0.3);
    background: rgba(139,92,246,0.06); padding: 0.55rem 1.1rem;
    border-radius: 100px; transition: background 0.2s;
  }
  .sc-slide-link:hover { background: rgba(139,92,246,0.15); }

  .sc-section { max-width: 1100px; margin: 0 auto; padding: 5rem 3rem; }
  .sc-section-label {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; color: #6B9E8F; margin-bottom: 0.6rem;
  }
  .sc-h2 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    line-height: 1.2; margin-bottom: 1.25rem;
  }
  .sc-p { color: #5A706B; max-width: 60ch; }
  .sc-hr { border: none; border-top: 1px solid #DDE8E5; max-width: 1100px; margin: 0 auto; }
  .sc-rainbow-hr {
    border: none; height: 3px;
    background: linear-gradient(90deg, #e63946, #f4722b, #f9c74f, #6fcf97, #4ea8de, #8b5cf6);
    max-width: 1100px; margin: 0 auto; border-radius: 2px; opacity: 0.6;
  }

  .sc-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2rem; }
  .sc-card {
    background: #FFFFFF; border: 1px solid #DDE8E5;
    border-radius: 1.25rem; padding: 2.25rem;
    position: relative; overflow: hidden;
  }
  .sc-card-problem::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #e63946, #f4722b);
  }
  .sc-card-solution::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #6fcf97, #4ea8de, #8b5cf6);
  }
  .sc-card-icon {
    width: 44px; height: 44px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.25rem; font-size: 1.3rem;
  }
  .sc-card-icon-problem { background: #FDF0EB; }
  .sc-card-icon-solution { background: #EAF3F0; }
  .sc-card-h3 { font-family: 'DM Serif Display', serif; font-size: 1.3rem; margin-bottom: 0.75rem; }

  .sc-persona-wrap { display: grid; grid-template-columns: auto 1fr; gap: 3rem; align-items: start; margin-top: 2rem; }
  .sc-avatar {
    width: 160px; height: 160px; border-radius: 50%;
    background: linear-gradient(135deg, #e63946, #f4722b, #f9c74f, #6fcf97, #4ea8de, #8b5cf6);
    display: flex; align-items: center; justify-content: center;
    font-family: 'DM Serif Display', serif; font-size: 3rem;
    color: #FFFFFF; flex-shrink: 0; box-shadow: 0 4px 24px rgba(139,92,246,0.25);
  }
  .sc-persona-name { font-family: 'DM Serif Display', serif; font-size: 1.6rem; margin-bottom: 0.25rem; }
  .sc-persona-role { font-size: 0.85rem; color: #A8BBB7; margin-bottom: 1.25rem; font-weight: 500; letter-spacing: 0.04em; }
  .sc-needs-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; padding: 0; }
  .sc-needs-item { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.95rem; color: #5A706B; }
  .sc-needs-arrow {
    background: linear-gradient(90deg, #4ea8de, #8b5cf6);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; font-weight: 700; flex-shrink: 0; margin-top: 0.05rem;
  }

  .sc-insight-bg {
    background: #1A2B26; border-radius: 1.75rem; padding: 4rem;
    color: #FFFFFF; position: relative; overflow: hidden;
  }
  .sc-insight-bg::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #e63946, #f4722b, #f9c74f, #6fcf97, #4ea8de, #8b5cf6);
  }
  .sc-insight-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #C5DDD7; margin-bottom: 0.6rem; }
  .sc-insight-h2 { font-family: 'DM Serif Display', serif; font-size: clamp(1.8rem, 3vw, 2.5rem); line-height: 1.2; margin-bottom: 0.75rem; color: #FFFFFF; }
  .sc-insight-sub { color: rgba(255,255,255,0.6); max-width: 52ch; margin-bottom: 0; }
  .sc-pain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; margin-top: 2rem; }
  .sc-pain-item {
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1rem; padding: 1.4rem 1.6rem; font-size: 0.95rem;
    color: rgba(255,255,255,0.75); display: flex; gap: 0.75rem; align-items: flex-start;
  }
  .sc-pain-item:nth-child(1) .sc-dot { background: #e63946; }
  .sc-pain-item:nth-child(2) .sc-dot { background: #f9c74f; }
  .sc-pain-item:nth-child(3) .sc-dot { background: #6fcf97; }
  .sc-pain-item:nth-child(4) .sc-dot { background: #4ea8de; }
  .sc-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 0.45rem; }

  .sc-impact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-top: 2.5rem; }
  .sc-impact-card {
    background: #FFFFFF; border: 1px solid #DDE8E5;
    border-radius: 1.25rem; padding: 2rem 1.5rem;
    text-align: center; position: relative; overflow: hidden;
  }
  .sc-impact-card:nth-child(1)::before { content: ''; position: absolute; top:0; left:0; right:0; height:3px; background: #e63946; }
  .sc-impact-card:nth-child(2)::before { content: ''; position: absolute; top:0; left:0; right:0; height:3px; background: #f9c74f; }
  .sc-impact-card:nth-child(3)::before { content: ''; position: absolute; top:0; left:0; right:0; height:3px; background: #6fcf97; }
  .sc-impact-card:nth-child(4)::before { content: ''; position: absolute; top:0; left:0; right:0; height:3px; background: #4ea8de; }
  .sc-impact-icon { font-size: 2rem; margin-bottom: 0.5rem; }
  .sc-impact-p { font-size: 0.88rem; color: #5A706B; }

  .sc-contrib-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem; }
  .sc-contrib-item { background: #F5E9E3; border-radius: 1rem; padding: 1.5rem; }
  .sc-contrib-item-alt {
    background: linear-gradient(135deg, rgba(230,57,70,0.08), rgba(139,92,246,0.1));
    border: 1px solid rgba(139,92,246,0.2);
  }
  .sc-contrib-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
  .sc-contrib-h4 { font-family: 'DM Serif Display', serif; font-size: 1.05rem; color: #1A2B26; }
  .sc-contrib-link {
    background: linear-gradient(90deg, #4ea8de, #8b5cf6);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; text-decoration: none; font-family: 'DM Serif Display', serif;
  }

  .sc-contact-wrap {
    background: linear-gradient(135deg, rgba(230,57,70,0.05), rgba(249,199,79,0.05), rgba(78,168,222,0.05), rgba(139,92,246,0.08));
    border: 1px solid rgba(139,92,246,0.15); border-radius: 1.75rem; padding: 4rem;
    display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center;
    position: relative; overflow: hidden;
  }
  .sc-contact-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #e63946, #f4722b, #f9c74f, #6fcf97, #4ea8de, #8b5cf6);
  }
  .sc-contact-links { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-end; }
  .sc-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.7rem 1.4rem; border-radius: 100px; font-size: 0.88rem;
    font-weight: 600; text-decoration: none; transition: opacity 0.2s, transform 0.2s; cursor: pointer;
  }
  .sc-btn:hover { opacity: 0.85; transform: translateY(-1px); }
  .sc-btn-primary { background: linear-gradient(90deg, #4ea8de, #8b5cf6); color: #FFFFFF; }
  .sc-btn-secondary { background: #FFFFFF; color: #1A2B26; border: 1px solid #DDE8E5; }

  .sc-footer {
    text-align: center; padding: 2.5rem 3rem;
    font-size: 0.82rem; color: #A8BBB7; border-top: 1px solid #DDE8E5;
  }

  @media (max-width: 800px) {
    .sc-nav { padding: 1rem 1.5rem; }
    .sc-hero-spacer { height: 60px; }
  .sc-hero-banner { padding: 6rem 1.5rem 3rem; }
    .sc-hero-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .sc-section { padding: 3rem 1.5rem; }
    .sc-two-col { grid-template-columns: 1fr; }
    .sc-persona-wrap { grid-template-columns: 1fr; }
    .sc-impact-grid { grid-template-columns: repeat(2, 1fr); }
    .sc-contrib-list { grid-template-columns: 1fr; }
    .sc-contact-wrap { grid-template-columns: 1fr; padding: 2.5rem 1.75rem; }
    .sc-contact-links { align-items: flex-start; }
    .sc-pain-grid { grid-template-columns: 1fr; }
    .sc-needs-list { grid-template-columns: 1fr; }
    .sc-insight-bg { padding: 2.5rem 1.75rem; }
    .sc-rainbow-arc { width: 260%; }
  }
`;

const SLIDE_DECK_URL = "https://docs.google.com/presentation/d/1z3dJ51iwsrLsOPP2JKFR8KoIXkhMMT0hx6zoyZiT7fM/preview";

const needsList = [
  "A therapist who accepts her insurance",
  "Evening appointment availability",
  "Simple, trustworthy provider comparison",
  "Booking without phone calls",
];

const painPoints = [
  "Dense, confusing provider directories",
  "Unclear insurance acceptance status",
  "Limited visibility into appointment availability",
  "Back-and-forth booking communication",
];

const impactItems = [
  { icon: "⚡", text: "Filter by insurance & care type instantly" },
  { icon: "🌙", text: "See evening availability at a glance" },
  { icon: "🧠", text: "Compare providers without cognitive overload" },
  { icon: "✓",  text: "Book appointments online with confidence" },
];

const contributions = [
  { icon: "🎨", label: "UI Design System" },
  { icon: "📐", label: "Layout & Hierarchy Strategy" },
  { icon: "📱", label: "High-Fidelity Prototype" },
  { icon: "🔍", label: "Provider Search & Booking Flow" },
  { icon: "♿", label: "Accessibility-Minded Decisions" },
  { icon: "📎", label: null, isLink: true },
];

export default function SpectrumCare() {
  usePageMeta(
    "Spectrum Care — Therapist Search UX",
    "A UX/UI case study redesigning the therapist search experience for Spectrum Care, from research through high-fidelity prototype."
  );
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="sc-root">
<div className="sc-hero-spacer" />
      <div className="sc-hero-banner">
        <div className="sc-rainbow-arc" aria-hidden="true" />
        <div className="sc-hero-content">
          <div>
            <span className="sc-tag">UX/UI Case Study</span>
            <h1 className="sc-h1">Spectrum<br /><em>Care</em></h1>
            <p className="sc-hero-sub">
              A simpler way to find mental health providers — designed for real people with real constraints.
            </p>
            <div className="sc-pills">
              <span className="sc-pill">UX Case Study</span>
              <span className="sc-pill">Figma</span>
              <span className="sc-pill">Wireframing</span>
              <span className="sc-pill">Prototyping</span>
            </div>
          </div>
          <div className="sc-hero-aside">
            <div className="sc-aside-label">Design Principle</div>
            <p className="sc-aside-quote">
              "Clear, spacious layouts that surface the information users need most — without the clutter."
            </p>
            <a className="sc-slide-link" href={SLIDE_DECK_URL} target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              View Original Slide Deck
            </a>
          </div>
        </div>
      </div>

      <hr className="sc-rainbow-hr" />

      <section className="sc-section">
        <div className="sc-section-label">The Challenge</div>
        <h2 className="sc-h2">What needed to be solved</h2>
        <div className="sc-two-col">
          <div className="sc-card sc-card-problem">
            <div className="sc-card-icon sc-card-icon-problem">⚡</div>
            <h3 className="sc-card-h3">The Problem</h3>
            <p className="sc-p">Working adults struggle to find therapists who accept their insurance, offer evening appointments, and have clear, trustworthy information — especially when provider directories are overwhelming and outdated.</p>
          </div>
          <div className="sc-card sc-card-solution">
            <div className="sc-card-icon sc-card-icon-solution">✦</div>
            <h3 className="sc-card-h3">The Solution</h3>
            <p className="sc-p">A high-fidelity UI and prototype that simplifies provider discovery, highlights insurance acceptance upfront, surfaces evening availability immediately, and supports quick, confident decision-making.</p>
          </div>
        </div>
      </section>

      <hr className="sc-hr" />

      <section className="sc-section">
        <div className="sc-section-label">The User</div>
        <h2 className="sc-h2">Designing for Emily</h2>
        <div className="sc-persona-wrap">
          <div className="sc-avatar">ER</div>
          <div>
            <div className="sc-persona-name">Emily Rodriguez</div>
            <div className="sc-persona-role">Busy marketing manager &amp; mother of two</div>
            <ul className="sc-needs-list">
              {needsList.map((need, i) => (
                <li key={i} className="sc-needs-item">
                  <span className="sc-needs-arrow">&#8594;</span>
                  {need}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <hr className="sc-hr" />

      <section className="sc-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="sc-insight-bg">
          <div className="sc-insight-label">Key Insight</div>
          <h2 className="sc-insight-h2">Where users get stuck</h2>
          <p className="sc-insight-sub">Users like Emily don't lack motivation — they lack clarity. The friction is structural, not personal.</p>
          <div className="sc-pain-grid">
            {painPoints.map((point, i) => (
              <div key={i} className="sc-pain-item">
                <span className="sc-dot" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="sc-hr" style={{ marginTop: "5rem" }} />

      <section className="sc-section">
        <div className="sc-section-label">Impact</div>
        <h2 className="sc-h2">What the design enables</h2>
        <div className="sc-impact-grid">
          {impactItems.map((item, i) => (
            <div key={i} className="sc-impact-card">
              <div className="sc-impact-icon">{item.icon}</div>
              <p className="sc-impact-p">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="sc-rainbow-hr" />

      <section className="sc-section">
        <div className="sc-section-label">My Contribution</div>
        <h2 className="sc-h2">What I designed &amp; built</h2>
        <div className="sc-contrib-list">
          {contributions.map((item, i) =>
            item.isLink ? (
              <div key={i} className="sc-contrib-item sc-contrib-item-alt">
                <div className="sc-contrib-icon">{item.icon}</div>
                <h4 className="sc-contrib-h4">
                  <a href={SLIDE_DECK_URL} target="_blank" rel="noreferrer" className="sc-contrib-link">
                    View Full Slide Deck &#8594;
                  </a>
                </h4>
              </div>
            ) : (
              <div key={i} className="sc-contrib-item">
                <div className="sc-contrib-icon">{item.icon}</div>
                <h4 className="sc-contrib-h4">{item.label}</h4>
              </div>
            )
          )}
        </div>
      </section>

      <hr className="sc-hr" />

      <section className="sc-section" id="contact">
        <div className="sc-contact-wrap">
          <div>
            <div className="sc-section-label">Let's Connect</div>
            <h2 className="sc-h2">Interested in this work?</h2>
            <p className="sc-p">Reach out to learn more about the process, see the full prototype, or discuss opportunities.</p>
          </div>
          <div className="sc-contact-links">
            <a className="sc-btn sc-btn-primary" href="mailto:aimeevdb@gmail.com">
              &#9993; aimeevdb@gmail.com
            </a>
            <a className="sc-btn sc-btn-secondary" href="https://www.linkedin.com/in/aimee-van-den-broeke/" target="_blank" rel="noreferrer">
              LinkedIn Profile &#8594;
            </a>
          </div>
        </div>
      </section>

      <footer className="sc-footer">
        &copy; 2026 Aimee Van den broeke &middot; Spectrum Care UX/UI Case Study
      </footer>
    </div>
  );
}