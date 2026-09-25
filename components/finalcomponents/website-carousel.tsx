"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import WebsiteCard from "./websittecar";
import clsx from "clsx";

const projects = [
  {
    name: "nexuspos.online & Android App",
    tech: "Next.js • Kotlin • Prisma • Tailwind",
    url: "https://www.nexuspos.online",
    icon: "/logos/nexus.png",
    featured: true,
    badge: "🚀 Business SaaS",
  },
  {
    name: "myanmarpoly.online",
    tech: "Next.js • Socket.io • Node.js",
    url: "https://myanmarpoly.online",
    icon: "/images/myanmarpoly.png",
    featured: true,
    badge: "🎮 Real-Time Game",
  },
  {
    name: "mm-shops.vercel.app",
    tech: "Next.js • Prisma • JWT • GCS",
    url: "https://mm-shops.vercel.app/",
    icon: "/logos/mmshopping.png",
    featured: true,
    badge: "🛒 E-Commerce",
  },
  {
    name: "vue.khaingkyawmin.com",
    tech: "Vue.js",
    url: "https://vue.khaingkyawmin.com",
    icon: "/images/kkmlogo.png",
    featured: false,
    badge: "Featured",
  },
  {
    name: "kokomyint.com",
    tech: "WordPress",
    url: "https://kokomyint.com",
    icon: "/images/kokomyint.png",
    featured: false,
    badge: "Featured",
  },
  {
    name: "ngwehninyee.com",
    tech: "WordPress • E-Commerce",
    url: "https://ngwehninyee.com/",
    icon: "/images/nhy.png",
    featured: false,
    badge: "🔧 Under Development",
  },
  {
    name: "arrmanshin.com",
    tech: "WordPress",
    url: "https://arrmanshin.com",
    icon: "/images/arrmanshin.png",
    featured: false,
    badge: "Featured",
  },
  {
    name: "kakehashimm.com/jp",
    tech: "WordPress",
    url: "https://kakehashimm.com/jp/",
    icon: "/images/kakehashi.png",
    featured: false,
    badge: "Featured",
  },
];

const NUM_PROJECTS = projects.length;
const VISIBLE_RANGE = 3; // Render this many on each side of center

const CARD_BASE_WIDTH = 300;
const CARD_GAP = 44;
const CARD_STEP = CARD_BASE_WIDTH + CARD_GAP;

const SCALE_CENTER = 1;
const SCALE_SIDE = 0.88;
const SCALE_FAR = 0.72;

const OPACITY_CENTER = 1;
const OPACITY_SIDE = 0.9;
const OPACITY_FAR = 0.55;

const ROTATE_Y_SIDE = 6;
const ROTATE_Y_FAR = 12;

const TRANSLATE_Z_SIDE = -60;
const TRANSLATE_Z_FAR = -120;

const TRANSITION_CONFIG = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

const SWIPE_THRESHOLD = 50;
const MOBILE_SWIPE_THRESHOLD = 35;
const VELOCITY_THRESHOLD = 0.35;

function getSwipeDirection(deltaX: number, velocity: number, swipeThreshold: number) {
  if (deltaX <= -swipeThreshold) return 1;
  if (deltaX >= swipeThreshold) return -1;
  if (velocity <= -VELOCITY_THRESHOLD) return 1;
  if (velocity >= VELOCITY_THRESHOLD) return -1;
  return 0;
}

