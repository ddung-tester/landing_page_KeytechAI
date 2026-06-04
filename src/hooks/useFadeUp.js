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
    const root = document.querySelector('.landing-main');

    const ensureVisibleIfInView = () => {
      const rootRect = root?.getBoundingClientRect() ?? {
        top: 0,
        bottom: window.innerHeight,
      };
      const rect = el.getBoundingClientRect();
      if (rect.top < rootRect.bottom && rect.bottom > rootRect.top) {
        el.classList.add('visible');
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { root, threshold }
    );

    observer.observe(el);
    const timer = window.setTimeout(ensureVisibleIfInView, 80);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
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
    const root = document.querySelector('.landing-main');

    const children = container.querySelectorAll('.fade-up');
    const observers = [];
    const rootRect = root?.getBoundingClientRect() ?? {
      top: 0,
      bottom: window.innerHeight,
    };

    children.forEach((child) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            child.classList.add('visible');
            observer.disconnect();
          }
        },
        { root, threshold }
      );
      observer.observe(child);
      observers.push(observer);
    });

    const timer = window.setTimeout(() => {
      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        if (rect.top < rootRect.bottom && rect.bottom > rootRect.top) {
          child.classList.add('visible');
        }
      });
    }, 80);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.clearTimeout(timer);
    };
  }, [threshold]);

  return ref;
}
