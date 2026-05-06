// Live convergence engine — the centerpiece of /intelligence/what-bobby-sees and the home engine section.
// SVG-based: chatter pings in left feeds → animated particles flow along bezier curves →
// converge on glowing core → alert pulses fire out right side.

import React, {useState, useEffect} from 'react';

const CHATTER = [
  {src: 'CT-Apes',        text: 'wif convergence rn?',          kind: 'conv'},
  {src: 'Solana Gems',    text: 'new wallet pattern $WIF',       kind: 'beh'},
  {src: 'Memecoin AM',    text: 'who else seeing this',          kind: 'echo'},
  {src: 'Base Insiders',  text: '$BRETT holders +18% in 4h',     kind: 'beh'},
  {src: 'Degen Lounge',   text: 'cross-chain echo on $PEPE',     kind: 'echo'},
  {src: 'Alpha Pit',      text: 'listing footprint clean',       kind: 'list'},
  {src: 'L2 Watch',       text: '6 sources agree',               kind: 'conv'},
  {src: 'OG Holders',     text: 'cohort shift, not pump',        kind: 'beh'},
  {src: 'Ethermind',      text: '$WIF mentioned in 4 rooms',     kind: 'echo'},
  {src: 'Solana Pulse',   text: 'historical match: 2024-Q3',     kind: 'hist'},
  {src: 'Mid-Cap Lab',    text: 'wallet 0x4a...c1 again',        kind: 'beh'},
  {src: 'Trench Talk',    text: 'quiet but compounding',         kind: 'conv'},
  {src: 'Rugfilter',      text: 'safety pass, sellable',         kind: 'list'},
  {src: 'Avalanche AM',   text: 'echo from 3 unrelated chats',   kind: 'echo'},
  {src: 'Berachain Pit',  text: 'context: prior 4w',             kind: 'hist'},
];

const ALERT_LINES = [
  {tkr: '$WIF',    msg: '6 independent sources agree',     meta: 'cross-community'},
  {tkr: '$BRETT',  msg: 'holder cohort shift detected',    meta: 'behavior'},
  {tkr: '$BERA',   msg: 'echo across 4 unrelated rooms',   meta: 'cross-community'},
  {tkr: '$PEPE',   msg: 'historical pattern match',        meta: 'historical'},
  {tkr: '$BONK',   msg: 'listing footprint converging',    meta: 'listings'},
  {tkr: '$POPCAT', msg: 'quiet accumulation, 8 wallets',   meta: 'behavior'},
];

// 5 input streams — each origin → core
const STREAMS = [
  {y: 60,  label: 'Group conversations', color: '#BFFF00'},
  {y: 130, label: 'Holder behavior',     color: '#9FE000'},
  {y: 200, label: 'Cross-community echo',color: '#BFFF00'},
  {y: 270, label: 'Listing footprint',   color: '#80C800'},
  {y: 340, label: 'Historical context',  color: '#9FE000'},
];

const CORE_X = 540;
const CORE_Y = 200;
const W = 920;
const H = 400;

// bezier point at t between (60, y1) and (CORE_X, CORE_Y)
function bezPoint(y1, t) {
  const x1 = 60;
  const x2 = CORE_X;
  const cx1 = 320;
  const cy1 = y1;
  const cx2 = 420;
  const cy2 = CORE_Y;
  const x = (1 - t) ** 3 * x1 + 3 * (1 - t) ** 2 * t * cx1 + 3 * (1 - t) * t * t * cx2 + t ** 3 * x2;
  const y = (1 - t) ** 3 * y1 + 3 * (1 - t) ** 2 * t * cy1 + 3 * (1 - t) * t * t * cy2 + t ** 3 * CORE_Y;
  return {x, y};
}

function particlesFor(tick, idx) {
  const out = [];
  for (let i = 0; i < 3; i++) {
    const phase = ((tick + idx * 9 + i * 22) % 60) / 60; // 0..1 along path
    out.push({phase, key: idx + '-' + i});
  }
  return out;
}

