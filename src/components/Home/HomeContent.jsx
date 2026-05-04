import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ConvergenceEngine from '@site/src/components/ConvergenceEngine';
import './HomeContent.css';

const Pill = ({kind = 'live', children}) => (
  <span className={'pill ' + kind}>{children}</span>
);

const SURFACES = [
  {g: 'BG', name: 'Bobby in your group', desc: 'The flagship. Add Bobby to a Telegram group. He detects, alerts, customizes.', path: '/groups/what-bobby-does', pill: <Pill kind="live">Live</Pill>},
  {g: 'BL', name: 'Bobby Lobby',         desc: 'The community itself. The room where the audience finally meets the audience. Trusted since 2021.', path: '/surfaces/lobby', pill: <Pill kind="live">Live</Pill>},
  {g: 'BS', name: 'Bobby Sees',          desc: 'Discovery surface for trending and intelligence. Formerly Bobby Browser.', path: '/intelligence/bobby-sees', pill: <Pill kind="live">Live</Pill>},
  {g: 'BX', name: 'Bobby X',             desc: 'Proof-of-network on X. The public credibility layer.', path: '/surfaces/x', pill: <Pill kind="phase">Phase 1</Pill>},
  {g: 'B?', name: 'Bobby Support',       desc: 'A real human, when you need one.', path: '/surfaces/support', pill: <Pill kind="live">Live</Pill>},
  {g: '/?', name: 'Commands',            desc: 'Every Bobby command, in one reference.', path: '/groups/commands', pill: null},
];

const MARQUEE_ITEMS = [
  'Convergence over noise',
  'Behavior over volume',
  'Trust over reach',
  'Signal over theatre',
  'Five surfaces, no more',
  'The room is one',
  'Part of it since 2021',
  'Detection, not prediction',
];

