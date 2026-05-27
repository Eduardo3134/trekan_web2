"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Target direct content wrappers of all sections except hero
    const targets: HTMLElement[] = [];

    document.querySelectorAll("section:not(#hero) > div").forEach((el) => {
      targets.push(el as HTMLElement);
    });

    // Also stagger child cards/rows inside sections
    document
      .querySelectorAll(
        "section:not(#hero) .grid > *, section:not(#hero) .flex-col > .rounded-xl, section:not(#hero) .flex-col > .bg-\\[\\#0F1629\\]"
      )
      .forEach((el) => {
        if (!targets.includes(el as HTMLElement)) {
          targets.push(el as HTMLElement);
        }
      });

    targets.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 15}ms, transform 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 15}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
