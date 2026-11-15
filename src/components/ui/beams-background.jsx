import { useEffect, useRef } from "react";

const intensities = { subtle: 0.35, medium: 0.65, strong: 1 };

function createBeam(width, height) {
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: (-35 + Math.random() * 10) * Math.PI / 180,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 85 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

export function BeamsBackground({ intensity = "medium", className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !parent || !context) return;

    let width = 0;
    let height = 0;
    let beams = [];
    let animationFrame = 0;
    let previousTime = 0;
    let inView = true;
    const opacity = intensities[intensity] ?? intensities.medium;

    function drawBeam(beam) {
      context.save();
      context.translate(beam.x, beam.y);
      context.rotate(beam.angle);
      const alpha = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacity;
      const gradient = context.createLinearGradient(0, 0, 0, beam.length);
      for (const [position, strength] of [[0, 0], [0.1, 0.5], [0.4, 1], [0.6, 1], [0.9, 0.5], [1, 0]]) {
        gradient.addColorStop(position, `hsla(${beam.hue}, 55%, 54%, ${alpha * strength})`);
      }
      context.fillStyle = gradient;
      context.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      context.restore();
    }

    function draw(time) {
      animationFrame = 0;
      const step = previousTime ? Math.min((time - previousTime) / (1000 / 60), 2) : 1;
      previousTime = time;
      context.clearRect(0, 0, width, height);
      beams.forEach((beam, index) => {
        beam.y -= beam.speed * step;
        beam.pulse += beam.pulseSpeed * step;
        if (beam.y + beam.length < -100) {
          Object.assign(beam, createBeam(width, height), {
            x: ((index % 3) + 0.25 + Math.random() * 0.5) * width / 3,
            y: height + 100,
            width: 100 + Math.random() * 100,
            speed: 0.5 + Math.random() * 0.4,
            hue: 85 + index * 70 / beams.length,
          });
        }
        drawBeam(beam);
      });
      if (inView && !document.hidden) {
        animationFrame = requestAnimationFrame(draw);
      }
    }

    function restart() {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousTime = 0;
      if (inView && !document.hidden) draw(performance.now());
    }

    function resize() {
      const bounds = parent.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      beams = Array.from({ length: width < 768 ? 15 : 30 }, () => createBeam(width, height));
      restart();
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      restart();
    });
    resizeObserver.observe(parent);
    intersectionObserver.observe(parent);
    document.addEventListener("visibilitychange", restart);
    resize();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", restart);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full blur-2xl ${className}`}
    />
  );
}

export default BeamsBackground;
