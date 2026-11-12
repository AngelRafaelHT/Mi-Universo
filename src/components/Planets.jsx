import { useState } from 'react'
import styles from './Planets.module.css'

const planets = [
  {
    id: 'mercury',
    name: 'Mercurio',
    emoji: '⚫',
    color: '#9ca3af',
    glow: 'rgba(156,163,175,0.4)',
    distance: '57.9M km',
    diameter: '4,879 km',
    moons: 0,
    temp: '430°C / -180°C',
    year: '88 días',
    description: 'El planeta más cercano al Sol. Carece de atmósfera real, por lo que las temperaturas oscilan drásticamente entre el día y la noche.',
    fact: 'A pesar de ser el más cercano al Sol, Mercurio no es el más caliente. Venus lo supera gracias a su denso efecto invernadero.',
    gradient: 'linear-gradient(135deg, #6b7280, #374151, #111827)',
  },
  {
    id: 'venus',
    name: 'Venus',
    emoji: '🟡',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.4)',
    distance: '108.2M km',
    diameter: '12,104 km',
    moons: 0,
    temp: '465°C',
    year: '225 días',
    description: 'El planeta más caliente del sistema solar, cubierto por nubes de ácido sulfúrico y una atmósfera espesa de CO₂.',
    fact: 'Venus rota en dirección opuesta al resto de los planetas. El Sol sale por el oeste en Venus.',
    gradient: 'linear-gradient(135deg, #fbbf24, #d97706, #92400e)',
  },
  {
    id: 'earth',
    name: 'Tierra',
    emoji: '🔵',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.4)',
    distance: '149.6M km',
    diameter: '12,742 km',
    moons: 1,
    temp: '15°C promedio',
    year: '365 días',
    description: 'Nuestro hogar. El único planeta conocido con vida, agua líquida en superficie y una atmósfera perfecta para los organismos vivos.',
    fact: 'La Tierra es el único planeta no nombrado en honor a una deidad griega o romana.',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8, #164e63)',
  },
  {
    id: 'mars',
    name: 'Marte',
    emoji: '🔴',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.4)',
    distance: '227.9M km',
    diameter: '6,779 km',
    moons: 2,
    temp: '-63°C promedio',
    year: '687 días',
    description: 'El Planeta Rojo, destino principal de la exploración espacial actual. Tiene el volcán más grande del sistema solar: el Olympus Mons.',
    fact: 'El Olympus Mons en Marte mide 21.9 km de altura, casi 3 veces el Everest.',
    gradient: 'linear-gradient(135deg, #ef4444, #b91c1c, #7f1d1d)',
  },
  {
    id: 'jupiter',
    name: 'Júpiter',
    emoji: '🟤',
    color: '#d97706',
    glow: 'rgba(217,119,6,0.4)',
    distance: '778.5M km',
    diameter: '139,820 km',
    moons: 95,
    temp: '-110°C',
    year: '12 años',
    description: 'El gigante gaseoso. Su Gran Mancha Roja es una tormenta anticíclonica que lleva más de 350 años activa.',
    fact: 'Júpiter es tan masivo que podría contener a todos los demás planetas del sistema solar combinados.',
    gradient: 'linear-gradient(135deg, #d97706, #92400e, #451a03)',
  },
  {
    id: 'saturn',
    name: 'Saturno',
    emoji: '🪐',
    color: '#eab308',
    glow: 'rgba(234,179,8,0.4)',
    distance: '1.43B km',
    diameter: '116,460 km',
    moons: 146,
    temp: '-140°C',
    year: '29 años',
    description: 'Famoso por su sistema de anillos espectaculares, compuestos de hielo y roca. Es el planeta menos denso del sistema solar.',
    fact: 'Saturno es tan ligero que flotaría en agua. Su densidad es menor que la del agua.',
    gradient: 'linear-gradient(135deg, #eab308, #a16207, #713f12)',
  },
  {
    id: 'uranus',
    name: 'Urano',
    emoji: '🩵',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.4)',
    distance: '2.87B km',
    diameter: '50,724 km',
    moons: 28,
    temp: '-195°C',
    year: '84 años',
    description: 'Un gigante de hielo único: rota de lado, con un eje inclinado a 98°. Sus temporadas duran más de 20 años cada una.',
    fact: 'Urano orbita el Sol prácticamente "acostado" de lado, posiblemente por una colisión masiva prehistórica.',
    gradient: 'linear-gradient(135deg, #22d3ee, #0e7490, #164e63)',
  },
  {
    id: 'neptune',
    name: 'Neptuno',
    emoji: '🫐',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.4)',
    distance: '4.5B km',
    diameter: '49,244 km',
    moons: 16,
    temp: '-200°C',
    year: '165 años',
    description: 'El planeta más ventoso. Sus vientos pueden alcanzar 2,100 km/h. Fue predicho matemáticamente antes de ser observado.',
    fact: 'Un año en Neptuno dura 165 años terrestres. Solo ha completado una órbita desde su descubrimiento en 1846.',
    gradient: 'linear-gradient(135deg, #6366f1, #4338ca, #1e1b4b)',
  },
]

