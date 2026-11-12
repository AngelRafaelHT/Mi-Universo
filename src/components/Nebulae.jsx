import styles from './Nebulae.module.css'

const nebulae = [
  {
    id: 'crab',
    name: 'Nebulosa del Cangrejo',
    constellation: 'Tauro',
    distance: '6,500 años luz',
    size: '11 años luz',
    type: 'Remanente de supernova',
    year: '1054',
    description: 'Los restos de una supernova observada por astrónomos chinos en 1054. En su centro pulsa un neutrón que gira 30 veces por segundo.',
    colors: ['#6366f1', '#8b5cf6', '#ec4899'],
    gradient: 'radial-gradient(ellipse at 40% 40%, #6366f1 0%, #8b5cf6 30%, #ec4899 60%, #1e1b4b 100%)',
  },
  {
    id: 'orion',
    name: 'Nebulosa de Orión',
    constellation: 'Orión',
    distance: '1,344 años luz',
    size: '24 años luz',
    type: 'Nebulosa de emisión',
    year: '1610',
    description: 'La nebulosa más visible a simple vista. Es una gigantesca guardería estelar donde nacen nuevas estrellas cada año.',
    colors: ['#f59e0b', '#ef4444', '#ec4899'],
    gradient: 'radial-gradient(ellipse at 50% 60%, #fbbf24 0%, #f59e0b 25%, #ef4444 55%, #7f1d1d 100%)',
  },
  {
    id: 'eagle',
    name: 'Nebulosa del Águila',
    constellation: 'Serpens',
    distance: '7,000 años luz',
    size: '70 × 55 años luz',
    type: 'Nebulosa de emisión/reflexión',
    year: '1745',
    description: 'Hogar de los "Pilares de la Creación", columnas de gas y polvo donde se forman nuevas estrellas. Fotografiada por el Hubble en 1995.',
    colors: ['#10b981', '#059669', '#6366f1'],
    gradient: 'radial-gradient(ellipse at 30% 70%, #10b981 0%, #059669 35%, #6366f1 70%, #0f172a 100%)',
  },
  {
    id: 'ring',
    name: 'Nebulosa del Anillo',
    constellation: 'Lyra',
    distance: '2,283 años luz',
    size: '1 año luz',
    type: 'Nebulosa planetaria',
    year: '1779',
    description: 'Los restos de una estrella similar al Sol que expulsó sus capas exteriores al morir. Un anillo perfecto de gas multicolor.',
    colors: ['#22d3ee', '#6366f1', '#f59e0b'],
    gradient: 'radial-gradient(ellipse at center, #fbbf24 0%, #22d3ee 30%, #6366f1 60%, #0f172a 100%)',
  },
]

export default function Nebulae() {
  return (
    <section id="nebulosas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Objetos del Espacio Profundo</span>
          <h2 className={styles.sectionTitle}>Nebulosas Fascinantes</h2>
          <p className={styles.sectionDesc}>
            Las guarderías estelares del universo — donde muere y nace la materia misma.
          </p>
        </div>

        <div className={styles.grid}>
          {nebulae.map(n => (
            <article key={n.id} className={styles.card} id={`nebula-${n.id}`}>
              {/* Visual */}
              <div
                className={styles.visual}
                style={{ background: n.gradient }}
                aria-hidden="true"
              >
                <div className={styles.visualInner} />
                <div className={styles.visualParticles}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className={styles.particle}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${Math.random() * 2 + 2}s`,
                        background: n.colors[Math.floor(Math.random() * n.colors.length)],
                      }}
                    />
                  ))}
                </div>
                <span className={styles.typeChip}>{n.type}</span>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.constellation}>⭐ {n.constellation}</span>
                  <span className={styles.discovered}>Desc. {n.year}</span>
                </div>
                <h3 className={styles.name}>{n.name}</h3>
                <p className={styles.description}>{n.description}</p>

                <div className={styles.specs}>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Distancia</span>
                    <span className={styles.specVal}>{n.distance}</span>
                  </div>
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Tamaño</span>
                    <span className={styles.specVal}>{n.size}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
