import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

interface CarouselProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  speed = 50,
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
}) => {
  const containerRef = useRef<any>(null);
  const contentRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const items = content.children;
    setTotalItems(items.length);

    const scroll = () => {
      if (isHovered) return;

      if (currentIndex >= totalItems - 1) {
        setCurrentIndex(0);
        container.scrollLeft = 0;
      } else {
        setCurrentIndex((prev) => prev + 1);
        container.scrollLeft += container.clientWidth;
      }
    };

    const interval = setInterval(scroll, 3000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, totalItems]);

  const handleDotClick = (index: number) => {
    if (!containerRef.current) return;
    setCurrentIndex(index);
    containerRef.current.scrollLeft = index * containerRef.current.clientWidth;
  };

  const handleArrowClick = (direction: "prev" | "next") => {
    if (!containerRef.current) return;
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % totalItems
        : (currentIndex - 1 + totalItems) % totalItems;
    setCurrentIndex(newIndex);
    containerRef.current.scrollLeft =
      newIndex * containerRef.current.clientWidth;
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        ref={containerRef}
        className={styles.carouselContainer}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      >
        <div ref={contentRef} className={styles.carouselContent}>
          {children}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className={`${styles.arrow} ${styles.prevArrow}`}
            onClick={() => handleArrowClick("prev")}
          >
            ←
          </button>
          <button
            className={`${styles.arrow} ${styles.nextArrow}`}
            onClick={() => handleArrowClick("next")}
          >
            →
          </button>
        </>
      )}

      {showDots && (
        <div className={styles.dots}>
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
