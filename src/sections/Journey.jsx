import { useInView } from '../hooks/useInView.js'
import { CONFIG } from '../data/config.js'
import styles from './Journey.module.css'

function TimelineItem({ item, index, total }) {
  const [ref, inView] = useInView()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`${styles.item} ${isLeft ? styles.left : styles.right} ${inView ? styles.in : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className={styles.content}>
        <span className={styles.year}>{item.year}</span>
        <h3 className={`${styles.title} display`}>{item.title}</h3>
        <p className={styles.text}>{item.text}</p>
      </div>
      <div className={styles.dotWrap}>
        <div className={styles.dot} />
        {index < total - 1 && <div className={styles.line} />}
      </div>
    </div>
  )
}

export default function Journey() {
  return (
    <section className={`section ${styles.journey}`} id="journey">
      <div className="container">
        <div className={styles.header}>
          <div className="eyebrow" style={{marginBottom: 16}}>04 &nbsp;·&nbsp; Journey</div>
          <h2 className={`display ${styles.sectionTitle}`}>
            How I got <em className="italic-accent">here.</em>
          </h2>
        </div>

        <div className={styles.timeline}>
          {CONFIG.journey.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} total={CONFIG.journey.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
