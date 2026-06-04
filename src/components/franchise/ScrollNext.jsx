import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

export default function ScrollNext({ href, label = 'Cuộn tiếp' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    scrollToLandingTarget(target);
  };

  return (
    <div className="scroll-next mt-8 flex justify-center">
      <a
        href={href}
        onClick={handleClick}
        className="inline-flex flex-col items-center gap-1 text-[12px] font-medium text-[#6B7280]
          hover:text-[#1E3A8A] transition-colors duration-200"
      >
        <span>{label}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3v9M4.5 8.5L8 12l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}
