import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

// Next total solar eclipse visible from N. America: August 12, 2026
const ECLIPSE_DATE = new Date('2026-08-12T18:00:00Z')

function getTimeLeft() {
  const now = new Date()
  const diff = ECLIPSE_DATE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Digit({ val, label }) {
  return (
    <div className={styles.digitBlock}>
      <div className={styles.digitCard}>
        <span className={styles.digit}>{String(val).padStart(2, '0')}</span>
      </div>
      <span className={styles.digitLabel}>{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="eclipse" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.tag}>Próximo evento cósmico</span>
            <h2 className={styles.title}>Eclipse Solar Total</h2>
            <p className={styles.desc}>
              El <strong>12 de agosto de 2026</strong>, la Luna oscurecerá completamente
              el Sol sobre España, Portugal, Islandia y el Atlántico Norte.
              Una vez en la vida, el cielo se apagará en pleno día.
            </p>
            <div className={styles.path}>
              <span className={styles.pathLabel}>Ruta de totalidad</span>
              <div className={styles.pathCities}>
                {['Reikiavik', 'Madrid', 'Valencia', 'Palma', 'Argel'].map(c => (
                  <span key={c} className={styles.city}>📍 {c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {/* Eclipse visual */}
            <div className={styles.eclipseViz} aria-hidden="true">
              <div className={styles.sun} />
              <div className={styles.moon} />
              <div className={styles.corona} />
              <div className={styles.corona2} />
            </div>

            {/* Countdown */}
            <div className={styles.countdown} role="timer" aria-label="Cuenta regresiva para el eclipse">
              <Digit val={time.days} label="Días" />
              <span className={styles.sep}>:</span>
              <Digit val={time.hours} label="Horas" />
              <span className={styles.sep}>:</span>
              <Digit val={time.minutes} label="Minutos" />
              <span className={styles.sep}>:</span>
              <Digit val={time.seconds} label="Segundos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