export default function Planets() {
  const [active, setActive] = useState(null)

  const selected = active !== null ? planets[active] : null

  return (
    <section id="planetas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Sistema Solar</span>
          <h2 className={styles.sectionTitle}>Los 8 Planetas</h2>
          <p className={styles.sectionDesc}>
            Haz clic en cualquier planeta para explorar sus características, datos y curiosidades fascinantes.
          </p>
        </div>

        <div className={styles.grid}>
          {planets.map((planet, i) => (
            <button
              key={planet.id}
              id={`planet-${planet.id}`}
              className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
              onClick={() => setActive(active === i ? null : i)}
              style={{ '--glow': planet.glow, '--color': planet.color }}
              aria-expanded={active === i}
              aria-label={`Explorar ${planet.name}`}
            >
              <div className={styles.cardGlow} />
              <div
                className={styles.planetBall}
                style={{ background: planet.gradient }}
              >
                <div className={styles.planetShine} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.planetName}>{planet.name}</h3>
                <p className={styles.planetDist}>{planet.distance} del Sol</p>
                <div className={styles.moonBadge}>
                  🌙 {planet.moons} luna{planet.moons !== 1 ? 's' : ''}
                </div>
              </div>
              <div className={styles.hoverArrow}>↗</div>
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        {selected && (
          <div
            className={styles.detail}
            key={selected.id}
            style={{ '--glow': selected.glow, '--color': selected.color }}
          >
            <button
              className={styles.detailClose}
              onClick={() => setActive(null)}
              aria-label="Cerrar detalle"
            >
              ✕
            </button>

            <div className={styles.detailLeft}>
              <div
                className={styles.detailPlanet}
                style={{ background: selected.gradient }}
              >
                <div className={styles.detailShine} />
                {selected.id === 'saturn' && <div className={styles.detailRing} />}
                {selected.id === 'earth' && <div className={styles.detailClouds} />}
              </div>
            </div>

            <div className={styles.detailRight}>
              <h3 className={styles.detailName}>{selected.name}</h3>
              <p className={styles.detailDesc}>{selected.description}</p>

              <div className={styles.dataGrid}>
                {[
                  { label: 'Distancia al Sol', val: selected.distance },
                  { label: 'Diámetro', val: selected.diameter },
                  { label: 'Temperatura', val: selected.temp },
                  { label: 'Año planetario', val: selected.year },
                ].map(d => (
                  <div key={d.label} className={styles.dataItem}>
                    <span className={styles.dataLabel}>{d.label}</span>
                    <span className={styles.dataVal}>{d.val}</span>
                  </div>
                ))}
              </div>

              <div className={styles.factBox}>
                <span className={styles.factIcon}>⚡</span>
                <p className={styles.factText}>{selected.fact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
