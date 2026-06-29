import { useInView } from '../hooks/useInView.js'
import { CONFIG } from '../data/config.js'
import styles from './Work.module.css'

/* ── SVG Illustrations ───────────────────────────────────── */

/* Project 1 — original, untouched */
function LedgerVisual() {
  return (
    <svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      {[
        [100,80],[200,50],[320,70],[380,130],[300,180],[180,200],[80,160],[240,140]
      ].map(([x,y],i) => (
        <g key={i}>
          <rect x={x-18} y={y-18} width={36} height={36} rx={4}
            fill="none" stroke="#00e5c8" strokeWidth="1.2"
            className={styles.cube} style={{animationDelay:`${i*0.4}s`}}/>
          <rect x={x-10} y={y-10} width={20} height={20} rx={2}
            fill="rgba(0,229,200,0.08)" stroke="#00e5c8" strokeWidth="0.8"
            className={styles.cube} style={{animationDelay:`${i*0.4+0.2}s`}}/>
        </g>
      ))}
      {[
        [[100,80],[200,50]],[[200,50],[320,70]],[[320,70],[380,130]],
        [[380,130],[300,180]],[[300,180],[240,140]],[[240,140],[180,200]],
        [[180,200],[80,160]],[[80,160],[100,80]],[[240,140],[200,50]]
      ].map(([[x1,y1],[x2,y2]],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#00e5c8" strokeWidth="0.6" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
        </line>
      ))}
      {[[100,80],[200,50],[320,70],[380,130],[300,180],[180,200],[80,160],[240,140]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="#00e5c8" opacity={0.6}/>
      ))}
    </svg>
  )
}

/* Project 2 — concentric rings that breathe + orbiting dots */
function ConcoursVisual() {
  const rings  = [40, 70, 100]
  const orbits = [
    { r: 40,  count: 3, dur: 6,  color: '#a78bfa' },
    { r: 70,  count: 5, dur: 10, color: '#7c3aed' },
    { r: 100, count: 7, dur: 15, color: '#a78bfa' },
  ]

  return (
    <svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <g transform="translate(230,130)">
        {rings.map((r, i) => (
          <circle key={i} cx={0} cy={0} r={r}
            fill="none" stroke="#a78bfa" strokeWidth="0.8"
            opacity={0.15 + i * 0.07}>
            <animate attributeName="r" values={`${r};${r+6};${r}`} dur={`${4+i*1.5}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values={`${0.15+i*0.07};${0.28+i*0.07};${0.15+i*0.07}`} dur={`${4+i*1.5}s`} repeatCount="indefinite"/>
          </circle>
        ))}
        <circle cx={0} cy={0} r={6} fill="rgba(167,139,250,0.3)" stroke="#a78bfa" strokeWidth="1">
          <animate attributeName="r" values="6;9;6" dur="3s" repeatCount="indefinite"/>
        </circle>
        {orbits.map((o, oi) =>
          Array.from({ length: o.count }, (_, di) => {
            const offset = (di / o.count) * 360
            return (
              <circle key={`${oi}-${di}`} cx={o.r} cy={0} r={3} fill={o.color} opacity={0.7}>
                <animateTransform attributeName="transform" type="rotate"
                  values={`${offset};${offset+360}`} dur={`${o.dur}s`} repeatCount="indefinite"/>
              </circle>
            )
          })
        )}
        {[0,60,120,180,240,300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line key={i} x1={0} y1={0}
              x2={Math.cos(rad)*105} y2={Math.sin(rad)*105}
              stroke="rgba(167,139,250,0.08)" strokeWidth="1"/>
          )
        })}
      </g>
    </svg>
  )
}

/* Project 3 — flowing particles along horizontal rails */
function RouteOptVisual() {
  const streams = [
    { y: 60,  count: 6, dur: 4,   color: '#e8a84c', size: 3   },
    { y: 100, count: 8, dur: 5.5, color: '#f59e0b', size: 2   },
    { y: 140, count: 5, dur: 3.5, color: '#e8a84c', size: 4   },
    { y: 180, count: 7, dur: 6,   color: '#fbbf24', size: 2.5 },
    { y: 220, count: 6, dur: 4.5, color: '#e8a84c', size: 3   },
  ]

  return (
    <svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      {streams.map((s, i) => (
        <line key={i} x1="20" y1={s.y} x2="440" y2={s.y}
          stroke="rgba(232,168,76,0.07)" strokeWidth="1"/>
      ))}
      {streams.map((s, si) =>
        Array.from({ length: s.count }, (_, pi) => (
          <circle key={`${si}-${pi}`} cy={s.y} r={s.size} fill={s.color} opacity={0.7}>
            <animate attributeName="cx" values="-10;470"
              dur={`${s.dur}s`} begin={`${-(pi / s.count) * s.dur}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.1;0.9;1"
              dur={`${s.dur}s`} begin={`${-(pi / s.count) * s.dur}s`} repeatCount="indefinite"/>
          </circle>
        ))
      )}
      {[120, 230, 340].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="40" x2={x} y2="245"
            stroke="rgba(232,168,76,0.15)" strokeWidth="1" strokeDasharray="3 5"/>
          <circle cx={x} cy={40}  r={3} fill="rgba(232,168,76,0.3)"/>
          <circle cx={x} cy={245} r={3} fill="rgba(232,168,76,0.3)"/>
        </g>
      ))}
    </svg>
  )
}

