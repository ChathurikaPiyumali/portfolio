import React, { useRef, useEffect } from 'react'

type Star = {
  x: number
  y: number
  radius: number
  alpha: number
  speed: number
}

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let w = canvas.parentElement?.clientWidth || window.innerWidth
    let h = canvas.parentElement?.clientHeight || window.innerHeight
    canvas.width = w
    canvas.height = h

    // create stars
    const stars: Star[] = []
    const STAR_COUNT = 1000
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.5 + 0.2,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      stars.forEach(s => {
        // move
        s.y -= s.speed
        if (s.y < 0) {
          s.y = h
          s.x = Math.random() * w
        }
        // twinkle
        s.alpha += (Math.random() - 0.5) * 0.02
        s.alpha = Math.min(1, Math.max(0.2, s.alpha))

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    // handle resizing
    const onResize = () => {
      w = canvas.parentElement?.clientWidth || window.innerWidth
      h = canvas.parentElement?.clientHeight || window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default StarfieldBackground
