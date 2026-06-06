import { useEffect, useRef } from 'react';

/**
 * Hook: Gán class 'visible' khi phần tử đi vào viewport của trình duyệt.
 * Dùng kết hợp với class CSS .fade-up.
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
      { root: null, threshold } // Sử dụng viewport của trình duyệt
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}

/**
 * Hook: Quan sát nhiều phần tử con (chứa class .fade-up) bên trong một container.
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
        { root: null, threshold } // Sử dụng viewport của trình duyệt
      );
      observer.observe(child);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [threshold]);

  return ref;
}
