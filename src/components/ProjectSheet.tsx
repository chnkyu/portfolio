import { useEffect, useRef, useState, type FormEvent } from 'react';
import { asset } from '../assetPath';
import { INTERNAL_CODE } from '../data/profile';
import { projectImages, projects } from '../data/projects';
import { useOverlay } from '../hooks';
import { CloseIcon } from './Icons';

interface Props {
  id: string | null;
  onChange: (id: string) => void;
  onClose: () => void;
}

const UNLOCK_KEY = 'pf-unlocked';
const readUnlocked = () => {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === '1';
  } catch {
    return false;
  }
};

export default function ProjectSheet({ id, onChange, onClose }: Props) {
  const open = id !== null;
  // 닫히는 애니메이션 동안 마지막 내용을 유지
  const [shownId, setShownId] = useState(id);
  useEffect(() => {
    if (id) setShownId(id);
  }, [id]);

  const sheetRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useOverlay(open, onClose);

  useEffect(() => {
    if (!id) return;
    sheetRef.current?.scrollTo({ top: 0 });
    galleryRef.current?.scrollTo({ left: 0 });
    setIndex(0);
    setCode('');
    setError('');
    const t = setTimeout(() => titleRef.current?.focus({ preventScroll: true }), 350);
    return () => clearTimeout(t);
  }, [id]);

  const p = projects.find((x) => x.id === shownId);
  if (!p) return <div className="sheet" ref={sheetRef} inert />;

  const images = projectImages(p);
  const locked = !!p.internal && images.length > 0 && !unlocked;
  const order = projects.map((x) => x.id);
  const next = projects[(order.indexOf(p.id) + 1) % projects.length];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return setError('확인 코드를 입력해 주세요.');
    if (code.trim() !== INTERNAL_CODE) {
      setCode('');
      return setError('코드가 맞지 않아요. 다시 입력해 주세요.');
    }
    setUnlocked(true);
    try {
      sessionStorage.setItem(UNLOCK_KEY, '1');
    } catch {
      /* 저장 안 돼도 이번 화면에서는 열림 */
    }
  };

  const onGalleryScroll = () => {
    const g = galleryRef.current;
    const first = g?.firstElementChild as HTMLElement | null;
    if (!g || !first) return;
    setIndex(Math.round(g.scrollLeft / (first.getBoundingClientRect().width + 10)));
  };

  return (
    <div
      ref={sheetRef}
      className={`sheet${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="s-title"
      inert={!open}
    >
      <div className="s-bar gutter">
        <span className="s-crumb">Selected Work</span>
        <button className="s-close" type="button" aria-label="상세 닫기" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="s-head gutter">
        <p className="s-kind">{p.kind}</p>
        <h2 className="s-title" id="s-title" ref={titleRef} tabIndex={-1}>
          {p.title}
        </h2>
        <dl className="s-meta">
          {[
            ['기간', p.period],
            ['담당', p.role],
            ['고객사', p.client],
            ['기술', p.stack],
          ].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {p.site && (
          <a className="s-site" href={p.site} target="_blank" rel="noreferrer">
            사이트 보기 ↗
          </a>
        )}
      </div>

      {images.length === 0 && (
        <div className="gutter">
          <div className="s-empty">
            <strong>{p.internal ? '내부망 프로젝트' : '화면 준비 중'}</strong>
            {p.internal && (
              <span>
                공개할 수 있는 화면이 없어요.
                <br />
                면접에서 직접 보여드릴게요.
              </span>
            )}
          </div>
        </div>
      )}

      {locked && (
        <div className="gutter">
          <div className="s-empty s-lock">
            <strong>내부망 프로젝트 화면</strong>
            전달받은 확인 코드를 입력하면 볼 수 있어요.
            <form onSubmit={submit}>
              <label htmlFor="s-code" className="sr-only">확인 코드</label>
              <input
                id="s-code"
                type="password"
                inputMode="numeric"
                autoComplete="off"
                placeholder="확인 코드"
                value={code}
                aria-invalid={!!error}
                aria-describedby="s-err"
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
              />
              <button type="submit">확인</button>
            </form>
            <p className="s-err" id="s-err" role="alert">{error}</p>
          </div>
        </div>
      )}

      {!locked && images.length > 0 && (
        <>
          <div className="s-gallery" ref={galleryRef} onScroll={onGalleryScroll}>
            {images.map((src, i) => (
              <figure key={src}>
                <img src={asset(src)} alt={`${p.title} 화면 ${i + 1}`} loading={i < 2 ? 'eager' : 'lazy'} />
              </figure>
            ))}
          </div>
          <p className="s-count gutter" aria-live="polite">
            {index + 1} / {images.length}
            {images.length > 1 && ' · 옆으로 넘겨 보세요'}
          </p>
        </>
      )}

      <div className="s-body gutter">
        <section>
          <h3>주요 작업</h3>
          <ul>
            {p.work.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="gutter">
        <button className="s-next" type="button" onClick={() => onChange(next.id)}>
          <small>Next project</small>
          <span>{next.title} →</span>
        </button>
      </div>
    </div>
  );
}
