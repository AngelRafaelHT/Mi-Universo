import styles from './Timeline.module.css'

const events = [
  {
    year: '1957',
    title: 'Sputnik 1',
    desc: 'La URSS lanza el primer satélite artificial de la historia. El "bip bip" del Sputnik marcó el inicio de la era espacial.',
    icon: '🛰️',
    color: '#6366f1',
  },
  {
    year: '1961',
    title: 'Yuri Gagarin',
    desc: 'El cosmonauta soviético se convierte en el primer humano en orbitar la Tierra a bordo del Vostok 1. El viaje duró 108 minutos.',
    icon: '👨‍🚀',
    color: '#8b5cf6',
  },
  {
    year: '1969',
    title: 'Apollo 11 — Luna',
    desc: 'Neil Armstrong y Buzz Aldrin pisan la Luna por primera vez. "Un pequeño paso para el hombre, un gran salto para la humanidad."',
    icon: '🌙',
    color: '#a78bfa',
  },
  {
    year: '1977',
    title: 'Voyager 1 y 2',
    desc: 'Lanzadas para explorar los planetas exteriores. Voyager 1 es hoy el objeto más lejano fabricado por humanos, a más de 23 mil millones de km.',
    icon: '🚀',
    color: '#22d3ee',
  },
  {
    year: '1990',
    title: 'Telescopio Hubble',
    desc: 'El Hubble Space Telescope es puesto en órbita, revolucionando nuestra visión del universo con imágenes de galaxias a miles de millones de años luz.',
    icon: '🔭',
    color: '#10b981',
  },
  {
    year: '2004',
    title: 'Mars Rovers',
    desc: 'Spirit y Opportunity aterrizan en Marte. Opportunity operó durante 15 años, recorriendo 45 km en la superficie marciana.',
    icon: '🤖',
    color: '#ef4444',
  },
  {
    year: '2015',
    title: 'New Horizons — Plutón',
    desc: 'La sonda New Horizons sobrevuela Plutón, revelando montañas de hielo, llanuras de nitrógeno y una atmósfera tenue sorprendente.',
    icon: '❄️',
    color: '#f59e0b',
  },
  {
    year: '2021',
    title: 'James Webb Telescope',
    desc: 'El sucesor del Hubble, 100 veces más potente, comienza a revelar galaxias de hace 13.6 mil millones de años y atmósferas de exoplanetas.',
    icon: '✨',
    color: '#ec4899',
  },
]

export default function Timeline() {
  return (
    <section id="exploración" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Historia</span>
          <h2 className={styles.sectionTitle}>La Gran Aventura Espacial</h2>
          <p className={styles.sectionDesc}>
            Desde el primer satélite hasta el James Webb — 70 años de exploración humana del cosmos.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          {events.map((e, i) => (
            <div
              key={e.year}
              className={`${styles.event} ${i % 2 === 0 ? styles.left : styles.right}`}
              style={{ '--color': e.color }}
            >
              <div className={styles.dot} aria-hidden="true">
                <span>{e.icon}</span>
              </div>
              <div className={styles.card}>
                <span className={styles.year}>{e.year}</span>
                <h3 className={styles.eventTitle}>{e.title}</h3>
                <p className={styles.eventDesc}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
