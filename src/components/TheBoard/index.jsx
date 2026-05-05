import React, {useState, useEffect} from 'react';
import './TheBoard.css';

const SEED_TOKENS = [
  {ticker: '$WIF',   verified: true,  boosts: 487, movement: 'held #1',   prevRank: 1},
  {ticker: '$BRETT', verified: true,  boosts: 412, movement: 'epic tier', prevRank: 3},
  {ticker: '$BONK',  verified: false, boosts: 388, movement: '+2',        prevRank: 5},
  {ticker: '$PEPE',  verified: true,  boosts: 271, movement: '−1',        prevRank: 3},
  {ticker: '$BERA',  verified: false, boosts: 244, movement: '+3',        prevRank: 8},
  {ticker: '$DEGEN', verified: false, boosts: 198, movement: '·',         prevRank: 6},
  {ticker: '$ANDY',  verified: false, boosts: 172, movement: 'new',       prevRank: null},
];

export default function TheBoard() {
  const [tokens, setTokens] = useState(SEED_TOKENS);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (tick === 0) return;
    setTokens((prev) => {
      const bumped = prev.map((t, i) => ({
        ...t,
        prevRank: i + 1,
        boosts: t.boosts + Math.floor(Math.random() * 4),
      }));
      if (tick % 5 === 0) {
        const swapAt = 1 + Math.floor(Math.random() * (bumped.length - 2));
        if (bumped[swapAt].boosts > bumped[swapAt - 1].boosts * 0.95) {
          [bumped[swapAt - 1], bumped[swapAt]] = [bumped[swapAt], bumped[swapAt - 1]];
        }
      }
      return bumped;
    });
  }, [tick]);

  return (
    <div className="board">
      <div className="board-head">
        <div className="bh-left">
          <div className="bh-tag">
            <span className="dot lime" />
            <span>bobby.board · live</span>
          </div>
          <div className="bh-stat">refreshed 2s ago · pinned in @booostbobby</div>
        </div>
        <div className="bh-right">
          <span className="bh-stat">TOP 7 · LIVE FEED</span>
        </div>
      </div>

      <div className="board-list">
        <div className="bl-header">
          <span className="bl-h-rank">RANK</span>
          <span className="bl-h-token">TOKEN</span>
          <span className="bl-h-boosts">BOOSTS</span>
          <span className="bl-h-mvmt">MOVEMENT</span>
        </div>
        {tokens.map((t, i) => {
          const rank = i + 1;
          const moved = t.prevRank !== null && t.prevRank !== rank;
          const isNew = t.prevRank === null;
          const arrow = isNew ? null
            : t.prevRank > rank ? 'up'
            : t.prevRank < rank ? 'down'
            : 'flat';
          const isPodium = rank <= 3;
          return (
            <div key={t.ticker} className={`bl-row ${moved ? 'moved' : ''} ${isPodium ? 'podium' : ''}`}>
              <span className="bl-rank">{String(rank).padStart(2, '0')}</span>
              <span className="bl-token">
                {t.ticker}
                {t.verified && <span className="bl-verify" title="Founders verified">✓</span>}
              </span>
              <span className="bl-boosts">{t.boosts.toLocaleString()}</span>
              <span className={`bl-mvmt ${arrow ?? ''}`}>
                <span className="bl-mvmt-text">{t.movement}</span>
                {arrow === 'up' && <span className="bl-arrow up">▲</span>}
                {arrow === 'down' && <span className="bl-arrow down">▼</span>}
              </span>
            </div>
          );
        })}
      </div>

      <div className="board-foot">
        <span>positions 8–15 · standard trending</span>
        <span>updates every 2 min on @booostbobby</span>
      </div>
    </div>
  );
}
