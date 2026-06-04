import { useEffect, useRef } from 'react';

/**
 * Hook: gán class 'visible' khi element vào viewport
 * Dùng với class CSS .fade-up
 */
export function useFadeUp(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Hook: observe nhiều children trong container,
 * mỗi child cần class .fade-up
 */
export function useFadeUpChildren(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll('.fade-up');
    const observers = [];

    children.forEach((child) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            child.classList.add('visible');
            observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(child);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [threshold]);

  return ref;
}
