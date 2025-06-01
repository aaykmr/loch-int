import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

interface AutoScrollProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const AutoScroll: React.FC<AutoScrollProps> = ({
  children,
  speed = 0.5,
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let animationFrame: number;

    const scroll = () => {
      if (isHovered) {
        animationFrame = requestAnimationFrame(scroll);
        return;
      }

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += speed;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, speed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      className={`${styles.autoScrollContainer} ${className || ""}`}
    >
      {children}
      {children}
    </div>
  );
};

export default AutoScroll;
