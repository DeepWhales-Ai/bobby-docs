import React from 'react';
import './TG.css';

export function TGMock({groupName = 'PEPE Holders', members = '14,328 members · live', avatar = 'PH', children}) {
  return (
    <div className="tg-mock">
      <div className="tg-mock-bar">
        <div className="tg-avatar">{avatar}</div>
        <div>
          <div className="tg-name">{groupName}</div>
          <div className="tg-meta">{members}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

export function TGMsg({from = 'rob', text, bot = false, code, children}) {
  return (
    <div className={'tg-msg ' + (bot ? 'bot' : '')}>
      <div className="av">{bot ? 'B' : from.slice(0, 1).toUpperCase()}</div>
      <div className="tg-bubble">
        <div className="tg-from">{bot ? 'Bobby' : from}</div>
        <div>{code ? <code>{code}</code> : (children || text)}</div>
      </div>
    </div>
  );
}

export function TGAlert({head, children}) {
  return (
    <div className="tg-alert">
      <div className="tg-alert-head">{head}</div>
      <div className="tg-alert-line">{children}</div>
    </div>
  );
}
