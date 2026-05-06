import React, {useEffect, useRef, useState} from 'react';
import {MockBuyAlert} from '@site/src/components/SurfaceMocks';
import './BuyBotAnimation.css';

// Demonstrates Bobby calling a buy in a Telegram group.
// IntersectionObserver triggers the animation once on first viewport entry,
// then holds the final state. prefers-reduced-motion users see the final
// state immediately with no animation.
export default function BuyBotAnimation() {
  const [played, setPlayed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (played) return;

    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlayed(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayed(true);
            observer.disconnect();
          }
        });
      },
      {threshold: 0.3},
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [played]);

  return (
    <div ref={ref} className={`bba ${played ? 'bba--played' : ''}`}>
      <div className="bba-head">
        <div className="bba-avatar">CG</div>
        <div className="bba-meta">
          <div className="bba-name">Crypto Group</div>
          <div className="bba-sub">
            <span className="bba-live-dot" aria-hidden="true" />
            <span>1,247 members · live</span>
          </div>
        </div>
      </div>

      <div className="bba-body">
        <div className="bba-msg bba-msg--1">
          <span className="bba-msg-name">midcaplab</span>
          <span className="bba-msg-text">anyone watching $BRETT?</span>
        </div>
        <div className="bba-msg bba-msg--2">
          <span className="bba-msg-name">echo.echo</span>
          <span className="bba-msg-text">yo it just popped</span>
        </div>
        <div className="bba-msg bba-msg--3">
          <span className="bba-msg-name">bonkeur</span>
          <span className="bba-msg-text">let's go</span>
        </div>

        <div className="bba-alert">
          <MockBuyAlert />
        </div>
      </div>
    </div>
  );
}
