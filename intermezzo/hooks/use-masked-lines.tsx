"use client";

import { useEffect, useRef, useState } from "react";

interface UseMaskedLinesOptions {
  /**
   * Delay between each line animation in milliseconds
   * @default 100
   */
  lineDelay?: number;
  /**
   * Duration of each line animation in milliseconds
   * @default 800
   */
  duration?: number;
  /**
   * Easing function for the animation
   * @default "cubic-bezier(0.16, 1, 0.3, 1)"
   */
  easing?: string;
  /**
   * Direction of the mask reveal
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Whether to start animation on mount
   * @default true
   */
  startOnMount?: boolean;
}

/**
 * Hook for animating text lines with a mask effect
 * 
 * @example
 * ```tsx
 * const { containerRef, isAnimating } = useMaskedLines({
 *   lineDelay: 150,
 *   duration: 1000
 * });
 * 
 * return (
 *   <div ref={containerRef}>
 *     <p>Line 1</p>
 *     <p>Line 2</p>
 *     <p>Line 3</p>
 *   </div>
 * );
 * ```
 */
export function useMaskedLines(options: UseMaskedLinesOptions = {}) {
  const {
    lineDelay = 100,
    duration = 800,
    easing = "cubic-bezier(0.16, 1, 0.3, 1)",
    direction = "horizontal",
    startOnMount = true,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !startOnMount) return;

    const container = containerRef.current;
    const lines = Array.from(container.children) as HTMLElement[];

    if (lines.length === 0) return;

    // Set initial state for all lines
    lines.forEach((line) => {
      line.style.overflow = "hidden";
      line.style.position = "relative";
      
      if (direction === "horizontal") {
        line.style.clipPath = "inset(0 100% 0 0)";
      } else {
        line.style.clipPath = "inset(100% 0 0 0)";
      }
      
      line.style.transition = `clip-path ${duration}ms ${easing}`;
    });

    setIsAnimating(true);

    // Animate each line with delay
    lines.forEach((line, index) => {
      setTimeout(() => {
        if (direction === "horizontal") {
          line.style.clipPath = "inset(0 0% 0 0)";
        } else {
          line.style.clipPath = "inset(0% 0 0 0)";
        }

        // Mark as complete when last line finishes
        if (index === lines.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
            setIsComplete(true);
          }, duration);
        }
      }, index * lineDelay);
    });

    // Cleanup function
    return () => {
      lines.forEach((line) => {
        line.style.overflow = "";
        line.style.position = "";
        line.style.clipPath = "";
        line.style.transition = "";
      });
    };
  }, [lineDelay, duration, easing, direction, startOnMount]);

  /**
   * Manually trigger the animation
   */
  const trigger = () => {
    if (containerRef.current && !isAnimating) {
      setIsComplete(false);
      // Reset and re-run animation
      const container = containerRef.current;
      const lines = Array.from(container.children) as HTMLElement[];
      
      lines.forEach((line) => {
        if (direction === "horizontal") {
          line.style.clipPath = "inset(0 100% 0 0)";
        } else {
          line.style.clipPath = "inset(100% 0 0 0)";
        }
      });

      setTimeout(() => {
        lines.forEach((line, index) => {
          setTimeout(() => {
            if (direction === "horizontal") {
              line.style.clipPath = "inset(0 0% 0 0)";
            } else {
              line.style.clipPath = "inset(0% 0 0 0)";
            }
          }, index * lineDelay);
        });
      }, 50);
    }
  };

  return {
    containerRef,
    isAnimating,
    isComplete,
    trigger,
  };
}
