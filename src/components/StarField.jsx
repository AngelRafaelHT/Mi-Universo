import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const STAR_COUNT = 280
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.4 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      color: ['#ffffff', '#a5b4fc', '#93c5fd', '#f9a8d4', '#fde68a'][Math.floor(Math.random() * 5)],
    }))

    // Shooting stars
    const shootingStars = []
    const spawnShooting = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len: Math.random() * 100 + 60,
        speed: Math.random() * 8 + 6,
        alpha: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      })
    }
    const shootInterval = setInterval(spawnShooting, 3000)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Stars
      stars.forEach(s => {
        s.alpha += s.twinkleSpeed * s.twinkleDir
        if (s.alpha >= 1) { s.alpha = 1; s.twinkleDir = -1 }
        if (s.alpha <= 0.1) { s.alpha = 0.1; s.twinkleDir = 1 }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.globalAlpha = s.alpha
        ctx.fill()
        ctx.globalAlpha = 1

        // Subtle glow for bigger stars
        if (s.r > 1.3) {
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4)
          grd.addColorStop(0, s.color + '60')
          grd.addColorStop(1, 'transparent')
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }
      })

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        ss.x += Math.cos(ss.angle) * ss.speed
        ss.y += Math.sin(ss.angle) * ss.speed
        ss.alpha -= 0.015

        if (ss.alpha <= 0) { shootingStars.splice(i, 1); continue }

        const tail = {
          x: ss.x - Math.cos(ss.angle) * ss.len,
          y: ss.y - Math.sin(ss.angle) * ss.len,
        }
        const grad = ctx.createLinearGradient(tail.x, tail.y, ss.x, ss.y)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(1, `rgba(165,180,252,${ss.alpha})`)
        ctx.beginPath()
        ctx.moveTo(tail.x, tail.y)
        ctx.lineTo(ss.x, ss.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootInterval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  )
}
