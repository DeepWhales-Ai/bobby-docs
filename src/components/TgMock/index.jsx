import React from 'react';
import './styles.css';

// TgMock renders a static, realistic Telegram chat frame. Declarative API so it
// works the same in JSX and in MDX:
//
//   <TgMock name="Bobby" status="bot" messages={[
//     {from: 'bot', text: 'New buy on $NOVA.', time: '14:02',
//      sponsor: 'Presented with $NOVA', buttons: [{label: 'View $NOVA'}]},
//     {from: 'you', code: '/set_portal https://yourproject.com'},
//   ]} />
//
// `code` renders monospace (the only monospace on the site); `text` renders sans.

const DM = 'https://t.me/BobbyBuyBot';

function Message({m}) {
  const you = m.from === 'you';
  return (
    <div className={'tgmock-row' + (you ? ' you' : '')}>
      <div className="tgmock-bubble">
        {m.code ? <span className="tgmock-code">{m.code}</span> : <span>{m.text}</span>}
        {m.sponsor && (
          <div className="tgmock-sponsor">
            <span className="tag">Sponsored</span>
            <span>{m.sponsor}</span>
          </div>
        )}
        {m.buttons && m.buttons.length > 0 && (
          <div className="tgmock-btns">
            {m.buttons.map((b) => (
              <a className="tg-btn" key={b.label} href={b.href || DM}>{b.label}</a>
            ))}
          </div>
        )}
        {m.time && <span className="tgmock-time">{m.time}</span>}
      </div>
    </div>
  );
}

export default function TgMock({name = 'Bobby', status = 'bot', messages = []}) {
  return (
    <div className="tgmock">
      <div className="tgmock-head">
        <div className="tgmock-av">B</div>
        <div className="tgmock-who">
          <div className="tgmock-name">{name} <span className="tgmock-bot">{status}</span></div>
          <div className="tgmock-status">online</div>
        </div>
      </div>
      <div className="tgmock-body">
        {messages.map((m, i) => <Message m={m} key={i} />)}
      </div>
    </div>
  );
}
