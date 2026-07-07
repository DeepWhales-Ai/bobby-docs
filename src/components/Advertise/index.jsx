import React from 'react';
import './styles.css';

// /advertise — the advertiser sell. Every format, its reach, its price, one CTA.
// Bobby voice. Prices trace to the live tier pages and the /projects ladder.
// Stage 1 states per Krypt: all placements buyable; broadcast and nudge carry
// "Campaigns scheduled from launch week"; auto alerts and Bobby sponsor
// recommendations stay COMING SOON. Reach copy is qualitative (no precise
// figures beyond the hero "Over 1 million users.").

const DM = 'https://t.me/BobbyBuyBot';

const CARDS = [
  {
    name: 'Nudge', hero: true, tagline: 'Nobody else has this.',
    what: 'Follow up DM with a click button, sent to users who already saw the alert.',
    where: 'Straight to the user inbox.',
    reach: 'Per user, direct.',
    schedule: 'Campaigns scheduled from launch week.',
    price: '$300 per nudge',
  },
  {
    name: 'Buy alert banners',
    what: 'Your banner under buy alerts across the network.',
    where: '3 rotating slots. 3 projects at a time.',
    reach: 'Rides millions of alerts every month.',
    price: '$200 day · $500 3 days · $900 week',
  },
  {
    name: 'Group broadcast',
    what: 'One message across the network. Neutral framing only, Bobby voice, no direct shilling.',
    where: 'Across the network.',
    reach: 'Across the network.',
    schedule: 'Campaigns scheduled from launch week.',
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
    what: 'Photo or video, straight to user inboxes.',
    where: 'Direct to the inbox.',
    reach: 'Up to the full user base.',
    constraint: 'Full network sends take days to deliver.',
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
    name: 'League placement and weekly promo',
    what: "Your name on the week's league event, or a scheduled standalone post.",
    where: 'Across the network.',
    reach: 'Across the network.',
    price: '$300 · $750 x3',
  },
  {
    name: 'Auto alerts', soon: true,
    what: 'Twice daily neutral DM across the network.',
    where: "Across the network's groups.",
    reach: 'Across the network.',
  },
  {
    name: 'Bobby sponsor recommendations', soon: true,
    what: 'Bobby suggests sponsors when users open the bot.',
    where: 'When users open the bot.',
    reach: 'Direct, in the bot.',
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
    <div className={'card' + (c.hero ? ' hero-card' : '')}>
      {c.soon && <div className="soonchip">Coming soon</div>}
      <div className="cname">{c.name}</div>
      {c.tagline && <div className="tagline">{c.tagline}</div>}
      <div className="what">{c.what}</div>
      <div className="where">{c.where}</div>
      <div className="meta">
        <div className="row"><b>Potential reach.</b> {c.reach}</div>
        {c.schedule && <div className="row"><b>Timing.</b> {c.schedule}</div>}
        {c.constraint && <div className="row"><b>Honest constraint.</b> {c.constraint}</div>}
        {!c.soon && <div className="row"><b>Measured performance.</b> Click data publishing soon.</div>}
      </div>
      <div className="marker">Shown with a Sponsored marker.</div>
      {!c.soon && <div className="price">{c.price}</div>}
      {!c.soon && c.extra && <div className="price">{c.extra}</div>}
      {!c.soon && <a className="cta" href={DM}><span>DM Bobby</span></a>}
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
          <h1>Advertise with Bobby</h1>
          <p className="sub">Bobby is a marketing and network convergence machine. Over 1 million users. Tens of thousands of groups. One bot in the middle of all of it.</p>
          <a className="cta" href={DM}><span>DM Bobby</span></a>
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

      {/* PACKAGES */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h2>Packages</h2>
          <p className="sub">Every format above, bundled and discounted.</p>
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
            <a className="cta ghost" href="/projects"><span>See the ladder</span></a>
          </div>
          <div className="boardstrip">
            <div className="bt">Add The Board · from $135</div>
            <a className="cta ghost" href={DM}><span>Get a slot</span></a>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <div className="closer">
        <div className="line">We don't predict. We detect. Your project inside the machine that does.</div>
        <a className="cta" href={DM}><span>DM Bobby</span></a>
      </div>

    </div>
  );
}
