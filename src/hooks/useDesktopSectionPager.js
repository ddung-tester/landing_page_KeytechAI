import { useEffect } from 'react';

const WHEEL_THRESHOLD = 80;
const SCROLL_DURATION_MS = 760;
const WHEEL_BUFFER_RESET_MS = 200;
const COOLDOWN_MS = 900;

function easeOutCubic(t) {
  return 1 - ((1 - t) ** 3);
}

function getSectionTop(root, section) {
  return Math.max(0, section.offsetTop - root.offsetTop);
}

function getCurrentSectionIndex(root, sections) {
  const currentTop = root.scrollTop;
  const viewportMiddle = currentTop + root.clientHeight * 0.45;

  let currentIndex = 0;
  sections.forEach((section, index) => {
    if (getSectionTop(root, section) <= viewportMiddle) {
      currentIndex = index;
    }
  });

  return currentIndex;
}

export function useDesktopSectionPager() {
  useEffect(() => {
    const root = document.querySelector('.landing-main');
    if (!root) return undefined;

    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!desktopQuery.matches || reduceMotionQuery.matches) return undefined;

    let isAnimating = false;
    let wheelBuffer = 0;
    let bufferTimer;
    let animationFrame;
    let lastScrollTime = 0;

    const getSections = () => (
      Array.from(root.querySelectorAll('.snap-section'))
        .filter((section) => section.offsetHeight > 0)
    );

    const animateTo = (targetTop) => {
      const startTop = root.scrollTop;
      const distance = targetTop - startTop;
      const startTime = performance.now();

      if (Math.abs(distance) < 2) {
        root.scrollTop = targetTop;
        isAnimating = false;
        return;
      }

      const step = (now) => {
        const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
        root.scrollTop = startTop + distance * easeOutCubic(progress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
          return;
        }

        root.scrollTop = targetTop;
        isAnimating = false;
      };

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(step);
    };

    const scrollToSection = (index) => {
      const sections = getSections();
      const target = sections[index];
      if (!target) return;

      isAnimating = true;
      animateTo(getSectionTop(root, target));
    };

    const handleWheel = (event) => {
      if (!desktopQuery.matches || reduceMotionQuery.matches) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const sections = getSections();
      if (sections.length < 2) return;

      const currentIndex = getCurrentSectionIndex(root, sections);
      const direction = event.deltaY > 0 ? 1 : -1;
      const isAtFirstSection = currentIndex === 0 && direction < 0;
      const isAtLastSection = currentIndex === sections.length - 1 && direction > 0;

      if (isAtFirstSection || isAtLastSection) return;

      event.preventDefault();

      if (isAnimating) return;

      // Cooldown: chặn cuộn liên tiếp quá nhanh
      const now = performance.now();
      if (now - lastScrollTime < COOLDOWN_MS) return;

      wheelBuffer += event.deltaY;
      window.clearTimeout(bufferTimer);
      bufferTimer = window.setTimeout(() => {
        wheelBuffer = 0;
      }, WHEEL_BUFFER_RESET_MS);

      if (Math.abs(wheelBuffer) < WHEEL_THRESHOLD) return;

      const bufferedDirection = wheelBuffer > 0 ? 1 : -1;
      wheelBuffer = 0;

      const nextIndex = Math.min(
        Math.max(currentIndex + bufferedDirection, 0),
        sections.length - 1
      );

      if (nextIndex !== currentIndex) {
        lastScrollTime = now;
        scrollToSection(nextIndex);
      }
    };

    root.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      root.removeEventListener('wheel', handleWheel);
      window.clearTimeout(bufferTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);
}
