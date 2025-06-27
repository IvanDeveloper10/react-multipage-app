'use client';

import { useEffect, useRef } from 'react';

export default function Stars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars = Array.from({ length: 100 }, () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Nueva velocidad y desplazamiento más rápidos
      const duration = 5 + Math.random() * 5; // 5s a 10s
      const moveX = (Math.random() - 0.5) * 100; // -50px a 50px
      const moveY = (Math.random() - 0.5) * 100; // -50px a 50px

      star.style.setProperty('--move-x', `${moveX}px`);
      star.style.setProperty('--move-y', `${moveY}px`);
      star.style.setProperty('--duration', `${duration}s`);

      container.appendChild(star);
      return star;
    });

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return <div ref={containerRef} className='stars-container pointer-events-none'></div>;
}
