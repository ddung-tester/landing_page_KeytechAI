import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Hook khởi tạo và quản lý bộ cuộn mượt Lenis cho toàn trang.
 * Tắt cuộn mượt trên mobile để giữ nguyên đà cuộn tự nhiên của hệ điều hành.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Chỉ chạy mượt trên desktop (>= 1024px)
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      smoothTouch: false, // Giữ nguyên đà cuộn native trên cảm ứng điện thoại
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Lắng nghe tín hiệu scroll-to từ Header, ScrollNext hoặc Footer
    const handleScrollTo = (e) => {
      const { target } = e.detail;
      if (target) {
        // Offset để chừa khoảng cách 76px cho header sticky
        lenis.scrollTo(target, { offset: -76, duration: 1.0 });
      }
    };

    window.addEventListener('lenis-scroll-to', handleScrollTo);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('lenis-scroll-to', handleScrollTo);
    };
  }, []);
}
