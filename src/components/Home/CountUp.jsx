import React, {useEffect, useRef, useState} from 'react';

function formatComma(n) {
  return Math.round(n).toLocaleString('en-US');
}

function formatMPlus(n) {
  // Raw input (e.g. 2_500_000) → "2.5M+"
  return (n / 1_000_000).toFixed(1) + 'M+';
}

const FORMATTERS = {
  comma: formatComma,
  mPlus: formatMPlus,
};

/**
 * Counter that ticks up from 0 to `target` once it scrolls into view, then
 * occasionally fires a "+N" pulse to suggest live network growth. SSR-safe:
 * the initial render is `0` (or `0.0M+`), real animation runs only on the
 * client when the element intersects the viewport.
 */
export default function CountUp({target, format = 'comma', duration = 2400}) {
  const [value, setValue] = useState(0);
  const [pulse, setPulse] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      // Older browser fallback: snap straight to target.
      setValue(target);
      return undefined;
    }

    let started = false;
    let mounted = true;
    let pulseTimeout;
    let raf;

    const schedulePulse = () => {
      const delay = 6000 + Math.random() * 9000; // 6-15s
      pulseTimeout = setTimeout(() => {
        if (!mounted) return;
        const inc = 1 + Math.floor(Math.random() * 3); // +1, +2, or +3
        setPulse({value: inc, key: Date.now()});
        setTimeout(() => {
          if (mounted) setPulse(null);
        }, 1400);
        schedulePulse();
      }, delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const step = (now) => {
              if (!mounted) return;
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              const eased = 1 - (1 - t) ** 3; // ease-out cubic
              setValue(target * eased);
              if (t < 1) {
                raf = requestAnimationFrame(step);
              } else {
                setValue(target);
                schedulePulse();
              }
            };
            raf = requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      {threshold: 0.4},
    );
    observer.observe(el);

    return () => {
      mounted = false;
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (pulseTimeout) clearTimeout(pulseTimeout);
    };
  }, [target, duration]);

  const formatter = FORMATTERS[format] || formatComma;

  return (
    <span ref={ref} className="count-up">
      {formatter(value)}
      {pulse && (
        <span className="count-up-pulse" key={pulse.key}>+{pulse.value}</span>
      )}
    </span>
  );
}
