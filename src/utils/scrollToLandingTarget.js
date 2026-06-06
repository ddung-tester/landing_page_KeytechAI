/**
 * Cuộn đến phần tử target.
 * Gửi custom event 'lenis-scroll-to' để Lenis xử lý hoạt cảnh mượt mà trên cả desktop và mobile.
 */
export function scrollToLandingTarget(target) {
  if (!target) return;

  window.dispatchEvent(new CustomEvent('lenis-scroll-to', {
    detail: { target }
  }));
}
