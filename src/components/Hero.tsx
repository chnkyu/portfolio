import { hero, profile } from '../data/profile';
import { scrollToSection } from '../hooks';
import { ArrowDownRight } from './Icons';

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

interface Props {
  menuOpen: boolean;
  onOpenMenu: (trigger: HTMLElement) => void;
}

export default function Hero({ menuOpen, onOpenMenu }: Props) {
  const [line1, line2] = hero.role.split('\n');
  return (
    <section className="hero" id="top">
      <header className="top gutter">
        <div className="logo rise d1">
          {profile.logo} <small>{profile.logoSub}</small>
        </div>
        <nav className="top-nav rise d1" aria-label="주요 메뉴">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(n.id);
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-btn rise d1"
          type="button"
          aria-label="메뉴 열기"
          aria-controls="menu"
          aria-expanded={menuOpen}
          onClick={(e) => onOpenMenu(e.currentTarget)}
        >
          <span />
        </button>
      </header>

      <div className="intro gutter">
        <ArrowDownRight className="arrow rise d2" />
        <h1 className="role rise d2">
          {line1}
          <br />
          {line2} <em>{hero.roleSuffix}</em>
        </h1>
        <div className="meta rise d3">
          {hero.pills.map((p) => (
            <span key={p.label} className="pill">
              {p.dot && <i />}
              {p.label}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee" aria-label={profile.nameEn}>
        <span className="name-in">
          <span className="marquee-track" aria-hidden="true">
            {[0, 1].map((i) => (
              <span key={i}>
                {profile.nameEn}
                <b>—</b>
              </span>
            ))}
          </span>
        </span>
      </div>
    </section>
  );
}
