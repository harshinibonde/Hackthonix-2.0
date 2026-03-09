import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe the element itself and all scroll-reveal / stagger-children inside
    const targets = el.querySelectorAll(".scroll-reveal, .stagger-children");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("scroll-reveal") || el.classList.contains("stagger-children")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
