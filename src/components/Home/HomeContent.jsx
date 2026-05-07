import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BuyBotAnimation from '@site/src/components/BuyBotAnimation';
import ConvergenceEngine from '@site/src/components/ConvergenceEngine';
import Pullquote from '@site/src/components/Pullquote';
import CountUp from './CountUp';
import './HomeContent.css';

const Pill = ({kind = 'live', children}) => (
  <span className={'pill ' + kind}>{children}</span>
);

const SURFACES = [
  {g: 'BG', name: 'Bobby in your group', desc: 'The buy bot. Add Bobby to a Telegram group. He calls every buy and detects what\'s moving next.', path: '/groups/what-bobby-does', pill: <Pill kind="live">Live</Pill>},
  {g: 'BL', name: 'Bobby Lobby',         desc: 'The community itself. The room where the audience finally meets the audience. Trusted since 2021.', path: '/surfaces/lobby', pill: <Pill kind="live">Live</Pill>},
  {g: 'BS', name: 'Bobby Sees',          desc: 'Discovery surface for trending and intelligence. Formerly Bobby Browser.', path: '/intelligence/bobby-sees', pill: <Pill kind="live">Live</Pill>},
  {g: 'BX', name: 'Bobby X',             desc: 'Proof-of-network on X. The public credibility layer.', path: '/surfaces/x', pill: <Pill kind="phase">Phase 1</Pill>},
  {g: 'B?', name: 'Bobby Support',       desc: 'A real human, when you need one.', path: '/surfaces/support', pill: <Pill kind="live">Live</Pill>},
  {g: '/?', name: 'Commands',            desc: 'Every Bobby command, in one reference.', path: '/groups/commands', pill: null},
];

const MARQUEE_ITEMS = [
  'Detection, not prediction',
  'Behavior, not volume',
  'Part of it since 2021',
  'Real signal, not noise',
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
              Bobby started as a buy bot.
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

      <section className="home-section home-thesis">
        <Pullquote variant="hero">
          Things changed. <span className="lime">Now, he is the intelligence network crypto Telegram runs on.</span>
        </Pullquote>
      </section>

      {/* 01 — The buy bot you already know */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">01</span> · The buy bot you already know</span>
          <span className="line" />
        </div>
        <p className="section-lede">
          You've known him since 2021. Through every cycle, every season, every chart. The buy bot crypto Telegram has trusted from the start.
        </p>

        <BuyBotAnimation />

        <Pullquote variant="hero">
          You know Bobby. <span className="lime">Now look.</span>
        </Pullquote>
      </section>

      {/* 02 — What he is now */}
      <section className="home-section engine-section">
        <div className="section-rule" id="the-engine">
          <span className="label"><span className="lime">02</span> · What he is now</span>
          <span className="line" />
        </div>
        <p className="section-lede">
          Most buy bots count trades. Bobby reads behavior. Which wallets are loading. Which rooms are talking. Which patterns are forming. The chart shows what already happened. Bobby shows what's about to.
        </p>

        <ConvergenceEngine />

        <p className="section-sub">
          Not a metaphor. The same logic the production network runs on, slowed down so you can see it.
        </p>

        <div className="section-cta-row">
          <Link to="/intelligence/what-bobby-sees" className="cta-ghost">How the model works →</Link>
          <Link to="/intelligence/why-we-say-no" className="cta-ghost">Why we say no →</Link>
        </div>
      </section>

      {/* 03 — Get started */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">03</span> · Get started</span>
          <span className="line" />
        </div>
        <p className="section-sub" style={{maxWidth: 560}}>
          Pick one.
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

      {/* 04 — Why it works */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">04</span> · Why it works</span>
          <span className="line" />
        </div>

        <Pullquote variant="hero">
          We are not a billboard.<br />
          <span className="lime">We are intelligence.</span>
        </Pullquote>

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
              <div className="name">Projects need in.</div>
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
            Back to <strong>01</strong>. Five years in. Still growing.
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
          <Pullquote variant="large">
            The network has a room. <span className="lime">Bobby Lobby is the room.</span>
          </Pullquote>
          <p className="lobby-feature-lede">
            Crypto Telegram is fragmented by design. Thousands of groups, thousands of dialects, no one in the same room. Bobby has been part of all of it since 2021. The Lobby is what happens when the network finally introduces everyone.
          </p>
          <div className="lobby-feature-stats">
            <div><div className="num"><CountUp target={27000} format="comma" /></div><div className="lbl">TG groups</div></div>
            <div><div className="num"><CountUp target={850000} format="comma" /></div><div className="lbl">audience</div></div>
            <div><div className="num"><CountUp target={2500000} format="mPlus" /></div><div className="lbl">alerts / month</div></div>
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

      {/* 05 — Where Bobby is */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">05</span> · Where Bobby is</span>
          <span className="line" />
        </div>
        <p className="section-sub" style={{maxWidth: 560}}>
          Bobby shows up in different places. Each does a different job.
        </p>
        <div className="surface-grid">
          {SURFACES.map((s) => (
            <Link to={s.path} className="surface-card" key={s.name}>
              <div className="surface-card-body">
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
                <span className="surface-card-cta">Learn more <span className="arrow">→</span></span>
              </div>
              {s.pill}
            </Link>
          ))}
        </div>
      </section>

      {/* 06 — How Bobby talks */}
      <section className="home-section">
        <div className="section-rule">
          <span className="label"><span className="lime">06</span> · How Bobby talks</span>
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
