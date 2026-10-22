import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import LiveNumbers from './LiveNumbers';
import AdSurfaceShowcase from './AdSurfaceShowcase';
import './styles.css';

// /advertise. The advertiser sell. Outcome-led hero, live numbers strip, an
// 8-card formats grid with aligned CTAs, the interactive AdSurfaceShowcase,
// packages, closer. Every placement is buyable via DM. Card facts follow Bible
// §41. The precise network figures in LiveNumbers are sanctioned for THIS page.

// Tracked ads links (Krypt 2026-10-22). /advertise?src=<tag> sends every DM
// CTA to t.me/BobbyBuyBot?start=promote_<tag>, which opens Bobby's /promote
// ads menu and lets Bobby count opens, quotes and paid orders per tag. A
// visit without a valid tag is "site". One first-party beacon per tag per
// browser session counts the visit; no third-party script, no cookies, no
// personal data.
const BOT = 'https://t.me/BobbyBuyBot';
const TAG_RE = /^[a-z0-9_]{1,24}$/;
const DEFAULT_TAG = 'site';
const VISIT_URL = 'https://status.bobbybuybot.com/api/promote-visit';

export function promoteTagFrom(search) {
  let src = '';
  try {
    src = new URLSearchParams(search || '').get('src') || '';
  } catch (e) {
    src = '';
  }
  return TAG_RE.test(src) ? src : DEFAULT_TAG;
}

export function promoteLink(tag) {
  return `${BOT}?start=promote_${TAG_RE.test(tag) ? tag : DEFAULT_TAG}`;
}

function countVisit(tag) {
  try {
    const key = `bobby-promote-visit:${tag}`;
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, '1');
  } catch (e) {
    // storage blocked: still count, once per page load
  }
  try {
    const url = `${VISIT_URL}?src=${encodeURIComponent(tag)}`;
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url);
    } else {
      fetch(url, {method: 'POST', mode: 'no-cors', keepalive: true}).catch(() => {});
    }
  } catch (e) {
    // counting never breaks the page
  }
}

function useTrackedDM() {
  const [dm, setDm] = useState(promoteLink(DEFAULT_TAG));
  useEffect(() => {
    const tag = promoteTagFrom(window.location.search);
    setDm(promoteLink(tag));
    countVisit(tag);
  }, []);
  return dm;
}

const CARDS = [
  {
    name: 'Buy alert banners',
    what: 'Your banner under buy alerts across the network. One advertiser. Exclusive.',
    where: 'Under every live buy alert.',
    reach: 'Rides millions of alerts every month.',
    price: '$100 day · $250 3 days · $450 week',
  },
  {
    name: 'Network broadcasts',
    what: "One message across the network, twice daily. Your credit line and button on every post. Bobby's own content unchanged. Marked Sponsored.",
    where: 'In groups across the network.',
    reach: 'Across the network.',
    price: '$200 per day · $1,000 per week',
  },
  {
    name: 'The Board sponsorship',
    what: 'Sponsor slot on The Board.',
    where: 'On The Board itself.',
    reach: 'Across the network.',
    price: 'from $67.50',
    extra: 'Board advert slot · $250/day',
  },
  {
    name: 'Mass DM',
    what: 'Photo or video, straight to user inboxes. Full network sends take days to deliver.',
    where: 'Direct to the inbox.',
    reach: 'Up to the full user base.',
    price: '$250 per send',
  },
  {
    name: 'Daily booster',
    what: "One credit line on the day's top boosters post. Bobby's copy stays Bobby's.",
    where: 'On the daily boosters post.',
    reach: 'The daily ritual, across the network.',
    price: '$150 day',
  },
  {
    name: 'League and weekly promo',
    what: "Sponsor the league alerts. Your name on the week's league event, or a scheduled standalone post.",
    where: 'Across the network.',
    reach: 'Across the network.',
    price: '$150 · $375 x3',
  },
  {
    name: 'Bobby Recommends',
    what: 'Bobby recommends a sponsor in his own voice. Qualification required. Sponsored and endorsed, clearly disclosed.',
    where: "In Bobby's recommendations.",
    reach: 'Direct, in the bot.',
    price: '24h $1,000 · 3 Day $2,500 · Week $5,000',
    extra: 'Qualification required.',
  },
];

const PACKS = [
  {n: 'IGNITE', p: '$199', d: '1 day', s: '$51'},
  {n: 'MOMENTUM', p: '$649', d: '3 days', s: '$301'},
  {n: 'TAKEOVER', p: '$1,749', d: '7 days', s: '$1,151'},
  {n: 'RESIDENCY', p: '$3,499', d: '14 days', s: '$2,601'},
  {n: 'REIGN', p: '$6,499', d: '30 days', s: '$5,851'},
];

function Card({c, dm}) {
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
        <a className="cta-primary" href={dm}>DM Bobby</a>
      </div>
    </div>
  );
}

export default function Advertise() {
  const dm = useTrackedDM();
  return (
    <HtmlClassNameProvider className="adv-page">
    <div className="adv">

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">For projects and companies</div>
          <h1>Your project in front of the whole network.</h1>
          <p className="sub">Over 2 million users. Tens of thousands of groups. One bot in the middle.</p>
          <a className="cta-primary" href={dm}>DM Bobby</a>
          <div className="proof">
            <LiveNumbers />
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Every format</div>
          <h2>What you get. What it reaches. What it costs.</h2>
          <div className="cards">
            {CARDS.map((c) => <Card key={c.name} c={c} dm={dm} />)}
          </div>
        </div>
      </section>

      {/* AD SURFACE SHOWCASE */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Where your ad lives</div>
          <h2>Where your ad shows.</h2>
          <p className="sub">Click a surface. Bobby plays back exactly what runs, where it shows, and in which chat.</p>
          <AdSurfaceShowcase />
        </div>
      </section>

      {/* PACKAGES */}
      <section>
        <div className="wrap">
          <div className="eyebrow">Packages</div>
          <h2>Every format above, bundled and discounted.</h2>
          <div className="packrow">
            {PACKS.map((p) => (
              <Link className="pk" key={p.n} to={`/projects#${p.n.toLowerCase()}`}>
                <div className="pn">{p.n}</div>
                <div className="pp">{p.p}</div>
                <div className="pd">{p.d}</div>
                <div className="ps">Save {p.s} vs buying separately</div>
              </Link>
            ))}
          </div>
          <div className="packlinks">
            <a className="cta-ghost" href="/projects">See the ladder</a>
          </div>
          <div className="boardstrip">
            <div className="bt">Add The Board · from $67.50 · Board advert slot $250/day</div>
            <a className="cta-ghost" href={dm}>Get a slot</a>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <div className="closer">
        <div className="line">We don't predict. We detect. Your project inside the machine that does.</div>
        <a className="cta-primary" href={dm}>DM Bobby</a>
      </div>

    </div>
    </HtmlClassNameProvider>
  );
}
