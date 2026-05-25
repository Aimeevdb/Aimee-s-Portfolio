import React, { useEffect, useRef, useState } from "react";

const skills = [
  { label: "UX Design", icon: "✦" },
  { label: "User Research", icon: "◎" },
  { label: "Figma", icon: "⬡" },
  { label: "React", icon: "⚛" },
  { label: "Frontend Dev", icon: "⟨/⟩" },
  { label: "Prototyping", icon: "◈" },
  { label: "Wireframing", icon: "⊞" },
  { label: "Python", icon: "⬟" },
];

const milestones = [
  { year: "Before", label: "5-star operator", desc: "Reading people, solving problems on the fly — already thinking like a designer without knowing it." },
  { year: "2024", label: "Google UX Design", desc: "Earned my UX certification and started building high-fidelity prototypes and case studies worth being proud of." },
  { year: "2025", label: "Meta Frontend Developer", desc: "Earned my frontend certification and leveled up into React apps and production-ready code." },
  { year: "2024–25", label: "MentaMorph Inc", desc: "UX Research Coordinator — personas, audits, Figma systems, and real design decisions that helped real people." },
  { year: "Now", label: "Looking for the next thing", desc: "Finishing the portfolio. Seeking frontend roles where design instinct and technical skill both matter." },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      ref={ref}
      style={{
        background: "#0f0c1a",
        padding: "7rem 2rem",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .about-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .about-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          line-height: 1.2;
          color: #f5f0ff;
          margin-bottom: 3.5rem;
          max-width: 18ch;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .about-headline.visible { opacity: 1; transform: translateY(0); }
        .about-headline em {
          font-style: italic;
          color: #c4b5fd;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        /* LEFT — BIO */
        .about-bio {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .about-bio.visible { opacity: 1; transform: translateY(0); }

        .about-bio p {
          font-size: 1.05rem;
          line-height: 1.85;
          color: rgba(245,240,255,0.72);
          margin-bottom: 1.5rem;
          font-weight: 300;
        }
        .about-bio p strong {
          color: #f5f0ff;
          font-weight: 500;
        }
        .about-bio p:last-child {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 1.15rem;
          color: #c4b5fd;
          margin-bottom: 0;
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          padding: 0.75rem 1.6rem;
          background: transparent;
          border: 1px solid rgba(167,139,250,0.4);
          border-radius: 100px;
          color: #a78bfa;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .about-cta:hover {
          background: rgba(167,139,250,0.12);
          color: #f5f0ff;
          border-color: rgba(167,139,250,0.7);
        }

        /* RIGHT — TIMELINE + SKILLS */
        .about-right {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
        }
        .about-right.visible { opacity: 1; transform: translateY(0); }

        /* TIMELINE */
        .about-timeline {
          position: relative;
          margin-bottom: 3rem;
        }
        .about-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0));
        }
        .timeline-item {
          padding-left: 2rem;
          padding-bottom: 2rem;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #7c3aed;
          box-shadow: 0 0 10px rgba(124,58,237,0.6);
        }
        .timeline-year {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7c3aed;
          margin-bottom: 0.25rem;
        }
        .timeline-label {
          font-family: 'DM Serif Display', serif;
          font-size: 1.1rem;
          color: #f5f0ff;
          margin-bottom: 0.35rem;
        }
        .timeline-desc {
          font-size: 0.88rem;
          color: rgba(245,240,255,0.55);
          line-height: 1.6;
        }

        /* SKILLS */
        .about-skills-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
        }
        .about-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 1rem;
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 100px;
          font-size: 0.82rem;
          color: rgba(245,240,255,0.8);
          font-weight: 500;
          transition: background 0.2s, border-color 0.2s;
        }
        .skill-pill:hover {
          background: rgba(124,58,237,0.2);
          border-color: rgba(124,58,237,0.5);
        }
        .skill-pill span {
          color: #a78bfa;
          font-size: 0.78rem;
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .about-headline { max-width: 100%; }
        }
      `}</style>

      <div className="about-inner">
        <div className={`about-eyebrow ${visible ? "visible" : ""}`}>About Me</div>
        <h2 className={`about-headline ${visible ? "visible" : ""}`}>
          I didn't start in tech.<br /><em>But I was always a designer.</em>
        </h2>

        <div className="about-grid">
          {/* LEFT — BIO */}
          <div className={`about-bio ${visible ? "visible" : ""}`}>
            <p>
              I spent years behind the wheel, learning how to <strong>read people, solve problems on the fly,</strong> and deliver an experience worth a 5-star rating. Every ride was a small UX challenge — figure out what someone needs, remove the friction, make it feel effortless. What I didn't realize at the time was that I was already thinking like a designer.
            </p>
            <p>
              When I made the leap into UX and frontend development, everything clicked. I earned my <strong>Google UX Design</strong> and <strong>Meta Frontend Developer</strong> certifications, and started building things I was genuinely proud of — React apps, high-fidelity prototypes, and UX case studies that solve real problems for real people. The more I learned, the more I realized design and development aren't two separate worlds. The best work lives right at the intersection.
            </p>
            <p>
              At <strong>MentaMorph Inc</strong>, I worked as a UX Research Coordinator — creating user personas, running competitive audits, and introducing the team to Figma components and design systems. I helped shift the workflow from loose ideation toward scalable, reusable UI patterns. It reminded me why I made the switch: there's nothing better than watching your design decisions actually help someone.
            </p>
            <p>
              Right now I'm putting the finishing touches on my portfolio and actively looking for <strong>frontend developer roles</strong> where I can bring both my technical skills and my instinct for user experience to the table. I'm not just someone who can build it — I'm someone who cares deeply about how it feels to use it.
            </p>
            <p>
              If that sounds like someone you want on your team, let's talk.
            </p>
            <a className="about-cta" href="mailto:aimeevdb@gmail.com">
              Get in touch &#8594;
            </a>
          </div>

          {/* RIGHT — TIMELINE + SKILLS */}
          <div className={`about-right ${visible ? "visible" : ""}`}>
            <div className="about-timeline">
              {milestones.map((m, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{m.year}</div>
                  <div className="timeline-label">{m.label}</div>
                  <div className="timeline-desc">{m.desc}</div>
                </div>
              ))}
            </div>

            <div className="about-skills-label">Skills &amp; Tools</div>
            <div className="about-skills">
              {skills.map((s, i) => (
                <div key={i} className="skill-pill">
                  <span>{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}