import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Inicio', 'Planetas', 'Nebulosas', 'Exploración', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} aria-label="Cosmos Explorer - Inicio">
          <span className={styles.logoIcon}>✦</span>
          <span>Cosmos Explorer</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#exploración" className={styles.cta}>
          Explorar ahora
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>
      </div>
    </nav>
  )
}
