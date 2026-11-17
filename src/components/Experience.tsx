import { experiences } from '../data/experience';

export default function Experience() {
  const first = experiences[experiences.length - 1].period.slice(0, 4);
  return (
    <section className="exp gutter" id="experience" aria-labelledby="exp-title">
      <div className="exp-head">
        <h2 className="exp-title" id="exp-title">Experience</h2>
        <span className="exp-span">
          {first} — NOW · {experiences.length}곳
        </span>
      </div>
      <ul className="exp-list">
        {experiences.map((exp, i) => (
          <li key={exp.company}>
            <details className="exp-item" open={i === 0}>
              <summary>
                <span className="company">{exp.company}</span>
                <span className="toggle" aria-hidden="true" />
                <span className="exp-meta">
                  <span className={exp.current ? 'now' : undefined}>
                    {exp.current && '● '}
                    {exp.period}
                  </span>
                  <span>{exp.role}</span>
                </span>
              </summary>
              <div className="exp-body">
                <p className="what">{exp.what}</p>
                {exp.highlights.length > 0 && (
                  <ul>
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="tags" hidden={exp.stack.length === 0}>
                  {exp.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
