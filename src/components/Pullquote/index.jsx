import React from 'react';
import './Pullquote.css';

/**
 * Bobby Pullquote: lime left rule plus display typography. Rendered for every
 * markdown `>` blockquote site-wide via MDXComponents.blockquote override,
 * and importable directly in MDX for variant / attribution control.
 */
export default function Pullquote({children, attribution, variant = 'default'}) {
  return (
    <div className={`bobby-pullquote bobby-pullquote--${variant}`}>
      <div className="bobby-pullquote__rule" aria-hidden="true" />
      <blockquote className="bobby-pullquote__text">{children}</blockquote>
      {attribution && (
        <div className="bobby-pullquote__attr">{attribution}</div>
      )}
    </div>
  );
}