export default function ConvergenceEngine() {
  const [tick, setTick] = useState(0);
  const [chatter, setChatter] = useState(() => [
    {src: 'Avalanche AM', text: 'echo from 3 unrelated chats', kind: 'echo', id: 1, born: -10},
    {src: 'Rugfilter',    text: 'safety pass, sellable',       kind: 'list', id: 2, born: -8},
    {src: 'OG Holders',   text: 'cohort shift, not pump',      kind: 'beh',  id: 3, born: -6},
    {src: 'Base Insiders',text: '$BRETT holders +18% in 4h',   kind: 'beh',  id: 4, born: -5},
    {src: 'Memecoin AM',  text: 'who else seeing this',        kind: 'echo', id: 5, born: -4},
    {src: 'L2 Watch',     text: '6 sources agree',             kind: 'conv', id: 6, born: -3},
    {src: 'Solana Pulse', text: 'historical match: 2024-Q3',   kind: 'hist', id: 7, born: -2},
  ]);
  const [alerts, setAlerts] = useState(() => [
    {tkr: '$BRETT', msg: 'holder cohort shift detected',  meta: 'behavior',     id: 1, born: -12},
    {tkr: '$BONK',  msg: 'listing footprint converging',  meta: 'listings',     id: 2, born: -6},
  ]);
  const [coreFlash, setCoreFlash] = useState(0);

  useEffect(() => {
    let id;
    let n = 0;
    const tickFn = () => {
      n++;
      setTick(n);
      // Add chatter every ~700ms
      if (n % 4 === 0) {
        const item = CHATTER[Math.floor(Math.random() * CHATTER.length)];
        const stamp = Date.now() + Math.random();
        setChatter((prev) => [{...item, id: stamp, born: n}, ...prev].slice(0, 7));
      }
      // Fire an alert every ~3.2s
      if (n % 18 === 0) {
        const a = ALERT_LINES[Math.floor(Math.random() * ALERT_LINES.length)];
        const stamp = Date.now() + Math.random();
        setAlerts((prev) => [{...a, id: stamp, born: n}, ...prev].slice(0, 4));
        setCoreFlash(n);
      }
      id = setTimeout(tickFn, 180);
    };
    tickFn();
    return () => clearTimeout(id);
  }, []);

  const flashAge = tick - coreFlash;
  const corePulse = Math.max(0, 1 - flashAge / 14);

  return (
    <div className="conv-engine">
      <div className="ce-frame">
        <div className="ce-bar">
          <span className="ce-dot" />
          <span className="ce-bar-label">bobby.engine · convergence · live</span>
          <span className="ce-bar-meta">{tick.toString().padStart(6, '0')}</span>
        </div>

        <div className="ce-stage">
          {/* Left feed — chatter */}
          <div className="ce-feed">
            <div className="ce-feed-head">INPUTS · live chatter</div>
            <div className="ce-feed-list">
              {chatter.map((c) => {
                const age = tick - c.born;
                const op = Math.max(0.18, 1 - age / 80);
                return (
                  <div className="ce-msg" key={c.id} style={{opacity: op}}>
                    <div className="ce-msg-meta">
                      <span className={'ce-kind k-' + c.kind}>{c.kind}</span>
                      <span className="ce-msg-src">{c.src}</span>
                    </div>
                    <div className="ce-msg-text">{c.text}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center — SVG engine */}
          <svg className="ce-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="ceCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="#BFFF00" stopOpacity="1" />
                <stop offset="50%" stopColor="#BFFF00" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#BFFF00" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="ceCorePulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#BFFF00" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#BFFF00" stopOpacity="0" />
              </radialGradient>
              <filter id="ceGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* faint grid */}
            <g opacity="0.06">
              {Array.from({length: 12}).map((_, i) => (
                <line key={'gv' + i} x1={i * 80} y1={0} x2={i * 80} y2={H} stroke="#BFFF00" strokeWidth="0.5" />
              ))}
              {Array.from({length: 6}).map((_, i) => (
                <line key={'gh' + i} x1={0} y1={i * 80} x2={W} y2={i * 80} stroke="#BFFF00" strokeWidth="0.5" />
              ))}
            </g>

            {/* origin nodes (left edge labels) */}
            {STREAMS.map((s, i) => (
              <g key={'o' + i}>
                <line x1={0} y1={s.y} x2={48} y2={s.y} stroke={s.color} strokeOpacity="0.4" strokeWidth="1" />
                <circle cx={50} cy={s.y} r={5} fill="#0d0d0d" stroke={s.color} strokeWidth="1.5" />
                <circle cx={50} cy={s.y} r={2} fill={s.color}>
                  <animate attributeName="opacity" values="0.4;1;0.4" dur={(1.6 + i * 0.3) + 's'} repeatCount="indefinite" />
                </circle>
                <text x={56} y={s.y - 9} fontSize="10" fill="#666" fontFamily="JetBrains Mono">{s.label.toUpperCase()}</text>
              </g>
            ))}

            {/* curves from each origin to core */}
            {STREAMS.map((s, i) => (
              <path key={'p' + i}
                    d={`M 60 ${s.y} C 320 ${s.y}, 420 ${CORE_Y}, ${CORE_X} ${CORE_Y}`}
                    fill="none"
                    stroke={s.color}
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    strokeDasharray="2 5"
              />
            ))}

            {/* moving particles along each curve */}
            {STREAMS.flatMap((s, i) => particlesFor(tick, i).map((p) => {
              const pt = bezPoint(s.y, p.phase);
              const op = Math.sin(p.phase * Math.PI);
              return (
                <circle key={p.key} cx={pt.x} cy={pt.y} r={2.4}
                        fill={s.color} opacity={op}
                        filter="url(#ceGlow)" />
              );
            }))}

            {/* core */}
            {/* outer expanding pulse ring on flash */}
            {flashAge < 60 && (
              <>
                <circle cx={CORE_X} cy={CORE_Y} r={50 + flashAge * 3.5} fill="none"
                        stroke="#BFFF00" strokeWidth="2"
                        strokeOpacity={Math.max(0, 0.7 - flashAge / 60)} />
                <circle cx={CORE_X} cy={CORE_Y} r={30 + flashAge * 2.5} fill="none"
                        stroke="#BFFF00" strokeWidth="1"
                        strokeOpacity={Math.max(0, 0.5 - flashAge / 60)} />
              </>
            )}

            {/* outer halo */}
            <circle cx={CORE_X} cy={CORE_Y} r={130 + corePulse * 22} fill="url(#ceCorePulse)" opacity={0.35 + corePulse * 0.4} />
            <circle cx={CORE_X} cy={CORE_Y} r={95} fill="url(#ceCore)" opacity={0.85} />

            {/* slow rotating outer ring with tick marks */}
            <g transform={`rotate(${tick * 0.4} ${CORE_X} ${CORE_Y})`}>
              <circle cx={CORE_X} cy={CORE_Y} r={86} fill="none"
                      stroke="#BFFF00" strokeOpacity="0.22" strokeWidth="1"
                      strokeDasharray="2 8" />
              {Array.from({length: 12}).map((_, i) => {
                const ang = (i / 12) * Math.PI * 2;
                const x1 = CORE_X + Math.cos(ang) * 80;
                const y1 = CORE_Y + Math.sin(ang) * 80;
                const x2 = CORE_X + Math.cos(ang) * 88;
                const y2 = CORE_Y + Math.sin(ang) * 88;
                return <line key={'tk' + i} x1={x1} y1={y1} x2={x2} y2={y2}
                             stroke="#BFFF00" strokeOpacity="0.4" strokeWidth="1" />;
              })}
            </g>

            {/* counter-rotating inner ring */}
            <g transform={`rotate(${-tick * 0.7} ${CORE_X} ${CORE_Y})`}>
              <circle cx={CORE_X} cy={CORE_Y} r={62} fill="none"
                      stroke="#BFFF00" strokeOpacity="0.35" strokeWidth="1.2"
                      strokeDasharray="14 6" />
              {[0, 1, 2, 3].map((i) => {
                const ang = (i / 4) * Math.PI * 2;
                const x = CORE_X + Math.cos(ang) * 62;
                const y = CORE_Y + Math.sin(ang) * 62;
                return <circle key={'orb' + i} cx={x} cy={y} r="2.5" fill="#BFFF00" filter="url(#ceGlow)" />;
              })}
            </g>

            {/* hexagonal frame around the core */}
            <g opacity="0.5">
              <polygon
                points={Array.from({length: 6}).map((_, i) => {
                  const ang = (i / 6) * Math.PI * 2 - Math.PI / 2;
                  const x = CORE_X + Math.cos(ang) * 105;
                  const y = CORE_Y + Math.sin(ang) * 105;
                  return `${x},${y}`;
                }).join(' ')}
                fill="none" stroke="#BFFF00" strokeOpacity="0.25" strokeWidth="1"
              />
              {Array.from({length: 6}).map((_, i) => {
                const ang = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const x = CORE_X + Math.cos(ang) * 105;
                const y = CORE_Y + Math.sin(ang) * 105;
                return <circle key={'hx' + i} cx={x} cy={y} r="2" fill="#BFFF00" />;
              })}
            </g>

            {/* the core itself */}
            <circle cx={CORE_X} cy={CORE_Y} r={42 + corePulse * 8} fill="#0a0a0a"
                    stroke="#BFFF00" strokeWidth="2" />

            {/* breathing inner ring */}
            <circle cx={CORE_X} cy={CORE_Y} r={42} fill="none" stroke="#BFFF00" strokeOpacity="0.5" strokeWidth="1.2">
              <animate attributeName="r" values="42;72;42" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.8s" repeatCount="indefinite" />
            </circle>

            {/* center glyph */}
            <text x={CORE_X} y={CORE_Y + 14} textAnchor="middle"
                  fontSize="44" fontWeight="700"
                  fontFamily="JetBrains Mono" fill="#BFFF00"
                  filter="url(#ceGlow)">∴</text>

            {/* CONVERGENCE label */}
            <g>
              <line x1={CORE_X - 70} y1={CORE_Y + 130} x2={CORE_X - 50} y2={CORE_Y + 130} stroke="#BFFF00" strokeOpacity="0.6" strokeWidth="1" />
              <line x1={CORE_X + 50} y1={CORE_Y + 130} x2={CORE_X + 70} y2={CORE_Y + 130} stroke="#BFFF00" strokeOpacity="0.6" strokeWidth="1" />
              <text x={CORE_X} y={CORE_Y + 134} textAnchor="middle"
                    fontSize="13" fontWeight="600"
                    fontFamily="JetBrains Mono" fill="#BFFF00" letterSpacing="3">CONVERGENCE</text>
            </g>

            {/* outbound rays — alert beams */}
            {[150, 200, 250].map((y, i) => (
              <g key={'out' + i}>
                <line x1={CORE_X + 28} y1={y} x2={W - 40} y2={y}
                      stroke="#BFFF00" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 6" />
                <circle r="3" fill="#BFFF00" filter="url(#ceGlow)">
                  <animate attributeName="cx" values={`${CORE_X + 28};${W - 40}`} dur={(2 + i * 0.4) + 's'} repeatCount="indefinite" />
                  <animate attributeName="cy" values={`${y};${y}`} dur={(2 + i * 0.4) + 's'} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur={(2 + i * 0.4) + 's'} repeatCount="indefinite" />
                </circle>
              </g>
            ))}

            {/* small static labels */}
            <text x={W - 10} y={130} textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#666">OUTPUTS →</text>
          </svg>

          {/* Right column — alerts firing */}
          <div className="ce-out">
            <div className="ce-feed-head">OUTPUT · alerts that earn the ping</div>
            <div className="ce-alerts">
              {alerts.map((a) => {
                const age = tick - a.born;
                const op = Math.max(0.25, 1 - age / 90);
                return (
                  <div className="ce-alert" key={a.id} style={{opacity: op}}>
                    <div className="ce-alert-head">
                      <span className="ce-alert-glyph">∴</span>
                      <span className="ce-alert-tkr">{a.tkr}</span>
                      <span className="ce-alert-meta">{a.meta}</span>
                    </div>
                    <div className="ce-alert-msg">{a.msg}</div>
                  </div>
                );
              })}
              {alerts.length === 0 && (
                <div className="ce-alert-empty">Reading the room…</div>
              )}
            </div>
          </div>
        </div>

        <div className="ce-mobile-caption">
          <strong>Inputs:</strong> group conversations · holder behavior · cross-community echo · listing footprint · historical context.<br />
          <strong>Outputs:</strong> alerts that earn the ping.
        </div>

        <div className="ce-foot">
          <div><span className="ce-key">[i]</span> Five input streams. One convergence model. Behavior, never volume.</div>
          <div className="ce-foot-right">methodology</div>
        </div>
      </div>
    </div>
  );
}
