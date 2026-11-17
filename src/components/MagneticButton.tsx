import { useRef, type ReactNode } from 'react';

/** 마우스가 있으면 커서 쪽으로 살짝 끌려오는 동그란 버튼 (터치는 누를 때 줄어드는 효과만) */
export default function MagneticButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  const btn = useRef<HTMLButtonElement>(null);
  const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const move = (e: React.PointerEvent) => {
    if (!canHover || reduce || !btn.current) return;
    const r = btn.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.25;
    btn.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => {
    if (btn.current) btn.current.style.transform = '';
  };

  return (
    <div className="circle-row" onPointerMove={move} onPointerLeave={leave}>
      <button ref={btn} className="circle" type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
