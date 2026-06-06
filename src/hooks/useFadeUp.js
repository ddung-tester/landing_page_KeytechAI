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
      { root: null, threshold } // root: null là viewport mặc định của trình duyệt
    );

    observer.observe(el);

    // Fallback: Trong trường hợp phần tử đã nằm sẵn trong màn hình lúc load
    const timer = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
        observer.disconnect();
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
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
        { root: null, threshold } // root: null là viewport mặc định của trình duyệt
      );
      observer.observe(child);
      observers.push(observer);
    });

    // Fallback: Trong trường hợp các con đã nằm sẵn trong màn hình lúc load
    const timer = setTimeout(() => {
      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          child.classList.add('visible');
        }
      });
    }, 100);

    return () => {
      observers.forEach((o) => o.disconnect());
      clearTimeout(timer);
    };
  }, [threshold]);

  return ref;
}
