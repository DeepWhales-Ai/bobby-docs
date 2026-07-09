import React, {useEffect, useRef, useState} from 'react';
import {RotateCw} from 'lucide-react';
import TgMock from '@site/src/components/TgMock';
import './showcase.css';

// Interactive ad surface showcase. Click a surface, its animated Telegram mock
// plays: chat context header, messages arrive, then the ad element is ringed and
// labelled so an advertiser sees exactly which pixels they are buying. Every
// surface states its chat context. Invented tokens and groups only. Sponsored
// marker is visible on Network broadcasts and Bobby Recommends. First surface
// autoplays on scroll into view; replays on select and on the replay control.
// Reduced motion renders instantly with the highlight shown static.

const GROUP = 'Moonrock Community';

const SURFACES = [
  {
    id: 'banner',
    name: 'Buy alert banner',
    desc: 'Your line and button on every buy alert.',
    caption: 'Shows under buy alerts in any group running Bobby.',
    mock: {name: GROUP, status: 'group', context: '',
      messages: [{
        from: 'bot', time: '14:02',
        text: 'New buy on $NOVA. 4.2 ETH in. Liquidity locked, holders climbing.',
        buttons: [{label: 'Chart'}, {label: 'Scan'}],
        sponsor: 'Presented with $NOVA', highlight: 'Your banner', highlightPart: 'sponsor',
      }]},
  },
  {
    id: 'broadcast',
    name: 'Network broadcasts',
    desc: 'One credit line and button on every post.',
    caption: 'Posted by Bobby to groups across the network.',
    mock: {name: GROUP, status: 'group', context: '',
      messages: [{
        from: 'bot', time: '09:00',
        text: 'Bobby broadcast. $NOVA is worth a look across the network today.',
        sponsor: 'Presented with $NOVA', buttons: [{label: 'Open $NOVA'}],
        highlight: 'Your credit line', highlightPart: 'sponsor',
      }]},
  },
  {
    id: 'recommends',
    name: 'Bobby Recommends',
    desc: 'Bobby recommends in his own voice.',
    caption: 'Bobby recommends in his own voice. Sponsored and endorsed, clearly disclosed.',
    mock: {name: 'Bobby', status: 'bot', context: 'online',
      messages: [{
        from: 'bot', time: '11:20',
        text: 'Bobby here. I looked at $NOVA and I like what the holders are doing. Worth your time.',
        sponsor: 'Sponsored and endorsed',
        highlight: "Bobby's recommendation", highlightPart: 'bubble',
      }]},
  },
  {
    id: 'nudge',
    name: 'Nudge DM',
    desc: 'A direct nudge in the user Bobby DM.',
    caption: 'A direct nudge in the user Bobby DM.',
    mock: {name: 'Bobby', status: 'bot', context: 'online',
      messages: [{
        from: 'bot', time: '14:05',
        text: 'Bobby here. $NOVA is moving and you were early. Take a look.',
        buttons: [{label: 'Open $NOVA'}], highlight: 'Your nudge', highlightPart: 'button',
      }]},
  },
  {
    id: 'league',
    name: 'League and weekly promo',
    desc: "Your name on the week's league event.",
    caption: "Your name on the week's league event.",
    mock: {name: GROUP, status: 'group', context: '',
      messages: [{
        from: 'bot', time: '12:00',
        text: "This week's League is live. Boost your picks and climb the board.",
        sponsor: 'Presented with $NOVA', highlight: 'Your name on the league', highlightPart: 'sponsor',
      }]},
  },
  {
    id: 'board',
    name: 'The Board advert slot',
    desc: 'A paid slot on The Board.',
    caption: 'A paid advert slot on The Board.',
    mock: {name: 'Bobby', status: 'bot', context: 'The Board',
      messages: [
        {from: 'bot', text: 'The Board, live now. 1 $ALPHA. 2 $NOVA. 3 $KORE.'},
        {from: 'bot', text: 'Advert slot. Your project here.', buttons: [{label: 'Your button'}],
          highlight: 'Your advert slot', highlightPart: 'bubble'},
      ]},
  },
  {
    id: 'massdm',
    name: 'Mass DM',
    desc: 'Your full creative, straight to the inbox.',
    caption: 'Your full creative, image included, sent to opted in users.',
    mock: {name: 'Bobby', status: 'bot', context: 'online',
      messages: [{
        from: 'bot', time: '10:00',
        text: 'A message from $NOVA. New season, new listing, same team. Take a look.',
        sponsor: 'Sent on behalf of $NOVA', buttons: [{label: 'Open $NOVA'}],
        highlight: 'Your full message', highlightPart: 'bubble',
      }]},
  },
  {
    id: 'booster',
    name: 'Daily booster',
    desc: "One credit line on the day's boosters post.",
    caption: "One credit line on the day's top boosters post.",
    mock: {name: GROUP, status: 'group', context: '',
      messages: [{
        from: 'bot', time: '00:00',
        text: 'Top boosters today. $ALPHA, $NOVA and $KORE are leading the room.',
        sponsor: 'Presented with $NOVA', highlight: 'Your credit line', highlightPart: 'sponsor',
      }]},
  },
];

export default function AdSurfaceShowcase() {
  const [activeId, setActiveId] = useState(SURFACES[0].id);
  const [playN, setPlayN] = useState(0);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setInView(true); return undefined; }
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setInView(true);
        setPlayN((n) => n + 1);
        obs.disconnect();
      }
    }, {threshold: 0.35});
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const select = (id) => {
    setActiveId(id);
    setPlayN((n) => n + 1);
  };

  const active = SURFACES.find((s) => s.id === activeId) || SURFACES[0];
  const animate = inView && !reduced;

  return (
    <div className="showcase" ref={ref}>
      <div className="sc-selector" role="tablist" aria-label="Ad surfaces">
        {SURFACES.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={s.id === activeId}
            className={'sc-item' + (s.id === activeId ? ' active' : '')}
            onClick={() => select(s.id)}>
            <span className="sc-name">{s.name}</span>
            <span className="sc-desc">{s.desc}</span>
          </button>
        ))}
      </div>

      <div className="sc-stage">
        <TgMock key={active.id + '-' + playN} animate={animate} {...active.mock} />
        <div className="sc-caption">{active.caption}</div>
        <button type="button" className="sc-replay" onClick={() => setPlayN((n) => n + 1)} aria-label="Replay">
          <RotateCw size={14} aria-hidden="true" />
          <span>Replay</span>
        </button>
      </div>
    </div>
  );
}
