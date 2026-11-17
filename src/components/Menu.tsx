import { useEffect, useRef } from 'react';
import { profile } from '../data/profile';
import { scrollToSection, useOverlay } from '../hooks';
import { NAV } from './Hero';
import { CloseIcon } from './Icons';

interface Props {
  open: boolean;
  onClose: (afterClose?: () => void) => void;
}

export default function Menu({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useOverlay(open, onClose);
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 300);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <nav className={`menu gutter${open ? ' open' : ''}`} id="menu" aria-label="전체 메뉴" inert={!open}>
      <div className="m-top">
        <div className="logo">
          {profile.logo} <small>{profile.logoSub}</small>
        </div>
        <button ref={closeRef} className="m-close" type="button" aria-label="메뉴 닫기" onClick={() => onClose()}>
          <CloseIcon />
        </button>
      </div>
      <p className="label m-label">Navigation</p>
      <ul className="m-nav">
        {NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                onClose(() => scrollToSection(n.id));
              }}
            >
              <i />
              {n.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="m-foot">
        <span>EMAIL</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span style={{ marginTop: 14 }}>PHONE</span>
        <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
      </div>
    </nav>
  );
}
