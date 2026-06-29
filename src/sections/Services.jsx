import { useInView } from '../hooks/useInView.js'
import { CONFIG } from '../data/config.js'
import styles from './Services.module.css'

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section className={`section ${styles.services}`} id="services" ref={ref}>
      <div className="container">
        <div className={`${styles.header} ${inView ? styles.in : ''}`}>
          <div className="eyebrow" style={{marginBottom: 16}}>05 &nbsp;·&nbsp; Commissions</div>
          <h2 className={`display ${styles.title}`}>
            What I can <em className="italic-accent">build</em> for you.
          </h2>
        </div>

        <div className={`${styles.grid} ${inView ? styles.in : ''}`}>
          {CONFIG.services.map((s, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.num}>{s.number}</span>
              <h3 className={`${styles.cardTitle} display`}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              <div className={styles.arrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
