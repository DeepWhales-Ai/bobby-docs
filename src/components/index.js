import React from 'react';
import Admonition from '@theme/Admonition';

export function Card({title, icon, href, children}) {
  const Wrapper = href ? 'a' : 'div';
  const props = href ? {href, className: 'bobby-card bobby-card--link'} : {className: 'bobby-card'};
  return (
    <Wrapper {...props}>
      {icon && <span className="bobby-card__icon" aria-hidden="true">{icon}</span>}
      {title && <div className="bobby-card__title">{title}</div>}
      {children && <div className="bobby-card__body">{children}</div>}
    </Wrapper>
  );
}

export function CardGroup({cols = 2, children}) {
  return (
    <div className="bobby-card-group" style={{'--bobby-cols': cols}}>
      {children}
    </div>
  );
}

export function Frame({caption, children}) {
  return (
    <figure className="bobby-frame">
      <div className="bobby-frame__inner">{children}</div>
      {caption && <figcaption className="bobby-frame__caption">{caption}</figcaption>}
    </figure>
  );
}

export function Note({title, children}) {
  return <Admonition type="note" title={title}>{children}</Admonition>;
}

export function Info({title, children}) {
  return <Admonition type="info" title={title}>{children}</Admonition>;
}

export function Warning({title, children}) {
  return <Admonition type="warning" title={title}>{children}</Admonition>;
}

export function Tip({title, children}) {
  return <Admonition type="tip" title={title}>{children}</Admonition>;
}

export function Steps({children}) {
  return <ol className="bobby-steps">{children}</ol>;
}

export function Step({title, children}) {
  return (
    <li className="bobby-step">
      {title && <div className="bobby-step__title">{title}</div>}
      <div className="bobby-step__body">{children}</div>
    </li>
  );
}
