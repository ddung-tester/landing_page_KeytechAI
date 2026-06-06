/**
 * Cuộn đến phần tử target.
 * Sử dụng cơ chế cuộn mượt mặc định của trình duyệt cho cả desktop và mobile.
 */
export function scrollToLandingTarget(target, behavior = 'smooth') {
  if (!target) return;

  const HEADER = 76;
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
