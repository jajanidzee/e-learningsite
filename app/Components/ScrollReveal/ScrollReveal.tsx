"use client";

import { animate } from "motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, type ReactNode } from "react";

const revealSelector = [
  "section",
  "header",
  "footer",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "img",
  "button",
  "article",
  "form",
  '[role="button"]',
  '[class*="rounded"]',
  '[class*="shadow"]',
].join(",");

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(revealSelector),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    elements.forEach((element, index) => {
      element.dataset.scrollReveal = "hidden";
      element.style.setProperty(
        "--scroll-reveal-delay",
        `${Math.min(index % 6, 5) * 70}ms`,
      );
    });

    if (reducedMotion) {
      elements.forEach((element) => {
        element.dataset.scrollReveal = "visible";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.dataset.scrollReveal = "visible";
          animate(
            element,
            { opacity: [0, 1], y: [18, 0] },
            {
              duration: 0.72,
              delay:
                parseFloat(
                  element.style.getPropertyValue("--scroll-reveal-delay"),
                ) / 1000,
              ease: [0.22, 1, 0.36, 1],
            },
          );
          observer.unobserve(element);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
