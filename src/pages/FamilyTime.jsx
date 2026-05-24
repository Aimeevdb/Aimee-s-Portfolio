import React, { useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Fredoka+One&display=swap');

  .ft-root {
    font-family: 'Nunito', sans-serif;
    background: #fdf4ff;
    color: #2d1b4e;
    line-height: 1.7;
    font-size: 16px;
    min-height: 100vh;
  }

  /* HERO */
  .ft-hero-spacer { height: 60px; }
  .ft-hero {
    position: relative; overflow: hidden;
    padding: 9rem 3rem 5rem;
    background: linear-gradient(135deg, #fde68a 0%, #fbcfe8 30%, #c4b5fd 60%, #a5f3fc 100%);
  }
  .ft-hero-blob {
    position: absolute; top: -80px; right: -100px;
    width: 420px; height: 420px; border-radius: 50%;
    background: rgba(255,255,255,0.25);
    pointer-events: none;
  }
  .ft-hero-blob2 {
    position: absolute; bottom: -60px; left: -80px;
    width: 320px; height: 320px; border-radius: 50%;
    background: rgba(255,255,255,0.2);
    pointer-events: none;
  }
  .ft-hero-content {
    position: relative; z-index: 2;
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: center;
  }
  @keyframes ft-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ft-hero-content > * { animation: ft-fadeUp 0.7s ease both; }
  .ft-hero-content > *:nth-child(2) { animation-delay: 0.15s; }

  .ft-tag {
    display: inline-block; font-size: 0.72rem; font-weight: 800;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: #4c1d95; background: rgba(255,255,255,0.6);
    border: 1px solid rgba(124,58,237,0.25);
    padding: 0.35rem 0.85rem; border-radius: 100px; margin-bottom: 1.25rem;
  }
  .ft-h1 {
    font-family: 'Fredoka One', cursive;
    font-size: clamp(2.8rem, 5vw, 4rem);
    line-height: 1.1; color: #2d1b4e; margin-bottom: 1.25rem;
    text-shadow: 2px 3px 0px rgba(124,58,237,0.15);
  }
  .ft-h1 span {
    background: linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .ft-hero-sub { font-size: 1.05rem; color: #4c1d95; max-width: 38ch; margin-bottom: 2rem; font-weight: 600; }
  .ft-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .ft-pill {
    font-size: 0.78rem; font-weight: 700; padding: 0.35rem 0.9rem;
    border-radius: 100px; background: rgba(255,255,255,0.7);
    color: #4c1d95; border: 1px solid rgba(124,58,237,0.2);
  }

  /* HERO ASIDE */
  .ft-hero-aside {
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.8);
    border-radius: 1.5rem; padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(124,58,237,0.1);
  }
  .ft-aside-label {
    font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em;
    text-transform: uppercase; color: #7c3aed; margin-bottom: 0.5rem;
  }
  .ft-aside-role { font-family: 'Fredoka One', cursive; font-size: 1.2rem; color: #2d1b4e; margin-bottom: 0.5rem; }
  .ft-aside-resp { font-size: 0.9rem; color: #5b21b6; margin-bottom: 1.5rem; }
  .ft-slide-link {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.85rem; font-weight: 700; color: #7c3aed;
    text-decoration: none; border: 2px solid rgba(124,58,237,0.3);
    background: rgba(124,58,237,0.06); padding: 0.55rem 1.1rem;
    border-radius: 100px; transition: background 0.2s;
  }
  .ft-slide-link:hover { background: rgba(124,58,237,0.15); }

  /* SECTIONS */
  .ft-section { max-width: 1100px; margin: 0 auto; padding: 5rem 3rem; }
  .ft-section-label {
    font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em;
    text-transform: uppercase; color: #7c3aed; margin-bottom: 0.6rem;
  }
  .ft-h2 {
    font-family: 'Fredoka One', cursive;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    line-height: 1.15; margin-bottom: 1.25rem; color: #2d1b4e;
  }
  .ft-p { color: #5b21b6; max-width: 60ch; }
  .ft-hr { border: none; border-top: 2px dashed rgba(167,139,250,0.3); max-width: 1100px; margin: 0 auto; }
  .ft-rainbow-hr {
    border: none; height: 3px;
    background: linear-gradient(90deg, #f87171, #fb923c, #fbbf24, #34d399, #60a5fa, #a78bfa, #f472b6);
    max-width: 1100px; margin: 0 auto; border-radius: 100px; opacity: 0.6;
  }

  /* PROBLEM / GOAL */
  .ft-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .ft-card {
    background: #fff; border-radius: 1.5rem; padding: 2rem;
    box-shadow: 0 4px 20px rgba(124,58,237,0.08);
    border: 2px solid transparent;
    position: relative; overflow: hidden;
  }
  .ft-card-problem { border-color: rgba(251,146,60,0.3); }
  .ft-card-goal { border-color: rgba(52,211,153,0.3); }
  .ft-card-problem::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #f87171, #fb923c);
  }
  .ft-card-goal::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #34d399, #60a5fa);
  }
  .ft-card-h3 { font-family: 'Fredoka One', cursive; font-size: 1.25rem; color: #2d1b4e; margin-bottom: 0.75rem; }

  /* PERSONA */
  .ft-persona-card {
    background: #fff; border-radius: 1.5rem; padding: 2.5rem;
    box-shadow: 0 4px 20px rgba(124,58,237,0.08);
    display: grid; grid-template-columns: auto 1fr; gap: 2.5rem; align-items: start;
    margin-top: 2rem; border: 2px solid rgba(167,139,250,0.2);
  }
  .ft-persona-avatar {
    width: 120px; height: 120px; border-radius: 50%;
    background: linear-gradient(135deg, #fde68a, #fbcfe8, #c4b5fd);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Fredoka One', cursive; font-size: 2.5rem;
    color: #4c1d95; flex-shrink: 0;
    box-shadow: 0 4px 16px rgba(124,58,237,0.2);
  }
  .ft-persona-name { font-family: 'Fredoka One', cursive; font-size: 1.5rem; color: #2d1b4e; margin-bottom: 0.25rem; }
  .ft-persona-meta { font-size: 0.85rem; color: #7c3aed; font-weight: 700; margin-bottom: 1rem; }
  .ft-persona-bio { font-size: 0.92rem; color: #5b21b6; margin-bottom: 1.25rem; }
  .ft-goals-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
  .ft-goal-item {
    background: rgba(124,58,237,0.06); border-radius: 0.75rem; padding: 0.75rem;
    font-size: 0.85rem; color: #4c1d95; display: flex; gap: 0.5rem; align-items: flex-start;
  }
  .ft-goal-item::before { content: '✓'; color: #7c3aed; font-weight: 900; flex-shrink: 0; }

  /* PAIN POINTS */
  .ft-pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .ft-pain-card {
    background: #fff; border-radius: 1.25rem; padding: 1.75rem;
    box-shadow: 0 4px 16px rgba(124,58,237,0.08);
    text-align: center; border: 2px solid rgba(167,139,250,0.15);
  }
  .ft-pain-num {
    width: 48px; height: 48px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Fredoka One', cursive; font-size: 1.3rem;
    color: #fff; margin: 0 auto 1rem;
  }
  .ft-pain-card:nth-child(1) .ft-pain-num { background: linear-gradient(135deg, #f87171, #fb923c); }
  .ft-pain-card:nth-child(2) .ft-pain-num { background: linear-gradient(135deg, #60a5fa, #a78bfa); }
  .ft-pain-card:nth-child(3) .ft-pain-num { background: linear-gradient(135deg, #34d399, #60a5fa); }
  .ft-pain-title { font-family: 'Fredoka One', cursive; font-size: 1.05rem; color: #2d1b4e; margin-bottom: 0.5rem; }

  /* USABILITY */
  .ft-usability-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .ft-round-card {
    background: #fff; border-radius: 1.25rem; padding: 2rem;
    box-shadow: 0 4px 16px rgba(124,58,237,0.08);
    border: 2px solid rgba(167,139,250,0.15);
  }
  .ft-round-label { font-family: 'Fredoka One', cursive; font-size: 1.1rem; color: #7c3aed; margin-bottom: 1rem; }
  .ft-round-item {
    display: flex; gap: 0.75rem; align-items: flex-start;
    margin-bottom: 0.75rem; font-size: 0.9rem; color: #5b21b6;
  }
  .ft-round-num {
    width: 24px; height: 24px; border-radius: 50%;
    background: linear-gradient(135deg, #c4b5fd, #7c3aed);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.72rem; font-weight: 900; color: #fff; flex-shrink: 0; margin-top: 0.1rem;
  }

  /* CONTRIBUTIONS */
  .ft-contrib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem; }
  .ft-contrib-item {
    background: #fff; border-radius: 1.25rem; padding: 1.5rem;
    box-shadow: 0 4px 16px rgba(124,58,237,0.06);
    border: 2px solid rgba(167,139,250,0.15);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .ft-contrib-item:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.15); }
  .ft-contrib-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
  .ft-contrib-h4 { font-family: 'Fredoka One', cursive; font-size: 1rem; color: #2d1b4e; }

  /* CONTACT */
  .ft-contact-wrap {
    background: linear-gradient(135deg, rgba(253,230,138,0.4), rgba(251,207,232,0.4), rgba(196,181,253,0.4));
    border: 2px solid rgba(167,139,250,0.25);
    border-radius: 2rem; padding: 4rem;
    display: grid; grid-template-columns: 1fr auto;
    gap: 3rem; align-items: center;
    position: relative; overflow: hidden;
  }
  .ft-contact-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #f87171, #fb923c, #fbbf24, #34d399, #60a5fa, #a78bfa, #f472b6);
  }
  .ft-contact-links { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-end; }
  .ft-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.7rem 1.4rem; border-radius: 100px; font-size: 0.88rem;
    font-weight: 700; text-decoration: none; transition: opacity 0.2s, transform 0.2s; cursor: pointer;
  }
  .ft-btn:hover { opacity: 0.85; transform: translateY(-1px); }
  .ft-btn-primary { background: linear-gradient(135deg, #7c3aed, #ec4899); color: #fff; }
  .ft-btn-secondary { background: #fff; color: #4c1d95; border: 2px solid rgba(124,58,237,0.2); }

  /* FOOTER */
  .ft-footer {
    text-align: center; padding: 2.5rem 3rem;
    font-size: 0.82rem; color: #a78bfa;
    border-top: 2px dashed rgba(167,139,250,0.2);
  }

  /* RESPONSIVE */
  @media (max-width: 800px) {
    .ft-nav { padding: 1rem 1.5rem; }
    .ft-hero-spacer { height: 60px; }
  .ft-hero { padding: 7rem 1.5rem 3rem; }
    .ft-hero-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .ft-section { padding: 3rem 1.5rem; }
    .ft-two-col, .ft-usability-grid { grid-template-columns: 1fr; }
    .ft-persona-card { grid-template-columns: 1fr; }
    .ft-pain-grid, .ft-contrib-grid { grid-template-columns: 1fr 1fr; }
    .ft-goals-grid { grid-template-columns: 1fr; }
    .ft-contact-wrap { grid-template-columns: 1fr; padding: 2.5rem 1.75rem; }
    .ft-contact-links { align-items: flex-start; }
  }
  @media (max-width: 500px) {
    .ft-pain-grid, .ft-contrib-grid { grid-template-columns: 1fr; }
  }
`;

const SLIDE_DECK_URL = "https://docs.google.com/presentation/d/1rczfd_3AwJShuy16aaw72CQ-mfazugM1oy59Lddg6eI/preview";

const painPoints = [
  { title: "Time Management", desc: "Balancing personal, professional, and family schedules leads to constant pressure and missed downtime." },
  { title: "Communication", desc: "Lack of real-time updates on a shared platform causes misunderstandings and missed appointments." },
  { title: "Prioritizing Family Time", desc: "With everyone on different schedules, finding common time for family bonding feels impossible." },
];

const round1 = [
  "Needed to remove premium features for now.",
  "The week view on the calendar needed to be expanded.",
];

const round2 = [
  "Doesn't necessarily work if phone is in dark mode.",
  "Should add more personalization features.",
];

const contributions = [
  { icon: "🎨", label: "Lead UX Designer" },
  { icon: "🔬", label: "User Research & Interviews" },
  { icon: "📐", label: "Wireframing" },
  { icon: "📱", label: "Prototyping" },
  { icon: "✅", label: "Finished Product" },
  { icon: "📎", label: null, isLink: true },
];

export default function FamilyTime() {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="ft-root">
{/* HERO */}
      <div className="ft-hero-spacer" />
      <div className="ft-hero">
        <div className="ft-hero-blob" aria-hidden="true" />
        <div className="ft-hero-blob2" aria-hidden="true" />
        <div className="ft-hero-content">
          <div>
            <span className="ft-tag">UX Case Study &middot; First Project</span>
            <h1 className="ft-h1">Family<br /><span>Time App</span></h1>
            <p className="ft-hero-sub">
              A scheduling app to help working families with multiple schedules keep track and create a better work-life balance.
            </p>
            <div className="ft-pills">
              <span className="ft-pill">UX Case Study</span>
              <span className="ft-pill">Figma</span>
              <span className="ft-pill">Wireframing</span>
              <span className="ft-pill">Prototyping</span>
            </div>
          </div>
          <div className="ft-hero-aside">
            <div className="ft-aside-label">My Role</div>
            <div className="ft-aside-role">Lead UX Designer</div>
            <div className="ft-aside-label">Responsibilities</div>
            <div className="ft-aside-resp">User research, wireframing, prototyping, finished product.</div>
            <div className="ft-aside-label">Project Started</div>
            <div className="ft-aside-resp" style={{ marginBottom: "1.5rem" }}>September 2024</div>
            <a className="ft-slide-link" href={SLIDE_DECK_URL} target="_blank" rel="noreferrer">
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

      <hr className="ft-rainbow-hr" />

      {/* PROBLEM & GOAL */}
      <section className="ft-section">
        <div className="ft-section-label">Project Overview</div>
        <h2 className="ft-h2">The challenge &amp; the goal</h2>
        <div className="ft-two-col">
          <div className="ft-card ft-card-problem">
            <h3 className="ft-card-h3">&#9888; The Problem</h3>
            <p className="ft-p">Sarah is overwhelmed by managing her small business and her family's conflicting schedules. She frequently misses important events or struggles to keep everyone informed about changes.</p>
          </div>
          <div className="ft-card ft-card-goal">
            <h3 className="ft-card-h3">&#11088; The Goal</h3>
            <p className="ft-p">Provide Sarah with an easy-to-use scheduling tool that organizes her family's schedules and offers real-time updates — reducing stress, managing time more efficiently, and prioritizing family connections.</p>
          </div>
        </div>
      </section>

      <hr className="ft-hr" />

      {/* PERSONA */}
      <section className="ft-section">
        <div className="ft-section-label">The User</div>
        <h2 className="ft-h2">Designing for Sarah</h2>
        <div className="ft-persona-card">
          <div className="ft-persona-avatar">ST</div>
          <div>
            <div className="ft-persona-name">Sarah Thompson</div>
            <div className="ft-persona-meta">Age 50 &middot; Small Business Owner &middot; Married with 2 teens</div>
            <p className="ft-persona-bio">Sarah manages both her work and family life in a suburban neighborhood. She has two teenagers in numerous extracurriculars and a spouse with a demanding job. She values efficiency and is always looking for tools that can help simplify her life.</p>
            <div className="ft-goals-grid">
              <div className="ft-goal-item">Find a centralized solution to manage all schedules in real-time</div>
              <div className="ft-goal-item">Achieve a better work-life balance with more time for herself</div>
              <div className="ft-goal-item">Create moments of family bonding amongst busy schedules</div>
              <div className="ft-goal-item">Coordinate schedules across the family without friction</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="ft-hr" />

      {/* PAIN POINTS */}
      <section className="ft-section">
        <div className="ft-section-label">Research Findings</div>
        <h2 className="ft-h2">Key pain points</h2>
        <div className="ft-pain-grid">
          {painPoints.map((p, i) => (
            <div key={i} className="ft-pain-card">
              <div className="ft-pain-num">{i + 1}</div>
              <div className="ft-pain-title">{p.title}</div>
              <p className="ft-p" style={{ fontSize: "0.88rem" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="ft-rainbow-hr" />

      {/* USABILITY */}
      <section className="ft-section">
        <div className="ft-section-label">Usability Study</div>
        <h2 className="ft-h2">Two rounds of findings</h2>
        <div className="ft-usability-grid">
          <div className="ft-round-card">
            <div className="ft-round-label">Round 1 Findings</div>
            {round1.map((f, i) => (
              <div key={i} className="ft-round-item">
                <span className="ft-round-num">{i + 1}</span>
                {f}
              </div>
            ))}
          </div>
          <div className="ft-round-card">
            <div className="ft-round-label">Round 2 Findings</div>
            {round2.map((f, i) => (
              <div key={i} className="ft-round-item">
                <span className="ft-round-num">{i + 1}</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ft-hr" />

      {/* CONTRIBUTIONS */}
      <section className="ft-section">
        <div className="ft-section-label">My Contribution</div>
        <h2 className="ft-h2">What I designed &amp; built</h2>
        <div className="ft-contrib-grid">
          {contributions.map((item, i) =>
            item.isLink ? (
              <div key={i} className="ft-contrib-item">
                <div className="ft-contrib-icon">{item.icon}</div>
                <h4 className="ft-contrib-h4">
                  <a href={SLIDE_DECK_URL} target="_blank" rel="noreferrer" style={{ color: "#7c3aed", textDecoration: "none" }}>
                    View Full Case Study &#8594;
                  </a>
                </h4>
              </div>
            ) : (
              <div key={i} className="ft-contrib-item">
                <div className="ft-contrib-icon">{item.icon}</div>
                <h4 className="ft-contrib-h4">{item.label}</h4>
              </div>
            )
          )}
        </div>
      </section>

      <hr className="ft-hr" />

      {/* CONTACT */}
      <section className="ft-section" id="contact">
        <div className="ft-contact-wrap">
          <div>
            <div className="ft-section-label">Let's Connect</div>
            <h2 className="ft-h2">Interested in this work?</h2>
            <p className="ft-p">Reach out to learn more about the process, see the full prototype, or discuss opportunities.</p>
          </div>
          <div className="ft-contact-links">
            <a className="ft-btn ft-btn-primary" href="mailto:aimeevdb@gmail.com">
              &#9993; aimeevdb@gmail.com
            </a>
            <a className="ft-btn ft-btn-secondary" href="https://www.linkedin.com/in/aimee-van-den-broeke/" target="_blank" rel="noreferrer">
              LinkedIn &#8594;
            </a>
          </div>
        </div>
      </section>

      <footer className="ft-footer">
        &copy; 2026 Aimee Van den Broeke &middot; Family Time App UX Case Study
      </footer>
    </div>
  );
}