import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const deltaY = scrollY - lastScrollY;

      if (Math.abs(deltaY) < 10) {
        ticking = false;
        return;
      }

      const direction = deltaY > 0 ? "down" : "up";
      setScrollDirection((prevDirection) =>
        prevDirection === direction ? prevDirection : direction
      );

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDirection;
}