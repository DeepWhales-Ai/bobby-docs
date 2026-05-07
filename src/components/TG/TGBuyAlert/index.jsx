import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './TGBuyAlert.css';

// Production-fidelity recreation of Bobby's in-chat buy alert.
//
// Animation hook: when an ancestor has class `.bba--played`, the egg row
// fills left-to-right via staggered keyframes (driven by BuyBotAnimation).
// Without the parent class, eggs render in their resting state and the
// component is fully static.

const Icon = {
  Mute: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </svg>
  ),
  TrendUp: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  ),
  Rocket: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.85-.85.94-2.18.31-3.31L7.81 16.19c-1.13-.63-2.46-.54-3.31.31z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Dollar: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Gem: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="6 3 18 3 22 9 12 22 2 9" />
      <line x1="12" y1="22" x2="6" y2="9" />
      <line x1="12" y1="22" x2="18" y2="9" />
      <line x1="2" y1="9" x2="22" y2="9" />
    </svg>
  ),
  User: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Bars: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="20" x2="6" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
    </svg>
  ),
  Globe: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Telegram: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.7 4.3 2.6 11.6c-1.1.4-1.1 1.5 0 1.8l4.7 1.4 1.8 5.7c.2.7 1.1.9 1.6.4l2.6-2.4 5.1 3.7c.9.6 2 .1 2.2-1l3-14.5c.2-1.2-.9-2.2-2-1.4z" />
    </svg>
  ),
  X: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
};

export default function TGBuyAlert() {
  const bullMark = useBaseUrl('img/bobby-mark.png');
  const filledEggs = Array.from({length: 18});
  const emptyEggs  = Array.from({length: 6});

  return (
    <div className="tg-buy-alert">
      {/* Header strip */}
      <div className="tg-ba-head">
        <span className="tg-ba-from">Bobby</span>
        <span className="tg-ba-chip">Bobby DeepBot</span>
      </div>

      {/* Video / image header */}
      <div className="tg-ba-video">
        <div className="tg-ba-video-grid" aria-hidden="true" />
        <div className="tg-ba-video-glow" aria-hidden="true" />
        <div className="tg-ba-video-mute" aria-hidden="true">
          <Icon.Mute />
        </div>
        <div className="tg-ba-video-time" aria-hidden="true">00:05</div>
        <div className="tg-ba-video-stack">
          <div className="tg-ba-video-headline">+10000% PROFIT</div>
          <img className="tg-ba-video-mark" src={bullMark} alt="" aria-hidden="true" />
          <div className="tg-ba-video-zen">ZEN MODE ACTIVATED</div>
        </div>
        <img className="tg-ba-video-pfp" src={bullMark} alt="" aria-hidden="true" />
      </div>

      {/* Boosted indicator */}
      <div className="tg-ba-boosted">
        <span className="tg-ba-boosted-icon"><Icon.Rocket /></span>
        <span><span className="tg-ba-handle">@Master_Of_Noth...</span> boosted</span>
      </div>

      {/* Trend this */}
      <div className="tg-ba-trend">
        <span className="tg-ba-trend-icon"><Icon.TrendUp /></span>
        <span>Trend this →</span>
      </div>

      {/* Token ticker */}
      <div className="tg-ba-ticker">DEEPAI</div>

      {/* Egg row */}
      <div className="tg-ba-eggrow" aria-hidden="true">
        {filledEggs.map((_, i) => (
          <span key={`f-${i}`} className="tg-ba-egg is-filled" />
        ))}
        {emptyEggs.map((_, i) => (
          <span key={`e-${i}`} className="tg-ba-egg is-empty" />
        ))}
      </div>

      {/* Buy details */}
      <ul className="tg-ba-details">
        <li>
          <span className="tg-ba-d-icon"><Icon.Dollar /></span>
          <span className="tg-ba-d-amount">$377.50 <span className="tg-ba-d-eth">(0.16400764 ETH)</span></span>
        </li>
        <li>
          <span className="tg-ba-d-icon"><Icon.Gem /></span>
          <span className="tg-ba-d-amount">64.32K DEEPAI</span>
        </li>
        <li>
          <span className="tg-ba-d-icon"><Icon.User /></span>
          <span className="tg-ba-d-link">0xF105...72Ad</span>
          <span className="tg-ba-d-pct">▲ 14.32%</span>
        </li>
        <li>
          <span className="tg-ba-d-icon"><Icon.Bars /></span>
          <span className="tg-ba-d-price">$0.00586952</span>
        </li>
        <li>
          <span className="tg-ba-d-icon"><Icon.TrendUp /></span>
          <span className="tg-ba-d-mcap">$586.95K</span>
        </li>
      </ul>

      {/* Social links */}
      <div className="tg-ba-social">
        <span className="tg-ba-social-chip"><Icon.Globe /> Web</span>
        <span className="tg-ba-social-chip"><Icon.Telegram /> TG</span>
        <span className="tg-ba-social-chip"><Icon.X /> X</span>
      </div>

      {/* Quick text links */}
      <div className="tg-ba-quick">
        <span className="tg-ba-quick-link">TX</span>
        <span className="tg-ba-quick-sep">|</span>
        <span className="tg-ba-quick-link">CHART</span>
        <span className="tg-ba-quick-sep">|</span>
        <span className="tg-ba-quick-link">DeepBot</span>
        <img className="tg-ba-quick-pfp" src={bullMark} alt="" aria-hidden="true" />
      </div>

      {/* Bobby signature */}
      <div className="tg-ba-sig">
        <img className="tg-ba-sig-icon" src={bullMark} alt="" aria-hidden="true" />
        <span>Bobby. Since 2021.</span>
        <span className="tg-ba-sig-time">12:56</span>
      </div>

      {/* CTA buttons */}
      <div className="tg-ba-ctas">
        <button type="button" className="tg-ba-cta tg-ba-cta--buy">
          BUY $DEEPAI <Icon.ArrowUpRight />
        </button>
        <button type="button" className="tg-ba-cta tg-ba-cta--boost">
          <Icon.Rocket /> BOOST
        </button>
      </div>

      {/* Footer banner */}
      <div className="tg-ba-banner">
        <span>Boosted tokens trend first.</span>
        <span className="tg-ba-banner-arrow"><Icon.ArrowUpRight /></span>
      </div>
    </div>
  );
}
