import { useState } from 'react'
import { useInView } from '../hooks/useInView.js'
import { CONFIG } from '../data/config.js'
import styles from './Toolbench.module.css'

const ICONS = {
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/>
      <rect x="2" y="17" width="20" height="5" rx="1"/>
      <circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6" cy="12.5" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6" cy="19.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
      <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
    </svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
}

export default function Toolbench() {
  const [active, setActive] = useState(2)
  const [ref, inView] = useInView()
  const { categories, headline, subtitle } = CONFIG.toolbench

  return (
    <section className="section" id="stack" ref={ref}>
      <div className="container">
        {/* header */}
        <div className={`${styles.header} ${inView ? styles.in : ''}`}>
          <div>
            <div className="eyebrow" style={{marginBottom: 16}}>02 &nbsp;·&nbsp; Toolbench</div>
            <h2 className={`display ${styles.headline}`}>
              {headline[0]} <em className="italic-accent">{headline[1]}</em> {headline[2]}
            </h2>
          </div>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* cards */}
        <div className={`${styles.cards} ${inView ? styles.in : ''}`}>
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`${styles.card} ${active === i ? styles.active : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.icon} ${active === i ? styles.iconActive : ''}`}>
                  {ICONS[cat.icon]}
                </span>
                <span className={styles.num}>0{i + 1}</span>
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <ul className={styles.items}>
                {cat.items.map((item, j) => (
                  <li key={j} className={styles.item}>
                    <span>{item}</span>
                    <span className={`${styles.dot} ${active === i ? styles.dotActive : ''}`} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
