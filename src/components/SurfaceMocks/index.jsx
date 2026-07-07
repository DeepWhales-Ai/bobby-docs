// Animated mockups for each ad surface - show the ad landing in a real Telegram context.
// Each mock cycles through phases so the user sees the slot "go live".
// Ported from prototype/surface-mocks.jsx.

import React, {useState, useEffect, useRef} from 'react';
import './SurfaceMocks.css';

function usePhase(period = 4500) {
  const [phase, setPhase] = useState(0);
  const startRef = useRef(null);
  useEffect(() => {
    if (startRef.current === null) {
      startRef.current = performance.now();
    }
    let raf;
    const tick = (t) => {
      const elapsed = t - startRef.current;
      const p = (elapsed % period) / period;
      setPhase(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [period]);
  return phase;
}

// ============================================================
// 01 - Buy Alert Sponsorship
// ============================================================
function MockBuyAlert() {
  const phase = usePhase(5000);
  const alertVisible = phase > 0.15;
  const sponsorVisible = phase > 0.55;
  const sponsorPulse = phase > 0.55 ? Math.min(1, (phase - 0.55) * 5) : 0;

  const swapTarget = 4267;
  const swap = alertVisible ? Math.round(swapTarget * Math.min(1, (phase - 0.15) * 4)) : 0;

  return (
    <div className="sm-frame sm-frame--buy-alert">
      <div className="sm-tg-head">
        <div className="sm-avatar" style={{background: 'linear-gradient(135deg,#4A6FA5,#2D4A7A)'}}>PX</div>
        <div className="sm-tg-meta">
          <div className="sm-tg-name">ProjectX Community</div>
          <div className="sm-tg-sub">1,247 members · 12 online</div>
        </div>
        <div className="sm-tg-tag">in-group</div>
      </div>
      <div className="sm-tg-body">
        <div className="sm-msg sm-msg-other" style={{opacity: 0.7}}>
          <span className="sm-msg-name">degen_anon</span>
          <span className="sm-msg-text">just bought a bag, lfg</span>
        </div>
        <div className="sm-msg sm-msg-other" style={{opacity: 0.7}}>
          <span className="sm-msg-name">cryptolurker</span>
          <span className="sm-msg-text">chart looks clean</span>
        </div>
        {alertVisible && (
          <div className="sm-msg sm-msg-bobby" style={{
            opacity: alertVisible ? 1 : 0,
            transform: `translateY(${alertVisible ? 0 : 12}px)`,
            transition: 'opacity .3s, transform .4s',
          }}>
            <span className="sm-msg-name sm-bobby">🐂 Bobby</span>
            <div className="sm-bubble sm-buy-alert">
              <div className="sm-ba-head">
                <span className="sm-ba-dot" />
                <span>$TOKEN · ETH · New buy</span>
                <span className="sm-ba-time">2s</span>
              </div>
              <div className="sm-ba-line">🐂 ${swap.toLocaleString()} swapped → 1.2M $TOKEN</div>
              <div className="sm-ba-stats">
                <span>MC $2.3M</span>
                <span className="sm-pos">24h +47%</span>
                <span>412 holders</span>
              </div>
              <div className="sm-ba-btns">
                <span className="sm-tgbtn">📊 Chart</span>
                <span className="sm-tgbtn">🔍 Scan</span>
                <span className="sm-tgbtn">📝 Contract</span>
              </div>
              {sponsorVisible && (
                <div className="sm-sponsor" style={{
                  opacity: sponsorPulse,
                  transform: `translateY(${(1 - sponsorPulse) * 8}px)`,
                }}>
                  <div className="sm-sponsor-tag">SPONSOR</div>
                  <div className="sm-sponsor-line">⚡ Bobby. Since 2021.</div>
                  <div className="sm-sponsor-cta">Boosted tokens rise first</div>
                  <div className="sm-sweep" style={{
                    transform: `translateX(${-100 + sponsorPulse * 200}%)`,
                    opacity: sponsorPulse > 0.4 && sponsorPulse < 0.95 ? 0.6 : 0,
                  }} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="sm-caption">
        <span className="sm-caption-tag">surface</span>
        <span className="sm-caption-text">Sponsor zone, every buy alert, every group, for the duration.</span>
      </div>
    </div>
  );
}

// ============================================================
// 02 - The Board
// ============================================================
function MockBoard() {
  const phase = usePhase(6000);

  const tokens = [
    {sym: '$ALPHA', chain: 'SOL',  start: 1, end: 1, change: '+182%'},
    {sym: '$NOVA',  chain: 'ETH',  start: 8, end: 2, change: '+94%', highlight: true},
    {sym: '$KORE',  chain: 'BSC',  start: 2, end: 3, change: '+67%'},
    {sym: '$RIFT',  chain: 'BASE', start: 3, end: 4, change: '+41%'},
    {sym: '$ZED',   chain: 'SOL',  start: 4, end: 5, change: '+28%'},
    {sym: '$ORBIT', chain: 'ETH',  start: 5, end: 6, change: '+19%'},
    {sym: '$VANE',  chain: 'POL',  start: 6, end: 7, change: '+12%'},
  ];

  const t = phase < 0.1 ? 0 : phase > 0.7 ? 1 : (phase - 0.1) / 0.6;
  const eased = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;

  const landed = phase > 0.7 && phase < 0.92;
  const landAge = (phase - 0.7) / 0.22;
  const landFlash = landed ? Math.max(0, 1 - landAge) : 0;

  const ranked = tokens.map((tk) => ({
    ...tk,
    rank: tk.start + (tk.end - tk.start) * eased,
  })).sort((a, b) => a.rank - b.rank);

  return (
    <div className="sm-frame sm-frame--board">
      <div className="sm-tg-head">
        <div className="sm-avatar sm-bobby-av">B</div>
        <div className="sm-tg-meta">
          <div className="sm-tg-name">Bobby</div>
          <div className="sm-tg-sub sm-online">The Board · live</div>
        </div>
        <div className="sm-tg-tag">bobby DM</div>
      </div>
      <div className="sm-tg-body sm-board-body">
        <div className="sm-board">
          <div className="sm-board-title">🔥 The Board</div>
          <div className="sm-board-tag">The first of its kind on Telegram. Since 2021.</div>
          <div className="sm-board-podium-label">👑 The Podium</div>
          <div className="sm-board-list">
            {ranked.slice(0, 7).map((tk, i) => {
              const pos = i + 1;
              const isPodium = pos <= 3;
              const isClimbing = tk.highlight && Math.abs(tk.rank - tk.end) > 0.5;
              return (
                <div key={tk.sym}
                     className={`sm-board-row${isPodium ? ' podium' : ''}${tk.highlight ? ' highlight' : ''}`}
                     style={{
                       transform: tk.highlight && landFlash > 0 ? `scale(${1 + landFlash * 0.04})` : 'none',
                       boxShadow: tk.highlight && landFlash > 0
                         ? `0 0 ${landFlash * 24}px rgba(191,255,0,${landFlash * 0.6})`
                         : 'none',
                     }}>
                  <span className={`sm-board-rank${isPodium ? ' podium' : ''}`}>{pos}</span>
                  <span className="sm-board-tok">{tk.sym}</span>
                  <span className="sm-board-chain">{tk.chain}</span>
                  <span className="sm-board-change">{tk.change}</span>
                  {isClimbing && <span className="sm-climb-arrow">↑</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sm-caption">
        <span className="sm-caption-tag">surface</span>
        <span className="sm-caption-text">Position is the price. Podium = top 3. Top 7 = the climb. Top 15 = the door.</span>
      </div>
    </div>
  );
}

// ============================================================
// 03 - Mass DM
// ============================================================
function MockMassDM() {
  const phase = usePhase(5500);
  const typing = phase < 0.25;
  const msgVisible = phase > 0.25;
  const msgProgress = msgVisible ? Math.min(1, (phase - 0.25) * 3) : 0;
  const ctaPulse = phase > 0.6 ? Math.sin((phase - 0.6) * Math.PI * 4) * 0.5 + 0.5 : 0;

  return (
    <div className="sm-frame sm-frame--mass-dm">
      <div className="sm-tg-head">
        <div className="sm-avatar sm-bobby-av">B</div>
        <div className="sm-tg-meta">
          <div className="sm-tg-name">Bobby</div>
          <div className="sm-tg-sub sm-online">{typing ? 'typing…' : 'online'}</div>
        </div>
        <div className="sm-tg-tag">DM broadcast</div>
      </div>
      <div className="sm-tg-body">
        {typing ? (
          <div className="sm-msg sm-msg-bobby">
            <div className="sm-bubble sm-typing">
              <span className="sm-typing-dot" />
              <span className="sm-typing-dot" />
              <span className="sm-typing-dot" />
            </div>
          </div>
        ) : (
          <div className="sm-msg sm-msg-bobby" style={{
            opacity: msgProgress,
            transform: `translateY(${(1 - msgProgress) * 14}px)`,
          }}>
            <div className="sm-bubble sm-dm-bubble">
              <div className="sm-dm-eyebrow">⚡ New sponsor</div>
              <div className="sm-dm-headline">Bobby just received a new sponsor.</div>
              <div className="sm-dm-body">
                $NOVA. Live for 4 days. Solana. Liquidity locked, holders climbing, contract clean. Bobby's been tracking this one. The community grew before the price did. That's the order Bobby likes.
              </div>
              <div className="sm-dm-disclosure">Sponsored. Verified. Bobby vouches.</div>
              <div className="sm-dm-cta" style={{
                boxShadow: `0 0 ${12 + ctaPulse * 18}px rgba(191,255,0,${0.3 + ctaPulse * 0.4})`,
              }}>View $NOVA →</div>
            </div>
          </div>
        )}
      </div>
      <div className="sm-caption">
        <span className="sm-caption-tag">surface</span>
        <span className="sm-caption-text">Bobby in his actual voice. To the audience that opted in. Disclosure built in.</span>
      </div>
    </div>
  );
}

// ============================================================
// 04 - Weekly Promo
// ============================================================
function MockWeeklyPromo() {
  const phase = usePhase(5500);
  const calTick = phase < 0.2 ? phase / 0.2 : 1;
  const postVisible = phase > 0.25;
  const postP = postVisible ? Math.min(1, (phase - 0.25) * 3) : 0;
  const mcEnd = 1.8;
  const mc = postVisible ? (mcEnd * Math.min(1, (phase - 0.35) * 3)).toFixed(1) : '0.0';
  const holdersEnd = 782;
  const holders = postVisible ? Math.round(holdersEnd * Math.min(1, (phase - 0.4) * 3)) : 0;

  return (
    <div className="sm-frame sm-frame--weekly-promo">
      <div className="sm-tg-head">
        <div className="sm-avatar" style={{background: 'linear-gradient(135deg,#7B5CD6,#4A35A8)'}}>DL</div>
        <div className="sm-tg-meta">
          <div className="sm-tg-name">Degen Lounge</div>
          <div className="sm-tg-sub">2,103 members</div>
        </div>
        <div className="sm-tg-tag">scheduled · weekly</div>
      </div>
      <div className="sm-tg-body">
        <div className="sm-msg sm-msg-other" style={{opacity: 0.6}}>
          <span className="sm-msg-name">trader42</span>
          <span className="sm-msg-text">market's slow today</span>
        </div>
        <div className="sm-sched-tick" style={{opacity: phase < 0.25 ? 1 : 0}}>
          <div className="sm-sched-clock">
            <div className="sm-sched-hand" style={{transform: `rotate(${calTick * 360}deg)`}} />
          </div>
          <span>Promo slot · firing in {Math.max(0, Math.round((1 - calTick) * 3))}s</span>
        </div>
        {postVisible && (
          <div className="sm-msg sm-msg-bobby" style={{
            opacity: postP,
            transform: `translateY(${(1 - postP) * 16}px)`,
          }}>
            <span className="sm-msg-name sm-bobby">🐂 Bobby</span>
            <div className="sm-bubble sm-promo-bubble">
              <div className="sm-promo-tag">⚡ Promoted</div>
              <div className="sm-promo-headline">$RIFT is one Bobby's been quietly tracking.</div>
              <div className="sm-promo-body">
                Cross community footprint up 4x in two weeks. Holder growth ahead of price action. Liquidity locked through August.
              </div>
              <div className="sm-promo-stats">
                <div className="sm-promo-stat">
                  <div className="sm-promo-stat-l">MC</div>
                  <div className="sm-promo-stat-v">${mc}M</div>
                </div>
                <div className="sm-promo-stat">
                  <div className="sm-promo-stat-l">Holders</div>
                  <div className="sm-promo-stat-v">{holders}</div>
                </div>
                <div className="sm-promo-stat">
                  <div className="sm-promo-stat-l">Chain</div>
                  <div className="sm-promo-stat-v">Base</div>
                </div>
              </div>
              <div className="sm-promo-cta">Take a closer look</div>
            </div>
          </div>
        )}
      </div>
      <div className="sm-caption">
        <span className="sm-caption-tag">surface</span>
        <span className="sm-caption-text">Standalone Bobby post on a schedule. Always tagged. Never disguised.</span>
      </div>
    </div>
  );
}

// ============================================================
// 05 - Custom Monthly
// ============================================================
function MockCustomMonthly() {
  const phase = usePhase(7000);
  const weeks = [
    {label: 'Week 1', tags: ['Buy alert', 'Mass DM', 'Top 7 Premium'], intensity: 'high'},
    {label: 'Week 2', tags: ['Top 7 Premium', 'Weekly Promo'], intensity: 'mid'},
    {label: 'Week 3', tags: ['Weekly Promo', 'Mass DM'], intensity: 'low'},
    {label: 'Week 4', tags: ['Podium 24h', 'Buy alert', 'Mass DM'], intensity: 'peak'},
  ];
  const activeIdx = Math.min(3, Math.floor(phase * 4.2));

  return (
    <div className="sm-frame sm-frame-tall sm-frame--custom-monthly">
      <div className="sm-tg-head">
        <div className="sm-avatar sm-bobby-av">B</div>
        <div className="sm-tg-meta">
          <div className="sm-tg-name">$NOVA · 30-day plan</div>
          <div className="sm-tg-sub sm-online">coordinated · custom-scoped</div>
        </div>
        <div className="sm-tg-tag">enterprise</div>
      </div>
      <div className="sm-tg-body sm-cm-body">
        {weeks.map((w, i) => {
          const active = i <= activeIdx;
          const isCurrent = i === activeIdx;
          const fillPct = i < activeIdx ? 100
            : isCurrent ? Math.max(0, ((phase * 4.2) - i)) * 100
            : 0;
          return (
            <div key={i} className={`sm-cm-row ${w.intensity} ${active ? 'on' : ''} ${isCurrent ? 'current' : ''}`}>
              <div className="sm-cm-week">{w.label}</div>
              <div className="sm-cm-track">
                <div className="sm-cm-fill" style={{width: `${Math.min(100, fillPct)}%`}} />
                <div className="sm-cm-tags">
                  {w.tags.map((tag, j) => (
                    <span key={j} className="sm-cm-tag" style={{
                      opacity: active ? 1 : 0.3,
                      transitionDelay: `${j * 80}ms`,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        <div className="sm-cm-axis">
          <span>Day 1</span>
          <span>Day 8</span>
          <span>Day 15</span>
          <span>Day 22</span>
          <span>Day 30</span>
        </div>
      </div>
      <div className="sm-caption">
        <span className="sm-caption-tag">surface</span>
        <span className="sm-caption-text">Cadence varies. Bursts and quiets. The audience is never hammered.</span>
      </div>
    </div>
  );
}

export {MockBuyAlert, MockBoard, MockMassDM, MockWeeklyPromo, MockCustomMonthly};
