import React from 'react';
import TgMock from '@site/src/components/TgMock';
import './styles.css';

// /advertise — the advertiser sell. Outcome-led hero, proof strip, a 9-card
// formats grid with aligned CTAs, three Telegram mockups, packages, closer.
// Every placement is buyable via DM. No timing lines, no coming-soon language.
// Prices trace to the live tier pages and the /projects ladder.

const DM = 'https://t.me/BobbyBuyBot';

const CARDS = [
  {
    name: 'Buy alert banners',
    what: 'Your banner under buy alerts across the network. 3 rotating slots, 3 projects at a time.',
    where: 'Under every live buy alert.',
    reach: 'Rides millions of alerts every month.',
    price: '$200 day · $500 3 days · $900 week',
  },
  {
    name: 'Nudge',
    what: 'Follow up DM with a click button, sent to users who already saw the alert. Nobody else has this.',
    where: 'Straight to the user inbox.',
    reach: 'Per user, direct.',
    price: '$300 per nudge',
  },
  {
    name: 'Group broadcast',
    what: 'One message across the network. Neutral framing, Bobby voice, no direct shilling.',
    where: 'Across the network.',
    reach: 'Across the network.',
    price: '$400 day · $2,000 week',
  },
  {
    name: 'The Board sponsorship',
    what: 'Sponsor slot on The Board.',
    where: 'On The Board itself.',
    reach: 'Across the network.',
    price: 'from $135',
    extra: 'Board advert slot · $500/day',
  },
  {
    name: 'Mass DM',
    what: 'Photo or video, straight to user inboxes. Full network sends take days to deliver.',
    where: 'Direct to the inbox.',
    reach: 'Up to the full user base.',
    price: '$500 per send',
  },
  {
    name: 'Daily booster',
    what: "One credit line on the day's top boosters post. Bobby's copy stays Bobby's.",
    where: 'On the daily boosters post.',
    reach: 'The daily ritual, across the network.',
    price: '$300 day',
  },
  {
    name: 'League and weekly promo',
    what: "Your name on the week's league event, or a scheduled standalone post.",
    where: 'Across the network.',
    reach: 'Across the network.',
    price: '$300 · $750 x3',
  },
  {
    name: 'Auto alerts',
    what: 'Twice daily neutral DM across the network.',
    where: "Across the network's groups.",
    reach: 'Across the network.',
    price: 'Pricing via Bobby',
  },
  {
    name: 'Bobby sponsor recommendations',
    what: 'Bobby suggests sponsors when users open the bot.',
    where: 'When users open the bot.',
    reach: 'Direct, in the bot.',
    price: 'Pricing via Bobby',
  },
];

const PACKS = [
  {n: 'IGNITE', p: '$399', d: '1 day'},
  {n: 'MOMENTUM', p: '$1,299', d: '3 days'},
  {n: 'TAKEOVER', p: '$3,499', d: '7 days'},
  {n: 'RESIDENCY', p: '$6,999', d: '14 days'},
  {n: 'REIGN', p: '$12,999', d: '30 days'},
];

function Card({c}) {
  return (
    <div className="card">
      <div className="cbody">
        <h3>{c.name}</h3>
        <div className="what">{c.what}</div>
        <div className="where">{c.where}</div>
        <div className="reach"><b>Potential reach.</b> {c.reach}</div>
      </div>
      <div className="cfoot">
        <div className="price">{c.price}{c.extra && <span className="extra">{c.extra}</span>}</div>
        <a className="cta-primary" href={DM}>DM Bobby</a>
      </div>
    </div>
  );
}

export default function Advertise() {
  return (
    <div className="adv">

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">For projects and companies</div>
          <h1>Your project in front of the whole network.</h1>
          <p className="sub">Over 1 million users. Tens of thousands of groups. One bot in the middle.</p>
          <a className="cta-primary" href={DM}>DM Bobby</a>
          <div className="proof">
            <span className="pi">Over 1 million users</span>
            <span className="pi">Sponsored, marked, trusted</span>
            <span className="pi">Live in minutes from your DM</span>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Every format</div>
          <h2>What you get. What it reaches. What it costs.</h2>
          <div className="cards">
            {CARDS.map((c) => <Card key={c.name} c={c} />)}
          </div>
        </div>
      </section>

      {/* TELEGRAM MOCKS */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Where your ad lives</div>
          <h2>This is Telegram. This is the room.</h2>
          <div className="tgset">
            <div>
              <TgMock messages={[{
                from: 'bot',
                text: 'New buy on $NOVA. 4.2 ETH in. Liquidity locked, holders climbing.',
                sponsor: 'Presented with $NOVA',
                buttons: [{label: 'View $NOVA'}],
                time: '14:02',
              }]} />
              <div className="tgcap">Buy alert with a sponsor banner</div>
            </div>
            <div>
              <TgMock messages={[{
                from: 'bot',
                text: 'Bobby here. $NOVA is moving and you were early. Take a look.',
                buttons: [{label: 'Open $NOVA'}],
                time: '14:05',
              }]} />
              <div className="tgcap">Nudge DM with a click button</div>
            </div>
            <div>
              <TgMock messages={[{
                from: 'bot',
                text: 'Bobby broadcast. $NOVA is live across the network today. Worth a look.',
                sponsor: 'Presented with $NOVA',
                time: '09:00',
              }]} />
              <div className="tgcap">Group broadcast</div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h2>Every format above, bundled and discounted.</h2>
          <div className="packrow">
            {PACKS.map((p) => (
              <div className="pk" key={p.n}>
                <div className="pn">{p.n}</div>
                <div className="pp">{p.p}</div>
                <div className="pd">{p.d}</div>
              </div>
            ))}
          </div>
          <div className="packlinks">
            <a className="cta-ghost" href="/projects">See the ladder</a>
          </div>
          <div className="boardstrip">
            <div className="bt">Add The Board · from $135 · Board advert slot $500/day</div>
            <a className="cta-ghost" href={DM}>Get a slot</a>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <div className="closer">
        <div className="line">We don't predict. We detect. Your project inside the machine that does.</div>
        <a className="cta-primary" href={DM}>DM Bobby</a>
      </div>

    </div>
  );
}
