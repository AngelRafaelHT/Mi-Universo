import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Nebula background blobs */}
      <div className={styles.nebula1} aria-hidden="true" />
      <div className={styles.nebula2} aria-hidden="true" />
      <div className={styles.nebula3} aria-hidden="true" />

      {/* Animated planet */}
      <div className={styles.planetWrapper} aria-hidden="true">
        <div className={styles.planet}>
          <div className={styles.planetSurface} />
          <div className={styles.planetAtmo} />
        </div>
        <div className={styles.ring} />
        <div className={styles.moon} />
        <div className={styles.moon2} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} /> Exploración en curso — Sistema Solar
        </div>

        <h1 className={styles.title}>
          Explora los<br />
          <span className={styles.gradient}>Misterios del</span><br />
          Universo
        </h1>

        <p className={styles.subtitle}>
          Viaja por galaxias lejanas, descubre planetas extraños y sumérgete en los
          fenómenos más impresionantes del cosmos. El universo espera.
        </p>

        <div className={styles.actions}>
          <a href="#planetas" className={styles.btnPrimary} id="hero-explore-btn">
            <span>Iniciar viaje</span>
            <span className={styles.arrow}>→</span>
          </a>
          <a href="#exploración" className={styles.btnSecondary} id="hero-timeline-btn">
            Ver exploración espacial
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { val: '8', label: 'Planetas' },
            { val: '200B+', label: 'Estrellas en la Vía Láctea' },
            { val: '13.8B', label: 'Años de antigüedad' },
            { val: '∞', label: 'Por descubrir' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#planetas" className={styles.scrollIndicator} aria-label="Bajar a planetas">
        <div className={styles.scrollDot} />
      </a>
    </section>
  )
}
