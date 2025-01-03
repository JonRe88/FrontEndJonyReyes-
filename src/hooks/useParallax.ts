import { useEffect, useRef } from 'react';

export function useParallax() {
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!layersRef.current) return;

      const layers = layersRef.current.querySelectorAll(
        '[data-parallax-layer]'
      );
      const scrolled = window.scrollY;

      layers.forEach((layer) => {
        const speed = Number(layer.getAttribute('data-parallax-layer')) * 0.3;
        const yOffset = -(scrolled * speed);
        (layer as HTMLElement).style.transform = `translateY(${yOffset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { layersRef };
}
