import React from 'react';
import './styles.css';

// TgMock renders a realistic Telegram chat frame. Declarative API, same in JSX
// and MDX:
//
//   <TgMock name="Bobby" status="bot" messages={[
//     {from: 'bot', text: 'New buy on $NOVA.', time: '14:02',
//      sponsor: 'Presented with $NOVA', buttons: [{label: 'View $NOVA'}]},
//     {from: 'you', code: '/set_portal https://yourproject.com'},
//   ]} />
//
// `code` renders monospace (the only monospace on the site); `text` renders sans.
//
// Animation / highlight (used by AdSurfaceShowcase):
//  - animate: messages slide and fade in, staggered; the ad element ring and its
//    pointer label appear after they land. Reduced motion renders instantly with
//    the highlight shown static (handled in CSS).
//  - a message may carry highlight (pointer label) and highlightPart
//    ('bubble' default | 'sponsor' | 'button') to mark exactly which pixels the
//    advertiser is buying.

const DM = 'https://t.me/BobbyBuyBot';

function Pointer({label}) {
  return <span className="tgmock-pointer">{label}</span>;
}

function Message({m, animate}) {
  const you = m.from === 'you';
  const part = m.highlight ? (m.highlightPart || 'bubble') : null;
  return (
    <div className={'tgmock-row' + (you ? ' you' : '') + (animate ? ' tgmock-in' : '')}>
      <div className={'tgmock-bubble' + (part === 'bubble' ? ' tgmock-hl' : '')}>
        {m.code ? <span className="tgmock-code">{m.code}</span> : <span>{m.text}</span>}
        {m.sponsor && (
          <div className={'tgmock-sponsor' + (part === 'sponsor' ? ' tgmock-hl' : '')}>
            <span className="tag">Sponsored</span>
            <span>{m.sponsor}</span>
            {part === 'sponsor' && <Pointer label={m.highlight} />}
          </div>
        )}
        {m.buttons && m.buttons.length > 0 && (
          <div className={'tgmock-btns' + (part === 'button' ? ' tgmock-hl' : '')}>
            {m.buttons.map((b) => (
              <a className="tg-btn" key={b.label} href={b.href || DM}>{b.label}</a>
            ))}
            {part === 'button' && <Pointer label={m.highlight} />}
          </div>
        )}
        {m.time && <span className="tgmock-time">{m.time}</span>}
        {part === 'bubble' && <Pointer label={m.highlight} />}
      </div>
    </div>
  );
}

export default function TgMock({name = 'Bobby', status = 'bot', context, messages = [], animate = false}) {
  // context undefined falls back to 'online' (static usages); pass '' to render
  // no subline. Never put a member count or any reach figure here.
  const sub = context === undefined ? 'online' : context;
  return (
    <div className={'tgmock' + (animate ? ' tgmock-anim' : '')}>
      <div className="tgmock-head">
        <div className="tgmock-av">B</div>
        <div className="tgmock-who">
          <div className="tgmock-name">{name} <span className="tgmock-bot">{status}</span></div>
          {sub ? <div className="tgmock-status">{sub}</div> : null}
        </div>
      </div>
      <div className="tgmock-body">
        {messages.map((m, i) => <Message m={m} animate={animate} key={i} />)}
      </div>
    </div>
  );
}
