import React, { useEffect } from "react";
import usePageMeta from "../hooks/usePageMeta";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap');

  .aq-root {
    font-family: 'Nunito', sans-serif;
    background: #FAF7F0;
    color: #2B2440;
    line-height: 1.7;
    font-size: 16px;
    min-height: 100vh;
  }

  /* HERO */
  .aq-hero-spacer { height: 60px; }
  .aq-hero {
    position: relative; overflow: hidden;
    padding: 9rem 3rem 5rem;
    background: linear-gradient(135deg, #4A6FA5 0%, #7442A0 100%);
  }
  .aq-hero-orb {
    position: absolute; top: -100px; right: -80px;
    width: 460px; height: 460px; border-radius: 50%;
    background: radial-gradient(circle, rgba(242,153,74,0.25) 0%, transparent 70%);
    pointer-events: none;
  }
  .aq-hero-orb2 {
    position: absolute; bottom: -120px; left: -80px;
    width: 380px; height: 380px; border-radius: 50%;
    background: radial-gradient(circle, rgba(76,154,106,0.25) 0%, transparent 70%);
    pointer-events: none;
  }
  .aq-hero-content {
    position: relative; z-index: 2;
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: center;
  }
  @keyframes aq-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .aq-hero-content > * { animation: aq-fadeUp 0.7s ease both; }
  .aq-hero-content > *:nth-child(2) { animation-delay: 0.15s; }

  .aq-tag {
    display: inline-block; font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: #fff; background: rgba(242,153,74,0.9);
    padding: 0.35rem 0.85rem; border-radius: 100px; margin-bottom: 1.25rem;
  }
  .aq-h1 {
    font-family: 'Baloo 2', cursive;
    font-size: clamp(2.8rem, 5vw, 4rem);
    line-height: 1.15; padding-bottom: 0.1em; color: #fff; margin-bottom: 1.25rem;
  }
  .aq-h1 em {
    font-style: normal;
    color: #FFD27D;
  }
  .aq-hero-sub { font-size: 1.08rem; color: rgba(255,255,255,0.85); max-width: 42ch; margin-bottom: 2rem; }
  .aq-pills { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .aq-pill {
    font-size: 0.78rem; font-weight: 600; padding: 0.35rem 0.9rem;
    border-radius: 100px; border: 1px solid rgba(255,255,255,0.3);
    color: #fff; background: rgba(255,255,255,0.12);
  }

  /* HERO ASIDE */
  .aq-hero-aside {
    background: rgba(255,255,255,0.95);
    border-radius: 1.5rem; padding: 2.5rem;
    position: relative; overflow: hidden;
    box-shadow: 0 12px 40px rgba(0,0,0,0.18);
  }
  .aq-aside-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; color: #7442A0; margin-bottom: 0.4rem;
  }
  .aq-aside-value { font-family: 'Baloo 2', cursive; font-size: 1.05rem; color: #2B2440; margin-bottom: 1.25rem; }
  .aq-status-pill {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 0.85rem; font-weight: 700; color: #2E7D4F;
    background: rgba(76,154,106,0.12); border: 1px solid rgba(76,154,106,0.3);
    padding: 0.3rem 0.8rem; border-radius: 100px; margin-bottom: 1.5rem;
  }
  .aq-status-dot { width: 8px; height: 8px; border-radius: 50%; background: #4C9A6A; }
  .aq-proto-link {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
    font-size: 0.92rem; font-weight: 700; color: #fff;
    text-decoration: none; background: linear-gradient(90deg, #F2994A, #F2C94C);
    padding: 0.75rem 1.2rem; border-radius: 100px; transition: transform 0.2s, opacity 0.2s;
    width: 100%; box-sizing: border-box;
  }
  .aq-proto-link:hover { transform: translateY(-1px); opacity: 0.92; }

  /* SECTIONS */
  .aq-section { max-width: 1100px; margin: 0 auto; padding: 5rem 3rem; overflow: visible; }
  .aq-section-label {
    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
    text-transform: uppercase; color: #7442A0; margin-bottom: 0.6rem;
  }
  .aq-h2 {
    font-family: 'Baloo 2', cursive;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    line-height: 1.4; padding-bottom: 0.3em; margin-bottom: 1rem; color: #2B2440;
    overflow: visible; display: block;
  }
  .aq-p { color: rgba(43,36,64,0.7); max-width: 60ch; }
  .aq-hr { border: none; border-top: 1px solid rgba(116,66,160,0.15); max-width: 1100px; margin: 0 auto; }
  .aq-gradient-hr {
    border: none; height: 3px;
    background: linear-gradient(90deg, #4A6FA5, #7442A0, #F2994A);
    max-width: 1100px; margin: 0 auto; border-radius: 2px; opacity: 0.55;
  }

  /* PROBLEM / GOAL */
  .aq-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
  .aq-card {
    background: #fff;
    border: 1px solid rgba(116,66,160,0.15);
    border-radius: 1.25rem; padding: 2rem;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 20px rgba(74,111,165,0.08);
  }
  .aq-card-problem::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #f87171, #fb923c);
  }
  .aq-card-goal::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #4C9A6A, #7442A0);
  }
  .aq-card-h3 { font-family: 'Baloo 2', cursive; font-size: 1.25rem; color: #2B2440; margin-bottom: 0.75rem; }

  /* WHY IT MATTERS */
  .aq-matters-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 2rem; }
  .aq-matters-item {
    background: #fff; border: 1px solid rgba(116,66,160,0.15);
    border-radius: 1rem; padding: 1.4rem 1.6rem;
    display: flex; gap: 0.9rem; align-items: flex-start;
    box-shadow: 0 4px 16px rgba(74,111,165,0.06);
  }
  .aq-matters-icon {
    width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
    background: linear-gradient(135deg, #4A6FA5, #7442A0);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; color: #fff;
  }
  .aq-matters-text { font-size: 0.95rem; color: rgba(43,36,64,0.75); }

  /* SCREENS / FEATURES */
  .aq-screens-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .aq-screen-card {
    background: #fff; border: 1px solid rgba(116,66,160,0.15);
    border-radius: 1.25rem; padding: 1.75rem;
    box-shadow: 0 4px 16px rgba(74,111,165,0.07);
  }
  .aq-screen-num {
    width: 36px; height: 36px; border-radius: 50%;
    background: linear-gradient(135deg, #F2994A, #F2C94C);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Baloo 2', cursive; font-size: 0.95rem;
    color: #fff; margin-bottom: 1rem;
  }
  .aq-screen-title { font-family: 'Baloo 2', cursive; font-size: 1.05rem; color: #2B2440; margin-bottom: 0.5rem; }
  .aq-screen-desc { font-size: 0.88rem; color: rgba(43,36,64,0.65); }

  /* TEAM */
  .aq-team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
  .aq-team-card {
    background: #fff; border: 1px solid rgba(116,66,160,0.15);
    border-radius: 1.25rem; padding: 1.75rem;
    display: flex; gap: 1.1rem; align-items: flex-start;
    box-shadow: 0 4px 16px rgba(74,111,165,0.07);
  }
  .aq-team-avatar {
    width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Baloo 2', cursive; font-size: 1.2rem; color: #fff;
  }
  .aq-team-avatar-1 { background: linear-gradient(135deg, #4A6FA5, #7442A0); }
  .aq-team-avatar-2 { background: linear-gradient(135deg, #F2994A, #F2C94C); }
  .aq-team-name { font-family: 'Baloo 2', cursive; font-size: 1.05rem; color: #2B2440; margin-bottom: 0.2rem; }
  .aq-team-role { font-size: 0.78rem; color: #7442A0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
  .aq-team-desc { font-size: 0.88rem; color: rgba(43,36,64,0.65); }

  /* ROADMAP */
  .aq-roadmap { margin-top: 2rem; display: flex; flex-direction: column; gap: 0.9rem; }
  .aq-roadmap-item {
    display: grid; grid-template-columns: auto 1fr auto; gap: 1.1rem; align-items: center;
    background: #fff; border: 1px solid rgba(116,66,160,0.15);
    border-radius: 1rem; padding: 1.1rem 1.4rem;
  }
  .aq-roadmap-dot {
    width: 14px; height: 14px; border-radius: 50%;
  }
  .aq-roadmap-active .aq-roadmap-dot { background: #4C9A6A; box-shadow: 0 0 0 4px rgba(76,154,106,0.18); }
  .aq-roadmap-upcoming .aq-roadmap-dot { background: rgba(43,36,64,0.18); }
  .aq-roadmap-phase { font-family: 'Baloo 2', cursive; font-size: 0.98rem; color: #2B2440; }
  .aq-roadmap-deliv { font-size: 0.82rem; color: rgba(43,36,64,0.55); margin-top: 0.15rem; }
  .aq-roadmap-time { font-size: 0.8rem; font-weight: 700; color: #7442A0; text-align: right; white-space: nowrap; }
  .aq-roadmap-active .aq-roadmap-time { color: #2E7D4F; }

  /* TRY IT */
  .aq-try-wrap {
    background: linear-gradient(135deg, #4A6FA5 0%, #7442A0 100%);
    border-radius: 1.75rem; padding: 3.5rem;
    color: #fff; position: relative; overflow: hidden;
  }
  .aq-try-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #F2994A, #F2C94C);
  }
  .aq-try-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #FFD27D; margin-bottom: 0.6rem; }
  .aq-try-h2 { font-family: 'Baloo 2', cursive; font-size: clamp(1.8rem, 3vw, 2.3rem); line-height: 1.3; margin-bottom: 0.9rem; color: #fff; }
  .aq-try-sub { color: rgba(255,255,255,0.8); max-width: 60ch; margin-bottom: 2rem; }
  .aq-try-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
  .aq-try-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.8rem 1.5rem; border-radius: 100px; font-size: 0.92rem;
    font-weight: 700; text-decoration: none; transition: opacity 0.2s, transform 0.2s; cursor: pointer;
  }
  .aq-try-btn:hover { opacity: 0.9; transform: translateY(-1px); }
  .aq-try-btn-primary { background: linear-gradient(90deg, #F2994A, #F2C94C); color: #2B2440; }
  .aq-try-btn-secondary { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
  .aq-try-metrics { display: flex; gap: 2.5rem; margin-top: 2.5rem; flex-wrap: wrap; }
  .aq-try-metric-num { font-family: 'Baloo 2', cursive; font-size: 1.4rem; color: #FFD27D; }
  .aq-try-metric-label { font-size: 0.78rem; color: rgba(255,255,255,0.7); }

  /* CONTRIBUTIONS */
  .aq-contrib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem; }
  .aq-contrib-item {
    background: #fff;
    border: 1px solid rgba(116,66,160,0.15);
    border-radius: 1rem; padding: 1.5rem;
    transition: border-color 0.2s; box-shadow: 0 4px 16px rgba(74,111,165,0.06);
  }
  .aq-contrib-item:hover { border-color: rgba(116,66,160,0.4); }
  .aq-contrib-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
  .aq-contrib-h4 { font-family: 'Baloo 2', cursive; font-size: 0.95rem; color: #2B2440; }

  /* CONTACT */
  .aq-contact-wrap {
    background: linear-gradient(135deg, rgba(74,111,165,0.1), rgba(242,153,74,0.1));
    border: 1px solid rgba(116,66,160,0.2);
    border-radius: 1.75rem; padding: 4rem;
    display: grid; grid-template-columns: 1fr auto;
    gap: 3rem; align-items: center; position: relative; overflow: hidden;
  }
  .aq-contact-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #4A6FA5, #7442A0, #F2994A);
  }
  .aq-contact-links { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-end; }
  .aq-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.7rem 1.4rem; border-radius: 100px; font-size: 0.88rem;
    font-weight: 700; text-decoration: none; transition: opacity 0.2s, transform 0.2s; cursor: pointer;
  }
  .aq-btn:hover { opacity: 0.85; transform: translateY(-1px); }
  .aq-btn-primary { background: linear-gradient(90deg, #4A6FA5, #7442A0); color: #fff; }
  .aq-btn-secondary { background: #fff; color: #2B2440; border: 1px solid rgba(116,66,160,0.25); }

  /* FOOTER */
  .aq-footer {
    text-align: center; padding: 2.5rem 3rem;
    font-size: 0.82rem; color: rgba(43,36,64,0.4);
    border-top: 1px solid rgba(116,66,160,0.15);
  }

  /* RESPONSIVE */
  @media (max-width: 800px) {
    .aq-hero-spacer { height: 60px; }
    .aq-hero { padding: 7rem 1.5rem 3rem; }
    .aq-hero-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .aq-section { padding: 3rem 1.5rem; }
    .aq-two-col, .aq-matters-grid, .aq-team-grid { grid-template-columns: 1fr; }
    .aq-screens-grid, .aq-contrib-grid { grid-template-columns: 1fr 1fr; }
    .aq-try-wrap { padding: 2.5rem 1.75rem; }
    .aq-roadmap-item { grid-template-columns: auto 1fr; }
    .aq-roadmap-time { grid-column: 2; text-align: left; }
    .aq-contact-wrap { grid-template-columns: 1fr; padding: 2.5rem 1.75rem; }
    .aq-contact-links { align-items: flex-start; }
  }
  @media (max-width: 500px) {
    .aq-screens-grid, .aq-contrib-grid { grid-template-columns: 1fr; }
  }
`;

const PROTOTYPE_URL = "https://www.figma.com/proto/DCYSjEav03MOQVkQWSzTlv/ADHD-Quest?node-id=118-15&starting-point-node-id=118-15";
const SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLScI50vasommpPAlLAa1ro9FA5eOXyErhBdrjfbaKL4bLgY5GA/viewform";

const matters = [
  { icon: "🧩", text: "Reduces cognitive load by breaking complex tasks into manageable steps" },
  { icon: "🎁", text: "Reinforces motivation with meaningful, real-world reward suggestions" },
  { icon: "🔗", text: "Connects digital actions to tangible outcomes, strengthening engagement" },
  { icon: "⚡", text: "Provides immediate feedback loops that sustain momentum and focus" },
];

const screens = [
  { title: "Onboarding", desc: "Welcoming landing screen with the Brownie Quest brand identity, friendly tone, and a clear call to action." },
  { title: "Add a Task", desc: "Users capture tasks quickly with minimal friction — a simple input with supportive, encouraging copy." },
  { title: "Break It Down", desc: "Tasks are decomposed into step-by-step sub-tasks, with the brownie companion encouraging progress at each step." },
  { title: "Task Complete!", desc: "An animated celebration screen with the brownie mascot reacting to the achievement, reinforcing positive behavior." },
  { title: "Reward Time!", desc: "Users unlock a small reward — a treat suggestion or in-app collectible — closing the positive reinforcement loop." },
  { title: "Customization", desc: "Users personalize their brownie's clothing, accessories, and background scenes to build emotional attachment." },
];

const roadmap = [
  { phase: "1 · UX/UI Design", deliv: "Wireframes, interactive Figma prototype, design system", time: "Jun – Jul 2026", status: "active" },
  { phase: "2 · User Research", deliv: "Survey design, distribution, and preliminary usability testing", time: "Jun – Aug 2026", status: "active" },
  { phase: "3 · Documentation", deliv: "Case study write-up, research summary, design rationale", time: "Aug – Sep 2026", status: "upcoming" },
  { phase: "4 · Slide Deck", deliv: "Case study presentation deck", time: "Sep – Oct 2026", status: "upcoming" },
  { phase: "5 · Review & Wrap", deliv: "Final review, iterations, portfolio packaging", time: "Oct – Nov 2026", status: "upcoming" },
];

const contributions = [
  { icon: "🎨", label: "UX/UI Design" },
  { icon: "📐", label: "Wireframing & Information Architecture" },
  { icon: "🧪", label: "Interactive Prototyping in Figma" },
  { icon: "📋", label: "Usability Test Design" },
  { icon: "🗂️", label: "Project Management & Documentation" },
  { icon: "🧙", label: "Mascot & Visual Concept Direction" },
];

export default function BrownieQuest() {
  usePageMeta(
    "Brownie Quest — Gamified ADHD Task App",
    "A UX/UI case study: designing Brownie Quest, a gamified task app that helps people with ADHD break tasks into steps, guided by a brownie companion. Figma prototype and user research in progress."
  );
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="aq-root">
      {/* HERO */}
      <div className="aq-hero-spacer" />
      <div className="aq-hero">
        <div className="aq-hero-orb" aria-hidden="true" />
        <div className="aq-hero-orb2" aria-hidden="true" />
        <div className="aq-hero-content">
          <div>
            <span className="aq-tag">UX/UI Case Study · In Progress</span>
            <h1 className="aq-h1">Brownie <em>Quest</em></h1>
            <p className="aq-hero-sub">
              A gamified task management app that helps people with ADHD break tasks into manageable steps — guided by a brownie companion who celebrates every win.
            </p>
            <div className="aq-pills">
              <span className="aq-pill">UX/UI Design</span>
              <span className="aq-pill">Figma</span>
              <span className="aq-pill">Prototyping</span>
              <span className="aq-pill">User Research</span>
            </div>
          </div>
          <div className="aq-hero-aside">
            <div className="aq-status-pill">
              <span className="aq-status-dot" />
              Active — Phase 1 &amp; 2
            </div>
            <div className="aq-aside-label">My Role</div>
            <div className="aq-aside-value">UX/UI Design &amp; Project Management</div>
            <div className="aq-aside-label">Timeline</div>
            <div className="aq-aside-value">June – November 2026</div>
            <a className="aq-proto-link" href={PROTOTYPE_URL} target="_blank" rel="noreferrer">
              🧙 Try the Interactive Prototype
            </a>
          </div>
        </div>
      </div>

      <hr className="aq-gradient-hr" />

      {/* PROBLEM & GOAL */}
      <section className="aq-section">
        <div className="aq-section-label">Project Overview</div>
        <h2 className="aq-h2">The challenge &amp; the goal</h2>
        <div className="aq-two-col">
          <div className="aq-card aq-card-problem">
            <h3 className="aq-card-h3">⚠️ The Problem</h3>
            <p className="aq-p">People with ADHD frequently struggle with task initiation, overwhelm from long to-do lists, and motivation that fades without immediate reward. Most productivity tools are built for neurotypical users and don't account for how ADHD brains actually work.</p>
          </div>
          <div className="aq-card aq-card-goal">
            <h3 className="aq-card-h3">⭐ The Goal</h3>
            <p className="aq-p">Design and validate a high-fidelity Figma prototype and research-backed case study — turning everyday to-dos into quests with clear steps, a supportive companion, and dopamine-friendly rewards.</p>
          </div>
        </div>
      </section>

      <hr className="aq-hr" />

      {/* WHY THIS MATTERS */}
      <section className="aq-section">
        <div className="aq-section-label">Why This Matters</div>
        <h2 className="aq-h2">Designing with the ADHD brain, not against it</h2>
        <div className="aq-matters-grid">
          {matters.map((m, i) => (
            <div key={i} className="aq-matters-item">
              <div className="aq-matters-icon">{m.icon}</div>
              <div className="aq-matters-text">{m.text}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="aq-hr" />

      {/* THE NAME */}
      <section className="aq-section">
        <div className="aq-section-label">The Name</div>
        <h2 className="aq-h2">Why Brownie Quest?</h2>
        <p className="aq-p">
          The name does two jobs at once — and the second one turned out to describe the entire app.
        </p>
        <div className="aq-two-col">
          <div className="aq-card">
            <h3 className="aq-card-h3">🏅 Brownie points</h3>
            <p className="aq-p">
              The everyday sense: small, earned recognition for getting something done. No trophy, no
              fanfare — just credit where it's due. That's the loop this app runs on.
            </p>
          </div>
          <div className="aq-card">
            <h3 className="aq-card-h3">🧙 The folklore</h3>
            <p className="aq-p">
              In British and Scottish folklore, a brownie is a household spirit who does the chores
              overnight — in exchange for a small treat left out for them. A bowl of cream, a bit of
              bread. Do the work, get the reward.
            </p>
          </div>
        </div>
        <p className="aq-p" style={{ marginTop: "2rem" }}>
          That second meaning stopped feeling like a coincidence the moment we noticed it. The
          brownie's bargain <em>is</em> the mechanic — break a chore into steps, finish it, and close
          the loop with something real instead of a checked box. The name arrived after the design
          was already built, and then explained it better than we had.
        </p>
        <p className="aq-p" style={{ marginTop: "1.25rem", fontStyle: "italic" }}>
          Brownie Quest was Marina's idea — both meanings.
        </p>
      </section>

      <hr className="aq-gradient-hr" />

      {/* SCREENS */}
      <section className="aq-section">
        <div className="aq-section-label">The Experience</div>
        <h2 className="aq-h2">How the quest works</h2>
        <div className="aq-screens-grid">
          {screens.map((s, i) => (
            <div key={i} className="aq-screen-card">
              <div className="aq-screen-num">{i + 1}</div>
              <div className="aq-screen-title">{s.title}</div>
              <div className="aq-screen-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="aq-hr" />

      {/* TEAM */}
      <section className="aq-section">
        <div className="aq-section-label">The Team</div>
        <h2 className="aq-h2">Who's building this</h2>
        <div className="aq-team-grid">
          <div className="aq-team-card">
            <div className="aq-team-avatar aq-team-avatar-1">A</div>
            <div>
              <div className="aq-team-name">Aimee — Project Lead</div>
              <div className="aq-team-role">UX/UI Design &amp; Project Management</div>
              <div className="aq-team-desc">Owns end-to-end design: research, wireframes, prototyping, usability testing, and documentation.</div>
            </div>
          </div>
          <div className="aq-team-card">
            <div className="aq-team-avatar aq-team-avatar-2">M</div>
            <div>
              <div className="aq-team-name">Marina Henderson — Co-Author</div>
              <div className="aq-team-role">Concept &amp; Creative Direction</div>
              <div className="aq-team-desc">Originated the quest concept, named the project, and collaborates on creative direction and review.</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="aq-gradient-hr" />

      {/* ROADMAP */}
      <section className="aq-section">
        <div className="aq-section-label">Project Roadmap</div>
        <h2 className="aq-h2">Where this stands</h2>
        <p className="aq-p">Brownie Quest is a 3–6 month project (June–November 2026). Here's the current state of each phase.</p>
        <div className="aq-roadmap">
          {roadmap.map((r, i) => (
            <div key={i} className={`aq-roadmap-item aq-roadmap-${r.status}`}>
              <span className="aq-roadmap-dot" />
              <div>
                <div className="aq-roadmap-phase">{r.phase}</div>
                <div className="aq-roadmap-deliv">{r.deliv}</div>
              </div>
              <div className="aq-roadmap-time">{r.time}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="aq-hr" />

      {/* TRY IT */}
      <section className="aq-section" style={{ paddingTop: 0 }}>
        <div className="aq-try-wrap">
          <div className="aq-try-label">Right Now</div>
          <h2 className="aq-try-h2">An interactive prototype is live — and so is preliminary user testing</h2>
          <p className="aq-try-sub">
            Before moving into high-fidelity mockups, I wired up an 11-screen click-through prototype in Figma and launched a short usability survey to validate the core flow: onboarding, adding a task, breaking it into steps, completing a step, and claiming a reward.
          </p>
          <div className="aq-try-btns">
            <a className="aq-try-btn aq-try-btn-primary" href={PROTOTYPE_URL} target="_blank" rel="noreferrer">
              🧙 Try the Prototype
            </a>
            <a className="aq-try-btn aq-try-btn-secondary" href={SURVEY_URL} target="_blank" rel="noreferrer">
              📋 Take the 5-Minute Survey
            </a>
          </div>
          <div className="aq-try-metrics">
            <div>
              <div className="aq-try-metric-num">30+</div>
              <div className="aq-try-metric-label">target survey responses</div>
            </div>
            <div>
              <div className="aq-try-metric-num">70%</div>
              <div className="aq-try-metric-label">target relevance validation</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="aq-hr" />

      {/* CONTRIBUTIONS */}
      <section className="aq-section">
        <div className="aq-section-label">My Contribution</div>
        <h2 className="aq-h2">What I'm bringing to this project</h2>
        <div className="aq-contrib-grid">
          {contributions.map((item, i) => (
            <div key={i} className="aq-contrib-item">
              <div className="aq-contrib-icon">{item.icon}</div>
              <h4 className="aq-contrib-h4">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      <hr className="aq-hr" />

      {/* CONTACT */}
      <section className="aq-section" id="contact">
        <div className="aq-contact-wrap">
          <div>
            <div className="aq-section-label">Let's Connect</div>
            <h2 className="aq-h2">Interested in this work?</h2>
            <p className="aq-p">Reach out to learn more about the process, try the prototype, or discuss opportunities.</p>
          </div>
          <div className="aq-contact-links">
            <a className="aq-btn aq-btn-primary" href="mailto:aimeevdb@gmail.com">
              ✉ aimeevdb@gmail.com
            </a>
            <a className="aq-btn aq-btn-secondary" href="https://www.linkedin.com/in/aimee-van-den-broeke/" target="_blank" rel="noreferrer">
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      <footer className="aq-footer">
        &copy; 2026 Aimee Van den broeke · Brownie Quest UX/UI Case Study (In Progress)
      </footer>
    </div>
  );
}
