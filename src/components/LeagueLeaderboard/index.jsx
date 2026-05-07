// Animated League leaderboard - top users + top groups, weekly competition.
// Boost counts tick up. Rows shuffle when ranks change. Rank arrows show movement.

import React, {useState, useEffect} from 'react';

const SEED_USERS = [
  {name: 'wifkeeper',     group: 'Memecoin AM',   score: 1842},
  {name: 'solanaman.eth', group: 'Solana Gems',   score: 1718},
  {name: 'pepecore',      group: 'Trench Talk',   score: 1604},
  {name: 'baseboy',       group: 'Base Insiders', score: 1571},
  {name: 'lurkqueen',     group: 'OG Holders',    score: 1489},
  {name: 'midcaplab',     group: 'Mid-Cap Lab',   score: 1402},
  {name: 'echo.echo',     group: 'L2 Watch',      score: 1366},
  {name: 'rugfilter',     group: 'Rugfilter',     score: 1298},
  {name: 'bonkeur',       group: 'CT-Apes',       score: 1241},
  {name: 'cohortbender',  group: 'Alpha Pit',     score: 1187},
];

const SEED_GROUPS = [
  {name: 'Memecoin AM',   members: '12.4k', score: 18420},
  {name: 'Solana Gems',   members: '9.1k',  score: 17109},
  {name: 'Trench Talk',   members: '7.8k',  score: 15842},
  {name: 'Base Insiders', members: '11.2k', score: 14201},
  {name: 'OG Holders',    members: '6.3k',  score: 13672},
  {name: 'L2 Watch',      members: '5.9k',  score: 12940},
  {name: 'Mid-Cap Lab',   members: '4.2k',  score: 11488},
  {name: 'CT-Apes',       members: '8.7k',  score: 10920},
  {name: 'Rugfilter',     members: '3.4k',  score: 10134},
  {name: 'Alpha Pit',     members: '5.1k',  score: 9876},
];

function rankArrow(currIdx, prevIdx) {
  if (prevIdx === currIdx) return <span className="ll-arrow flat">·</span>;
  if (prevIdx > currIdx) return <span className="ll-arrow up">▲</span>;
  return <span className="ll-arrow down">▼</span>;
}

export default function LeagueLeaderboard() {
  const [tick, setTick] = useState(0);
  const [users, setUsers] = useState(() => SEED_USERS.map((u, i) => ({...u, prevRank: i})));
  const [groups, setGroups] = useState(() => SEED_GROUPS.map((g, i) => ({...g, prevRank: i})));
  const [pulses, setPulses] = useState({});

  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1100);
    return () => clearInterval(t);
  }, []);

  // Each tick, randomly bump 1-2 users and 1 group every other tick
  useEffect(() => {
    if (tick === 0) return;
    setUsers((prev) => {
      const copy = prev.map((u) => ({...u}));
      const k = 1 + Math.floor(Math.random() * 2);
      const bumped = [];
      for (let i = 0; i < k; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        const bump = Math.floor(Math.random() * 28) + 4;
        copy[idx].score += bump;
        bumped.push(copy[idx].name);
      }
      const sorted = copy.slice().sort((a, b) => b.score - a.score);
      const ranked = sorted.map((u) => {
        const oldIdx = prev.findIndex((p) => p.name === u.name);
        return {...u, prevRank: oldIdx};
      });
      setPulses((p) => {
        const next = {...p};
        bumped.forEach((n) => {
          next['u:' + n] = tick;
        });
        return next;
      });
      return ranked;
    });
    if (tick % 2 === 0) {
      setGroups((prev) => {
        const copy = prev.map((g) => ({...g}));
        const idx = Math.floor(Math.random() * copy.length);
        const bump = Math.floor(Math.random() * 240) + 40;
        copy[idx].score += bump;
        const bumpedName = copy[idx].name;
        const sorted = copy.slice().sort((a, b) => b.score - a.score);
        const ranked = sorted.map((g) => {
          const oldIdx = prev.findIndex((p) => p.name === g.name);
          return {...g, prevRank: oldIdx};
        });
        setPulses((p) => ({...p, ['g:' + bumpedName]: tick}));
        return ranked;
      });
    }
  }, [tick]);

  const fillPct = Math.floor((tick * 0.01) % 100);

  return (
    <div className="league">
      <div className="league-head">
        <div className="lh-left">
          <div className="lh-tag">
            <span className="dot lime" />
            <span>bobby.league · live</span>
          </div>
          <div className="lh-stat">WEEK FILL <strong>{fillPct}%</strong></div>
        </div>
        <div className="lh-right">
          <span className="lh-stat">SEASON · ROLLING</span>
        </div>
      </div>

      <div className="league-grid">
        {/* USERS */}
        <div className="ll-col">
          <div className="ll-col-head">
            <span className="ll-col-title">TOP 10 BOOSTERS</span>
            <span className="ll-col-meta">By personal boost score</span>
          </div>
          <div className="ll-list">
            {users.map((u, i) => {
              const pulseFrame = pulses['u:' + u.name];
              const isPulsing = pulseFrame !== undefined && tick - pulseFrame < 2;
              const moved = u.prevRank !== i;
              return (
                <div
                  className={`ll-row ${isPulsing ? 'pulsing' : ''} ${moved ? 'moved' : ''}`}
                  key={u.name}
                  style={{
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s',
                  }}>
                  <div className="ll-rank">
                    <span className={`ll-num ${i < 3 ? 'top' : ''}`}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    {rankArrow(i, u.prevRank)}
                  </div>
                  <div className="ll-name">
                    <span className="ll-handle">{u.name}</span>
                    <span className="ll-sub">from {u.group}</span>
                  </div>
                  <div className="ll-score">
                    <span className="ll-score-num">{u.score.toLocaleString()}</span>
                    <span className="ll-score-label">boosts</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GROUPS */}
        <div className="ll-col">
          <div className="ll-col-head">
            <span className="ll-col-title">TOP 10 GROUPS</span>
            <span className="ll-col-meta">Aggregate boost from members</span>
          </div>
          <div className="ll-list">
            {groups.map((g, i) => {
              const pulseFrame = pulses['g:' + g.name];
              const isPulsing = pulseFrame !== undefined && tick - pulseFrame < 3;
              const moved = g.prevRank !== i;
              return (
                <div
                  className={`ll-row group ${isPulsing ? 'pulsing' : ''} ${moved ? 'moved' : ''}`}
                  key={g.name}
                  style={{
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s',
                  }}>
                  <div className="ll-rank">
                    <span className={`ll-num ${i < 3 ? 'top' : ''}`}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    {rankArrow(i, g.prevRank)}
                  </div>
                  <div className="ll-name">
                    <span className="ll-handle">{g.name}</span>
                    <span className="ll-sub">{g.members} members</span>
                  </div>
                  <div className="ll-score">
                    <span className="ll-score-num">{g.score.toLocaleString()}</span>
                    <span className="ll-score-label">boosts</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="league-foot">
        <span>One tap on any BOOST button. Both leaderboards move.</span>
        <span className="lf-meta">/league · /league last</span>
      </div>
    </div>
  );
}
