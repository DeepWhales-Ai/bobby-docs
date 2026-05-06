import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './TGBuyAlert.css';

// Telegram-message-style buy alert. The body Bobby posts when a new buy
// fires in a group: avatar header, token row, egg-fill visualization,
// buy details, action chips, signature footer.
//
// Animation hook: the L-to-R egg fill is driven by an ancestor with the
// `.bba--played` class (the BuyBotAnimation parent). When that class is
// absent, the eggs render in their resting state (transparent / scaled).
// When present, staggered keyframes fill them left to right.
export default function TGBuyAlert() {
  const bullMark = useBaseUrl('img/bobby-mark.png');
  const filledEggs = Array.from({length: 18});
  const emptyEggs  = Array.from({length: 6});

  return (
    <div className="tg-ba">
      <div className="tg-ba-head">
        <img className="tg-ba-avatar" src={bullMark} alt="" aria-hidden="true" />
        <span className="tg-ba-from">Bobby</span>
        <span className="tg-ba-chip">Bobby BuyBot</span>
        <span className="tg-ba-time">2s</span>
      </div>

      <div className="tg-ba-token">
        <span className="tg-ba-livedot" aria-hidden="true" />
        <span><strong>$DEEPAI</strong> · ETH · New buy</span>
      </div>

      <div className="tg-ba-eggrow" aria-hidden="true">
        {filledEggs.map((_, i) => (
          <span key={`f-${i}`} className="tg-ba-egg is-filled" />
        ))}
        {emptyEggs.map((_, i) => (
          <span key={`e-${i}`} className="tg-ba-egg is-empty" />
        ))}
      </div>

      <div className="tg-ba-details">
        <div className="tg-ba-d-left">
          <div className="tg-ba-d-amount">$348 swapped</div>
          <div className="tg-ba-d-tokens">→ 58.10K $DEEPAI</div>
        </div>
        <div className="tg-ba-d-right">
          <div>MC $598K</div>
          <div className="tg-ba-d-pos">24h +5.57%</div>
          <div>412 holders</div>
        </div>
      </div>

      <div className="tg-ba-actions">
        <span className="tg-ba-action">Chart</span>
        <span className="tg-ba-action">Scan</span>
        <span className="tg-ba-action">Contract</span>
      </div>

      <div className="tg-ba-foot">
        <img className="tg-ba-foot-icon" src={bullMark} alt="" aria-hidden="true" />
        <span>Bobby. Since 2021.</span>
      </div>
    </div>
  );
}
