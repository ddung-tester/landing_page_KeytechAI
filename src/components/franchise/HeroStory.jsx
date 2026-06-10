import { scrollToLandingTarget } from '../../utils/scrollToLandingTarget';

function handleAnchorClick(event, selector) {
  event.preventDefault();
  const target = document.querySelector(selector);
  if (target) scrollToLandingTarget(target);
}

export default function HeroStory({ id = 'hero' }) {
  return (
    <section className="heroPosterSection" id={id}>
      <div className="heroPosterFrame">
        <img src="/hero-poster.png" className="heroPosterImage" alt="Keytech Hero Poster" />
        
        <div className="heroCtas heroCtasDesktop">
          <a
            href="#lien-he"
            onClick={(e) => handleAnchorClick(e, '#lien-he')}
            className="heroCtaPrimary"
          >
            Khám phá mô hình
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#kiem-chung"
            onClick={(e) => handleAnchorClick(e, '#kiem-chung')}
            className="heroCtaSecondary"
          >
            Xem thực tế triển khai
          </a>
        </div>
      </div>

      <div className="heroCtas heroCtasMobile">
        <a
          href="#lien-he"
          onClick={(e) => handleAnchorClick(e, '#lien-he')}
          className="heroCtaPrimary"
        >
          Khám phá mô hình
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="#kiem-chung"
          onClick={(e) => handleAnchorClick(e, '#kiem-chung')}
          className="heroCtaSecondary"
        >
          Xem thực tế triển khai
        </a>
      </div>
    </section>
  );
}

