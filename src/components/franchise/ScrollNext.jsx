import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

export default function ScrollNext({ href, label = 'Cuộn tiếp' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    scrollToLandingTarget(target);
  };

  return (
    <div className="scroll-next">
      <a
        href={href}
        onClick={handleClick}
        className="inline-flex flex-col items-center gap-1 text-[11.5px] font-medium text-[#9CA3AF]
          hover:text-[#1E3A8A] transition-colors duration-200 group"
        aria-label={label}
      >
        <span className="tracking-wide">{label}</span>
        <svg
          width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
          className="animate-bounce-slow group-hover:text-[#1E3A8A]"
        >
          <path
            d="M9 3.5v11M5 10.5L9 14.5l4-4"
            stroke="currentColor" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
