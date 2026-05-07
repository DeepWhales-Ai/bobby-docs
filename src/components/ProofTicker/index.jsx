// The Proof - rolling 10-line event ticker. Newest top, oldest rolls off.
// Plus the Epic sticky line above and rotating CTA below.

import React, {useState, useEffect} from 'react';

const EVENTS = [
  {tier: 'rank',   tkr: '$WIF',    msg: 'climbed to #2',         sub: '+3 from rank 5'},
  {tier: 'boost',  tkr: '$BRETT',  msg: 'boost milestone · 250', sub: 'community pressure'},
  {tier: 'entry',  tkr: '$BERA',   msg: 'entered The Board',     sub: 'first time at #14'},
  {tier: 'boost',  tkr: '$PEPE',   msg: 'boost milestone · 500', sub: 'epic tier'},
  {tier: 'rank',   tkr: '$BONK',   msg: 'held #1 for 6h',        sub: 'no challenger close'},
  {tier: 'volume', tkr: '$WIF',    msg: 'crossed $400k 24h',     sub: 'while trending'},
  {tier: 'rank',   tkr: '$BRETT',  msg: 'climbed to #4',         sub: '+1'},
  {tier: 'entry',  tkr: '$MOG',    msg: 'entered The Board',     sub: 'first time at #11'},
  {tier: 'boost',  tkr: '$BONK',   msg: 'boost milestone · 100', sub: 'first hour'},
  {tier: 'rank',   tkr: '$PEPE',   msg: 'climbed to #5',         sub: '+2'},
  {tier: 'gain',   tkr: '$BERA',   msg: '+47% since trending',   sub: 'organic price action'},
  {tier: 'rank',   tkr: '$WIF',    msg: 'returned #1',           sub: 'reclaimed'},
  {tier: 'boost',  tkr: '$DEGEN',  msg: 'boost milestone · 250', sub: 'rallying'},
  {tier: 'entry',  tkr: '$ANDY',   msg: 'entered The Board',     sub: 'first time at #15'},
  {tier: 'volume', tkr: '$BRETT',  msg: 'crossed $1M 24h',       sub: 'while trending · epic tier'},
];

const TIER_MAP = {
  rank:   {label: 'RANK',   cls: 'rank'},
  boost:  {label: 'BOOST',  cls: 'boost'},
  entry:  {label: 'ENTRY',  cls: 'entry'},
  volume: {label: 'VOL',    cls: 'volume'},
  gain:   {label: 'GAIN',   cls: 'gain'},
};

function tierBadge(t) {
  const m = TIER_MAP[t] || {label: t.toUpperCase(), cls: 'rank'};
  return <span className={`pt-tag ${m.cls}`}>{m.label}</span>;
}

const CTA_LINES = [
  {label: 'EVENTS / DAY', val: '~840'},
  {label: 'BOOSTERS',     val: 'unlimited'},
  {label: 'GROUPS LIVE',  val: 'thousands'},
];

export default function ProofTicker() {
  const [feed, setFeed] = useState(() => EVENTS.slice(0, 10));
  const [cursor, setCursor] = useState(10);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCursor((c) => c + 1);
      setTick((x) => x + 1);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (cursor === 10) return;
    const next = EVENTS[cursor % EVENTS.length];
    setFeed((prev) => [{...next, ts: Date.now(), key: cursor}, ...prev.slice(0, 9)]);
  }, [cursor]);

  const cta = CTA_LINES[tick % CTA_LINES.length];

  return (
    <div className="proof">
      <div className="proof-head">
        <div className="ph-left">
          <span className="dot lime" />
          <span className="ph-title">bobby.proof · live ticker</span>
        </div>
        <div className="ph-right">
          <span className="ph-meta">edited every ~60s · pinned in channel</span>
        </div>
      </div>

      <div className="proof-epic">
        <div className="pe-tag">EPIC</div>
        <div className="pe-body">
          <strong>$BRETT</strong> crossed $1M 24h volume while trending. Network record.
        </div>
      </div>

      <div className="proof-feed">
        {feed.map((ev, i) => {
          const isNew = i === 0 && ev.ts !== undefined && Date.now() - ev.ts < 1500;
          return (
            <div className={`pt-row ${isNew ? 'new' : ''}`} key={ev.key ?? `seed-${i}`}>
              {tierBadge(ev.tier)}
              <span className="pt-tkr">{ev.tkr}</span>
              <span className="pt-msg">{ev.msg}</span>
              <span className="pt-sub">{ev.sub}</span>
            </div>
          );
        })}
      </div>

      <div className="proof-cta">
        <div className="pc-line">
          <span className="pc-label">{cta.label}</span>
          <span className="pc-val">{cta.val}</span>
        </div>
        <div className="pc-arrow">
          <a href="https://t.me/bobbybooost" target="_blank" rel="noreferrer">
            Open the channel →
          </a>
        </div>
      </div>
    </div>
  );
}