export default function HomeContent() {
  const bullMark = useBaseUrl('img/bobby-mark.png');

  return (
    <div className="home-wrap">
      <span className="home-menu-edge" aria-hidden="true">MENU</span>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-tag">
              <span className="live-dot" />
              Live across crypto Telegram · Since 2021
            </div>
            <h1>
              We don't predict.<br />
              <span className="lime">We detect.</span>
            </h1>
            <p className="hero-sub">
              Crypto Telegram is the loudest room on the internet. Bobby is the one reading the room, and the one bringing everyone into the same room.
            </p>
            <div className="hero-cta-row">
              <Link to="/welcome" className="cta-primary">
                Enter the docs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/intelligence/what-bobby-sees" className="cta-ghost">
                The intelligence →
              </Link>
            </div>
          </div>
          <div className="bull-stage">
            <div className="bull-frame">
              <div className="corner tl" />
              <div className="corner tr" />
              <div className="corner bl" />
              <div className="corner br" />
              <span className="placeholder-tag">// Bobby</span>
              <img src={bullMark} alt="Bobby" className="bull-mark-img" />
              <span className="meta-tag left">v.5</span>
              <span className="meta-tag right">always on</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section engine-section">
        <div className="section-rule" id="the-engine">
          <span className="label"><span className="lime">01</span> · The engine, live</span>
          <span className="line" />
        </div>
        <p className="section-lede">
          This is what Bobby does, all day, every day. Five input streams on the left. One convergence model in the middle. The alerts that earn the ping on the right.
        </p>
        <p className="section-sub">
          Not a metaphor. The same logic the production network runs on, slowed down so you can see it.
        </p>

        <ConvergenceEngine />

        <div className="section-cta-row">
          <Link to="/intelligence/what-bobby-sees" className="cta-ghost">How the model works →</Link>
          <Link to="/intelligence/why-we-say-no" className="cta-ghost">Why we say no →</Link>
        </div>
      </section>

      {/* 02 — Three doors */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">02</span> · Three doors</span>
          <span className="line" />
        </div>
        <p className="section-sub" style={{maxWidth: 560}}>
          The site does not pretend Bobby is one product. Pick your door.
        </p>
        <div className="three-doors">
          <Link to="/groups/what-bobby-does" className="door">
            <div className="door-num">01 · For your group</div>
            <h3>Bobby in your group</h3>
            <p>Add Bobby to your Telegram. Detect what's happening. Talk to your audience like you already know them.</p>
          </Link>
          <Link to="/projects/why" className="door">
            <div className="door-num">02 · For your project</div>
            <h3>Advertise with Bobby</h3>
            <p>Two tiers. Five surfaces. We do not sell to whoever pays. We tell you if you qualify.</p>
          </Link>
          <Link to="/intelligence/what-bobby-sees" className="door">
            <div className="door-num">03 · The story</div>
            <h3>The intelligence</h3>
            <p>What Bobby sees. Why convergence. Why the silence. Why most signals are noise.</p>
          </Link>
        </div>
      </section>

      {/* 03 — The principle */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">03</span> · The principle</span>
          <span className="line" />
        </div>

        <div className="pullquote">
          <p>We are not a billboard.</p>
          <p>We are intelligence.</p>
        </div>

        <p className="section-body">
          Most signal products fire on one ping. One trade. One mention. One wallet move. That's noise. That's manipulation bait. Bobby fires when thousands of independent sources agree. Not louder. Not faster. Truer.
        </p>
        <p className="section-body section-body-muted">
          Volume is the most lied-about number in crypto. We don't watch volume. We watch behavior.
        </p>

        <div className="flywheel">
          <div className="flywheel-grid">
            <div className="fw-node">
              <div className="num">01</div>
              <div className="name">Bobby is in the room.</div>
              <div className="desc">Already there. Since 2021.</div>
            </div>
            <div className="fw-arrow">→</div>
            <div className="fw-node">
              <div className="num">02</div>
              <div className="name">The audience trusts him.</div>
              <div className="desc">Because he is not selling.</div>
            </div>
            <div className="fw-arrow">→</div>
            <div className="fw-node">
              <div className="num">03</div>
              <div className="name">Projects need on.</div>
              <div className="desc">There is no other way to reach them.</div>
            </div>
            <div className="fw-arrow">→</div>
            <div className="fw-node">
              <div className="num">04</div>
              <div className="name">The network grows.</div>
              <div className="desc">More groups. More signal. Tighter trust.</div>
            </div>
          </div>
          <div className="flywheel-loop">
            And the loop closes back on <strong>01</strong>. Years deep, and tightening.
          </div>
        </div>
      </section>

      {/* Lobby Feature */}
      <section className="home-section">
        <div className="lobby-feature">
          <div className="lobby-feature-glow" aria-hidden="true" />
          <div className="lobby-feature-eyebrow">
            <span className="dot live" /> Bobby Lobby · the room
          </div>
          <h2 className="lobby-feature-title">
            We read all the data.<br />
            <span className="lime">We bring the people together.</span>
          </h2>
          <p className="lobby-feature-lede">
            Crypto Telegram is fragmented by design. Thousands of groups, thousands of dialects, no one in the same room. Bobby has been part of all of it since 2021. The Lobby is what happens when the network finally introduces everyone.
          </p>
          <div className="lobby-feature-stats">
            <div><div className="num">27,000</div><div className="lbl">TG groups</div></div>
            <div><div className="num">850,000</div><div className="lbl">audience</div></div>
            <div><div className="num">2.5M+</div><div className="lbl">alerts / month</div></div>
          </div>
          <div className="lobby-feature-cta">
            <a className="cta-primary" href="https://t.me/BobbyLobby" target="_blank" rel="noreferrer">
              Enter the Lobby on Telegram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <Link to="/surfaces/lobby" className="cta-ghost">What the Lobby is →</Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({length: 2}).map((_, j) => (
            <React.Fragment key={j}>
              {MARQUEE_ITEMS.map((s, i) => (
                <span className="marquee-item" key={j + '-' + i}>
                  <span className="dot" />
                  {s}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 04 — The surfaces */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">04</span> · The surfaces</span>
          <span className="line" />
        </div>
        <p className="section-sub" style={{maxWidth: 560}}>
          Bobby is not one product. Bobby is a network of surfaces. Each one earns its place.
        </p>
        <div className="surface-grid">
          {SURFACES.map((s) => (
            <Link to={s.path} className="surface-card" key={s.name}>
              <span className="glyph">{s.g}</span>
              <div>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
              {s.pill}
            </Link>
          ))}
        </div>
      </section>

      {/* 05 — A sample of the voice */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">05</span> · A sample of the voice</span>
          <span className="line" />
        </div>

        <div className="voice-sample">
          <p>If you apply for a Level 2 slot, we already know about you.</p>
          <p style={{color: 'var(--text-3)'}}>We've watched your community for months. We know who's joining and who's leaving. We know what's being said about you in groups you've never heard of.</p>
          <p>If you qualify, we'll tell you. If you don't, we'll also tell you.</p>
        </div>

        <div className="voice-cta-row">
          <Link to="/projects/why" className="cta-primary">
            Read for projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/brand/voice" className="button">The voice in one page</Link>
          <Link to="/groups/add" className="button">Add Bobby to a group</Link>
        </div>
      </section>

      {/* Closing block */}
      <section className="home-section home-closer">
        <div className="home-closer-inner">
          <div className="home-closer-copy">
            <h3>One thing to remember.</h3>
            <p>
              Bobby has been part of crypto Telegram since 2021 and is still trusted there. That is the only product we cannot replace.
            </p>
          </div>
          <Link to="/intelligence/why-we-say-no" className="cta-ghost">Why we say no →</Link>
        </div>
      </section>
    </div>
  );
}
