import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ConvergenceEngine from '@site/src/components/ConvergenceEngine';
import './HomeContent.css';

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
    </div>
  );
}
