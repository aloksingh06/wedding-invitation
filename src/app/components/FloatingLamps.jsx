"use client";

import { useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const DESKTOP_LAMP_COUNT = 22;
const MOBILE_LAMP_COUNT = 22;
const LAMP_SOURCES = ["/lamp.png", "/lamp2.png"];
const CENTER_LAMP_RATIO = 0.2;
const LEFT_BAND_MAX = 24;
const RIGHT_BAND_MIN = 74;
const TARGET_LEFT_SMALL_COUNT = 2;
const MAX_LEFT_LARGE_COUNT = 1;
const NAME_ZONE = {
  leftMin: 30,
  leftMax: 70,
  topMin: 24,
  topMax: 66,
};

const DEPTH_PRESETS = {
  small: {
    size: [64, 106],
    scale: [0.8, 1.06],
    travel: [220, 290],
    exitAt: [0.34, 0.5],
    opacity: [0.62, 0.84],
    blurChance: 0.44,
    zIndex: 34,
  },
  medium: {
    size: [108, 166],
    scale: [0.86, 1.08],
    travel: [170, 240],
    exitAt: [0.44, 0.58],
    opacity: [0.72, 0.94],
    blurChance: 0.28,
    zIndex: 42,
  },
  large: {
    size: [64, 106],
    scale: [0.88, 1],
    travel: [130, 185],
    exitAt: [0.54, 0.66],
    opacity: [0.82, 1],
    blurChance: 0.14,
    zIndex: 52,
  },
};

function seededNoise(seed) {
  const value = Math.sin(seed * 9277.7) * 10000;
  return value - Math.floor(value);
}

function between(seed, min, max) {
  return min + seededNoise(seed) * (max - min);
}

function chooseDepth(index) {
  const selector = seededNoise(index * 1.81 + 5.4);
  if (selector < 0.42) return "small";
  if (selector < 0.8) return "medium";
  return "large";
}

function isInsideNameZone(left, top) {
  return (
    left >= NAME_ZONE.leftMin &&
    left <= NAME_ZONE.leftMax &&
    top >= NAME_ZONE.topMin &&
    top <= NAME_ZONE.topMax
  );
}

function pickSideLeft(seed) {
  const placeOnLeftSide = seededNoise(seed * 1.17 + 3.3) < 0.5;
  return placeOnLeftSide
    ? between(seed * 2.61 + 1.9, -13, 24)
    : between(seed * 2.94 + 5.2, 74, 104);
}

function createLamp(index) {
  const centerCandidate =
    seededNoise(index * 6.21 + 0.8) < CENTER_LAMP_RATIO;
  const depth = centerCandidate ? "small" : chooseDepth(index);
  const preset = DEPTH_PRESETS[depth];

  const width = Math.round(between(index * 0.67 + 2.3, preset.size[0], preset.size[1]));
  const exitAt = between(index * 1.53 + 9.1, preset.exitAt[0], preset.exitAt[1]);
  const travel = Math.round(between(index * 2.31 + 3.1, preset.travel[0], preset.travel[1]));

  let left = centerCandidate
    ? between(index * 3.07 + 1.1, 31, 69)
    : pickSideLeft(index * 4.17 + 3.4);
  let top = centerCandidate
    ? between(index * 2.41 + 9.4, 24, 68)
    : between(index * 1.47 + 8.2, 1, 84);

  if (!centerCandidate && isInsideNameZone(left, top)) {
    left = pickSideLeft(index * 7.13 + 2.8);
  }

  if (isInsideNameZone(left, top) && depth !== "small") {
    left = pickSideLeft(index * 8.27 + 6.9);
    top = between(index * 2.17 + 4.5, 8, 84);
  }

  return {
    id: `lamp-${index}`,
    depth,
    src: LAMP_SOURCES[Math.floor(between(index * 3.07 + 7.2, 0, LAMP_SOURCES.length))],
    left,
    top,
    width,
    scale: between(index * 0.89 + 3.7, preset.scale[0], preset.scale[1]),
    rotateBase: between(index * 3.76 + 2.6, -14, 14),
    rotateDrift: between(index * 1.95 + 10.5, -8, 8),
    xDrift: between(index * 2.78 + 1.9, -24, 24),
    blur: seededNoise(index * 2.44 + 1.2) < preset.blurChance,
    opacity: between(index * 0.92 + 12.7, preset.opacity[0], preset.opacity[1]),
    travel,
    exitAt,
    zIndex: preset.zIndex,
    visibilityClass: "hidden sm:block",
  };
}

function createMobileLamp(index) {
  const preset = DEPTH_PRESETS.small;
  const centerCandidate = seededNoise(index * 4.77 + 1.9) < 0.14;

  let left = centerCandidate
    ? between(index * 2.13 + 3.5, 36, 66)
    : between(index * 2.67 + 4.2, -14, 98);
  let top = centerCandidate
    ? between(index * 1.87 + 5.8, 25, 68)
    : between(index * 1.41 + 8.9, 4, 86);

  if (!centerCandidate && isInsideNameZone(left, top)) {
    left = pickSideLeft(index * 3.91 + 7.1);
  }

  return {
    id: `mobile-lamp-${index}`,
    depth: "small",
    src: LAMP_SOURCES[Math.floor(between(index * 2.71 + 6.6, 0, LAMP_SOURCES.length))],
    left,
    top,
    width: Math.round(between(index * 0.93 + 2.4, 48, 86)),
    scale: between(index * 1.06 + 4.1, 0.72, 0.98),
    rotateBase: between(index * 2.87 + 7.3, -16, 16),
    rotateDrift: between(index * 1.95 + 2.7, -10, 10),
    xDrift: between(index * 2.35 + 3.6, -22, 22),
    blur: seededNoise(index * 2.44 + 1.2) < preset.blurChance,
    opacity: between(index * 1.22 + 9.4, preset.opacity[0], preset.opacity[1]),
    travel: Math.round(
      between(index * 1.71 + 5.2, preset.travel[0], preset.travel[1]),
    ),
    exitAt: between(index * 1.33 + 4.5, preset.exitAt[0], preset.exitAt[1]),
    zIndex: preset.zIndex,
    visibilityClass: "block sm:hidden",
  };
}

function tuneLeftSideBalance(initialLamps) {
  const lamps = initialLamps.map((lamp) => ({ ...lamp }));

  const leftLarge = lamps
    .map((lamp, index) => ({ lamp, index }))
    .filter(({ lamp }) => lamp.depth === "large" && lamp.left <= LEFT_BAND_MAX);

  const largeToShift = leftLarge.slice(MAX_LEFT_LARGE_COUNT, MAX_LEFT_LARGE_COUNT + 3);

  largeToShift.forEach(({ index }, shiftIndex) => {
    lamps[index] = {
      ...lamps[index],
      left: between(index * 4.71 + shiftIndex * 1.9 + 2.4, RIGHT_BAND_MIN, 104),
      top: between(index * 2.13 + shiftIndex * 2.1 + 6.2, 8, 84),
    };
  });

  const currentLeftSmall = lamps.filter(
    (lamp) => lamp.depth === "small" && lamp.left <= LEFT_BAND_MAX,
  ).length;

  const smallNeeded = Math.max(0, TARGET_LEFT_SMALL_COUNT - currentLeftSmall);
  if (smallNeeded === 0) {
    return lamps;
  }

  const convertCandidates = lamps
    .map((lamp, index) => ({ lamp, index }))
    .filter(({ lamp }) => lamp.left > LEFT_BAND_MAX + 5 && lamp.depth !== "small");

  convertCandidates.slice(0, smallNeeded).forEach(({ index }, addIndex) => {
    const preset = DEPTH_PRESETS.small;
    const width = Math.round(
      between(index * 0.67 + addIndex * 1.8 + 2.3, preset.size[0], preset.size[1]),
    );

    lamps[index] = {
      ...lamps[index],
      depth: "small",
      left: between(index * 5.41 + addIndex * 2.2 + 1.6, -12, LEFT_BAND_MAX),
      top: between(index * 2.27 + addIndex * 1.9 + 4.1, 14, 82),
      width,
      scale: between(index * 0.89 + addIndex * 1.3 + 3.7, preset.scale[0], preset.scale[1]),
      blur:
        seededNoise(index * 2.44 + addIndex * 0.8 + 1.2) < preset.blurChance,
      opacity: between(
        index * 0.92 + addIndex * 1.7 + 12.7,
        preset.opacity[0],
        preset.opacity[1],
      ),
      travel: Math.round(
        between(index * 2.31 + addIndex * 1.7 + 3.1, preset.travel[0], preset.travel[1]),
      ),
      exitAt: between(
        index * 1.53 + addIndex * 1.2 + 9.1,
        preset.exitAt[0],
        preset.exitAt[1],
      ),
      zIndex: preset.zIndex,
    };
  });

  return lamps;
}

function LampSprite({ lamp, progress }) {
  const y = useTransform(progress, [0, lamp.exitAt], ["0vh", `-${lamp.travel}vh`]);
  const x = useTransform(progress, [0, lamp.exitAt], ["0px", `${lamp.xDrift}px`]);
  const rotate = useTransform(
    progress,
    [0, lamp.exitAt],
    [`${lamp.rotateBase}deg`, `${lamp.rotateBase + lamp.rotateDrift}deg`],
  );

  return (
    <motion.img
      src={lamp.src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`absolute h-auto select-none will-change-transform [filter:drop-shadow(0_0_14px_rgba(255,145,71,0.58))] ${lamp.blur ? "blur-[1.4px]" : ""} ${lamp.visibilityClass}`}
      style={{
        left: `${lamp.left}%`,
        top: `${lamp.top}%`,
        width: `${lamp.width}px`,
        scale: lamp.scale,
        opacity: lamp.opacity,
        zIndex: lamp.zIndex,
        x,
        y,
        rotate,
      }}
    />
  );
}

export default function FloatingLamps() {
  const desktopLamps = useMemo(
    () => {
      const baseLamps = Array.from({ length: DESKTOP_LAMP_COUNT }, (_, index) =>
        createLamp(index),
      );
      return tuneLeftSideBalance(baseLamps);
    },
    [],
  );
  const mobileLamps = useMemo(
    () =>
      Array.from({ length: MOBILE_LAMP_COUNT }, (_, index) =>
        createMobileLamp(index),
      ),
    [],
  );

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    mass: 0.3,
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {desktopLamps.map((lamp) => (
        <LampSprite key={lamp.id} lamp={lamp} progress={smoothProgress} />
      ))}
      {mobileLamps.map((lamp) => (
        <LampSprite key={lamp.id} lamp={lamp} progress={smoothProgress} />
      ))}
    </div>
  );
}
