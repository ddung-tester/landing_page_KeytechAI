import { useEffect, useRef } from 'react';

/**
 * Hook: gán class 'visible' khi element vào viewport
 * Dùng với class CSS .fade-up
 */
export function useFadeUp(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let timer;
    let retryTimer;

    const init = () => {
      const el = ref.current;
      if (!el) return;
      const root = document.querySelector('.landing-main');
      if (!root) {
        retryTimer = window.setTimeout(init, 50);
        return;
      }

      const ensureVisibleIfInView = () => {
        const rootRect = root.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        if (rect.top < rootRect.bottom && rect.bottom > rootRect.top) {
          el.classList.add('visible');
        }
      };

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.disconnect();
          }
        },
        { root, threshold }
      );

      observer.observe(el);
      timer = window.setTimeout(ensureVisibleIfInView, 80);
    };

    init();

    return () => {
      if (observer) observer.disconnect();
      window.clearTimeout(timer);
      window.clearTimeout(retryTimer);
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
    let observers = [];
    let timer;
    let retryTimer;

    const init = () => {
      const container = ref.current;
      if (!container) return;
      const root = document.querySelector('.landing-main');
      if (!root) {
        retryTimer = window.setTimeout(init, 50);
        return;
      }

      const children = container.querySelectorAll('.fade-up');
      const rootRect = root.getBoundingClientRect();

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

      timer = window.setTimeout(() => {
        children.forEach((child) => {
          const rect = child.getBoundingClientRect();
          if (rect.top < rootRect.bottom && rect.bottom > rootRect.top) {
            child.classList.add('visible');
          }
        });
      }, 80);
    };

    init();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.clearTimeout(timer);
      window.clearTimeout(retryTimer);
    };
  }, [threshold]);

  return ref;
}

