import { useInView } from '../hooks/useInView.js'
import { CONFIG } from '../data/config.js'
import styles from './About.module.css'
import darkpc from "../assets/darkpc.jpeg";

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <div className={`${styles.grid} ${inView ? styles.in : ''}`}>
          {/* left: profile visual */}
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}> 
                <img src={darkpc} alt="your name" />
                {/* <div className={styles.codeLines}>
                  {Array.from({length: 14}).map((_, i) => (
                    <div key={i} className={styles.codeLine} style={{width: `${45 + Math.sin(i * 1.3) * 35}%`, opacity: 0.15 + Math.cos(i * 0.8) * 0.1}} />
                  ))}
                </div> */}
              </div>
              <div className={styles.stamp}>
                <svg viewBox="0 0 120 120" className={styles.stampSvg}>
                  <defs>
                    <path id="circle" d="M 60,60 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="var(--accent)" fontSize="11" fontFamily="var(--sans)" letterSpacing="3.5">
                    <textPath href="#circle">crafted with care · est. 2023 · code &lt;&gt; craft ·</textPath>
                  </text>
                  <text x="60" y="65" textAnchor="middle" fill="var(--accent)" fontSize="18">✳</text>
                </svg>
              </div>
            </div>
          </div>

          {/* right: text */}
          <div className={styles.content}>
            <div className="eyebrow" style={{marginBottom: 24}}>01 &nbsp;·&nbsp; About</div>

            <h2 className={`${styles.headline} display`}>
              {CONFIG.about.headline[0]}{' '}
              <em className="italic-accent">{CONFIG.about.headline[1]}</em>{' '}
              {CONFIG.about.headline[2]}{' '}
              <em className={styles.serifItalic}>{CONFIG.about.headline[3]}</em>
            </h2>

            {CONFIG.about.paragraphs.map((p, i) => (
              <p key={i} className={styles.para}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
