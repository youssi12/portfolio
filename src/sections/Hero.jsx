import { useEffect, useRef, useState } from 'react'
import { CONFIG } from '../data/config.js'
import styles from './Hero.module.css'

/* ── Scramble effect — letters cycle to random chars then resolve ── */
const CHARS = '!<>-_\\/[]{}—=+*^?#abcdef0123456789'

function ScrambleWord({ word, className }) {
  const [display, setDisplay] = useState(word)
  const timerRef = useRef(null)

  const run = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    let frame = 0
    const reveal = Math.max(6, Math.floor(word.length * 1.4))
    timerRef.current = setInterval(() => {
      const out = word.split('').map((ch, i) => {
        if (i < frame - 2) return word[i]
        if (ch === ' ') return ' '
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join('')
      setDisplay(out)
      frame++
      if (frame > reveal) {
        clearInterval(timerRef.current)
        setDisplay(word)
      }
    }, 45)
  }

  useEffect(() => {
    run()
    return () => clearInterval(timerRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <em className={className} onMouseEnter={run} style={{fontStyle:'italic', cursor:'default'}}>
      {display}
    </em>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero}>
      {/* ambient glow */}
      <div className={styles.glow} aria-hidden />

      <div className={`container ${styles.inner}`}>
        {/* top bar */}
        <div className={`${styles.topbar} ${loaded ? styles.in : ''}`}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>{CONFIG.status}</span>
          <span className={styles.rule} aria-hidden />
          <span className={styles.edition}>{CONFIG.edition}</span>
        </div>

        {/* headline */}
        <h1 className={`${styles.headline} ${loaded ? styles.in : ''}`}>
          <span>{CONFIG.tagline[0]} </span>
          <ScrambleWord word={CONFIG.tagline[1]} className={styles.quietWord} />
          <span> {CONFIG.tagline[2]}</span>
          <br />
           <span>{CONFIG.tagline[3].split('loud')[0]}</span>
<span className={styles.loudWord}>
  loud
  {/* wavy SVG underline — draws in after headline appears */}
  <svg
    className={styles.wavyLine}
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    aria-hidden
  >
    <path
      d="M2 8 Q 50 2 100 6 T 198 4"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="300"
      strokeDashoffset="300"
      className={loaded ? styles.wavyDraw : ''}
    />
  </svg>
</span>
<span>{CONFIG.tagline[3].split('loud')[1]}</span>
        </h1>

        {/* sub row */}
        <div className={`${styles.subRow} ${loaded ? styles.in : ''}`}>
          <p className={styles.bio}>{CONFIG.bio}</p>

          <div className={styles.actions}>
            <a href={CONFIG.resumeUrl} className={styles.btnOutline} target="_blank" rel="noreferrer">
              <span>📄</span> Résumé
            </a>
            <a href="#work" className={styles.btnFilled}>
              View work <span>↗</span>
            </a>
          </div>
        </div>

        {/* stats */}
        <div className={`${styles.stats} ${loaded ? styles.in : ''}`}>
          {CONFIG.stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