/* Project 4 — radar sweep with pulsing blips */
function RadarVisual() {
  const rings = [30, 60, 90, 120]
  const blips = [
    { angle: 40,  r: 60  },
    { angle: 120, r: 90  },
    { angle: 200, r: 45  },
    { angle: 260, r: 110 },
    { angle: 320, r: 75  },
  ]

  return (
    <svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <g transform="translate(230,130)">
        {rings.map((r, i) => (
          <circle key={i} cx={0} cy={0} r={r}
            fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity={0.18}/>
        ))}
        <line x1={-120} y1={0} x2={120} y2={0} stroke="#38bdf8" strokeWidth="0.5" opacity="0.12"/>
        <line x1={0} y1={-120} x2={0} y2={120} stroke="#38bdf8" strokeWidth="0.5" opacity="0.12"/>

        <g>
          <path d="M0,0 L120,0 A120,120 0 0,1 84.8,84.8 Z" fill="rgba(56,189,248,0.18)">
            <animateTransform attributeName="transform" type="rotate"
              values="0;360" dur="6s" repeatCount="indefinite"/>
          </path>
          <line x1="0" y1="0" x2="120" y2="0" stroke="#38bdf8" strokeWidth="1" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate"
              values="0;360" dur="6s" repeatCount="indefinite"/>
          </line>
        </g>

        {blips.map((b, i) => {
          const rad = (b.angle * Math.PI) / 180
          const x = Math.cos(rad) * b.r
          const y = Math.sin(rad) * b.r
          return (
            <circle key={i} cx={x} cy={y} r={3} fill="#38bdf8">
              <animate attributeName="opacity" values="0;0;1;0.2;0" keyTimes="0;0.05;0.15;0.4;1"
                dur="6s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
            </circle>
          )
        })}
        <circle cx={0} cy={0} r={3} fill="#38bdf8"/>
      </g>
    </svg>
  )
}

/* Project 5 — equalizer bars with floating particles */
function EqualizerVisual() {
  const bars = [
    { x: 60,  h: 60,  dur: 1.8 },
    { x: 110, h: 100, dur: 2.4 },
    { x: 160, h: 40,  dur: 1.5 },
    { x: 210, h: 120, dur: 3.0 },
    { x: 260, h: 70,  dur: 2.0 },
    { x: 310, h: 95,  dur: 2.6 },
    { x: 360, h: 50,  dur: 1.7 },
    { x: 410, h: 80,  dur: 2.2 },
  ]
  const baseline = 220

  return (
    <svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <line x1="20" y1={baseline} x2="440" y2={baseline} stroke="rgba(251,113,133,0.15)" strokeWidth="1"/>
      {bars.map((b, i) => (
        <rect key={i} x={b.x - 12} width={24} rx={3}
          fill="rgba(251,113,133,0.12)" stroke="#fb7185" strokeWidth="1"
          y={baseline - b.h} height={b.h}>
          <animate attributeName="height"
            values={`${b.h};${b.h*0.35};${b.h*1.15};${b.h*0.6};${b.h}`}
            dur={`${b.dur}s`} repeatCount="indefinite"/>
          <animate attributeName="y"
            values={`${baseline-b.h};${baseline-b.h*0.35};${baseline-b.h*1.15};${baseline-b.h*0.6};${baseline-b.h}`}
            dur={`${b.dur}s`} repeatCount="indefinite"/>
        </rect>
      ))}
      {[[80,90],[150,60],[260,110],[340,70],[400,130]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill="#fb7185" opacity={0.6}>
          <animate attributeName="cy" values={`${y};${y-15};${y}`} dur={`${3+i*0.5}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur={`${3+i*0.5}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  )
}

const VISUALS = {
  green:         LedgerVisual,
  purple: ConcoursVisual,
  orange:       RouteOptVisual,
  blue:   RadarVisual,
  pink:   EqualizerVisual,
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  const isEven = index % 2 === 0
  const Visual = VISUALS[project.visual] || LedgerVisual

  return (
    <div
      ref={ref}
      className={`${styles.projectRow} ${isEven ? styles.even : styles.odd} ${inView ? styles.in : ''}`}
    >
      <div className={styles.projectImg}>
        <div className={styles.imgFrame}>
          <span className={styles.plateLabel}>PLATE # {project.id}</span>
          <Visual />
        </div>
      </div>

      <div className={styles.projectText}>
        <div className={styles.metaRow}>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.plateNum}>♯ {project.id}</span>
        </div>
        <h3 className={`${styles.projectTitle} display`}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div className={styles.projectLinks}>
          <a href={project.caseStudyUrl} className={styles.linkPrimary}>Case study ↗</a>
          <a href={project.sourceUrl} className={styles.linkSecondary}>⎇ Source</a>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="eyebrow" style={{marginBottom: 16}}>03 &nbsp;·&nbsp; Work</div>
          <h2 className={`display ${styles.sectionTitle}`}>
            Things I've <em className="italic-accent">shipped.</em>
          </h2>
        </div>
        {CONFIG.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}