import { asset } from '../assetPath';
import { projects, type Project } from '../data/projects';
import { useInView } from '../hooks';

interface Props {
  onOpen: (id: string, trigger: HTMLElement) => void;
}

function FeaturedCard({ p, onOpen }: { p: Project; onOpen: Props['onOpen'] }) {
  const [ref, inView] = useInView<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      className={`feat${inView ? ' in' : ''}`}
      href={`#${p.id}`}
      aria-haspopup="dialog"
      onClick={(e) => {
        e.preventDefault();
        onOpen(p.id, e.currentTarget);
      }}
    >
      <div className="feat-img">
        {p.thumb ? (
          <img className="pc" src={asset(p.thumb)} alt={`${p.title} 화면`} loading="lazy" />
        ) : (
          <div className="feat-ph" aria-hidden="true">
            <strong>{p.client.split(' (')[0]}</strong>
            <span>{p.stack}</span>
          </div>
        )}
        {p.thumbMobile && (
          <span className="feat-phone">
            <img src={asset(p.thumbMobile)} alt={`${p.title} 모바일 화면`} loading="lazy" />
          </span>
        )}
        {p.live && <span className="feat-badge live">● 운영 중</span>}
        {p.internal && <span className="feat-badge">내부망</span>}
      </div>
      <div className="feat-row">
        <h3 className="feat-title">{p.title}</h3>
        <span className="feat-year">{p.year}</span>
        <p className="feat-sub">{p.summary}</p>
      </div>
    </a>
  );
}

export default function Work({ onOpen }: Props) {
  const featured = projects.filter((p) => p.featured);
  // 목록은 최신순 (기간 시작일 기준)
  const others = projects.filter((p) => !p.featured).sort((a, b) => b.period.localeCompare(a.period));
  return (
    <section className="work gutter" id="work" aria-labelledby="work-title">
      <div className="work-head">
        <h2 className="exp-title" id="work-title">Selected Work</h2>
        <span className="exp-span">
          대표 {featured.length} · 전체 {projects.length}
        </span>
      </div>

      <div className="featured">
        {featured.map((p) => (
          <FeaturedCard key={p.id} p={p} onOpen={onOpen} />
        ))}
      </div>

      <div className="others">
        <p className="label others-label">Other projects</p>
        <ul className="other-list">
          {others.map((p) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                aria-haspopup="dialog"
                onClick={(e) => {
                  e.preventDefault();
                  onOpen(p.id, e.currentTarget);
                }}
              >
                <span className="o-title">{p.title}</span>
                <span className="o-go" aria-hidden="true">↗</span>
                <span className="o-meta">
                  <span>{p.year}</span>
                  <span>{p.short}</span>
                  {p.internal && <span className="lock">내부망</span>}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
