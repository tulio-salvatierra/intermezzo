"use client";

import { useEffect, useRef, useState } from "react";

interface UseEasyFromBelowOptions {
  /**
   * Threshold for Intersection Observer (0-1)
   * @default 0.1
   */
  threshold?: number;
  /**
   * Root margin for Intersection Observer
   * @default "0px"
   */
  rootMargin?: string;
  /**
   * Duration of the animation in milliseconds
   * @default 800
   */
  duration?: number;
  /**
   * Delay before animation starts in milliseconds
   * @default 0
   */
  delay?: number;
  /**
   * Distance to slide from below in pixels
   * @default 50
   */
  distance?: number;
  /**
   * Easing function for the animation
   * @default "cubic-bezier(0.16, 1, 0.3, 1)"
   */
  easing?: string;
  /**
   * Whether to trigger animation only once
   * @default true
   */
  once?: boolean;
}

/**
 * Hook for scroll-triggered fade-in and slide-up animations
 * 
 * @example
 * ```tsx
 * const { ref, isVisible } = useEasyFromBelow({
 *   threshold: 0.2,
 *   distance: 30,
 *   duration: 1000
 * });
 * 
 * return (
 *   <div ref={ref} className={isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}>
 *     Content here
 *   </div>
 * );
 * ```
 */
export function useEasyFromBelow(options: UseEasyFromBelowOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    duration = 800,
    delay = 0,
    distance = 50,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    once = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already animated and once is true, don't observe again
    if (hasAnimated && once) return;

    // Set initial styles
    element.style.opacity = "0";
    element.style.transform = `translateY(${distance}px)`;
    element.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
              setIsVisible(true);
              setHasAnimated(true);

              // Disconnect observer if once is true
              if (once) {
                observer.disconnect();
              }
            }, delay);
          } else if (!once) {
            // Reset animation if once is false
            element.style.opacity = "0";
            element.style.transform = `translateY(${distance}px)`;
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
      if (element) {
        element.style.opacity = "";
        element.style.transform = "";
        element.style.transition = "";
        element.style.transitionDelay = "";
      }
    };
  }, [threshold, rootMargin, duration, delay, distance, easing, once, hasAnimated]);

  /**
   * Manually trigger the animation
   */
  const trigger = () => {
    const element = ref.current;
    if (element && !hasAnimated) {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        setIsVisible(true);
        setHasAnimated(true);
      }, delay);
    }
  };

  /**
   * Reset the animation
   */
  const reset = () => {
    const element = ref.current;
    if (element) {
      element.style.opacity = "0";
      element.style.transform = `translateY(${distance}px)`;
      setIsVisible(false);
      setHasAnimated(false);
    }
  };

  return {
    ref,
    isVisible,
    hasAnimated,
    trigger,
    reset,
  };
}
