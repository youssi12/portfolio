import { CONFIG } from '../data/config.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.left}>
            <span className={styles.prompt}>&gt;_</span>
            {CONFIG.brand.toUpperCase()} — FOLIO OF {CONFIG.name.toUpperCase()}
          </span>
          <span className={styles.center}>
            ✦ &nbsp; MARKUP — CRAFTED BY HAND
          </span>
          <a href="#" className={styles.right}>↑ BACK TO TOP</a>
        </div>
      </div>
    </footer>
  )
}
