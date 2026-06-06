import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Hook khởi tạo và quản lý bộ cuộn mượt Lenis cho toàn trang trên cả Desktop và Mobile.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      smoothTouch: true, // Kích hoạt cuộn mượt cho màn hình cảm ứng di động
      touchMultiplier: 1.5, // Nâng độ nhạy trên di động để vuốt cực nhạy
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
