import React from 'react';
import * as LucideIcons from 'lucide-react';

const ICON_ALIASES = {
  bullseye: 'Target',
  telegram: 'Send',
  'life-ring': 'LifeBuoy',
  'quote-left': 'Quote',
  bolt: 'Zap',
  'layer-group': 'Layers',
  'seal-check': 'BadgeCheck',
  grid: 'LayoutGrid',
};

function resolveIcon(name) {
  if (!name || typeof name !== 'string') return null;
  if (ICON_ALIASES[name]) return LucideIcons[ICON_ALIASES[name]] || null;
  const pascal = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return LucideIcons[pascal] || null;
}

export function Card({title, icon, href, children}) {
  const Wrapper = href ? 'a' : 'div';
  const props = href ? {href, className: 'bobby-card bobby-card--link'} : {className: 'bobby-card'};
  const IconComp = resolveIcon(icon);
  return (
    <Wrapper {...props}>
      {IconComp && (
        <span className="bobby-card__icon" aria-hidden="true">
          <IconComp size={18} strokeWidth={1.8} />
        </span>
      )}
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

function Callout({kind, icon, title, children}) {
  return (
    <div className={`callout ${kind}`}>
      <div className="callout-icon">{icon}</div>
      <div>
        {title && <div className="callout-title">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Note({title, children}) {
  return <Callout kind="info" icon="i" title={title}>{children}</Callout>;
}

export function Info({title, children}) {
  return <Callout kind="info" icon="i" title={title}>{children}</Callout>;
}

export function Warning({title, children}) {
  return <Callout kind="warn" icon="!" title={title}>{children}</Callout>;
}

export function Tip({title, children}) {
  return <Callout kind="tip" icon="✓" title={title}>{children}</Callout>;
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
