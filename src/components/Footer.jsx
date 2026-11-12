import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoStar}>✦</span>
              <span>Cosmos Explorer</span>
            </div>
            <p className={styles.tagline}>
              Explorando el universo, un pixel a la vez.
            </p>
            <div className={styles.socials}>
              {['𝕏', '🌐', '📡', '🔭'].map((icon, i) => (
                <a key={i} href="#" className={styles.social} aria-label={`Red social ${i + 1}`}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Explorar</h4>
              <ul>
                {['Planetas', 'Nebulosas', 'Eclipses', 'Timeline'].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Recursos</h4>
              <ul>
                {['NASA', 'ESA', 'Hubble', 'James Webb'].map(l => (
                  <li key={l}><a href="#" className={styles.link}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Proyecto</h4>
              <ul>
                {['Sobre nosotros', 'Contacto', 'Privacidad', 'Créditos'].map(l => (
                  <li key={l}><a href="#" className={styles.link}>{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterText}>
            <h3>Noticias del cosmos</h3>
            <p>Recibe los últimos descubrimientos espaciales cada semana.</p>
          </div>
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className={styles.emailInput}
              id="newsletter-email"
              aria-label="Correo electrónico para newsletter"
            />
            <button type="submit" className={styles.submitBtn} id="newsletter-submit">
              Suscribirse
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Cosmos Explorer. Hecho con 🌌 y mucha curiosidad.
          </p>
          <p className={styles.byline}>
            Los datos son aproximaciones educativas.
          </p>
        </div>
      </div>
    </footer>
  )
}
