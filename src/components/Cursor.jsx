import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursor = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0
    let x = 0, y = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const animate = () => {
      x += (mx - x) * 0.15
      y += (my - y) * 0.15

      if (cursor.current) {
        cursor.current.style.transform =
          `translate(${x}px, ${y}px)`
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <div ref={cursor} className={styles.cursor} />
}