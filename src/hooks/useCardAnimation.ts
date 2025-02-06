import { useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCardAnimation = (cardsWrapperRef: React.RefObject<HTMLUListElement>) => {
  const initializeAnimations = useCallback(() => {
    if (!cardsWrapperRef.current) return;

    const cards = cardsWrapperRef.current.querySelectorAll('.card');
    const numCards = 10;

    cards.forEach((card, index) => {
      // Initial fade in animation
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=20",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Scaling animation while scrolling
      gsap.to(card, {
        scale: 1 - (0.05 * (numCards - index - 1)),
        scrollTrigger: {
          trigger: cardsWrapperRef.current,
          start: `${index / numCards * 100}%`,
          end: `${(index + 1) / numCards * 100}%`,
          scrub: true
        }
      });
    });
  }, []);

  return { initializeAnimations };
};
