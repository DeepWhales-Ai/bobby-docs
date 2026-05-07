import React from 'react';
import './KV.css';

/**
 * Bobby KV - opinionated key-value pair table for spec sheets, config grids,
 * and "Reset cadence | Weekly" style content. Use in MDX as:
 *
 *   <KV title="League rules" rows={[
 *     ['Reset cadence', 'Weekly'],
 *     ['Eligibility', 'Active groups only'],
 *   ]} />
 *
 * Two-column markdown tables also pick up Bobby styling automatically via
 * the .theme-doc-markdown table rules in bobby-prototype.css.
 */
export default function KV({rows = [], title}) {
  return (
    <div className="bobby-kv">
      {title && <div className="bobby-kv__title">{title}</div>}
      <dl className="bobby-kv__list">
        {rows.map(([key, value], i) => (
          <div className="bobby-kv__row" key={i}>
            <dt className="bobby-kv__key">{key}</dt>
            <dd className="bobby-kv__value">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
