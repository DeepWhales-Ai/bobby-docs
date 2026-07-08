import React, {useEffect, useRef, useState} from 'react';

// Live network numbers strip for /advertise. Honest implementation of the
// "live and growing" intent: on scroll into view each figure counts up from
// ~97% of its base over ~1.5s (ease out), then ticks upward at an approximate
// real growth rate. Values never decrement and never visibly reset; a reload
// starts fresh. Pure client state, no storage, intervals cleaned on unmount.
// These three precise figures are sanctioned for THIS page only.

function useLiveCount(base, growthMs, started) {
  const [value, setValue] = useState(() => Math.floor(base * 0.97));
  useEffect(() => {
    if (!started) return undefined;
    const from = Math.floor(base * 0.97);
    const dur = 1500;
    let raf;
    let t0;
    const tick = (t) => {
      if (t0 === undefined) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.floor(from + (base - from) * eased);
      setValue((v) => Math.max(v, next));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const iv = setInterval(() => setValue((v) => v + 1), growthMs);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, [started, base, growthMs]);
  return value;
}

export default function LiveNumbers() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return undefined;
    }
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setStarted(true);
        obs.disconnect();
      }
    }, {threshold: 0.3});
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const users = useLiveCount(1300000, 2000, started);
  const botUsers = useLiveCount(11400, 45000, started);
  const groups = useLiveCount(29000, 90000, started);

  const fmt = (n) => n.toLocaleString('en-US');

  return (
    <div className="livenums" ref={ref}>
      <span className="ln-dot" aria-hidden="true" />
      <div className="ln-stats">
        <div className="lnstat"><span className="n">{fmt(users)}</span><span className="l">users</span></div>
        <div className="lnstat"><span className="n">{fmt(botUsers)}</span><span className="l">bot users</span></div>
        <div className="lnstat"><span className="n">{fmt(groups)}</span><span className="l">all time groups</span></div>
      </div>
      <div className="ln-foot">
        <span className="pi">Sponsored, marked, trusted</span>
        <span className="pi">Live in minutes from your DM</span>
      </div>
    </div>
  );
}
