import { useEffect } from 'react';

const DESKTOP_WIDTH = 1440;

export function useFixedCanvasScale() {
  useEffect(() => {
    const canvas = document.querySelector('.landing-canvas');
    if (!canvas) return undefined;

    let frame = 0;
    let timeoutId = null;

    const applyScale = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        window.cancelAnimationFrame(frame);

        frame = window.requestAnimationFrame(() => {
          const viewportWidth = window.innerWidth || DESKTOP_WIDTH;
          const scale = viewportWidth < DESKTOP_WIDTH ? viewportWidth / DESKTOP_WIDTH : 1;

          // Prevent layout recalculation if scale values haven't changed
          const currentScale = document.documentElement.style.getPropertyValue('--landing-scale');
          const newScaleStr = String(scale);
          if (currentScale !== newScaleStr) {
            document.documentElement.style.setProperty('--landing-scale', newScaleStr);
          }

          const currentHeight = document.documentElement.style.getPropertyValue('--landing-scaled-height');
          const newHeight = canvas.scrollHeight * scale;
          const newHeightStr = `${newHeight}px`;
          if (currentHeight !== newHeightStr) {
            document.documentElement.style.setProperty('--landing-scaled-height', newHeightStr);
          }
        });
      }, 50);
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    window.addEventListener('orientationchange', applyScale);

    const observer = new ResizeObserver(applyScale);
    observer.observe(canvas);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', applyScale);
      window.removeEventListener('orientationchange', applyScale);
      observer.disconnect();
      document.documentElement.style.removeProperty('--landing-scale');
      document.documentElement.style.removeProperty('--landing-scaled-height');
    };
  }, []);
}
