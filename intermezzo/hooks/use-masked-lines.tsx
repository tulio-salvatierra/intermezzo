"use client";

/* eslint-disable no-unused-vars */
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Note: SplitText is a premium GSAP plugin
// If you don't have a GSAP membership, you'll need to use the free alternative
// or purchase a GSAP membership at https://greensock.com/club/

interface UseMaskedLinesOptions {
  /**
   * Delay between each line animation in seconds
   * @default 0.28
   */
  stagger?: number;
  /**
   * Duration of each line animation in seconds
   * @default 1.6
   */
  duration?: number;
  /**
   * Easing function for the animation
   * @default "power3.out"
   */
  ease?: string;
  /**
   * Initial delay before animation starts in seconds
   * @default 0.15
   */
  delay?: number;
  /**
   * Whether to trigger animation on scroll
   * @default false
   */
  scroll?: boolean;
  /**
   * Scroll trigger start position
   * @default "top 80%"
   */
  scrollStart?: string;
  /**
   * Whether animation should play only once on scroll
   * @default false
   */
  once?: boolean;
  /**
   * Variant: "lines" or "words"
   * @default "lines"
   */
  variant?: "lines" | "words";
}

/**
 * Hook for animating text lines with a mask effect using GSAP SplitText
 * 
 * @example
 * ```tsx
 * const { containerRef } = useMaskedLines({
 *   stagger: 0.2,
 *   duration: 1.5
 * });
 * 
 * return (
 *   <h1 ref={containerRef}>
 *     Your text here that will be split into lines
 *   </h1>
 * );
 * ```
 */
export function useMaskedLines(options: UseMaskedLinesOptions = {}) {
  const {
    stagger = 0.28,
    duration = 1.6,
    ease = "power3.out",
    delay = 0.15,
    scroll = false,
    scrollStart = "top 80%",
    once = false,
    variant = "lines",
  } = options;

  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      
      const el = containerRef.current;
      if (!el) return;

      // Dynamically import plugins to avoid SSR issues
      Promise.all([
        import("gsap/SplitText"),
        scroll ? import("gsap/ScrollTrigger") : Promise.resolve(null),
      ]).then(([splitModule, scrollModule]) => {
        const SplitText = splitModule.SplitText;
        const ScrollTrigger = scrollModule?.default || scrollModule;

        if (!SplitText) {
          console.warn("GSAP SplitText plugin not available. Make sure you have a GSAP membership.");
          return;
        }

        // Register plugins
        if (ScrollTrigger) {
          gsap.registerPlugin(SplitText, ScrollTrigger);
        } else {
          gsap.registerPlugin(SplitText);
        }

        // Ensure base node is visible
        gsap.set(el, { opacity: 1 });

        const isWords = variant === "words";

        const splitInstance = SplitText.create(el, {
          ...(isWords
            ? {
                type: "words",
                mask: "words",
              }
            : {
                type: "words,lines",
                linesClass: "line",
                mask: "lines",
              }),
          autoSplit: true,
          // This runs every time SplitText resplits (fonts, resize, etc.)
          onSplit: (split: any) => {
            const targets = isWords ? split.words : split.lines;
            if (!targets || !targets.length) return;

            const animationConfig: gsap.TweenVars = {
              duration,
              yPercent: 120,
              opacity: 0,
              stagger,
              ease,
              delay,
            };

            if (scroll && ScrollTrigger) {
              animationConfig.scrollTrigger = {
                trigger: el,
                start: scrollStart,
                toggleActions: once
                  ? "play none none none"
                  : "play none none reset",
                // Ensure animations work on mobile
                markers: false,
                invalidateOnRefresh: true,
              };
            }

            // This tween always gets the *current* nodes
            gsap.from(targets, animationConfig);
          },
        });

        // Cleanup
        return () => {
          if (splitInstance) {
            splitInstance.revert();
          }
        };
      });
    },
    {
      // If any of these change, the context re-runs cleanly
      dependencies: [scroll, scrollStart, once, variant, stagger, duration, ease, delay],
      scope: containerRef,
    }
  );

  return {
    containerRef,
  };
}

/**
 * Scroll-triggered version of useMaskedLines
 * Automatically triggers when element scrolls into view at top 70% of viewport
 * 
 * @example
 * ```tsx
 * const { containerRef } = useMaskedLinesScroll({
 *   stagger: 0.2,
 *   duration: 1.5
 * });
 * 
 * return (
 *   <h2 ref={containerRef}>
 *     This will animate when scrolled into view
 *   </h2>
 * );
 * ```
 */
export function useMaskedLinesScroll(options: Omit<UseMaskedLinesOptions, "scroll" | "scrollStart"> & { scrollStart?: string } = {}) {
  return useMaskedLines({
    ...options,
    scroll: true,
    scrollStart: options.scrollStart || "top 70%",
    once: options.once !== undefined ? options.once : true,
  });
}
