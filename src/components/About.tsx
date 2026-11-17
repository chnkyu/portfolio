import { about } from '../data/profile';
import { scrollToSection } from '../hooks';
import MagneticButton from './MagneticButton';

/** "**굵게**" 표시를 <strong>으로 */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}

export default function About() {
  return (
    <section className="about gutter" id="about" aria-label="About">
      <p className="label">About</p>
      <p className="statement">{rich(about.statement)}</p>
      <p className="sub">{about.sub}</p>
      <MagneticButton onClick={() => scrollToSection('experience')}>{about.button}</MagneticButton>
    </section>
  );
}
