import { useState, useEffect, useRef } from "react";

export function useCountUp(target: string, duration = 2000) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const numMatch = target.match(/[\d,]+/);
          if (!numMatch) {
            setDisplay(target);
            return;
          }
          const numStr = numMatch[0].replace(/,/g, "");
          const end = parseInt(numStr, 10);
          const prefix = target.slice(0, target.indexOf(numMatch[0]));
          const suffix = target.slice(target.indexOf(numMatch[0]) + numMatch[0].length);
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(end * eased);
            const formatted = current.toLocaleString();
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display };
}
