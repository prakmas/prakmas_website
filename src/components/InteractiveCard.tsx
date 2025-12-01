"use client"
import { ReactNode, useState, useRef, MouseEvent } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

const InteractiveCard = ({ children, className = "" }: InteractiveCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(328 86% 60% / 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default InteractiveCard;
