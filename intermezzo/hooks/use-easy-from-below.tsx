"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseEasyFromBelowOptions {
  /**
   * CSS selector to target specific elements within the container
   * If not provided, will animate children or the container itself
   */
  selector?: string;
  /**
   * Duration of the animation in seconds
   * @default 1.5
   */
  duration?: number;
  /**
   * Delay between each element animation (stagger) in seconds
   * @default 0.15
   */
  stagger?: number;
  /**
   * Distance to slide from below in pixels
   * @default 30
   */
  distance?: number;
  /**
   * Easing function for the animation
   * @default "power3.out"
   */
  ease?: string;
  /**
   * Scroll trigger start position
   * @default "top 95%"
   */
  scrollStart?: string;
  /**
   * Whether animation should play only once
   * @default true
   */
  once?: boolean;
  /**
   * Whether to use scroll trigger or animate immediately
   * @default true (uses scroll trigger)
   */
  scroll?: boolean;
  /**
   * Delay before animation starts (only used when scroll is false)
   * @default 0
   */
  delay?: number;
}

/**
 * Hook for scroll-triggered fade-in and slide-up animations using GSAP
 * 
 * @example
 * ```tsx
 * const { ref } = useEasyFromBelow({
 *   distance: 30,
 *   duration: 1.5,
 *   stagger: 0.2
 * });
 * 
 * return (
 *   <div ref={ref}>
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *   </div>
 * );
 * ```
 * 
 * @example
 * ```tsx
 * // With selector to target specific elements
 * const { ref } = useEasyFromBelow({
 *   selector: ".animate-item",
 *   stagger: 0.1
 * });
 * 
 * return (
 *   <div ref={ref}>
 *     <div className="animate-item">Item 1</div>
 *     <div className="animate-item">Item 2</div>
 *   </div>
 * );
 * ```
 */
export function useEasyFromBelow(options: UseEasyFromBelowOptions = {}) {
  const {
    selector,
    duration = 1.5,
    stagger = 0.15,
    distance = 30,
    ease = "power3.out",
    scrollStart = "top 95%",
    once = true,
    scroll = true,
    delay = 0,
  } = options;

  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      let elementsToAnimate: Element[];

      if (selector) {
        // If selector provided, find all matching elements within the container
        elementsToAnimate = Array.from(element.querySelectorAll(selector));
      } else {
        // Default: check for children or animate self
        const children = element.children;
        elementsToAnimate = children.length > 0 ? Array.from(children) : [element];
      }

      if (elementsToAnimate.length === 0) return;

      // Set initial state for all elements
      gsap.set(elementsToAnimate, { opacity: 0, y: distance });

      // Animation config
      const animationConfig: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
        delay,
      };

      // Add scroll trigger if enabled
      if (scroll) {
        animationConfig.scrollTrigger = {
          trigger: elementsToAnimate[0] as Element,
          start: scrollStart,
          toggleActions: once ? "play none none none" : "play none none reset",
        };
      }

      // Animate all elements with stagger
      gsap.to(elementsToAnimate, animationConfig);
    },
    { scope: containerRef, dependencies: [selector, duration, stagger, distance, ease, scrollStart, once, scroll, delay] }
  );

  return {
    ref: containerRef as React.RefObject<any>,
  };
}