function getCardVisual(distance: number) {
  const absoluteDistance = Math.abs(distance);
  const direction = Math.sign(distance) || 1;
  const localDistance = Math.min(absoluteDistance, 1);
  const sideProgress = Math.min(Math.max((absoluteDistance - 1) / 1, 0), 1);

  if (absoluteDistance <= 1) {
    return {
      scale: SCALE_CENTER + (SCALE_SIDE - SCALE_CENTER) * localDistance,
      opacity: OPACITY_CENTER + (OPACITY_SIDE - OPACITY_CENTER) * localDistance,
      rotateY: -direction * ROTATE_Y_SIDE * localDistance,
      translateZ: TRANSLATE_Z_SIDE * localDistance,
    };
  }

  if (absoluteDistance <= 2) {
    return {
      scale: SCALE_SIDE + (SCALE_FAR - SCALE_SIDE) * sideProgress,
      opacity: OPACITY_SIDE + (OPACITY_FAR - OPACITY_SIDE) * sideProgress,
      rotateY: -direction * (ROTATE_Y_SIDE + (ROTATE_Y_FAR - ROTATE_Y_SIDE) * sideProgress),
      translateZ: TRANSLATE_Z_SIDE + (TRANSLATE_Z_FAR - TRANSLATE_Z_SIDE) * sideProgress,
    };
  }

  const fadeProgress = Math.max(0, 1 - (absoluteDistance - 2) / 0.75);
  return {
    scale: SCALE_FAR * 0.9,
    opacity: OPACITY_FAR * fadeProgress,
    rotateY: -direction * (ROTATE_Y_FAR + 3),
    translateZ: TRANSLATE_Z_FAR - 40,
  };
}

interface ProjectCardProps {
  project: typeof projects[0];
  virtualIndex: number;
  activeVirtualIndex: number;
  progress: MotionValue<number>;
  isReal: boolean;
  isDragging: boolean;
}

function ProjectCard({
  project,
  virtualIndex,
  activeVirtualIndex,
  progress,
  isReal,
  isDragging,
}: ProjectCardProps) {
  const [nearestSlot, setNearestSlot] = useState(activeVirtualIndex);
  const nearestSlotRef = useRef(activeVirtualIndex);
  const distance = useTransform(progress, (value) => virtualIndex - value);
  const x = useTransform(distance, (value) => value * CARD_STEP);
  const scale = useTransform(distance, (value) => getCardVisual(value).scale);
  const opacity = useTransform(distance, (value) => getCardVisual(value).opacity);
  const rotateY = useTransform(distance, (value) => getCardVisual(value).rotateY);
  const translateZ = useTransform(distance, (value) => getCardVisual(value).translateZ);
  const isNearest = nearestSlot === virtualIndex;

  useMotionValueEvent(progress, "change", (value) => {
    const nextSlot = Math.round(value);
    if (nearestSlotRef.current === nextSlot) return;
    nearestSlotRef.current = nextSlot;
    setNearestSlot(nextSlot);
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transformOrigin: "center center",
        willChange: isDragging ? "transform, opacity" : "auto",
        pointerEvents: isNearest && isReal ? "auto" : "none",
        x,
        rotateY,
        scale,
        opacity,
        zIndex: Math.max(0, 100 - Math.abs(nearestSlot - virtualIndex) * 40),
        translateZ,
      }}
      aria-hidden={!isReal}
      className="select-none"
    >
      <div
        style={{
          width: CARD_BASE_WIDTH,
          transform: "translate(-50%, -50%)",
        }}
      >
        <WebsiteCard
          {...project}
          onVisitClick={(url) => window.open(url, "_blank", "noopener,noreferrer")}
        />
      </div>
    </motion.div>
  );
}

