import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, focus, skills } from "./data/cv";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.6, 0.2, 1] } },
};

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <div className="section-head">
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window === "undefined" ? "dark" : getInitialTheme()
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-dot" />
          {profile.name}
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" /></svg>
            )}
          </button>
        </nav>
      </header>

      <main id="top">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.6, 0.2, 1] }}
        >
          <div className="hero-inner">
            <h1>
              {profile.name}
              <span className="cursor" aria-hidden>.</span>
            </h1>
            <p className="tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {profile.email}
              </a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="hero-grid" aria-hidden />
        </motion.section>

        <Section id="about" label="01" title="About">
          <div className="prose">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="focus" label="02" title="Focus">
          <div className="cards">
            {focus.map((c) => (
              <motion.div
                key={c.title}
                className="card"
                variants={fadeUp}
                whileHover={{ y: -3 }}
              >
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" label="03" title="Skills">
          <div className="skills">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <h4>{group.group}</h4>
                <ul>
                  {group.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" label="04" title="Contact">
          <div className="contact">
            <p>{profile.contactNote}</p>
            <div className="contact-links">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {profile.email}
              </a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
                github.com/ofirrubin ↗
              </a>
            </div>
          </div>
        </Section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="dim">Built with Vite + Bun.</span>
        </footer>
      </main>
    </>
  );
}
