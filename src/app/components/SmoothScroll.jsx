"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.02,
      easing: (time) => 1 - Math.pow(1 - time, 3),
    });

    let frameId = null;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      lenis.destroy();
    };
  }, []);

  return null;
}
