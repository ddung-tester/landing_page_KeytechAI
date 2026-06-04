const HEADER_HEIGHT = 64;

function usesMainScroller(root) {
  return Boolean(root && window.matchMedia('(min-width: 1024px)').matches);
}

export function scrollToLandingTarget(target, behavior = 'smooth') {
  if (!target) return;

  const root = document.querySelector('.landing-main');

  if (usesMainScroller(root)) {
    root.scrollTo({ top: Math.max(0, target.offsetTop - root.offsetTop), behavior });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