export default function WebsiteCarousel() {
  const [activeVirtualIndex, setActiveVirtualIndex] = useState(VISIBLE_RANGE);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(VISIBLE_RANGE);
  const dragPointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartProgressRef = useRef(VISIBLE_RANGE);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isHorizontalDragRef = useRef(false);
  const isMobilePointerRef = useRef(false);
  const pendingDeltaXRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const normalizeIndex = useCallback((index: number) => {
    const mod = index % NUM_PROJECTS;
    return mod < 0 ? mod + NUM_PROJECTS : mod;
  }, []);

  const getRealIndex = useCallback((virtualIndex: number) => {
    return normalizeIndex(virtualIndex - VISIBLE_RANGE);
  }, [normalizeIndex]);

  const settleAt = useCallback((target: number) => {
    const roundedTarget = Math.round(target);
    const normalizedVirtualIndex = normalizeIndex(roundedTarget - VISIBLE_RANGE) + VISIBLE_RANGE;
    setActiveVirtualIndex(normalizedVirtualIndex);

    animate(progress, roundedTarget, {
      ...TRANSITION_CONFIG,
      onComplete: () => {
        progress.set(normalizedVirtualIndex);
        setActiveVirtualIndex(normalizedVirtualIndex);
      },
    });
  }, [normalizeIndex, progress]);

  const goPrev = useCallback(() => {
    settleAt(Math.round(progress.get()) - 1);
  }, [progress, settleAt]);

  const goNext = useCallback(() => {
    settleAt(Math.round(progress.get()) + 1);
  }, [progress, settleAt]);

  const goToRealIndex = useCallback((realIndex: number) => {
    settleAt(normalizeIndex(realIndex) + VISIBLE_RANGE);
  }, [normalizeIndex, settleAt]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;

    dragPointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragStartProgressRef.current = progress.get();
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = event.timeStamp;
    velocityRef.current = 0;
    hasDraggedRef.current = false;
    isHorizontalDragRef.current = false;
    isMobilePointerRef.current = event.pointerType === "touch" || window.matchMedia("(max-width: 767px)").matches;
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragPointerIdRef.current !== event.pointerId) return;

    const deltaX = event.clientX - dragStartXRef.current;
    const deltaY = event.clientY - dragStartYRef.current;
    const absoluteX = Math.abs(deltaX);
    const absoluteY = Math.abs(deltaY);

    if (!isHorizontalDragRef.current) {
      if (absoluteX < 6) return;
      if (absoluteY > absoluteX * 1.15) return;
      isHorizontalDragRef.current = true;
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    }

    if (absoluteX > 4) hasDraggedRef.current = true;

    const elapsed = Math.max(1, event.timeStamp - lastPointerTimeRef.current);
    velocityRef.current = (event.clientX - lastPointerXRef.current) / elapsed;
    lastPointerXRef.current = event.clientX;
    lastPointerTimeRef.current = event.timeStamp;
    const dragSteps = -deltaX / CARD_STEP;
    if (isMobilePointerRef.current) {
      pendingDeltaXRef.current = deltaX;
      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(() => {
          animationFrameRef.current = null;
          progress.set(dragStartProgressRef.current - pendingDeltaXRef.current / CARD_STEP);
        });
      }
    } else {
      progress.set(dragStartProgressRef.current + dragSteps);
    }

    if (hasDraggedRef.current) event.preventDefault();
  };

  const finishPointerDrag = (event: React.PointerEvent<HTMLDivElement>, cancelled = false) => {
    if (dragPointerIdRef.current !== event.pointerId) return;

    const pointerId = dragPointerIdRef.current;
    const deltaX = event.clientX - dragStartXRef.current;
    const velocity = cancelled ? 0 : velocityRef.current;
    const releasedProgress = dragStartProgressRef.current - deltaX / CARD_STEP;
    const swipeThreshold = isMobilePointerRef.current ? MOBILE_SWIPE_THRESHOLD : SWIPE_THRESHOLD;

    if (isMobilePointerRef.current) {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      progress.set(releasedProgress);
    }

    const direction = getSwipeDirection(deltaX, velocity, swipeThreshold);
    const target = direction !== 0
      ? dragStartProgressRef.current + direction
      : Math.round(releasedProgress);

    dragPointerIdRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(pointerId)) {
      event.currentTarget.releasePointerCapture(pointerId);
    }

    settleAt(target);
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hasDraggedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      goToRealIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToRealIndex(NUM_PROJECTS - 1);
    }
  };

  const totalVirtualCards = NUM_PROJECTS + VISIBLE_RANGE * 2;
  const startVirtualIndex = VISIBLE_RANGE;
  const endVirtualIndex = startVirtualIndex + NUM_PROJECTS - 1;

  const virtualCards = Array.from({ length: totalVirtualCards }, (_, i) => {
    let realIndex: number;
    let isReal = true;
    
    if (i < startVirtualIndex) {
      // Clone from end
      realIndex = normalizeIndex(i - VISIBLE_RANGE);
      isReal = false;
    } else if (i > endVirtualIndex) {
      // Clone from start
      realIndex = normalizeIndex(i - VISIBLE_RANGE);
      isReal = false;
    } else {
      // Real cards
      realIndex = i - VISIBLE_RANGE;
    }
    
    return {
      project: projects[realIndex],
      virtualIndex: i,
      isReal,
    };
  });

  return (
    <div
      ref={containerRef}
      className="relative coverflow-container"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Website projects coverflow carousel"
      tabIndex={0}
      style={{ maxWidth: "1400px", margin: "0 auto" }}
    >
      <div
        className={clsx(
          "relative select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{
          perspective: "1200px",
          minHeight: "540px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "pan-y",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishPointerDrag(event)}
        onPointerCancel={(event) => finishPointerDrag(event, true)}
        onLostPointerCapture={(event) => {
          if (dragPointerIdRef.current === event.pointerId) finishPointerDrag(event, true);
        }}
        onClickCapture={handleClickCapture}
        onDragStart={(event) => event.preventDefault()}
      >
        {/* Edge fade masks */}
        <div
          className="absolute inset-0 pointer-events-none z-50"
          aria-hidden="true"
          style={{
            maskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                black 12%,
                black 88%,
                transparent 100%
              )
            `,
            WebkitMaskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                black 12%,
                black 88%,
                transparent 100%
              )
            `,
            borderRadius: "2rem",
          }}
        />

        {virtualCards.map((card) => (
          <ProjectCard
            key={`card-${card.virtualIndex}-${card.project.name}`}
            project={card.project}
            virtualIndex={card.virtualIndex}
            activeVirtualIndex={activeVirtualIndex}
            progress={progress}
            isReal={card.isReal}
            isDragging={isDragging}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-full",
            "bg-white/5 dark:bg-black/5 backdrop-blur-md",
            "border border-white/10 dark:border-white/5",
            "text-white/70 dark:text-white/70",
            "hover:bg-white/10 dark:hover:bg-white/10",
            "hover:text-white dark:hover:text-white",
            "hover:border-white/20 dark:hover:border-white/10",
            "hover:shadow-lg hover:shadow-amber-500/10",
            "transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
          aria-label="Previous project"
        >
          <IconChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2 text-sm font-mono text-white/40">
          <span aria-live="polite" aria-atomic="true">
            {getRealIndex(activeVirtualIndex) + 1} / {NUM_PROJECTS}
          </span>
        </div>

        <button
          onClick={goNext}
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-full",
            "bg-white/5 dark:bg-black/5 backdrop-blur-md",
            "border border-white/10 dark:border-white/5",
            "text-white/70 dark:text-white/70",
            "hover:bg-white/10 dark:hover:bg-white/10",
            "hover:text-white dark:hover:text-white",
            "hover:border-white/20 dark:hover:border-white/10",
            "hover:shadow-lg hover:shadow-amber-500/10",
            "transition-all duration-300",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50",
            "focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
          aria-label="Next project"
        >
          <IconChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4" role="navigation" aria-label="Carousel pagination">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToRealIndex(index)}
            className={clsx(
              "h-2 rounded-full transition-all duration-300",
              "bg-white/20 hover:bg-white/40",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
              index === getRealIndex(activeVirtualIndex) ? "w-8 bg-amber-400" : "w-2"
            )}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === getRealIndex(activeVirtualIndex) ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}