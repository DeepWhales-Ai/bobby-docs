import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
    </div>
  );
}
