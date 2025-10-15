"use client";

import { useEffect, useState, useCallback } from "react";
import {
  defaultCursorConfig,
  CursorStates,
  type CursorState,
  isInteractiveElement,
  isTextElement,
} from "./cursor-config";

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [followingRingPosition, setFollowingRingPosition] =
    useState<CursorPosition>({
      x: 0,
      y: 0,
    });
  const [cursorState, setCursorState] = useState<CursorState>(
    CursorStates.DEFAULT
  );
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const updateTrail = useCallback((newPosition: CursorPosition) => {
    setTrail((prev) => {
      const newTrail = [
        newPosition,
        ...prev.slice(0, defaultCursorConfig.effects.trailLength - 1),
      ];
      return newTrail;
    });
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      updateTrail(newPosition);
      setIsVisible(true);
    };

    const handleMouseDown = () => setCursorState(CursorStates.CLICK);
    const handleMouseUp = () => setCursorState(CursorStates.DEFAULT);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setCursorState(CursorStates.HOVER);
      } else if (isTextElement(target)) {
        setCursorState(CursorStates.TEXT);
      } else {
        setCursorState(CursorStates.DEFAULT);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updateTrail]);

  // Smooth following ring animation
  useEffect(() => {
    const animateFollowingRing = () => {
      setFollowingRingPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        // Smooth interpolation with easing factor
        const easingFactor = 0.1; // Lower value = more lag/smoother following

        return {
          x: prev.x + dx * easingFactor,
          y: prev.y + dy * easingFactor,
        };
      });
    };

    const animationFrame = requestAnimationFrame(animateFollowingRing);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, followingRingPosition]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      updateTrail(newPosition);
      setIsVisible(true);
    };

    const handleMouseDown = () => setCursorState(CursorStates.CLICK);
    const handleMouseUp = () => setCursorState(CursorStates.DEFAULT);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setCursorState(CursorStates.HOVER);
      } else if (isTextElement(target)) {
        setCursorState(CursorStates.TEXT);
      } else {
        setCursorState(CursorStates.DEFAULT);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updateTrail]);

  const getCursorScale = () => {
    switch (cursorState) {
      case CursorStates.CLICK:
        return 0.7;
      case CursorStates.HOVER:
        return 1.5;
      case CursorStates.TEXT:
        return 1.2;
      default:
        return 1;
    }
  };

  const getCursorClass = () => {
    return `cursor-main cursor-${cursorState}`;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={getCursorClass()}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${getCursorScale()})`,
        }}
      >
        {/* Inner core with gradient */}
        <div className="cursor-core">
          <div className="cursor-core-inner" />
        </div>

        {/* Rotating ring with segments */}
        <div className="cursor-ring">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="cursor-ring-segment"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Pulsing outer ring */}
        <div className="cursor-pulse" />

        {/* Enhanced particle effects */}
        <div className="cursor-particles">
          {[...Array(defaultCursorConfig.effects.particleCount)].map((_, i) => (
            <div
              key={i}
              className="cursor-particle"
              style={{
                animationDelay: `${i * 0.15}s`,
                transform: `rotate(${
                  i * (360 / defaultCursorConfig.effects.particleCount)
                }deg)`,
              }}
            >
              <div className="particle-dot" />
            </div>
          ))}
        </div>

        {/* Magnetic field effect */}
        <div className="cursor-magnetic-field">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="magnetic-ring"
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced trail effect */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: ((trail.length - index) / trail.length) * 0.8,
            transform: `translate(-50%, -50%) scale(${
              ((trail.length - index) / trail.length) * 0.6
            })`,
            animationDelay: `${index * 0.02}s`,
          }}
        />
      ))}

      {/* Ambient glow effect */}
      <div
        className="cursor-ambient-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Following Ring - Smooth delayed following effect */}
      <div
        className="cursor-following-ring"
        style={{
          left: `${followingRingPosition.x}px`,
          top: `${followingRingPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${getCursorScale() * 0.8})`,
        }}
      >
        {/* Outer ring */}
        <div className="following-ring-outer" />

        {/* Inner ring with segments */}
        <div className="following-ring-segments">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="following-ring-segment"
              style={{
                transform: `rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Center dot */}
        <div className="following-ring-center" />
      </div>
    </>
  );
}
