import { CONFIG } from '../data/config.js'
import styles from './Marquee.module.css'

export default function Marquee() {
  const items = [...CONFIG.stack, ...CONFIG.stack] // duplicate for seamless loop

  return (
    <div className={styles.wrapper} id="stack">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
