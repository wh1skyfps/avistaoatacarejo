import { useEffect, useRef, useState, useCallback } from "react";
import avistaoLogo from "@/assets/avistao-logo.jpg";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(0); // 0=particles, 1=logo, 2=text, 3=exit
  const animFrameRef = useRef<number>(0);

  // Particle system on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    const count = Math.min(80, Math.floor(w * h / 12000));
    const colors = ["#b91c1c", "#dc2626", "#f59e0b", "#fbbf24", "#ffffff"];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let scanY = 0;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      // Dark bg
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // Scan line
      scanY = (scanY + 1.5) % h;
      const scanGrad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      scanGrad.addColorStop(0, "transparent");
      scanGrad.addColorStop(0.5, "rgba(185,28,28,0.08)");
      scanGrad.addColorStop(1, "transparent");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 40, w, 80);

      // Radial glow center
      const glow = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.5);
      glow.addColorStop(0, "rgba(185,28,28,0.06)");
      glow.addColorStop(0.5, "rgba(245,158,11,0.03)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(185,28,28,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr2 = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr2;
      canvas.height = h * dpr2;
      ctx.scale(dpr2, dpr2);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Phase timeline
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 3200);
    const t4 = setTimeout(() => onComplete(), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        <div
          className={`transition-all duration-1000 ease-out ${
            phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative">
            <div className={`absolute inset-0 rounded-full bg-primary/30 blur-2xl transition-all duration-1000 ${phase >= 1 ? "scale-150 opacity-100" : "scale-100 opacity-0"}`} />
            <img
              src={avistaoLogo}
              alt="Avistão"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover ring-2 ring-white/20 shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className={`text-center transition-all duration-700 ease-out delay-200 ${
            phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-display font-black text-white tracking-tight">
            Avistão <span className="text-gradient">Supermercados</span>
          </h2>
          <p
            className={`text-xs md:text-sm text-white/40 mt-2 font-medium tracking-widest uppercase transition-all duration-700 delay-500 ${
              phase >= 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            Proposta Exclusiva
          </p>
        </div>

        {/* Loading bar */}
        <div
          className={`w-32 md:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden transition-opacity duration-500 ${
            phase >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all ease-out"
            style={{
              width: phase >= 2 ? "100%" : "0%",
              transitionDuration: "1800ms",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
