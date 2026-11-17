import { useState } from 'react';
import { contact, profile } from '../data/profile';
import { useKST } from '../hooks';

function CopyButton({ text, targetId }: { text: string; targetId: string }) {
  const [label, setLabel] = useState('복사');
  const flash = (t: string) => {
    setLabel(t);
    setTimeout(() => setLabel('복사'), 1500);
  };
  const fallback = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const r = document.createRange();
    r.selectNodeContents(el);
    const s = getSelection();
    s?.removeAllRanges();
    s?.addRange(r);
    flash('선택됨');
  };
  return (
    <button
      className="c-copy"
      type="button"
      aria-label={`${text} 복사`}
      onClick={() => {
        try {
          navigator.clipboard.writeText(text).then(() => flash('복사됨'), fallback);
        } catch {
          fallback();
        }
      }}
    >
      {label}
    </button>
  );
}

export default function Contact() {
  const kst = useKST();
  const tel = profile.phone.replace(/-/g, '');
  return (
    <section className="contact gutter" id="contact" aria-labelledby="c-title">
      <p className="label">Contact</p>
      <h2 className="c-title" id="c-title" style={{ marginTop: 20 }}>
        {contact.title.map((t) => (
          <span key={t}>
            {t}
            <br />
          </span>
        ))}
        <span className="dim">{contact.titleDim}</span>
      </h2>

      <div className="c-rule">
        <div className="c-ctas">
          <a className="c-cta" href={`mailto:${profile.email}`}>
            메일 보내기<small>EMAIL</small>
          </a>
          <a className="c-cta ghost" href={`tel:${tel}`}>
            전화하기<small>PHONE</small>
          </a>
        </div>
      </div>

      <div className="c-pills">
        <div className="c-pill">
          <span id="c-email">{profile.email}</span>
          <CopyButton text={profile.email} targetId="c-email" />
        </div>
        <div className="c-pill">
          <span id="c-phone">{profile.phone}</span>
          <CopyButton text={profile.phone} targetId="c-phone" />
        </div>
      </div>

      <dl className="c-foot">
        {contact.info.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.label === 'Local time' ? `${kst} KST` : item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
