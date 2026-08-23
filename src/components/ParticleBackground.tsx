import React, { useEffect, useRef } from "react";

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor(
        (window.innerWidth * window.innerHeight) / 15000
      );
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
    };

    const drawParticles = (moveParticles: boolean) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLightTheme = document.documentElement.dataset.theme === "light";

      particles.forEach((particle, index) => {
        if (moveParticles) {
          particle.x += particle.vx;
          particle.y += particle.vy;
        }
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isLightTheme
          ? `rgba(59, 130, 246, ${particle.opacity * 0.32})`
          : `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity =
              ((100 - distance) / 100) * (isLightTheme ? 0.14 : 0.3);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = isLightTheme
              ? `rgba(100, 116, 139, ${opacity})`
              : `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    };

    let animationFrameId = 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = () => {
      drawParticles(true);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      if (prefersReducedMotion) drawParticles(false);
    };

    const handleThemeChange = () => {
      if (prefersReducedMotion) drawParticles(false);
    };

    resizeCanvas();
    createParticles();
    if (prefersReducedMotion) {
      drawParticles(false);
    } else {
      animate();
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("portfolio-theme-change", handleThemeChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("portfolio-theme-change", handleThemeChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
