import { useEffect } from 'react';

const DESKTOP_WIDTH = 1440;

export function useFixedCanvasScale() {
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return undefined;

    let frame = 0;

    const applyScale = () => {
      window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const viewportWidth = window.innerWidth || DESKTOP_WIDTH;
        const scale = viewportWidth < DESKTOP_WIDTH ? viewportWidth / DESKTOP_WIDTH : 1;

        document.documentElement.style.setProperty('--landing-scale', String(scale));
        document.documentElement.style.setProperty(
          '--landing-scaled-height',
          `${root.scrollHeight * scale}px`
        );
      });
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    window.addEventListener('orientationchange', applyScale);

    const observer = new ResizeObserver(applyScale);
    observer.observe(root);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', applyScale);
      window.removeEventListener('orientationchange', applyScale);
      observer.disconnect();
      document.documentElement.style.removeProperty('--landing-scale');
      document.documentElement.style.removeProperty('--landing-scaled-height');
    };
  }, []);
}
