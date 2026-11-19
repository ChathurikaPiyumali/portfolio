import React, { useRef, useEffect } from 'react';

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
  color: string;
};

const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const colors = ['rgba(255, 255, 255,', 'rgba(245, 158, 11,', 'rgba(167, 139, 250,', 'rgba(6, 182, 212,'];
    const stars: Star[] = [];
    const STAR_COUNT = Math.min(Math.floor((w * h) / 3500), 450);

    for (let i = 0; i < STAR_COUNT; i++) {
      const colorPrefix = colors[Math.random() < 0.85 ? 0 : Math.floor(Math.random() * colors.length)];
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.35 + 0.1,
        color: colorPrefix,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = h;
          s.x = Math.random() * w;
        }

        s.alpha += (Math.random() - 0.5) * 0.015;
        if (s.alpha > 0.9) s.alpha = 0.9;
        if (s.alpha < 0.2) s.alpha = 0.2;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.alpha})`;
        ctx.shadowBlur = s.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle modern radial background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
};

export default StarfieldBackground;
