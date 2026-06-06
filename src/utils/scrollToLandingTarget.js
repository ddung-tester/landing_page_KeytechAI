/**
 * Cuộn đến phần tử target.
 * Desktop: Bắn custom event 'lenis-scroll-to' để Lenis điều khiển hoạt cảnh mượt mà.
 * Mobile: Dùng native window scroll.
 */
export function scrollToLandingTarget(target, behavior = 'smooth') {
  if (!target) return;

  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

  if (isDesktop) {
    window.dispatchEvent(new CustomEvent('lenis-scroll-to', {
      detail: { target }
    }));
    return;
  }

  // Mobile: native window scroll
  const HEADER = 76;
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
