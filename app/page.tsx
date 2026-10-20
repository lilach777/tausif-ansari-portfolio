import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import EvidenceFigure from "@/components/EvidenceFigure";
import CopyEmail from "@/components/CopyEmail";
import {
  profile,
  hero,
  impact,
  work,
  experience,
  capabilities,
  toolkit,
  contact,
} from "@/content/site";

const xUrl = profile.xHandle ? `https://x.com/${profile.xHandle}` : "";

function ContactLine() {
  return (
    <ul className="contact-line" aria-label="Contact">
      <li>
        <span className="label">Email</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </li>
      {xUrl && (
        <li>
          <span className="label">X</span>
          <a href={xUrl} target="_blank" rel="noopener noreferrer">
            @{profile.xHandle}
          </a>
        </li>
      )}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Nav name={profile.name} />
      <Effects />
      {/* Background atmosphere: CSS only, fixed behind all content. */}
      <div className="atmosphere" aria-hidden="true">
        <span className="atmosphere__light atmosphere__light--a" />
        <span className="atmosphere__light atmosphere__light--b" />
        <span className="atmosphere__light atmosphere__light--c" />
        <span className="atmosphere__grid" />
        <span className="atmosphere__grain" />
      </div>

      <main id="main">
        {/* ── HERO ─────────────────────────────── */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap">
            <p className="eyebrow" data-reveal>
              <span className="dot" aria-hidden="true" /> {profile.name}: {hero.eyebrow}
            </p>
            <h1 id="hero-title" className="hero__title" data-reveal>
              <span data-parallax="0.08">
                I take early-stage <em>web3</em> accounts from nothing to real&nbsp;reach.
              </span>
            </h1>
            <div className="hero__foot" data-reveal>
              <p className="hero__sub">{hero.sub}</p>
              <div className="hero__ctas">
                <a href="#contact" className="btn">
                  Work With Me
                </a>
                <a href="#work" className="btn btn--ghost">
                  View Results <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div data-reveal>
              <ContactLine />
            </div>
          </div>
        </section>

        {/* ── IMPACT ───────────────────────────── */}
        <section className="impact" aria-label="Impact">
          <div className="wrap">
            <ul className="impact__grid">
              {impact.map((s) => (
                <li key={s.label} className="stat" data-reveal>
                  <p className="stat__num" aria-label={`${s.value}${s.suffix}`}>
                    <span aria-hidden="true">
                      <span data-count={s.value} data-decimals={s.decimals}>
                        {s.value.toFixed(s.decimals)}
                      </span>
                      <span className="stat__suffix">{s.suffix}</span>
                    </span>
                  </p>
                  <p className="stat__label">{s.label}</p>
                  {s.context && <p className="stat__context">{s.context}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SELECTED WORK ────────────────────── */}
        <section id="work" className="section" aria-labelledby="work-title">
          <div className="wrap">
            <header className="section__head" data-reveal>
              <p className="kicker">01. Selected work</p>
              <h2 id="work-title">Five client accounts. Before → after where the numbers exist.</h2>
            </header>

            {work.map((c, i) => (
              <article
                key={c.id}
                id={c.id}
                className={`case case--${c.id}`}
                aria-labelledby={`${c.id}-name`}
                data-line
              >
                <div className="case__meta" data-reveal>
                  <span className="case__index">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="case__client">Crowwd Labs client</p>
                    <h3 id={`${c.id}-name`} className="case__name">
                      {c.name}
                    </h3>
                    <p className="case__desc">{c.descriptor}</p>
                  </div>
                  {c.timeframe && <p className="case__time">{c.timeframe}</p>}
                </div>

                <p className="case__headline" data-reveal>
                  {c.headline}
                </p>

                {c.after && (
                <div className={`ba ${c.before ? "" : "ba--solo"}`} data-reveal>
                  {c.before && (
                    <>
                      <div className="ba__side">
                        <span className="ba__tag">Before</span>
                        <span className="ba__num ba__num--before">{c.before.value}</span>
                        <span className="ba__label">{c.before.label}</span>
                      </div>
                      <span className="ba__arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="sr-only">to</span>
                    </>
                  )}
                  <div className="ba__side">
                    <span className="ba__tag ba__tag--after">{c.before ? "After" : "Result"}</span>
                    <span className="ba__num">{c.after.value}</span>
                    <span className="ba__label">{c.after.label}</span>
                  </div>
                </div>
                )}

                {c.metrics.length > 0 && (
                  <dl
                    className={`metrics ${c.scopeMetrics ? "metrics--scope" : ""}`}
                    style={{ "--n": c.metrics.length } as React.CSSProperties}
                    data-reveal
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <dt>{m.label}</dt>
                        <dd>{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className={`case__body ${c.evidence ? "" : "case__body--solo"}`}>
                  <div className="owned" data-reveal>
                    <h4 className="kicker">What I owned</h4>
                    <ul>
                      {c.owned.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                  {c.evidence && (
                    <div data-reveal>
                      <EvidenceFigure evidence={c.evidence} project={c.name} />
                    </div>
                  )}
                </div>
              </article>
            ))}

          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────── */}
        <section id="experience" className="section" aria-labelledby="exp-title">
          <div className="wrap">
            <header className="section__head" data-reveal>
              <p className="kicker">02. Experience</p>
              <h2 id="exp-title">Where I&rsquo;ve owned the work.</h2>
            </header>
            <ol className="roles">
              {experience.map((r) => (
                <li key={r.org} className="role" data-reveal>
                  <div className="role__head">
                    <h3 className="role__org">{r.org}</h3>
                    <p className="role__period">
                      {r.current ? <span className="badge">Current</span> : r.period}
                    </p>
                    <p className="role__title">{r.title}</p>
                  </div>
                  <div className="role__owned">
                    <h4 className="kicker">What I owned</h4>
                    {r.clients && (
                      <p className="role__clients">
                        <span>Client accounts:</span> {r.clients.join(" · ")}
                      </p>
                    )}
                    <ul className="role__points">
                      {r.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CAPABILITIES ─────────────────────── */}
        <section id="capabilities" className="section" aria-labelledby="cap-title">
          <div className="wrap">
            <header className="section__head" data-reveal>
              <p className="kicker">03. Capabilities</p>
              <h2 id="cap-title">Five things I run.</h2>
            </header>
            <ul className="caps">
              {capabilities.map((c, i) => (
                <li key={c.title} className="cap" data-reveal>
                  <span className="cap__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.title}</h3>
                  <p>{c.line}</p>
                </li>
              ))}
            </ul>

            <div className="toolkit" data-reveal>
              <h3 className="kicker">Toolkit</h3>
              <dl>
                {toolkit.map((g) => (
                  <div key={g.group}>
                    <dt>{g.group}</dt>
                    <dd>{g.tools.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────── */}
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <p className="kicker" data-reveal>
              04. Contact
            </p>
            <h2 id="contact-title" className="contact__title" data-reveal>
              {contact.headline}
            </h2>
            <p className="contact__sub" data-reveal>
              {contact.sub}
            </p>

            <div className="contact__grid" data-reveal>
              <div className="contact__item contact__item--email">
                <span className="label">Email</span>
                <div className="contact__row">
                  <a href={`mailto:${profile.email}`} className="contact__big">
                    {profile.email}
                  </a>
                  <CopyEmail email={profile.email} />
                </div>
              </div>
              {xUrl && (
                <div className="contact__item">
                  <span className="label">X</span>
                  <a href={xUrl} target="_blank" rel="noopener noreferrer" className="contact__big">
                    @{profile.xHandle}
                  </a>
                </div>
              )}
              <div className="contact__item contact__actions">
                <a href={profile.booking} target="_blank" rel="noopener noreferrer" className="btn">
                  Book a 30-min call ↗
                </a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span>{profile.name}</span>
          <span>Ask me how I got any number on this page.</span>
          <span>2026</span>
        </div>
      </footer>
    </>
  );
}
